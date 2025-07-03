"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

// Client-side check for SSR safety
const isClient = typeof window !== 'undefined'

// Floating Orbs Component
const FloatingOrbs = () => {
  const orbsRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && orbsRef.current) {
      const orbs = orbsRef.current.children
      
      // Animate each orb with GSAP
      Array.from(orbs).forEach((orb) => {
        gsap.set(orb, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1
        })
        
        gsap.to(orb, {
          x: `+=${Math.random() * 200 - 100}`,
          y: `+=${Math.random() * 200 - 100}`,
          duration: Math.random() * 10 + 10,
          repeat: -1,
          yoyo: true,
          ease: "none"
        })
        
        gsap.to(orb, {
          rotation: 360,
          duration: Math.random() * 20 + 20,
          repeat: -1,
          ease: "none"
        })
      })
    }
  }, [mounted])

  if (!mounted || !isClient) {
    return null
  }

  return (
    <div ref={orbsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="absolute w-32 h-32 rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? '#00FF87' : i % 3 === 1 ? '#FF6B35' : '#3B82F6'
            }40 0%, transparent 70%)`
          }}
        />
      ))}
    </div>
  )
}

// Animated Grid Component  
const AnimatedGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && gridRef.current) {
      const lines = gridRef.current.children
      
      Array.from(lines).forEach((line, index) => {
        gsap.fromTo(line, 
          { opacity: 0, scaleX: 0 },
          { 
            opacity: 0.1, 
            scaleX: 1, 
            duration: 2,
            delay: index * 0.1,
            repeat: -1,
            repeatDelay: 5,
            ease: "power2.out"
          }
        )
      })
    }
  }, [mounted])

  if (!mounted || !isClient) {
    return (
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/10 to-blue-500/10" />
      </div>
    )
  }

  return (
    <div ref={gridRef} className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
          style={{
            top: `${(i * 8.33)}%`,
            left: 0,
            right: 0,
            transformOrigin: 'left center'
          }}
        />
      ))}
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
          style={{
            left: `${(i * 8.33)}%`,
            top: 0,
            bottom: 0,
            transformOrigin: 'center top'
          }}
        />
      ))}
    </div>
  )
}

// Particle Field Component
const ParticleField = () => {
  const particlesRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && particlesRef.current) {
      const particles = particlesRef.current.children
      
             Array.from(particles).forEach((particle) => {
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.8 + 0.2
        })
        
        gsap.to(particle, {
          y: `-=${Math.random() * 100 + 50}`,
          x: `+=${Math.random() * 40 - 20}`,
          duration: Math.random() * 8 + 5,
          repeat: -1,
          ease: "none",
          delay: Math.random() * 5
        })
        
        gsap.to(particle, {
          opacity: Math.random() * 0.4 + 0.1,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        })
      })
    }
  }, [mounted])

  if (!mounted || !isClient) {
    return null
  }

  return (
    <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full"
          style={{ opacity: 0.2 }}
        />
      ))}
    </div>
  )
}

// Main Hero Graphics Component
export const HeroGraphics = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && containerRef.current) {
      // Global container animation
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.out" }
      )
    }
  }, [mounted])

  if (!mounted || !isClient) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Static fallback */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Animated Grid Background */}
      <AnimatedGrid />
      
      {/* Floating Orbs */}
      <FloatingOrbs />
      
      {/* Particle Field */}
      <ParticleField />
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  )
}

// Enhanced Card Component with GSAP
export const EnhancedCard = ({ 
  children, 
  className = "", 
  glowColor = "emerald" 
}: { 
  children: React.ReactNode
  className?: string
  glowColor?: "emerald" | "orange" | "blue"
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  const glowColors = {
    emerald: '#00FF87',
    orange: '#FF6B35', 
    blue: '#3B82F6'
  }

  useEffect(() => {
    setMounted(true)
    
    if (isClient && cardRef.current) {
      const card = cardRef.current
      
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        })
        
        gsap.to(card.querySelector('.glow-effect'), {
          opacity: 0.3,
          duration: 0.3,
          ease: "power2.out"
        })
      }
      
      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
        
        gsap.to(card.querySelector('.glow-effect'), {
          opacity: 0.1,
          duration: 0.3,
          ease: "power2.out"
        })
      }
      
      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [mounted])

  return (
    <div 
      ref={cardRef}
      className={`relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-200 hover:bg-white/[0.04] ${className}`}
    >
      <div 
        className="glow-effect absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColors[glowColor]}20 0%, transparent 60%)`
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default HeroGraphics 