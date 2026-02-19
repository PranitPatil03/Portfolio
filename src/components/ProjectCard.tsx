'use client';

import { Project } from '@/types/project'
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { ProjectNavigation } from './ProjectNavigation';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

// Tech icon mapping
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

interface ProjectCardProps {
  project: Project;
  isDetailed?: boolean;
  allProjects?: Project[];
}

export const ProjectCard = ({ project, isDetailed = false, allProjects = [] }: ProjectCardProps) => {

  if (!isDetailed) {
    return (
      <Link
        href={`/projects/${project.id}`}
        className="group block touch-manipulation active:opacity-75"
        style={{
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none'
        }}
      >
        <div className="py-2 text-base sm:text-lg md:text-xl pb-4 sm:pb-5 border-b border-neutral-600 dark:border-neutral-500 transition-all duration-300 group-hover:border-neutral-400 dark:group-hover:border-neutral-400 group-hover:pl-2">
          <span className="inline-block transition-all duration-300 group-hover:translate-x-1 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
            {project.title}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <article className="w-full max-w-none px-4 sm:px-0">
      <header className="mb-6 sm:mb-8">
        <div className="flex items-start justify-between mb-4 sm:mb-6 gap-3">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-medium flex-1 min-w-0 wrap-break-word">{project.title}</h1>
          <div className="flex items-center gap-2 shrink-0">
            {project.liveLink && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="bg-neutral-200 border-2 border-black dark:bg-white/[0.08] dark:border-white/[0.15] p-1.5 rounded-full hover:opacity-70 touch-manipulation active:opacity-75"
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}
                  >
                    <FiArrowUpRight className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  View live site
                </TooltipContent>
              </Tooltip>
            )}
            {project.githubLink && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="bg-neutral-200 border-2 border-black dark:bg-white/[0.08] dark:border-white/[0.15] p-1.5 rounded-full hover:opacity-70 touch-manipulation active:opacity-75"
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}
                  >
                    <FaGithub className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  View on GitHub
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {project.tags.map(tag => (
            <div
              key={tag}
              className="relative flex items-center justify-center overflow-hidden rounded-2xl border [box-shadow:0_4px_10px_-4px_rgba(15,23,42,0.15)] bg-neutral-50 border-neutral-200 after:border-neutral-100 after:border-t-2 after:border-b-2 after:border-b-neutral-300 dark:bg-white/[0.05] dark:border-white/[0.1] dark:after:border-white/[0.06] dark:after:border-b-white/[0.03] after:absolute after:inset-0 after:rounded-2xl after:border-r-0 after:content-['']"
            >
              <div className="flex items-center gap-2 px-3 py-1.5">
                {techIconMap[tag] && (
                  <Image
                    src={techIconMap[tag]}
                    alt={tag}
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain"
                  />
                )}
                <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{tag}</span>
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* Media Section - Fixed Container */}
      <div className="mb-6 sm:mb-8">
        {project.image && (
          <div className="w-full aspect-4/3 relative rounded-lg overflow-hidden bg-black/5 dark:bg-white/5">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={900}
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1200px) 70vw, 60vw"
              quality={95}
              priority
            />
          </div>
        )}
      </div>

      {/* Content Section - Fixed Container */}
      <div className="mb-6 sm:mb-8">
        <div className="space-y-3 sm:space-y-4">
          {/* Description */}
          <div className="text-sm sm:text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
            {project.longDescription ? (
              project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-neutral-600 dark:text-neutral-400 mb-4 last:mb-0">
                  {paragraph}
                  {index === 0 && project.tweetUrl && (
                    <>
                      {' '}
                      <Link
                        href={project.tweetUrl}
                        target="_blank"
                        className="text-cyan-500 dark:text-cyan-600 hover:underline touch-manipulation active:opacity-75"
                        style={{
                          WebkitTapHighlightColor: 'transparent',
                          WebkitTouchCallout: 'none',
                          WebkitUserSelect: 'none',
                          userSelect: 'none'
                        }}
                      >
                        you can view the tweet here
                      </Link>
                    </>
                  )}
                </p>
              ))
            ) : (
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {project.description}
                {project.tweetUrl && (
                  <>
                    {' '}
                    <Link
                      href={project.tweetUrl}
                      target="_blank"
                      className="text-cyan-500 dark:text-cyan-600 hover:underline touch-manipulation active:opacity-75"
                      style={{
                        WebkitTapHighlightColor: 'transparent',
                        WebkitTouchCallout: 'none',
                        WebkitUserSelect: 'none',
                        userSelect: 'none'
                      }}
                    >
                      you can view the tweet here
                    </Link>
                  </>
                )}
              </p>
            )}
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mt-6">
              <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3">
                Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="text-neutral-400 dark:text-neutral-500 leading-6">•</span>
                    <span className="leading-6">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {isDetailed && allProjects.length > 0 && (
        <ProjectNavigation currentProject={project} allProjects={allProjects} />
      )}
    </article>
  );
};
