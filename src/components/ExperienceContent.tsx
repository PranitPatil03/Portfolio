'use client'

import { WorkExperience, type ExperienceItemType } from '@/components/work-experience'

export default function ExperienceContent() {
  const experiences: ExperienceItemType[] = [
    {
      id: 'turboml',
      companyName: 'Turbo ML',
      companyLogo: '/turboml.jpg',
      isCurrentEmployer: true,
      positions: [
        {
          id: 'turboml-intern',
          title: 'Software Engineering Intern (AI)',
          employmentPeriod: 'April 2025 – July 2025',
          employmentType: 'Internship',
          icon: 'code',
          isExpanded: false,
          description: `

- Implemented a reminder system using Redis Sorted Sets and a custom daemon to handle time-based task execution under 24-hour constraints.
- Integrated multiple APIs including Swiggy for food delivery and dine-out services, and Blinkit for grocery delivery, while retaining Google for general recommendations and providing user choice flexibility.
- Designed and implemented support for WhatsApp Business API commands (/help, /reset, /new), including runtime-configurable bot initialization based on environment variables.
- Added Azure Blob Storage integration for file handling and message reaction management in WhatsApp bot.
- Ensured WhatsApp message compliance by chunking outputs exceeding 4096 characters.`,
          skills: [ 'Python', 'FastAPI', 'Redis', 'MongoDB', 'Beanie', 'Pydantic', 'WhatsApp Business API', 'AWS', 'LLM', 'Artificial Intelligence', 'AI Agents', 'AI Chatbot'],
        },
      ],
    },
  ]

  return <WorkExperience experiences={experiences} />
}
