'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Tech icon mapping - same icons as TechStackMarquee
const techIconMap: Record<string, string> = {
  "Next.js": "/tech-icons/nextjs.svg",
  "Next": "/tech-icons/nextjs.svg",
  "TypeScript": "/tech-icons/typescript.svg",
  "Tailwind": "/tech-icons/tailwind.svg",
  "Tailwind CSS": "/tech-icons/tailwind.svg",
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

interface ExperienceItem {
  company: string;
  position: string;
  type: string;
  duration: string;
  location: string;
  points: string[];
  techStack: string[];
  logo: React.ReactNode;
  href?: string;
  slug?: string;
}

// Independent Contractor Logo - Purple four-petal flower pattern with white center
const IndependentLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" className="w-10 h-10">
    <g id="logogram">
      {/* Background circle - always white */}
      <circle cx="20.6035" cy="20.0799" r="20" fill="white" />
      {/* Purple outer ring and petals */}
      <path fillRule="evenodd" clipRule="evenodd" d="M20.6035 40.0799C31.6493 40.0799 40.6035 31.1256 40.6035 20.0799C40.6035 9.03425 31.6493 0.0799561 20.6035 0.0799561C9.55781 0.0799561 0.603516 9.03425 0.603516 20.0799C0.603516 31.1256 9.55781 40.0799 20.6035 40.0799ZM23.6905 15.5325C25.3953 13.8276 25.3953 11.0635 23.6905 9.35861C21.9856 7.65373 19.2215 7.65373 17.5166 9.35861C15.8118 11.0635 15.8118 13.8276 17.5166 15.5325L20.6035 18.6194L23.6905 15.5325ZM25.151 23.1669C26.8559 24.8718 29.62 24.8718 31.3249 23.1669C33.0297 21.462 33.0297 18.6979 31.3249 16.993C29.62 15.2882 26.8559 15.2882 25.151 16.993L22.0641 20.08L25.151 23.1669ZM23.6905 30.8013C25.3953 29.0964 25.3953 26.3323 23.6905 24.6274L20.6035 21.5405L17.5166 24.6274C15.8118 26.3323 15.8118 29.0964 17.5166 30.8013C19.2215 32.5062 21.9856 32.5062 23.6905 30.8013ZM9.88214 23.1669C8.17731 21.462 8.17731 18.6979 9.88214 16.993C11.5871 15.2882 14.3512 15.2882 16.0561 16.993L19.143 20.08L16.0561 23.1669C14.3512 24.8718 11.5871 24.8718 9.88214 23.1669Z" fill="#7F57F1" />
    </g>
  </svg>
)

// Lumio AI Logo - Four leaf clover pattern in teal
const LumioLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" className="w-10 h-10">
    <g id="logogram">
      <path d="M20.3018 10.27C20.3018 15.7928 15.8246 20.27 10.3018 20.27H0.301758V10.27C0.301758 4.74714 4.7789 0.269989 10.3018 0.269989C15.8246 0.269989 20.3018 4.74714 20.3018 10.27Z" fill="#17CF97" />
      <path d="M20.3018 30.27C20.3018 24.7471 24.7789 20.27 30.3018 20.27H40.3018V30.27C40.3018 35.7928 35.8246 40.27 30.3018 40.27C24.7789 40.27 20.3018 35.7928 20.3018 30.27Z" fill="#17CF97" />
      <path d="M0.301758 30.27C0.301758 35.7928 4.7789 40.27 10.3018 40.27H20.3018V30.27C20.3018 24.7471 15.8246 20.27 10.3018 20.27C4.7789 20.27 0.301758 24.7471 0.301758 30.27Z" fill="#17CF97" />
      <path d="M40.3018 10.27C40.3018 4.74714 35.8246 0.269989 30.3018 0.269989H20.3018V10.27C20.3018 15.7928 24.7789 20.27 30.3018 20.27C35.8246 20.27 40.3018 15.7928 40.3018 10.27Z" fill="#17CF97" />
    </g>
  </svg>
)

