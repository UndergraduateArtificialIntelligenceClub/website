// Presentations / weekly talks. Read by src/pages/Presentations.tsx.
// era: "new" shows up in the current section, "past" in the archive section.

export type Presentation = {
  title: string;
  presenter?: string;
  date: string;
  description: string;
  tag?: string;
  recording?: string;
  slides?: string;
  era: "new" | "past";
};

export const presentations: Presentation[] = [
  // Fall 2026 — slides can be added here once each session wraps up.
  {
    // TODO: add slides/recording link manually when available.
    title: "NATxUAIS - LangChain & LangGraph Workshop",
    presenter: "Raghav",
    date: "Oct 23, 2026",
    tag: "Workshop",
    description: "Workshop on building with LangChain and LangGraph, run in collaboration with NAT.",
    slides: "https://docs.google.com/presentation/d/1iO5fkrKAjO190gijwqZr7_cXvMbfNb7A/edit?usp=drive_link&ouid=113523717977855544132&rtpof=true&sd=true",
    era: "new"
  },
  {
    title: 'Panel: "AI: Industry"',
    date: "Oct 9, 2026",
    tag: "Talk",
    description: "AI in Industry panel with Dura Digital, SonyAI, RLCore, and Amii.",
    slides: "https://docs.google.com/presentation/d/1nvlyqZbH_wU4tLZ9iVLdT7bdir0FE_r87vihw-wk1xs/edit?usp=drive_link",
    era: "new"
  },
  {
    // TODO: add slides/recording link manually when available.
    title: "UAISxUSig Club Collab",
    presenter: "Arhm",
    date: "Oct 2, 2026",
    tag: "Collab",
    description: "Collaboration with USig exploring the impact of Artificial Intelligence in Surgical practice.",
    slides: "https://www.canva.com/design/DAHWgzC-k5k/GPJmRLUgfufDq1_PPeOSCQ/edit",
    era: "new"
  },
  {
    title: "Fall Project Kick-Off",
    date: "Sep 25, 2026",
    tag: "Kickoff",
    description: "Fall Project Kick-Off.",
    slides: "https://docs.google.com/presentation/d/1XTpO4zbbCH0PJTVYRHCNPhxnSMg9SHS7_soUN7hkN6o/edit?usp=drive_link",
    era: "new"
  },
  {
    title: "Workshop - Intro to Python for AI/ML",
    presenter: "Connor & Kashish",
    date: "Sep 11, 2026",
    tag: "Workshop",
    description: "Intro to Python for AI/ML with Connor and Kashish.",
    slides: "https://docs.google.com/presentation/d/1ROhmbJZl7t-I-Y-4NHg4dkx2bcHPUulX2OABnUQY0Ss/edit?usp=drive_link",
    era: "new"
  },
  {
    title: "Fall Annual General Meeting (Fall AGM)",
    presenter: "Michael Bowling",
    date: "Sep 4, 2026",
    tag: "AGM",
    description: "Fall AGM with Michael Bowling.",
    slides: "https://docs.google.com/presentation/d/1YWbnBZ1MWXW6nCKtQkJPouB5zsctADyATNU4hHScrh4/edit?usp=drive_link",
    era: "new"
  },
  {
    title: "AI for Accessibility: A Technical Journey",
    presenter: "Aarush Bhat",
    date: "2025",
    description: "A technical deep dive into the evolution of assistive technology, ranging from early mechanical logic to modern multimodal LLMs. This presentation explores the 'I/O problem' for disabled users, the history of text-to-speech, and the future of agentic systems in accessibility.",
    slides: "https://docs.google.com/presentation/d/13DpGZga6Xft2ewYuzVKHwccnVse_B1Rbg3lR2PDHbb0?usp=drive_fs",
    era: "past"
  },
  {
    title: "Intro to Git & GitHub",
    presenter: "Hamidat Bello",
    date: "2025",
    description: "A comprehensive workshop covering the fundamentals of version control. Topics include Git's mental model (workspace vs. staging vs. repo), handling merge conflicts, and collaboration workflows using branches and GitHub Pull Requests.",
    slides: "https://drive.google.com/file/d/1UxRn2q6k_dKcgBr6sLpX2azuwcA9qwvm/view?usp=sharing",
    era: "past"
  },
  {
    title: "Will AI Take My Job?",
    presenter: "Hamidat Bello",
    date: "2025",
    description: "An analysis of the current AI labor market landscape, featuring data from the ILO and Stanford Digital Economy Lab. Discusses the disproportionate impact on early-career developers, the difference between automation and augmentation, and strategies for career resilience in the AI era.",
    slides: "https://drive.google.com/file/d/1cuXJqULo8JzeyvpLoruAoBy94rP35fA-/view?usp=sharing",
    era: "past"
  },
  {
    title: "Data Cleaning Workshop",
    presenter: "Jacob Winch",
    date: "2024",
    description: "A Google Colab notebook going over data cleaning in Python with Pandas, Matplotlib, and Seaborn.",
    slides: "https://colab.research.google.com/drive/1nqyQoPrI4j5zNk1wZDOHWn9igIgSeIZj",
    era: "past"
  },
  {
    title: "scikit-learn Workshop",
    presenter: "Taran Purewal",
    date: "2024",
    description: "A Google Colab notebook going over an intro to machine learning using scikit-learn.",
    slides: "https://colab.research.google.com/drive/1t86MEw9lGtnNGfLHsroqkqS-q332PWK7?usp=sharing",
    era: "past"
  },
  {
    title: "UAIS Projects and AltaML Showcase",
    presenter: "UAIS Project Teams and Deanna Brousseau and Sevi Zhou from AltaML",
    date: "Nov 2023",
    description: "A showcase of projects that the UAIS was working on in November 2023. Also an introduction to AltaML.",
    slides: "https://docs.google.com/presentation/d/1Nv89uCZENK3p6_vRMy-vLUPPWePKtGiH3NLGp5VTJCs/edit",
    era: "past"
  },
  {
    title: "Welcome to UAIS",
    presenter: "Justin Stevens",
    date: "Historical",
    description: "Introduction of the club and various subfields of AI.",
    slides: "https://numbertheoryguydotcom.files.wordpress.com/2018/12/Welcome-to-Undergraduate-Artificial-Intelligence-Society.pdf",
    era: "past"
  },
  {
    title: "Image Classifiers",
    presenter: "Justin Stevens",
    date: "Historical",
    description: "Introduction to image classifiers using the MNIST dataset, using tensorflow with Keras, and gradient descent.",
    slides: "https://numbertheoryguydotcom.files.wordpress.com/2019/04/graddescent2-1.pdf",
    era: "past"
  },
  {
    title: "Alpha Go",
    presenter: "Martin Müller",
    date: "Historical",
    description: "Presentation from Dr.Müller talking about Alpha Go.",
    slides: "https://webdocs.cs.ualberta.ca/~mmueller/ps/2020-Ugrad-AI-group.pdf",
    era: "past"
  },
  {
    title: "Python Workshop",
    presenter: "Giancarlo Pernudi Segura",
    date: "Historical",
    description: "Workshop for those who are new to Python or looking for some special. tips.",
    recording: "https://www.youtube.com/watch?v=u1tYLqSAkZA&feature=youtu.be",
    era: "past"
  },
  {
    title: "Python Environments",
    presenter: "Paul Saunders & Giancarlo Pernudi Segura",
    date: "Historical",
    description: "Online videos showing a basic introduction to python environments.",
    recording: "https://www.youtube.com/watch?v=spfOM0EMj78&list=PLG7WqhOYbVgl7DYgEH73AIXt1_Y7bkoBz",
    era: "past"
  },
  {
    title: "Advanced Architectures - AIMSS AI course",
    presenter: "Giancarlo Pernudi Segura",
    date: "Historical",
    description: "An overview of CNNs, RNNs, NLP, RL & and their applications in medicine.",
    slides: "https://www.aimss.ca/course-resources#comp-kmoddck7",
    era: "past"
  }
];
