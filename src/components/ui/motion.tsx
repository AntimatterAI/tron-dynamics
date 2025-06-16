"use client"

import React from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

// Animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

// Motion components
interface MotionSectionProps {
  children: React.ReactNode
  className?: string
  variant?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn"
  delay?: number
  once?: boolean
}

export function MotionSection({ 
  children, 
  className, 
  variant = "fadeInUp", 
  delay = 0,
  once = true 
}: MotionSectionProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  const variants = {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variants[variant].initial}
      animate={isInView ? variants[variant].animate : variants[variant].initial}
      transition={{ ...variants[variant].transition, delay }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({ children, className, staggerDelay = 0.05 }: StaggerContainerProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.05,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 15 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
      }}
    >
      {children}
    </motion.div>
  )
}

// Floating elements
interface FloatingElementProps {
  children?: React.ReactNode
  className?: string
  duration?: number
  delay?: number
}

export function FloatingElement({ children, className, duration = 6, delay = 0 }: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10, 10, -10],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

// Parallax scroll component
interface ParallaxProps {
  children: React.ReactNode
  className?: string
  offset?: number
}

export function Parallax({ children, className, offset = 50 }: ParallaxProps) {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])
  
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}

// Scale on hover component
interface ScaleOnHoverProps {
  children: React.ReactNode
  className?: string
  scale?: number
}

export function ScaleOnHover({ children, className, scale = 1.05 }: ScaleOnHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

// Magnetic hover effect
interface MagneticProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  )
}

// Typing animation
interface TypingAnimationProps {
  text: string
  className?: string
  speed?: number
}

export function TypingAnimation({ text, className, speed = 50 }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = React.useState("")
  const [isComplete, setIsComplete] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (displayedText.length < text.length) {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      } else {
        setIsComplete(true)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayedText, text, speed])

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  )
}

// Shimmer effect
interface ShimmerProps {
  children: React.ReactNode
  className?: string
}

export function Shimmer({ children, className }: ShimmerProps) {
  return (
    <div className={cn("shimmer", className)}>
      {children}
    </div>
  )
}

// Meteor background effect - Fixed for hydration
export function MeteorBackground({ className }: { className?: string }) {
  const [meteors, setMeteors] = React.useState<Array<{
    id: number
    delay: number
    left: number
    animationDuration: number
  }>>([])

  // Generate meteors only on the client to avoid hydration mismatch
  React.useEffect(() => {
    const generatedMeteors = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      left: Math.random() * 100,
      animationDuration: Math.random() * 3 + 2,
    }))
    setMeteors(generatedMeteors)
  }, [])

  // Don't render anything on the server
  if (meteors.length === 0) {
    return <div className={cn("absolute inset-0 overflow-hidden", className)} />
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            left: `${meteor.left}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  )
} 