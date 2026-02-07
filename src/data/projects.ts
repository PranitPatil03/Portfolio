import { Project } from '@/types/project'

export const projects: Project[] = [
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
  {
    id: "lunel",
    title: "Lunel",
    description: "A modern project management tool with AI-powered insights and team collaboration features.",
    longDescription:
      "Lunel is a modern project management tool that leverages AI to provide insights and improve team collaboration. Built with cutting-edge technologies for optimal performance.",
    liveLink: "",
    githubLink: "https://github.com/pranitpatil03/lunel",
    video: "",
    image: "/images/project1.png",
    tweetUrl: "",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    id: "asana-clone",
    title: "Asana Clone",
    description: "A full-featured task management application inspired by Asana, with drag-and-drop functionality.",
    longDescription:
      "A comprehensive task management application that replicates core Asana features including drag-and-drop task organization, team workspaces, and project timelines.",
    liveLink: "",
    githubLink: "https://github.com/pranitpatil03/asana-clone",
    video: "",
    image: "/images/project1.png",
    tweetUrl: "",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
    ],
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    description: "An intelligent chatbot powered by LLMs for customer support and information retrieval.",
    longDescription:
      "An AI-powered chatbot that uses large language models to provide intelligent responses for customer support, FAQ handling, and information retrieval.",
    liveLink: "",
    githubLink: "https://github.com/pranitpatil03/ai-chatbot",
    video: "",
    image: "/images/project1.png",
    tweetUrl: "",
    tags: [
      "Python",
      "FastAPI",
      "OpenAI",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    id: "portfolio-builder",
    title: "Portfolio Builder",
    description: "A drag-and-drop portfolio website builder for developers and designers.",
    longDescription:
      "A user-friendly portfolio builder that allows developers and designers to create stunning portfolio websites without writing code. Features drag-and-drop components and customizable themes.",
    liveLink: "",
    githubLink: "https://github.com/pranitpatil03/portfolio-builder",
    video: "",
    image: "/images/project1.png",
    tweetUrl: "",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "PostgreSQL",
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
