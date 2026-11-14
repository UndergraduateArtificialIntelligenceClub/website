// AutoExec Club Bot (ClubMate AI) — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "@/data/_types";

export default {
  slug: "clubmate-ai-assistant",
  name: "AutoExec Club Bot (ClubMate AI)",
  tagline: "Automating administration for student clubs.",
  description: "Create a Discord bot to automate administrative tasks for student clubs. Using LangChain and the Model Context Protocol, it will integrate with tools like Google Calendar, Sheets, and Notion.",
  tag: "Agentic AI",
  color: "blue",
  stack: [
    "LangChain",
    "MCP",
    "Discord API",
    "Postgres",
  ],
  details: "A Discord bot that reduces administrative workload for student clubs.",
  difficulty: "Intermediate (agentic AI systems)",
  termLength: "Full academic year (Fall 2025 – Winter 2026)",
  isPast: true,
  year: "2025–26",
  source: "https://github.com/UndergraduateArtificialIntelligenceClub/Clubmate-AI",
  lead: {
    name: "Sashreek Addanki",
    role: "Project Lead",
    github: "https://github.com/Sashreek007",
  },
  members: [
    "RAGHAV SETHI",
    "Francois Coleongco",
    "Lawrence Velilla",
    "Chetan Vig",
    "Daniel Liang",
  ],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "ClubMate AI is a Discord bot that reduces administrative workload for student clubs. Using LangChain and the Model Context Protocol, it integrates with Google Calendar, Google Sheets, GitHub, Notion, and Obsidian to automate scheduling, room booking, and other tasks.",
      },
      {
        title: "Skills Gained",
        body: `- Building with LangChain and MCP
- Deploying Discord bots with Docker and CI/CD pipelines
- Integrating APIs for scheduling and databases
- Hands-on experience with agentic AI systems`,
      },
      {
        title: "Technical Details",
        body: `- **AI/Agent Framework:** LangChain and MCP
- **Integration:** Discord API
- **Database:** Postgres or SQLite
- **Deployment:** Docker and CI/CD`,
      },
    ],
  },
} satisfies Project;
