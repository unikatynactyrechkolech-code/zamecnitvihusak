'use client'

import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div className={`loading-screen${hidden ? ' hidden' : ''}`}>
      <div className="loading-lock">
        <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="loading-shackle"
            d="M30 50 V30 A20 20 0 0 1 70 30 V50"
            stroke="#e63946"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <rect x="20" y="50" width="60" height="45" rx="8" fill="#e63946" />
          <circle cx="50" cy="72" r="8" fill="#0d1117" />
          <rect x="47" y="72" width="6" height="12" rx="2" fill="#0d1117" />
        </svg>
      </div>
    </div>
  )
}
