'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'

export default function LoadingScreen() {
  const [show, setShow] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const pathname = usePathname()

  // Hide the loading screen (with fade animation)
  const hide = useCallback(() => {
    setFadeOut(true)
    setTimeout(() => {
      setShow(false)
      setFadeOut(false)
    }, 300)
  }, [])

  // 1) Initial page load — show briefly, then hide
  useEffect(() => {
    const t = setTimeout(hide, 300)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 2) When pathname changes (new page rendered) — hide the loader
  useEffect(() => {
    if (!show) return            // wasn't showing, nothing to hide
    const t = setTimeout(hide, 50) // tiny delay so content is painted
    return () => clearTimeout(t)
  }, [pathname, show, hide])

  // 3) Intercept ALL internal link clicks BEFORE navigation starts
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      // Skip external links, tel:, mailto:, hash-only, new-tab
      if (
        href.startsWith('http') ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:') ||
        href === '#' ||
        (href.startsWith('#') && !href.startsWith('/#')) ||
        anchor.target === '_blank' ||
        e.ctrlKey || e.metaKey || e.shiftKey
      ) return

      // Skip if we're already on this page
      if (href === pathname || href === pathname + '/') return

      // Show loader IMMEDIATELY (synchronous, before Next.js navigates)
      setShow(true)
      setFadeOut(false)
    }

    document.addEventListener('click', handleClick, true) // capture phase!
    return () => document.removeEventListener('click', handleClick, true)
  }, [pathname])

  if (!show) return null

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
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
