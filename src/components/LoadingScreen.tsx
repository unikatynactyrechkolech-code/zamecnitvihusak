'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Show loading on route change
    setIsLoading(true)
    setIsVisible(true)
    
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Hide after fade out
      setTimeout(() => setIsVisible(false), 300)
    }, 800)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isVisible) return null

  return (
    <div className={`loading-screen ${!isLoading ? 'fade-out' : ''}`}>
      <div className="loading-lock-wrapper">
        <svg 
          className="loading-lock-svg" 
          viewBox="0 0 100 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e63946" />
              <stop offset="100%" stopColor="#ff6b6b" />
            </linearGradient>
          </defs>
          
          {/* Shackle - animates up and rotates */}
          <path 
            className="loading-shackle" 
            d="M25 50 L25 30 Q25 10 50 10 Q75 10 75 30 L75 40" 
            stroke="url(#loadingGradient)" 
            strokeWidth="8" 
            strokeLinecap="round" 
            fill="none" 
          />
          
          {/* Lock body */}
          <rect x="15" y="50" width="70" height="55" rx="8" fill="url(#loadingGradient)" />
          
          {/* Keyhole */}
          <circle cx="50" cy="72" r="8" fill="#ffffff" />
          <rect x="46" y="72" width="8" height="14" rx="3" fill="#ffffff" />
        </svg>
      </div>
    </div>
  )
}
