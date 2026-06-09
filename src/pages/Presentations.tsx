import { SimplePage } from "@/components/site/PageHeader";
import { COLORS, presentations } from "@/data/uais";
import { Play, FileText } from "lucide-react";

const Presentations = () => (
  <SimplePage
    eyebrow="Talks & Workshops"
    title="Presentations."
    description="Slides and recordings from our weekly sessions."
    accent="yellow"
  >
    <div className="space-y-4">
      {presentations.map((p, i) => {
        const color = COLORS[i % COLORS.length];
        return (
          <article key={p.title} className="card-surface flex overflow-hidden group">
            <div className="w-1.5 shrink-0" style={{ background: `hsl(var(--uais-${color}))` }} />
            <div className="flex-1 p-6 md:p-7 grid md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <div className="text-xs mono uppercase tracking-widest" style={{ color: `hsl(var(--uais-${color}))` }}>
                  {p.date}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold leading-tight">{p.title}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{p.presenter}</div>
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
      })}
    </div>
  </SimplePage>
);

export default Presentations;
