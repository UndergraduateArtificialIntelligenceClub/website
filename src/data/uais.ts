// Barrel re-exports. Content lives in per-topic folder trees — one small file
// per item, auto-collected by each folder's index.ts (see README.md in this
// folder). These re-exports keep `import { … } from "@/data/uais"` working
// everywhere; new code can also import from a specific folder, e.g.
// `import { projects } from "@/data/projects"`.

export * from "./colors";
export * from "@/data/_types";
export * from "./projects/index";
export * from "./team/index";
export * from "./presentations/index";
export * from "./hackathons/index";
export * from "./interviews/index";
export * from "./events/index";
export * from "./resources";
