import { SimplePage } from "@/components/site/PageHeader";
import AccentCard from "@/components/site/AccentCard";
import DiscordIcon from "@/components/site/DiscordIcon";
import { Linkedin, Instagram, Github, Youtube, Calendar, ArrowUpRight, Shapes } from "lucide-react";

const socials = [
  { name: "Discord", color: "blue" as const, icon: DiscordIcon, handle: "discord.gg/KapmJxs", href: "https://discord.gg/KapmJxs" },
  { name: "LinkedIn", color: "green" as const, icon: Linkedin, handle: "UAIS at UofA", href: "https://www.linkedin.com/company/undergraduate-artificial-intelligence-society/" },
  { name: "Instagram", color: "pink" as const, icon: Instagram, handle: "@uais.ualberta", href: "https://www.instagram.com/uais.ualberta/" },
  { name: "GitHub", color: "yellow" as const, icon: Github, handle: "UAIS Club", href: "https://github.com/undergraduateartificialintelligenceclub" },
  { name: "YouTube", color: "red" as const, icon: Youtube, handle: "@uais", href: "https://www.youtube.com/@uais" },
  { name: "Eventbrite", color: "orange" as const, icon: Calendar, handle: "uais.eventbrite.ca", href: "https://uais.eventbrite.ca" },
  { name: "Rubric", color: "blue" as const, icon: Shapes, handle: "UAIS on Rubric", href: "https://campus.hellorubric.com/?s=11851" },
];

const Socials = () => (
  <SimplePage
    eyebrow="Stay connected"
    title="Find us everywhere."
    description="The fastest way to plug into UAIS — pick your platform."
    accent="pink"
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {socials.map(({ icon: Icon, ...s }) => (
        <a key={s.name} href={s.href} target="_blank" rel="noreferrer">
          <AccentCard color={s.color} className="p-7 group">
            <div className="flex items-start justify-between">
              <Icon className="h-7 w-7" style={{ color: `hsl(var(--uais-${s.color}))` }} />
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold">{s.name}</h3>
            <div className="mt-1 mono text-sm text-muted-foreground">{s.handle}</div>
          </AccentCard>
        </a>
      ))}
    </div>
  </SimplePage>
);

export default Socials;
