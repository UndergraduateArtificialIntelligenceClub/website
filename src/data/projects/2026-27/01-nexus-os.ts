// Nexus OS — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "../../_types";

export default {
  slug: "nexus-os",
  name: "Nexus OS",
  tagline: "An AI-native desktop shell you can talk to and gesture at.",
  description: "An AI-powered desktop shell that acts as an intelligent layer over Windows, letting users control apps, windows, workspaces, and search through natural language, structured AI tools, and gestures.",
  tag: "Agentic AI",
  color: "blue",
  stack: [
    "React",
    "TypeScript",
    "Rust",
    "Tauri",
    "FastAPI",
    "SQLite",
    "MediaPipe",
    "Win32 API",
  ],
  details: "An AI-powered desktop shell that acts as an intelligent layer over Windows, allowing users to control applications, windows, workspaces, search, and system interactions through natural language, structured AI tools, and gestures. The system combines AI agents, desktop-state awareness, native OS control, information retrieval, and persistent memory rather than functioning as a standalone chatbot.",
  difficulty: "Intermediate-Advanced",
  termLength: "Full academic year (Fall 2026 – Winter 2027)",
  isPast: false,
  // TODO: swap in actual lead links (linkedin/github) once known.
  lead: {
    name: "Raghav Sethi",
    role: "Project Lead",
  },
  members: [],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "An AI-powered desktop shell that acts as an intelligent layer over Windows, allowing users to control applications, windows, workspaces, search, and system interactions through natural language, structured AI tools, and gestures. The system combines AI agents, desktop-state awareness, native OS control, information retrieval, and persistent memory rather than functioning as a standalone chatbot.",
      },
      {
        title: "Skills Gained",
        body: `- Agentic AI and LLM tool calling
- Desktop-state management and systems integration
- React/TypeScript development
- Rust and Tauri for native OS control
- Windows/Win32 APIs, FastAPI, SQLite
- Computer vision and gesture recognition with MediaPipe
- Information retrieval and multimodal HCI`,
      },
      {
        title: "Technical Details",
        body: "Built with a layered architecture: React + TypeScript for the desktop UI, Tauri/Rust for native OS and window control, FastAPI/Python for the AI agent, memory and retrieval, and SQLite for persistent state. The AI uses structured tool calling with shared tools for applications, windows, workspaces, search, and memory, supporting both hosted LLMs and local models through Ollama. MediaPipe provides gesture recognition, and Win32 APIs enable native Windows application control.",
      },
    ],
  },
} satisfies Project;
