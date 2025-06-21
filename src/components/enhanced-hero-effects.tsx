"use client"

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

interface TouchPoint {
  id: number
  x: number
  y: number
  opacity: number
}

export default function EnhancedHeroEffects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [touchPoints, setTouchPoints] = useState<TouchPoint[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  // Mouse tracking for desktop
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 })
  
  // Parallax transforms
  const [screenDimensions, setScreenDimensions] = useState({ width: 1920, height: 1080 })
  const xRange = [-100, 100]
  const yRange = [-100, 100]
  const pathX = useTransform(smoothMouseX, [0, screenDimensions.width], xRange)
  const pathY = useTransform(smoothMouseY, [0, screenDimensions.height], yRange)

  // Mount guard to prevent SSR issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Detect mobile and update screen dimensions
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

  // Initialize particles
  useEffect(() => {
    const createParticles = () => {
      if (typeof window === 'undefined') return
      
      const particleCount = isMobile ? 20 : 40
      const newParticles: Particle[] = []
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * screenDimensions.width,
          y: Math.random() * screenDimensions.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          color: ['#E53E3E', '#FF6B35', '#00FF87'][Math.floor(Math.random() * 3)]
        })
      }
      setParticles(newParticles)
    }

    createParticles()
  }, [isMobile, screenDimensions])

  // Mouse move handler for desktop
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isMobile) {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
  }, [mouseX, mouseY, isMobile])

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (isMobile) {
      const newTouchPoints: TouchPoint[] = Array.from(e.touches).map((touch, index) => ({
        id: index,
        x: touch.clientX,
        y: touch.clientY,
        opacity: 1
      }))
      setTouchPoints(newTouchPoints)
    }
  }, [isMobile])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isMobile) {
      const newTouchPoints: TouchPoint[] = Array.from(e.touches).map((touch, index) => ({
        id: index,
        x: touch.clientX,
        y: touch.clientY,
        opacity: 1
      }))
      setTouchPoints(newTouchPoints)
    }
  }, [isMobile])

  const handleTouchEnd = useCallback(() => {
    if (isMobile) {
      // Fade out touch points
      setTouchPoints(prev => prev.map(point => ({ ...point, opacity: 0 })))
      setTimeout(() => setTouchPoints([]), 300)
    }
  }, [isMobile])

  // Add event listeners
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (!isMobile) {
      container.addEventListener('mousemove', handleMouseMove)
    } else {
      container.addEventListener('touchstart', handleTouchStart)
      container.addEventListener('touchmove', handleTouchMove)
      container.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      if (!isMobile) {
        container.removeEventListener('mousemove', handleMouseMove)
      } else {
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchmove', handleTouchMove)
        container.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [handleMouseMove, handleTouchStart, handleTouchMove, handleTouchEnd, isMobile])

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX
        let newY = particle.y + particle.speedY
        
        // Wrap around screen
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920
        const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 1080
        
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

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [])

  // Don't render on server to prevent hydration issues
  if (!isMounted) {
    return null
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, #E53E3E 0%, transparent 50%), radial-gradient(circle at 80% 20%, #00FF87 0%, transparent 50%), radial-gradient(circle at 40% 40%, #FF6B35 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #E53E3E 0%, transparent 50%), radial-gradient(circle at 20% 80%, #00FF87 0%, transparent 50%), radial-gradient(circle at 60% 60%, #FF6B35 0%, transparent 50%)',
              'radial-gradient(circle at 40% 60%, #E53E3E 0%, transparent 50%), radial-gradient(circle at 60% 40%, #00FF87 0%, transparent 50%), radial-gradient(circle at 20% 20%, #FF6B35 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, #E53E3E 0%, transparent 50%), radial-gradient(circle at 80% 20%, #00FF87 0%, transparent 50%), radial-gradient(circle at 40% 40%, #FF6B35 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * screenDimensions.width,
              y: Math.random() * screenDimensions.height,
            }}
            animate={{
              x: [
                Math.random() * screenDimensions.width,
                Math.random() * screenDimensions.width,
                Math.random() * screenDimensions.width,
              ],
              y: [
                Math.random() * screenDimensions.height,
                Math.random() * screenDimensions.height,
                Math.random() * screenDimensions.height,
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className={`w-1 h-1 ${i % 3 === 0 ? 'bg-red-400/20' : i % 3 === 1 ? 'bg-orange-400/20' : 'bg-green-400/20'} 
                         ${i % 2 === 0 ? 'rounded-full' : ''} blur-sm`}
              style={{
                width: `${4 + i}px`,
                height: `${4 + i}px`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Particles */}
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
              backgroundColor: particle.color,
              opacity: particle.opacity,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Desktop Mouse Follower */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute pointer-events-none z-10"
            style={{
              x: smoothMouseX,
              y: smoothMouseY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            <div className="w-4 h-4 rounded-full bg-white/20 blur-sm" />
          </motion.div>
          
          <motion.div
            className="absolute pointer-events-none z-10"
            style={{
              x: smoothMouseX,
              y: smoothMouseY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            <div className="w-8 h-8 rounded-full border border-white/10 blur-sm" />
          </motion.div>

          {/* Parallax Elements */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              x: pathX,
              y: pathY,
            }}
          >
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur-sm" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-gradient-to-r from-orange-400 to-green-400 rounded-full blur-sm" />
            <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-gradient-to-r from-green-400 to-red-400 rounded-full blur-sm" />
          </motion.div>
        </>
      )}

      {/* Mobile Touch Effects */}
      {isMobile && touchPoints.map(point => (
        <motion.div
          key={point.id}
          className="absolute pointer-events-none z-10"
          style={{
            left: point.x,
            top: point.y,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [1, 0.5, 0]
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-white/30 bg-white/10 blur-sm" />
        </motion.div>
      ))}

      {/* Ambient Glow Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 30% 70%, rgba(229, 62, 62, 0.03) 0%, transparent 70%)',
              'radial-gradient(circle at 70% 30%, rgba(229, 62, 62, 0.03) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(229, 62, 62, 0.03) 0%, transparent 70%)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 70% 30%, rgba(0, 255, 135, 0.03) 0%, transparent 70%)',
              'radial-gradient(circle at 30% 70%, rgba(0, 255, 135, 0.03) 0%, transparent 70%)',
              'radial-gradient(circle at 80% 80%, rgba(0, 255, 135, 0.03) 0%, transparent 70%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

    </div>
  )
} 