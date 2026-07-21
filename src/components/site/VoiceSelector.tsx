import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { usePodcast } from "@/contexts/PodcastContext";
import { getCuratedVoices } from "@/hooks/use-speech-synthesis";
import { Volume2 } from "lucide-react";

const shortName = (v: SpeechSynthesisVoice) => {
  let name = v.name;
  for (const prefix of ["Microsoft ", "Google "]) {
    if (name.startsWith(prefix)) name = name.slice(prefix.length);
  }
  return name;
};

const VoiceSelector = () => {
  const { voiceConfig, setVoiceConfig } = usePodcast();
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const load = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length) setAvailableVoices(getCuratedVoices(v));
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const questionerVoice = availableVoices.find(
    (v) => v.voiceURI === voiceConfig.questionerVoiceURI
  );
  const answererVoice = availableVoices.find(
    (v) => v.voiceURI === voiceConfig.answererVoiceURI
  );

  const testVoice = (voice: SpeechSynthesisVoice | undefined) => {
    if (!voice) return;
    const u = new SpeechSynthesisUtterance(
      "Hello, this is a sample of my voice."
    );
    u.voice = voice;
    u.rate = voiceConfig.rate;
    u.pitch = voiceConfig.pitch;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs mono uppercase tracking-widest text-muted-foreground">
            Interviewer Voice
          </label>
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <Select
              value={voiceConfig.questionerVoiceURI}
              onValueChange={(val) =>
                setVoiceConfig({ ...voiceConfig, questionerVoiceURI: val })
              }
            >
              <SelectTrigger className="w-full min-w-0">
                <SelectValue placeholder="Choose a voice" />
              </SelectTrigger>
              <SelectContent className="max-h-60">
                {availableVoices.map((v) => (
                  <SelectItem key={v.voiceURI} value={v.voiceURI} className="whitespace-normal pr-8">
                    <span className="inline-flex items-center gap-2 w-full">
                      <span className="truncate min-w-0">{shortName(v)}</span>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {v.lang.replace("en-", "").toUpperCase()}
                      </span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <button
              onClick={() => testVoice(questionerVoice)}
              className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Test interviewer voice"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs mono uppercase tracking-widest text-muted-foreground">
            Interviewee Voice
          </label>
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <Select
              value={voiceConfig.answererVoiceURI}
              onValueChange={(val) =>
                setVoiceConfig({ ...voiceConfig, answererVoiceURI: val })
              }
            >
              <SelectTrigger className="w-full min-w-0">
                <SelectValue placeholder="Choose a voice" />
              </SelectTrigger>
              <SelectContent className="max-h-60">
                {availableVoices.map((v) => (
                  <SelectItem key={v.voiceURI} value={v.voiceURI} className="whitespace-normal pr-8">
                    <span className="inline-flex items-center gap-2 w-full">
                      <span className="truncate min-w-0">{shortName(v)}</span>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {v.lang.replace("en-", "").toUpperCase()}
                      </span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <button
              onClick={() => testVoice(answererVoice)}
              className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Test interviewee voice"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs mono uppercase tracking-widest text-muted-foreground">
            Speed: {voiceConfig.rate.toFixed(1)}x
          </label>
          <Slider
            value={[voiceConfig.rate]}
            min={0.5}
            max={2}
            step={0.1}
            onValueChange={([val]) =>
              setVoiceConfig({ ...voiceConfig, rate: val })
            }
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs mono uppercase tracking-widest text-muted-foreground">
            Pitch: {voiceConfig.pitch.toFixed(1)}
          </label>
          <Slider
            value={[voiceConfig.pitch]}
            min={0.5}
            max={1.5}
            step={0.1}
            onValueChange={([val]) =>
              setVoiceConfig({ ...voiceConfig, pitch: val })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default VoiceSelector;
