import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adeoluwa Joseph Ayangade",
  initials: "AA",
  location: "Newcastle Upon Tyne, United Kingdom",
  locationLink: "https://www.google.com/maps/place/Newcastle+upon+Tyne",
  about:
    "Full Stack Web and Mobile Engineer focused on building products with extra attention to detail",
  summary: `I'm an energetic and innovative full-stack web and mobile software developer with over 5 years of proven experience in creating and designing software in a test-driven environment. My expertise lies in crafting clean and maintainable code. Whether it's troubleshooting or enhancing existing systems, I deliver clear, concise solutions. I've had the privilege of collaborating with diverse teams on numerous projects worth up to $42 million in funding.
    <br> <br> Software engineering is a big rabbit hole and I'm never unexcited to explore the never-ending possibilities with technology. I'm open to new opportunities and challenges, so don't be afraid to connect!`,
  avatarUrl:
    "https://avatars.githubusercontent.com/u/37867493?s=400&u=ee3b6d4e061144df7e0d207a32ffebd9f2fe885f&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "adeoluayangade@yahoo.com",
    tel: "+447534881454",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Irongade",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adeoluwa-ayangade-525b53194/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Northumbria University",
      degree: "Masters's Degree in Computer Science",
      start: "2022",
      end: "2024",
    },
    {
      school: "Obafemi Awolowo University",
      degree: "Bachelor's Degree in Electronic/Electrical Engineering",
      start: "2015",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Appsmith",
      link: "https://www.appsmith.com/",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "Present",
      description:
        "Implemented new features and microservices, led projects, worked on improving the data integration process and front-end architecture. Technologies: React, TypeScript, NodeJS, Java, Java Springboot, MongoDB",
    },
    {
      company: "FastMovers",
      link: "",
      badges: ["Remote"],
      title: "Mobile Software Engineer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "Created and deployed cross-platform mobile apps for Android and iOS platforms on their respective App Store's. Implemented thorough testing and debugging strategies for both platforms. Technologies: React, React Native, Android Studio, XCode, TestFlight, MySQL",
    },
    {
      company: "TechStarta",
      link: "https://techstarta.com/",
      badges: ["Remote"],
      title: "Frontend Software Engineer",
      logo: JojoMobileLogo,
      start: "2019",
      end: "2021",
      description:
        "Developed new user-facing features, Lead and implemented client side engineering product roadmap. Technologies: React, TypeScript, Python, MySQL",
    },
    {
      company: "Shecluded",
      link: "https://shecluded.com/",
      badges: ["Hybrid", "Part-time"],
      title: "Full Stack Software Developer",
      logo: NSNLogo,
      start: "2020",
      end: "2021",
      description:
        "Improved UI/UX experience, Developed front-end website architecture, Rewrote the backend in a new backend language. Technologies: React, TypeScript, NodeJS, DynamoDB, AWS Lambda",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "React Native",
    "VueJS",
    "NextJS",
    "GatsbyJS",
    "NuxtJS",
    "Node.js",
    "ExpressJS",
    "Cypress",
    "Jest",
    "Python",
    "Flask",
    "TensorFlow",
    "PHP",
    "Laravel",
    "Java",
    "Java Spring Boot",
    "Go",
    "Rust",
    "C++",
    "GraphQL",
    "Relay",
    "WebRTC",
    "Redux",
    "Figma",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "ElasticSearch",
    "AWS S3",
    "MongoDB",
    "DynamoDB",
    "Docker",
    "Docker Compose",
    "Kubernetes",
    "Kafka",
    "Git",
    "GitHub",
    "ZenHub",
    "Machine Learning",
  ],
  projects: [
    {
      title: "Furrow",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "A recreation of the Furrow App",
      logo: ConsultlyLogo,
      link: {
        label: "furrow.com",
        href: "https://gatsbywebprojectmaster.gtsb.io/",
      },
    },
    // {
    //   title: "Monito",
    //   techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
    //   description:
    //     "Browser extension that records everything happening in a web application",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "monito.dev",
    //     href: "https://monito.dev/",
    //   },
    // },
    // {
    //   title: "Jarocki.me",
    //   techStack: ["Side Project", "Next.js", "MDX"],
    //   description:
    //     "My personal website and blog. Built with Next.js and Notion API",
    //   logo: JarockiMeLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://jarocki.me/",
    //   },
    // },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",

    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
