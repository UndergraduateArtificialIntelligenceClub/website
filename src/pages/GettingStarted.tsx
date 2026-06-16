import { SimplePage } from "@/components/site/PageHeader";
import AccentCard from "@/components/site/AccentCard";
import { ualbertaCourses, externalResources } from "@/data/uais";
import { ArrowUpRight, BookOpen, GraduationCap, Laptop, Users } from "lucide-react";

const steps = [
  {
    color: "blue" as const,
    icon: BookOpen,
    title: "1. Learn the fundamentals",
    items: [
      "Download Python (3.11+ recommended)",
      "Set up VS Code with the Python extension",
      "Linear algebra refresher (3Blue1Brown)",
      "Python + NumPy basics (see workshops below)",
    ],
  },
  {
    color: "green" as const,
    icon: GraduationCap,
    title: "2. Follow the UofA path",
    items: [
      "CMPUT 261: Intro to AI",
      "CMPUT 267: Basics of Machine Learning",
      "CMPUT 365/366: RL and Search",
      "Join the CS Honors\\Majors with AI option",
    ],
  },
  {
    color: "orange" as const,
    icon: Laptop,
    title: "3. Build & Experiment",
    items: [
      "Re-implement a classic paper from arXiv",
      "Join a UAIS project team (Recruitment in Fall)",
      "Participate in the SillyCon Valley hackathon",
    ],
  },
  {
    color: "pink" as const,
    icon: Users,
    title: "4. Join the community",
    items: [
      "Join our Discord and introduce yourself",
      "Attend our weekly technical talks",
      "Come to social mixers and meet the execs",
    ],
  },
];

const GettingStarted = () => (
  <SimplePage
    eyebrow="For beginners"
    title="Getting started in AI."
    description="A friendly, opinionated path from zero to your first AI project — built specifically for UAlberta students."
    accent="green"
  >
    {/* ONBOARDING STEPS */}
    <div className="grid md:grid-cols-2 gap-6 mb-20">
      {steps.map((s) => (
        <AccentCard key={s.title} color={s.color} className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-xl bg-background border border-border grid place-items-center">
              <s.icon className="h-6 w-6" style={{ color: `hsl(var(--uais-${s.color}))` }} />
            </div>
            <h3 className="font-display text-xl font-bold">{s.title}</h3>
          </div>
          <ul className="space-y-3">
            {s.items.map((i) => (
              <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: `hsl(var(--uais-${s.color}))` }} />
                {i}
              </li>
            ))}
          </ul>
        </AccentCard>
      ))}
    </div>

    <div className="grid lg:grid-cols-[1fr_350px] gap-12 items-start">
      <div className="space-y-16">
        {/* EXTERNAL RESOURCES */}
        {externalResources.map((section) => (
          <section key={section.title}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1.5 w-1.5 rounded-full" style={{ background: `hsl(var(--uais-${section.color}))` }} />
              <h2 className="font-display text-2xl font-bold">{section.title}</h2>
              <div className="flex-1 h-px bg-border/50" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {section.items.map((item) => (
                <a 
                  key={item.title} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl border border-border bg-card/50 hover:border-foreground/20 transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-display font-bold group-hover:text-foreground transition-colors">{item.title}</h4>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CURRICULUM SIDEBAR */}
      <aside className="sticky top-24 space-y-6">
        <div className="card-surface p-6">
          <div className="flex items-center gap-2 mb-6 text-uais-green">
            <GraduationCap className="h-5 w-5" />
            <h2 className="font-display text-lg font-bold">UAlberta Curriculum</h2>
          </div>
          <div className="space-y-4">
            {ualbertaCourses.map((c) => (
              <div key={c.number} className="group">
                <div className="text-[10px] mono uppercase tracking-widest text-muted-foreground group-hover:text-uais-green transition-colors">
                  {c.number}
                </div>
                <div className="text-sm font-medium leading-tight mt-0.5">
                  {c.name}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground italic leading-relaxed">
              * This is an unofficial guide. Check the University Calendar for latest prerequisites and availability.
            </p>
          </div>
        </div>
      </aside>
    </div>
  </SimplePage>
);

export default GettingStarted;
