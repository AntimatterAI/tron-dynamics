'use client'

import React, { ReactNode, useEffect, useRef, forwardRef } from 'react'
import { gsap } from 'gsap'
import { 
  createCinematicEntrance, 
  createMagneticHover, 
  create3DTilt, 
  createLiquidHover,
  createScrollAnimation,
  DURATION
} from '@/lib/animations'

interface AnimatedElementProps {
  children: ReactNode
  animation?: 'fade' | 'slide' | 'scale' | 'rotate' | 'cinematic' | 'none'
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  stagger?: number
  hover?: 'magnetic' | '3d' | 'liquid' | 'glow' | 'none'
  scrollTrigger?: boolean
  triggerStart?: string
  triggerEnd?: string
  className?: string
  style?: React.CSSProperties
  tag?: React.ElementType
  onClick?: () => void
}

const AnimatedElement = forwardRef<HTMLElement, AnimatedElementProps>(({
  children,
  animation = 'fade',
  direction = 'up',
  delay = 0,
  duration = DURATION.fast,
  stagger = 0,
  hover = 'none',
  scrollTrigger = true,
  className = '',
  style = {},
  tag: Tag = 'div',
  onClick,
}, ref) => {
  const elementRef = useRef<HTMLElement>(null)
  const combinedRef = ref || elementRef

  useEffect(() => {
    const element = combinedRef as React.MutableRefObject<HTMLElement>
    if (!element.current) return

    const el = element.current
    let cleanup: (() => void) | undefined

    // Ultra-fast entrance animations
    const animateIn = () => {
      switch (animation) {
        case 'cinematic':
          const cinematicDirection = direction === 'up' ? 'bottom' : 
                                   direction === 'down' ? 'top' : 
                                   direction
          createCinematicEntrance(el, {
            delay,
            duration,
            from: cinematicDirection as 'bottom' | 'top' | 'left' | 'right',
            blur: false, // Disabled for speed
          })
          break
        case 'fade':
          el.style.opacity = '0'
          setTimeout(() => {
            el.style.transition = `opacity ${duration}s ease-out`
            el.style.opacity = '1'
          }, delay * 1000)
          break
        case 'slide':
          const transforms = {
            up: 'translateY(20px)',
            down: 'translateY(-20px)',
            left: 'translateX(20px)',
            right: 'translateX(-20px)',
          }
          el.style.transform = transforms[direction]
          el.style.opacity = '0'
          setTimeout(() => {
            el.style.transition = `all ${duration}s ease-out`
            el.style.transform = 'translate(0, 0)'
            el.style.opacity = '1'
          }, delay * 1000)
          break
        case 'none':
        default:
          // No animation
          break
      }
    }

    // Lightning-fast hover effects
    const setupHover = () => {
      switch (hover) {
        case 'magnetic':
          cleanup = createMagneticHover(el, 0.15) // Reduced intensity for speed
          break
        case '3d':
          cleanup = create3DTilt(el, 8) // Reduced intensity for speed
          break
        case 'liquid':
          cleanup = createLiquidHover(el)
          break
        case 'glow':
          const handleMouseEnter = () => {
            gsap.to(el, {
              boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)',
              scale: 1.02,
              duration: 0.1,
              ease: 'power2.out',
            })
          }

          const handleMouseLeave = () => {
            gsap.to(el, {
              boxShadow: '0 0 0px rgba(34, 197, 94, 0)',
              scale: 1,
              duration: 0.15,
              ease: 'power2.out',
            })
          }

          el.addEventListener('mouseenter', handleMouseEnter)
          el.addEventListener('mouseleave', handleMouseLeave)

          cleanup = () => {
            el.removeEventListener('mouseenter', handleMouseEnter)
            el.removeEventListener('mouseleave', handleMouseLeave)
          }
          break
        default:
          break
      }
    }

    if (scrollTrigger && animation !== 'none') {
      // Fast scroll-triggered animation
      createScrollAnimation(el, {
        opacity: 1,
        y: 0,
        duration: duration,
        delay,
      }, {
        start: 'top 95%',
        end: 'bottom 5%',
      })
      
      // Set initial state for scroll trigger
      el.style.opacity = '0'
      el.style.transform = direction === 'up' ? 'translateY(20px)' : 
                               direction === 'down' ? 'translateY(-20px)' :
                               direction === 'left' ? 'translateX(20px)' :
                               'translateX(-20px)'
    } else if (animation !== 'none') {
      // Immediate animation
      animateIn()
    }

    setupHover()

    // Cleanup
    return () => {
      if (cleanup) {
        cleanup()
      }
    }
  }, [animation, direction, delay, duration, hover, scrollTrigger, stagger, combinedRef])

  return (
    <Tag
      ref={combinedRef}
      className={`will-change-transform ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </Tag>
  )
})

AnimatedElement.displayName = 'AnimatedElement'

export default AnimatedElement 