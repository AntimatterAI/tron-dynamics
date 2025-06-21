"use client"

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface PageHeroEffectsProps {
  variant?: 'studios' | 'ventures' | 'impact' | 'about' | 'default'
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function PageHeroEffects({ variant = 'default' }: PageHeroEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [screenDimensions, setScreenDimensions] = useState({ width: 1920, height: 1080 })
  
  // Mouse tracking for desktop
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 200, damping: 40 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 200, damping: 40 })
  
  // Parallax transforms (more subtle)
  const xRange = [-30, 30]
  const yRange = [-30, 30]
  const pathX = useTransform(smoothMouseX, [0, screenDimensions.width], xRange)
  const pathY = useTransform(smoothMouseY, [0, screenDimensions.height], yRange)

  // Color schemes for different pages
  const colorSchemes = {
    studios: {
      primary: '#E53E3E',
      secondary: '#DC2626',
      accent: '#F87171',
      gradients: [
        'radial-gradient(circle at 30% 70%, rgba(229, 62, 62, 0.04) 0%, transparent 60%)',
        'radial-gradient(circle at 70% 30%, rgba(220, 38, 38, 0.03) 0%, transparent 60%)',
        'radial-gradient(circle at 50% 50%, rgba(248, 113, 113, 0.02) 0%, transparent 60%)',
      ]
    },
    ventures: {
      primary: '#FF6B35',
      secondary: '#EA580C',
      accent: '#FB923C',
      gradients: [
        'radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.04) 0%, transparent 60%)',
        'radial-gradient(circle at 70% 30%, rgba(234, 88, 12, 0.03) 0%, transparent 60%)',
        'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.02) 0%, transparent 60%)',
      ]
    },
    impact: {
      primary: '#00FF87',
      secondary: '#10B981',
      accent: '#34D399',
      gradients: [
        'radial-gradient(circle at 30% 70%, rgba(0, 255, 135, 0.04) 0%, transparent 60%)',
        'radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.03) 0%, transparent 60%)',
        'radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.02) 0%, transparent 60%)',
      ]
    },
    about: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      accent: '#A78BFA',
      gradients: [
        'radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.04) 0%, transparent 60%)',
        'radial-gradient(circle at 70% 30%, rgba(124, 58, 237, 0.03) 0%, transparent 60%)',
        'radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.02) 0%, transparent 60%)',
      ]
    },
    default: {
      primary: '#6B7280',
      secondary: '#4B5563',
      accent: '#9CA3AF',
      gradients: [
        'radial-gradient(circle at 30% 70%, rgba(107, 114, 128, 0.03) 0%, transparent 60%)',
        'radial-gradient(circle at 70% 30%, rgba(75, 85, 99, 0.02) 0%, transparent 60%)',
        'radial-gradient(circle at 50% 50%, rgba(156, 163, 175, 0.01) 0%, transparent 60%)',
      ]
    }
  }

  const currentScheme = colorSchemes[variant]

  // Update dimensions and mobile detection
  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined') {
        setScreenDimensions({ width: window.innerWidth, height: window.innerHeight })
        setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
      }
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Initialize particles (fewer for performance)
  useEffect(() => {
    const createParticles = () => {
      if (typeof window === 'undefined') return
      
      const particleCount = isMobile ? 8 : 15
      const newParticles: Particle[] = []
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * screenDimensions.width,
          y: Math.random() * screenDimensions.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.2 + 0.05,
        })
      }
      setParticles(newParticles)
    }

    createParticles()
  }, [isMobile, screenDimensions])

  // Mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isMobile) {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
  }, [mouseX, mouseY, isMobile])

  // Add event listeners
  useEffect(() => {
    const container = containerRef.current
    if (!container || isMobile) return

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove, isMobile])

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX
        let newY = particle.y + particle.speedY
        
        const screenWidth = screenDimensions.width
        const screenHeight = screenDimensions.height
        
        if (newX < 0) newX = screenWidth
        if (newX > screenWidth) newX = 0
        if (newY < 0) newY = screenHeight
        if (newY > screenHeight) newY = 0
        
        return {
          ...particle,
          x: newX,
          y: newY,
        }
      }))
    }

    const interval = setInterval(animateParticles, 80)
    return () => clearInterval(interval)
  }, [screenDimensions])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-60"
          animate={{
            background: currentScheme.gradients
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full blur-sm"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: currentScheme.primary,
              opacity: particle.opacity,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Desktop Mouse Parallax Effect */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            x: pathX,
            y: pathY,
          }}
        >
          <div 
            className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full blur-sm" 
            style={{ backgroundColor: currentScheme.accent }}
          />
          <div 
            className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full blur-sm" 
            style={{ backgroundColor: currentScheme.secondary }}
          />
          <div 
            className="absolute top-1/2 left-3/4 w-1 h-1 rounded-full blur-sm" 
            style={{ backgroundColor: currentScheme.primary }}
          />
        </motion.div>
      )}

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(${currentScheme.primary}20 1px, transparent 1px),
            linear-gradient(90deg, ${currentScheme.primary}20 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Ambient Corner Glows */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-1/3 h-1/3 rounded-full blur-3xl"
          style={{ 
            background: `radial-gradient(circle, ${currentScheme.primary}08 0%, transparent 70%)` 
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1/3 h-1/3 rounded-full blur-3xl"
          style={{ 
            background: `radial-gradient(circle, ${currentScheme.secondary}08 0%, transparent 70%)` 
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

    </div>
  )
} 