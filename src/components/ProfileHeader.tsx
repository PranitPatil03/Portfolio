'use client';
import { FaLinkedin, FaXTwitter, FaGithub, FaPaperclip, FaEnvelope } from "react-icons/fa6";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import PortfolioStars from './PortfolioStars';
import NeumorphButton from "./NeumorphButton";

const PROFILE_IMAGES = [
  '/images/profile2.png'
]

const STORAGE_KEY = 'portfolio_profile_image'

function getSessionProfileImage(): string {
  if (typeof window === 'undefined') {
    return PROFILE_IMAGES[0]
  }

  const storedImage = sessionStorage.getItem(STORAGE_KEY)
  if (storedImage && PROFILE_IMAGES.includes(storedImage)) {
    return storedImage
  }

  const randomImage = PROFILE_IMAGES[Math.floor(Math.random() * PROFILE_IMAGES.length)]
  sessionStorage.setItem(STORAGE_KEY, randomImage)
  return randomImage
}

interface ProfileHeaderProps {
  name?: string
  age?: string
  title?: string
  socialLinks?: {
    twitter?: string
    resume?: string
    github?: string
    linkedin?: string
    email?: string
  }
}

export default function ProfileHeader({
  name = "Pranit Patil",
  age = "23",
  title = "engineer • developer • builder",
  socialLinks = {
    twitter: "https://x.com/Patilpranit3112",
    github: "https://github.com/pranitpatil03",
    linkedin: "https://www.linkedin.com/in/patilpranit03/",
    resume: "https://drive.google.com/file/d/1qOAkWlNj3qq9ZgAPFJFEvGA_s6FLF9kL/view?usp=sharing",
    email: "mailto:patilpranit3112@gmail.com",
  }
}: ProfileHeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [profileImage, setProfileImage] = React.useState<string>(PROFILE_IMAGES[0]);

  React.useEffect(() => {
    setMounted(true);
    setProfileImage(getSessionProfileImage());
  }, []);

  return (
    <div className="flex-col -mt-10">
      <div className="flex items-center justify-between mb-4 sm:ml-8 ml-4 sm:mr-8 mr-4">
        <div
          className="w-24 h-24 sm:w-28 sm:h-28 relative z-10 rounded-full overflow-hidden bg-cover bg-center shrink-0"
          role="img"
          aria-label={name}
          style={{ backgroundImage: `url("${profileImage}")` }}
        />
        <PortfolioStars />
      </div>

      {/* Name + Social Icons Row */}
      <div className="sm:px-8 px-4 flex items-center justify-between mb-1">
        <h1 className="font-(family-name:--font-instrument-serif) italic text-2xl sm:text-4xl tracking-[0.01em] font-medium">
          {name}
        </h1>
        
        {/* Social Icons */}
        <div className="flex gap-1 sm:gap-2">
          {socialLinks.github && (
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  className="touch-manipulation active:opacity-75 flex items-center justify-center w-8 h-8"
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  <NeumorphButton className="flex items-center justify-center w-8 h-8 rounded-full">
                    <FaGithub className="text-[16px] text-black/75 dark:text-white/80" />
                  </NeumorphButton>
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
          )}
          {socialLinks.twitter && (
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  className="touch-manipulation active:opacity-75 flex items-center justify-center w-8 h-8"
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  <NeumorphButton className="flex items-center justify-center w-8 h-8 rounded-full">
                    <FaXTwitter className="text-[16px] text-black/75 dark:text-white/80" />
                  </NeumorphButton>
                </a>
              </TooltipTrigger>
              <TooltipContent>Twitter</TooltipContent>
            </Tooltip>
          )}
          {socialLinks.resume && (
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  className="touch-manipulation active:opacity-75 flex items-center justify-center w-8 h-8"
                  href={socialLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  <NeumorphButton className="flex items-center justify-center w-8 h-8 rounded-full">
                    <FaPaperclip className="text-[16px] text-black/75 dark:text-white/80" />
                  </NeumorphButton>
                </a>
              </TooltipTrigger>
              <TooltipContent>Resume</TooltipContent>
            </Tooltip>
          )}
          {socialLinks.linkedin && (
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  className="touch-manipulation active:opacity-75 flex items-center justify-center w-8 h-8"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  <NeumorphButton className="flex items-center justify-center w-8 h-8 rounded-full">
                    <FaLinkedin className="text-[16px] text-black/75 dark:text-white/80" />
                  </NeumorphButton>
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
          )}
          {socialLinks.email && (
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  className="touch-manipulation active:opacity-75 flex items-center justify-center w-8 h-8"
                  href={socialLinks.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = socialLinks.email!;
                  }}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  <NeumorphButton className="flex items-center justify-center w-8 h-8 rounded-full">
                    <FaEnvelope className="text-[16px] text-black/75 dark:text-white/80" />
                  </NeumorphButton>
                </a>
              </TooltipTrigger>
              <TooltipContent>Email</TooltipContent>
            </Tooltip>
          )}
          {mounted && (
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => {
                    const newTheme = theme === 'light' ? 'dark' : 'light'
                    if (typeof document !== "undefined" && "startViewTransition" in document) {
                      ; (document as Document & { startViewTransition: (callback: () => void) => void }).startViewTransition(() => {
                        setTheme(newTheme)
                      })
                    } else {
                      setTheme(newTheme)
                    }
                  }}
                  className="touch-manipulation active:opacity-75 flex items-center justify-center w-8 h-8"
                  aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                  type="button"
                >
                  <NeumorphButton className="flex items-center justify-center w-8 h-8 rounded-full">
                    {theme === 'light' ? (
                      <Moon className="size-3.5 -mt-px" aria-hidden="true" />
                    ) : (
                      <Sun className="size-3.5 -mt-px" aria-hidden="true" />
                    )}
                  </NeumorphButton>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                {theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>

      {/* Subtitle + Status Row */}
      <div className="sm:px-8 px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <p className="opacity-40 text-xs sm:text-sm">
          {age} • {title}
        </p>
        
        {/* Open for Opportunities Status */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative flex items-center justify-center overflow-hidden rounded-full border [box-shadow:0_4px_10px_-4px_rgba(15,23,42,0.15)] bg-green-100 border-green-200 after:border-green-100 after:border-t-2 after:border-b-2 after:border-b-green-300 dark:bg-green-900/30 dark:border-green-800 dark:after:border-green-800 dark:after:border-b-green-900 after:absolute after:inset-0 after:rounded-full after:border-r-0 after:content-['']">
            <div className="flex items-center gap-1.5 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-green-700 dark:text-green-400">
                Open for opportunities
              </span>
            </div>
          </div>
          <a
            href="https://x.com/messages/compose?recipient_id=1273445036647018496"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center overflow-hidden rounded-full border [box-shadow:0_4px_10px_-4px_rgba(15,23,42,0.15)] bg-neutral-900 border-neutral-700 after:border-neutral-600 after:border-t-2 after:border-b-2 after:border-b-black dark:bg-white dark:border-neutral-200 dark:after:border-neutral-100 dark:after:border-b-neutral-300 after:absolute after:inset-0 after:rounded-full after:border-r-0 after:content-[''] hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 text-white dark:text-black">
              <FaXTwitter className="text-[12px]" />
              <span className="text-xs font-medium">DM me</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
