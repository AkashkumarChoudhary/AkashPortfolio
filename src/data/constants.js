import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiSpringboot,
  SiPrisma,
  SiSwagger,
  SiApachekafka,
  SiRedis,
  SiSocketdotio,
  SiDocker,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiOpenai,
} from "react-icons/si";
import {
  FaJava,
  FaAws,
  FaRobot,
  FaGem,
  FaDatabase,
  FaPlug,
  FaChartLine,
  FaServer,
  FaExchangeAlt,
  FaHistory,
  FaTasks,
  FaLayerGroup,
  FaProjectDiagram,
  FaLink,
  FaBrain,
} from "react-icons/fa";

/*
 * NOTE: Skill icons are rendered defensively in Skills.jsx — if a given
 * react-icons name is not present in the installed version it resolves to
 * `undefined` and the card falls back to a lettered chip instead of crashing.
 */

export const Bio = {
  name: "Akash Kumar Choudhary",
  roles: [
    "GenAI Engineer",
    "Full-Stack Developer",
    "Distributed Systems Engineer",
    "Backend Engineer",
    "Java + Python Developer",
  ],
  description:
    "SDE-1 building production GenAI and distributed systems. I ship LLM pipelines with the Anthropic Claude SDK and LangGraph, microservice backends in FastAPI, Spring Boot and Node.js, and type-safe full-stack apps in React and Next.js. 500+ DSA problems solved (LeetCode 1600+).",
  stats: [
    "500+ DSA solved",
    "16-service microservices",
    "LeetCode 1600+ · GFG top ranks",
  ],
  github: "https://github.com/AkashkumarChoudhary",
  resume:
    "https://drive.google.com/file/d/11_GIy-f4QIjtMQqG2ngp-lkDYBIebWYF/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/akashchoudhary7/",
  twitter: "https://x.com/CoderAkash108",
  insta: "https://www.instagram.com/akash_kumar.dev/",
  email: "akcmumbai13579@gmail.com",
  facebook:
    "https://www.facebook.com/people/Akash-Kumar-Choudhary/pfbid02oswg1hMDnatYU9r5hXDMg2RZgrZCg5i3wsoLphDAquzeXH64jhKbKteu3TUgw5w1l/",
};

