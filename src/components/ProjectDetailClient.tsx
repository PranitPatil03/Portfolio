'use client'

import { ProjectCard } from '@/components/ProjectCard'
import OnekoCat from '@/components/OnekoCat'
import ResizablePortfolioNavigation from '@/components/MainNavigation'
import Link from 'next/link'
import { FadeInUp, SlideInFromLeft } from '@/components/ui/PageTransitions'
import DiagonalPattern from '@/components/DiagonalPattern'
import { Project } from '@/types/project'

interface ProjectDetailClientProps {
  project: Project
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="min-h-screen transition-colors duration-300 relative" style={{ fontFamily: 'var(--font-hk-grotesk)' }}>
      <ResizablePortfolioNavigation />
      <OnekoCat />
      <div className="relative mx-auto max-w-4xl min-h-screen">
        <DiagonalPattern side="left" topOffset="67px" />
        <DiagonalPattern side="right" topOffset="67px" />
        
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          <div className="py-12 sm:py-16 md:py-20">
            <div className="sm:px-12">
              <SlideInFromLeft delay={0.2}>
                <Link 
                  href="/projects" 
                  className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 inline-flex items-center hover:underline transition-colors px-4 sm:px-0"
                >
                  <span className="mr-2">←</span>
                  <span>Back to projects</span>
                </Link>
              </SlideInFromLeft>
              <FadeInUp delay={0.4}>
                <div className="px-4 sm:px-0">
                  <ProjectCard project={project} isDetailed />
                </div>
              </FadeInUp>
            </div>
          </div>
          <div className="pb-16 sm:pb-20" />
        </div>
      </div>
    </div>
  )
}
