import { Link, NavLink } from "react-router-dom";
import { useState, useRef, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Users, Mic, Handshake, Share2, Presentation, BookOpen, Compass, Trophy, FolderKanban, Boxes, House } from "lucide-react";
import logo from "@/assets/uais-logo.png";
import { cn } from "@/lib/utils";
import { hackathons, projects, type Color } from "@/data/uais";

type NavLeaf = {
  label: string;
  to: string;
  icon: React.ElementType;
  description: string;
};

type NavColumn = { title?: string; items: NavLeaf[] };

type NavItem = {
  label: string;
  columns: NavColumn[];
};

const ABOUT_ITEMS: NavLeaf[] = [
  { label: "Home", to: "/", icon: House, description: "Back to the UAIS homepage" },
  { label: "Team", to: "/team", icon: Users, description: "Meet the executive team" },
  { label: "Socials", to: "/socials", icon: Share2, description: "Find us online" },
];

const LEARN_ITEMS: NavLeaf[] = [
  { label: "Presentations", to: "/presentations", icon: Presentation, description: "Slides & recordings from weekly talks" },
  { label: "Interviews", to: "/interviews", icon: Mic, description: "Conversations with researchers & industry" },
  { label: "Getting Started", to: "/getting-started", icon: Compass, description: "New to UAIS? Start here" },
  { label: "Resources", to: "/resources", icon: BookOpen, description: "Guides, tools, and learning paths" },
];

const NAV: NavItem[] = [
  {
    label: "About Us",
    columns: [
      { items: ABOUT_ITEMS },
    ],
  },
  {
    label: "Learn",
    columns: [
      { items: LEARN_ITEMS },
    ],
  },
  {
    label: "What We Do",
    columns: [
      {
        title: "Projects",
        items: [
          { label: "All Projects", to: "/projects", icon: FolderKanban, description: "Everything we're building" },
          ...projects
            .filter((p) => !p.isPast)
            .map((p) => ({ label: p.name, to: `/projects/${p.slug}`, icon: Boxes, description: p.tagline })),
        ],
      },
      {
        title: "Hackathons",
        items: [
          { label: "All Hackathons", to: "/hackathons", icon: Trophy, description: "Every hackathon we've run" },
          ...hackathons.map((h) => ({ label: h.name, to: `/hackathons/${h.slug}`, icon: Trophy, description: h.tagline })),
        ],
      },
    ],
  },
];

// Shown when the pointer rests on the general navbar: every main tab with its
// sub-options only (no deeper children — those appear under the specific tabs).
const OVERVIEW_LABEL = "Overview";
const OVERVIEW_MENU: NavItem = {
  label: OVERVIEW_LABEL,
  columns: [
    { title: "About Us", items: ABOUT_ITEMS },
    { title: "Learn", items: LEARN_ITEMS },
    {
      title: "What We Do",
      items: [
        { label: "All Projects", to: "/projects", icon: FolderKanban, description: "Everything we're building" },
        { label: "All Hackathons", to: "/hackathons", icon: Trophy, description: "Every hackathon we've run" },
      ],
    },
  ],
};

const CTA = { label: "Become a Member", href: "https://campus.hellorubric.com/?s=11851" };

// Highlight accent per top-level tab, in order: pink, blue, yellow.
const TAB_COLORS: Color[] = ["pink", "blue", "yellow"];

