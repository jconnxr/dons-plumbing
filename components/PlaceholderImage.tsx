'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'

interface PlaceholderImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: 'square' | 'video' | 'wide' | 'portrait' | 'auto'
  priority?: boolean
}

export default function PlaceholderImage({ 
  src, 
  alt, 
  className = '',
  aspectRatio = 'video',
  priority = false
}: PlaceholderImageProps) {
  const [hasError, setHasError] = useState(false)
  
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
    portrait: 'aspect-[3/4]',
    auto: ''
  }

  // Check if this is a real image path (not a placeholder path)
  const isRealImage = src && !src.includes('placeholder') && !hasError

  if (isRealImage) {
    return (
      <div 
        className={`
          relative overflow-hidden
          ${aspectClasses[aspectRatio]}
          ${className}
        `}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          onError={() => setHasError(true)}
        />
      </div>
    )
  }

  // Fallback placeholder
  return (
    <div 
      className={`
        relative bg-gradient-to-br from-gray-100 to-gray-200 
        flex flex-col items-center justify-center 
        ${aspectClasses[aspectRatio]}
        ${className}
      `}
    >
      <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
      <p className="text-sm text-gray-500 text-center px-4">
        Image Placeholder
      </p>
      <p className="text-xs text-gray-400 mt-1 text-center px-4">
        {src}
      </p>
    </div>
  )
}
