'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import { FadeInUp } from '@/components/ui/PageTransitions'
import DiagonalPattern from '@/components/DiagonalPattern'
import PageNavigation from '@/components/Navigation'
import { CaseStudy } from '@/data/experiences'

// Tech icon mapping - match tech names to icon files
const techIconMap: Record<string, string> = {
    "Next.js": "/tech-icons/nextjs.svg",
    "Next.js 15": "/tech-icons/nextjs.svg",
    "Next.js 15 (App Router)": "/tech-icons/nextjs.svg",
    "Next.js 16 (App Router + Turbopack)": "/tech-icons/nextjs.svg",
    "Next.js API Routes": "/tech-icons/nextjs.svg",
    "TypeScript": "/tech-icons/typescript.svg",
    "Tailwind CSS": "/tech-icons/tailwind.svg",
    "Tailwind CSS + Radix UI": "/tech-icons/tailwind.svg",
    "React": "/tech-icons/react.svg",
    "React 19 + TypeScript": "/tech-icons/react.svg",
    "React 19, TypeScript, Tailwind CSS, shadcn/ui": "/tech-icons/react.svg",
    "JavaScript": "/tech-icons/javascript.svg",
    "Node.js": "/tech-icons/nodejs.svg",
    "Python": "/tech-icons/python.svg",
    "FastAPI": "/tech-icons/fastapi.svg",
    "FastAPI (Python, async)": "/tech-icons/fastapi.svg",
    "Express": "/tech-icons/express.svg",
    "PostgreSQL": "/tech-icons/postgresql.svg",
    "PostgreSQL + SQLAlchemy ORM": "/tech-icons/postgresql.svg",
    "PostgreSQL (Neon)": "/tech-icons/postgresql.svg",
    "MongoDB": "/tech-icons/mongodb.svg",
    "Redis": "/tech-icons/redis.svg",
    "Docker": "/tech-icons/docker.svg",
    "Docker & Docker Compose": "/tech-icons/docker.svg",
    "Git": "/tech-icons/Git.svg",
    "AWS": "/tech-icons/AWS.svg",
    "AWS ECS Fargate (API + workers)": "/tech-icons/AWS.svg",
    "AWS RDS (PostgreSQL)": "/tech-icons/AWS.svg",
    "AWS ElastiCache (Redis)": "/tech-icons/AWS.svg",
    "AWS ALB": "/tech-icons/AWS.svg",
    "Prisma": "/tech-icons/prisma.svg",
    "Drizzle ORM": "/tech-icons/drizzle.svg",
    "GitHub Actions": "/tech-icons/github-actions.svg",
    "GitHub Actions → ECR → ECS": "/tech-icons/github-actions.svg",
    "Zustand": "/tech-icons/zustand.svg",
    "Zustand + TanStack Query": "/tech-icons/zustand.svg",
    "shadcn/ui": "/tech-icons/shadcn.svg",
    "TanStack Query": "/tech-icons/tanstack.svg",
}

interface ExperienceCaseStudyProps {
    caseStudy: CaseStudy;
    companyName: string;
}

