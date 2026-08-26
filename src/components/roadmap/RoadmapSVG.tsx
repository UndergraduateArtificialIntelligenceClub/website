import { cn } from "@/lib/utils";

interface RoadmapSVGProps {
  d: string;
  width: number;
  height: number;
  className?: string;
  roadProgress?: number;
  milestonesCount?: number;
}

export const RoadmapSVG = ({
  d,
  width,
  height,
  className,
  roadProgress = 1,
  milestonesCount = 11,
}: RoadmapSVGProps) => {
  const pathLength = 3000;

  const completedProgress = roadProgress / milestonesCount;

  return (
    <svg
      className={cn("overflow-visible", className)}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--uais-blue))" stopOpacity="0.3" />
          <stop offset="50%" stopColor="hsl(var(--uais-green))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--uais-orange))" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      <path
        d={d}
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: "drop-shadow(0 2px 8px hsl(var(--foreground) / 0.08))",
        }}
      />

      <path
        d={d}
        fill="none"
        stroke="url(#roadGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={pathLength}
        strokeDashoffset={pathLength * (1 - completedProgress)}
        style={{
          transition: "stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          filter: "drop-shadow(0 0 6px hsl(var(--uais-blue) / 0.4))",
        }}
      />

      <path
        d={d}
        fill="none"
        stroke="hsl(var(--foreground) / 0.15)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="12 16"
        style={{
          filter: "drop-shadow(0 0 2px hsl(var(--foreground) / 0.1))",
        }}
      />
    </svg>
  );
};