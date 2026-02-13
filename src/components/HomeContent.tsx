'use client'

import Link from 'next/link'
import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionHeading from './SectionHeading'
import ExperienceContent from './ExperienceContent'
import Reachout from './Reachout'
import ContributionsDisplay from './ContributionsDisplay'
import TechStackMarquee from './TechStackMarquee'
import { Reveal } from './Reveal'
import { projects } from '@/data/projects'
import { MasonryProjectCard } from './MasonryProjectCard'
import NeumorphButton from './NeumorphButton'

export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative" style={{ fontFamily: 'var(--font-hk-grotesk)' }}>
      <div className="relative mx-auto max-w-4xl">
        {/* Main Content */}
        <div className="relative mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          {/* Diagonal Patterns - positioned at the edges of content */}
          <DiagonalPattern side="left" />
          <DiagonalPattern side="right" />

          {/* Banner Section */}
          <Reveal delay={0.1}>
            <BannerSection />
          </Reveal>

          {/* Profile Header */}
          <Reveal delay={0.2}>
            <ProfileHeader
              name="Pranit Patil"
              title="learner • engineer  • builder"
              socialLinks={{
                twitter: "https://x.com/Patilpranit3112",
                github: "https://github.com/pranitpatil03",
                linkedin: "https://www.linkedin.com/in/patilpranit03/",
                    resume: "https://drive.google.com/file/d/11bkE5GpAIlIIh1rqMb0Ns0gwqJgB-3gP/view",
                email: "mailto:patilpranit3112@gmail.com",
              }}
            />
          </Reveal>

          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Dotted line above objective - full width to touch vertical borders */}
              <div
                className="h-px mt-6"
                style={{
                  backgroundImage: 'repeating-linear-gradient(to right, currentcolor, currentcolor 2px, transparent 2px, transparent 6px)',
                  opacity: 0.15
                }}
              />

              {/* Current Role Section */}
              <Reveal delay={0.1}>
                <ContentSection
                  subtitle="AI Engineer | Full-stack Developer"
                  title=''
                  className="mt-4"
                >
                  <div></div>
                </ContentSection>
              </Reveal>

              {/* About Section */}
              <Reveal delay={0.1}>
                <ContentSection className="pb-4 sm:pb-6 pt-4 sm:pt-6 px-2 sm:px-0">
                  <ContentParagraph className="mb-4 text-base sm:text-lg">
                    <span className="font-medium dark:text-white text-black">I&apos;m a builder who takes ideas to production</span> — crafting clean UIs, scalable systems, and full-stack products, from user needs to production, I enjoy owning the entire stack.
                  </ContentParagraph>
                  <ContentParagraph className="mb-0 text-base sm:text-lg">
                    When I&apos;m not building, I&apos;m lifting at the gym, watching good movies, or going down rabbit holes about tech , space and more.
                  </ContentParagraph>
                </ContentSection>
              </Reveal>

              {/* Experience Section */}
              <Reveal delay={0.1}>
                <div>
                  <SectionHeading className="mt-6">Professional Experience</SectionHeading>
                  <div className='sm:px-8 px-4'>
                    <ExperienceContent />
                  </div>
                </div>
              </Reveal>

              {/* Projects */}
              <Reveal delay={0.1}>
                <div>
                  <SectionHeading className="mt-6">Projects</SectionHeading>
                  <div className="sm:px-8 px-4">
                    <div className="grid grid-cols-1 gap-4 sm:gap-3 sm:grid-cols-2">
                      {projects.slice(0, 4).map((project) => (
                        <MasonryProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Tech Stack Section */}
              <Reveal delay={0.1}>
                <div>
                  <SectionHeading className="mt-6">Tech Stack</SectionHeading>
                  <div className="sm:px-8 px-4 py-4">
                    <TechStackMarquee className="w-full" showTitle={false} />
                  </div>
                </div>
              </Reveal>

              {/* GitHub Contributions */}
              <Reveal delay={0.1}>
                <div>
                  <SectionHeading className="mt-6">GitHub Contributions</SectionHeading>
                  <div className="sm:px-8 px-4 py-4">
                    <ContributionsDisplay
                      username="pranitpatil03"
                      className="w-full"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Blogs & Thoughts Section */}
              <Reveal delay={0.1}>
                <div>
                  <SectionHeading className="mt-6">Blogs & Thoughts</SectionHeading>
                  <div className="sm:px-8 px-4 py-8">
                    <div className="flex flex-col items-center justify-center text-center py-8">
                      <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
                        🍳 Blogs are cooking, stay tuned!
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Open Source Contributions Section - Commented out for future use
              <Reveal delay={0.1}>
                <div className="sm:px-4">
                  <SectionHeading className="mt-6">Open Source Contributions</SectionHeading>
                  <div className="px-4 py-4">
                    <OpenSourceContributionsCard />
                  </div>
                </div>
              </Reveal>
              */}

              {/* Call to Action - commented out for now
              <Reveal delay={0.1}>
                <div className="px-4 sm:px-0 mt-8">
                  <CallToAction />
                </div>
              </Reveal>
              */}

              {/* Reachout Section */}
              <Reveal delay={0.1}>
                <div className="mt-6 sm:mt-8">
                  <Reachout
                    title="Let's connect"
                    subtitle="Find me on these platforms"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
