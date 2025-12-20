'use client'

import OnekoCat from '@/components/OnekoCat'
import ResizablePortfolioNavigation from '@/components/MainNavigation'
import { MasonryGrid } from '@/components/MasonryGrid'
import FadeIn from '@/components/FadeIn'
import { Project } from '@/types/project'

interface ProjectsListClientProps {
  projects: Project[]
}

export default function ProjectsListClient({ projects }: ProjectsListClientProps) {

  return (
      <div className="min-h-screen w-full bg-white dark:bg-zinc-900">
        <ResizablePortfolioNavigation />
        <OnekoCat />
          
          {/* Page Content - Swiss Design Layout */}
          <div className="w-full relative pt-16 sm:pt-16">
            <div className="px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
              <div className="max-w-4xl mx-auto">
                
                {/* Header - Minimal Typography */}
                <div className="mb-5 sm:mb-5">
                  <FadeIn delay={0.1} duration={0.5}>
                    <h1 className="text-2xl sm:text-3xl font-[family-name:var(--font-instrument-serif)] italic font-medium mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight">
                      proof of work
                    </h1>
                  </FadeIn>
                  <FadeIn delay={0.2} duration={0.5}>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 tracking-wide">
                      A showcase of my work and side projects.
                    </p>
                  </FadeIn>
                </div>
              </div>
            </div>
            
            {/* Projects Grid - Full Width */}
            <div className="w-full">
              <MasonryGrid projects={projects} />
            </div>
          </div>
        </div>
  )
}
