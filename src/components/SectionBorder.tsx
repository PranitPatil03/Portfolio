'use client'

interface SectionBorderProps {
  className?: string
}

export default function SectionBorder({ className = '' }: SectionBorderProps) {
  return (
    <div 
      className={`h-px w-full ${className}`}
      style={{
        backgroundImage: 'repeating-linear-gradient(to right, currentcolor, currentcolor 2px, transparent 2px, transparent 10px)',
        opacity: 0.12
      }}
    />
  )
}
