import { SimplePage } from "@/components/site/PageHeader";
import { sponsorTiers } from "@/data/sponsors";
import { Linkedin, ExternalLink } from "lucide-react";

const Sponsors = () => (
  <SimplePage
    eyebrow="Made possible by"
    title="Sponsors."
    description="The organizations that fuel hackathons, talks, and projects across UAIS."
    accent="red"
  >
    <div className="space-y-16">
      {sponsorTiers.map((t) => (
        <div key={t.name}>
          <div className="flex items-center gap-3 mb-8">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: `hsl(var(--uais-${t.color}))` }}
            />
            <h2 className="font-display text-2xl font-bold tracking-tight">{t.name}</h2>
            <div className="flex-1 h-px bg-border/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.sponsors.map((s) => (
              <div
                key={s.name}
                className="card-surface p-8 flex flex-col h-full hover:border-foreground/20 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
                  <div className="h-32 w-32 shrink-0 rounded-2xl bg-white/5 p-6 flex items-center justify-center border border-border/50 group-hover:border-foreground/10 transition-colors">
                    {s.logo ? (
                      <img src={s.logo} alt={`${s.name} logo`} className="max-h-full max-w-full object-contain transition-all duration-500" />
                    ) : (
                      <span className="font-display font-bold text-muted-foreground">{s.name}</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {s.linkedin && (
                      <a href={s.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:border-foreground/40 text-muted-foreground hover:text-foreground transition">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {s.website && (
                      <a href={s.website} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:border-foreground/40 text-muted-foreground hover:text-foreground transition">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{s.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-20 card-surface p-8 md:p-10">
      <h3 className="font-display text-2xl font-bold">Become a sponsor</h3>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        Reach hundreds of UAlberta students passionate about AI. We offer custom
        partnership packages spanning hackathons, recruiting events, and workshops.
      </p>
      <a
        href="mailto:sponsors@uais.ca"
        className="mt-6 inline-block px-5 py-2.5 rounded-full bg-foreground text-background font-semibold"
      >
        sponsors@uais.ca
      </a>
    </div>
  </SimplePage>
);

export default Sponsors;
