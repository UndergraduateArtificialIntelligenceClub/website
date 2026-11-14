// Speech-Based Alzheimer AI Screening Tool — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "@/data/_types";

export default {
  slug: "alzheimer-ai-screening-tool",
  name: "Speech-Based Alzheimer AI Screening Tool",
  tagline: "Early MRI signal, surfaced sooner via speech.",
  description: "Develop an accessible app that uses a fine-tuned BERT model to estimate Alzheimer's prediction scores from short speech samples.",
  tag: "Healthcare",
  color: "pink",
  stack: [
    "BERT",
    "PyTorch",
    "Healthcare",
    "NLP",
  ],
  details: "Processes speech samples with a fine-tuned BERT model to estimate prediction scores.",
  difficulty: "Advanced (healthcare and NLP)",
  termLength: "Fall 2025 (with possibility of extension to full year)",
  isPast: true,
  year: "2025–26",
  source: "https://github.com/UndergraduateArtificialIntelligenceClub/Alzheimer_Screening_tool",
  lead: {
    name: "Xuan Khoi Nguyen",
    role: "Project Lead",
    github: "https://github.com/Khoi-Nguyen-Xuan",
  },
  members: [
    "Therese Coleongco",
    "Jessu Doroy",
    "Kai Tan",
    "Ayush Roy",
    "Jacob Garber",
    "Elena Jin",
  ],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "This project aims to develop a web or mobile app that allows users to record short speech samples. The backend will process the speech with a fine-tuned BERT-family model to estimate Alzheimer’s prediction scores - this is not a diagnosis. The fine-tuned BERT model is based on the project lead’s published research. The tool emphasizes accessibility, affordability, and ethical AI usage.",
      },
      {
        title: "Skills Gained",
        body: `- Experience with HuggingFace, PyTorch, and BERT models
- Backend development with Flask or FastAPI
- Web or mobile frontend using React or Streamlit`,
      },
      {
        title: "Technical Details",
        body: `- **ML & Backend:** Python
- **NLP:** HuggingFace + PyTorch
- **Frontend:** React/Streamlit
- **Hyperparameter Tuning:** Optuna`,
      },
    ],
  },
} satisfies Project;
