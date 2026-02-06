'use client'

import Image from "next/image";

// Tech Stack Data based on the image
const techStack = [
  // Row 1
  { name: "Next.js", icon: "/tech-icons/nextjs.svg" },
  { name: "TypeScript", icon: "/tech-icons/typescript.svg" },
  { name: "Tailwind", icon: "/tech-icons/tailwind.svg" },
  { name: "React", icon: "/tech-icons/react.svg" },
  { name: "JavaScript", icon: "/tech-icons/javascript.svg" },
  // Row 2
  { name: "Node.js", icon: "/tech-icons/nodejs.svg" },
  { name: "Python", icon: "/tech-icons/python.svg" },
  { name: "FastAPI", icon: "/tech-icons/fastapi.svg" },
  { name: "Express", icon: "/tech-icons/express.svg" },
  // Row 3
  { name: "PostgreSQL", icon: "/tech-icons/postgresql.svg" },
  { name: "MongoDB", icon: "/tech-icons/mongodb.svg" },
  { name: "Redis", icon: "/tech-icons/redis.svg" },
  { name: "Prisma", icon: "/tech-icons/prisma.svg" },
  { name: "Drizzle", icon: "/tech-icons/drizzle.svg" },
  // Row 4
  { name: "Docker", icon: "/tech-icons/docker.svg" },
  { name: "Git", icon: "/tech-icons/Git.svg" },
  { name: "AWS", icon: "/tech-icons/AWS.svg" },
  { name: "GitHub Actions", icon: "/tech-icons/github-actions.svg" },
  // Row 5
  { name: "Zustand", icon: "/tech-icons/zustand.svg" },
  { name: "shadcn/ui", icon: "/tech-icons/shadcn.svg" },
  { name: "TanStack Query", icon: "/tech-icons/tanstack.svg" },
];

interface TechIconProps {
  tech: typeof techStack[0];
}

function TechIcon({ tech }: TechIconProps) {
  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border [box-shadow:0_4px_10px_-4px_rgba(15,23,42,0.15)] bg-neutral-50 border-neutral-200 after:border-neutral-100 after:border-t-[2px] after:border-b-[2px] after:border-b-neutral-300 dark:bg-[#212121] dark:border-black/50 dark:after:border-[#2A2A2A] dark:after:border-b-black/50 after:absolute after:inset-0 after:rounded-2xl after:border-r-0 after:content-['']">
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={20}
            height={20}
            className="w-full h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
          {tech.name}
        </span>
      </div>
    </div>
  );
}

interface TechStackMarqueeProps {
  className?: string;
  showTitle?: boolean;
}

export default function TechStackMarquee({ className = "", showTitle = true }: TechStackMarqueeProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Title */}
      {showTitle && (
        <div className="mb-6">
          <h2 className="text-base sm:text-xl mb-3 mt-4 sm:mt-6 font-semibold">
            Tech Stack
          </h2>
        </div>
      )}

      {/* Static Grid of Tech Icons */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {techStack.map((tech, index) => (
          <TechIcon key={`${tech.name}-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}
