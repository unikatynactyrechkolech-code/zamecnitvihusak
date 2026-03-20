'use client'

import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  // Only runs once on initial page load
  useEffect(() => {
    // Small delay so the lock icon is briefly visible on first load
    const timer = setTimeout(() => {
      setIsLoading(false)
      // After fade-out animation completes, unmount entirely
      setTimeout(() => setIsVisible(false), 300)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`loading-screen ${!isLoading ? 'fade-out' : ''}`}>
      <div className="loading-favicon-lock">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 28 V14 A11 11 0 0 1 43 14 V28" stroke="#e63946" strokeWidth="5" strokeLinecap="round" fill="none" />
          <rect x="14" y="26" width="36" height="28" rx="5" fill="#e63946" />
          <circle cx="32" cy="38" r="4" fill="white" />
          <rect x="30" y="38" width="4" height="8" rx="1" fill="white" />
        </svg>
      </div>
    </div>
  )
}
