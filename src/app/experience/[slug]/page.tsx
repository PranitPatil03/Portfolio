import { getExperienceBySlug } from '@/data/experiences'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ExperienceDetailClient from '@/components/ExperienceDetailClient'

type Props = {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const experience = getExperienceBySlug(slug)
  
  if (!experience) {
    return {
      title: 'Experience Not Found',
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

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params
  const experience = getExperienceBySlug(slug)
  
  if (!experience) {
    notFound()
  }
  
  return <ExperienceDetailClient experience={experience} />
}
