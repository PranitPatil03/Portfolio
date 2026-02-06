'use client';
import { FaLinkedin, FaXTwitter, FaGithub, FaPaperclip } from "react-icons/fa6";
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

      {/* Name */}
      <div className="sm:px-8 px-4">
        <h1 className="font-(family-name:--font-instrument-serif) italic text-2xl sm:text-4xl tracking-[0.01em] font-medium mb-1">
          {name}
        </h1>
      </div>

      {/* Subtitle + Social Icons + Book Call - all in one row */}
      <div className="sm:px-8 px-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
        <p className="opacity-40 text-xs sm:text-sm mt-1">
          {age} • {title}
        </p>

        <div className="flex flex-col items-start sm:items-end gap-2">
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
                        <Moon className="size-[14px] -mt-px" aria-hidden="true" />
                      ) : (
                        <Sun className="size-[14px] -mt-px" aria-hidden="true" />
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

          {/* Book a Free Call Button */}
          {/* <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <span>📞</span>
            Book a Free Call
          </a> */}
        </div>
      </div>
    </div>
  )
}
