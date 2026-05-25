import { Link, useParams } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";
import { hackathons, COLORS } from "@/data/uais";
import PosterTile from "@/components/site/PosterTile";
import { ArrowLeft, Calendar, MapPin, ExternalLink, Trophy, Users, Handshake, ListChecks, Utensils } from "lucide-react";

const HackathonDetail = () => {
  const { slug } = useParams();
  const idx = hackathons.findIndex((h) => h.slug === slug);
  const h = hackathons[idx];
  if (!h) {
    return (
      <SiteLayout>
        <div className="container py-24">
          <p className="text-muted-foreground">Hackathon not found.</p>
          <Link to="/hackathons" className="text-uais-blue mt-4 inline-block">← All hackathons</Link>
        </div>
      </SiteLayout>
    );
  }
  const color = COLORS[idx % COLORS.length];
  const isUpcoming = h.status === "Upcoming";

  return (
    <SiteLayout>
      <section className="container pt-12 md:pt-16">
        <Link to="/hackathons" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All hackathons
        </Link>
        <div className="mt-8 grid lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch">
          <div className="card-surface overflow-hidden aspect-[21/9] lg:aspect-auto lg:h-[280px] min-h-[200px]">
            {h.banner ? (
              <img src={h.banner} alt={h.name} className="h-full w-full object-cover object-center" />
            ) : (
              <PosterTile color={color} label={h.name} className="h-full w-full" />
            )}
          </div>
          <div className="flex flex-col justify-center">
            <span
              className={`self-start text-xs mono uppercase tracking-widest px-2.5 py-1 rounded-full ${
                isUpcoming ? "bg-uais-green/15 text-uais-green" : "bg-secondary text-muted-foreground"
              }`}
            >
              {h.status}
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[0.95]">{h.name}</h1>
            <p className="mt-4 italic text-lg text-muted-foreground">"{h.tagline}"</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <span className="inline-flex items-center gap-1.5 text-muted-foreground"><Calendar className="h-4 w-4" />{h.date}</span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground"><MapPin className="h-4 w-4" />{h.location}</span>
            </div>
            {h.devpost && (
              <a
                href={h.devpost}
                className="mt-8 self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold bg-foreground text-background hover:bg-foreground/90 transition"
              >
                Visit DevPost <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        <div className="mt-12 divider-multi" />
      </section>

      <section className="container py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="font-display text-2xl font-bold">About</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{h.description}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold flex items-center gap-2">
              <ListChecks className="h-5 w-5" style={{ color: `hsl(var(--uais-${color}))` }} /> How it works
            </h2>
            <ol className="mt-4 grid sm:grid-cols-2 gap-3">
              {h.howItWorks.map((s, i) => (
                <li key={s.step} className="card-surface p-5">
                  <div className="flex items-baseline gap-3">
                    <span className="mono text-xs text-muted-foreground">0{i + 1}</span>
                    <h3 className="font-display font-bold" style={{ color: `hsl(var(--uais-${color}))` }}>{s.step}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold flex items-center gap-2">
              <Utensils className="h-5 w-5 text-uais-orange" /> Logistics
            </h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {h.logistics.map((l) => (
                <div key={l.label} className="rounded-xl border border-border p-5">
                  <div className="text-sm font-semibold">{l.label}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{l.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold">Schedule</h2>
            <div className="mt-4 space-y-3">
              {h.schedule.map((s) => (
                <div key={s.time} className="flex gap-4 p-4 rounded-xl bg-secondary/50">
                  <div className="w-24 shrink-0 mono text-xs uppercase tracking-widest" style={{ color: `hsl(var(--uais-${color}))` }}>
                    {s.time}
                  </div>
                  <div className="text-sm">{s.item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="card-surface p-6">
            <div className="flex items-center gap-2 text-sm font-semibold"><Trophy className="h-4 w-4 text-uais-yellow" /> Prizes</div>
            <ul className="mt-4 space-y-3">
              {h.prizes.map((p) => (
                <li key={p.place} className="border-l-2 pl-3" style={{ borderColor: `hsl(var(--uais-${color}))` }}>
                  <div className="text-sm font-semibold">{p.place}</div>
                  <div className="text-sm text-muted-foreground">{p.reward}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-6">
            <div className="flex items-center gap-2 text-sm font-semibold"><Users className="h-4 w-4 text-uais-blue" /> Organizers</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {h.organizers.map((p) => <li key={p}>• {p}</li>)}
            </ul>
          </div>
          <div className="card-surface p-6">
            <div className="flex items-center gap-2 text-sm font-semibold"><Handshake className="h-4 w-4 text-uais-pink" /> Sponsors</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {h.sponsors.map((p) => <li key={p}>• {p}</li>)}
            </ul>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
};

export default HackathonDetail;
