"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Zap, Rocket, Globe, Brain, Network, Target, ArrowUpRight, Sparkles } from 'lucide-react'

// Floating Particles Background
export const FloatingParticles = ({ count = 50, speed = 'slow' }: { count?: number, speed?: 'slow' | 'medium' | 'fast' }) => {
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, size: number, delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5
    }))
    setParticles(newParticles)
  }, [count])

  const speedMap = {
    slow: 8,
    medium: 6,
    fast: 4
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-emerald-400/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: speedMap[speed],
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Animated Grid Background
export const AnimatedGrid = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 opacity-10 ${className}`}>
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

// Tech Orbs - Floating animated spheres
export const TechOrbs = ({ count = 3 }: { count?: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-400/20 backdrop-blur-sm border border-emerald-400/30"
          style={{
            left: `${20 + (i * 30)}%`,
            top: `${20 + (i * 25)}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5
          }}
        >
          <motion.div
            className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-500/30 to-blue-500/30"
            animate={{
              scale: [1, 0.8, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

// Interactive Icon Grid
export const InteractiveIconGrid = () => {
  const icons = [Zap, Rocket, Globe, Brain, Network, Target, ArrowUpRight, Sparkles]
  
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-4 p-8">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="relative group cursor-pointer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center group-hover:border-emerald-400/60 transition-all duration-300">
            <Icon className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
          </div>
          <motion.div
            className="absolute inset-0 rounded-xl bg-emerald-500/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

// Animated Progress Bar
export const AnimatedProgressBar = ({ 
  value, 
  label, 
  color = 'emerald',
  className = ""
}: { 
  value: number
  label: string
  color?: 'emerald' | 'blue' | 'orange'
  className?: string 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({ width: `${value}%` })
    }
  }, [isInView, controls, value])

  const colorMap = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    orange: 'bg-orange-500'
  }

  return (
    <div ref={ref} className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-white">{label}</span>
        <span className="text-sm text-emerald-300">{value}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full ${colorMap[color]} rounded-full relative`}
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-white/30 rounded-full"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

// Floating Action Elements
export const FloatingActionElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating + symbols */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-emerald-400/20 text-2xl font-bold"
          style={{
            left: `${10 + (i * 15)}%`,
            top: `${20 + (i * 10)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          +
        </motion.div>
      ))}

      {/* Floating geometric shapes */}
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-6 h-6 border-2 border-blue-400/30"
          style={{
            left: `${70 + (i * 8)}%`,
            top: `${30 + (i * 15)}%`,
            borderRadius: i % 2 === 0 ? '50%' : '0%'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

// Hero Section Graphics
export const HeroGraphics = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Grid */}
      <AnimatedGrid />
      
      {/* Floating Particles */}
      <FloatingParticles count={30} speed="slow" />
      
      {/* Tech Orbs */}
      <TechOrbs count={2} />
      
      {/* Floating Action Elements */}
      <FloatingActionElements />
      
      {/* Gradient Overlays */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  )
}

// Statistics Counter
export const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  suffix = "",
  prefix = ""
}: { 
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const startCount = 0
      
      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        
        setCount(Math.floor(progress * (end - startCount) + startCount))
        
        if (progress < 1) {
          requestAnimationFrame(updateCount)
        }
      }
      
      requestAnimationFrame(updateCount)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

// Card Hover Effects
export const EnhancedCard = ({ 
  children, 
  className = "",
  glowColor = "emerald"
}: { 
  children: React.ReactNode
  className?: string
  glowColor?: 'emerald' | 'blue' | 'orange'
}) => {
  const glowColorMap = {
    emerald: 'group-hover:shadow-emerald-500/25',
    blue: 'group-hover:shadow-blue-500/25',
    orange: 'group-hover:shadow-orange-500/25'
  }

  return (
    <motion.div
      className={`group relative ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-r from-${glowColor}-500/0 to-${glowColor}-500/0 group-hover:from-${glowColor}-500/10 group-hover:to-${glowColor}-500/5 rounded-xl transition-all duration-300`} />
      <div className={`relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all duration-300 group-hover:border-${glowColor}-500/30 group-hover:shadow-xl ${glowColorMap[glowColor]}`}>
        {children}
      </div>
    </motion.div>
  )
} 