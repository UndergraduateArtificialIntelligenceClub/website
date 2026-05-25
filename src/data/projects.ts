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
};

export const projects: Project[] = [
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
    termLength: "Active (Production Deployment)",
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
    source: "https://github.com/UndergraduateArtificialIntelligenceClub/Clubmate-AI",
    lead: { name: "Sashreek Addanki", role: "Project Lead", github: "https://github.com/Sashreek007" },
    members: ["RAGHAV SETHI", "Francois Christien Lao Coleongco", "Lawrence Velilla", "Chetan Vig", "Daniel Liang"],
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

export const pastProjects: { year: string; items: { name: string; tagline: string; source?: string }[] }[] = [
  {
    year: "2024–25",
    items: [
      {
        name: "NHL Positivity Index",
        tagline: "Using NLP to quantify sentiment of NHL fanbases.",
        source: "https://github.com/UndergraduateArtificialIntelligenceClub/NHL-Positivity-Index"
      },
      { name: "Intelligent Assistant Bot", tagline: "Automated RSVP and RAG support for 700+ members.", source: "https://github.com/UndergraduateArtificialIntelligenceClub/uais_chatbot" },
      { name: "AI Due Diligence (2024)", tagline: "Inaugural cohort partnering with the UofA Innovation Fund." },
    ],
  },
];
