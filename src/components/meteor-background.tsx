'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  opacity: number
  color: string
  type: 'star' | 'meteor'
}

export default function MeteorBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Detect mobile for performance optimization
    const isMobile = window.innerWidth < 768

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Minimal color palette
    const colors = {
      stars: ['#ffffff', '#f0f9ff', '#e0f2fe'],
      meteors: ['#22c55e', '#34d399']
    }

    // Create subtle particles
    const createParticle = (type: Particle['type']): Particle => {
      if (type === 'star') {
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: 0,
          vy: 0,
          life: 0,
          maxLife: 2000 + Math.random() * 3000,
          size: isMobile ? 0.3 + Math.random() * 0.5 : 0.5 + Math.random() * 1,
          opacity: isMobile ? 0.1 + Math.random() * 0.3 : 0.2 + Math.random() * 0.6,
          color: colors.stars[Math.floor(Math.random() * colors.stars.length)],
          type: 'star'
        }
      } else {
        return {
          x: canvas.width + 50,
          y: Math.random() * canvas.height * 0.6,
          vx: -1 - Math.random() * 1.5,
          vy: 0.5 + Math.random() * 1,
          life: 0,
          maxLife: 200 + Math.random() * 150,
          size: isMobile ? 0.5 + Math.random() * 0.8 : 1 + Math.random() * 1.5,
          opacity: isMobile ? 0.4 : 0.8,
          color: colors.meteors[Math.floor(Math.random() * colors.meteors.length)],
          type: 'meteor'
        }
      }
    }

    // Initialize minimal particles
    const initParticles = () => {
      particlesRef.current = []
      
      // Reduced particles on mobile
      const starCount = isMobile ? 8 : 20
      for (let i = 0; i < starCount; i++) {
        particlesRef.current.push(createParticle('star'))
      }
    }

    // Update particles
    const updateParticles = () => {
      const particles = particlesRef.current
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]
        particle.life++
        
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Update opacity based on life
        const lifeRatio = particle.life / particle.maxLife
        
        if (particle.type === 'star') {
          // Very subtle twinkling
          particle.opacity = isMobile 
            ? 0.05 + 0.2 * Math.sin(particle.life * 0.005)
            : 0.1 + 0.4 * Math.sin(particle.life * 0.01)
        } else {
          // Meteor fading
          particle.opacity = Math.max(0, (isMobile ? 0.4 : 0.8) - lifeRatio)
        }
        
        // Remove dead particles
        if (particle.life >= particle.maxLife || particle.opacity <= 0.05) {
          particles.splice(i, 1)
        }
      }
      
      // Very rarely add a meteor (less frequent on mobile)
      const meteorChance = isMobile ? 0.0005 : 0.001
      if (Math.random() < meteorChance) {
        particles.push(createParticle('meteor'))
      }
    }

    // Render particles
    const renderParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particlesRef.current.forEach(particle => {
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        
        if (particle.type === 'star') {
          // Simple star dot
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Simple meteor with minimal trail (reduced on mobile)
          if (!isMobile) {
            ctx.shadowBlur = 6
            ctx.shadowColor = particle.color
          }
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
        }
        
        ctx.restore()
      })
    }

    // Animation loop with mobile optimization
    let lastTime = 0
    const targetFPS = isMobile ? 30 : 60
    const interval = 1000 / targetFPS

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= interval) {
        updateParticles()
        renderParticles()
        lastTime = currentTime
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize and start
    initParticles()
    animate(0)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
        opacity: 0.6,
      }}
    />
  )
} 