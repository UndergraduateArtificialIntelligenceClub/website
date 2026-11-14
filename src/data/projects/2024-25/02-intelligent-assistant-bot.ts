// Intelligent Assistant Bot — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "../../_types";

export default {
  slug: "intelligent-assistant-bot",
  name: "Intelligent Assistant Bot",
  tagline: "Automated RSVP and RAG support for 700+ members.",
  description: "A multifunctional Discord bot serving as the central nervous system for the club's operations, automating events and providing RAG-based technical support.",
  tag: "Applied",
  color: "yellow",
  stack: [
    "Python",
    "GPT-4o",
    "RAG",
    "Discord API",
  ],
  details: "Automated RSVP and RAG support for 700+ members.",
  difficulty: "Intermediate",
  termLength: "Winter 2025",
  isPast: true,
  year: "2024–25",
  source: "https://github.com/UndergraduateArtificialIntelligenceClub/uais_chatbot",
  lead: {
    name: "Sashreek Addanki",
    role: "Project Lead",
    github: "https://github.com/Sashreek007",
  },
  members: [
    "RAGHAV SETHI",
  ],
  content: {
    type: "readme",
    body: `## The Challenge
As UAIS grew to over 700 members, administrative overhead became a bottleneck. Executives were spending hours manually syncing Google Calendar events with Discord announcements, tracking RSVPs, and answering repetitive technical questions. We needed a solution that could automate the boring stuff so we could focus on AI.

## The Solution
We built a multifunctional Discord bot using \`discord.py\` that served as the central nervous system for the club's operations.

### Key Features
1. **Automated Event Orchestration:** Deep integration with the **Google Calendar API**. Automatically fetched upcoming events and generated formatted Discord announcements with RSVP buttons.
2. **RAG-Based Technical Support:** We integrated a **Retrieval-Augmented Generation (RAG)** pipeline using **GPT-4o**. The bot could ingest club documentation to answer technical queries instantly.
3. **Community Engagement:** Included gamification features like AI-themed trivia and quizzes to keep the server active.

---

## Technical Architecture
* **Language:** Python 3.10+
* **Framework:** \`discord.py\` (Asynchronous)
* **AI Engine:** OpenAI GPT-4o with vector-based context retrieval
* **Integrations:** Google Workspace APIs (Calendar, Sheets), SQLite for RSVP tracking.

## Skills Gained
* **Advanced Python:** Architecting large-scale, asynchronous applications.
* **LLM Integration:** Implementing Retrieval-Augmented Generation (RAG) pipelines.
* **API Orchestration:** Authenticating and syncing data between Discord, Google Calendar, and Google Sheets APIs.`,
  },
} satisfies Project;
