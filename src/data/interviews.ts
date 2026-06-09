// Interviews data. Read by src/pages/Interviews.tsx and InterviewDetail.tsx.

import type { Color } from "./colors";

export type Interview = {
  slug: string;
  name: string;
  title: string;
  teaser: string;
  bio: string;
  fullContent: string;
  color: Color;
  pdf?: string;
};

export const interviews: Interview[] = [
  {
    slug: "adam-delgado",
    name: "Adam Delgado",
    title: "CEO at North Technology People",
    teaser: "On building tight-knit technical communities and why complementary skills beat clones.",
    bio: "Adam Delgado is the CEO at North Technology People and an organizer at AI Tinkerers. He focuses on the power of community and storytelling for founders.",
    color: "blue",
    pdf: "/documents/interviews/career-highlights-series/adam-delgado.pdf",
    fullContent: `
### You've been part of AI Tinkerers for eight months now. The community is known for hosting events, hackathons, and meetups across Calgary. In your experience, are there common traits among the people who attend these events? Or is it more of a random mix?

> Adam Delgado: AI Tinkerers is actually very intentional in its design—we curate our content at a high technical level for a technical audience. Our monthly in-person events are for what we call “AI Tinkerers”: AI/ML founders, researchers, data scientists, developers—anyone building in the AI/ML space. We recently had a great presentation by a Master's student from the University of Calgary, and the audience was equally engaged. It's not random at all—it's a strong, consistent community of builders.

### I actually saw you posted about the recent AI Tinkerers event hosted at Google Cloud. Was there a particular moment or demo that stood out to you?

> Adam Delgado: Yes! I actually meant to write more about it online. There was this great moment during the Q&A-someone asked a question, then another person followed up with a related question, and the presenter answered, and someone else chimed in again. It turned into this spontaneous, 7–10 minute dialogue. No script, just tech people talking tech. That's exactly what we want AI Tinkerers to be. It's not about me—it's for builders like you, and that energy really motivates me to keep going.

### You also help build AI startup teams as CEO of North Technology People. Besides technical and communication skills, which are pretty expected, are there other underrated qualities you look for in founders?

> Adam Delgado: Great question. When I work with founders—CEOs, CTOs, VPs—they often give me a spec for a role they're hiring for. What I've noticed is that not all founders are great at telling their company's story. A lot of them struggle to clearly communicate the mission, product, or vision. That's where I step in: I take their information and become a brand ambassador for them—sometimes representing the company better than they do. So I'd say storytelling and positioning are hugely underrated skills. Whether you're at a party, an investor pitch, or just explaining your work to someone—everything is communication.

### And what about candidates? What qualities do you see in top-tier engineers?

> Adam Delgado: I've interviewed over 10,000 people in my career, including time in San Francisco. The top engineers—the ones who get into Meta, Google, etc.—they all have a few things in common. They communicate exceptionally well. They can explain deeply technical things in ways non-technical people understand. They also present well-smart, casual, clear, confident. So two things: know your audience and present the part. That combination makes a big difference.

### You emphasized storytelling. What can tech founders do to actually improve that skill?

> Adam Delgado: First, understand your audience. If you're talking to engineers, fine—go technical. But most of the time, you should explain what you do in as few words as possible—ideally so a 5-year-old can understand it. Don't jump straight into the stack or the algorithm. Start high-level. Most people overcomplicate, and it hurts their pitch.

### If you had just one minute to advise students who want to build or lead their own AI startup, what would you say?

> Adam Delgado: I was just saying this yesterday-investors don't just invest in ideas. They invest in founders. And part of their thesis is founder fit. If two people have the same idea, but one team has founders who've known each other for years and built trust, they're usually more desirable. So here's my advice: If you're in university and you've got an idea—even a vague one-tell people. Find someone who complements your skillset. Not three engineers-get someone who can handle users, sales, research. Then grab a pizza, a six-pack, and brainstorm like crazy. Validate those ideas. Build fast. Iterate. If it fails? Great. You've got experience now. Start another. When you eventually apply for jobs, you'll be someone who built. And that stands out more than any internship.

### That reminds me of the business school case competitions I've seen—teams with diverse skill sets almost always win.

> Adam Delgado: Exactly. Same idea. A complementary team that works well together will always outperform a group of clones, no matter how smart.

### As a final thought—you mentioned the job market is rough right now. Any closing advice for students and grads trying to break in?

> Adam Delgado: Yeah, the market sucks right now. I've got 15 years of experience and even I struggled to get interviews recently. So here's the truth: DIY. Do it yourself. Start a side project. Get into an incubator. Build something. Even if it fails, you'll be able to say: "Hey, I was the CEO of a startup. Here's our website. Here's what we built.” That experience makes you incredibly desirable to employers. It shows initiative, resilience, and real-world value. Also, this is part of what I'm trying to fix with my startup, Sik Central. Most people don't know most companies, and vice versa. If we can connect grads and founders directly, we can break the traditional recruitment bottlenecks and help people get real traction.

### Thank you! This was incredibly insightful. I'll share the post with you once it's ready. Also, I'd love to collaborate with AI Tinkerers.

> Adam Delgado: Absolutely. We're doing this for students, grads, and researchers. Let's sync in August-I'll add you to the AI Tinkerers Discord, and we can make a big push when your society ramps up in September. Our events will stay free, and the more people we reach, the more value we can create together.
`,
  },
  {
    slug: "shibhansh-dohare",
    name: "Shibhansh Dohare",
    title: "PhD Researcher in Continual Learning",
    teaser: "Trusting your intuition against the hype in the world of Continual Learning.",
    bio: "UofA PhD researcher focusing on Continual Learning. His work is deeply influenced by Richard Sutton's foundational approaches to intelligence.",
    color: "green",
    pdf: "/documents/interviews/career-highlights-series/shibhansh-dohare.pdf",
    fullContent: `
### I went over your LinkedIn and saw that you've been researching for your doctorate in continual learning, deep learning, and reinforcement learning. What really stood out to you about those three fields over other areas of AI like NLP?

> Shibhansh Dohare: The main focus for me is continual learning. And continual learning isn't really separate from reinforcement learning or NLP or vision—it's orthogonal. What that means is, instead of training systems once on big datasets and deploying them, continual learning is about systems that keep learning from new data as it comes in. That's really important, because the world is always changing. Like, you might train GPT on data up to a certain point, say Spider-Man 2, but when a new Spider-Man movie comes out, the system needs to learn about it. So continual learning is essential for that. It's also, in my view, an essential part of intelligence itself. And because it's missing from a lot of current literature, that's where I've chosen to focus.

### Would you say there's also a deeper level of interest that drew you to it? Because continual learning is quite specialized. I get that it's orthogonal and incorporates other fields, but why did you go down this particular line instead of pushing frontiers in reinforcement learning?

> Shibhansh Dohare: My main goal is long-term-solving intelligence. And that means identifying computational principles that give rise to it. I think continual learning is a key component of that journey. There are definitely important open problems in reinforcement learning, deep learning, and all the others, but in the long run, I believe continual learning will be one of the most critical areas. So it's not just an interest; it's aligned with that bigger objective.

### Right now, AI is everywhere—LLMs, image generation, you name it. But you're currently a researcher at UofA, right?

> Shibhansh Dohare: Yeah, that's right.

### So at what point did you decide you were going to pursue research instead of going straight into industry? Was it during your undergrad or later in postgrad?

> Shibhansh Dohare: That's actually a really good question, because I remember in my second or third year of undergrad, during the summer, I was talking to my mom and I was just really confused. I was like, why would anyone choose to do a PhD? You could just go into industry, make money, do real-world work. But everything changed when I met Rich—Richard Sutton, one of my advisors. He had this big-picture view of AI. Not just that it's an important problem, but potentially the defining problem of our generation. Maybe even the last invention humanity makes on its own. It becomes a way of understanding ourselves—building beings that are just as smart as us. That perspective made me feel like this is the most impactful thing I could be doing. The impact might not be visible tomorrow or even in five years, but on a 50-year or 100-year timescale, this matters the most. Once I saw it that way, everything else felt smaller in comparison.

### That's powerful. So Rich really inspired you?

> Shibhansh Dohare: Absolutely.

### During your undergrad or postgrad, I'm sure you had events you attended, interactions with professors or peers, maybe collaborations with companies. Was there any one moment or experience that really shaped how you see the field or impacted your research?

> Shibhansh Dohare: Honestly, it ties back to the same thing. I did an internship with Rich, and in the first or second meeting, he asked me a question that really shook me. At that point, I'd taken a lot of machine learning courses, worked on computer vision, deep learning, lots of stuff—and it was all fun. But he asked: What do you think are the main algorithmic ideas we need to actually make intelligence? And I was stunned. No one had ever posed the problem that way before. Instead of chasing benchmark performance, he was thinking about the foundational ideas—like gradient descent, TD learning-deep, high-level abstractions. And that stuck with me. It felt like the right way to think about intelligence. Almost like how physicists, like Newton, tried to understand the universe at a fundamental level. That mindset had a big impact on me.

### So not every student gets the opportunity to meet someone like Richard Sutton, let alone be mentored by him. If you were to give advice to an aspiring Al undergrad today someone who doesn't have that kind of direct access—what would you say to them?

> Shibhansh Dohare: That's a good point. And I've heard this echoed by Rich, Yoshua, even Yann LeCun: The field will always have its hypes—whatever is trending. But if you feel like everyone is missing something, and you have a strong intuition about it, you should follow it. You should have logical reasons, of course, but even if you're going against the grain, that's often where the breakthroughs happen. Science tends to evolve not by following the hype but by going into the unknown. That's how deep learning and reinforcement learning made it-they were fringe ideas at one point. So if you think you're right and everyone else is missing it, even if it feels arrogant, you should still pursue it. It might be wrong 90% of the time, but that 1% can make all the difference.

### So trust your intuition—even when it contradicts the mainstream?

> Shibhansh Dohare: Exactly. Even if it feels isolating or unlikely, it's worth the pursuit.

### I want to pivot a bit. With LLMs, Copilot, Claude, and everything else evolving rapidly-what AI tools or resources do you personally use? How do you stay updated, considering there's something new every week?

> Shibhansh Dohare: Yeah, it's tough. I'm not sure I do a great job of staying up to date, honestly. As you said, there's just so much coming out. But my current feeling is that the best models-ChatGPT, Claude, Gemini—they're all about the same right now. Maybe small differences in performance, but nothing drastic. That could obviously change if someone releases a breakthrough, but for now, I don't stress too much over the details.

### And in terms of coding—how reliant are you on Claude or other AI assistants? Some people use it for everything, others just for debugging.

> Shibhansh Dohare: I'm not fully reliant yet, but I'm moving in that direction. I use it for generating code and debugging—it definitely speeds things up. But in my research, the bigger challenge is coming up with ideas and designing experiments. That takes time no matter what. Claude helps, but it's not the bottleneck. In software engineering, maybe it's a bigger productivity boost, but in research, you still have to go through the full experiment cycle.
`
  },
  {
    slug: "paul-saunders",
    name: "Paul Saunders",
    title: "AI Researcher",
    teaser: "Cutting through the noise: which AI trends are real versus pure hype.",
    bio: "AI researcher at the University of Alberta. He emphasizes soft skills and open-source contributions as the primary drivers of a successful career.",
    color: "yellow",
    pdf: "/documents/interviews/career-highlights-series/paul-saunders.pdf",
    fullContent: `
### What's one major AI research trend or technology you believe students should be paying attention to right now?

> Paul Saunders: Reinforcement Learning (RL) is slowly becoming more applicable to industry. For example, with Martha White's startup RL Core, it's getting to the point where RL jobs are feasible. It's still something you need to be very specialized in, but just knowing about RL isn't enough. It's something to keep an eye on and get more familiar with if it interests you.

### Okay, that's fantastic. Is there anything else you feel students should keep an eye out for beyond RL?

> Paul Saunders: Not really, nothing niche. Just stay aware of how things are going generally.

### Are there any AI fields, tools, or trends that you think are a little overhyped or have stalled in the real world, and what makes you feel that way?

> Paul Saunders: I think a lot of AI is just hype. There's a seeming need to put AI in a lot of stuff that isn't necessarily needed, or to advertise AI in things that just don't need it. Like, there are toothbrushes marketed as having AI, and I don't think that's necessary. I wouldn't say any specific development tool is overhyped; it's more a matter of figuring out what works for you. But certainly, some products and the general trend of putting AI in as much stuff as possible, I think, are a little overrated.

### You know, especially with agentic AI that's recently come up, I've noticed a lot of people are fearing for their occupations, their jobs. How do you feel about that?

> Paul Saunders: I mean, it depends on your role, right? The computer definitely replaced some jobs, but it also made people more productive and opened new possibilities. So, maybe your job will be replaced, but I don't think your position as a skilled individual will be replaced. You might have to learn new things, but hopefully, you were going to learn new things anyway over the course of your career. So, I don't think it's necessarily a bad thing.

### What cross-disciplinary skills have helped you most in your career?

> Paul Saunders: Yeah, the biggest thing has to be the soft skills—communication and teamwork abilities. I've been talking to a few recruiters recently, and they say the number one thing they see lacking in new graduates is that while they have good technical abilities, their soft skills are lacking. Because their soft skills are lacking, they don't work very well in teams or have an inability to communicate their abilities, and so they don't necessarily get a job. Having those soft skills, like learning how to work in a team, learning how to work in a software development team via internships or open source contributions, that's super essential, and it's also not really taught in typical coursework.

### What would you say something that undergrads can do by the time they graduate to actually develop a bit of their soft skills?

> Paul Saunders: One would be general projects, but not just like, "Oh, I built a small app." Open source is probably the best thing to do because it's an existing, large codebase in which you need to work with others to make changes. A project is cool, but if you can show that you can work in a team and you have a track record of working well in teams, that's way more beneficial than just walking through a project you did. So, open source is definitely beneficial, and executive work—anything you're doing where you're managing something—is super useful.

### What's the most underrated experience or project you did during your undergraduate that helped you farthest in your career?

> Paul Saunders: The projects that are somewhat underrated aren't necessarily projects that themselves were like, "Oh, this is actually a really cool project." Instead, they were projects that gave me an opportunity to meet other people. For example, I did a few research positions with professors, and those projects weren't themselves very interesting, but they fostered relationships where those professors knew other professors and would say, "Hey, I know this undergrad or this new graduate student. They're somewhat interested in what you're doing; maybe you should talk to them." Without that experience, I wouldn't have had those connections. So that's where it kind of comes down to communication and teamwork.

### If you had 60 seconds to give one piece of advice to an aspiring AI student, what would you say?

> Paul Saunders: AI is a massive field, so being an AI student is like being an engineer. The field is changing very quickly, but you can't just say, "I want to learn AI." That's kind of like saying, "I want to learn math." There are so many different subdomains to dip your toe in. And especially because, as I said, the field is changing so rapidly that you need to be aware of what's going on. So, join reading groups, network with other people, but more than anything, just be aware that you're never going to really feel like you know everything. And more importantly, you need to constantly be learning.

### Do you have a favorite AI resource, tool, podcast, or YouTuber that you normally consume?

> Paul Saunders: Uh, I don't really think I have one. I don't really watch much AI YouTube or anything like that. Computerphile is cool. In terms of resources, I go to research labs, I talk to people, I find out what they like, and then from them, I find out cool papers they like. I wish there was a really good centralized place to find new papers or anything like that, but there doesn't seem to be. GitHub Copilot is really good, especially because as a student in the GitHub Developer Pack, you get free Copilot access, so definitely take advantage of that. But yeah, other than that, I don't think there's necessarily a big resource that I'm using. I just kind of keep my ear to the ground.
`
  },
  {
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
  },
  {
    slug: "david-oconnell",
    name: "David O'Connell",
    title: "Software Developer & AI Practitioner",
    teaser: "Embracing agentic AI while maintaining software engineering fundamentals.",
    bio: "Chief Technology Officer at Artificial Agency with extensive experience in software development and high-level architecture.",
    color: "pink",
    fullContent: `
### What's one major AI research trend or technology you believe students or researchers should be paying attention to at this moment?

> David O'Connell: For me, it's agentic AI systems. I believe they're going to change everything - the way we approach problems and how we transform businesses. They'll be incredibly valuable.

### Agentic AI has been touted as being capable of replacing jobs. How do you feel about that? Do you think that's realistic?

> David O'Connell: I don't view it as replacing jobs. I see it as freeing up people to do more useful work. I also believe that any of these systems still involve a human in the loop. They become a tool to augment someone's productivity, not to totally replace them.

### Are there any AI field tools or trends that you think are over-appreciated?

> David O'Connell: I feel that way about the entire generative AI and agentic field. They are very advanced, very useful, but I still feel that a person needs to be there to monitor the output and ensure the quality is what you need. Saying that this is going to replace people's jobs is not correct. They're going to be very important tools, but they're still tools.

### Are there any cross-disciplinary skills that you think have helped you a lot in your software development and AI career?

> David O'Connell: Sure, so soft skills are definitely very important. One of the things that has gotten me to where I am is just the ability to talk to people and communicate. It's very helpful for all developers to be able to talk to people and understand business problems, understand the value you get from solving them, and understand how to solve them, not just from a technical point of view, but from the point of view of actually creating a solution that's useful to your end users.

### Is there any advice you can give to someone who maybe is aware they're not very good with soft skills and they want to work on that aspect of their career?

> David O'Connell: Yes, just dive in and start talking to people. I know some people are more shy and they don't like doing that. Earlier in my career, I was always hesitant to talk to folks, and you build up these scenarios that aren't going to happen. If you just talk to people and practice that as a skill, it'll be fine.

### Is there any particular experience or project that you did that was really beneficial to where you ended up today?

> David O'Connell: I find participating in public talks and giving seminars, and getting in front of people was immensely helpful. So, the projects themselves, it's hard to identify just one, but getting in front of people and talking about your ideas was immensely helpful.

### If you had 60 seconds to give one piece of advice to an aspiring software and AI student, what would you say?

> David O'Connell: From my viewpoint as a more traditional software developer, my advice would be: don't be scared of that. Embrace that. It's going to free you from a lot of the minutiae and a lot of the tedious work to do higher-level work. So, really learn how to use those tools, don't fight them, and build your skills in talking to people, understanding problems, and understanding how to deliver value. And also, build your skills in high-level architecture.

### What's your favorite AI resource or tool that you always use? And how do you stay up-to-date with AI?

> David O'Connell: So, I do a lot of reading. Like TLDR—they kind of take and put together that list of articles for you. I also like Technology Radar. And I've replaced straight Google searches with a tool called Perplexity. I like Perplexity quite a bit because it pulls together pretty high-quality solutions, with the asterisk that you should never rely totally on it; you should do the research yourself.
`
  },
  {
    slug: "kyle-myck",
    name: "Kyle Myck",
    title: "Director of Technology at Dura Digital",
    teaser: "The reality of building AI for enterprise and the risk of rushing integration.",
    bio: "Kyle Myck is the CEO and Managing Partner at Dura Digital, where he leads digital transformation projects with a focus on human-centered design and strategic AI integration.",
    color: "blue",
    pdf: "/documents/interviews/career-highlights-series/kyle-myck.pdf",
    fullContent: `
### From what I gather, Dura Digital can be considered an AI technology consultancy company that works with clients. Typically, who is usually the point of contact between Dura Digital and the company? Is it, for example, the owner, a CTO, or a CEO? And how does human behavior—which I saw on your LinkedIn is a huge part of your role—play into such an interaction and how do you develop a solution?

> Kyle Myck: Yeah, great question. Our engagement model and how we work with clients is we try to make sure the right people are in the right conversation. So often, you know, it'll be Fernando, our CEO, or myself who will initiate conversations with potential clients. Once we start working with them, our goal is to try to understand where we can help, where we can provide our expertise in the best way, and how our team can support them and what they want to accomplish.
>
> Depending on how those initial conversations go, we just try to bring team members together so we can facilitate the right conversation and help our clients move forward to solve the problems that they're looking to solve, or sometimes think about problems or opportunities in a different way.
>
> Definitely, the human approach for us is really, really important. There's a lot of debate right now, especially in AI, regarding the human side of it. The optimists might say that AI is going to help create a more human world; the pessimists might say it's going to help create less of a human world. But even before AI kind of took hold of technology in the last couple of years, we had our Human-Centered Design Studio, which is very focused on establishing empathy with the users of the technology that we might be working on and making sure that we're catering to the true needs of the human as opposed to sometimes the perceived needs. So, it's very important to us, and we have a lot of processes in place at Dura Digital that we use to make sure humans are always front and center.

### And what about from the client perspective? Do you normally speak with somebody who's technical or non-technical when it comes to such a consultancy scheme?

> Kyle Myck: Both. It really depends on the client. We work with clients as large as Microsoft—so very large organizations, some of the largest in the world. Of course, within those clients, there's technical folks, strategy people, business people; we work with all of them. Some of our smaller to medium-sized clients often don't have people who are very technical, or sometimes they don't have folks that have a lot of business strategy knowledge, so we do help fill that gap. It's across the board on the client side.

### Okay, that's fantastic to hear.

> Kyle Myck: Yeah, sort of a necessity, I guess, just based on how we engage and how we try to help.

### Yeah, I guess it's very hard to do the technology without the business. They're very coupled. It’s very hard to separate the two; they're always going to play into each other, I'm sure.

> Kyle Myck: Exactly, especially as things evolve. I feel like there's a valid argument that every company is a technology company these days.

### Very valid. Actually, just on that, I saw that Dura Digital isn't necessarily constrained to one technological stack. You mentioned Microsoft right now, but I've seen Google, OpenAI, Anthropic—these are all very different models, very good for different things. So, a question I had is: when you're scoping a project for a new client, the first factors that jump into mind are the cost and model performance for the specific task. Would you like to further explain any of these two? Or is there perhaps even a third, fourth, or fifth factor that doesn't come to mind immediately but is actually really important when you consider what to collaborate on?

> Kyle Myck: Yeah, we've been quite intentional on being as technology agnostic as we can. I'll speak to that generally first, and then I'll talk about it from an AI perspective.
>
> Generally, we want to be able to meet clients where they're at and provide the best solution for them, and be able to help a wide variety of clients. So when we think about engaging, we have clients whose technology stack is entirely in the Google ecosystem. We have some that work entirely with Microsoft, some with AWS, and some with hybrids. We want to be able to help them advance regardless of the technology stack that they've chosen, and we want to be able to advise on what fits best. For new clients, we don't want to have any sort of bias on what we're presenting just because that's our experience or that's what we might prefer. We'd rather approach it to understand, to your point, what is the cost and what is the best fit for what they're trying to do.
>
> That general approach follows its way into AI as well. I will say, even when we're consulting on AI projects, one of the things we're really conscious of is that I don't think anybody knows what the next three to five years are going to look like.
>
> So we also try to be really thoughtful in being too prescriptive on something or creating a solution that is very specific. What I mean by that is we don't want to back an organization or a solution into a corner where they're so tied to a model or an AI offering that it makes it hard to switch. We want to be able to speak to what's the best fit right now, but keep it open in case that needs to adapt as the models change—whether it's Google that starts winning the race, or OpenAI, or new models released that are better for that purpose.
>
> I will say it's challenging to try to stay on top of everything as everything advances and moves forward. If we picked one, it would be easier to just stay on top of the releases of that model or that company, but I think that helps push us too.

### Yeah, especially just with how, every day, there seems to be something coming out. Even [Llama 3.2] came out just, I think, this week or last week.

> Kyle Myck: Yeah.

### It's a very fast-moving scene, so I would imagine that in order to try and be technology agnostic, you have to be very, very on top of your game in terms of consuming the news that's coming out. That must be pretty difficult. And what about... what would make you decide? So you said cost and performance; would you say those are the two major things you look at?

> Kyle Myck: Some of the other factors, I think, are just fit. So when we think about these big enterprises, especially the larger clients that we work with, they work within an ecosystem already. For example, we wouldn't recommend to Microsoft that they use Google Gemini or anything from Google Vertex. Similar with our clients that are really embedded with Google; we believe that there are a lot of benefits. You might approach the problem differently based on the technology, but there are a lot of benefits to all of the ecosystems at the moment.
>
> We try to tailor—and sometimes we have to tailor—the way we approach the problem based on what the organization has access to. Part of that feeds into cost, right? Like with the big investment that an enterprise might make in Google, they'll get credits or whatever that will help us use those to deliver a solution.
>
> If we're starting more greenfield and there hasn't been a decision made, part of it is just fit. So you mentioned that certain models or certain APIs are good for certain things. Often we'll leverage whether it's Perplexity for being able to search the web and create citations, or Gemini, or some of OpenAI’s mini models for performance. It's often dependent on the use case too, and that problem we're trying to solve.

### Okay, that's amazing. So another question I had was actually to do with the mission of Dura Digital. It says, "Data and AI Center of Excellence to establish best practices," and that you're launching such a center. Obviously, we know AI is sometimes susceptible to hallucination, and a lot of companies are actually rushing to adopt AI without necessarily putting all the right guardrails in place. Are there any risks you would say exist if a company decided not to collaborate or to do it independently just for speed to market?

> Kyle Myck: Yeah, I think there is significant risk. I feel like just as frequently as we see the announcements about new models and new releases, we see highlights of where there have been issues, or even AI used in nefarious ways, or solutions rolled out that are susceptible to being tricked.
>
> Just recently, there was an example with a bot where the... I think the "cloud vending machine" [glitch] was being tricked and sort of giving away free food or ordering too much, and there was a similar story with voice AI for Taco Bell and McDonald's.
>
> So, no, it's something we try to think about a lot. If we were to think about a specific use case and what that might look like, where are the areas where people might try to exploit it, and how do we make sure that those things can't happen? Sometimes that comes down to different layers of the technology stack, too. Because there are a lot of things you can do with grounding and putting guardrails on the LLM or the model interaction, but it's also when you think about the tools or the things that that agent is able to do. A lot of those things can also be secured in a really good way just using traditional software development approaches—you know, securing APIs, being thoughtful about the access that you give the model.
>
> That does require not rushing it, as you said. You have to, I think, take a lot of the learnings we've had of creating software over the last few decades and apply those the same way, and not just get excited about the LLM or the model solving something for you and pushing it out for customers to interact with.

### Yeah. Actually, just on this, this is a bit of a tangent just because in my personal life, I particularly use Gemini a lot. And it's something I realized around a month or two months ago... ChatGPT released [SearchGPT/browser integration], and I think Perplexity also has [Pages]. A lot of my friends, particularly not the ones who are studying software engineering or computer science, are really very quick to jump to these browsers. I honestly haven't looked into the specific security risks that come associated with it, but I feel like there's a lot of hesitancy to just jump onto such a browser and give an AI such autonomous control over the data you put into a browser. So I wanted to know if you use [Arc/specialized AI browsers], and why or why not?

> Kyle Myck: Yeah, so in the spirit of trying to understand and learn the tools and play with the things that are released, I have used them. Do I use them for my everyday banking or things like that? I do not.
>
> I think one of the interesting things that's happening in AI is that the Googles and Microsofts of the world—so when you think about Chrome and Edge on the browser side—they have a really important reputation to protect the best that they can. So they put a lot of investment, a lot of thought, and a lot of effort into trying to make things as safe and secure as possible.
>
> It's these newer organizations, though, that are pushing the boundaries, and they're the ones that are really propelling, especially AI, ahead. OpenAI is a great example of that too. They're willing to take on more risk because there's not as much in jeopardy, right? They don't have this massive enterprise-facing organization like Microsoft does. So I think it's really important that there are these organizations releasing browsers strategically, but it's also helping push things forward, and it'll help push Google Chrome and Microsoft Edge forward. But I would be hesitant to give it all of my information at this point in time, at least.

### Yeah, that's very true. I feel quite similar to that. So, also, I wanted to ask regarding your clients again. When you collaborate with a client and let's say they have a legacy system with very old SQL databases, how do you approach integrating AI into older legacy systems? Do you usually have to just rip it apart and build it fresh, or do you normally have a solution to that?

> Kyle Myck: Yeah, I would say it really depends on the problem we're trying to solve, and so it depends on the use case and the experience we're trying to create. Often, even with some legacy applications, there's an API layer that's good enough to support most experiences. It's very infrequent that we have to tear things down all the way to the database level for an existing application.
>
> If there was something we were building from the ground up, again, depending on the use case and the experience we were trying to create with that application or tool, you would approach it differently. But I think that data layer, especially, and that integration layer—so APIs and such—are really important, especially for supporting AI solutions. Even when you think about the tools that you might give an agent access to, you need to be really thoughtful about how you design those access points.

### Okay, that's... to be fair, yes. I think it would depend on the specific situation and varies from client to client. And okay, this one is a bit... I'm not sure if this is personal or this is what you use as your official workflow. But you mentioned—I don't know how to pronounce it, is it "any 8" or n8n, the automation platform? And Perplexity, along with some big cloud providers, in some of your recent projects on your LinkedIn. So I'm curious, for rapid prototyping, when you get a client and you propose a solution, do you normally opt for these no-code solutions just to get a demo out quickly, or do you normally code it out?

> Kyle Myck: Yeah, it's a great question. And again, I'll say it depends, but I'll give you some tangible examples. So, one of our studios is our Human-Centered Design team. The studio lead there is Kate, who is a master in Figma. Our design team is really good at creating prototypes or high-fidelity mockups. Often those are the tools that we use to really understand what the user or the client is looking for. However, that team is really good at using Figma Make as well, so kind of bringing prototypes and things to the next level. So that might be something we use. But typically we have some sort of mockup or prototype before we start what I would consider getting into the software development side.
>
> It's not very often that we go directly to those no-code solutions, because again, our design team is really great at creating mockups that we can then build from, and it comes together quite quickly. If we were doing something experimental—which we do, so often we have ideas about how things can potentially work that's more on the edge—we will use some of those tools, whether it's like Replit or something else, just to quickly put something together and test its feasibility. Which is really fun.
>
> n8n, we use primarily for automation and orchestration. That's a tool that we often use for automation proof of concepts, just to see if the integration and tying agents together work well and are feasible.

### So you use it predominantly to simulate the logic, but not...

> Kyle Myck: Yeah, so n8n is a great tool for connecting disparate tools. So when you think about the tools that an organization might have in place, but they're not really fully integrated, or connecting an LLM into that process or workflow. So we even use it internally to automate processes like our invoicing and such. It's super helpful at that orchestration layer.

### Okay, that's amazing. Sounds like a real productivity booster for that.

> Kyle Myck: For sure.

### Yeah, so there's one more question actually before we wrap it up. The event next week is going to be called "Building Inside the AI Industry." So just as a teaser for the event: often the external perception is that if you're building something with AI, it's mostly about model training and prompt engineering. But your role revolves around complex strategy and integration. Without giving away too much, what is a misconception about integrating AI into a company that you think is out there?

> Kyle Myck: Yeah, let me know if I don't understand the question correctly or if I can drill deeper. I think that right now, a lot of folks are trying to understand how to think about AI and how to think about AI in the environment that they're in. A lot of times when you go to that conversation, you bring biases just based on experience. So approaching AI at the right level is something that we try to do as much as we can.
>
> What I mean by that is that when you think about how AI has already been rolled out to the world, there's almost three layers of it:
>
> **The Productivity Layer:** There's the layer at the top—access to Gemini, the Copilots, and the GPTs—where anybody can really interact with those and use them as a companion to help you do things. That's that toolset released to everybody, and you don't need to be technical to use it. Ideally, there's some governance to make sure that people are interacting with it safely, but it provides a lot of productivity and assistance.
>
> **The Engineering/Agent Layer:** Now there's that layer below it, which didn't exist as much just a few years ago. This requires a little bit more technical expertise, but the focus is really getting as much as you can out of those large LLMs and using them the right way. So you're going one level lower; you're setting things like grounding, maybe setting up a RAG pipeline, you're creating kind of a more agentic approach. You might have child agents or agents that call other agents, you might be leveraging Model Context Protocol (MCP), but you're using that kind of middle layer. You're not creating new models.
>
> **The Foundation Layer:** That's that third level at the bottom where you might be creating bespoke models, you might be training a model on something very specific. You might actually get into doing your own model drift analysis and things like that.
>
> So there's almost that core layer, and then there's leveraging the models that exist today—which companies are investing a lot of effort into releasing—and then that top layer is more that consumer layer. So when we go into an organization, we try to consult across those three layers. Often we're helping organizations understand how to use AI at the productivity level. Sometimes we're creating custom solutions for them, leveraging models that exist that we can just pull from and access via APIs. And then sometimes it's thinking more at a core foundational level.

### So there've been solutions where you operated at a very core level where you had to prove it?

> Kyle Myck: Yeah, so I wouldn't say we've created bespoke models, but we've operated at that level with data science teams.

### Oh, wow, okay. That's amazing to hear. And what would you say about companies that... you know, they're less about trying to get the productivity of AI, they're mostly trying to incorporate it because the market is demanding it. So what would you say is a misconception about doing that?

> Kyle Myck: Yeah, we've had those conversations. It's interesting because often the two most common use cases are: on the product side, organizations want to introduce AI so they can have AI in their product, more than they're looking about the value that AI actually brings to the product. And then sometimes at the enterprise level, it's a lot about productivity—how do we scale at a faster rate or increase the productivity of our teams?
>
> I think what I would say is: AI doesn't always solve the problem, and AI isn't always necessary to solve the problem. We'll chat about it at the event, but there's been a few use cases where AI was just really bad at being a solution for problems—even when it was document automation or something like that. Traditional automation is still sometimes much more efficient and much more predictable, even compared to guardrails and grounding on AI models. So, I think sometimes because of just the excitement for AI, people believe that it's the magic bullet for problems. And often those problems, people haven't given traditional automation the right attention because it solves their problems just fine.

### Just fine. There's this... because I remember this was actually a conversation we were having with other executives of the club. It was this sort of mentality that right now your product needs AI in order to be considered a competitor. And it was getting to a point where it was getting ridiculous—certain things like a pen having AI. So it's really contextual.

> Kyle Myck: It is, it is for sure. And I think it depends on if you have a foundational product and you're adding an AI feature, versus if you're building a product or trying to make the product AI-native. I think those are two distinct conversations just because of the technology foundation and user experience. Like, how does the human experience your product today? Is AI really going to help it? Or is it going to make it confusing? I think you have to kind of go through that process before making the decision and not just rushing to adding AI so you can talk about it.

### Yeah, that's very true. That's it. So I don't want to take too long because the meeting is about to end. It's been great. I'd love to find out how Dura Digital works and I'm sure the rest of the people will as well. I really appreciate you taking the time and we really can't wait for you guys to come on campus this week.

> Kyle Myck: Yeah, really looking forward to it. Thank you so much.

### Yeah, we're excited. Thanks for the time as well. All right. Have a great rest of your week. Bye bye.
`
  },
  {
    slug: "justin-stevens",
    name: "Justin Stevens",
    title: "Founder of UAIS & AI Researcher",
    teaser: "UAIS Founder Justin Stevens returns to discuss AI safety, the ethics of big tech, and his 'fun, learning, money' heuristic for career planning.",
    bio: "Founder of UAIS and an AI researcher. He reflects on the evolution of AI and offers advice on career planning using the 'fun, learning, money' heuristic.",
    color: "pink",
    pdf: "/documents/interviews/career-highlights-series/Justin-Stevens.pdf",
    fullContent: `
### I saw that your Master's research focused on explainable AI, and recently I saw you also did a certification from Anthropic in AI fluency. This suggests you're big on interpreting AI systems and validating how trustworthy they are. While the headlines right now are focused on extreme AI topics, is there a specific trend in AI safety, in particular, that you feel most people should be paying attention to—maybe even specifically undergraduate students?

> Justin Stevens: AI safety is definitely a very important area to be working in these days. A lot of people have pivoted their attention, even their entire labs, such as Yoshua Bengio and Geoffrey Hinton, towards AI safety. The angles that I care about a lot are really how people are being educated about AI. This is especially important when we look at the era of deepfakes, where it is so easy to produce realistic-looking videos and images.
>
> I did an exercise the other day where we were just looking at images and trying to detect if they were real or not. As a group, we got about 60% correct, so only slightly above chance. It's really tough to tell sometimes, even as someone who's been in the AI field for a while. So, I think being educated about AI is going to be one of the most important things we can have going forward, because everyone needs to know that this technology exists and how not to be tricked by it.
>
> There have been disturbing cases where people have gotten supposed phone calls from a family member that was in need, and the voice of the family member was totally fabricated. It was not a family member in need; it was a scam saying, "Hey, I need $10,000 right now." Those are really unfortunate cases. So, I am not so big on the existential risk of AI yet. I'm thinking a lot more about how to make sure that people know what this technology is doing and how we can ensure people do not get manipulated by AI systems.

### One angle on that, in particular, is that the people who end up as victims have very little recourse. I don't know how many legal rules are in place for them to take substantial action against somebody using their likeness. It often ends up in a case where your likeness is used in a deepfake, somebody leverages that against someone else, and both of you end up in a very bad situation. Do you see any laws being passed by governments in the future to try and hinder or limit that in some capacity?

> Justin Stevens: Yeah, definitely. The European Union probably has the most restrictive AI laws right now with the AI Act they've enacted. I know the Canadian and U.S. governments have thought about that too. I think a lot of folks are thinking about how to avoid being manipulated by AI systems. I'm definitely not a legal expert by any means, so I can't comment on exactly how the legislation will look, but I think it's good that governments are beginning to take this seriously.

### That's one example of people using AI in a malicious manner, but there's also its use in industry, which leads perfectly into the next question. You're in a unique position because you've conducted research, but you also work with Art of Problem Solving, so you have an industry perspective as well. From this vantage point, are there any tools in AI that are being pushed in research as the next revolutionary thing, but their practicality is lacking? Or conversely, something that is being widely adopted in practice, but the research community doesn't view it as particularly unique?

> Justin Stevens: That's a great question. So just to make sure I'm understanding right, the question is: are there tools on the research side that industry isn't adopting enough, or tools on the industry side that researchers aren't adopting enough?

### Yes, exactly that.

> Justin Stevens: Cool. I think there are definitely tools on the industry side that people in academia are not as privy to. I know from talking with friends and colleagues at some of the big AI companies that their opinion is that a lot of research is being done behind closed doors. You can see this with OpenAI and how they're releasing the latest GPT models. They were built on the idea that their work would be open, however, they don't release any details besides benchmarks. They do that because they don't want their competitors to know how they're training their models.
>
> I think there are also trends on the research side that aren't being adopted in industry yet. For instance, I've been pivoting towards a lot of work in user studies—how people actually interact with and learn from AI systems. I know some companies like Art of Problem Solving and Anthropic value that type of research, but many other companies will just release AI products without thinking about how they're actually impacting their users. That is a concern for me. ChatGPT was released almost three years ago now, and it has significantly impacted the world. I don't think any research was done when it was released, aside from the goal of making a bunch of money, to ensure that it would be used safely and fairly.

### Just on that, I don't know if you read the article, but about two weeks ago, a memo was leaked from Meta about the specific rules they have for their AI modeling. It had some pretty grotesque stuff in there. It was very shocking to see. If we keep allowing these AI companies to black-box their research and release these models, especially considering they're trained on the entire internet, there's going to be bad or manipulative data in there. How can we combat this if there's no legal penalty for them keeping their competitive edge secret, while behind closed doors they're engaging in unethical practices?

> Justin Stevens: I think it ultimately has to do with public perception of these AI companies and whether or not people are willing to boycott the products of those they view as unethical. You mentioned the thing from Meta; I won't go into the details either, but we can link to what they were permitting their AI models to do. Personally, I uninstalled Facebook from my phone after that. I still use Instagram, unfortunately, but it was a moment for me where I was like, "Okay, I need to use less of this product."
>
> I don't have a full answer for how we can stop these companies, but with Meta in particular, it has been shown time and time again that they will value profits over fairness and ethics. There were reports a while ago that they knew they were actively promoting harmful content because it would increase engagement. There's a principle, I think it's Goodhart's law, which is: "When a measure becomes a target, it ceases to be a good measure." That's really important to keep in mind here, because if the goal is just profits, companies will continue to do unethical things. But if the goal is actually releasing AI in safe and fair ways, they will gain more trust with their users, their products will be better liked, and ultimately it will be better for them in the long run.

### On that note, Meta has been gaining a reputation for offering huge contracts to catch up in the AI race. For someone looking to get into AI, seeing this kind of money floating around—let's say a first, second, or third-year student—should they focus on being a mathematician first or a computer scientist first?

> Justin Stevens: Oh, that's an amazing question. I'll share my personal experience, but of course, everyone's mileage varies. I was a mathematician first, and I still identify as a mathematician. I did a double major in mathematics and computing science in my undergrad at the U of A, and I think that mathematics underpins everything else going on in the field right now. So I would really recommend that anyone who wants to get into AI take at least a few math courses: linear algebra, calculus, multivariable calculus, probability and statistics, and some differential equations. All of these are important for understanding the latest AI models.
>
> That said, I think the barrier to entry for AI is a lot lower today than it was a couple of years ago. In all honesty, when I work with AI models, I might do a little bit of math, but I'm mainly using pre-built things with PyTorch, TensorFlow, or JAX. So now is one of the best times to learn AI because it is so easy, especially in the era of AI coding assistants. A math and computer science double major is one of the best ways to go, but everyone is coming at it from a different perspective. A biologist might do a computer science and biology combination, for example.

### That's true. You mentioned you were a double major, went into professional research, and then worked in industry. These are different stages a typical AI student might go through. There are the foundational mathematics, the hands-on engineering projects using tools like TensorFlow and PyTorch, and the ability to communicate these complex ideas. These three skills feed into each other but are distinct. What would you say is the bedrock between the three: the foundations, the projects, or the communication?

> Justin Stevens: My personal opinion is that technical skills can be learned on the job. I feel like communication skills and being a good person to work with are some of the most important things. Obviously, if you're coming in with no knowledge of the technical skills needed, it's going to be a tough time. But I would really recommend to anyone that one of the most important things right now is learning how to work with other people, how to work effectively in teams, and how to be a good individual contributor or leader. If I were in a hiring position, I would look for the soft skills a lot. I'd say all three are important, but I'd almost emphasize the soft skills as one of the most important.

### That's something I've heard very commonly in these interviews, and it's not really what you hear in university. In university, it's almost like you need to get better, do more projects, contribute more to open source, and get your technical skills up. Which I think is true to an extent, but there's also the limitation that you need to be able to communicate and come across as approachable.

> Justin Stevens: Yep, it's very important. And another thing that's so important is finding a place that feels like a really good fit. For me, with Art of Problem Solving, it was a natural fit. I've been teaching for them for a long time, I did an internship with them, and I'm continuing some of that work. These were my people from the beginning because I love mathematics and education.
>
> Anyone could try to chase the big money at a company like Meta, but I would say it's more important to find a place where you will wake up every morning and think, "I can't believe I get paid to do this kind of work. This is just so cool." That's the feeling I really want people to have in their careers.

### Just on that, is there a way you could abstract that advice for a wider range of people? I've heard that for a new grad job, you want to target very good mentors rather than very good pay because they tend to set you up on a steep trajectory. But others say if you start at a high pay, you can climb that ladder faster. There's a lot of conflicting advice. Do you have any heuristics for a new graduate to find a community where they feel accepted while also earning a decent salary?

> Justin Stevens: There was a talk at a conference a couple of years ago that emphasized three pillars of a good career: fun, learning, and money. Obviously, you want a job that pays you enough to live a good life, but you also want a job that's fun and where you are learning skills that are relevant to your career and personal interests.
>
> So, when you're looking at companies, try to find one you feel very mission-aligned with. Read their mission statements online. If you get the opportunity, talk to someone who works at the company and understand their goals and their five-year plan. If you want to be a part of that mission, try reaching out to someone and say, "Hey, can I just grab 15 minutes with you to chat quickly?" I'd argue that is more important than getting the highest-paying job immediately out of graduation because you want to set yourself up for a long career. I have friends in finance that probably make half a million a year, but at the same time, they get burned out really quickly because it's a grilling industry. So everyone's mileage will vary.

### That is true. So one last question before we wrap up. You're the founder of the Undergraduate AI Society. Looking back, what was an unexpected lesson you learned from starting this community that ended up shaping your career or had a significant impact on you?

> Justin Stevens: Oh, yeah. UAIS has had a really big impact on my life. I've been out of it for a while now, but I'm still really impressed by the work that you guys are doing. I love seeing all the posts on LinkedIn. I know you have Dr. Richard Sutton giving a talk at your welcome event soon, so I'm really excited for you all to have him there.
>
> It was such a great lesson in leadership and networking skills. Honestly, founding UAIS was one of the things that connected me the most with a lot of professors and members of the community. Jonathan Schaeffer was one of the early mentors of the club, and he helped set us up with a speaker series that introduced me to a whole network of people. Honestly, without UAIS, I don't know if I would have done a Master's degree or pursued the career I'm doing now. I knew when I came to the U of A that I wanted to do artificial intelligence, and I wanted to make it more accessible for undergrads to get involved early on. It makes me so happy to see, several years after its founding, that the club is still going strong and inspiring people like you. I hope to continue to be a resource for others in their careers.

### It is a wonderful community, and it has grown to be quite large. I don't know if you had foreseen it becoming this big, but I do have one question. When you were starting out, was there a particular challenge you faced? Was it getting people to join, getting speakers, coming up with ideas, or something else logistically difficult?

> Justin Stevens: Logistically, the most difficult thing was honestly getting the paperwork approved. I spent so many hours going through the paperwork for starting a new club, getting a bank account set up, and all of that. I had no idea how much work that would be. The interest in the club was there from the beginning. I was lucky to be based out of the Student Innovation Centre, and the person running it helped send some emails out. To my surprise, we had 15 to 20 people at both of the first two sessions.

### Right now, when we run a session, it depends on the season. During winter the numbers dip, but during the fall we expect between 20 and 40.

> Justin Stevens: That's awesome to hear. The interest was there, and one of the most important things for me early on was finding an executive group of people that were all really tied to the mission. This goes back to what we were talking about with companies. I found a group of people so passionate about the club's mission. Two of them went on to be later presidents, Giancarlo and Paul, who I think you also interviewed. Some of them are still close friends of mine, so I'm really grateful for that initial group.

### That's fantastic. We'll continue to carry the mantle. I'm looking forward to seeing you at the event in November.

> Justin Stevens: Absolutely.

### Thank you so much for your time. It's been great talking to the founder of the club.

> Justin Stevens: Thank you so much, Andrew. It was a really great chat with you too. All the best to you. I really hope your undergrad continues to go nicely.
`,
  },
];

export const pastInterviews: { year: string; items: { name: string; title: string; slug?: string }[] }[] = [
  // Past interview history can be added here as it becomes available
];
