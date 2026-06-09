import { useState } from "react";
import { SimplePage } from "@/components/site/PageHeader";
import { COLORS, team, pastExecs } from "@/data/uais";
import InitialsAvatar from "@/components/site/Avatar";
import DiscordIcon from "@/components/site/DiscordIcon";
import { Linkedin, Github, Globe, ChevronDown, Info, Check } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Team = () => {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const copyDiscord = (slug: string, handle: string) => {
    navigator.clipboard.writeText(handle).catch(() => {});
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 1500);
    toast("Discord handle copied", { description: handle });
  };

  return (
  <SimplePage
    eyebrow="The Brains"
    title="Our Team."
    description="The students building the future of AI at the U of A."
    accent="blue"
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {team.map((m, i) => {
        const color = COLORS[i % COLORS.length];
        return (
          <Dialog key={m.slug}>
            <article
              className={`card-surface relative flex flex-col items-center text-center p-7 pt-9 overflow-hidden group h-full transition-all duration-300 hover:glow-${color}`}
              style={{ borderTop: `3px solid hsl(var(--uais-${color}))` }}
            >
              <div className="flex-1 flex flex-col items-center">
                {m.image || m.github ? (
                  <div className="relative h-[88px] w-[88px] rounded-full overflow-hidden border-2 shadow-inner" style={{ borderColor: `hsl(var(--uais-${color}))` }}>
                    <img 
                      src={m.image || `https://github.com/${m.github.split('/').pop()}.png`} 
                      alt={m.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-secondary');
                      }}
                    />
                  </div>
                ) : (
                  <InitialsAvatar name={m.name} color={color} size={88} />
                )}
                
                <h3 className="mt-5 font-display text-lg font-bold">{m.name}</h3>
                <div className="mt-1 text-xs mono uppercase tracking-widest font-semibold" style={{ color: `hsl(var(--uais-${color}))` }}>
                  {m.role}
                </div>
                
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-[4.5em]">
                  {m.bio}
                </p>
                
                <DialogTrigger asChild>
                  <button 
                    className="mt-2 text-[10px] mono uppercase tracking-wider font-bold transition-colors hover:underline" 
                    style={{ color: `hsl(var(--uais-${color}))` }}
                  >
                    Read Full Bio
                  </button>
                </DialogTrigger>
              </div>

              <div className="mt-6 flex items-center gap-2 pt-4 border-t border-border/50 w-full justify-center">
                {m.discord && (
                  <button
                    title="Copy Discord handle"
                    className="p-2 rounded-full border border-border hover:border-foreground/40 text-muted-foreground transition cursor-pointer [&:active]:scale-90 [&:active]:bg-background touch-action-manipulation"
                    onClick={() => copyDiscord(m.slug, m.discord!)}
                  >
                    {copiedSlug === m.slug ? <Check className="h-3.5 w-3.5 text-green-500" /> : <DiscordIcon className="h-3.5 w-3.5" />}
                  </button>
                )}
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-border hover:border-foreground/40 hover:text-foreground text-muted-foreground transition">
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                )}
                {m.github && (
                  <a href={m.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full border border-border hover:border-foreground/40 hover:text-foreground text-muted-foreground transition">
                    <Github className="h-3.5 w-3.5" />
                  </a>
                )}
                {m.site && (
                  <a href={m.site} target="_blank" rel="noopener noreferrer" aria-label="Personal site" className="p-2 rounded-full border border-border hover:border-foreground/40 hover:text-foreground text-muted-foreground transition">
                    <Globe className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>

            <DialogContent className="sm:max-w-[425px] card-surface border-none shadow-2xl">
              <DialogHeader className="items-center text-center">
                <div className="mb-4">
                  {m.image || m.github ? (
                    <div className="h-24 w-24 rounded-full overflow-hidden border-4" style={{ borderColor: `hsl(var(--uais-${color}))` }}>
                      <img 
                        src={m.image || `https://github.com/${m.github.split('/').pop()}.png`} 
                        alt={m.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <InitialsAvatar name={m.name} color={color} size={96} />
                  )}
                </div>
                <DialogTitle className="font-display text-2xl font-bold">{m.name}</DialogTitle>
                <DialogDescription className="mono uppercase tracking-widest text-xs font-bold" style={{ color: `hsl(var(--uais-${color}))` }}>
                  {m.role}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 text-foreground/90 leading-relaxed max-h-[40vh] overflow-y-auto pr-4 scrollbar-minimal text-sm">
                {m.bio}
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {m.discord && (
                  <button
                    className="flex items-center gap-2 text-sm font-medium text-uais-blue hover:underline [&:active]:scale-95 cursor-pointer touch-action-manipulation"
                    onClick={() => copyDiscord(m.slug, m.discord!)}
                  >
                    {copiedSlug === m.slug ? (
                      <><Check className="h-4 w-4 text-green-500" /> Copied!</>
                    ) : (
                      <><DiscordIcon className="h-4 w-4" /> {m.discord}</>
                    )}
                  </button>
                )}
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: `hsl(var(--uais-${color}))` }}>
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                )}
                {m.github && (
                  <a href={m.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: `hsl(var(--uais-${color}))` }}>
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>

    <section className="mt-24">
      <div className="flex items-end justify-between">
        <h2 className="font-display text-3xl font-bold">Past Executives</h2>
        <div className="text-xs mono uppercase tracking-widest text-muted-foreground">Hall of fame</div>
      </div>
      <div className="mt-8 space-y-3">
        {pastExecs.map((y, idx) => {
          const yearColor = COLORS[idx % COLORS.length];
          return (
            <details key={y.year} className="group card-surface overflow-hidden">
              <summary className="list-none cursor-pointer flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full" style={{ background: `hsl(var(--uais-${yearColor}))` }} />
                  <span className="font-display text-xl font-semibold">{y.year}</span>
                  <span className="text-sm text-muted-foreground">· {y.members.length} execs</span>
                </div>
                <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition" />
              </summary>
              <div className="px-5 pb-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {y.members.map((m, mIdx) => {
                  const mColor = COLORS[(idx + mIdx) % COLORS.length];
                  return (
                    <div 
                      key={m.name} 
                      className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border-l-2 transition-colors hover:bg-secondary"
                      style={{ borderLeftColor: `hsl(var(--uais-${mColor}))` }}
                    >
                      {m.image ? (
                        <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden border border-border">
                          <img 
                            src={m.image} 
                            alt={m.name}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement?.classList.add('bg-secondary');
                            }}
                          />
                        </div>
                      ) : (
                        <InitialsAvatar name={m.name} color={mColor} size={40} ring={false} />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold truncate">{m.name}</div>
                        <div className="text-[10px] mono uppercase tracking-wider text-muted-foreground truncate">{m.role}</div>
                      </div>
                      <div className="flex gap-1 shrink-0">
                        {m.discord && (
                          <button
                            title="Copy Discord handle"
                            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-background/50 [&:active]:scale-90 [&:active]:bg-background transition cursor-pointer touch-action-manipulation"
                            onClick={() => copyDiscord(m.name, m.discord!)}
                          >
                            {copiedSlug === m.name ? <Check className="h-3.5 w-3.5 text-green-500" /> : <DiscordIcon className="h-3.5 w-3.5" />}
                          </button>
                        )}
                        {m.linkedin && (
                          <a 
                            href={m.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`${m.name}'s LinkedIn`}
                            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-background/50 transition"
                          >
                            <Linkedin className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {m.github && (
                          <a 
                            href={m.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`${m.name}'s GitHub`}
                            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-background/50 transition"
                          >
                            <Github className="h-3.5 w-3.5" />
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

export default Team;
