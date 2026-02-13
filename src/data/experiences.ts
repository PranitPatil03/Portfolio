export interface ExperienceProject {
  title: string;
  description: string;
  points: string[];
  techStack: string[];
  status: 'completed' | 'in-progress';
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
        title: "Risk Prediction Platform",
        description: "A multi-tenant SaaS platform for financial institutions to assess company default probability using ML-powered models. The platform enables real-time risk assessment and bulk portfolio analysis.",
        points: [
          "Built a multi-tenant architecture supporting multiple financial institutions with complete data isolation",
          "Designed and implemented role-based access control (RBAC) with JWT authentication across tenants, organizations, and users",
          "Developed ML inference pipelines using Logistic Regression and LightGBM ensembles for annual and quarterly predictions",
          "Created async APIs for real-time predictions and bulk portfolio risk analysis with CSV/Excel processing",
          "Built high-performance backend with FastAPI, PostgreSQL, Redis, and Celery for background ML jobs",
          "Implemented real-time analytics dashboard with Next.js, TanStack Query, and Zustand for interactive insights",
          "Architected cloud infrastructure on AWS (ECS Fargate, RDS, Redis, ALB) with CI/CD pipelines using GitHub Actions"
        ],
        techStack: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "AWS", "Docker", "TanStack Query", "Zustand", "Python"],
        status: "completed"
      },
      {
        title: "AI Data Analytics Platform",
        description: "An AI data science chatbot platform that combines conversational analytics with notebook-style Python execution for real-time insights.",
        points: [
          "Built an intelligent chat interface in Next.js 16 using AI SDK 5.0 and Anthropic Claude to translate natural language questions into executable analysis workflows.",
          "Integrated E2B Code Interpreter to spin up isolated Python notebook environments with pre-installed data-science libraries (pandas, numpy, matplotlib, seaborn, plotly, scikit-learn).",
          "Implemented file upload and persistence using Vercel Blob and PostgreSQL (Drizzle ORM), making uploaded CSV/XLS files available inside notebook sessions.",
          "Designed a modern, dark-mode optimized UI with Tailwind CSS v4, shadcn/ui components, and CodeMirror/ProseMirror editors for code and rich-text outputs.",
          "Secured the platform with Auth.js-based authentication and guest sessions, preparing it for production deployments on Vercel with migrations and observability hooks."
        ],
        techStack: [
          "Next.js",
          "AI SDK",
          "Anthropic Claude",
          "E2B Code Interpreter",
          "PostgreSQL",
          "Drizzle ORM",
          "Vercel Blob",
          "Auth.js",
          "Tailwind CSS",
          "shadcn/ui",
          "CodeMirror",
          "ProseMirror"
        ],
        status: "in-progress"
      },
      // Previously: News Sentiment Analysis System (removed to keep focus on AI data analytics and notebook-based chatbot work)
    ],
    techStack: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "AWS", "Docker", "Redis", "TanStack Query", "Zustand"]
  }
];

export function getExperienceBySlug(slug: string): ExperienceDetail | undefined {
  return experiences.find(exp => exp.slug === slug);
}

export function getAllExperiences(): ExperienceDetail[] {
  return experiences;
}
