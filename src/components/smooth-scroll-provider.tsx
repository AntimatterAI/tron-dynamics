'use client'

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SmoothScrollContextType {
  lenis: Lenis | null
  scrollTo: (target: string | number, options?: { offset?: number; duration?: number }) => void
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
})

export const useSmoothScroll = () => useContext(SmoothScrollContext)

interface SmoothScrollProviderProps {
  children: ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    // GSAP ScrollTrigger integration
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Cleanup
    return () => {
      lenis.destroy()
      gsap.ticker.remove(() => {})
    }
  }, [])

  const scrollTo = (target: string | number, options?: { offset?: number; duration?: number }) => {
    if (!lenisRef.current) return

    lenisRef.current.scrollTo(target, {
      offset: options?.offset || 0,
      duration: options?.duration || 1.2,
    })
  }

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  )
} 