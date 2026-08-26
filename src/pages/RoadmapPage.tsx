import { SimplePage } from "@/components/site/PageHeader";
import { Roadmap } from "@/components/roadmap";
import { Flag, Trophy, ArrowRight } from "lucide-react";

const RoadmapPage = () => (
  <SimplePage
    eyebrow="Learning Path"
    title="The UAIS AI Learning Roadmap"
    description="A structured journey from code fundamentals to deploying production AI systems. Follow the winding path — each milestone builds on the last."
    accent="blue"
  >
    <div className="mb-12 lg:mb-20">
      <Roadmap />
    </div>

    <div className="grid md:grid-cols-3 gap-6 text-center">
      <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
        <div className="flex items-center justify-center gap-2 mb-3 text-uais-blue">
          <Flag className="h-5 w-5" />
          <span className="font-display font-bold">Start Here</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Begin with Python basics and Git fundamentals — no prior experience needed.
        </p>
      </div>

      <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
        <div className="flex items-center justify-center gap-2 mb-3 text-uais-purple">
          <ArrowRight className="h-5 w-5" />
          <span className="font-display font-bold">Build & Specialize</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Progress through web dev, backend, ML, and modern AI engineering stacks.
        </p>
      </div>

      <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
        <div className="flex items-center justify-center gap-2 mb-3 text-uais-yellow">
          <Trophy className="h-5 w-5" />
          <span className="font-display font-bold">Capstone Project</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Deploy a complete AI application showcasing everything you've learned.
        </p>
      </div>
    </div>

    <div className="mt-16 pt-12 border-t border-border/50">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="font-display text-2xl font-bold mb-4">Ready to begin your journey?</h3>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Join our Discord community for support, find study partners, and share your progress along the roadmap.
        </p>
        <a
          href="https://discord.gg/KapmJxs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors"
        >
          Join Discord
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </SimplePage>
);

export default RoadmapPage;