// Interview with Kenneth Dwyer.
// Auto-collected by src/data/interviews/index.ts — the folder this file
// sits in ("latest" or "past") becomes its category on the Interviews page.

import type { InterviewContent } from "@/data/_types";

export default {
  slug: "kenneth-dwyer",
  name: "Kenneth Dwyer",
  title: "NLP Specialist",
  teaser: "From skepticism to adoption: AI's impact on healthcare and software engineering.",
  bio: "AI researcher at Amii with a background in startups and health-tech. He focuses on NLP pipelines and the critical role of reproducibility in AI experiments.",
  color: "orange",
  pdf: "/documents/interviews/career-highlights-series/kenneth-dwyer.pdf",
  fullContent: `
### I saw on your LinkedIn that you've built NLP pipelines to extract behavioural health insights from unstructured clinical notes. Which industries do you feel are seeing the fastest or most interesting integration of AI today?

> Kenneth Dwyer: I'd say healthcare has traditionally lagged behind in adopting machine learning and AI. But things are changing quickly. We're now using cutting-edge tools—GPT models, OpenAI APIs, and other state-of-the-art technologies. That's been accelerating the pace of adoption, at least in the kind of work I do, like information extraction from clinical text. Outside of healthcare, it's harder for me to speak with authority. But I do come from a startup background—customer support, for instance, is an area where I saw clear potential, even back in 2020. I look back and think: wow, if we had access to something like GPT at the time, it would've been game-changing.

### You also mentioned software engineering and education. Do you see anything notable happening in those areas?

> Kenneth Dwyer: Absolutely. In software engineering, I've started using coding assistants. They speed things up in a major way. But there's a caveat—I've noticed junior team members sometimes rely too heavily on AI-generated code without fully understanding it. So we've had to re-emphasize testing, debugging, and knowing why things work. Education is especially interesting. I have a three-year-old and a baby at home, so I've been thinking a lot about how AI will shape learning. I think platforms like Khan Academy are doing some really exciting things here, too.

### You mentioned healthcare had lagged behind. Why do you think that's the case?

> Kenneth Dwyer: Healthcare is such a broad space, but when it comes to working with electronic health records or patient data, the bottleneck is often regulation. Privacy and compliance requirements are strict—HIPAA in the U.S., and similar laws in Canada. The process is improving, but it's still slow. There's a company we've looked into—Tonic.ai—that creates realistic synthetic datasets for testing and development. Solutions like that are helping us move faster without compromising privacy.

### Your current work seems to blend technical skills, business impact, and communication. Are there any lesser-known habits or personal workflows you've developed that have really made a difference in your career?

> Kenneth Dwyer: One thing that's become essential for me is reproducibility—really keeping track of experiments and changes. In startups, your work often speaks for itself. But in a large company, clear communication and repeatability are crucial. So if I'm running an NLP experiment, I want to log every prompt tweak, every model version, every dataset. It's not just about version-controlling your code with Git—you also need to track your models, data versions, even prompts. Tools like MLflow are great for this.

### You spent some time in a PhD program at the University of Alberta before moving into industry. Was there anything unexpected from that time that ended up shaping your career?

> Kenneth Dwyer: That's actually a bit of a sensitive topic for me. I didn't finish my PhD, and I still carry some regret. I had great mentors and learned a ton—but in hindsight, I think I lacked the drive to invent new things. I liked building things that worked. What changed everything was this opportunity from a company in Kelowna—Two Hat Security. I loved it. I came back, tried balancing work and my PhD part-time, but eventually decided to leave and go full-time into industry. And I've never regretted that decision. That internship opened every door after.

### If you had just 60 seconds to give advice to students aspiring to work in NLP or AI more broadly, what would you say?

> Kenneth Dwyer: If you want to actually build or improve these models, load up on math. Optimization, linear algebra, calculus—that's your toolbox. But if you're more interested in applying AI—using models, building products—then focus on problem-solving and engineering skills. Across both paths, the most underrated skill is communication. If you can translate technical work into business value—in plain language—you'll stand out. And lastly: keep experimenting. Build things. Break them. Learn fast.
`,
} satisfies InterviewContent;
