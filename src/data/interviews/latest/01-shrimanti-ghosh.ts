// Interview with Shrimanti Ghosh.
// Auto-collected by src/data/interviews/index.ts — the folder this file
// sits in ("latest" or "past") becomes its category on the Interviews page.

import type { InterviewContent } from "../../_types";

export default {
  slug: "shrimanti-ghosh",
  name: "Shrimanti Ghosh",
  title: "Postdoctoral Fellow in Medical AI at WCHRI & University of Alberta",
  teaser: "AI is a tool to increase our productivity and speed up processes, but humans must be responsible for the final delivery.",
  bio: "Shrimanti Ghosh is a postdoctoral fellow at the Women and Children's Health Research Institute (WCHRI) and the University of Alberta. Her research focuses on developing AI tools for real-time ultrasound analysis and fracture detection in pediatric emergency care, bridging the gap between computer science and clinical radiology.",
  color: "red",
  pdf: "/documents/interviews/career-highlights-series/Shrimanti-Ghosh.pdf",
  fullContent: `
### Rosanna: Your PhD is in computing science, but your postdoc places you inside a clinical department—radiology. What's it actually like to embed a computer scientist in a medical team? Where do the disciplines clash, and where do they click?

> Shrimanti Ghosh: Because my background has always been in mathematics and computer science, I come from a technical background. However, the projects I've worked on during my PhD and currently are health-related. I have collaborated with medical doctors for the last eight years. When you collaborate with doctors as a software developer or a technical person, I agree that at the beginning, there is a bit of a communication gap. Learning to understand their expectations and providing a solution from a technical point of view is something I have learned over the years.
>
> At the beginning, I definitely struggled to understand the core medical concepts they were explaining. I have some biological knowledge, but I'm not an expert in the medical field, so it took time for me to learn. Now I am better at understanding their point of view, but there is always a gap that we try to bridge. Another thing is that everybody thinks AI is magic—that everything can be done with AI if you just have some data. We've had doctors come to us saying they have "good data" (even when it wasn't) and expecting us to just try an AI algorithm and make it work. Because they aren't experts in AI, there is a lack of understanding of what AI is actually capable of. You cannot expect 95% accuracy for every problem; it heavily depends on how good your data is and the specific task you want to solve. In interdisciplinary fields, discrepancies happen, but we resolve them through lots of discussions and meetings. I'm still learning myself!

### Rosanna: Speaking about data specifically, medical AI has this gap between a promising model and something that clinicians will actually use and trust. Also, ultrasound is notoriously user-dependent, and pediatric anatomy changes dramatically as children grow. To train your models for complex tasks like video summarization and segmentation, where do you source your imaging data?

> Shrimanti Ghosh: The data we have been working on so far comes from real patients at the Stollery Children's Hospital. In the emergency department, we see a lot of children with wrist or elbow fractures. We also collaborate with some medical imaging clinics here, like MIC, where we get data on shoulders and other body parts. This is a collaboration through our supervisor, Dr. Jacob Jaremko. We have ethics approval to get this data so we can develop our AI models. Most of the data comes from our university hospital.

### Rosanna: How is the privacy of those patients preserved and protected? Is there consent given to use their images?

> Shrimanti Ghosh: There are two ways we get the data. One is retrospective, where the data is already collected. First, we need ethics approval. Then, we perform anonymization and de-identification. We have to make sure the patient's name, gender, and sensitive identifying information are removed. Once the data is clean, we pass it to the developers. In that case, we don't need direct consent from the patient because the data was already collected; we just need ethics approval.
>
> The other way is prospective data collection. If a patient is coming in today and we are collecting the data on the spot, we definitely need the patient's consent. We have consent forms. If the patient is a minor, their guardian or parents give consent for us to use the data for research purposes. After that, de-identification is done, and then we get the data. But everything requires ethics approval first.

### Rosanna: I was looking at the Women and Children's Health Research Institute (WCHRI), and it highlighted your research using AI to provide real-time feedback on image quality to nurses or physicians with light training at the triage desk. From a computing science perspective, how much more complex is it to build a model that evaluates a human operator's technique in real-time compared to a model that simply looks at a finished, static image to find a fracture?

> Shrimanti Ghosh: That's an interesting question. I received a postdoctoral fellowship with WCHRI, and this was one of the projects I was working on. In remote areas where specialized expertise or expensive MRI and CT machines aren't available, we want to promote portable ultrasound. Today, portable ultrasounds are very small and easy to carry, meaning the patient doesn't have to come to the hospital. We see many injuries at ski resorts or remote areas where the healthcare providers may not be expert sonographers—they might be triage nurses.
>
> Our goal is to provide real-time AI feedback alongside the ultrasound. When the nurse is scanning, the AI can say, "I am 90% confident there is a fracture." This gives the doctors or triage nurses more confidence in their decisions, which expedites the whole process. We are not trying to replace anybody; we are just trying to expedite the process.

### Rosanna: Is it possible for this model to evaluate the human operator's technique as well, or is the model just built to look at the images that are being created?

> Shrimanti Ghosh: The model evaluates the image coming in. As the human is taking the scan, that scan goes into the AI model, and the model predicts the result with a certain probability in real-time.

### Rosanna: Unlike an X-ray, which gives you a static 2D image, an ultrasound involves a dynamic, moving video sweep of the joint. Since your work involves video summarization, could you explain why summarizing these frames is a critical step for fracture detection, and how processing a live video stream shifts the computational challenges compared to traditional medical image classification?

> Shrimanti Ghosh: Let's say I have a fracture. From just one 2D image, it may not be easy to identify. But if I have a whole ultrasound sweep of the area, it might contain anywhere between 300 and 800 frames. For a physician, manually checking 500 frames during a treatment sweep is incredibly time-consuming.
>
> With our automatic video summarization, we focus on how good each frame is, and we eliminate very similar, consecutive frames. We want distinct frames depicting different anatomical details. Instead of looking at 500 frames, the doctor can look at the 50 most important frames. This reduces the time significantly and helps the doctor make a decision faster. That's why the summarization technique needs to be highly effective.

### Rosanna: As AI becomes more advanced, what is one human skill that you think has actually become more important rather than less?

> Shrimanti Ghosh: That's a hard question. Large language models (LLMs) and generative AI are getting smarter every day because of the huge amounts of data they are trained on. However, as responsible humans, we need to have in-depth knowledge about our core subjects to evaluate the AI's results. We know AI might be perfect someday, but right now, it still hallucinates.
>
> The main skill we must have is deep, foundational knowledge of our subjects—like computer science, programming, or medicine—so we understand when the AI is making mistakes. Even if AI makes a wrong prediction, a doctor must have the expertise to identify that error. The ultimate judgment should always come from a human being. AI is a tool to increase our productivity and speed up processes, but humans must be responsible for the final delivery.

### Andrew: Just as a follow-up on that, during your process of training and testing different models, do you make use of LLMs and generative AI in your workflow, or is it mostly just for generic searches?

> Shrimanti Ghosh: At this moment, we are not actively using LLMs directly in our research. Personally, I use LLMs to polish my code and writing, which is fine. However, in the medical field, hospitals are starting to use "AI Scribes." When a patient speaks to a doctor, the AI listens to the conversation, creates a transcript, and summarizes the most important points. The doctor doesn't have to write everything down and can prescribe medicine based on that summary. Doctors spend a lot of time on documentation, so if AI can expedite that process, they can focus on more important tasks.

### Andrew: I also had a more personal question about how you got into research. I saw that you started as a graduate research assistant and then decided to pursue a master's. While doing your bachelor's, were you always set on academia? Did you ever consider industry? What steps did you take—did you just reach out to professors?

> Shrimanti Ghosh: I have always liked academia because my parents are academics, so I grew up seeing their profession. I always wanted to do a PhD because, ultimately, to be a professor, you need one. After my bachelor's, I contacted professors from various universities.
>
> As a bit of career guidance for students wanting to pursue a master's or PhD: you need to research good universities and find professors doing work in your specific field. Reach out to them, send your CV, and let them know you are interested in their work. It also helps if you have some project ideas in mind. After doing that, I got into my master's, then my PhD, and now my postdoc. I do like industry, but I lean slightly more towards academia because I enjoy working with students, teaching, and research. I am open to industry roles as well, as I am currently searching for positions.

### Andrew: Do you teach at the U of A?

> Shrimanti Ghosh: I have taught a few courses at the U of A, mostly computer science and Python-related courses.

### Rosanna: Since you said you like teaching, if you had one minute to advise students aspiring to develop AI tools in healthcare settings, what critical tip would you give them?

> Shrimanti Ghosh: For any student who wants to work with AI, you definitely need programming skills—Python is currently the most popular language for AI. You also need a deep understanding of mathematics and statistics, as many AI algorithms in medicine rely heavily on stats.
>
> I recommend taking basic AI courses to understand the field truly. The problem today is that everyone is trying to learn AI because it's highly requested for jobs, but it is actually very difficult to learn properly. You can easily find code online and use built-in Python libraries, but that's not how you actually learn the subject. You need a strong foundation in math, computer science, and statistics so you understand the core concepts and methods before jumping into the field.

### Andrew: Thank you so much. Your answers have been amazing. Thanks for doing this; we appreciate it.

> Shrimanti Ghosh: Thank you so much. I'm so glad. It was a very nice experience meeting you both. Feel free to contact me if you need to! Since both of you are interested in AI, I hope you are familiar with Amii (Alberta Machine Intelligence Institute). They have some excellent career opportunities for undergrads. Feel free to reach out to them, or to me if you have any questions.
`,
} satisfies InterviewContent;
