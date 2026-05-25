import { Color } from "@/data/uais";

export const InitialsAvatar = ({
  name,
  color,
  size = 80,
  ring = true,
}: {
  name: string;
  color: Color;
  size?: number;
  ring?: boolean;
}) => {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  return (
    <div
      aria-hidden="true"
      className="relative shrink-0 rounded-full grid place-items-center font-display font-bold"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, hsl(var(--uais-${color}) / 0.45), hsl(var(--uais-${color}) / 0.1))`,
        color: `hsl(var(--uais-${color}))`,
        boxShadow: ring ? `0 0 0 2px hsl(var(--uais-${color}) / 0.6), 0 0 24px hsl(var(--uais-${color}) / 0.25)` : undefined,
        fontSize: size * 0.32,
      }}
    >
      {initials}
    </div>
  );
};

export default InitialsAvatar;
