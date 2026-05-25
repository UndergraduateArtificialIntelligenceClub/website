// Brand color tokens used throughout the site.
// These map to CSS variables defined in src/index.css (--uais-blue, etc.)
// To add a new accent color: add it here AND add the matching --uais-* HSL variable in src/index.css.

export const COLORS = ["blue", "green", "yellow", "red", "orange", "pink"] as const;
export type Color = (typeof COLORS)[number];
