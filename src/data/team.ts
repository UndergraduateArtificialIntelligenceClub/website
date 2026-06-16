// Team data. Edit this file to update current executives and past exec history.
// The Team page (src/pages/Team.tsx) reads directly from these exports.

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  github?: string;
  discord?: string;
  site?: string;
};

export const team: TeamMember[] = [
  {
    slug: "kashish-gupta",
    name: "Kashish Gupta",
    role: "President",
    bio: "Hi! I’m Kashish, a 4th-year Computer Science major who’s always been curious about how AI actually works in the real world. I’ve worked as an ML Research Assistant and an AI4Good Lab Fellow, where I got to use AI on real problems and see its impact beyond just theory. After being part of UAIS since my first year and serving as Vice President last academic year, I’m now excited to take on the role of President and make this a space where people can get together to learn and build cool things they’re genuinely excited about. Also, if you ever want to talk AI, projects, or just want to say hi, feel free to reach out :)",
    image: "/images/headshots/kashishgupta2911.jpg",
    linkedin: "https://www.linkedin.com/in/kashish-gupta-72668320b",
    github: "https://github.com/kashishgupta2911",
    discord: "kashishgupta2911"
  },
  {
    slug: "viktoriia-lysenko",
    name: "Viktoriia Lysenko",
    role: "Co-Vice President",
    bio: "Hello! I'm Viktoriia, a Computing Science and Economics student with a passion for tech. This is my second year as a UAIS executive; I previously served as VP Media and a Project Lead, where I focused on our marketing and outreach. Outside of the club, I'll also be conducting computer vision research this year, which I'm really excited about!",
    image: "/images/headshots/viktoriiaLysenko.jpg",
    linkedin: "https://www.linkedin.com/in/viktoriia-lysenko7/",
    github: "https://github.com/viktorialysenko",
    discord: "viktoria1"
  },
  {
    slug: "andrew-obwocha",
    name: "Andrew Obwocha",
    role: "Co-Vice President",
    bio: "UAIS is a really cool opportunity to develop my interest in technology in the age of AI. It exposes anyone to different theoretical domains in the field while balancing practical software development utilizing AI. Can’t wait to see what this 26/27 academic year holds!",
    image: "/images/headshots/AndrewObwocha.jpg",
    linkedin: "https://www.linkedin.com/in/andrewobwocha/",
    github: "https://github.com/AndrewObwocha",
    discord: "andrewobwocha"
  },
  {
    slug: "rosanna-dovganyuk",
    name: "Rosanna Dovganyuk",
    role: "VP External",
    bio: "Hello, I'm Rosanna Dovganyuk! I am in my fourth year of Statistics with a minor in Computing Science and I strive to stay curious – in particular, I love learning about AI, and it is my curiosity that has led me on an exciting journey of research in machine learning, specifically reinforcement learning, at the University of Alberta. As VP External, I look forward to strengthening the UAIS network, fostering a collaborative, learning-focused AI community. Outside of academics, I enjoy running, travelling, and meeting new people!",
    image: "/images/headshots/rosannaDovganyuk.jpg",
    linkedin: "https://www.linkedin.com/in/rosanna-dovganyuk-143b82102/",
    github: "https://github.com/rosannadovganyuk3",
    discord: "rosanna_92685"
  },
  {
    slug: "dominik-vrbanek",
    name: "Dominik Vrbanek",
    role: "VP Internal",
    bio: "Hello, I’m Dominik! I am entering my fourth-year as a student with a focus on artificial intelligence. At the U of A I have developed an interest in statistical machine learning, reinforcement learning, computer vision and robotics. My third-year involvement as a team member with the “economic drivers of blockchain adoption” project motivated me to run for the exec team to continue the work of the UAIS as a key campus resource supporting other undergrads with an interest in AI.",
    image: "/images/headshots/dominikvrbanek.jpg",
    linkedin: "https://www.linkedin.com/in/dominik-vrbanek-39bba9408/",
    github: "https://github.com/dominikvrbanek",
    discord: "dom__10"
  },
  {
    slug: "mousa-abuzar",
    name: "Mousa Abuzar",
    role: "VP Marketing",
    bio: "Hi my name is Mousa, I am a 3rd year Honors Computing Science student, I joined UAIS in my second year, after I attended my UAIS event I was facinated by the capabilities of AI and fellow peers, from there I started learning about Ai on my own, I made personal projects and joined AI hackathons. I am VP of Marketing for the UAIS and looking forward to help scale this club. In my free time I like to code, ski, hike, run, go to the gym and food 😊!",
    image: "/images/headshots/mousaAbuzar.png",
    linkedin: "https://www.linkedin.com/in/mousa-abuzar/",
    github: "https://github.com/MousaAbuzar",
    discord: "mousa_abuzar"
  },
  {
    slug: "raghav-sethi",
    name: "Raghav Sethi",
    role: "VP Technology",
    bio: "I’m a Computer Science student deeply interested in artificial intelligence, system design, and building practical, real-world tools. I’ve been working on a range of projects—from a J.A.R.V.I.S.-style AI assistant and a local AI based OS to utilities like study companions, local encrypted digital vault, financial tools and management systems, focusing on combining functionality with clean, modern interfaces. I enjoy experimenting with new technologies like new vibe coding tools , new AI models and libraries",
    image: "/images/headshots/raghavSethi.jpg",
    linkedin: "https://www.linkedin.com/in/raghav-sethi-a08501319/",
    github: "https://github.com/RaghavSethi006",
    discord: "raghavsethi"
  },
  {
    slug: "connor-robinson",
    name: "Connor Robinson",
    role: "VP Admin",
    bio: "I'm excited to learn more about AI and how it can be used to help people. I really enjoyed the events UAIS offered and I'm excited for the opportunity to help run the club.",
    image: "/images/headshots/connorRobinson.webp",
    linkedin: "https://www.linkedin.com/in/connor-robinson-627255339/",
    github: "https://github.com/ConRobi",
    discord: "Connorrobinson4067"
  },
  {
    slug: "michael-lee",
    name: "Michael Lee",
    role: "Treasurer",
    bio: "Hello, I'm very excited about working here at UAIS. I hope to learn a lot both about the club and AI as well. I will work to bring more fun events where we all can learn!",
    image: "/images/headshots/michealLee.webp",
    linkedin: "https://www.linkedin.com/in/michael-hanbyeol-lee/",
    github: "https://github.com/Meeko-Michael",
    discord: "gamerzmeeko"
  },
  {
    slug: "hamidat-bello",
    name: "Hamidat Bello",
    role: "Advisor",
    bio: "Hi! I'm Hamidat, a Computing Science grad and software engineer at Microsoft. I previously served as UAIS President and VP Internal, where I helped grow the club's community, support exec portfolios, build partnerships, and open up more opportunities for students to learn about and work with AI. UAIS has been one of the most meaningful parts of my time at the U of A, and I'm glad to keep supporting the team this year as an Advisor.",
    image: "/images/headshots/hamidatb.jpg",
    linkedin: "https://www.linkedin.com/in/hamidatbello",
    github: "https://github.com/hamidatb",
    discord: "heyitsh"
  },
];

