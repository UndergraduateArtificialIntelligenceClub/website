// Events — homepage calendar.
//
// ▸ One file per semester (`fall-2026.ts`, `winter-2027.ts`, …). Add a file
//   and its events appear on the calendar automatically — no list to update.
// ▸ Each event needs a real `Date` object: `new Date(year, monthIndex, day)`
//   (monthIndex is 0-based, 0 = January) so the grid can position it.

import type { Color } from "../colors";
import type { UaisEvent } from "../_types";

export type { UaisEvent };

/** Set to `true` when events are confirmed and the calendar is ready to show publicly. */
export const eventsEnabled = true;

export const eventTypeColor: Record<UaisEvent["type"], Color> = {
  Talk: "blue",
  Workshop: "green",
  Social: "pink",
  Hackathon: "orange",
  Other: "yellow",
};

const modules = import.meta.glob<{ default: UaisEvent[] }>(
  ["./*.ts", "!./index.ts", "!./_*.ts"],
  { eager: true },
);

export const events: UaisEvent[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .flatMap(([path, mod]) => {
    if (!mod.default) throw new Error(`[data/events] ${path} is missing a default export.`);
    return mod.default;
  });
