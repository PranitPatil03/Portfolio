'use client'
import { FaGithub, FaLinkedin, FaPaperclip, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import NeumorphButton from "./NeumorphButton";

interface ReachoutProps {
  title?: string
  subtitle?: string
  socialLinks?: {
    twitter?: string
    resume?: string
    github?: string
    linkedin?: string
    mail?: string
  }
}

export default function Reachout({
  title = "Let's connect",
  subtitle = "Find me on these platforms",
  socialLinks = {
    twitter: "https://x.com/Patilpranit3112",
    github: "https://github.com/pranitpatil03",
    linkedin: "https://www.linkedin.com/in/patilpranit03/",
    resume: "https://drive.google.com/file/d/11bkE5GpAIlIIh1rqMb0Ns0gwqJgB-3gP/view",
    mail: "mailto:patilpranit3112@gmail.com"
  }
}: ReachoutProps) {
  return (
    <div className="sm:px-12 px-4 pb-24 sm:pb-28">
      <div className="text-left w-full">
        <div className="mb-4 sm:mb-6">
          <h2 className="font-(family-name:var(--font-instrument-serif)) text-white text-lg sm:text-xl mb-2 mt-4 sm:mt-6">
            {title}
          </h2>
          <p className="text-md sm:text-lg mb-3 sm:mb-4">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
          {socialLinks.github && (
            <a
              className="touch-manipulation active:opacity-75"
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                WebkitTapHighlightColor: "transparent",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <NeumorphButton className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2">
                <FaGithub className="text-[28px] sm:text-[18px] text-neutral-800 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-neutral-800 dark:text-white/80">
                  GitHub
                </span>
              </NeumorphButton>
            </a>
          )}

          {socialLinks.twitter && (
            <a
              className="touch-manipulation active:opacity-75"
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                WebkitTapHighlightColor: "transparent",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <NeumorphButton className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2">
                <FaXTwitter className="text-[28px] sm:text-[18px] text-neutral-800 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-neutral-800 dark:text-white/80">
                  Twitter
                </span>
              </NeumorphButton>
            </a>
          )}

          {socialLinks.linkedin && (
            <a
              className="touch-manipulation active:opacity-75"
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                WebkitTapHighlightColor: "transparent",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <NeumorphButton className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2">
                <FaLinkedin className="text-[28px] sm:text-[18px] text-neutral-800 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-neutral-800 dark:text-white/80">
                  LinkedIn
                </span>
              </NeumorphButton>
            </a>
          )}

          {socialLinks.mail && (
            <a
              className="touch-manipulation active:opacity-75"
              href={socialLinks.mail}
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = socialLinks.mail!;
              }}
              style={{
                WebkitTapHighlightColor: "transparent",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <NeumorphButton className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2">
                <IoMdMail className="text-[28px] sm:text-[18px] text-neutral-800 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-neutral-800 dark:text-white/80">
                  Mail
                </span>
              </NeumorphButton>
            </a>
          )}

          {socialLinks.resume && (
            <a
              className="touch-manipulation active:opacity-75"
              href={socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                WebkitTapHighlightColor: "transparent",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <NeumorphButton className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2">
                <FaPaperclip className="text-[28px] sm:text-[18px] text-neutral-800 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-neutral-800 dark:text-white/80">
                  Resume
                </span>
              </NeumorphButton>
            </a>
          )}
        </div>

        {/* Footer Section */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-white/[0.08]">
          <div className="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:items-center sm:space-y-0 text-center">
            <div className="text-md text-white">
              © {new Date().getFullYear()} Pranit Patil.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
