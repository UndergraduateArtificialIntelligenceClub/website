import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import type { InterviewSegment } from "@/utils/interview-parser";

export type VoiceConfig = {
  questionerVoiceURI: string;
  answererVoiceURI: string;
  rate: number;
  pitch: number;
};

export type PodcastState = {
  segments: InterviewSegment[];
  currentIndex: number;
  isPlaying: boolean;
  intervieweeName: string;
  interviewSlug: string;
  interviewColor: string;
  questionerName: string;
};

type PodcastContextType = {
  voiceConfig: VoiceConfig;
  setVoiceConfig: (config: VoiceConfig) => void;
  podcast: PodcastState | null;
  startPodcast: (state: Omit<PodcastState, "currentIndex" | "isPlaying">) => void;
  stopPodcast: () => void;
  setCurrentIndex: (index: number) => void;
  setIsPlaying: (playing: boolean) => void;
  goToNext: () => void;
  goToPrev: () => void;
};

const defaultVoiceConfig: VoiceConfig = {
  questionerVoiceURI: "",
  answererVoiceURI: "",
  rate: 1,
  pitch: 1,
};

const PodcastContext = createContext<PodcastContextType | null>(null);

export function PodcastProvider({ children }: { children: ReactNode }) {
  const [voiceConfig, setVoiceConfig] = useState<VoiceConfig>(() => {
    try {
      const saved = localStorage.getItem("uais-podcast-voices");
      return saved ? JSON.parse(saved) : defaultVoiceConfig;
    } catch {
      return defaultVoiceConfig;
    }
  });

  const [podcast, setPodcast] = useState<PodcastState | null>(null);
  const podcastRef = useRef(podcast);
  podcastRef.current = podcast;

  useEffect(() => {
    localStorage.setItem("uais-podcast-voices", JSON.stringify(voiceConfig));
  }, [voiceConfig]);

  useEffect(() => {
    const handle = (e: BeforeUnloadEvent) => {
      if (podcastRef.current?.isPlaying) {
        e.preventDefault();
      }
    };
    window.addEventListener("beforeunload", handle);
    return () => window.removeEventListener("beforeunload", handle);
  }, []);

  const startPodcast = useCallback(
    (state: Omit<PodcastState, "currentIndex" | "isPlaying">) => {
      setPodcast({ ...state, currentIndex: 0, isPlaying: true });
    },
    []
  );

  const stopPodcast = useCallback(() => {
    setPodcast(null);
  }, []);

  const setCurrentIndex = useCallback((index: number) => {
    setPodcast((p) => (p ? { ...p, currentIndex: index } : p));
  }, []);

  const setIsPlaying = useCallback((playing: boolean) => {
    setPodcast((p) => (p ? { ...p, isPlaying: playing } : p));
  }, []);

  const goToNext = useCallback(() => {
    setPodcast((p) => {
      if (!p || p.currentIndex >= p.segments.length - 1) return p;
      return { ...p, currentIndex: p.currentIndex + 1, isPlaying: true };
    });
  }, []);

  const goToPrev = useCallback(() => {
    setPodcast((p) => {
      if (!p || p.currentIndex <= 0) return p;
      return { ...p, currentIndex: p.currentIndex - 1, isPlaying: true };
    });
  }, []);

  return (
    <PodcastContext.Provider
      value={{
        voiceConfig,
        setVoiceConfig,
        podcast,
        startPodcast,
        stopPodcast,
        setCurrentIndex,
        setIsPlaying,
        goToNext,
        goToPrev,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
}

export function usePodcast() {
  const ctx = useContext(PodcastContext);
  if (!ctx) throw new Error("usePodcast must be used within PodcastProvider");
  return ctx;
}
