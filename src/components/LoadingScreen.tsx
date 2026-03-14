'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    setIsVisible(true)
    
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setIsVisible(false), 300)
    }, 600)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isVisible) return null

  return (
    <div className={`loading-screen ${!isLoading ? 'fade-out' : ''}`}>
      <div className="loading-favicon-lock">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="loadLockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e63946" />
              <stop offset="100%" stopColor="#ff6b6b" />
            </linearGradient>
          </defs>
          {/* Shackle */}
          <path d="M20 28 V18 C20 10, 44 10, 44 18 V28" stroke="url(#loadLockGrad)" strokeWidth="5" strokeLinecap="round" fill="none" />
          {/* Lock body */}
          <rect x="14" y="26" width="36" height="28" rx="5" fill="url(#loadLockGrad)" />
          {/* Keyhole */}
          <circle cx="32" cy="38" r="4" fill="white" />
          <rect x="30" y="38" width="4" height="8" rx="1" fill="white" />
        </svg>
      </div>
    </div>
  )
}
