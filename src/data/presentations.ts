// Presentations / weekly talks. Read by src/pages/Presentations.tsx.

export type Presentation = {
  title: string;
  presenter: string;
  date: string;
  description: string;
  recording?: string;
  slides?: string;
};

export const presentations: Presentation[] = [
  {
    title: "AI for Accessibility: A Technical Journey",
    presenter: "Aarush Bhat",
    date: "2025",
    description: "A technical deep dive into the evolution of assistive technology, ranging from early mechanical logic to modern multimodal LLMs. This presentation explores the 'I/O problem' for disabled users, the history of text-to-speech, and the future of agentic systems in accessibility.",
    slides: "https://docs.google.com/presentation/d/13DpGZga6Xft2ewYuzVKHwccnVse_B1Rbg3lR2PDHbb0?usp=drive_fs"
  },
  {
    title: "Intro to Git & GitHub",
    presenter: "Hamidat Bello",
    date: "2025",
    description: "A comprehensive workshop covering the fundamentals of version control. Topics include Git's mental model (workspace vs. staging vs. repo), handling merge conflicts, and collaboration workflows using branches and GitHub Pull Requests.",
    slides: "https://drive.google.com/file/d/1UxRn2q6k_dKcgBr6sLpX2azuwcA9qwvm/view?usp=sharing"
  },
  {
    title: "Will AI Take My Job?",
    presenter: "Hamidat Bello",
    date: "2025",
    description: "An analysis of the current AI labor market landscape, featuring data from the ILO and Stanford Digital Economy Lab. Discusses the disproportionate impact on early-career developers, the difference between automation and augmentation, and strategies for career resilience in the AI era.",
    slides: "https://drive.google.com/file/d/1cuXJqULo8JzeyvpLoruAoBy94rP35fA-/view?usp=sharing"
  },
  {
    title: "Data Cleaning Workshop",
    presenter: "Jacob Winch",
    date: "2024",
    description: "A Google Colab notebook going over data cleaning in Python with Pandas, Matplotlib, and Seaborn.",
    slides: "https://colab.research.google.com/drive/1nqyQoPrI4j5zNk1wZDOHWn9igIgSeIZj"
  },
  {
    title: "scikit-learn Workshop",
    presenter: "Taran Purewal",
    date: "2024",
    description: "A Google Colab notebook going over an intro to machine learning using scikit-learn.",
    slides: "https://colab.research.google.com/drive/1t86MEw9lGtnNGfLHsroqkqS-q332PWK7?usp=sharing"
  },
  {
    title: "UAIS Projects and AltaML Showcase",
    presenter: "UAIS Project Teams and Deanna Brousseau and Sevi Zhou from AltaML",
    date: "Nov 2023",
    description: "A showcase of projects that the UAIS was working on in November 2023. Also an introduction to AltaML.",
    slides: "https://docs.google.com/presentation/d/1Nv89uCZENK3p6_vRMy-vLUPPWePKtGiH3NLGp5VTJCs/edit"
  },
  {
    title: "Welcome to UAIS",
    presenter: "Justin Stevens",
    date: "Historical",
    description: "Introduction of the club and various subfields of AI.",
    slides: "https://numbertheoryguydotcom.files.wordpress.com/2018/12/Welcome-to-Undergraduate-Artificial-Intelligence-Society.pdf"
  },
  {
    title: "Image Classifiers",
    presenter: "Justin Stevens",
    date: "Historical",
    description: "Introduction to image classifiers using the MNIST dataset, using tensorflow with Keras, and gradient descent.",
    slides: "https://numbertheoryguydotcom.files.wordpress.com/2019/04/graddescent2-1.pdf"
  },
  {
    title: "Alpha Go",
    presenter: "Martin Müller",
    date: "Historical",
    description: "Presentation from Dr.Müller talking about Alpha Go.",
    slides: "https://webdocs.cs.ualberta.ca/~mmueller/ps/2020-Ugrad-AI-group.pdf"
  },
  {
    title: "Python Workshop",
    presenter: "Giancarlo Pernudi Segura",
    date: "Historical",
    description: "Workshop for those who are new to Python or looking for some special. tips.",
    recording: "https://www.youtube.com/watch?v=u1tYLqSAkZA&feature=youtu.be"
  },
  {
    title: "Python Environments",
    presenter: "Paul Saunders & Giancarlo Pernudi Segura",
    date: "Historical",
    description: "Online videos showing a basic introduction to python environments.",
    recording: "https://www.youtube.com/watch?v=spfOM0EMj78&list=PLG7WqhOYbVgl7DYgEH73AIXt1_Y7bkoBz"
  },
  {
    title: "Advanced Architectures - AIMSS AI course",
    presenter: "Giancarlo Pernudi Segura",
    date: "Historical",
    description: "An overview of CNNs, RNNs, NLP, RL & and their applications in medicine.",
    slides: "https://www.aimss.ca/course-resources#comp-kmoddck7"
  }
];
