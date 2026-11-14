// Dataspace — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "../../_types";

export default {
  slug: "dataspace",
  name: "Dataspace",
  tagline: "Cloud dataset storage guided by a goal-aware multi-agent system.",
  description: "An AI data analysis tool for storing and analyzing datasets through a multi-agent system that tracks user goals, builds visualizations, and improves data quality.",
  tag: "Data Science",
  color: "yellow",
  stack: [
    "Python",
    "React",
    "TypeScript",
    "FastAPI",
    "SQL",
    "Azure",
  ],
  details: "Dataspace is an in-development AI data analysis tool. Designed for storing and analyzing datasets through a multi-agent system that tracks goals, builds visualizations and improves data quality. Uploaded datasets will be retrievable from the cloud, editable and analyzable with an orchestrating agent that uses multiple tools and a pipeline that performs analysis with understanding of the user's goals. The system will also support dataset editing.",
  difficulty: "Intermediate",
  termLength: "Full academic year (Fall 2026 – Winter 2027)",
  isPast: false,
  // TODO: swap in actual lead links (linkedin/github) once known.
  lead: {
    name: "Arden",
    role: "Project Lead",
  },
  members: [],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "Dataspace is an in-development AI data analysis tool. Designed for storing and analyzing datasets through a multi-agent system that tracks goals, builds visualizations and improves data quality. Uploaded datasets will be retrievable from the cloud, editable and analyzable with an orchestrating agent that uses multiple tools and a pipeline that performs analysis with understanding of the user's goals. The system will also support dataset editing.",
      },
      {
        title: "Skills Gained",
        body: `- Building connected AI agents
- Full-stack development and cloud deployments
- Common data analysis techniques
- Sprint + task based development workflow`,
      },
      {
        title: "Technical Details",
        body: "Built with Python, React (TypeScript), FastAPI, SQL, and Azure.",
      },
    ],
  },
} satisfies Project;
