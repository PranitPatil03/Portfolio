import { getExperienceBySlug, getCaseStudy } from '@/data/experiences'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ExperienceDetailClient from '@/components/ExperienceDetailClient'
import ExperienceCaseStudy from '@/components/ExperienceCaseStudy'

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ project?: string }>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params
  const { project } = await searchParams
  const experience = getExperienceBySlug(slug)

  if (!experience) {
    return {
      title: 'Experience Not Found',
    }
  }

  // If a specific project case study is requested
  if (project) {
    const caseStudy = getCaseStudy(slug, project)
    if (caseStudy) {
      return {
        title: `${caseStudy.title} | Pranit Patil`,
        description: caseStudy.tagline,
        openGraph: {
          title: caseStudy.title,
          description: caseStudy.tagline,
          type: 'article',
        },
        twitter: {
          card: 'summary_large_image',
          title: caseStudy.title,
          description: caseStudy.tagline,
        }
      }
    }
  }

  return {
    title: `${experience.company} | Pranit Patil`,
    description: `${experience.position} at ${experience.company}`,
    openGraph: {
      title: `${experience.company} - ${experience.position}`,
      description: experience.overview,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${experience.company} - ${experience.position}`,
      description: experience.overview,
    }
  }
}

export default async function ExperiencePage({ params, searchParams }: Props) {
  const { slug } = await params
  const { project } = await searchParams
  const experience = getExperienceBySlug(slug)

  if (!experience) {
    notFound()
  }

  // If a specific project case study is requested, show the case study view
  if (project) {
    const caseStudy = getCaseStudy(slug, project)
    if (caseStudy) {
      return <ExperienceCaseStudy caseStudy={caseStudy} companyName={experience.company} />
    }
  }

  return <ExperienceDetailClient experience={experience} />
}
