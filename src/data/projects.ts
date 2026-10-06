// Projects data. Read by src/pages/Projects.tsx and ProjectDetail.tsx.
// `color` must be one of the brand colors from src/data/colors.ts.

import type { Color } from "./colors";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tag: string;
  color: Color;
  stack: string[];
  details: string;
  difficulty?: string;
  termLength?: string;
  source?: string;
  demo?: string;
  lead: { name: string; role: string; linkedin?: string; github?: string } | { name: string; role: string; linkedin?: string; github?: string }[];
  members: string[];
  milestones?: { date: string; item: string }[];
  content?: {
    type: "readme" | "sections";
    body?: string;
    items?: { title: string; body: string }[];
  };
  gallery?: string[];
  documents?: { title: string; url: string }[];
  isPast?: boolean;
  year?: string;
};

export const projects: Project[] = [
    // ---- 2026-27 projects (new) ----
  {
    slug: "nexus-os",
    name: "Nexus OS",
    tagline: "An AI-native desktop shell you can talk to and gesture at.",
    description: "An AI-powered desktop shell that acts as an intelligent layer over Windows, letting users control apps, windows, workspaces, and search through natural language, structured AI tools, and gestures.",
    tag: "Agentic AI",
    color: "blue",
    stack: ["React", "TypeScript", "Rust", "Tauri", "FastAPI", "SQLite", "MediaPipe", "Win32 API"],
    details: "An AI-powered desktop shell that acts as an intelligent layer over Windows, allowing users to control applications, windows, workspaces, search, and system interactions through natural language, structured AI tools, and gestures. The system combines AI agents, desktop-state awareness, native OS control, information retrieval, and persistent memory rather than functioning as a standalone chatbot.",
    difficulty: "Intermediate-Advanced",
    termLength: "Full academic year (Fall 2026 – Winter 2027)",
    isPast: false,
    lead: { name: "Raghav Sethi", role: "Project Lead" } /* TODO: swap in actual lead name + links */,
    members: [],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "An AI-powered desktop shell that acts as an intelligent layer over Windows, allowing users to control applications, windows, workspaces, search, and system interactions through natural language, structured AI tools, and gestures. The system combines AI agents, desktop-state awareness, native OS control, information retrieval, and persistent memory rather than functioning as a standalone chatbot."
        },
        {
          title: "Skills Gained",
          body: `- Agentic AI and LLM tool calling
- Desktop-state management and systems integration
- React/TypeScript development
- Rust and Tauri for native OS control
- Windows/Win32 APIs, FastAPI, SQLite
- Computer vision and gesture recognition with MediaPipe
- Information retrieval and multimodal HCI`
        },
        {
          title: "Technical Details",
          body: `Built with a layered architecture: React + TypeScript for the desktop UI, Tauri/Rust for native OS and window control, FastAPI/Python for the AI agent, memory and retrieval, and SQLite for persistent state. The AI uses structured tool calling with shared tools for applications, windows, workspaces, search, and memory, supporting both hosted LLMs and local models through Ollama. MediaPipe provides gesture recognition, and Win32 APIs enable native Windows application control.`
        }
      ]
    }
  },
  {
    slug: "multi-agent-soccer-ai",
    name: "Multi Agent Soccer AI",
    tagline: "From predator-prey chases to a live 2v2 soccer match.",
    description: "Trains autonomous AI agents through Multi-Agent Reinforcement Learning, starting with simple predator-prey chases and culminating in a live 2v2 soccer tournament using Unity ML-Agents.",
    tag: "RL",
    color: "orange",
    stack: ["Python", "PyTorch", "PettingZoo", "Stable-Baselines3", "Unity ML-Agents", "Weights & Biases"],
    details: "This project introduces team members to Multi-Agent Reinforcement Learning (MARL) by training autonomous AI agents to master competitive and cooperative environments. Starting with a simple predator-prey setup, the project culminates in a live 2v2 soccer tournament game using Unity ML-Agents. The system has to learn good behavior purely through trial and error, guided by a reward signal. The environment is non-stationary, meaning agents must adapt their behaviour as teammates and opponents learn as well.",
    difficulty: "Beginner-Intermediate",
    termLength: "6 months (Fall 2026 – Winter 2027)",
    isPast: false,
    lead: { name: "Dominik Vrbanek", role: "Project Lead" } /* TODO: swap in actual lead name + links */,
    members: [],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "This project introduces team members to Multi-Agent Reinforcement Learning (MARL) by training autonomous AI agents to master competitive and cooperative environments. Starting with a simple predator-prey setup, the project culminates in a live 2v2 soccer tournament game using Unity ML-Agents. The system has to learn good behavior purely through trial and error, guided by a reward signal. The environment is non-stationary, meaning agents must adapt their behaviour as teammates and opponents learn as well."
        },
        {
          title: "Skills Gained",
          body: `- Reward shaping for reinforcement learning
- Self-play algorithms and training strategies
- Experiment tracking with industry-standard RL tools
- No prior RL experience required`
        },
        {
          title: "Technical Details",
          body: `Uses Python, PyTorch, PettingZoo, Stable-Baselines3, Weights & Biases, and Unity ML-Agents.`
        }
      ]
    }
  },
  {
    slug: "content-creator-ops-platform",
    name: "Content Creator Ops Platform",
    tagline: "Turns long-form video into viral-ready short clips automatically.",
    description: "A web app that transcribes long-form video, identifies the moments most likely to perform well, and automatically generates clips with captions, hooks, and posting recommendations.",
    tag: "Agentic AI",
    color: "green",
    stack: ["Whisper", "LangChain", "LangGraph", "Chroma", "Pinecone", "ffmpeg", "FastAPI", "React"],
    details: "This project builds a web app that turns long-form video into viral-ready short clips. The system transcribes raw video, identifies the moments most likely to perform well using proven viral editing patterns, then automatically generates clips with captions, hooks, and posting recommendations, mimicking what real creator editing teams already do by hand.",
    difficulty: "Beginner-Intermediate",
    termLength: "6 months (Fall 2026 – Winter 2027)",
    isPast: false,
    lead: { name: "Mousa Abuzar", role: "Project Lead" } /* TODO: swap in actual lead name + links */,
    members: [],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "This project builds a web app that turns long-form video into viral-ready short clips. The system transcribes raw video, identifies the moments most likely to perform well using proven viral editing patterns, then automatically generates clips with captions, hooks, and posting recommendations, mimicking what real creator editing teams already do by hand."
        },
        {
          title: "Skills Gained",
          body: `- Building AI agents and tool-calling pipelines
- Retrieval-augmented generation (RAG)
- Multimodal pipelines combining audio, video, and text
- Transcription APIs and video processing
- Full-stack web development`
        },
        {
          title: "Technical Details",
          body: `Built with a pipeline architecture: Whisper handles transcription, LangChain/LangGraph orchestrates the AI agent for moment detection and content generation, and Chroma/Pinecone power a RAG layer that grounds hook and posting recommendations in real viral performance data. ffmpeg handles clip cutting and caption burn-in, with a Python (FastAPI) backend and React frontend delivering the whole system as a web app.`
        }
      ]
    }
  },
  {
    slug: "dataspace",
    name: "Dataspace",
    tagline: "Cloud dataset storage guided by a goal-aware multi-agent system.",
    description: "An AI data analysis tool for storing and analyzing datasets through a multi-agent system that tracks user goals, builds visualizations, and improves data quality.",
    tag: "Data Science",
    color: "yellow",
    stack: ["Python", "React", "TypeScript", "FastAPI", "SQL", "Azure"],
    details: "Dataspace is an in-development AI data analysis tool. Designed for storing and analyzing datasets through a multi-agent system that tracks goals, builds visualizations and improves data quality. Uploaded datasets will be retrievable from the cloud, editable and analyzable with an orchestrating agent that uses multiple tools and a pipeline that performs analysis with understanding of the user's goals. The system will also support dataset editing.",
    difficulty: "Intermediate",
    termLength: "Full academic year (Fall 2026 – Winter 2027)",
    isPast: false,
    lead: { name: "Arden", role: "Project Lead" } /* TODO: swap in actual lead name + links */,
    members: [],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "Dataspace is an in-development AI data analysis tool. Designed for storing and analyzing datasets through a multi-agent system that tracks goals, builds visualizations and improves data quality. Uploaded datasets will be retrievable from the cloud, editable and analyzable with an orchestrating agent that uses multiple tools and a pipeline that performs analysis with understanding of the user's goals. The system will also support dataset editing."
        },
        {
          title: "Skills Gained",
          body: `- Building connected AI agents
- Full-stack development and cloud deployments
- Common data analysis techniques
- Sprint + task based development workflow`
        },
        {
          title: "Technical Details",
          body: `Built with Python, React (TypeScript), FastAPI, SQL, and Azure.`
        }
      ]
    }
  },
  {
    slug: "root-ai",
    name: "Root AI: A Node-Based Learning Companion",
    tagline: "Teach the AI your course material and it tracks what you're forgetting.",
    description: "A node-based review app where you teach the AI your course material and it tracks what you're forgetting, pulling you back through conversational audio reviews when concepts start slipping.",
    tag: "LLMs",
    color: "red",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Gemini API", "Google Cloud TTS"],
    details: "Root is a node-based review app where you teach the AI your course material and it tracks what you are forgetting. As you work through each concept, Root asks follow-up questions based on what you write or say, stores your thinking, and monitors which concepts are fading over time. When something starts slipping, it pulls you back through a conversational audio review. Team members will work across frontend development, database architecture, and multi-layer AI integration.",
    difficulty: "Intermediate to Advanced",
    termLength: "Full academic year (Fall 2026 – Winter 2027)",
    isPast: false,
    lead: { name: "Uchenna", role: "Project Lead" } /* TODO: swap in actual lead name + links */,
    members: [],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "Root is a node-based review app where you teach the AI your course material and it tracks what you are forgetting. As you work through each concept, Root asks follow-up questions based on what you write or say, stores your thinking, and monitors which concepts are fading over time. When something starts slipping, it pulls you back through a conversational audio review. Team members will work across frontend development, database architecture, and multi-layer AI integration."
        },
        {
          title: "Skills Gained",
          body: `- Prompt engineering with large language models
- Designing and managing complex relational databases
- Full-stack web development with Next.js and React
- Building and integrating AI audio pipelines
- Product design and cross-functional team collaboration`
        },
        {
          title: "Technical Details",
          body: `Built with Next.js, React, TypeScript, Supabase, PostgreSQL, Gemini API, and Google Cloud TTS.`
        }
      ]
    }
  },
  {
    slug: "wifi-biosensing-sleep-health",
    name: "Wi-Fi Biosensing for Sleep Health Monitoring",
    tagline: "Turning ordinary Wi-Fi signals into a contactless sleep sensor.",
    description: "Uses Wi-Fi Channel State Information captured with ESP32 microcontrollers as a contactless biosensor, estimating respiratory patterns, movement, and sleep-related trends with signal processing and ML.",
    tag: "Healthcare",
    color: "pink",
    stack: ["ESP32", "Python", "NumPy", "SciPy", "Signal Processing", "Machine Learning"],
    details: "This project demonstrates how Wi-Fi signals can be used as a contactless biosensor for sleep monitoring. Using ESP32 microcontrollers, the team collects Channel State Information (CSI) and analyzes how breathing, body movement, and changes in position affect the wireless signal. The goal is to build an end-to-end, consumer-friendly minimum viable product that can estimate respiratory patterns, detect movement and rest, and explore broader sleep-related patterns using signal processing and machine learning.",
    difficulty: "Intermediate",
    termLength: "Full academic year (Fall 2026 – Winter 2027)",
    isPast: false,
    lead: { name: "Arhm", role: "Project Lead" } /* TODO: swap in actual lead name + links */,
    members: [],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "This project demonstrates how Wi-Fi signals can be used as a contactless biosensor for sleep monitoring. Using ESP32 microcontrollers, the team collects Channel State Information (CSI) and analyzes how breathing, body movement, and changes in position affect the wireless signal. The goal is to build an end-to-end, consumer-friendly minimum viable product that can estimate respiratory patterns, detect movement and rest, and explore broader sleep-related patterns using signal processing and machine learning."
        },
        {
          title: "Skills Gained",
          body: `- Hardware prototyping and CSI signal processing
- Python for data analysis, feature extraction, time-series analysis
- Machine learning (supervised, unsupervised, self-supervised)
- Collaborative software and app development
- 3D design & printing`
        },
        {
          title: "Technical Details",
          body: `Uses ESP32-C5-WROOM-1U modules running ESP-IDF/ESP-CSI to transmit Wi-Fi signals and collect CSI, streamed to a computer and processed in Python with NumPy, Pandas, and SciPy for cleaning, filtering, and feature extraction. The ML pipeline starts with public CSI datasets for baseline models, then adapts to a self-collected dataset across participants, positions, and rooms. If time permits, a consumer-oriented MVP is built with Xcode/React, with 3D printing for the sensing hardware.`
        }
      ]
    }
  },
  {
    slug: "failure-forensics",
    name: "Failure Forensics",
    tagline: "Tracing exactly where multi-stage AI pipelines break.",
    description: "An AI observability and debugging platform that traces multi-stage AI pipelines to detect where failures originate, identify root causes, and convert failed cases into regression tests.",
    tag: "AI Observability",
    color: "blue",
    stack: ["Python", "FastAPI", "Pydantic", "OpenTelemetry", "SQLite", "Docker"],
    details: "Failure Forensics is an AI observability and debugging platform designed to understand where, why, and how failures occur inside multi-stage AI systems. Modern AI applications often consist of several connected stages such as document ingestion, extraction, classification, retrieval, and generation. When the final result is incorrect, it can be difficult to determine which stage originally caused the problem. Failure Forensics traces each step of the pipeline, records intermediate inputs and outputs, detects abnormal behaviour or quality degradation, and identifies the most likely root cause of a failure. The system also generates human-readable failure reports and converts failed cases into reusable evaluation tests.",
    difficulty: "Intermediate",
    termLength: "6 months (Fall 2026 – Winter 2027)",
    isPast: false,
    lead: { name: "Pranav", role: "Project Lead" } /* TODO: swap in actual lead name + links */,
    members: [],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "Failure Forensics is an AI observability and debugging platform designed to understand where, why, and how failures occur inside multi-stage AI systems. Modern AI applications often consist of several connected stages such as document ingestion, extraction, classification, retrieval, and generation. When the final result is incorrect, it can be difficult to determine which stage originally caused the problem. Failure Forensics traces each step of the pipeline, records intermediate inputs and outputs, detects abnormal behaviour or quality degradation, and identifies the most likely root cause of a failure. The system also generates human-readable failure reports and converts failed cases into reusable evaluation tests."
        },
        {
          title: "Skills Gained",
          body: `- AI/LLM observability and tracing
- Multi-stage AI pipeline development
- Root-cause analysis and LLM evaluation
- OpenTelemetry instrumentation
- Backend API development with FastAPI and Pydantic
- Building monitoring dashboards and regression tests
- Docker and containerized development`
        },
        {
          title: "Technical Details",
          body: `Uses a multi-stage AI pipeline built with Python and FastAPI, Pydantic for structured data, and OpenAI/LLM APIs for AI processing and failure analysis. OpenTelemetry traces each stage to detect where failures originate, while SQLite/JSON stores traces and evaluation data. A React or Streamlit dashboard visualizes failures and root causes, and Docker is used for consistent deployment.`
        }
      ]
    }
  },
  {
    slug: "calendarai",
    name: "CalendarAI: An Intelligent Academic Organizer",
    tagline: "Turns course syllabi into one organized academic calendar.",
    description: "A web app that uses large language models to extract due dates from uploaded syllabi and display them in a clean, interactive calendar with smart reminders and grade-tracking.",
    tag: "LLMs",
    color: "orange",
    stack: ["React", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "Gemini API", "PyTorch"],
    details: "CalendarAI is a web app that turns course syllabi into a single, organized academic calendar. Students upload their syllabi, and CalendarAI uses large language models to read and extract due dates for every assignment, lab, quiz, midterm, and final, and display it in a clean, interactive calendar. Beyond the core parser, the web app includes smart reminders for upcoming deadlines and grade-tracking.",
    difficulty: "Intermediate",
    termLength: "Full academic year (Fall 2026 – Winter 2027)",
    isPast: false,
    lead: { name: "Matthew Wang", role: "Project Lead" } /* TODO: swap in actual lead name + links */,
    members: [],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "CalendarAI is a web app that turns course syllabi into a single, organized academic calendar. Students upload their syllabi, and CalendarAI uses large language models to read and extract due dates for every assignment, lab, quiz, midterm, and final, and display it in a clean, interactive calendar. Beyond the core parser, the web app includes smart reminders for upcoming deadlines and grade-tracking."
        },
        {
          title: "Skills Gained",
          body: `- Document parsing and information extraction from unstructured text
- Evaluating AI accuracy with precision, recall, and test sets
- Full-stack development with React, TypeScript, and FastAPI
- Database design and authentication with Supabase
- Prompt engineering and structured output generation
- Deployment and collaborative development with GitHub`
        },
        {
          title: "Technical Details",
          body: `Frontend built with React, TypeScript, and Tailwind CSS, using FullCalendar and deployed on Vercel. Backend uses FastAPI (Python) for syllabus uploads, text extraction, and API routes, deployed on Render. Supabase (PostgreSQL) stores users, courses, and events, and handles authentication. The AI pipeline sends extracted syllabus text to the Gemini API, which returns structured events (title, type, date, time, weight) in JSON. The team will also explore knowledge distillation, fine-tuning a smaller PyTorch model on Gemini's labeled outputs.`
        }
      ]
    }
  },
  {
    slug: "pulseflux",
    name: "PulseFlux: rPPG for Contactless Vital Sign Monitoring",
    tagline: "Reading your heart rate from an ordinary webcam.",
    description: "A web platform using webcam-based remote photoplethysmography (rPPG) and computer vision to estimate heart rate, HRV, and respiratory rate, visualized through a live dashboard.",
    tag: "CV",
    color: "green",
    stack: ["OpenCV", "MediaPipe", "PyTorch", "FastAPI", "WebSocket", "React"],
    details: "This project explores remote photoplethysmography (rPPG), a computer vision technique to read heart rate variability (HRV) and respiration rate from just an ordinary webcam video, by detecting tiny color changes in facial skin invisible to the human eye. No wearable or contact sensor is required. The team builds a real-time processing pipeline, compares a classical signal-processing algorithm against a fine-tuned deep learning model, validates accuracy against an Apple Watch as ground truth, and ships the whole thing as a deployed full-stack web app with a live dashboard. Extracted HRV features can also feed a pretrained classifier to track stress and well-being trends over time.",
    difficulty: "Intermediate",
    termLength: "Full academic year (Fall 2026 – Winter 2027)",
    isPast: false,
    lead: { name: "Khoi & Rie", role: "Project Lead" } /* TODO: swap in actual lead name + links */,
    members: [],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "This project explores remote photoplethysmography (rPPG), a computer vision technique to read heart rate variability (HRV) and respiration rate from just an ordinary webcam video, by detecting tiny color changes in facial skin invisible to the human eye. No wearable or contact sensor is required. The team builds a real-time processing pipeline, compares a classical signal-processing algorithm against a fine-tuned deep learning model, validates accuracy against an Apple Watch as ground truth, and ships the whole thing as a deployed full-stack web app with a live dashboard. Extracted HRV features can also feed a pretrained classifier to track stress and well-being trends over time."
        },
        {
          title: "Skills Gained",
          body: `- Computer vision fundamentals (face detection, ROI tracking) with OpenCV and MediaPipe
- Signal processing (filtering, Fourier analysis) on real physiological signals
- Fine-tuning and evaluating pretrained deep learning models in PyTorch
- Backend development with FastAPI and real-time WebSocket streaming
- Frontend dashboard development with React
- Database design for time-series health data
- Deployment: Docker, CI/CD, cloud hosting
- Benchmarking against ground truth and fairness/bias evaluation`
        },
        {
          title: "Technical Details",
          body: `Pipeline: webcam to face/ROI detection (MediaPipe) to signal extraction to filtering & FFT to heart rate, HRV, and respiration rate. Compares a fast, training-free classical algorithm (CHROM/POS) as the live baseline against a pretrained deep learning model (rPPG-Toolbox) as an accuracy benchmark. Uses UBFC-rPPG for training/evaluation and VitalVideo (six skin tones) to check accuracy across skin tones, validated against an Apple Watch. Stack: React + FastAPI + database, containerized and deployed with CI/CD.`
        }
      ]
    }
  },
  {
    slug: "foundations-of-deep-learning-reading-club",
    name: "Foundations of Deep Learning Reading Club",
    tagline: "The key ideas that led to modern deep learning.",
    description: "A weekly reading club working through one foundational deep learning paper at a time, with a monthly hands-on implementation of a key figure or result from a chosen paper.",
    tag: "Research",
    color: "yellow",
    stack: ["Discord", "Notion"],
    details: "Weekly, the group reads one foundational paper that helps build understanding of modern AI, meeting afterward to discuss ideas, thoughts, and questions, and documenting the discussion. Once a month, the group chooses one paper to implement, recreating a figure with an interesting or beautiful result to build deeper understanding. The time commitment is a one-hour weekly in-person meeting plus reading and implementation time, estimated around four hours per week. Anyone interested and passionate about learning is welcome; a background in linear algebra, probability, and optionally machine learning basics is ideal but can be made up independently.",
    difficulty: "Intermediate",
    termLength: "Full academic year (Fall 2026 – Winter 2027)",
    isPast: false,
    lead: { name: "Raza", role: "Project Lead" } /* TODO: swap in actual lead name + links */,
    members: [],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "Weekly, the group reads one foundational paper that helps build understanding of modern AI, meeting afterward to discuss ideas, thoughts, and questions, and documenting the discussion. Once a month, the group chooses one paper to implement, recreating a figure with an interesting or beautiful result to build deeper understanding. The time commitment is a one-hour weekly in-person meeting plus reading and implementation time, estimated around four hours per week. Anyone interested and passionate about learning is welcome; a background in linear algebra, probability, and optionally machine learning basics is ideal but can be made up independently."
        },
        {
          title: "Skills Gained",
          body: `- Reading and digesting complex research papers
- Translating ideas into code
- Long-term understanding of deep learning ideas that helps avoid fad thinking`
        },
        {
          title: "Technical Details",
          body: `Minimal technical software required; coordination happens over Discord and Notion. Papers are chosen so implementations can run without external compute or rented GPUs.`
        }
      ]
    }
  },
  {
    slug: "discord-anti-spam-bot",
    name: "Discord Anti-Spam & Moderation Bot",
    tagline: "Production-grade hybrid ML/Regex security system.",
    description: "A smart defense system built to stop the scams we all hate. Combines BERT transformer models with regex to process 1,000+ daily messages.",
    tag: "Security",
    color: "blue",
    stack: ["BERT", "Python", "Regex", "Discord API"],
    details: "A smart defense system built to stop the scams we all hate. Combines BERT transformer models with regex to process 1,000+ daily messages.",
    difficulty: "Advanced (Machine Learning, Cloud Infrastructure, DevOps)",
    termLength: "Full academic year (Fall 2025 – Winter 2026)",
    isPast: true,
    year: "2025–26",
    source: "https://github.com/UndergraduateArtificialIntelligenceClub/Spam-Detection-Discord-Bot",
    lead: [{ name: "Aarush Bhat", role: "Project Lead", github: "https://github.com/aarushb" }, { name: "Sashreek Addanki", role: "Project Lead", github: "https://github.com/Sashreek007" }],
    members: [],
    content: {
      type: "readme",
      body: `## The Motivation: "With Utmost Pleasure..."
If you have been on any UofA Discord for more than a week, you have seen it. A message pops up in a general channel or your DMs:

> *"With utmost pleasure, I'm giving out my MacBook pro 2025... It is in perfect health... Strictly First come first serve..."*

It’s spam, it’s annoying, and it targets the most vulnerable members of a community. While regex filters catch some of these, scammers evolve. They change fonts, use images, or use social engineering ("I accidentally reported your account!"). We built this bot not just to filter keywords, but to understand **context**.

---

## Part 1: Securing Your Community (What We Learned)
Before we even talk about our bot, we want to share some things we learned during development. Here are our recommendations:

### 1. The "Welcome" Firewall
Don't let new users chat immediately.
* **Verification:** Set your server to "High" (requires a verified phone/email).
* **Rules Screening:** Enable "Membership Screening." Users must explicitly click to accept rules before typing. This breaks many low-effort script bots.

### 2. Native AutoMod is Powerful
Discord has released great tools recently that many admins overlook:
* **Mention Spikes:** You can configure AutoMod to block messages that mention a specific number of unique users (e.g., 5+). This kills "mass ping" attacks instantly.
* **The @everyone Risk:** Restrict the ability to mention @everyone and @here to Admins only.

### 3. Free vs. Nitro
A common misconception is that you need to pay for security. You don't. While Nitro offers perks like bigger file uploads, the core security suite (AutoMod, Audit Logs, Verification) is entirely free. Our bot is designed to complement these free tools, filling the specific gaps they miss.

---

## Part 2: The Bot Capabilities
When native tools aren't enough, our bot steps in. It's currently processing messages with **97.8% accuracy**.

### 🤖 Hybrid Detection Pipeline
We use a "Swiss Cheese" model of defense. If a message gets past one layer, the next one catches it.
1. **Regex Layer (The Speed):** Instantly catches known scam patterns (like the MacBook copypasta or "steam nitro" links) with zero latency.
2. **ML Layer (The Brains):** If a message passes the regex check, it is analyzed by a **BERT Transformer model** (specifically fine-tuned on spam data). This understands context—it can tell the difference between someone *discussing* a scam and someone *posting* one.

### 📊 Real-Time Analytics Dashboard
Security shouldn't be a black box. We built a comprehensive \`!stats\` dashboard that provides transparency into the system's performance:
* **Live Session Stats:** Tracks uptime, messages analyzed per hour, and detection rates.
* **System Health:** Monitors CPU and RAM usage (optimized to run on just 2GB RAM).
* **Accuracy Metrics:** Tracks false positives vs. true positives in real-time.

### 🛡️ Smart Moderation & Permission Hierarchy
The bot respects the chain of command.
* **Role-Based Whitelisting:** We implemented a robust permission system. Admins and Moderators are automatically whitelisted from checks to prevent accidental flags during server maintenance.
* **Context-Aware Help:** The \`!help\` command is dynamic. Regular users see public commands, while Moderators and Admins see advanced diagnostic tools (\`!check\`, \`!dataset_info\`) based on their specific role permissions.

### 🚨 False Positive Resolution
No AI is perfect. If the bot makes a mistake, we made it incredibly easy to fix.
* **Reaction Workflow:** A moderator simply reacts with ❌ to the log message.
* **Auto-Correction:** The bot immediately restores the message to the channel, unbans/unmutes the user, and updates its internal dataset to learn from the mistake.

---

## Technical Stack & Infrastructure
* **Core:** Python 3.12, discord.py (Async/Await for concurrency)
* **AI/ML:** PyTorch, Transformers (Hugging Face)
* **Data Engineering:** Thread-safe CSV pipelines for dataset generation.
* **Hosting:** cloud infrastructure.

## Privacy & Open Source
We believe you should own your community's data. While this bot logs data to build a training dataset for future research, these logging features are **optional** and can be disabled for privacy.`
    }
  },
  {
    slug: "ai-due-diligence-project",
    name: "AI Due Diligence Investment Analysis",
    tagline: "Separating real AI innovation from marketing hype.",
    description: "Partnering with the UA Innovation Fund, members gain real-world experience by conducting AI due diligence on startups, evaluating their technical and business viability for investment.",
    tag: "Venture",
    color: "orange",
    stack: ["Venture Capital", "Strategy", "Technical Analysis"],
    details: "Step into the world of venture capital alongside the UofA Innovation Fund's investment team.",
    difficulty: "Business-focused (Strategic AI & Venture Analysis)",
    termLength: "Full academic year (Fall 2025 – Winter 2026)",
    isPast: true,
    year: "2025–26",
    lead: { name: "Andrew Obwocha", role: "Project Lead", github: "https://github.com/AndrewObwocha" },
    members: ["Andy Zhou", "Janvi Raulji", "Ivan Gesteira Costa Neto", "Chloe Mannsberger-Tétreault", "Aalpesh Dayal"],
    gallery: [
      "/images/ai-due-diligence-project/image1.webp",
      "/images/ai-due-diligence-project/image2.webp",
      "/images/ai-due-diligence-project/image3.webp",
      "/images/ai-due-diligence-project/image4.webp",
      "/images/ai-due-diligence-project/image5.webp",
      "/images/ai-due-diligence-project/image6.webp"
    ],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "Step into the world of venture capital alongside the UofA Innovation Fund's investment team, working with leading AI experts from across the university on a critical mission: separating real AI innovation from marketing hype. Together, we combine rigorous technical analysis with market data and qualitative judgment to build a complete map of an early-stage startup. This final report is consequential, informing how the Fund deploys its $10M in capital and shaping the future of tech in Alberta."
        },
        {
          title: "Skills Gained",
          body: "- Learn to analyze AI startups, connecting deep technology to business strategy and market potential.\n- Master frameworks to assess a company's technical defensibility, data moat, and scalability.\n- Craft investment memos and deliver data-driven recommendations designed to persuade stakeholders.\n- Build your network by working with the UofA Fund's team and getting a first look at emerging founders."
        },
        {
          title: "Technical Details",
          body: "- Operate under a Non-Disclosure Agreement (NDA), handling sensitive info.\n- Train on and utilize expert-validated investment evaluation models.\n- Produce professional-grade reports for an official investment committee."
        }
      ]
    }
  },
  {
    slug: "rag-chatbot-lecture-notes",
    name: "RAG-Based Chatbot for Lecture Notes",
    tagline: "Your personal AI study assistant.",
    description: "Build a personal AI study assistant. This chatbot processes uploaded lecture notes (PDFs) and uses a Large Language Model to answer questions, generate summaries, and provide explanations.",
    tag: "LLMs",
    color: "green",
    stack: ["Python", "Vector DB", "OpenAI", "RAG"],
    details: "A personal study assistant where students upload PDFs, which are processed and stored in a vector database.",
    difficulty: "Beginner (AI basics and Retrieval-Augmented Generation)",
    termLength: "Full academic year (Fall 2025 – Winter 2026)",
    isPast: true,
    year: "2025–26",
    lead: { name: "Usaid Ahmed", role: "Project Lead", github: "https://github.com/Usaidahmed10" },
    members: ["Ayesha Junaid", "Jayden Ngo", "Lucas Chomey", "Amisha Mittal", "Waylon Wang"],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "This project is a chatbot designed as a personal study assistant. Students will upload their lecture notes (PDFs), which will be processed and stored in a vector database. The chatbot will use a Large Language Model to retrieve relevant information and generate answers, summaries, or explanations."
        },
        {
          title: "Skills Gained",
          body: "- Python development and GitHub collaboration\n- Working with vector search databases\n- Using OpenAI or AWS Bedrock APIs\n- Documenting and presenting a technical project"
        },
        {
          title: "Technical Details",
          body: "- **Core Language:** Python\n- **PDF Parsing:** PyMuPDF or pypdf\n- **Vector Search:** FAISS or ChromaDB\n- **LLM:** OpenAI/AWS Bedrock APIs\n- **Version Control:** GitHub"
        }
      ]
    }
  },
  {
    slug: "palmpilot-gesture-control",
    name: "PalmPilot 2.0: Gesture Controlled Automation",
    tagline: "Control your laptop with hand gestures.",
    description: "Control your laptop using hand gestures! This project uses a webcam and computer vision to map real-time gestures to system commands like adjusting volume, switching tabs, or locking the screen.",
    tag: "CV",
    color: "yellow",
    stack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    details: "Recognize gestures in real time and map them to system commands.",
    difficulty: "Intermediate (computer vision and automation)",
    termLength: "Full academic year (Fall 2025 – Winter 2026)",
    isPast: true,
    year: "2025–26",
    source: "https://github.com/UndergraduateArtificialIntelligenceClub/palm-pilot2.0",
    lead: { name: "Aarush Bhat", role: "Project Lead", github: "https://github.com/aarushb" },
    members: ["Joel Kamminga", "Yingjie Liu", "Rehan Shanavas", "Judy Zhu", "Tina Lin"],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "PalmPilot 2.0 will allow users to control their laptops using hand gestures captured by a webcam. Computer vision models will recognize gestures in real time and map them to system commands such as adjusting volume, switching tabs, or locking the screen."
        },
        {
          title: "Skills Gained",
          body: "- Python programming and OpenCV basics\n- Real-time gesture recognition with MediaPipe or TensorFlow Lite\n- Automation with PyAutoGUI\n- Building accessibility-focused tools"
        },
        {
          title: "Technical Details",
          body: "- **Camera Input:** Python with OpenCV\n- **Gesture Recognition:** MediaPipe or TensorFlow Lite\n- **Command Execution:** PyAutoGUI\n- **Version Control:** GitHub"
        }
      ]
    }
  },
  {
    slug: "economic-drivers",
    name: "Economic Drivers of Crypto Adoption",
    tagline: "Analyzing how macroeconomics impact blockchain trends.",
    description: "This project investigates whether macroeconomic conditions can predict cryptocurrency adoption by building an Economic Anxiety Index and testing its relationship with on-chain metrics.",
    tag: "Data Science",
    color: "red",
    stack: ["Python", "ARIMA", "Prophet", "APIs"],
    details: "Explores how macroeconomic stressors like inflation impact cryptocurrency adoption.",
    difficulty: "Beginner (Economics and Data Science)",
    termLength: "Fall 2025 - Winter 2026",
    isPast: true,
    demo:"https://economic-drivers-of-cryptocurrency.vercel.app/",
    year: "2025–26",
    lead: { name: "Viktoria Lysenko", role: "Project Lead", github: "https://github.com/viktorialysenko" },
    members: ["Amara Zin", "Gloria Mathew", "Dominik Vrbanek", "Raahim Khan"],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "This project investigates whether macroeconomic conditions can predict cryptocurrency adoption. We built an Economic Anxiety Index combining inflation expectations, monetary expansion, and recession fears, then tested its relationship with on-chain crypto adoption metrics. Our analysis found a strong correlation (r = 0.67, p < 0.0001), supporting the 'crypto as inflation hedge' narrative with empirical evidence."
        },
        {
          title: "Skills Gained",
          body: "- Data collection from FRED API and blockchain data providers\n- Statistical analysis: correlation, Granger causality, time series validation\n- Machine learning comparison: Ridge, Random Forest, XGBoost, LSTM\n- Building live dashboards with real-time data updates"
        },
        {
          title: "Technical Details",
          body: "- **Data Analysis:** Python (pandas, scikit-learn, statsmodels)\n- **Visualization:** Matplotlib, Seaborn, Recharts\n- **Dashboard:** Next.js + Vercel with live FRED data integration"
        }
      ]
    }
  },
  {
    slug: "alzheimer-ai-screening-tool",
    name: "Speech-Based Alzheimer AI Screening Tool",
    tagline: "Early MRI signal, surfaced sooner via speech.",
    description: "Develop an accessible app that uses a fine-tuned BERT model to estimate Alzheimer's prediction scores from short speech samples.",
    tag: "Healthcare",
    color: "pink",
    stack: ["BERT", "PyTorch", "Healthcare", "NLP"],
    details: "Processes speech samples with a fine-tuned BERT model to estimate prediction scores.",
    difficulty: "Advanced (healthcare and NLP)",
    termLength: "Fall 2025 (with possibility of extension to full year)",
    isPast: true,
    year: "2025–26",
    source: "https://github.com/UndergraduateArtificialIntelligenceClub/Alzheimer_Screening_tool",
    lead: { name: "Xuan Khoi Nguyen", role: "Project Lead", github: "https://github.com/Khoi-Nguyen-Xuan" },
    members: ["Therese Coleongco", "Jessu Doroy", "Kai Tan", "Ayush Roy", "Jacob Garber", "Elena Jin"],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "This project aims to develop a web or mobile app that allows users to record short speech samples. The backend will process the speech with a fine-tuned BERT-family model to estimate Alzheimer’s prediction scores - this is not a diagnosis. The fine-tuned BERT model is based on the project lead’s published research. The tool emphasizes accessibility, affordability, and ethical AI usage."
        },
        {
          title: "Skills Gained",
          body: "- Experience with HuggingFace, PyTorch, and BERT models\n- Backend development with Flask or FastAPI\n- Web or mobile frontend using React or Streamlit"
        },
        {
          title: "Technical Details",
          body: "- **ML & Backend:** Python\n- **NLP:** HuggingFace + PyTorch\n- **Frontend:** React/Streamlit\n- **Hyperparameter Tuning:** Optuna"
        }
      ]
    }
  },
  {
    slug: "clubmate-ai-assistant",
    name: "AutoExec Club Bot (ClubMate AI)",
    tagline: "Automating administration for student clubs.",
    description: "Create a Discord bot to automate administrative tasks for student clubs. Using LangChain and the Model Context Protocol, it will integrate with tools like Google Calendar, Sheets, and Notion.",
    tag: "Agentic AI",
    color: "blue",
    stack: ["LangChain", "MCP", "Discord API", "Postgres"],
    details: "A Discord bot that reduces administrative workload for student clubs.",
    difficulty: "Intermediate (agentic AI systems)",
    termLength: "Full academic year (Fall 2025 – Winter 2026)",
    isPast: true,
    year: "2025–26",
    source: "https://github.com/UndergraduateArtificialIntelligenceClub/Clubmate-AI",
    lead: { name: "Sashreek Addanki", role: "Project Lead", github: "https://github.com/Sashreek007" },
    members: ["RAGHAV SETHI", "Francois Coleongco", "Lawrence Velilla", "Chetan Vig", "Daniel Liang"],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "ClubMate AI is a Discord bot that reduces administrative workload for student clubs. Using LangChain and the Model Context Protocol, it integrates with Google Calendar, Google Sheets, GitHub, Notion, and Obsidian to automate scheduling, room booking, and other tasks."
        },
        {
          title: "Skills Gained",
          body: "- Building with LangChain and MCP\n- Deploying Discord bots with Docker and CI/CD pipelines\n- Integrating APIs for scheduling and databases\n- Hands-on experience with agentic AI systems"
        },
        {
          title: "Technical Details",
          body: "- **AI/Agent Framework:** LangChain and MCP\n- **Integration:** Discord API\n- **Database:** Postgres or SQLite\n- **Deployment:** Docker and CI/CD"
        }
      ]
    }
  },
  // projects from 2024–25 and earlier
  {
    slug: "nhl-positivity-index",
    name: "NHL Positivity Index",
    tagline: "Quantifying fan sentiment using fine-tuned RoBERTa models.",
    description: "This project quantitatively assesses how positive or negative an NHL fanbase feels over a given period using natural language processing and sentiment analysis.",
    tag: "Data Science",
    color: "blue",
    stack: ["RoBERTa", "Python", "Sentiment Analysis", "Reddit API"],
    details: "A comprehensive measure of fanbase sentiment achieved by dissecting the tone and mood of Reddit discussions.",
    difficulty: "Advanced (NLP and Sentiment Analysis)",
    termLength: "Summer 2024",
    isPast: true,
    year: "2024–25",
    source: "https://github.com/UndergraduateArtificialIntelligenceClub/NHL-Positivity-Index",
    lead: { name: "Jacob Winch", role: "Project Lead", linkedin: "https://www.linkedin.com/in/jacob-winch/" },
    members: ["Tanmay Munjal", "Heiby Lau", "Alexander Bradley", "Arden Monaghan", "Yukesh Subedi", "William Luo"],
    gallery: [
      "/images/NHL_Positivity_Index/apr1_apr18_dashboard.png",
      "/images/NHL_Positivity_Index/draft_24_dashboard.png",
      "/images/NHL_Positivity_Index/feb16_feb29_dashboard.png",
      "/images/NHL_Positivity_Index/feb1_feb15_dashboard.png",
      "/images/NHL_Positivity_Index/mar16_mar31_dashboard.png",
      "/images/NHL_Positivity_Index/mar1_mar15_dashboard.png"
    ],
    content: {
      type: "readme",
      body: `We were inspired by the engaging and insightful ["Panic Index"](https://www.youtube.com/playlist?list=PL4KmQCGTJmgz9urZusFDiGC9Bzh2S67gM) series by YouTuber Shannon Skanes, also known as the Hockey Guy, where he ranks NHL teams based on their perceived level of panic at key moments throughout the season. Intrigued by this unique perspective on team performance, we wondered: Could we quantify the underlying sentiment of NHL fanbases in a similar vein? Thus, the NHL Positivity Index was born. Our project aims to quantitatively assess how positive or negative an NHL fanbase feels over a given period using artificial intelligence techniques. Specifically, we leverage an AI technique called natural language processing and sentiment analysis to analyze fan discussions. By dissecting the tone and mood from Reddit, we seek to provide a comprehensive measure of fanbase sentiment.

---

## The Data
The data is collected from Reddit. We extract comments from each NHL team’s subreddit. In particular, we extracted comments from the game day, pre-game, and post-game threads or threads of similar nature in each team’s subreddit. We did this to try and ensure that we have similar data from every team in the NHL. We also felt that posts under the pre-, post-, and game-day threads were the most authentic way to gauge general fan sentiment. To extract the comments we used [PRAW](https://praw.readthedocs.io/en/stable/), Python’s Reddit API Wrapper.

## Creation of a Training & Testing Dataset
With the hopes of improving the accuracy of [**cardiffnlp/twitter-roberta-base-sentiment-latest**](https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest). We manually labelled a random sample of 6168 comments from December 1st, 2023 to December 15th, 2023 from all NHL team’s subreddits. Once those comments were labelled we verified the answers with disagreements with cardiffnlp's, twitter-roberta-base-sentiment-latest model and with other members of the team. We split the 6168 comments into a training and testing set with 5168 and 1000 comments respectively.

## Fine-tuning the Model
With the help of Hugging Face's PEFT: Parameter-Efficient Fine-Tuning library we were able to effectively fine-tune [**cardiffnlp/twitter-roberta-base-sentiment-latest**](https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest). After fine-tuning, our Adapter model for [**cardiffnlp/twitter-roberta-base-sentiment-latest**](https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest), [Chelberta](https://huggingface.co/UAlbertaUAIS/Chelberta) achieved an accuracy score of 81.2% improving from the base model of 79.2% on our testing dataset mentioned above.

---

## Future Work
Some examples of future work can include extending this project to future sports. Additionally, there can be further improvements to our current project such as improving the sentiment analysis model or incorporating more aspects of an NHL team’s subreddit. One aspect that we are actively working on is a time series plot for each NHL team displaying the changes to their positivity score overtime.`
    }
  },
  {
    slug: "intelligent-assistant-bot",
    name: "Intelligent Assistant Bot",
    tagline: "Automated RSVP and RAG support for 700+ members.",
    description: "A multifunctional Discord bot serving as the central nervous system for the club's operations, automating events and providing RAG-based technical support.",
    tag: "Applied",
    color: "yellow",
    stack: ["Python", "GPT-4o", "RAG", "Discord API"],
    details: "Automated RSVP and RAG support for 700+ members.",
    difficulty: "Intermediate",
    termLength: "Winter 2025",
    isPast: true,
    year: "2024–25",
    source: "https://github.com/UndergraduateArtificialIntelligenceClub/uais_chatbot",
    lead: { name: "Sashreek Addanki", role: "Project Lead", github: "https://github.com/Sashreek007" },
    members: ["RAGHAV SETHI"],
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
* **API Orchestration:** Authenticating and syncing data between Discord, Google Calendar, and Google Sheets APIs.`
    }
  },
  {
    slug: "ai-due-diligence-2024",
    name: "AI Due Diligence (2024)",
    tagline: "Inaugural cohort partnering with the UofA Innovation Fund.",
    description: "The first cohort of members gaining real-world experience by conducting AI due diligence on startups for the UofA Innovation Fund.",
    tag: "Venture",
    color: "orange",
    stack: ["Venture Capital", "Strategy", "Technical Analysis"],
    details: "Inaugural cohort partnering with the UofA Innovation Fund.",
    difficulty: "Business-focused (Strategic AI & Venture Analysis)",
    termLength: "Winter 2025",
    isPast: true,
    year: "2024–25",
    lead: { name: "Andrew Obwocha", role: "Project Lead", github: "https://github.com/AndrewObwocha" },
    members: ["Andy Zhou", "Janvi Raulji", "Ivan Gesteira Costa Neto"],
    content: {
      type: "sections",
      items: [
        {
          title: "Description",
          body: "Step into the world of venture capital alongside the UofA Innovation Fund's investment team, working with leading AI experts from across the university on a critical mission: separating real AI innovation from marketing hype. Together, we combine rigorous technical analysis with market data and qualitative judgment to build a complete map of an early-stage startup."
        },
        {
          title: "Skills Gained",
          body: "- Learn to analyze AI startups, connecting deep technology to business strategy and market potential.\n- Master frameworks to assess a company's technical defensibility, data moat, and scalability.\n- Craft investment memos and deliver data-driven recommendations designed to persuade stakeholders."
        },
        {
          title: "Technical Details",
          body: "- Operate under a Non-Disclosure Agreement (NDA), handling sensitive info.\n- Train on and utilize expert-validated investment evaluation models.\n- Produce professional-grade reports for an official investment committee."
        }
      ]
    }
  }
];

export type PastProjectGroup = {
  year: string;
  items: { slug: string; name: string; tagline: string; source?: string }[];
};

// Auto-grouped from `projects`: any project with `isPast: true` is bucketed
// by its `year` (e.g. "2025–26"). To archive a project, just set
// `isPast: true` + `year` — no manual entry needed here.
export const pastProjects: PastProjectGroup[] = (() => {
  const groups = new Map<string, PastProjectGroup["items"]>();
  for (const p of projects) {
    if (!p.isPast) continue;
    const y = p.year ?? "Archive";
    if (!groups.has(y)) groups.set(y, []);
    groups.get(y)!.push({ slug: p.slug, name: p.name, tagline: p.tagline, source: p.source });
  }
  return [...groups.entries()]
    .sort((a, b) => parseInt(b[0], 10) - parseInt(a[0], 10))
    .map(([year, items]) => ({ year, items }));
})();