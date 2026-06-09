import { Color } from "@/data/uais";

const gradients: Record<Color, string> = {
  blue: "from-uais-blue/70 via-uais-blue/30",
  green: "from-uais-green/70 via-uais-green/30",
  yellow: "from-uais-yellow/70 via-uais-yellow/30",
  red: "from-uais-red/70 via-uais-red/30",
  orange: "from-uais-orange/70 via-uais-orange/30",
  pink: "from-uais-pink/70 via-uais-pink/30",
};

/** Decorative poster-style tile (no real image needed) */
export const PosterTile = ({
  color,
  label,
  className = "",
}: {
  color: Color;
  label: string;
  className?: string;
}) => (
  <div
    className={`relative overflow-hidden bg-gradient-to-br ${gradients[color]} to-background ${className}`}
  >
    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage:
          "radial-gradient(circle at 30% 20%, hsl(0 0% 100% / 0.15), transparent 40%), radial-gradient(circle at 80% 80%, hsl(0 0% 0% / 0.5), transparent 50%)",
      }}
    />
    <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 200 200" preserveAspectRatio="none">
      <path d="M10 150 L60 150 L60 90 L120 90 L120 40 L190 40" stroke={`hsl(var(--uais-${color}))`} strokeWidth="1.5" fill="none" />
      <path d="M0 60 L40 60 L40 110 L100 110 L100 170 L200 170" stroke="hsl(0 0% 100% / 0.25)" strokeWidth="1" fill="none" />
      <circle cx="60" cy="90" r="3" fill={`hsl(var(--uais-${color}))`} />
      <circle cx="120" cy="40" r="3" fill={`hsl(var(--uais-${color}))`} />
      <circle cx="40" cy="110" r="2.5" fill="hsl(0 0% 100% / 0.6)" />
    </svg>
    <div className="relative h-full w-full grid place-items-center p-6">
      <div className="font-display font-black text-3xl md:text-4xl text-foreground/90 text-center leading-tight drop-shadow-lg">
        {label}
      </div>
    </div>
  </div>
);

export default PosterTile;
