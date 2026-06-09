import { Link } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";
import NeuralBackdrop from "@/components/site/NeuralBackdrop";
import AccentCard from "@/components/site/AccentCard";
import logo from "@/assets/uais-logo.png";
import { ArrowUpRight, Sparkles, Code2, Mic, Trophy, ScrollText } from "lucide-react";
import PhotoMarquee from "@/components/site/PhotoMarquee";
import { marqueePhotos } from "@/data/marqueePhotos";

const highlights = [
  {
    icon: Code2,
    color: "blue" as const,
    title: "Projects",
    desc: "Student-built AI: NHL Positivity Index, RAG Chatbots, medical screening, and more.",
    href: "/projects",
  },
  {
    icon: Trophy,
    color: "orange" as const,
    title: "Hackathons",
    desc: "Marathons of caffeine and ideas — including our flagship SillyCon Valley.",
    href: "/hackathons",
  },
  {
    icon: Mic,
    color: "pink" as const,
    title: "Interviews",
    desc: "Conversations with researchers, founders, and alumni building the future of AI.",
    href: "/interviews",
  },
];

const Index = () => {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0">
          <NeuralBackdrop />
        </div>
        <div className="container relative pt-20 pb-28 md:pt-28 md:pb-40">
          <div className="max-w-4xl">
            <h1 className="mt-6 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] animate-fade-up">
              Exploring the{" "}
              <span className="text-gradient-multi">frontiers of AI</span>
              <br /> at the University of Alberta.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-up">
              UAIS is a student community building, learning, and shipping artificial
              intelligence — from first-year curious to research-grade rigorous.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up">
              <a
                href="https://campus.hellorubric.com/?s=11851"
                target="_blank"
                rel="noreferrer"
                aria-label="Become a UAIS member on Rubric (opens in new tab)"
                className="px-6 py-3 rounded-full bg-foreground text-background font-semibold inline-flex items-center gap-2 hover:opacity-90 transition"
              >
                Become a Member <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to="/getting-started"
                className="px-6 py-3 rounded-full border border-border font-semibold hover:border-foreground/40 transition"
              >
                Getting started in AI
              </Link>
            </div>
          </div>

          <img
            src={logo}
            alt=""
            aria-hidden
            className="hidden lg:block absolute -right-10 top-16 w-[460px] opacity-90 animate-float-slow drop-shadow-[0_0_60px_rgba(60,140,255,0.25)]"
          />
        </div>
      </section>

      {/* WHO WE ARE — full-width photo marquee with overlay glass card */}
      <section className="relative w-full py-20 overflow-hidden">
        {/* Photo rows background — full width, edge to edge */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full">
            <PhotoMarquee photos={marqueePhotos} />
          </div>
        </div>

        {/* Top + bottom dark gradient so only the middle band of photos pops */}
        <div className="absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        {/* Right-edge fade */}
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        {/* Overlay glass card pinned left */}
        <div className="container relative">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7 lg:col-span-6">
              <div
                className="relative p-8 md:p-10 lg:p-12 rounded-2xl"
                style={{
                  background: "rgba(0,0,0,0.82)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="text-xs mono text-uais-blue uppercase tracking-widest">Who we are</div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
                  A community for the curious, the builders, the future-makers.
                </h2>
                <div className="mt-6 space-y-5 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    UAIS is the Undergraduate Artificial Intelligence Society at the
                    University of Alberta. We host technical talks, build real projects,
                    run hackathons, and bring industry & research voices to campus.
                  </p>
                  <p>
                    Whether you're writing your first{" "}
                    <span className="mono text-foreground">import torch</span> or
                    fine-tuning your fifth model — there's a seat at the table.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-6">
                  {["AI for Good", "Research", "Hackathons", "Open Source", "Community"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-sm border border-white/10 bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container py-12">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold">What we do</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map(({ icon: Icon, ...h }) => (
            <Link to={h.href} key={h.title}>
              <AccentCard color={h.color} className="p-7 h-full">
                <Icon className="h-7 w-7 mb-5" />
                <h3 className="font-display text-2xl font-semibold">{h.title}</h3>
                <p className="mt-2 text-muted-foreground">{h.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
                  Explore <ArrowUpRight className="h-4 w-4" />
                </div>
              </AccentCard>
            </Link>
          ))}
        </div>
      </section>


      {/* CONSTITUTION CALLOUT */}
      <section className="container pt-12">
        <a
          href="/constitution.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="View the UAIS Constitution (PDF, opens in new tab)"
          className="group relative flex flex-col md:flex-row md:items-center gap-5 overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-7 hover:border-foreground/30 hover:glow-yellow transition"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-uais-yellow" />
          <div className="flex items-center gap-4 md:gap-5 flex-1">
            <div className="h-12 w-12 shrink-0 rounded-xl border border-border grid place-items-center bg-background">
              <ScrollText className="h-5 w-5 text-uais-yellow" />
            </div>
            <div>
              <div className="text-xs mono uppercase tracking-widest text-uais-yellow">Constitution</div>
              <div className="font-display text-lg md:text-xl font-semibold mt-0.5">
                How UAIS is governed — read our constitution.
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Purpose, membership, code of conduct, executive roles, and how decisions get made.
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 text-sm font-medium md:ml-auto md:pl-4 group-hover:translate-x-0.5 transition-transform">
            View PDF <ArrowUpRight className="h-4 w-4" />
          </div>
        </a>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
          <div className="absolute inset-0 bg-gradient-hero opacity-70" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Ready to build the future with us?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Join 500+ students learning, hacking, and shipping AI together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://campus.hellorubric.com/?s=11851"
                target="_blank"
                rel="noreferrer"
                aria-label="Become a UAIS member on Rubric (opens in new tab)"
                className="px-6 py-3 rounded-full bg-foreground text-background font-semibold inline-flex items-center gap-2"
              >
                Become a Member <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to="/socials"
                className="px-6 py-3 rounded-full border border-border font-semibold hover:border-foreground/40 transition"
              >
                All socials
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
