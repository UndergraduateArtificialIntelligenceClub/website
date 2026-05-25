import { Link } from "react-router-dom";
import { SimplePage } from "@/components/site/PageHeader";
import { interviews, pastInterviews, COLORS } from "@/data/uais";
import InitialsAvatar from "@/components/site/Avatar";
import { ArrowRight, ChevronDown } from "lucide-react";

const Interviews = () => (
  <SimplePage
    eyebrow="Conversations"
    title="Interviews."
    description="Researchers, founders, and alumni — in their own words."
    accent="pink"
  >
    <div className="grid md:grid-cols-2 gap-5">
      {interviews.map((i) => (
        <article key={i.slug} className="card-surface p-6 flex gap-5 items-center">
          <InitialsAvatar name={i.name} color={i.color} size={88} />
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl font-bold leading-tight">{i.name}</h3>
            <div className="mt-0.5 text-sm" style={{ color: `hsl(var(--uais-${i.color}))` }}>{i.title}</div>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{i.teaser}</p>
            <Link
              to={`/interviews/${i.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:underline"
              style={{ color: `hsl(var(--uais-${i.color}))` }}
            >
              Read Interview <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </article>
      ))}
    </div>

    <section className="mt-24">
      <div className="flex items-end justify-between">
        <h2 className="font-display text-3xl font-bold">Past Interviews</h2>
        <div className="text-xs mono uppercase tracking-widest text-muted-foreground">Archive</div>
      </div>
      <div className="mt-8 space-y-3">
        {pastInterviews.map((y, idx) => {
          const color = COLORS[idx % COLORS.length];
          return (
            <details key={y.year} className="group card-surface overflow-hidden">
              <summary className="list-none cursor-pointer flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full" style={{ background: `hsl(var(--uais-${color}))` }} />
                  <span className="font-display text-xl font-semibold">{y.year}</span>
                  <span className="text-sm text-muted-foreground">· {y.items.length} interviews</span>
                </div>
                <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition" />
              </summary>
              <div className="px-5 pb-5 grid sm:grid-cols-2 gap-3">
                {y.items.map((it) => (
                  <div key={it.name} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                    <InitialsAvatar name={it.name} color={color} size={36} ring={false} />
                    <div>
                      <div className="text-sm font-medium">{it.name}</div>
                      <div className="text-xs text-muted-foreground">{it.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  </SimplePage>
);

export default Interviews;
