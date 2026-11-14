// RAG-Based Chatbot for Lecture Notes — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "@/data/_types";

export default {
  slug: "rag-chatbot-lecture-notes",
  name: "RAG-Based Chatbot for Lecture Notes",
  tagline: "Your personal AI study assistant.",
  description: "Build a personal AI study assistant. This chatbot processes uploaded lecture notes (PDFs) and uses a Large Language Model to answer questions, generate summaries, and provide explanations.",
  tag: "LLMs",
  color: "green",
  stack: [
    "Python",
    "Vector DB",
    "OpenAI",
    "RAG",
  ],
  details: "A personal study assistant where students upload PDFs, which are processed and stored in a vector database.",
  difficulty: "Beginner (AI basics and Retrieval-Augmented Generation)",
  termLength: "Full academic year (Fall 2025 – Winter 2026)",
  isPast: true,
  year: "2025–26",
  lead: {
    name: "Usaid Ahmed",
    role: "Project Lead",
    github: "https://github.com/Usaidahmed10",
  },
  members: [
    "Ayesha Junaid",
    "Jayden Ngo",
    "Lucas Chomey",
    "Amisha Mittal",
    "Waylon Wang",
  ],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "This project is a chatbot designed as a personal study assistant. Students will upload their lecture notes (PDFs), which will be processed and stored in a vector database. The chatbot will use a Large Language Model to retrieve relevant information and generate answers, summaries, or explanations.",
      },
      {
        title: "Skills Gained",
        body: `- Python development and GitHub collaboration
- Working with vector search databases
- Using OpenAI or AWS Bedrock APIs
- Documenting and presenting a technical project`,
      },
      {
        title: "Technical Details",
        body: `- **Core Language:** Python
- **PDF Parsing:** PyMuPDF or pypdf
- **Vector Search:** FAISS or ChromaDB
- **LLM:** OpenAI/AWS Bedrock APIs
- **Version Control:** GitHub`,
      },
    ],
  },
} satisfies Project;
