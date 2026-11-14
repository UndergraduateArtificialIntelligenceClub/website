// Team — auto-collected from the files in this folder.
//
// ▸ Current execs: one file per year at the root of this folder
//   (e.g. `2026-27.ts`). The file with the NEWEST year name is the team
//   shown on /team. To roll over a new year: copy the current file, rename
//   it to the new year, edit the members.
// ▸ Past execs: one file per year under `past/` (e.g. `past/2025-26.ts`).
//   Keep the `year` field inside the file — it's the display heading.
//
// Files named `index.ts` or starting with `_` are infrastructure and ignored.

import type { PastExecYear, TeamMember } from "../_types";

const currentModules = import.meta.glob<{ default: TeamMember[] }>(
  ["./*.ts", "!./index.ts", "!./_*.ts"],
  { eager: true },
);

const currentFiles = Object.entries(currentModules).sort(([a], [b]) => b.localeCompare(a));
const newest = currentFiles[0];
if (newest && !newest[1].default) {
  throw new Error(`[data/team] ${newest[0]} is missing a default export.`);
}
export const team: TeamMember[] = newest?.[1].default ?? [];

const pastModules = import.meta.glob<{ default: PastExecYear }>(
  ["./past/*.ts", "!./past/index.ts", "!./past/_*.ts"],
  { eager: true },
);

export const pastExecs: PastExecYear[] = Object.entries(pastModules)
  .sort(([a], [b]) => b.localeCompare(a)) // newest year first
  .map(([path, mod]) => {
    if (!mod.default) throw new Error(`[data/team] ${path} is missing a default export.`);
    return mod.default;
  });
