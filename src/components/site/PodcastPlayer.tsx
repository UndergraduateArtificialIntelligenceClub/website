import { useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePodcast } from "@/contexts/PodcastContext";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import type { Speaker } from "@/utils/interview-parser";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  X,
  ChevronUp,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";

const SPEEDS = [0.75, 1, 1.25, 1.5, 2];

const PodcastPlayer = () => {
  const {
    podcast,
    voiceConfig,
    setVoiceConfig,
    stopPodcast,
    setIsPlaying,
    setCurrentIndex,
  } = usePodcast();
  const { voices, state, speak, pause, resume, cancel } =
    useSpeechSynthesis();
  const location = useLocation();
  const navigate = useNavigate();
  const isInterviewPage = location.pathname.startsWith("/interviews/");

  const segments = podcast?.segments ?? [];
  const currentIndex = podcast?.currentIndex ?? 0;
  const isPlaying = podcast?.isPlaying ?? false;
  const currentSegment = segments[currentIndex];

  /* ── Refs so callbacks never see stale values ── */
  const segmentsRef = useRef(segments);
  segmentsRef.current = segments;
  const indexRef = useRef(currentIndex);
  indexRef.current = currentIndex;
  const playingRef = useRef(isPlaying);
  playingRef.current = isPlaying;
  const vcRef = useRef(voiceConfig);
  vcRef.current = voiceConfig;
  const voicesRef = useRef(voices);
  voicesRef.current = voices;

  const findVoice = useCallback((speaker: Speaker) => {
    const vc = vcRef.current;
    const uri =
      speaker === "questioner" ? vc.questionerVoiceURI : vc.answererVoiceURI;
    if (!uri) return null;
    return voicesRef.current.find((v) => v.voiceURI === uri) ?? null;
  }, []);

  /* ── Play a specific segment index ── */
  const playSegment = useCallback(
    (idx: number) => {
      const seg = segmentsRef.current[idx];
      if (!seg) return;
      const voice = findVoice(seg.speaker);
      const vc = vcRef.current;
      speak(seg.content, voice, vc.rate, vc.pitch, () => {
        // This onEnd reads refs, never stale
        const next = indexRef.current + 1;
        if (next < segmentsRef.current.length) {
          // Don't set isPlaying — it's already true. Just advance index.
          setCurrentIndex(next);
        } else {
          setIsPlaying(false);
        }
      });
    },
    [speak, findVoice, setCurrentIndex, setIsPlaying]
  );

  /* ── Effect: index changed while playing → speak new segment ── */
  const prevIndex = useRef(-1);
  useEffect(() => {
    if (!podcast) return;
    if (!isPlaying) return;
    if (prevIndex.current === currentIndex) return;
    prevIndex.current = currentIndex;

    if (currentIndex >= 0 && currentIndex < segments.length) {
      playSegment(currentIndex);
    } else {
      setIsPlaying(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  /* ── Effect: play-state toggled → pause / resume / start ── */
  const wasPlaying = useRef(false);
  useEffect(() => {
    if (!podcast) return;
    if (isPlaying && !wasPlaying.current) {
      if (state === "paused") {
        resume();
      } else if (state === "idle" && currentSegment) {
        playSegment(currentIndex);
      }
    } else if (!isPlaying && wasPlaying.current) {
      if (state === "speaking") {
        pause();
      }
    }
    wasPlaying.current = isPlaying;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  /* ── Effect: voice/speed/pitch changed mid-playback ── */
  const prevKey = useRef("");
  useEffect(() => {
    if (!podcast) return;
    const key = `${voiceConfig.questionerVoiceURI}|${voiceConfig.answererVoiceURI}|${voiceConfig.rate}|${voiceConfig.pitch}`;
    if (prevKey.current && prevKey.current !== key) {
      cancel();
      if (isPlaying) {
        playSegment(currentIndex);
      }
    }
    prevKey.current = key;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voiceConfig]);

  /* ── Cleanup ── */
  useEffect(() => {
    if (!podcast) return;
    return () => cancel();
  }, [podcast, cancel]);

  /* ── Speed cycle ── */
  const cycleSpeed = () => {
    const idx = SPEEDS.indexOf(voiceConfig.rate);
    const next = SPEEDS[(idx + 1) % SPEEDS.length];
    setVoiceConfig({ ...voiceConfig, rate: next });
  };

  /* ── Seek ── */
  const handleSeek = (value: number[]) => {
    cancel();
    const idx = Math.round((value[0] / 100) * (segments.length - 1));
    if (idx >= 0 && idx < segments.length) {
      setCurrentIndex(idx);
    }
  };

  const progressPercent =
    segments.length > 1
      ? (currentIndex / (segments.length - 1)) * 100
      : 0;

  if (!podcast) return null;

  /* ── Handlers ── */
  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      if (state === "paused") {
        resume();
        setIsPlaying(true);
      } else {
        // state === "idle" — start fresh
        setIsPlaying(true);
        // isPlaying becomes true → effect triggers playSegment
      }
    }
  };

  const handleSkipNext = () => {
    cancel();
    const next = Math.min(currentIndex + 1, segments.length - 1);
    setCurrentIndex(next);
    // isPlaying stays, effect triggers playSegment for the new index
  };

  const handleSkipPrev = () => {
    cancel();
    const prev = Math.max(currentIndex - 1, 0);
    setCurrentIndex(prev);
  };

  const handleClose = () => {
    cancel();
    stopPodcast();
  };

  const navToInterview = () => {
    if (!isInterviewPage) {
      navigate(`/interviews/${podcast.interviewSlug}`);
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-xl transition-all ${
        isInterviewPage ? "" : "cursor-pointer"
      }`}
      onClick={isInterviewPage ? undefined : navToInterview}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="shrink-0 h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Close player"
          >
            <X className="h-3.5 w-3.5" />
          </button>

          <div className="min-w-0 flex-1 md:flex-none md:w-56">
            <div className="text-xs font-medium truncate">
              {podcast.intervieweeName}
            </div>
            <div className="text-xs text-muted-foreground truncate">
              {currentSegment
                ? `${currentSegment.speakerName}: ${currentSegment.content.slice(0, 50)}...`
                : ""}
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSkipPrev();
              }}
              disabled={currentIndex <= 0}
              className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
              aria-label="Previous segment"
            >
              <SkipBack className="h-4 w-4" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePlayPause();
              }}
              className="h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5 ml-0.5" />
              )}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSkipNext();
              }}
              disabled={currentIndex >= segments.length - 1}
              className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
              aria-label="Next segment"
            >
              <SkipForward className="h-4 w-4" />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3 flex-1 max-w-xs">
            <Slider
              value={[progressPercent]}
              onValueChange={handleSeek}
              min={0}
              max={100}
              step={1}
              className="cursor-pointer"
            />
            <span className="text-xs text-muted-foreground tabular-nums shrink-0 w-12">
              {currentIndex + 1}/{segments.length}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              cycleSpeed();
            }}
            className="shrink-0 text-xs mono font-bold px-2 py-1 rounded-md border border-border hover:bg-secondary transition-colors"
          >
            {voiceConfig.rate}x
          </button>

          {!isInterviewPage && (
            <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
          )}
        </div>

        <div className="md:hidden mt-2">
          <Slider
            value={[progressPercent]}
            onValueChange={handleSeek}
            min={0}
            max={100}
            step={1}
            className="cursor-pointer"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-muted-foreground tabular-nums">
              {currentIndex + 1}/{segments.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPlayer;
