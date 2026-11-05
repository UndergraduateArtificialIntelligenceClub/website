import { SimplePage } from "@/components/site/PageHeader";
import { COLORS, presentations, type Presentation } from "@/data/uais";
import { Play, FileText } from "lucide-react";

const sections: { era: Presentation["era"]; heading: string; blurb: string }[] = [
  {
    era: "new",
    heading: "New Presentations.",
    blurb: "Talks and workshops from our current seasons.",
  },
  {
    era: "past",
    heading: "Past Presentations.",
    blurb: "An archive of earlier UAIS talks, stretching back to the club's early days.",
  },
];

const PresentationCard = ({ p, i }: { p: Presentation; i: number }) => {
  const color = COLORS[i % COLORS.length];
  return (
    <article className="card-surface flex overflow-hidden group">
      <div className="w-1.5 shrink-0" style={{ background: `hsl(var(--uais-${color}))` }} />
      <div className="flex-1 p-6 md:p-7 grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <div className="text-xs mono uppercase tracking-widest" style={{ color: `hsl(var(--uais-${color}))` }}>
            {p.date}
            {p.tag && <span className="text-muted-foreground"> · {p.tag}</span>}
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold leading-tight">{p.title}</h3>
          {p.presenter && <div className="mt-1 text-sm text-muted-foreground">{p.presenter}</div>}
          <p className="mt-3 text-muted-foreground max-w-2xl">{p.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 md:justify-end">
          {p.recording && (
            <a
              href={p.recording}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition"
            >
              <Play className="h-4 w-4" /> Watch
            </a>
          )}
          {p.slides && (
            <a
              href={p.slides}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border hover:border-foreground/40 transition"
            >
              <FileText className="h-4 w-4" /> Slides
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const Presentations = () => (
  <SimplePage
    eyebrow="Talks & Workshops"
    title="Presentations."
    description="Slides and recordings from our weekly sessions."
    accent="yellow"
  >
    <div className="space-y-12 md:space-y-16">
      {sections.map((section) => {
        const items = presentations.map((p, i) => ({ ...p, _i: i })).filter((p) => p.era === section.era);
        return (
          <section key={section.era} aria-labelledby={`presentations-${section.era}`}>
            <div className="grid md:grid-cols-[1fr_auto] gap-2 md:gap-6 items-baseline">
              <h2 id={`presentations-${section.era}`} className="font-display text-3xl md:text-4xl font-bold">
                {section.heading}
              </h2>
              <div className="text-xs mono uppercase tracking-widest text-muted-foreground">
                {items.length} {items.length === 1 ? "talk" : "talks"}
              </div>
            </div>
            <p className="mt-2 text-muted-foreground max-w-2xl">{section.blurb}</p>
            <div className="mt-6 space-y-4">
              {items.map((p) => (
                <PresentationCard key={p.title} p={p} i={p._i} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  </SimplePage>
);

export default Presentations;
