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
          viewBox="0 0 100 140" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e63946" />
              <stop offset="100%" stopColor="#ff6b6b" />
            </linearGradient>
          </defs>
          
          {/* Left leg of shackle - FIXED in lock body */}
          <line 
            x1="25" y1="60" x2="25" y2="35"
            stroke="url(#loadingGradient)" 
            strokeWidth="8" 
            strokeLinecap="round" 
          />
          
          {/* Right part (arc + right leg) - pivots around top of left leg */}
          <path 
            className="loading-shackle" 
            d="M25 35 Q25 15 50 15 Q75 15 75 35 L75 60" 
            stroke="url(#loadingGradient)" 
            strokeWidth="8" 
            strokeLinecap="round" 
            fill="none" 
          />
          
          {/* Lock body */}
          <rect x="15" y="55" width="70" height="55" rx="8" fill="url(#loadingGradient)" />
          
          {/* Keyhole */}
          <circle cx="50" cy="78" r="7" fill="#ffffff" />
          <rect x="46" y="78" width="8" height="12" rx="2" fill="#ffffff" />
        </svg>
      </div>
    </div>
  )
}
