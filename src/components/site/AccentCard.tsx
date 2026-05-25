import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Color = "blue" | "green" | "yellow" | "red" | "orange" | "pink";

const borderMap: Record<Color, string> = {
  blue: "before:bg-uais-blue",
  green: "before:bg-uais-green",
  yellow: "before:bg-uais-yellow",
  red: "before:bg-uais-red",
  orange: "before:bg-uais-orange",
  pink: "before:bg-uais-pink",
};

const glowMap: Record<Color, string> = {
  blue: "hover:glow-blue",
  green: "hover:glow-green",
  yellow: "hover:glow-yellow",
  red: "hover:glow-red",
  orange: "hover:glow-orange",
  pink: "hover:glow-pink",
};

export const AccentCard = ({
  color = "blue",
  className,
  children,
}: {
  color?: Color;
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={cn(
      "relative card-surface overflow-hidden",
      "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1",
      borderMap[color],
      glowMap[color],
      className
    )}
  >
    {children}
  </div>
);

export default AccentCard;