// HubX Logo - Green rounded square with Robinhood-style bird
const HubXLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-10 h-10">
    <g id="logogram">
      <path d="M0 20C0 12.5231 0 8.78461 1.60769 6C2.66091 4.17577 4.17577 2.66091 6 1.60769C8.78461 0 12.5231 0 20 0C27.4769 0 31.2154 0 34 1.60769C35.8242 2.66091 37.3391 4.17577 38.3923 6C40 8.78461 40 12.5231 40 20C40 27.4769 40 31.2154 38.3923 34C37.3391 35.8242 35.8242 37.3391 34 38.3923C31.2154 40 27.4769 40 20 40C12.5231 40 8.78461 40 6 38.3923C4.17577 37.3391 2.66091 35.8242 1.60769 34C0 31.2154 0 27.4769 0 20Z" fill="#00DC33" />
      <path fillRule="evenodd" clipRule="evenodd" d="M28.0441 7.60927C28.8868 6.80331 30.2152 6.79965 31.0622 7.58229L31.1425 7.66005L31.4164 7.94729C34.1911 10.9318 35.2251 14.4098 34.9599 17.8065C34.6908 21.2511 33.1012 24.4994 30.8836 27.0664C28.6673 29.6316 25.7084 31.6519 22.51 32.5287C19.2714 33.4164 15.7294 33.1334 12.6547 30.9629C10.0469 29.1218 9.05406 26.1465 8.98661 23.2561C7.52323 22.5384 5.98346 21.6463 4.36789 20.5615L3.941 20.2716L3.85006 20.206C2.93285 19.5053 2.72313 18.2084 3.39161 17.2564C4.06029 16.3043 5.36233 16.046 6.34665 16.6512L6.44134 16.7126L6.83024 16.9771C7.79805 17.6269 8.72153 18.1903 9.59966 18.6767C10.1661 16.6889 11.1047 14.7802 12.3413 13.207C14.1938 10.8501 16.9713 8.96525 20.374 9.24647C23.439 9.49995 25.7036 11.081 26.8725 13.3122C28.0044 15.4728 28.0211 18.0719 27.0319 20.307C26.0234 22.5857 23.976 24.484 21.0309 25.2662C18.9114 25.8291 16.4284 25.7905 13.6267 25.0367V25.0377C12.5115 24.7375 11.3427 24.323 10.1212 23.7846C9.8472 23.6638 9.60873 23.8483 10.1212 24.1686C11.5636 25.1924 13.5956 26.0505 14.1836 26.3385C14.4615 26.788 14.8061 27.1568 15.2011 27.4356C17.0188 28.7188 19.1451 28.9539 21.3396 28.3523C23.5743 27.7397 25.8141 26.2625 27.5514 24.2516C29.2873 22.2423 30.4065 19.8348 30.5909 17.4727C30.765 15.2439 30.1218 12.9543 28.1842 10.8736L27.9927 10.6731L27.9162 10.5906C27.1538 9.72748 27.2018 8.41516 28.0441 7.60927ZM20.0092 13.5651C18.6033 13.4489 17.1196 14.189 15.8013 15.8662C14.7973 17.1436 14.0376 18.8033 13.6503 20.5112C16.4093 21.4544 18.4655 21.4608 19.8942 21.0814C21.5481 20.6422 22.5399 19.6477 23.0172 18.5693C23.5137 17.4472 23.4628 16.2245 22.9813 15.3055C22.5369 14.4571 21.6422 13.7002 20.0092 13.5651Z" fill="#ffffff" />
    </g>
  </svg>
)

