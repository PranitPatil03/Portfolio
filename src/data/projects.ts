import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: "relay",
    title: "Relay",
    description: "Start Chatting without frictions. One click to create a room. One link to invite your team. Zero barriers to communication.",
    longDescription:
      "Relay is an instant communication platform that lets you create and join chat rooms in seconds. Create a room with one click, share a link to invite your team — no signup required for guests. Features include real-time messaging powered by WebSockets, file sharing via AWS S3 + CloudFront, optional Google/GitHub authentication, and a modern responsive UI built with Tailwind CSS and Framer Motion. Deployed as a monorepo with Turborepo: frontend on Vercel, backend on Railway.",
    features: [
      "Instant Rooms: Create and join chat rooms in seconds, no unnecessary barriers",
      "Privacy First: Designed for private, ephemeral communication",
      "Real-Time: High-performance WebSockets for instant message delivery",
      "File Sharing: Share images and files via AWS S3 + CloudFront CDN",
      "Secure Authentication: Optional Google and GitHub login for persistent rooms",
      "Modern UI: Beautiful, responsive interface with Tailwind CSS and Framer Motion",
      "User Dashboard: Track room usage and manage active sessions",
    ],
    liveLink: "https://getrealy.vercel.app/",
    githubLink: "https://github.com/PranitPatil03/relay",
    video: "",
    image: "/images/relay.png",
    tweetUrl: "",
    status: "live",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Express",
      "Node.js",
    ],
  },
  {
    id: "launchpad",
    title: "Launchpad Code Live",
    description: "Self-hosted one-click deployment platform for frontend apps with instant preview environments.",
    longDescription:
      "Launchpad is a self-hosted, one-click deployment platform for frontend applications. It enables automatic deployments directly from GitHub repositories with real-time build logs, status tracking, and isolated preview URLs for every deployment. The platform uses a microservice architecture with dedicated services for upload, build, and reverse proxy routing, making it easy to ship changes fast while keeping environments fully isolated for testing and collaboration.",
    features: [
      "One-click GitHub deployments for frontend apps",
      "Real-time build logs and status tracking",
      "Isolated preview URLs for every deployment",
      "Dashboard to manage projects, deployments, and build history",
      "Reverse proxy layer to route traffic to active preview environments",
      "Event-driven build pipelines coordinating build, upload, and preview services",
    ],
    liveLink: "https://getlaunchpad.vercel.app/",
    githubLink: "https://github.com/PranitPatil03/launchpad",
    video: "",
    image: "/images/launchpad.png",
    tweetUrl: "",
    status: 'live',
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Kafka",
      "Docker",
      "AWS",
      "S3",
      "ECS",
      "ClickHouse",
    ],
  },
  {
    id: "resumio",
    title: "Resumio",
    description: "AI-powered resume builder that tailors resumes to specific job descriptions with PDF generation and job matching.",
    longDescription:
      "Resumio is a smart resume builder that adapts your resume to match specific job descriptions. Users store all of their professional details (projects, work experience, education, skills, certifications) and, for each job description, Resumio uses AI to analyze requirements, optimize resume content, and generate ATS-friendly PDFs. The platform includes resume management, AI analysis, JD management, and a full profile management flow with real-time validation and multi-step onboarding.",
    features: [
      "AI-powered tailoring of resumes to specific job descriptions",
      "Structured onboarding to create or upload a resume before job matching",
      "Resume management tab with multiple versions and history",
      "Analysis tab for AI feedback, keyword optimization, and ATS checks",
      "Optimize & Match tab with match score and optimization insights",
      "Job description management with saved JDs and linked resumes",
      "LaTeX-based PDF generation via a dedicated microservice",
      "Cloudflare R2 storage for generated resumes and history",
      "Comprehensive profile management for projects, experience, education, skills, and certifications",
      "Secure authentication and protected routes",
    ],
    liveLink: "",
    githubLink: "",
    video: "",
    image: "/images/resume.png",
    tweetUrl: "",
    status: 'live',
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Aceternity UI",
      "NextAuth.js",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Cloudflare R2",
      "Gemini API",
    ],
  },
  {
    id: "spark",
    title: "Spark",
    description: "An AI-powered IDE that transforms your ideas into production-ready applications with real-time collaboration.",
    longDescription:
      "Spark is an AI-powered IDE that transforms your ideas into production-ready applications. Just describe what you want to build and Spark handles the rest — from code generation to deployment.",
    features: [
      "Real-time collaborative code editing",
      "AI-powered code suggestions and quick edit (Cmd+K)",
      "Conversation-based AI assistant",
      "In-browser code execution with WebContainer",
      "GitHub import/export integration",
      "Multi-file project management",
    ],
    liveLink: "https://spark-gules-eight.vercel.app/",
    githubLink: "https://github.com/PranitPatil03/Spark",
    video: "",
    image: "/images/project1.png",
    tweetUrl: "",
    status: 'building',
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Convex",
      "Claude AI",
      "WebContainer",
      "CodeMirror",
    ],
  },
]

// Helper function to get a project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

// Helper function to get all projects
export function getAllProjects(): Project[] {
  return projects
}