const LeafRow = ({ leaf, onNavigate }: { leaf: NavLeaf; onNavigate?: () => void }) => {
  const Icon = leaf.icon;
  return (
    <li className="list-none">
      <NavLink
        to={leaf.to}
        end={leaf.to === "/"}
        title={leaf.description ? `${leaf.label} — ${leaf.description}` : leaf.label}
        className={({ isActive }) =>
          cn(
            "group flex h-9 w-full items-center gap-2.5 rounded-xl px-2.5 hover:bg-secondary/80 transition-colors",
            isActive && "bg-secondary/60"
          )
        }
        onClick={onNavigate}
      >
        <span className="shrink-0 rounded-md border border-border p-1 grid place-items-center group-hover:border-foreground/30 transition-colors">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span className="min-w-0 text-sm font-medium truncate">{leaf.label}</span>
      </NavLink>
    </li>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const headerRef = useRef<HTMLElement>(null);

  const cancelClose = () => {
    if (closeTimer.current !== undefined) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = undefined;
    }
  };

  // Grace period so moving the pointer from the button into the extended bar
  // doesn't close the menu.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      setOpenMenu(null);
      setHoveredItem(null);
    }, 150);
  };

  const openItem = openMenu === OVERVIEW_LABEL ? OVERVIEW_MENU : NAV.find((i) => i.label === openMenu);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div
        className="container flex items-center justify-between h-16"
        onMouseEnter={() => {
          // Hovering the general bar (not a specific tab) opens the overview:
          // every main tab with its direct sub-options.
          cancelClose();
          if (!hoveredItem) {
            setOpenMenu(OVERVIEW_LABEL);
          }
        }}
        onMouseLeave={scheduleClose}
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="UAIS logo" className="h-9 w-9 transition-transform group-hover:rotate-6" />
          <span className="font-display font-bold tracking-tight text-lg">UAIS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV.map((item, idx) => {
            // Pink, blue, yellow club accents for the tab highlights.
            const color = TAB_COLORS[idx % TAB_COLORS.length];
            return (
            <div
              key={item.label}
              onMouseEnter={() => {
                cancelClose();
                setOpenMenu(item.label);
                setHoveredItem(item.label);
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1 rounded-full focus-visible:text-foreground"
                aria-expanded={openMenu === item.label}
                aria-haspopup="true"
                onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                onFocus={() => setOpenMenu(item.label)}
                onBlur={(e) => {
                  if (!headerRef.current?.contains(e.relatedTarget as Node)) {
                    setOpenMenu(null);
                    setHoveredItem(null);
                  }
                }}
              >
                {(hoveredItem === item.label || openMenu === item.label) && (
                  <motion.div
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: `hsl(var(--uais-${color}) / 0.22)` }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 transition-transform duration-300", openMenu === item.label && "rotate-180")}
                  />
                </span>
              </button>
            </div>
            );
          })}
          <NavLink
            to="/sponsors"
            className={({ isActive }) =>
              cn(
                "relative px-3 py-2 text-sm font-medium rounded-full transition-colors focus-visible:text-foreground",
                isActive ? "text-foreground bg-uais-red/20" : "text-muted-foreground hover:text-foreground"
              )
            }
          >
            <span className="relative z-10">Sponsors</span>
          </NavLink>
          <a
            href={CTA.href}
            target="_blank"
            rel="noreferrer"
            aria-label="Become a UAIS member on Rubric (opens in new tab)"
            className="ml-3 px-4 py-2 rounded-full text-sm font-semibold bg-foreground text-background hover:bg-foreground/90 transition focus-visible:ring-2 focus-visible:ring-uais-blue"
          >
            {CTA.label}
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

      {/* Extended full-width bar with the dropdown options */}
      <AnimatePresence>
        {openItem && (
          <motion.div
            key={openItem.label}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="hidden lg:block absolute inset-x-0 top-full overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl shadow-lg"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="max-h-[40vh] overflow-y-auto scrollbar-minimal">
              <div className="container py-3">
                <div className="grid grid-cols-5 gap-y-1 gap-x-2 list-none">
                  {openItem.columns.map((col) => (
                    <Fragment key={col.title ?? "col"}>
                      {col.title && (
                        <h3 className="col-span-5 pt-1.5 pb-0.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                          {col.title}
                        </h3>
                      )}
                      {col.items.map((leaf) => (
                        <LeafRow key={leaf.label} leaf={leaf} onNavigate={() => { setOpenMenu(null); setHoveredItem(null); }} />
                      ))}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {open && (
        <div className="lg:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
          <div className="container py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <details key={item.label} className="group">
                <summary className="list-none flex items-center justify-between py-2 cursor-pointer text-foreground/90">
                  {item.label}
                  <ChevronDown className="h-4 w-4 group-open:rotate-180 transition" />
                </summary>
                <div className="pl-4 flex flex-col">
                  {item.columns.map((col) =>
                    col.items.map((leaf) => (
                      <Link
                        key={leaf.label}
                        to={leaf.to}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground"
                      >
                        <leaf.icon className="h-4 w-4" />
                        {leaf.label}
                      </Link>
                    ))
                  )}
                </div>
              </details>
            ))}
            <NavLink
              to="/sponsors"
              onClick={() => setOpen(false)}
              className="py-2 text-foreground/90"
            >
              Sponsors
            </NavLink>
            <a
              href={CTA.href}
              target="_blank"
              rel="noreferrer"
              aria-label="Become a UAIS member on Rubric (opens in new tab)"
              className="mt-3 px-4 py-2.5 rounded-full text-sm font-semibold bg-foreground text-background text-center"
            >
              {CTA.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
