'use client'

import React, { ReactNode, useEffect, useRef, forwardRef } from 'react'

interface AnimatedElementProps {
  children: ReactNode
  animation?: 'fade' | 'slide' | 'scale' | 'none'
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  hover?: 'glow' | 'lift' | 'none'
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
  hover = 'none',
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
    
    // Simple CSS-based entrance animations
    if (animation !== 'none') {
      // Set initial state
      const initialClasses = {
        fade: 'opacity-0',
        slide: direction === 'up' ? 'opacity-0 translate-y-4' :
               direction === 'down' ? 'opacity-0 -translate-y-4' :
               direction === 'left' ? 'opacity-0 translate-x-4' :
               'opacity-0 -translate-x-4',
        scale: 'opacity-0 scale-95'
      }
      
      el.className = `${el.className} ${initialClasses[animation] || initialClasses.fade}`
      
      // Trigger animation
      const timer = setTimeout(() => {
        const finalClasses = {
          fade: 'opacity-100',
          slide: 'opacity-100 translate-y-0 translate-x-0',
          scale: 'opacity-100 scale-100'
        }
        
        el.className = el.className.replace(initialClasses[animation] || initialClasses.fade, finalClasses[animation] || finalClasses.fade)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [animation, direction, delay, combinedRef])

  // Determine hover classes
  const hoverClasses = {
    glow: 'hover:shadow-lg hover:shadow-green-400/25 hover:scale-[1.02]',
    lift: 'hover:-translate-y-1 hover:shadow-lg',
    none: ''
  }

  return (
    <Tag
      ref={combinedRef}
      className={`transition-all duration-300 ease-out ${hoverClasses[hover]} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </Tag>
  )
})

AnimatedElement.displayName = 'AnimatedElement'

export default AnimatedElement 