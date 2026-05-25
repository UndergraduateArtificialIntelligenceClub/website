import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/uais-logo.png";
import { cn } from "@/lib/utils";
import { hackathons, projects, interviews } from "@/data/uais";

type NavItem = { label: string; to?: string; children?: { label: string; to: string }[] };

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Team", to: "/team" },
  { label: "Presentations", to: "/presentations" },
  {
    label: "Hackathons",
    children: [
      { label: "All Hackathons", to: "/hackathons" },
      ...hackathons.map((h) => ({ label: h.name, to: `/hackathons/${h.slug}` })),
    ],
  },
  {
    label: "Projects",
    children: [
      { label: "All Projects", to: "/projects" },
      ...projects.filter(p => !p.isPast).map((p) => ({ label: p.name, to: `/projects/${p.slug}` })),
    ],
  },
  {
    label: "Interviews",
    children: [
      { label: "All Interviews", to: "/interviews" },
      ...interviews.map((i) => ({ label: i.name, to: `/interviews/${i.slug}` })),
    ],
  },
  { label: "Getting Started", to: "/getting-started" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Socials", to: "/socials" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="UAIS logo" className="h-9 w-9 transition-transform group-hover:rotate-6" />
          <span className="font-display font-bold tracking-tight text-lg">UAIS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(item.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setOpenMenu(null);
                  }
                }}
              >
                <button
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1 focus-visible:text-foreground"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {openMenu === item.label && (
                  <div
                    className="absolute right-0 top-full pt-2 min-w-48"
                    role="menu"
                  >
                    <div className="card-surface p-2 shadow-2xl max-h-96 overflow-y-auto scrollbar-minimal">
                      {item.children.map((c) => {
                        const isExternal = c.to.startsWith("http");
                        return isExternal ? (
                          <a
                            key={c.label}
                            href={c.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 text-sm rounded-lg hover:bg-secondary focus-visible:bg-secondary"
                            role="menuitem"
                          >
                            {c.label}
                          </a>
                        ) : (
                          <Link
                            key={c.label}
                            to={c.to}
                            className="block px-3 py-2 text-sm rounded-lg hover:bg-secondary focus-visible:bg-secondary"
                            onClick={() => setOpenMenu(null)}
                            role="menuitem"
                          >
                            {c.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to!}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm font-medium transition-colors focus-visible:text-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            )
          )}
          <a
            href="https://campus.hellorubric.com/?s=11851"
            target="_blank"
            rel="noreferrer"
            aria-label="Become a UAIS member on Rubric (opens in new tab)"
            className="ml-3 px-4 py-2 rounded-full text-sm font-semibold bg-foreground text-background hover:bg-foreground/90 transition focus-visible:ring-2 focus-visible:ring-uais-blue"
          >
            Become a Member
          </a>
        </nav>

        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-1">
            {NAV.map((item) =>
              item.children ? (
                <details key={item.label} className="group">
                  <summary className="list-none flex items-center justify-between py-2 cursor-pointer text-foreground/90">
                    {item.label}
                    <ChevronDown className="h-4 w-4 group-open:rotate-180 transition" />
                  </summary>
                  <div className="pl-4 flex flex-col">
                    {item.children.map((c) => {
                      const isExternal = c.to.startsWith("http");
                      return isExternal ? (
                        <a
                          key={c.label}
                          href={c.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1.5 text-sm text-muted-foreground"
                        >
                          {c.label}
                        </a>
                      ) : (
                        <Link
                          key={c.label}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="py-1.5 text-sm text-muted-foreground"
                        >
                          {c.label}
                        </Link>
                      );
                    })}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  onClick={() => setOpen(false)}
                  className="py-2 text-foreground/90"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="https://campus.hellorubric.com/?s=11851"
              target="_blank"
              rel="noreferrer"
              aria-label="Become a UAIS member on Rubric (opens in new tab)"
              className="mt-3 px-4 py-2.5 rounded-full text-sm font-semibold bg-foreground text-background text-center"
            >
              Become a member
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
