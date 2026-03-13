'use client'

import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200)
    const hideTimer = setTimeout(() => setHidden(true), 1600)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (hidden) return null

  return (
    <div className={`loading-screen${fadeOut ? ' hidden' : ''}`}>
      <div className="loading-lock">
        <svg viewBox="0 -15 100 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="loadLockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e63946" />
              <stop offset="100%" stopColor="#ff6b6b" />
            </linearGradient>
          </defs>
          {/* Shackle - animates from closed to open (unlocking) */}
          <path
            className="loading-shackle"
            d="M30 50 L30 30 Q30 10 50 10 Q70 10 70 30 L70 35"
            stroke="url(#loadLockGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Lock body */}
          <rect x="20" y="50" width="60" height="45" rx="8" fill="url(#loadLockGrad)" />
          {/* Keyhole - white like favicon */}
          <circle cx="50" cy="68" r="7" fill="#fff" />
          <rect x="47" y="68" width="6" height="12" rx="2" fill="#fff" />
        </svg>
      </div>
    </div>
  )
}