export const pastExecs: { year: string; members: { name: string; role: string; image?: string; discord?: string; linkedin?: string; github?: string }[] }[] = [
  {
    year: "2025-26",
    members: [
      {
        name: "Hamidat Bello",
        role: "President",
        image: "/images/headshots/hamidatb.jpg",
        linkedin: "https://www.linkedin.com/in/hamidatbello",
        github: "https://github.com/hamidatb",
        discord: "heyitsh"
      },
      {
        name: "Austin Bao",
        role: "Co-Vice President",
        image: "/images/headshots/AustinBao.jpg",
        linkedin: "https://www.linkedin.com/in/austinbao",
        github: "https://github.com/AustinBao",
        discord: "austinbao"
      },
      {
        name: "Kashish Gupta",
        role: "Co-Vice President",
        image: "/images/headshots/kashishgupta2911.jpg",
        linkedin: "https://www.linkedin.com/in/kashish-gupta-72668320b",
        github: "https://github.com/kashishgupta2911",
        discord: "kashishgupta2911"
      },
      {
        name: "Andrew Obwocha",
        role: "VP External",
        image: "/images/headshots/AndrewObwocha.jpg",
        linkedin: "https://www.linkedin.com/in/andrew-obwocha",
        github: "https://github.com/AndrewObwocha",
        discord: "andrewobwocha"
      },
      {
        name: "Arnav Sachdeva",
        role: "VP Internal",
        image: "/images/headshots/arnavsachdeva594.jpg",
        linkedin: "https://www.linkedin.com/in/arnavsachdeva2004",
        github: "https://github.com/arnavsachdeva594",
        discord: "arnavsachdeva594"
      },
      {
        name: "Sanika Verma",
        role: "General Secretary",
        image: "/images/headshots/SanikaVerma.jpg",
        linkedin: "https://www.linkedin.com/in/sanika-verma-668a89276",
        github: "https://github.com/SanikaVerma",
        discord: "sanikaverma"
      },
      {
        name: "Katie Bauer",
        role: "Treasurer",
        image: "/images/headshots/klbauer1.jpg",
        linkedin: "https://www.linkedin.com/in/katie-bauer-b1836930b",
        github: "https://github.com/klbauer1",
        discord: "klbauer1"
      },
      {
        name: "Aarush Bhat",
        role: "VP Technology",
        image: "/images/headshots/aarushb.jpg",
        linkedin: "https://www.linkedin.com/in/aarushdev",
        github: "https://github.com/aarushb",
        discord: "magnumhurricane"
      },
      {
        name: "Viktoriia Lysenko",
        role: "VP Media",
        image: "/images/headshots/viktorialysenko.jpg",
        linkedin: "https://www.linkedin.com/in/viktoriia-lysenko111",
        github: "https://github.com/viktorialysenko",
        discord: "viktorialysenko"
      },
      {
        name: "Usaid Ahmed",
        role: "Director of Tech",
        image: "/images/headshots/Usaidahmed10.jpg",
        linkedin: "https://www.linkedin.com/in/usaid-ahmed-2149422a2",
        github: "https://github.com/Usaidahmed10",
        discord: "usaidahmed10"
      },
      {
        name: "Justin Stevens",
        role: "Founder",
        image: "/images/headshots/justinstevens42.jpg",
        linkedin: "https://www.linkedin.com/in/justinstevens42",
        github: "https://github.com/justinstevens42",
        discord: "justinstevens42"
      }
    ],
  },
  {
    year: "2023–24",
    members: [
      {
        name: "Taran Purewal",
        role: "President",
        image: "/images/headshots/tsp01.jpg",
        discord: "flashfire50",
        linkedin: "https://www.linkedin.com/in/taranveer-purewal-9a073524b",
        github: "https://github.com/tsp01"
      },
      {
        name: "Jacob Winch",
        role: "Vice President",
        image: "/images/headshots/Jacob-Winch.jpg",
        discord: ".jwinch",
        linkedin: "https://www.linkedin.com/in/jacob-winch",
        github: "https://github.com/Jacob-Winch"
      },
      {
        name: "Yong Lee",
        role: "Vice President",
        image: "/images/headshots/yonglee.jpg",
        discord: "gjftns7220",
        linkedin: "https://www.linkedin.com/in/yong-lee-",
        github: "https://github.com/gjftns7220"
      },
      {
        name: "Arden Monaghan",
        role: "Secretary",
        image: "/images/headshots/ardenmonaghan.jpg",
        discord: "bigriceman",
        linkedin: "https://www.linkedin.com/in/arden-monaghan-574959243",
        github: "https://github.com/ardenmonaghan"
      },
      {
        name: "Hamidat Bello",
        role: "VP Internal",
        image: "/images/headshots/hamidatb.jpg",
        discord: "heyitsh",
        linkedin: "https://www.linkedin.com/in/hamidatbello",
        github: "https://github.com/hamidatb"
      },
      {
        name: "Manav Joshi",
        role: "VP External",
        image: "/images/headshots/mnkjoshi.jpg",
        discord: "man4v",
        linkedin: "https://www.linkedin.com/in/mnkjoshi",
        github: "https://github.com/mnkjoshi"
      },
      {
        name: "Affan Nazir",
        role: "Treasurer",
        image: "/images/headshots/MuhammadAffanNazir.jpg",
        discord: "m.affan.nazir",
        linkedin: "https://www.linkedin.com/in/affan-nazir",
        github: "https://github.com/MuhammadAffanNazir"
      },
      {
        name: "Aarush Bhat",
        role: "VP Technology",
        image: "/images/headshots/aarushb.jpg",
        discord: "magnumhurricane",
        linkedin: "https://www.linkedin.com/in/aarushdev",
        github: "https://github.com/aarushb"
      },
      {
        name: "Bertina Jeyakumar",
        role: "VP Media",
        image: "/images/headshots/bertina3107.jpg",
        discord: "lilly_bertina",
        linkedin: "https://www.linkedin.com/in/bertina-jeyakumar",
        github: "https://github.com/bertina3107"
      },
    ],
  },
];
