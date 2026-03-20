'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  // Initial load — hide after page is ready
  useEffect(() => {
    // Remove the SSR loading overlay immediately on hydration
    const ssrEl = document.getElementById('ssr-loading')
    if (ssrEl) ssrEl.remove()

    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setIsVisible(false), 300)
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  // Subsequent navigations
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    setIsLoading(true)
    setIsVisible(true)

    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setIsVisible(false), 300)
    }, 400)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isVisible) return null

  return (
    <div className={`loading-screen ${!isLoading ? 'fade-out' : ''}`}>
      <div className="loading-favicon-lock">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shackle - straight U shape */}
          <path d="M21 28 V14 A11 11 0 0 1 43 14 V28" stroke="#e63946" strokeWidth="5" strokeLinecap="round" fill="none" />
          {/* Lock body */}
          <rect x="14" y="26" width="36" height="28" rx="5" fill="#e63946" />
          {/* Keyhole */}
          <circle cx="32" cy="38" r="4" fill="white" />
          <rect x="30" y="38" width="4" height="8" rx="1" fill="white" />
        </svg>
      </div>
    </div>
  )
}
