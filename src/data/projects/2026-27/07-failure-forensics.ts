// Failure Forensics — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "@/data/_types";

export default {
  slug: "failure-forensics",
  name: "Failure Forensics",
  tagline: "Tracing exactly where multi-stage AI pipelines break.",
  description: "An AI observability and debugging platform that traces multi-stage AI pipelines to detect where failures originate, identify root causes, and convert failed cases into regression tests.",
  tag: "AI Observability",
  color: "blue",
  stack: [
    "Python",
    "FastAPI",
    "Pydantic",
    "OpenTelemetry",
    "SQLite",
    "Docker",
  ],
  details: "Failure Forensics is an AI observability and debugging platform designed to understand where, why, and how failures occur inside multi-stage AI systems. Modern AI applications often consist of several connected stages such as document ingestion, extraction, classification, retrieval, and generation. When the final result is incorrect, it can be difficult to determine which stage originally caused the problem. Failure Forensics traces each step of the pipeline, records intermediate inputs and outputs, detects abnormal behaviour or quality degradation, and identifies the most likely root cause of a failure. The system also generates human-readable failure reports and converts failed cases into reusable evaluation tests.",
  difficulty: "Intermediate",
  termLength: "6 months (Fall 2026 – Winter 2027)",
  isPast: false,
  // TODO: swap in actual lead links (linkedin/github) once known.
  lead: {
    name: "Pranav",
    role: "Project Lead",
  },
  members: [],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "Failure Forensics is an AI observability and debugging platform designed to understand where, why, and how failures occur inside multi-stage AI systems. Modern AI applications often consist of several connected stages such as document ingestion, extraction, classification, retrieval, and generation. When the final result is incorrect, it can be difficult to determine which stage originally caused the problem. Failure Forensics traces each step of the pipeline, records intermediate inputs and outputs, detects abnormal behaviour or quality degradation, and identifies the most likely root cause of a failure. The system also generates human-readable failure reports and converts failed cases into reusable evaluation tests.",
      },
      {
        title: "Skills Gained",
        body: `- AI/LLM observability and tracing
- Multi-stage AI pipeline development
- Root-cause analysis and LLM evaluation
- OpenTelemetry instrumentation
- Backend API development with FastAPI and Pydantic
- Building monitoring dashboards and regression tests
- Docker and containerized development`,
      },
      {
        title: "Technical Details",
        body: "Uses a multi-stage AI pipeline built with Python and FastAPI, Pydantic for structured data, and OpenAI/LLM APIs for AI processing and failure analysis. OpenTelemetry traces each stage to detect where failures originate, while SQLite/JSON stores traces and evaluation data. A React or Streamlit dashboard visualizes failures and root causes, and Docker is used for consistent deployment.",
      },
    ],
  },
} satisfies Project;
