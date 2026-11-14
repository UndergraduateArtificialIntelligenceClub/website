// Foundations of Deep Learning Reading Club — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "@/data/_types";

export default {
  slug: "foundations-of-deep-learning-reading-club",
  name: "Foundations of Deep Learning Reading Club",
  tagline: "The key ideas that led to modern deep learning.",
  description: "A weekly reading club working through one foundational deep learning paper at a time, with a monthly hands-on implementation of a key figure or result from a chosen paper.",
  tag: "Research",
  color: "yellow",
  stack: [
    "Discord",
    "Notion",
  ],
  details: "Weekly, the group reads one foundational paper that helps build understanding of modern AI, meeting afterward to discuss ideas, thoughts, and questions, and documenting the discussion. Once a month, the group chooses one paper to implement, recreating a figure with an interesting or beautiful result to build deeper understanding. The time commitment is a one-hour weekly in-person meeting plus reading and implementation time, estimated around four hours per week. Anyone interested and passionate about learning is welcome; a background in linear algebra, probability, and optionally machine learning basics is ideal but can be made up independently.",
  difficulty: "Intermediate",
  termLength: "Full academic year (Fall 2026 – Winter 2027)",
  isPast: false,
  // TODO: swap in actual lead links (linkedin/github) once known.
  lead: {
    name: "Raza",
    role: "Project Lead",
  },
  members: [],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "Weekly, the group reads one foundational paper that helps build understanding of modern AI, meeting afterward to discuss ideas, thoughts, and questions, and documenting the discussion. Once a month, the group chooses one paper to implement, recreating a figure with an interesting or beautiful result to build deeper understanding. The time commitment is a one-hour weekly in-person meeting plus reading and implementation time, estimated around four hours per week. Anyone interested and passionate about learning is welcome; a background in linear algebra, probability, and optionally machine learning basics is ideal but can be made up independently.",
      },
      {
        title: "Skills Gained",
        body: `- Reading and digesting complex research papers
- Translating ideas into code
- Long-term understanding of deep learning ideas that helps avoid fad thinking`,
      },
      {
        title: "Technical Details",
        body: "Minimal technical software required; coordination happens over Discord and Notion. Papers are chosen so implementations can run without external compute or rented GPUs.",
      },
    ],
  },
} satisfies Project;
