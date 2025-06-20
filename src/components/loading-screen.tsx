'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 100) // Very short loading time, just to prevent flash

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20 flex items-center justify-center">
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-light text-green-300 mb-4 animate-pulse"
             style={{ fontFamily: 'var(--font-orbitron), monospace' }}>
          TRON DYNAMIC
        </div>
        <div className="w-8 h-8 border-2 border-green-300/30 border-t-green-300 rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  )
} 