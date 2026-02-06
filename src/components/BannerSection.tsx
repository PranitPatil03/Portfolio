'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const BANNER_IMAGES = [
  '/images/image-copy-3.png',
  '/images/image-copy-3.png'
]

const STORAGE_KEY = 'portfolio_banner_image'

function getSessionImage(): string {
  if (typeof window === 'undefined') {
    return BANNER_IMAGES[0]
  }

  // Check if we already have a stored image for this session
  const storedImage = sessionStorage.getItem(STORAGE_KEY)
  if (storedImage && BANNER_IMAGES.includes(storedImage)) {
    return storedImage
  }

  // Pick a random image and store it for the session
  const randomImage = BANNER_IMAGES[Math.floor(Math.random() * BANNER_IMAGES.length)]
  sessionStorage.setItem(STORAGE_KEY, randomImage)
  return randomImage
}

interface BannerSectionProps {
  bannerImage?: string
}

export default function BannerSection({
  bannerImage
}: BannerSectionProps) {
  const [imageSrc, setImageSrc] = useState<string>(BANNER_IMAGES[0])

  useEffect(() => {
    // Set the image on client side to ensure consistency
    setImageSrc(bannerImage || getSessionImage())
  }, [bannerImage])

  return (
    <div className="w-full mb-2 relative">
      <div className="relative">
        <Image
          alt="Banner"
          width={1240}
          height={900}
          className="w-full h-[200px] sm:h-[270px] object-cover brightness-110 contrast-105 saturate-110"
          src={imageSrc}
          style={{ color: 'transparent' }}
          priority
        />
      </div>
    </div>
  )
}
