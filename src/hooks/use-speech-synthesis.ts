import { useState, useEffect, useCallback, useRef } from "react";

export type SpeechState = "idle" | "speaking" | "paused";

const hasSpeech = typeof window !== "undefined" && "speechSynthesis" in window;

export function useSpeechSynthesis() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [state, setState] = useState<SpeechState>("idle");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const onEndRef = useRef<(() => void) | null>(null);
  const genRef = useRef(0);

  useEffect(() => {
    if (!hasSpeech) return;
    const load = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length) setVoices(v);
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Chrome keep-alive: detects when speech stalls mid-utterance.
  // Stops playback but does NOT advance — the user can manually skip.
  useEffect(() => {
    if (!hasSpeech || state !== "speaking") return;
    const id = setInterval(() => {
      if (!window.speechSynthesis.speaking) {
        setState("idle");
        onEndRef.current = null;
      }
    }, 500);
    return () => clearInterval(id);
  }, [state]);

  const speak = useCallback(
    (
      text: string,
      voice: SpeechSynthesisVoice | null,
      rate: number,
      pitch: number,
      onEnd?: () => void
    ) => {
      if (!hasSpeech) return;
      const gen = ++genRef.current;
      onEndRef.current = onEnd ?? null;

      window.speechSynthesis.cancel();

      setTimeout(() => {
        if (gen !== genRef.current) return;

        const utterance = new SpeechSynthesisUtterance(text);
        if (voice) utterance.voice = voice;
        utterance.rate = rate;
        utterance.pitch = pitch;
        utteranceRef.current = utterance;

        utterance.onstart = () => {
          if (gen !== genRef.current) return;
          setState("speaking");
        };
        utterance.onend = () => {
          if (gen !== genRef.current) return;
          setState("idle");
          const cb = onEndRef.current;
          onEndRef.current = null;
          cb?.();
        };
        utterance.onpause = () => {
          if (gen !== genRef.current) return;
          setState("paused");
        };
        utterance.onresume = () => {
          if (gen !== genRef.current) return;
          setState("speaking");
        };
        utterance.onerror = () => {
          // Speech failed or was canceled — stop, never auto-advance
          if (gen !== genRef.current) return;
          setState("idle");
          onEndRef.current = null;
        };

        window.speechSynthesis.speak(utterance);
      }, 50);
    },
    []
  );

  const pause = useCallback(() => {
    if (!hasSpeech) return;
    window.speechSynthesis.pause();
  }, []);

  const resume = useCallback(() => {
    if (!hasSpeech) return;
    window.speechSynthesis.resume();
  }, []);

  const cancel = useCallback(() => {
    if (!hasSpeech) return;
    genRef.current++;
    window.speechSynthesis.cancel();
    setState("idle");
    onEndRef.current = null;
  }, []);

  return { voices, state, speak, pause, resume, cancel };
}

const FEMALE_NAMES = [
  "zira", "jenny", "aria", "natasha", "samantha", "sara", "harriet",
  "libby", "claire", "heather", "catherine", "susan", "hazel",
  "aditi", "neerja",
];

const MALE_NAMES = [
  "david", "mark", "ryan", "guy", "alex", "daniel", "james",
  "richard", "george", "oliver", "tom", "alfred", "ethan",
];

const isFemale = (name: string) =>
  FEMALE_NAMES.some((n) => name.includes(n));

const isMale = (name: string) =>
  MALE_NAMES.some((n) => name.includes(n));

const LOCALES = ["en-US", "en-GB", "en-AU"] as const;

export function getCuratedVoices(
  allVoices: SpeechSynthesisVoice[]
): SpeechSynthesisVoice[] {
  const voices = [...allVoices].sort((a, b) => voiceScore(b) - voiceScore(a));
  const picked = new Set<string>();
  const result: SpeechSynthesisVoice[] = [];

  const add = (v: SpeechSynthesisVoice) => {
    if (picked.has(v.voiceURI)) return;
    picked.add(v.voiceURI);
    result.push(v);
  };

  // 1. Basic guaranteed voices (1 male, 1 female)
  const defaultVoice = voices.find((v) => v.default);
  if (defaultVoice) add(defaultVoice);

  const basicFemale = voices.find(
    (v) =>
      v.lang.startsWith("en-US") && isFemale(v.name.toLowerCase()) && !picked.has(v.voiceURI)
  );
  if (basicFemale && result.length < 8) add(basicFemale);

  // 2. Top neural voices per locale (1 male + 1 female each)
  for (const locale of LOCALES) {
    if (result.length >= 8) break;
    const localeVoices = voices.filter((v) =>
      v.lang.toLowerCase().startsWith(locale.toLowerCase())
    );
    const female = localeVoices.find(
      (v) => isFemale(v.name.toLowerCase()) && !picked.has(v.voiceURI)
    );
    if (female && result.length < 8) add(female);
    const male = localeVoices.find(
      (v) => isMale(v.name.toLowerCase()) && !picked.has(v.voiceURI)
    );
    if (male && result.length < 8) add(male);
  }

  // 3. Fill remaining with top-scored voices
  if (result.length < 8) {
    for (const v of voices) {
      if (result.length >= 8) break;
      add(v);
    }
  }

  return result;
}

function voiceScore(v: SpeechSynthesisVoice): number {
  let score = 0;
  const name = v.name.toLowerCase();
  if (name.includes("neural")) score += 100;
  if (name.includes("microsoft")) score += 20;
  if (name.includes("google")) score += 15;
  if (name.includes("natural")) score += 10;
  if (v.default) score += 5;
  if (name.includes("david") || name.includes("zira")) score += 3;
  return score;
}
