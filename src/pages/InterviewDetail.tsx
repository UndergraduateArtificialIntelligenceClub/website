import { Link, useParams } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";
import { interviews } from "@/data/uais";
import InitialsAvatar from "@/components/site/Avatar";
import VoiceSelector from "@/components/site/VoiceSelector";
import { ArrowLeft, Headphones, Settings2 } from "lucide-react";
import { usePodcast } from "@/contexts/PodcastContext";
import { parseInterviewSegments } from "@/utils/interview-parser";
import { useState, useRef } from "react";

const InterviewDetail = () => {
  const { slug } = useParams();
  const i = interviews.find((x) => x.slug === slug);
  const { podcast, startPodcast, stopPodcast } = usePodcast();
  const [showVoiceSettings, setShowVoiceSettings] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);

  if (!i) {
    return (
      <SiteLayout>
        <div className="container py-24">
          <p className="text-muted-foreground">Interview not found.</p>
          <Link to="/interviews" className="text-uais-blue mt-4 inline-block">← All interviews</Link>
        </div>
      </SiteLayout>
    );
  }

  const segments = parseInterviewSegments(i.fullContent, i.name);

  const podcastActive = podcast?.interviewSlug === slug;
  const currentActiveIndex = podcastActive ? podcast.currentIndex : -1;

  const handleListen = () => {
    if (podcast?.interviewSlug === slug) {
      setShowVoiceSettings(!showVoiceSettings);
      return;
    }
    startPodcast({
      segments,
      intervieweeName: i.name,
      interviewSlug: i.slug,
      interviewColor: i.color,
      questionerName: "Interviewer",
    });
    setShowVoiceSettings(false);
  };

  const handleStop = () => {
    stopPodcast();
  };

  const colorHsl = `hsl(var(--uais-${i.color}))`;

  return (
    <SiteLayout>
      <section className="container pt-12 md:pt-16">
        <Link to="/interviews" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All interviews
        </Link>
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <InitialsAvatar name={i.name} color={i.color} size={120} />
          <div>
            <div className="text-xs mono uppercase tracking-widest" style={{ color: colorHsl }}>
              Interview
            </div>
            <h1 className="mt-2 font-display text-4xl md:text-6xl font-bold leading-[0.95]">{i.name}</h1>
            <div className="mt-2 text-lg text-muted-foreground">{i.title}</div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={handleListen}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
            style={{ backgroundColor: colorHsl, color: "white" }}
          >
            <Headphones className="h-4 w-4" />
            {podcast?.interviewSlug === slug ? "Voice Settings" : "Listen"}
          </button>

          {podcast?.interviewSlug === slug && (
            <button
              onClick={handleStop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border border-border hover:bg-secondary transition-all"
            >
              Stop
            </button>
          )}

          <button
            onClick={() => setShowVoiceSettings(!showVoiceSettings)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm border border-border hover:bg-secondary transition-all"
          >
            <Settings2 className="h-4 w-4" />
            Voices
          </button>
        </div>

        {showVoiceSettings && (
          <div className="mt-6 p-6 rounded-2xl border border-border bg-card max-w-2xl">
            <h3 className="font-display text-lg font-bold mb-4">Voice Settings</h3>
            <VoiceSelector />
          </div>
        )}

        <p className="mt-8 text-lg text-muted-foreground max-w-3xl italic">&ldquo;{i.teaser}&rdquo;</p>

        <div className="mt-8 max-w-3xl">
          <p className="text-muted-foreground leading-relaxed">
            {i.bio}
          </p>
        </div>

        {i.pdf && (
          <a
            href={i.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
            style={{ backgroundColor: colorHsl, color: "white" }}
          >
            Download Full Interview (PDF)
          </a>
        )}

        <div className="mt-10 divider-multi" />
      </section>

      <section className="container py-16 max-w-3xl mx-auto" ref={transcriptRef}>
        <div className="space-y-12">
          {segments.map((seg, idx) => {
            const isActiveSegment = idx === currentActiveIndex;
            const dimmed = podcastActive && !isActiveSegment;

            const renderInline = (text: string) => {
              const subparts = text.split(/(\*\*.*?\*\*)/g);
              return subparts.map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <strong key={i} className="font-bold text-foreground">
                      {part.slice(2, -2)}
                    </strong>
                  );
                }
                return part;
              });
            };

            const isPrompt = seg.type === "prompt";
            const activeBar = isActiveSegment ? "opacity-100 scale-y-110" : dimmed ? "opacity-20" : "opacity-40";

            return (
              <div
                key={idx}
                className={`relative pl-6 transition-all duration-500 ${
                  dimmed ? "opacity-60" : "opacity-100"
                }`}
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-700 ${activeBar}`}
                  style={{
                    backgroundColor: colorHsl,
                    boxShadow: isActiveSegment ? `0 0 14px ${colorHsl}` : undefined,
                  }}
                />
                <div className="space-y-3">
                  {!isPrompt && (
                    <div className="text-xs mono uppercase tracking-widest" style={{ color: colorHsl }}>
                      {seg.speakerName}
                    </div>
                  )}
                  {isPrompt ? (
                    <h3
                      className={`font-display text-xl md:text-2xl font-bold leading-tight transition-all duration-500 ${
                        dimmed ? "text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {renderInline(seg.content)}
                    </h3>
                  ) : (
                    seg.content.split("\n").map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className={`text-lg leading-relaxed transition-all duration-500 ${
                          dimmed ? "text-muted-foreground" : "text-foreground"
                        }`}
                      >
                        {renderInline(para)}
                      </p>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center border-t border-border pt-16">
          <Link to="/interviews" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-secondary transition-colors text-sm font-semibold">
            <ArrowLeft className="h-4 w-4" /> Back to all interviews
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default InterviewDetail;
