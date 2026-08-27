import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface MilestoneNodeProps {
  x: number;
  y: number;
  color: string;
  icon: React.ReactNode;
  isActive?: boolean;
  isCompleted?: boolean;
  onClick?: () => void;
  index: number;
}

const colorMap: Record<string, string> = {
  blue: "hsl(var(--uais-blue))",
  green: "hsl(var(--uais-green))",
  orange: "hsl(var(--uais-orange))",
  pink: "hsl(var(--uais-pink))",
  purple: "hsl(var(--uais-purple))",
  red: "hsl(var(--uais-red))",
  yellow: "hsl(var(--uais-yellow))",
};

export const MilestoneNode = ({
  x,
  y,
  color,
  icon,
  isActive,
  isCompleted,
  onClick,
  index,
}: MilestoneNodeProps) => {
  const nodeColor = colorMap[color] || "hsl(var(--uais-blue))";

  return (
    <g
      transform={`translate(${x}, ${y})`}
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      className={cn(
        "transition-all duration-300",
        isActive && "scale-110",
        onClick && "hover:scale-110"
      )}
    >
      <defs>
        <filter id={`node-glow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={isActive ? 4 : 2} result="blur" />
          <feFlood floodColor={nodeColor} floodOpacity={isActive ? 0.4 : 0.2} />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle
        r="20"
        fill="hsl(var(--background))"
        stroke={nodeColor}
        strokeWidth={isActive ? 3 : 2}
        style={{
          filter: isActive ? `url(#node-glow-${index})` : "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {isCompleted ? (
        <Check
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4"
          stroke={nodeColor}
          strokeWidth={3}
        />
      ) : (
        <g
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ color: nodeColor }}
        >
          {icon}
        </g>
      )}

      {isActive && (
        <circle
          r="28"
          fill="none"
          stroke={nodeColor}
          strokeWidth="1.5"
          strokeDasharray="8 8"
          style={{
            animation: "pulse-ring 2s ease-out infinite",
            opacity: 0.6,
          }}
        />
      )}
    </g>
  );
};