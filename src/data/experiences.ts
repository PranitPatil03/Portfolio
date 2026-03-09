export interface ExperienceProject {
  title: string;
  displayName: string;
  projectSlug: string;
  description: string;
  points: string[];
  techStack: string[];
  status: 'completed' | 'in-progress';
}

export interface CaseStudySection {
  heading: string;
  content?: string;
  bullets?: string[];
  subsections?: { heading: string; content: string }[];
}

export interface CaseStudyTechCategory {
  category: string;
  items: string[];
}

export interface CaseStudy {
  projectSlug: string;
  title: string;
  tagline: string;
  overview: string;
  problem: string;
  targetUsers: { label: string; description: string }[];
  howItWorks: { heading: string; content: string }[];
  architecture: { heading: string; content: string }[];
  techStack: CaseStudyTechCategory[];
  role: string[];
  outcome: string;
  images?: string[];
}

export interface ExperienceDetail {
  slug: string;
  company: string;
  position: string;
  type: string;
  duration: string;
  location: string;
  overview: string;
  projects: ExperienceProject[];
  techStack: string[];
  caseStudies: CaseStudy[];
}

export const experiences: ExperienceDetail[] = [
  {
    slug: "contractor",
    company: "Independent Contractor",
    position: "Full Stack Engineer",
    type: "Contract",
    duration: "Jan, 2025 - Present",
    location: "India - Remote",
    overview: "Working as an independent contractor, I've been building enterprise-grade SaaS platforms and AI-powered solutions for clients across fintech and media industries. My focus has been on delivering scalable, production-ready applications with modern tech stacks.",
    projects: [
      {
        title: "AccuNode — Credit Risk Assessment Platform",
        displayName: "AccuNode",
        projectSlug: "accunode",
        description: "A multi-tenant SaaS platform for financial institutions to assess company default probability using ML-powered models. The platform enables real-time risk assessment and bulk portfolio analysis.",
        points: [
          "Designed and built a multi-tenant credit risk analytics SaaS platform enabling financial institutions to evaluate company default risk using predictive machine learning models trained on financial datasets.",
          "Developed scalable backend services using FastAPI, PostgreSQL, Redis, and SQLAlchemy exposing REST APIs for financial data ingestion, analytics workflows, and ML inference pipelines.",
          "Implemented machine learning inference pipelines using Logistic Regression and LightGBM ensemble models generating real-time default probability scores from structured financial statement data.",
          "Designed asynchronous data processing architecture using Redis queues and background worker services enabling batch analysis of large CSV and Excel portfolios containing hundreds of companies.",
          "Implemented secure multi-tenant RBAC authorization using JWT authentication and tenant-aware database queries ensuring strict cross-organization data isolation.",
          "Deployed production infrastructure on AWS with automated CI/CD pipelines via GitHub Actions enabling reliable deployments and horizontal scaling."
        ],
        techStack: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "AWS", "Docker", "Python", "SQLAlchemy", "LightGBM"],
        status: "completed"
      },
      {
        title: "Notebook AI — AI Data Analysis Platform",
        displayName: "Notebook AI",
        projectSlug: "notebook-ai",
        description: "An AI data science chatbot platform that combines conversational analytics with notebook-style Python execution for real-time insights.",
        points: [
          "Built an AI-powered data analysis platform allowing users to upload datasets and perform conversational analytics using natural language queries.",
          "Integrated Vercel AI SDK with sandboxed Python execution environments enabling dynamic generation and execution of Python scripts for chart generation and data exploration.",
          "Implemented notebook-style analysis workflows where AI generates executable Python code, runs it in isolated environments, and streams tables, charts, and insights to the frontend."
        ],
        techStack: ["Next.js", "AI SDK", "Anthropic Claude", "E2B Code Interpreter", "PostgreSQL", "Drizzle ORM", "Vercel Blob", "Auth.js", "Tailwind CSS", "shadcn/ui", "CodeMirror", "ProseMirror"],
        status: "completed"
      },
      {
        title: "Lumio — AI Content Processing Platform",
        displayName: "Lumio",
        projectSlug: "lumio",
        description: "Enterprise AI content processing platform handling thousands of jobs including summarization, document analysis, metadata extraction, and automated audio generation.",
        points: [
          "Architected distributed backend pipelines using Node.js, Express.js, and PostgreSQL processing thousands of AI content jobs including summarization, document analysis, metadata extraction, and automated audio generation.",
          "Developed an AI blog-to-podcast pipeline converting long-form blog articles into summarized scripts and synthesized audio content using TTS APIs and prompt engineering.",
          "Built enterprise search modules enabling structured retrieval and analysis of company intelligence datasets across internal research platforms and knowledge indexing pipelines.",
          "Optimized PostgreSQL queries and Redis caching layers for low-latency analytics; built Next.js and React dashboards visualizing relocation and demographic data across 30,000+ US ZIP codes.",
          "Built data extraction and processing pipelines using prompt engineering and Pandas for structured Excel inputs; designed knowledge indexing pipelines for document ingestion and AI summarization workflows."
        ],
        techStack: ["Node.js", "Express.js", "PostgreSQL", "Redis", "Next.js", "React", "Python", "Pandas", "Tailwind CSS"],
        status: "completed"
      },
      {
        title: "HubX.ai — POS & Payment Platform",
        displayName: "HubX.ai",
        projectSlug: "hubx-ai",
        description: "Enterprise POS and payment platform for retail operators with transaction management, payment gateway integration, and real-time notifications.",
        points: [
          "Designed and implemented POS dashboard interfaces using React and Tailwind CSS enabling retail operators to manage transactions, reporting workflows, and inventory with an improved and intuitive UI.",
          "Integrated Cashfree payment gateway APIs supporting merchant onboarding, payment verification, and transaction workflows; built automated transactional email notifications using Nodemailer for system alerts.",
          "Integrated WhatsApp Cloud API enabling real-time operational notifications and business alerts for merchants, improving communication speed across payment and onboarding workflows."
        ],
        techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "Cashfree", "WhatsApp Cloud API", "Nodemailer", "PostgreSQL"],
        status: "completed"
      },
    ],
    caseStudies: [
      {
        projectSlug: "accunode",
        title: "AccuNode — Credit Risk Assessment Platform",
        tagline: "A production-grade, multi-tenant SaaS platform for ML-powered company default risk prediction.",
        overview: "AccuNode is a multi-tenant SaaS platform that uses machine learning to predict company default risk from financial ratios. It supports both real-time individual company analysis and large-scale batch processing via CSV/Excel uploads, alongside analytics dashboards for portfolio-level insights.\n\nBuilt for financial institutions, lenders, and risk teams who need fast, explainable credit risk assessments at scale.",
        problem: "Credit risk workflows in most organizations are slow, inconsistent, and hard to scale:\n\n• Spreadsheet-heavy and largely manual\n• Not designed to handle hundreds of companies at once\n• Lack ML-powered scoring or customizable models\n• No multi-tenant access control for teams and organizations\n\nThis leads to slow decision-making, inconsistent risk evaluation, and poor visibility across portfolios and sectors.",
        targetUsers: [
          { label: "Credit & Risk Analysts", description: "need fast, reliable default scoring" },
          { label: "Lending & Fintech Teams", description: "require scalable batch processing" },
          { label: "Investment & Research Teams", description: "want portfolio-level insights" },
          { label: "Platform Admins", description: "manage tenants, organizations, users, and models" },
        ],
        howItWorks: [
          { heading: "Individual Company Analysis", content: "Users input financial ratios to receive real-time default probability scores and risk categories, powered by ML models trained on annual or quarterly data." },
          { heading: "Bulk Portfolio Analysis", content: "Users upload CSV or Excel files. The system processes jobs asynchronously, runs batch ML inference, and provides downloadable results with live job status tracking." },
          { heading: "Analytics Dashboard", content: "Aggregated insights across all analyzed companies: Default rate by sector, Risk category distribution, Default rate vs. market cap, High-risk companies and top performers." },
          { heading: "Role-Based Access Control", content: "Multi-level roles — super_admin, tenant_admin, org_admin, org_member, and user — control access to data and operations across tenants and organizations." },
        ],
        architecture: [
          { heading: "API Service (FastAPI)", content: "Async REST APIs handling auth, tenant/org management, predictions, analytics, and job orchestration." },
          { heading: "ML Inference Layer", content: "Annual and quarterly default prediction models served via dedicated backend pipelines." },
          { heading: "Background Workers", content: "Handle bulk CSV/Excel uploads, feature extraction, and batch inference jobs asynchronously." },
          { heading: "Cache Layer", content: "Redis manages job state, caching, and performance optimization across requests." },
          { heading: "Relational Data Store", content: "PostgreSQL stores tenants, organizations, users, jobs, predictions, and analytics data." },
        ],
        techStack: [
          { category: "Frontend", items: ["Next.js 15 (App Router)", "React 19 + TypeScript", "Tailwind CSS + Radix UI", "Zustand + TanStack Query", "Vercel"] },
          { category: "Backend", items: ["FastAPI (Python, async)", "PostgreSQL + SQLAlchemy ORM", "Role-based access control", "Docker & Docker Compose"] },
          { category: "Machine Learning", items: ["scikit-learn, LightGBM, pandas, numpy", "Logistic Regression (Annual Model)", "LightGBM + Logistic Regression Ensemble (Quarterly)"] },
          { category: "Infrastructure & DevOps", items: ["AWS ECS Fargate (API + workers)", "AWS RDS (PostgreSQL)", "AWS ElastiCache (Redis)", "AWS ALB", "GitHub Actions → ECR → ECS"] },
        ],
        role: [
          "Designed the full system architecture and multi-tenant data model",
          "Built the complete FastAPI backend — auth, RBAC, tenants, orgs, users, jobs, predictions, and analytics",
          "Implemented async batch processing pipelines for CSV/Excel uploads",
          "Integrated ML inference workflows into production APIs",
          "Designed tenant-scoped data isolation across APIs, workers, and analytics",
          "Built frontend dashboards, forms, analytics views, and admin panels",
          "Implemented role-based access control across frontend and backend",
          "Set up Dockerized local dev environment and AWS production deployment",
          "Configured the full CI/CD pipeline (GitHub Actions → AWS ECS)",
        ],
        outcome: "AccuNode shipped as a production-ready multi-tenant ML platform with real-time and batch default risk predictions, scalable async job processing for large portfolios, secure role-based access and strict tenant isolation, and actionable analytics dashboards for financial decision-making.",
        images: [],
      },
      {
        projectSlug: "notebook-ai",
        title: "Notebook AI — AI Data Analysis Platform",
        tagline: "A full-stack platform that combines chat, Jupyter notebooks, and file-based analysis into a single conversational interface.",
        overview: "Notebook AI is an AI-powered data science assistant that lets users upload datasets, ask questions in plain English, and receive real-time code execution, visualizations, and insights — without writing a single line of code. It bridges the gap between chatbots and notebooks by tightly integrating both into one seamless workflow.",
        problem: "Data analysis today is fragmented across multiple tools — chatbots for Q&A, Jupyter notebooks for coding, and file explorers for data. This constant context switching slows analysis, increases cognitive load, and makes data science inaccessible to non-technical users.\n\nExisting AI tools can explain concepts, but cannot reliably execute code on real datasets or preserve analytical state across a conversation.",
        targetUsers: [
          { label: "Founders & product managers", description: "exploring datasets without engineering support" },
          { label: "Analysts & data scientists", description: "prototyping insights quickly" },
          { label: "Non-technical users", description: "who want answers from data, not code" },
          { label: "Developers", description: "who want an interactive AI + notebook workflow" },
        ],
        howItWorks: [
          { heading: "Conversational Interface", content: "Users chat with an AI model using real-time streaming responses — fast, natural, and familiar." },
          { heading: "Automatic Notebook Mode", content: "The system detects when a request involves data analysis (file upload or keywords like \"analyze\" or \"plot\") and switches to notebook mode automatically — no manual toggle required." },
          { heading: "Jupyter Notebook in Chat", content: "The AI generates Python code, executes it inside a secure cloud sandbox, and streams outputs — tables, charts, and errors — inline in the chat as notebook cells." },
          { heading: "Persistent Analytical State", content: "Variables and datasets persist across messages within a conversation, enabling multi-step analysis just like a real notebook." },
          { heading: "Artifacts & Documents", content: "The AI creates rich artifacts — documents, code files, notebooks, sheets, and images — that open in a side panel for deeper editing and exploration." },
          { heading: "Side Chat for Quick Follow-ups", content: "Users can select any output or text and ask a follow-up question in an ephemeral mini-chat without disrupting the main conversation." },
        ],
        architecture: [
          { heading: "Client (Next.js App Router)", content: "Streaming UI with a chat interface, notebook viewer, and artifact side panel — all updating in real time." },
          { heading: "AI Layer (Claude via Vercel AI SDK)", content: "Handles streaming responses, tool calling, and multi-step reasoning using Claude Sonnet 4 and Haiku 4.5." },
          { heading: "Execution Layer (E2B Sandboxes)", content: "User code runs exclusively inside isolated E2B cloud containers — never on the server. Supports pandas, numpy, matplotlib, seaborn, plotly, and scikit-learn." },
          { heading: "Storage Layer", content: "PostgreSQL (Neon) for chats, messages, notebooks, and artifacts. Vercel Blob for file uploads and dataset storage." },
          { heading: "Auth & Security", content: "JWT-based authentication with guest and registered sessions, rate limiting per user type, and Zod validation on all API inputs." },
        ],
        techStack: [
          { category: "Frontend", items: ["Next.js 16 (App Router + Turbopack)", "React 19, TypeScript, Tailwind CSS, shadcn/ui", "Framer Motion", "CodeMirror (code), ProseMirror (documents)"] },
          { category: "Backend", items: ["Next.js API Routes", "Vercel AI SDK (streaming + tool calling)", "NextAuth (Auth.js)", "Drizzle ORM", "PostgreSQL (Neon)", "Vercel Blob"] },
          { category: "AI & Execution", items: ["Claude Sonnet 4 / Haiku 4.5 (Anthropic)", "E2B Code Interpreter", "pandas, numpy, matplotlib, seaborn, plotly, scikit-learn"] },
          { category: "Infrastructure", items: ["Vercel (Deployment)", "OpenTelemetry (Monitoring)", "Playwright (E2E Testing)"] },
        ],
        role: [
          "Designed the system architecture and data models from scratch",
          "Built real-time streaming chat with AI tool orchestration",
          "Implemented a Jupyter-style notebook engine with sandboxed cloud execution",
          "Designed cell versioning and persistent notebook state across conversations",
          "Built the artifact system — documents, code files, sheets, notebooks, and images",
          "Implemented auth, rate limiting, file uploads, and storage",
          "Built the complete frontend — chat UI, notebook viewer, and artifact panel",
          "Deployed and productionized the full platform on Vercel",
        ],
        outcome: "Notebook AI delivers a unique chat-plus-notebook experience that lets users analyze real datasets conversationally. It makes data science faster, more accessible, and more interactive — for both technical and non-technical users — without requiring any prior coding knowledge.",
        images: [],
      },
      {
        projectSlug: "lumio",
        title: "Lumio — AI Content Processing Platform",
        tagline: "Enterprise AI content processing at scale with distributed pipelines and intelligent search.",
        overview: "Lumio is an enterprise AI content processing platform that handles thousands of AI content jobs including summarization, document analysis, metadata extraction, and automated audio generation. Built to process large volumes of content efficiently with distributed backend pipelines.",
        problem: "Enterprises face challenges processing large volumes of content at scale — from blog articles to documents to audio. Traditional approaches lack automation, scalability, and intelligent processing capabilities needed for modern content workflows.",
        targetUsers: [
          { label: "Content Teams", description: "automate content processing workflows" },
          { label: "Marketing Teams", description: "convert blogs to podcasts automatically" },
          { label: "Research Teams", description: "index and search company intelligence" },
          { label: "Data Teams", description: "process and analyze large datasets" },
        ],
        howItWorks: [
          { heading: "AI Content Pipeline", content: "Distributed Node.js/Express.js pipelines process thousands of jobs including summarization, document analysis, and metadata extraction." },
          { heading: "Blog to Podcast", content: "AI converts long-form blog articles into summarized scripts and synthesized audio using TTS APIs and prompt engineering." },
          { heading: "Enterprise Search", content: "Structured retrieval and analysis of company intelligence datasets across internal research platforms." },
          { heading: "Analytics Dashboards", content: "Next.js and React dashboards visualize relocation and demographic data across 30,000+ US ZIP codes." },
        ],
        architecture: [
          { heading: "Backend API (Node.js/Express)", content: "Distributed pipelines handling thousands of AI content jobs with PostgreSQL for persistence." },
          { heading: "Data Processing", content: "Pandas for structured Excel inputs, prompt engineering for AI workflows." },
          { heading: "Cache Layer", content: "Redis for low-latency analytics and query optimization." },
          { heading: "Frontend", content: "Next.js and React dashboards for data visualization." },
        ],
        techStack: [
          { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
          { category: "Backend", items: ["Node.js", "Express.js", "PostgreSQL", "Redis"] },
          { category: "AI & Data", items: ["Python", "Pandas", "TTS APIs", "Prompt Engineering"] },
        ],
        role: [
          "Architected distributed backend pipelines using Node.js, Express.js, and PostgreSQL",
          "Developed AI blog-to-podcast pipeline using TTS APIs and prompt engineering",
          "Built enterprise search modules for company intelligence datasets",
          "Optimized PostgreSQL queries and Redis caching for low-latency analytics",
          "Built Next.js/React dashboards for 30,000+ US ZIP codes data visualization",
          "Designed data extraction pipelines with Pandas and knowledge indexing workflows",
        ],
        outcome: "Lumio processes thousands of AI content jobs efficiently with distributed pipelines, enabling automated content transformation from blogs to podcasts, enterprise search capabilities, and real-time analytics dashboards.",
        images: [],
      },
      {
        projectSlug: "hubx-ai",
        title: "HubX.ai — POS & Payment Platform",
        tagline: "Enterprise POS and payment solutions for retail operators with seamless integrations.",
        overview: "HubX.ai is an enterprise POS and payment platform designed for retail operators. It enables transaction management, payment gateway integration, and real-time notifications via WhatsApp, providing a complete solution for modern retail operations.",
        problem: "Retail operators need intuitive POS systems with seamless payment processing and real-time notifications. Traditional solutions lack modern UI, integrated payment gateways, and efficient communication channels.",
        targetUsers: [
          { label: "Retail Operators", description: "manage transactions and inventory" },
          { label: "Merchants", description: "process payments securely" },
          { label: "Business Owners", description: "receive real-time operational alerts" },
        ],
        howItWorks: [
          { heading: "POS Dashboard", content: "React and Tailwind CSS interfaces for transaction management, reporting, and inventory control." },
          { heading: "Payment Gateway", content: "Cashfree integration for merchant onboarding, payment verification, and transaction workflows." },
          { heading: "Notifications", content: "WhatsApp Cloud API for real-time operational alerts on leads, proposals, and inventory." },
          { heading: "Email Alerts", content: "Nodemailer-powered transactional email notifications for system alerts." },
        ],
        architecture: [
          { heading: "Frontend", content: "React and Tailwind CSS for intuitive POS dashboard interfaces." },
          { heading: "Backend", content: "Node.js/Express.js APIs for payment and notification services." },
          { heading: "Payment Integration", content: "Cashfree payment gateway for secure transactions." },
          { heading: "Communication", content: "WhatsApp Cloud API and Nodemailer for notifications." },
        ],
        techStack: [
          { category: "Frontend", items: ["React", "Tailwind CSS", "UIkit"] },
          { category: "Backend", items: ["Node.js", "Express.js", "MongoDB"] },
          { category: "Integrations", items: ["Cashfree", "WhatsApp Cloud API", "Nodemailer"] },
        ],
        role: [
          "Designed and implemented POS dashboard interfaces using React and Tailwind CSS",
          "Integrated Cashfree payment gateway APIs for merchant onboarding and transactions",
          "Built automated transactional email notifications using Nodemailer",
          "Integrated WhatsApp Cloud API for real-time operational notifications",
          "Improved UI for transaction management, reporting, and inventory workflows",
        ],
        outcome: "HubX.ai provides retail operators with a modern POS system featuring intuitive dashboards, seamless payment processing via Cashfree, and real-time WhatsApp notifications for improved operational communication.",
        images: [],
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "AWS", "Docker", "Redis", "SQLAlchemy", "LightGBM", "Node.js", "Express.js", "E2B", "Claude", "Drizzle ORM", "Cashfree", "WhatsApp API", "Pandas"]
  }
];

export function getExperienceBySlug(slug: string): ExperienceDetail | undefined {
  return experiences.find(exp => exp.slug === slug);
}

export function getCaseStudy(slug: string, projectSlug: string): CaseStudy | undefined {
  const experience = getExperienceBySlug(slug);
  if (!experience) return undefined;
  return experience.caseStudies.find(cs => cs.projectSlug === projectSlug);
}

export function getAllExperiences(): ExperienceDetail[] {
  return experiences;
}