// Tech Cryptors Logo - Blue geometric pattern
const TechCryptorsLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 40" className="w-10 h-10">
    <g id="logogram">
      <path fillRule="evenodd" clipRule="evenodd" d="M17 0C17.5523 0 18 0.447715 18 1V8.39648C18 8.61918 18.2693 8.7307 18.4268 8.57324L26.4141 0.585938C26.7891 0.210936 27.2978 7.97938e-05 27.8281 0H36.5859C36.8511 4.04019e-05 37.1055 0.105468 37.293 0.292969L40.293 3.29297C40.6834 3.68347 40.6834 4.31653 40.293 4.70703L36.4268 8.57324C36.2693 8.73073 36.3808 8.99997 36.6035 9H44.5859C44.8511 9.00004 45.1055 9.10547 45.293 9.29297L48.293 12.293C48.6834 12.6835 48.6834 13.3165 48.293 13.707L44.3535 17.6465C44.1583 17.8417 44.1583 18.1583 44.3535 18.3535L47.5859 21.5859C48.4914 22.4914 49 23.7195 49 25C49 26.2805 48.4913 27.5086 47.5859 28.4141L36.5859 39.4141C36.2109 39.7891 35.7022 39.9999 35.1719 40H32C31.4477 40 31 39.5523 31 39V31.6035C31 31.3808 30.7307 31.2693 30.5732 31.4268L22.5859 39.4141C22.2109 39.7891 21.7022 39.9999 21.1719 40H12.4141C12.1489 40 11.8945 39.8945 11.707 39.707L8.70703 36.707C8.31661 36.3165 8.31661 35.6835 8.70703 35.293L12.5732 31.4268C12.7307 31.2693 12.6192 31 12.3965 31H4.41406C4.1489 31 3.89453 30.8945 3.70703 30.707L0.707031 27.707C0.316606 27.3165 0.316607 26.6835 0.707031 26.293L4.64648 22.3535C4.8417 22.1583 4.8417 21.8417 4.64648 21.6465L1.41406 18.4141C0.508652 17.5086 0 16.2805 0 15C0 13.7195 0.508651 12.4914 1.41406 11.5859L12.4141 0.585938C12.7891 0.210936 13.2978 8.00463e-05 13.8281 0H17ZM20.0713 9C18.7452 9 17.4728 9.52716 16.5352 10.4648L5.85352 21.1465C5.53861 21.4615 5.76165 21.9999 6.20703 22H20.793C21.2383 22.0001 21.4613 22.5386 21.1465 22.8535L13.8535 30.1465C13.5386 30.4615 13.7616 30.9999 14.207 31H28.9287C30.2548 31 31.5272 30.4728 32.4648 29.5352L43.1465 18.8535C43.4417 18.5583 43.2642 18.0663 42.874 18.0059L42.793 18H28.207C27.7616 18 27.5386 17.4615 27.8535 17.1465L35.1465 9.85352C35.4614 9.53855 35.2384 9.00006 34.793 9H20.0713Z" fill="#297AFF" />
    </g>
  </svg>
)

