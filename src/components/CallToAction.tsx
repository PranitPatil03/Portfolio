'use client'

import Image from 'next/image'
import NeumorphButton from './NeumorphButton'

interface CallToActionProps {
  profileImage?: string
  profileAlt?: string
  linkText?: string
  linkUrl?: string
  preText?: string
}

export default function CallToAction({
  profileImage = "/images/profile2.png",
  profileAlt = "Profile",
  linkText = "Book a Call with me",
  linkUrl = "https://cal.com/pranitpatil",
  preText = "If you've read this far, you might be interested in what I do."
}: CallToActionProps) {

  return (
    <div className="mt-4 sm:mt-6 pb-6 sm:pb-8 sm:flex sm:justify-between sm:items-center w-full flex-col">
      <p className="text-neutral-600 dark:text-neutral-400 font-[family-name:var(--font-instrument-serif)] italic text-base sm:text-xl mb-3 sm:mb-3">{preText}</p>
      <div className="w-full sm:w-auto mt-3 sm:mt-0">
        <a 
          href={linkUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group inline-flex w-full sm:w-auto touch-manipulation active:opacity-75"
          style={{ 
            WebkitTapHighlightColor: 'transparent',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          }}
        >
          <NeumorphButton className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-2 text-sm sm:text-base text-neutral-800 dark:text-white/90">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden shrink-0">
                <Image 
                  alt={profileAlt} 
                  width={28} 
                  height={28} 
                  className="w-full h-full object-cover" 
                  src={profileImage}
                  style={{ color: 'transparent' }}
                />
              </div>
              <span className="whitespace-nowrap">
                {linkText}
              </span>
            </div>
          </NeumorphButton>
        </a>
      </div>
    </div>
  )
}
