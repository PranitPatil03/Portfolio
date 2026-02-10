'use client'

import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import { FadeInUp } from '@/components/ui/PageTransitions'
import DiagonalPattern from '@/components/DiagonalPattern'
import PageNavigation from '@/components/Navigation'
import { ExperienceDetail } from '@/data/experiences'

// Tech icon mapping
const techIconMap: Record<string, string> = {
  "Next.js": "/tech-icons/nextjs.svg",
  "TypeScript": "/tech-icons/typescript.svg",
  "Tailwind": "/tech-icons/tailwind.svg",
  "React": "/tech-icons/react.svg",
  "JavaScript": "/tech-icons/javascript.svg",
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
}

interface ExperienceDetailClientProps {
  experience: ExperienceDetail;
}

export default function ExperienceDetailClient({ experience }: ExperienceDetailClientProps) {
  return (
    <div className="min-h-screen transition-colors duration-300 relative" style={{ fontFamily: 'var(--font-hk-grotesk)' }}>
      <div className="relative mx-auto max-w-4xl">
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />

        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              <FadeIn delay={0.1} duration={0.5}>
                <div className="sm:px-12 py-2">
                  <div className="px-4 mb-4 sm:mb-6 pt-4 sm:pt-6">
                    <div className="mb-4 sm:mb-6">
                      <PageNavigation />
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeInUp delay={0.2}>
                <div className="sm:px-12 py-2">
                  <div className="px-4">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-white/[0.08] text-neutral-600 dark:text-neutral-400">
                          {experience.type}
                        </span>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
                          {experience.duration}
                        </span>
                      </div>
                      <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2">
                        {experience.company}
                      </h1>
                      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-1">
                        {experience.position}
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-500">
                        📍 {experience.location}
                      </p>
                    </div>

                    {/* Overview */}
                    <div className="mb-8">
                      <h2 className="text-lg font-semibold text-black dark:text-white mb-3">
                        Overview
                      </h2>
                      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {experience.overview}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h2 className="text-lg font-semibold text-black dark:text-white mb-3">
                        Technologies Used
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {experience.techStack.map((tech) => (
                          <div
                            key={tech}
                            className="relative flex items-center justify-center overflow-hidden rounded-2xl border [box-shadow:0_4px_10px_-4px_rgba(15,23,42,0.15)] bg-neutral-50 border-neutral-200 after:border-neutral-100 after:border-t-2 after:border-b-2 after:border-b-neutral-300 dark:bg-white/[0.05] dark:border-white/[0.1] dark:after:border-white/[0.06] dark:after:border-b-white/[0.03] after:absolute after:inset-0 after:rounded-2xl after:border-r-0 after:content-['']"
                          >
                            <div className="flex items-center gap-2 px-3 py-1.5">
                              {techIconMap[tech] && (
                                <Image
                                  src={techIconMap[tech]}
                                  alt={tech}
                                  width={16}
                                  height={16}
                                  className="w-4 h-4 object-contain"
                                />
                              )}
                              <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{tech}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="space-y-6">
                      <h2 className="text-lg font-semibold text-black dark:text-white">
                        Projects
                      </h2>
                      {experience.projects.map((project, index) => (
                        <div key={index} className="">
                          {/* Project Header */}
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-base font-semibold text-black dark:text-white">
                              {project.title}
                            </h3>
                            <span className={`px-2 py-0.5 text-xs rounded-full ${project.status === 'completed'
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                              : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                              }`}>
                              {project.status === 'completed' ? 'Completed' : 'In Progress'}
                            </span>
                          </div>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                            {project.description}
                          </p>

                          {/* Project Points */}
                          <ul className="space-y-1.5">
                            {project.points.slice(0, project.title === 'Risk Prediction Platform' ? project.points.length : 3).map((point, pointIdx) => (
                              <li key={pointIdx} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                                <span className="text-neutral-400 dark:text-neutral-500 leading-6">•</span>
                                <span className="leading-6">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInUp>

              <div className="pb-16 sm:pb-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
