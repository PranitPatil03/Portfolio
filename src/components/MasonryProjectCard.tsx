'use client';

import { Project } from '@/types/project'
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';


// Tech icon mapping - matches ProjectCard
const techIconMap: Record<string, string> = {
  "Next.js": "/tech-icons/nextjs.svg",
  "React": "/tech-icons/react.svg",
  "TypeScript": "/tech-icons/typescript.svg",
  "JavaScript": "/tech-icons/javascript.svg",
  "Tailwind CSS": "/tech-icons/tailwind.svg",
  "Tailwind": "/tech-icons/tailwind.svg",
  "Node.js": "/tech-icons/nodejs.svg",
  "Python": "/tech-icons/python.svg",
  "FastAPI": "/tech-icons/fastapi.svg",
  "Express": "/tech-icons/express.svg",
  "PostgreSQL": "/tech-icons/postgresql.svg",
  "MongoDB": "/tech-icons/mongodb.svg",
  "Redis": "/tech-icons/redis.svg",
  "Docker": "/tech-icons/docker.svg",
  "Git": "/tech-icons/Git.svg",
  "AWS": "/tech-icons/AWS.svg",
  "Prisma": "/tech-icons/prisma.svg",
  "Drizzle": "/tech-icons/drizzle.svg",
  "GitHub Actions": "/tech-icons/github-actions.svg",
  "Zustand": "/tech-icons/zustand.svg",
  "shadcn/ui": "/tech-icons/shadcn.svg",
  "TanStack Query": "/tech-icons/tanstack.svg",
};

interface MasonryProjectCardProps {
  project: Project;
  className?: string;
}

export const MasonryProjectCard = ({ project, className = "" }: MasonryProjectCardProps) => {
  const techTags = project.tags.filter((tag) => techIconMap[tag]).slice(0, 6);

  return (
    <div
      className={`group/item relative rounded-xl p-4 transition-colors duration-300 bg-neutral-50 dark:bg-white/[0.04] border border-neutral-200/50 dark:border-white/[0.08] ${className}`}
    >
      <Link href={`/projects/${project.id}`} className="block cursor-pointer">
        {/* Media Container */}
        <div className="relative z-10 rounded-lg overflow-hidden">
          <div className="relative overflow-hidden w-full aspect-video rounded-lg">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} project cover`}
                width={1200}
                height={900}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ color: "transparent" }}
                sizes="(max-width: 640px) 384px, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 317px"
                quality={75}
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800" />
            )}
          </div>
        </div>
      </Link>

      {/* Project Info - title with arrow beside name only */}
      <div className="pt-3">
        <div className="flex items-center gap-1.5 mb-1">
          <Link href={`/projects/${project.id}`} className="min-w-0">
            <h3 className="font-semibold text-black dark:text-white text-base truncate">
              {project.title}
            </h3>
          </Link>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors inline-flex"
              title="Open live site"
              aria-label="Open live site"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>

        <Link href={`/projects/${project.id}`}>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </Link>
      </div>

      {/* Tech Stack Icons + Live/Building status on right */}
      <div className="flex items-center justify-between gap-2 mt-1">
        <div className="flex flex-wrap items-center gap-2 min-w-0">
          {techTags.map((tag) => (
            <Image
              key={tag}
              src={techIconMap[tag]}
              alt={tag}
              width={20}
              height={20}
              className="w-5 h-5 object-contain opacity-85"
              title={tag}
            />
          ))}
        </div>
        {project.status && (
          <span
            className={`shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${project.status === "building"
              ? "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
              : "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
              }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${project.status === "building"
                ? "bg-amber-500 animate-pulse"
                : "bg-emerald-500"
                }`}
            />
            {project.status === "building" ? "Building" : "Live"}
          </span>
        )}
      </div>
    </div>
  );
};
