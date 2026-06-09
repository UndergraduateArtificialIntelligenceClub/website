import { Link } from "react-router-dom";
import logo from "@/assets/uais-logo.png";
import DiscordIcon from "@/components/site/DiscordIcon";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Team", to: "/team" },
  { label: "Projects", to: "/projects" },
  { label: "Hackathons", to: "/hackathons" },
  { label: "Interviews", to: "/interviews" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Getting Started", to: "/getting-started" },
  { label: "Socials", to: "/socials" },
];

export const Footer = () => (
  <footer className="mt-32 border-t border-border">
    <div className="divider-multi" />
    <div className="container py-14 grid gap-10 md:grid-cols-3">
      <div>
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="UAIS" className="h-10 w-10" />
          <div>
            <div className="font-display font-bold">UAIS</div>
            <div className="text-xs text-muted-foreground">Undergraduate AI Society</div>
          </div>
        </Link>
        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
          Exploring the frontiers of AI at the University of Alberta. Built by students, for students.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-3 text-foreground">Quick links</h4>
        <ul className="grid grid-cols-2 gap-y-1.5 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="hover:text-foreground transition">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-3 text-foreground">Connect</h4>
        <div className="flex gap-2">
          {[
            { icon: DiscordIcon, label: "Discord", href: "https://discord.gg/KapmJxs" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/undergraduate-artificial-intelligence-society/" },
            { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/uais.ualberta/" },
            { icon: Github, label: "GitHub", href: "https://github.com/undergraduateartificialintelligenceclub" },
            { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@uais" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="h-10 w-10 grid place-items-center rounded-full border border-border hover:border-foreground/40 hover:bg-secondary transition"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">© 2026 UAIS. University of Alberta.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
