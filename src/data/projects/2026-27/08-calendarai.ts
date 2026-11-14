// CalendarAI: An Intelligent Academic Organizer — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "../../_types";

export default {
  slug: "calendarai",
  name: "CalendarAI: An Intelligent Academic Organizer",
  tagline: "Turns course syllabi into one organized academic calendar.",
  description: "A web app that uses large language models to extract due dates from uploaded syllabi and display them in a clean, interactive calendar with smart reminders and grade-tracking.",
  tag: "LLMs",
  color: "orange",
  stack: [
    "React",
    "TypeScript",
    "FastAPI",
    "Supabase",
    "PostgreSQL",
    "Gemini API",
    "PyTorch",
  ],
  details: "CalendarAI is a web app that turns course syllabi into a single, organized academic calendar. Students upload their syllabi, and CalendarAI uses large language models to read and extract due dates for every assignment, lab, quiz, midterm, and final, and display it in a clean, interactive calendar. Beyond the core parser, the web app includes smart reminders for upcoming deadlines and grade-tracking.",
  difficulty: "Intermediate",
  termLength: "Full academic year (Fall 2026 – Winter 2027)",
  isPast: false,
  // TODO: swap in actual lead links (linkedin/github) once known.
  lead: {
    name: "Matthew Wang",
    role: "Project Lead",
  },
  members: [],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "CalendarAI is a web app that turns course syllabi into a single, organized academic calendar. Students upload their syllabi, and CalendarAI uses large language models to read and extract due dates for every assignment, lab, quiz, midterm, and final, and display it in a clean, interactive calendar. Beyond the core parser, the web app includes smart reminders for upcoming deadlines and grade-tracking.",
      },
      {
        title: "Skills Gained",
        body: `- Document parsing and information extraction from unstructured text
- Evaluating AI accuracy with precision, recall, and test sets
- Full-stack development with React, TypeScript, and FastAPI
- Database design and authentication with Supabase
- Prompt engineering and structured output generation
- Deployment and collaborative development with GitHub`,
      },
      {
        title: "Technical Details",
        body: "Frontend built with React, TypeScript, and Tailwind CSS, using FullCalendar and deployed on Vercel. Backend uses FastAPI (Python) for syllabus uploads, text extraction, and API routes, deployed on Render. Supabase (PostgreSQL) stores users, courses, and events, and handles authentication. The AI pipeline sends extracted syllabus text to the Gemini API, which returns structured events (title, type, date, time, weight) in JSON. The team will also explore knowledge distillation, fine-tuning a smaller PyTorch model on Gemini's labeled outputs.",
      },
    ],
  },
} satisfies Project;
