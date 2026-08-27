import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { RoadmapMilestone, RoadmapColor } from "@/data/roadmap";

interface MilestoneCardProps {
  milestone: RoadmapMilestone;
  position: { x: number; y: number };
  side: "top" | "bottom" | "left" | "right" | "center";
  isActive?: boolean;
  isVisible?: boolean;
  index: number;
  viewBoxWidth: number;
  viewBoxHeight: number;
  isMobile: boolean;
}

const stageColorMap: Record<RoadmapColor, string> = {
  blue: "uais-blue",
  green: "uais-green",
  orange: "uais-orange",
  pink: "uais-pink",
  purple: "uais-purple",
  red: "uais-red",
  yellow: "uais-yellow",
};

export const MilestoneCard = ({
  milestone,
  position,
  side,
  isActive,
  isVisible = true,
  index,
  viewBoxWidth,
  viewBoxHeight,
  isMobile,
}: MilestoneCardProps) => {
  const stageColor = stageColorMap[milestone.color];

  const nodeX = position.x;
  const nodeY = position.y;

  const leftPct = (nodeX / viewBoxWidth) * 100;
  const topPct = (nodeY / viewBoxHeight) * 100;

  let transformOffset = "translate(-50%, -50%)";

  if (isMobile) {
    if (side === "left") {
      transformOffset += ` translateX(-52%)`;
    } else if (side === "right") {
      transformOffset += ` translateX(52%)`;
    } else {
      transformOffset += ` translateY(60%)`;
    }
  } else {
    if (side === "top") {
      transformOffset += ` translateY(-110%)`;
    } else if (side === "bottom") {
      transformOffset += ` translateY(10%)`;
    } else {
      transformOffset += ` translateY(10%)`;
    }
  }

  const cardStyle = {
    left: `${leftPct}%`,
    top: `${topPct}%`,
    transform: transformOffset,
    transformOrigin: "center center",
    transitionDelay: `${index * 80}ms`,
    // Responsive width: percentage of viewBox with pixel clamps
    width: isMobile
      ? "clamp(200px, 28vw, 260px)"
      : "clamp(240px, 13vw, 320px)",
    // Responsive font scaling
    fontSize: isMobile ? "clamp(0.75rem, 2.5vw, 0.875rem)" : "clamp(0.875rem, 1.2vw, 1rem)",
  };

  return (
    <div
      data-milestone={true}
      data-index={index}
      data-card-index={index}
      className={cn(
        "absolute pointer-events-auto",
        "transition-all duration-500 ease-out",
        isVisible && "opacity-100 translate-y-0",
        !isVisible && "opacity-0 translate-y-4",
        isActive && "z-10"
      )}
      style={cardStyle}
    >
      <div
        className={cn(
          "relative rounded-2xl border bg-card/95 backdrop-blur-sm shadow-xl",
          "border-border/50",
          "hover:border-foreground/20 hover:shadow-2xl",
          "transition-all duration-300",
          isActive && "border-uais-blue/50 shadow-[0_0_30px_hsl(var(--uais-blue)/0.15)]"
        )}
        style={{
          padding: isMobile ? "12px 14px" : "16px 20px",
          minHeight: side === "center" ? "auto" : undefined,
        }}
      >
        <div className="flex items-center gap-2 mb-3" style={{ gap: isMobile ? "6px" : "8px" }}>
          <span
            className={cn(
              "mono uppercase tracking-widest font-medium px-2 py-0.5 rounded-full",
              `bg-${stageColor}/10 text-${stageColor}`,
              "whitespace-nowrap shrink-0"
            )}
            style={{
              fontSize: isMobile ? "0.55rem" : "0.625rem",
              padding: isMobile ? "2px 6px" : "3px 8px",
            }}
          >
            {milestone.stage}
          </span>
          {milestone.id === 1 && (
            <span className="ml-auto mono uppercase tracking-widest font-medium text-uais-green whitespace-nowrap shrink-0"
              style={{ fontSize: isMobile ? "0.55rem" : "0.625rem" }}>
              START
            </span>
          )}
          {milestone.id === 11 && (
            <span className="ml-auto mono uppercase tracking-widest font-medium text-uais-yellow whitespace-nowrap shrink-0"
              style={{ fontSize: isMobile ? "0.55rem" : "0.625rem" }}>
              FINISH
            </span>
          )}
        </div>

        <div className="flex items-start gap-3 mb-3" style={{ gap: isMobile ? "8px" : "12px" }}>
          <div
            className={cn(
              "shrink-0 rounded-xl",
              `bg-${stageColor}/10`
            )}
            style={{
              color: `hsl(var(--${stageColor}))`,
              padding: isMobile ? "8px" : "12px",
            }}
          >
            <milestone.icon className="h-5 w-5" style={{ width: isMobile ? "20px" : "24px", height: isMobile ? "20px" : "24px" }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold leading-tight text-foreground truncate"
              style={{ fontSize: isMobile ? "0.875rem" : "1rem" }}>
              {milestone.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mt-1 line-clamp-2"
              style={{ fontSize: isMobile ? "0.7rem" : "0.8125rem" }}>
              {milestone.description}
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-border/50" style={{ paddingTop: isMobile ? "8px" : "12px" }}>
          <a
            href={milestone.resourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 font-medium",
              `text-${stageColor} hover:text-${stageColor}/80`,
              "transition-colors group whitespace-nowrap"
            )}
            style={{ fontSize: isMobile ? "0.7rem" : "0.8125rem", gap: isMobile ? "4px" : "6px" }}
          >
            {milestone.resourceTitle}
            <ArrowUpRight className="group-hover:translate-x-0.5 transition-transform"
              style={{ width: isMobile ? "14px" : "16px", height: isMobile ? "14px" : "16px" }} />
          </a>
        </div>

        {isActive && (
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full"
            style={{ background: `hsl(var(--${stageColor}))` }}
            aria-hidden="true"
          />
        )}
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-border/40 pointer-events-none"
        style={{
          height: isMobile ? "24px" : "32px",
          top: side === "top" ? "100%" : side === "bottom" ? "-24px" : "50%",
          transform: side === "left" || side === "right"
            ? "translateX(-50%) translateY(-50%) rotate(90deg)"
            : "translateX(-50%)",
        }}
        aria-hidden="true"
      />
    </div>
  );
};