import { useMemo } from "react";
import { type Color } from "@/data/colors";

/**
 * PhotoMarquee — three rows of continuously scrolling event photos.
 * Row directions alternate: left, right, left.
 * Each ROW gets a single brand color filter (tint + border glow), and the
 * three row colors cycle through the brand palette over time so the whole
 * section feels alive — like a lit circuit board changing state.
 *
 * To add/remove photos: edit `src/data/marqueePhotos.ts`.
 */

type PhotoMarqueeProps = {
  photos: string[];
};

const colorVar: Record<Color, string> = {
  blue: "hsl(var(--uais-blue))",
  green: "hsl(var(--uais-green))",
  yellow: "hsl(var(--uais-yellow))",
  red: "hsl(var(--uais-red))",
  orange: "hsl(var(--uais-orange))",
  pink: "hsl(var(--uais-pink))",
};

function Row({
  photos,
  direction,
  durationSec,
  offset,
  color,
}: {
  photos: string[];
  direction: "left" | "right";
  durationSec: number;
  offset: number;
  color: Color;
}) {
  const tiles = [...photos, ...photos];
  const animName = direction === "left" ? "marquee-left" : "marquee-right";
  const c = colorVar[color];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-2 w-max"
        style={{
          animation: `${animName} ${durationSec}s linear infinite`,
          animationDelay: `-${offset}s`,
        }}
      >
        {tiles.map((src, i) => (
          <div
            key={i}
            className="relative h-40 md:h-48 lg:h-56 w-72 md:w-80 lg:w-96 shrink-0 overflow-hidden transition-[box-shadow] duration-1000 ease-in-out"
            style={{ boxShadow: `inset 0 0 0 2px ${c}, 0 0 24px -8px ${c}` }}
          >
            <img
              src={src}
              alt=""
              aria-hidden
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 mix-blend-color transition-[background] duration-1000 ease-in-out"
              style={{ background: c, opacity: 0.35 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PhotoMarquee({ photos }: PhotoMarqueeProps) {
  const rows = useMemo(() => {
    const r1 = photos.filter((_, i) => i % 3 === 0);
    const r2 = photos.filter((_, i) => i % 3 === 1);
    const r3 = photos.filter((_, i) => i % 3 === 2);
    const ensure = (arr: string[]) =>
      arr.length >= 4 ? arr : [...arr, ...photos].slice(0, Math.max(6, arr.length));
    return [ensure(r1), ensure(r2), ensure(r3)];
  }, [photos]);

  const c0: Color = "pink";
  const c1: Color = "blue";
  const c2: Color = "yellow";

  return (
    <div className="space-y-2 select-none pointer-events-none">
      <Row photos={rows[0]} direction="left" durationSec={60} offset={0} color={c0} />
      <Row photos={rows[1]} direction="right" durationSec={75} offset={10} color={c1} />
      <Row photos={rows[2]} direction="left" durationSec={90} offset={5} color={c2} />
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
