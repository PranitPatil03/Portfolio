'use client'

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  const lineStyle = {
    backgroundImage: 'repeating-linear-gradient(to right, currentcolor, currentcolor 2px, transparent 2px, transparent 6px)',
    opacity: 0.15
  }

  return (
    <div className={`${className}`}>
      {/* Single dotted line above heading - full width */}
      <div className="h-px" style={lineStyle} />
      
      {/* Heading - aligned with ProfileHeader (sm:px-8 px-4) */}
      <h2 className="text-base sm:text-xl py-4 sm:px-8 px-4 font-semibold">
        {children}
      </h2>
    </div>
  )
}
