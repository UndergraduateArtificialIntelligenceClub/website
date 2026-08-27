import { cn } from "@/lib/utils";

interface DecorativeElementsProps {
  width: number;
  height: number;
  isMobile?: boolean;
  className?: string;
}

export const DecorativeElements = ({
  width,
  height,
  isMobile = false,
  className,
}: DecorativeElementsProps) => {
  if (isMobile) {
    return (
      <g className={cn("opacity-30", className)} aria-hidden="true">
        <circle cx={60} cy={200} r="80" fill="none" stroke="hsl(var(--uais-blue))" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.3" />
        <circle cx={300} cy={500} r="120" fill="none" stroke="hsl(var(--uais-green))" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2" />
        <circle cx={80} cy={900} r="60" fill="none" stroke="hsl(var(--uais-purple))" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2" />
        <circle cx={280} cy={1300} r="100" fill="none" stroke="hsl(var(--uais-orange))" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2" />
        
        {[1, 2, 3, 4, 5].map((i) => (
          <circle
            key={i}
            cx={40 + (i % 3) * 100}
            cy={300 + i * 280}
            r={3}
            fill="hsl(var(--foreground) / 0.1)"
          />
        ))}
      </g>
    );
  }

  return (
    <g className={cn("opacity-40", className)} aria-hidden="true">
      <circle cx={200} cy={100} r="120" fill="none" stroke="hsl(var(--uais-blue))" strokeWidth="0.5" strokeDasharray="8 16" opacity="0.3" />
      <circle cx={800} cy={450} r="180" fill="none" stroke="hsl(var(--uais-green))" strokeWidth="0.5" strokeDasharray="8 16" opacity="0.2" />
      <circle cx={1400} cy={100} r="150" fill="none" stroke="hsl(var(--uais-purple))" strokeWidth="0.5" strokeDasharray="8 16" opacity="0.2" />
      <circle cx={1800} cy={400} r="100" fill="none" stroke="hsl(var(--uais-orange))" strokeWidth="0.5" strokeDasharray="8 16" opacity="0.2" />
      
      <ellipse cx={500} cy={50} rx="200" ry="30" fill="none" stroke="hsl(var(--uais-pink))" strokeWidth="0.3" strokeDasharray="4 12" opacity="0.2" />
      <ellipse cx={1100} cy={480} rx="180" ry="25" fill="none" stroke="hsl(var(--uais-red))" strokeWidth="0.3" strokeDasharray="4 12" opacity="0.2" />
      
      {[...Array(12)].map((_, i) => (
        <circle
          key={i}
          cx={100 + (i % 6) * 320}
          cy={80 + Math.floor(i / 6) * 350}
          r={2.5}
          fill="hsl(var(--foreground) / 0.08)"
        />
      ))}

      {[...Array(8)].map((_, i) => (
        <rect
          key={i}
          x={150 + (i % 4) * 450}
          y={120 + Math.floor(i / 4) * 300}
          width={6}
          height={6}
          rx={1}
          fill="hsl(var(--foreground) / 0.06)"
          transform={`rotate(${i * 15} ${150 + (i % 4) * 450 + 3} ${120 + Math.floor(i / 4) * 300 + 3})`}
        />
      ))}

      <path
        d="M 100 200 Q 300 100 500 200 Q 700 300 900 200"
        fill="none"
        stroke="hsl(var(--uais-blue))"
        strokeWidth="0.3"
        strokeDasharray="6 12"
        opacity="0.15"
      />
      <path
        d="M 1200 250 Q 1400 150 1600 250 Q 1800 350 2000 250"
        fill="none"
        stroke="hsl(var(--uais-green))"
        strokeWidth="0.3"
        strokeDasharray="6 12"
        opacity="0.15"
      />
    </g>
  );
};