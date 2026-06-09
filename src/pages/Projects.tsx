import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SimplePage } from "@/components/site/PageHeader";
import { projects, pastProjects, COLORS } from "@/data/uais";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, ArrowRight, ChevronDown } from "lucide-react";

const TAGS = ["All", "LLMs", "NLP", "CV", "RL", "Healthcare", "Applied", "AI for Good"];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const currentProjects = useMemo(() => projects.filter(p => !p.isPast), []);
  const filtered = useMemo(
    () => (tag === "All" ? currentProjects : currentProjects.filter((p) => p.tag === tag)),
    [tag, currentProjects]
  );

  return (
    <SimplePage
      eyebrow="Built by students"
      title="Projects."
      description="A growing portfolio of student-built AI — from research-grade to wonderfully weird."
      accent="blue"
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm border transition",
              tag === t
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-5">
        {filtered.map((p) => (
          <article
            key={p.slug}
            className="card-surface overflow-hidden grid md:grid-cols-[280px_1fr]"
          >
            <div
              className="relative min-h-[180px] grid place-items-center overflow-hidden"
              style={{
                background: `linear-gradient(135deg, hsl(var(--uais-${p.color}) / 0.35), hsl(var(--uais-${p.color}) / 0.05))`,
              }}
            >
              <div
                className="font-display font-black text-5xl"
                style={{ color: `hsl(var(--uais-${p.color}))` }}
              >
                {p.name.split(" ").map((w) => w[0]).slice(0, 3).join("")}
              </div>
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: "radial-gradient(circle at 70% 30%, hsl(0 0% 100% / 0.2), transparent 50%)",
              }} />
            </div>
            <div className="p-6 flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                {p.difficulty && (
                  <span className="text-[10px] mono uppercase tracking-widest px-2 py-1 rounded bg-secondary border border-border">
                    {p.difficulty.split(" ")[0]}
                  </span>
                )}
              </div>
              <div className="mt-1 text-sm font-medium" style={{ color: `hsl(var(--uais-${p.color}))` }}>
                {p.tagline}
              </div>
              <p className="mt-3 text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="px-2.5 py-0.5 text-xs rounded-full bg-secondary text-muted-foreground border border-border">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link to={`/projects/${p.slug}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition">
                  View Details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                {p.source && (
                  <a href={p.source} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border hover:border-foreground/40 transition">
                    <Github className="h-4 w-4" /> Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-24">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold">Past Projects</h2>
          <div className="text-xs mono uppercase tracking-widest text-muted-foreground">Archive</div>
        </div>
        <div className="mt-8 space-y-3">
          {pastProjects.map((y, idx) => {
            const color = COLORS[idx % COLORS.length];
            return (
              <details key={y.year} className="group card-surface overflow-hidden">
                <summary className="list-none cursor-pointer flex items-center justify-between p-5">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full" style={{ background: `hsl(var(--uais-${color}))` }} />
                    <span className="font-display text-xl font-semibold">{y.year}</span>
                    <span className="text-sm text-muted-foreground">· {y.items.length} projects</span>
                  </div>
                  <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition" />
                </summary>
                <div className="px-5 pb-5 space-y-2">
                  {y.items.map((it) => {
                    const projectSlug = it.name.toLowerCase().replace(/ /g, "-").replace(/[()]/g, "");
                    const exists = projects.find(p => p.slug === projectSlug);
                    
                    return (
                      <div key={it.name} className="flex items-center justify-between gap-4 p-3 rounded-xl bg-secondary/50 group/item">
                        <div>
                          <div className="text-sm font-medium">{it.name}</div>
                          <div className="text-xs text-muted-foreground">{it.tagline}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          {exists && (
                            <Link to={`/projects/${projectSlug}`} className="p-2 rounded-lg hover:bg-foreground/10 transition" title="View Case Study">
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          )}
                          {it.source && (
                            <a href={it.source} className="p-2 rounded-lg text-muted-foreground hover:text-foreground" aria-label="Source">
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </div>
      </section>
    </SimplePage>
  );
};

export default Projects;
