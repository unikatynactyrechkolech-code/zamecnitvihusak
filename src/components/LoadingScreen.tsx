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
    }, 800)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isVisible) return null

  return (
    <div className={`loading-screen ${!isLoading ? 'fade-out' : ''}`}>
      <div className="loading-lock-wrapper">
        <svg 
          className="loading-lock-svg" 
          viewBox="0 0 120 160" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="lockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e63946" />
              <stop offset="100%" stopColor="#ff6b6b" />
            </linearGradient>
            <linearGradient id="shackleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c0c0c0" />
              <stop offset="100%" stopColor="#888" />
            </linearGradient>
          </defs>
          
          {/* Shackle - the U-shaped metal part that opens */}
          <g className="loading-shackle">
            {/* Left leg - fixed */}
            <rect x="28" y="30" width="10" height="50" rx="5" fill="url(#shackleGrad)" />
            {/* Right leg - moves up */}
            <rect className="loading-shackle-right" x="82" y="30" width="10" height="50" rx="5" fill="url(#shackleGrad)" />
            {/* Arc connecting them */}
            <path className="loading-shackle-arc" d="M33 35 C33 10, 87 10, 87 35" stroke="url(#shackleGrad)" strokeWidth="10" fill="none" strokeLinecap="round" />
          </g>
          
          {/* Lock body */}
          <rect x="15" y="72" width="90" height="70" rx="12" fill="url(#lockGrad)" />
          <rect x="15" y="72" width="90" height="70" rx="12" fill="none" stroke="#c0392b" strokeWidth="2" opacity="0.3" />
          
          {/* Keyhole - realistic shape */}
          <circle cx="60" cy="100" r="9" fill="#1a1a2e" />
          <path d="M55 100 L60 120 L65 100" fill="#1a1a2e" />
          
          {/* Key entering keyhole */}
          <g className="loading-key">
            <rect x="56" y="96" width="40" height="8" rx="2" fill="#ffd700" />
            <circle cx="92" cy="100" r="10" fill="#ffd700" stroke="#daa520" strokeWidth="1.5" />
            <circle cx="92" cy="100" r="4" fill="#daa520" />
            {/* Key teeth */}
            <rect x="60" y="104" width="6" height="5" fill="#daa520" />
            <rect x="70" y="104" width="4" height="7" fill="#daa520" />
            <rect x="78" y="104" width="5" height="4" fill="#daa520" />
          </g>
          
          {/* Shine effect on lock body */}
          <rect x="22" y="78" width="4" height="30" rx="2" fill="white" opacity="0.15" />
        </svg>
      </div>
    </div>
  )
}
