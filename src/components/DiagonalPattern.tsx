'use client'

interface DiagonalPatternProps {
  side: 'left' | 'right'
  className?: string
}

export default function DiagonalPattern({ side, className = '' }: DiagonalPatternProps) {
  return (
    <div 
      className={`absolute ${side}-0 top-0 w-px h-full sm:block hidden ${className}`}
    >
      {/* Dotted vertical line */}
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, currentcolor, currentcolor 4px, transparent 4px, transparent 16px)',
          opacity: 0.15
        }}
      />
    </div>
  )
}