export default function ExperienceContent() {
  // Single expanded item - accordion behavior (only one open at a time)
  const [expandedCompany, setExpandedCompany] = useState<string | null>("Independent Contractor")

  const experiences: ExperienceItem[] = [
    {
      company: "Independent Contractor",
      position: "Full Stack Engineer",
      type: "Contract",
      duration: "Oct 2025 – Current",
      location: "India - Remote",
      points: [
        "Built multi-tenant SaaS platforms with Next.js 15, FastAPI, ML-powered analytics for enterprise clients.",
        "Designed RBAC systems with JWT auth, secure data isolation, scoped access across tenants and orgs.",
        "Developed ML inference pipelines (LightGBM, Logistic Regression) serving real-time and bulk predictions.",
        "Architected AWS infrastructure (ECS Fargate, RDS, Redis) with CI/CD pipelines and auto-scaling.",
        "Currently building AI-powered data analytics and notebook-driven data science chatbot platform.",
        "This includes an AI data science assistant with Jupyter-style notebooks, E2B-powered Python sandboxes, and pre-installed ML libraries for analytics and visualization.",
        "Users can upload CSV/XLS files, ask questions in natural language, and get executable Python code, charts, and insights streamed back in real time."
      ],
      techStack: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "AWS", "Docker", "Redis"],
      logo: <IndependentLogo />,
      slug: "contractor",
    },
    {
      company: "Lumio AI",
      position: "Full Stack Engineer",
      type: "Full Time",
      duration: "Sep 2024 – Aug 2025",
      location: "Mumbai",
      points: [
        "Developed an AI-powered tool to transform blogs into engaging audio podcast content.",
        "Integrated OpenAI image generation into AgentCoach AI chatbot to enhance visual interaction.",
        "Deployed advanced UI modules for contract analysis and intelligence in the Orchestro platform.",
        "Architected and delivered a robust search module for the Promenade intelligence platform.",
        "Built end-to-end frontend for city relocation tool; processed and visualized data for 30K+ US ZIP codes."
      ],
      techStack: ["Next", "Tailwind", "TypeScript", "JavaScript", "Express", "PostgreSQL", "Docker"],
      logo: <LumioLogo />,
      href: "https://lumio.ai/",
    },
    {
      company: "HubX.ai",
      position: "Full Stack Intern",
      type: "Internship",
      duration: "Jan 2023 – Jul 2023",
      location: "Remote",
      points: [
        "Revamp Point-of-sale UI module using React and UIkit and Implemented the UI for dashboard interfaces",
        "Enhanced email service with Nodemailer API for efficient and reliable information exchange.",
        "Integrated Cashfree payment API for seamless onboarding and secure data collection like bank details",
        "Implemented WhatsApp Cloud API for critical notifications on Leads, proposals, and Inventory requests"
      ],
      techStack: ["React", "Tailwind", "Node.js", "MongoDB", "Express"],
      logo: <HubXLogo />,
      href: "https://hubx.ai/",
    },
    {
      company: "Tech Cryptors",
      position: "Web Development Intern",
      type: "Internship",
      duration: "Dec 2022 – Jan 2023",
      location: "Dahisar, India",
      points: [
        "Designed chatbot with dynamic QA for service interaction.",
        "Implemented service/course pages in WordPress to boost user experience.",
        "Created responsive navigation components using HTML, CSS, and JavaScript."
      ],
      techStack: ["JavaScript", "React", "Node.js"],
      logo: <TechCryptorsLogo />,
    },
  ]

  const toggleExpanded = (company: string) => {
    // If clicking on already open item, close it. Otherwise, open clicked item (closes others)
    setExpandedCompany(prev => prev === company ? null : company)
  }

  return (
    <div className="space-y-0">
      {experiences.map((exp) => {
        const isExpanded = expandedCompany === exp.company

        return (
          <div
            key={exp.company}
            className=""
          >
            {/* Header */}
            <button
              onClick={() => toggleExpanded(exp.company)}
              className="w-full p-4 sm:p-5 flex items-start gap-4 text-left transition-colors duration-200 cursor-pointer"
            >
              {/* Company Logo */}
              <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden shrink-0 border [box-shadow:0_4px_10px_-4px_rgba(15,23,42,0.15)] bg-neutral-50 border-neutral-200 after:border-neutral-100 after:border-t-[2px] after:border-b-[2px] after:border-b-neutral-300 dark:bg-white/[0.05] dark:border-white/[0.1] dark:after:border-white/[0.06] dark:after:border-b-white/[0.03] after:absolute after:inset-0 after:rounded-2xl after:border-r-0 after:content-['']">
                {exp.logo}
              </div>

              {/* Company Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold dark:text-white text-black text-base">
                    {exp.company}
                  </h3>
                  <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border [box-shadow:0_4px_10px_-4px_rgba(15,23,42,0.15)] bg-neutral-50 border-neutral-200 after:border-neutral-100 after:border-t-[2px] after:border-b-[2px] after:border-b-neutral-300 dark:bg-white/[0.05] dark:border-white/[0.1] dark:after:border-white/[0.06] dark:after:border-b-white/[0.03] after:absolute after:inset-0 after:rounded-2xl after:border-r-0 after:content-['']">
                    <span className="px-2 py-0.5 text-xs text-neutral-600 dark:text-neutral-400">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
                  {exp.position}
                </p>
              </div>

              {/* Duration & Location + Chevron */}
              <div className="flex items-start gap-3 shrink-0">
                <div className="text-right">
                  <p className="text-sm font-medium dark:text-white text-black">
                    {exp.duration}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {exp.location}
                  </p>
                </div>
                <div className={`transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                  <ChevronDown className="w-5 h-5 text-neutral-400 mt-0.5" />
                </div>
              </div>
            </button>

            {/* Expandable Content with smooth animation */}
            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pt-0">
                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-4">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                        <span className="text-neutral-400 dark:text-neutral-500 leading-6">•</span>
                        <span className="leading-6">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Read More Link */}
                  {exp.slug && (
                    <div className="mb-4">
                      <Link
                        href={`/experience/${exp.slug}`}
                        className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors inline-flex items-center gap-1"
                      >
                        <span>Read more</span>
                        <span>→</span>
                      </Link>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <div
                        key={tech}
                        className="relative flex items-center justify-center overflow-hidden rounded-2xl border [box-shadow:0_4px_10px_-4px_rgba(15,23,42,0.15)] bg-neutral-50 border-neutral-200 after:border-neutral-100 after:border-t-[2px] after:border-b-[2px] after:border-b-neutral-300 dark:bg-white/[0.05] dark:border-white/[0.1] dark:after:border-white/[0.06] dark:after:border-b-white/[0.03] after:absolute after:inset-0 after:rounded-2xl after:border-r-0 after:content-['']"
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
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
