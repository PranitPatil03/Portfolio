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
        description: "An enterprise data analytics platform with AI-powered insights and automated reporting capabilities.",
        points: [
          "Building comprehensive data visualization and reporting tools for enterprise clients",
          "Implementing ETL pipelines for multi-source data integration and processing"
        ],
        techStack: ["Next.js", "Python", "PostgreSQL", "AWS"],
        status: "in-progress"
      },
      {
        title: "News Sentiment Analysis System",
        description: "An NLP-based platform focused on detecting religious hate speech in news content with real-time content moderation.",
        points: [
          "Developing NLP models for sentiment analysis and hate speech detection using transformer architectures",
          "Building real-time content moderation pipeline with multi-source news aggregation"
        ],
        techStack: ["Python", "FastAPI", "Next.js", "PostgreSQL"],
        status: "in-progress"
      }
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
