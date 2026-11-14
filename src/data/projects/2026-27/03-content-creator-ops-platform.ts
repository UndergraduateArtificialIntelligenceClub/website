// Content Creator Ops Platform — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "../../_types";

export default {
  slug: "content-creator-ops-platform",
  name: "Content Creator Ops Platform",
  tagline: "Turns long-form video into viral-ready short clips automatically.",
  description: "A web app that transcribes long-form video, identifies the moments most likely to perform well, and automatically generates clips with captions, hooks, and posting recommendations.",
  tag: "Agentic AI",
  color: "green",
  stack: [
    "Whisper",
    "LangChain",
    "LangGraph",
    "Chroma",
    "Pinecone",
    "ffmpeg",
    "FastAPI",
    "React",
  ],
  details: "This project builds a web app that turns long-form video into viral-ready short clips. The system transcribes raw video, identifies the moments most likely to perform well using proven viral editing patterns, then automatically generates clips with captions, hooks, and posting recommendations, mimicking what real creator editing teams already do by hand.",
  difficulty: "Beginner-Intermediate",
  termLength: "6 months (Fall 2026 – Winter 2027)",
  isPast: false,
  // TODO: swap in actual lead links (linkedin/github) once known.
  lead: {
    name: "Mousa Abuzar",
    role: "Project Lead",
  },
  members: [],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "This project builds a web app that turns long-form video into viral-ready short clips. The system transcribes raw video, identifies the moments most likely to perform well using proven viral editing patterns, then automatically generates clips with captions, hooks, and posting recommendations, mimicking what real creator editing teams already do by hand.",
      },
      {
        title: "Skills Gained",
        body: `- Building AI agents and tool-calling pipelines
- Retrieval-augmented generation (RAG)
- Multimodal pipelines combining audio, video, and text
- Transcription APIs and video processing
- Full-stack web development`,
      },
      {
        title: "Technical Details",
        body: "Built with a pipeline architecture: Whisper handles transcription, LangChain/LangGraph orchestrates the AI agent for moment detection and content generation, and Chroma/Pinecone power a RAG layer that grounds hook and posting recommendations in real viral performance data. ffmpeg handles clip cutting and caption burn-in, with a Python (FastAPI) backend and React frontend delivering the whole system as a web app.",
      },
    ],
  },
} satisfies Project;