export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ],
  },
  {
    title: "AI / GenAI",
    skills: [
      { name: "LangGraph", icon: FaProjectDiagram, color: "#7C5CFF" },
      { name: "LangChain", icon: FaLink, color: "#1C9C7C" },
      { name: "Claude SDK", icon: FaBrain, color: "#D97757" },
      { name: "OpenAI Realtime", icon: SiOpenai, color: "#10A37F" },
      { name: "Gemini", icon: FaGem, color: "#8E75F8" },
      { name: "RAG / pgvector", icon: FaDatabase, color: "#7C5CFF" },
      { name: "MCP", icon: FaPlug, color: "#7C5CFF" },
      { name: "Langfuse", icon: FaChartLine, color: "#7C5CFF" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#cfcfcf" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
      { name: "REST APIs", icon: FaServer, color: "#9aa4b2" },
      { name: "OpenAPI / Swagger", icon: SiSwagger, color: "#85EA2D" },
      { name: "gRPC", icon: FaExchangeAlt, color: "#9aa4b2" },
    ],
  },
  {
    title: "Distributed Systems",
    skills: [
      { name: "Temporal.io", icon: FaHistory, color: "#7C5CFF" },
      { name: "Kafka", icon: SiApachekafka, color: "#cfcfcf" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "BullMQ", icon: FaTasks, color: "#9aa4b2" },
      { name: "WebSockets", icon: SiSocketdotio, color: "#cfcfcf" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#cfcfcf" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "TanStack", icon: SiReactquery, color: "#FF4154" },
      { name: "Radix UI", icon: FaLayerGroup, color: "#9aa4b2" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    title: "DevOps & Databases",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
      { name: "Grafana", icon: SiGrafana, color: "#F46800" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Gemini Vector", icon: FaGem, color: "#8E75F8" },
      { name: "AI Agents", icon: FaRobot, color: "#7C5CFF" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    logoText: "Ei",
    role: "SDE-1",
    company: "Eicore (via Essentia.dev)",
    date: "Jun 2025 - Present",
    desc: "Building a GenAI document-extraction pipeline on the Anthropic Claude SDK (parse → preprocess → extract → postprocess) that produces a 150+ field structured model with confidence scores and citations, cutting manual data entry by 80%. Engineered a centralized catalog microservice as the single source of truth across 16 services, batching cross-service lookups into single IN(...) queries to eliminate N+1 fan-out. Built a config-driven rating & rules engine computing premiums in <50ms, plus Better Auth with fine-grained RBAC and instance-level authorization (-40% auth latency). Established Zod schemas as the single source of truth generating OpenAPI specs and type-safe clients, validated by a 118-file Vitest suite + Playwright (-60% integration bugs).",
    skills: [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Temporal.io",
      "Zod",
      "OpenAPI",
      "Vitest",
      "Better Auth",
    ],
  },
  {
    id: 1,
    logoText: "IOCL",
    role: "Software Developer Intern",
    company: "Indian Oil Corporation (IOCL)",
    date: "May 2024 - Jul 2024",
    desc: "Built a Python + FastAPI fleet-tracking platform (modular monolith, asyncpg, PostgreSQL) with real-time geofencing alerts, SOS triggers, and live driver-to-dispatcher chat over REST + WebSocket APIs across regional depots. Improved GPS polling frequency and location-update reliability, reducing location-drift complaints by 30% in post-release feedback.",
    skills: ["Python", "FastAPI", "PostgreSQL", "WebSockets", "asyncpg"],
  },
  {
    id: 2,
    logoText: "IIT",
    role: "Machine Learning Intern",
    company: "IIT Guwahati",
    date: "Jun 2024 - Aug 2024",
    desc: "Developed a multivariate regression model predicting U.S. county cancer-mortality rates, improving accuracy by ~25% through feature engineering and rigorous data preparation.",
    skills: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib"],
  },
  {
    id: 3,
    logoText: "ONGC",
    role: "Software Engineer Intern",
    company: "ONGC",
    date: "May 2023 - Jul 2023",
    desc: "Delivered a Java + Spring Boot Library Management System — modular monolith with 5 bounded modules (Catalog, Circulation, Member, Fine, Auth), optimistic locking to prevent double-borrow, and Flyway-versioned schema migrations. Implemented JWT RBAC (LIBRARIAN / MEMBER / ADMIN) with Spring Security and BCrypt, achieving ≥80% coverage via JUnit 5 + Testcontainers and reducing manual entry errors by 40%.",
    skills: ["Java", "Spring Boot", "MySQL", "JWT", "JUnit 5", "Testcontainers"],
  },
];

export const education = [
  {
    id: 0,
    logoText: "NIT",
    school: "National Institute of Technology, Arunachal Pradesh",
    date: "2021 - 2025",
    grade: "8.39 CGPA",
    desc: "Bachelor of Technology in Computer Science and Engineering. Coursework across Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, and Distributed Systems. Training & Placement Coordinator for the CS department, and solver of 500+ DSA problems (LeetCode 1600+, GFG top contest ranks).",
    degree: "B.Tech, Computer Science and Engineering",
  },
  {
    id: 1,
    logoText: "CA",
    school: "Central Academy",
    date: "2012 - 2018",
    grade: "95.6%",
    desc: "Higher Secondary education in the Science stream with Computer Science, building the mathematics and programming foundation that led into a Computer Science degree.",
    degree: "Higher Secondary (Science with Computer)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Employee Agent",
    date: "2025",
    description:
      "Domain-agnostic GenAI digital-employee and voice-driven AI interview platform. A LangGraph orchestrator-worker state machine reconfigurable to any role via a single config; a RAG pipeline (Chroma + Gemini) with a CRAG/Self-RAG verifier grading answer grounding; human-in-the-loop review; and a voice interview mode on the OpenAI Realtime API with GitHub-aware persona generation, Deepgram STT, and LLM scoring traced with LangSmith.",
    tags: [
      "Python",
      "LangGraph",
      "LangChain",
      "FastAPI",
      "Chroma",
      "Gemini",
      "OpenAI Realtime",
      "Deepgram",
      "Prisma",
      "Docker",
    ],
    category: "ai",
    github: "https://github.com/AkashkumarChoudhary/employee-agent",
    webapp: "",
  },
  {
    id: 1,
    title: "aiInterview",
    date: "2025",
    description:
      "AI-powered mock-interview platform that generates role-specific questions, runs a timed interview, and returns structured feedback and scoring to help candidates prepare. (Placeholder summary — edit with real details.)",
    tags: ["React", "Node.js", "LLM", "OpenAI"],
    category: "ai",
    github: "https://github.com/AkashkumarChoudhary/aiInterview",
    webapp: "",
  },
  {
    id: 2,
    title: "Jira Board",
    date: "2025",
    description:
      "Full-stack kanban board built with Next.js 14 App Router and type-safe Server Actions for data mutations without a separate API layer. Drag-and-drop task management with reproducible DB seeding, a GitHub Actions CI/CD pipeline gating merges with automated tests, and a Storybook-documented component library.",
    tags: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Server Actions",
      "Storybook",
      "GitHub Actions",
    ],
    category: "fullstack",
    github: "https://github.com/AkashkumarChoudhary/atlassian_jira_clone",
    webapp: "",
  },
  {
    id: 3,
    title: "serviceCRM",
    date: "2024",
    description:
      "CRM for service businesses to manage leads, jobs, scheduling, and customer history in one dashboard, with role-based access and activity tracking. (Placeholder summary — edit with real details.)",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    category: "fullstack",
    github: "https://github.com/AkashkumarChoudhary/serviceCRM",
    webapp: "",
  },
  {
    id: 4,
    title: "PDF Summarizer",
    date: "2024",
    description:
      "Python tool that extracts and summarizes long PDFs using LLMs, producing concise section-wise summaries and key takeaways from dense documents. (Placeholder summary — edit with real details.)",
    tags: ["Python", "LangChain", "LLM"],
    category: "ai",
    github: "https://github.com/AkashkumarChoudhary/PDF_SUMMARIZER",
    webapp: "",
  },
  {
    id: 5,
    title: "Real Estate",
    date: "2024",
    description:
      "Full-stack real-estate platform for listing, searching, and filtering properties with image galleries, maps, and enquiry management. (Placeholder summary — edit with real details.)",
    tags: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    category: "fullstack",
    github: "https://github.com/AkashkumarChoudhary/Real_Estate",
    webapp: "",
  },
];
