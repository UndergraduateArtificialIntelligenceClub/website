import { useMemo } from "react";
import { Link } from "react-router-dom";
import { SimplePage } from "@/components/site/PageHeader";
import { interviews } from "@/data/uais";
import InitialsAvatar from "@/components/site/Avatar";
import { ArrowRight } from "lucide-react";

const card = (i: (typeof interviews)[number]) => (
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
);

const Interviews = () => {
  const latest = useMemo(() => interviews.filter((i) => i.category === "latest"), []);
  const past = useMemo(() => interviews.filter((i) => i.category !== "latest"), []);

  return (
    <SimplePage
      eyebrow="Conversations"
      title="Interviews."
      description="Researchers, founders, and alumni — in their own words."
      accent="pink"
    >
      {latest.length > 0 && (
        <section>
          <h2 className="font-display text-3xl font-bold">Latest Interviews</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {latest.map(card)}
          </div>
        </section>
      )}

      {past.length > 0 && (
        <section className={latest.length > 0 ? "mt-24" : ""}>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-bold">Past Interviews</h2>
            <div className="text-xs mono uppercase tracking-widest text-muted-foreground">Archive</div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {past.map(card)}
          </div>
        </section>
      )}
    </SimplePage>
  );
};

export default Interviews;
