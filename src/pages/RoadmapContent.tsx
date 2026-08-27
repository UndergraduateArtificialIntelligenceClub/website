import { ArrowRight, ExternalLink, Rocket } from "lucide-react";
import {
  roadmapCategories,
  categoryColorMap,
  type RoadmapCategory,
  type RoadmapItem,
} from "@/data/roadmap";

const CategorySection = ({ category }: { category: RoadmapCategory }) => {
  const colors = categoryColorMap[category.color];
  const Icon = category.icon;

  return (
    <section className="space-y-6">
      {/* Category Header */}
      <div className="flex items-center gap-4">
        <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} border ${colors.border}`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold">{category.title}</h2>
          <p className="text-sm text-muted-foreground mt-0.5">{category.description}</p>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <ResourceCard key={item.id} item={item} color={category.color} />
        ))}
      </div>
    </section>
  );
};

const ResourceCard = ({ item, color }: { item: RoadmapItem; color: string }) => {
  const colors = categoryColorMap[color];
  const Icon = item.icon;

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col gap-3 p-5 rounded-2xl border border-border/50 bg-card/80 hover:bg-card transition-all duration-300 hover:border-${color === "pink" || color === "purple" ? "pink" : color === "red" ? "red" : color === "orange" ? "orange" : "blue"}/40 hover:scale-[1.02]`}
    >
      {/* Top Row: Number + Stage */}
      <div className="flex items-center justify-between">
        <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${colors.bg} border ${colors.border} text-sm font-mono font-bold ${colors.text}`}>
          {item.id}
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
          {item.stage}
        </span>
      </div>

      {/* Topic */}
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 ${colors.text} shrink-0`} />
        <div>
          <h3 className="font-display font-bold text-base leading-tight">{item.topic}</h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.resource}</p>
        </div>
      </div>

      {/* Link */}
      <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors mt-auto">
        <span>Watch on YouTube</span>
        <ExternalLink className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </div>
    </a>
  );
};

const RoadmapContent = () => (
  <div className="space-y-16">
    {roadmapCategories.map((category) => (
      <CategorySection key={category.id} category={category} />
    ))}


    {/* CTA */}
    <div className="max-w-2xl mx-auto text-center space-y-6">
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-uais-yellow/10 border border-uais-yellow/30">
          <Rocket className="w-6 h-6 text-uais-yellow" />
        </div>
      </div>
      <h3 className="font-display text-2xl font-bold">Ready to begin your journey?</h3>
      <p className="text-muted-foreground max-w-lg mx-auto">
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
);

export default RoadmapContent;