export default function ExperienceCaseStudy({ caseStudy, companyName }: ExperienceCaseStudyProps) {
    // Scroll to top when case study loads
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                                        {/* Breadcrumb */}
                                        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                                            <span>{companyName}</span>
                                            <span>/</span>
                                            <span className="text-black dark:text-white">{caseStudy.title.split(' — ')[0]}</span>
                                        </div>

                                        {/* Title & Tagline */}
                                        <div className="mb-10">
                                            <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-3">
                                                {caseStudy.title}
                                            </h1>
                                            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed italic">
                                                {caseStudy.tagline}
                                            </p>
                                        </div>

                                        {/* Divider */}
                                        <div
                                            className="h-px mb-10"
                                            style={{
                                                backgroundImage: 'repeating-linear-gradient(to right, currentcolor, currentcolor 2px, transparent 2px, transparent 6px)',
                                                opacity: 0.15
                                            }}
                                        />

                                        {/* Overview */}
                                        <Section title="Overview">
                                            {caseStudy.overview.split('\n\n').map((paragraph, idx) => (
                                                <p key={idx} className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3 last:mb-0">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </Section>

                                        {/* Images - Hero screenshot */}
                                        {caseStudy.images && caseStudy.images.length > 0 && (
                                            <div className="mb-10">
                                                <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-white/8">
                                                    <Image
                                                        src={caseStudy.images[0]}
                                                        alt={`${caseStudy.title} screenshot`}
                                                        width={1200}
                                                        height={675}
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* The Problem */}
                                        <Section title="The Problem">
                                            {caseStudy.problem.split('\n\n').map((paragraph, idx) => (
                                                <p key={idx} className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3 last:mb-0 whitespace-pre-line">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </Section>

                                        {/* Target Users */}
                                        <Section title="Target Users">
                                            <div className="space-y-3">
                                                {caseStudy.targetUsers.map((user, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <span className="text-neutral-400 dark:text-neutral-500 leading-6 shrink-0">•</span>
                                                        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-6">
                                                            <span className="font-semibold text-black dark:text-white">{user.label}</span>
                                                            {' — '}{user.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </Section>

                                        {/* How It Works */}
                                        <Section title="How the Platform Works">
                                            <div className="space-y-6">
                                                {caseStudy.howItWorks.map((item, idx) => (
                                                    <div key={idx}>
                                                        <h4 className="text-sm font-semibold text-black dark:text-white mb-1.5 flex items-center gap-2">
                                                            <span className="text-neutral-400 dark:text-neutral-500 font-normal text-xs">{idx + 1}.</span>
                                                            {item.heading}
                                                        </h4>
                                                        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed pl-5">
                                                            {item.content}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </Section>

                                        {/* Additional Images */}
                                        {caseStudy.images && caseStudy.images.length > 1 && (
                                            <div className="mb-10">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {caseStudy.images.slice(1).map((img, idx) => (
                                                        <div key={idx} className="rounded-xl overflow-hidden border border-neutral-200 dark:border-white/8">
                                                            <Image
                                                                src={img}
                                                                alt={`${caseStudy.title} screenshot ${idx + 2}`}
                                                                width={600}
                                                                height={400}
                                                                className="w-full h-auto"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Architecture - as bullet points */}
                                        <Section title="Architecture & Core Components">
                                            <ul className="space-y-2">
                                                {caseStudy.architecture.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                                                        <span className="text-neutral-400 dark:text-neutral-500 leading-6 shrink-0">•</span>
                                                        <span className="leading-6">
                                                            <span className="font-semibold text-black dark:text-white">{item.heading}</span>
                                                            {' — '}{item.content}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Section>

                                        {/* Tech Stack - with icons */}
                                        <Section title="Tech Stack">
                                            <div className="space-y-6">
                                                {caseStudy.techStack.map((category, idx) => (
                                                    <div key={idx}>
                                                        <h4 className="text-sm font-semibold text-black dark:text-white mb-2">
                                                            {category.category}
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {category.items.map((item, itemIdx) => (
                                                                <div
                                                                    key={itemIdx}
                                                                    className="relative flex items-center justify-center overflow-hidden rounded-2xl border [box-shadow:0_4px_10px_-4px_rgba(15,23,42,0.15)] bg-neutral-50 border-neutral-200 after:border-neutral-100 after:border-t-2 after:border-b-2 after:border-b-neutral-300 dark:bg-white/5 dark:border-white/10 dark:after:border-white/6 dark:after:border-b-white/3 after:absolute after:inset-0 after:rounded-2xl after:border-r-0 after:content-['']"
                                                                >
                                                                    <div className="flex items-center gap-2 px-3 py-1.5">
                                                                        {techIconMap[item] && (
                                                                            <Image
                                                                                src={techIconMap[item]}
                                                                                alt={item}
                                                                                width={16}
                                                                                height={16}
                                                                                className="w-4 h-4 object-contain"
                                                                            />
                                                                        )}
                                                                        <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                                                            {item}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Section>

                                        {/* My Role */}
                                        <Section title="My Role — End-to-End Ownership">
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                                                Built entirely as a solo engineer, with full ownership across every layer:
                                            </p>
                                            <ul className="space-y-2">
                                                {caseStudy.role.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                                                        <span className="text-neutral-400 dark:text-neutral-500 leading-6 shrink-0">•</span>
                                                        <span className="leading-6">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Section>

                                        {/* Outcome */}
                                        <Section title="Outcome">
                                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                                {caseStudy.outcome}
                                            </p>
                                        </Section>
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

// Reusable section component for consistent styling
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-10">
            <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
                {title}
            </h2>
            <div
                className="h-px mb-4"
                style={{
                    backgroundImage: 'repeating-linear-gradient(to right, currentcolor, currentcolor 2px, transparent 2px, transparent 6px)',
                    opacity: 0.08
                }}
            />
            {children}
        </div>
    )
}
