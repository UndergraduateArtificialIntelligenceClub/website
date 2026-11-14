// Root AI: A Node-Based Learning Companion — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "../../_types";

export default {
  slug: "root-ai",
  name: "Root AI: A Node-Based Learning Companion",
  tagline: "Teach the AI your course material and it tracks what you're forgetting.",
  description: "A node-based review app where you teach the AI your course material and it tracks what you're forgetting, pulling you back through conversational audio reviews when concepts start slipping.",
  tag: "LLMs",
  color: "red",
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Gemini API",
    "Google Cloud TTS",
  ],
  details: "Root is a node-based review app where you teach the AI your course material and it tracks what you are forgetting. As you work through each concept, Root asks follow-up questions based on what you write or say, stores your thinking, and monitors which concepts are fading over time. When something starts slipping, it pulls you back through a conversational audio review. Team members will work across frontend development, database architecture, and multi-layer AI integration.",
  difficulty: "Intermediate to Advanced",
  termLength: "Full academic year (Fall 2026 – Winter 2027)",
  isPast: false,
  // TODO: swap in actual lead links (linkedin/github) once known.
  lead: {
    name: "Uchenna",
    role: "Project Lead",
  },
  members: [],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "Root is a node-based review app where you teach the AI your course material and it tracks what you are forgetting. As you work through each concept, Root asks follow-up questions based on what you write or say, stores your thinking, and monitors which concepts are fading over time. When something starts slipping, it pulls you back through a conversational audio review. Team members will work across frontend development, database architecture, and multi-layer AI integration.",
      },
      {
        title: "Skills Gained",
        body: `- Prompt engineering with large language models
- Designing and managing complex relational databases
- Full-stack web development with Next.js and React
- Building and integrating AI audio pipelines
- Product design and cross-functional team collaboration`,
      },
      {
        title: "Technical Details",
        body: "Built with Next.js, React, TypeScript, Supabase, PostgreSQL, Gemini API, and Google Cloud TTS.",
      },
    ],
  },
} satisfies Project;
