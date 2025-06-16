import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Cinematic easing curves
export const EASING = {
  // Apple-like smooth easing
  smooth: [0.16, 1, 0.3, 1],
  // Sharp entrance
  sharp: [0.25, 0.46, 0.45, 0.94],
  // Bounce effect
  bounce: [0.68, -0.55, 0.265, 1.55],
  // Elastic
  elastic: [0.175, 0.885, 0.32, 1.275],
  // Cinematic
  cinematic: [0.645, 0.045, 0.355, 1],
} as const

// Ultra-fast animation durations
export const DURATION = {
  ultra: 0.05,
  fast: 0.1,
  normal: 0.15,
  slow: 0.2,
  cinematic: 0.3,
  epic: 0.5,
} as const

// Rapid stagger timing
export const STAGGER = {
  micro: 0.01,
  small: 0.02,
  normal: 0.03,
  large: 0.05,
} as const

/**
 * Creates a cinematic entrance animation - FAST
 */
export const createCinematicEntrance = (element: HTMLElement, options?: {
  delay?: number
  duration?: number
  from?: 'bottom' | 'top' | 'left' | 'right'
}) => {
  const { 
    delay = 0, 
    duration = DURATION.fast, 
    from = 'bottom'
  } = options || {}

  const directions = {
    bottom: { y: 30, x: 0 },
    top: { y: -30, x: 0 },
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
  }

  const initial = {
    opacity: 0,
    scale: 0.98,
    ...directions[from],
  }

  const final = {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    duration,
    delay,
    ease: 'power2.out',
  }

  gsap.set(element, initial)
  return gsap.to(element, final)
}

/**
 * Creates a magnetic hover effect - INSTANT
 */
export const createMagneticHover = (element: HTMLElement, intensity = 0.2) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * intensity
    const deltaY = (e.clientY - centerY) * intensity

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.1,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.15,
      ease: 'power2.out',
    })
  }

  element.addEventListener('mousemove', handleMouseMove)
  element.addEventListener('mouseleave', handleMouseLeave)

  return () => {
    element.removeEventListener('mousemove', handleMouseMove)
    element.removeEventListener('mouseleave', handleMouseLeave)
  }
}

/**
 * Creates a 3D tilt effect on hover - INSTANT
 */
export const create3DTilt = (element: HTMLElement, intensity = 10) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateX = ((e.clientY - centerY) / rect.height) * -intensity
    const rotateY = ((e.clientX - centerX) / rect.width) * intensity

    gsap.to(element, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.08,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.12,
      ease: 'power2.out',
    })
  }

  element.addEventListener('mousemove', handleMouseMove)
  element.addEventListener('mouseleave', handleMouseLeave)

  return () => {
    element.removeEventListener('mousemove', handleMouseMove)
    element.removeEventListener('mouseleave', handleMouseLeave)
  }
}

/**
 * Creates a typing animation - FAST
 */
export const createAdvancedTyping = (
  element: HTMLElement, 
  text: string, 
  options?: {
    stagger?: number
  }
) => {
  const { stagger = 0.01 } = options || {}
  
  // Split text into spans for character-by-character animation
  const chars = text.split('').map(char => 
    char === ' ' ? '&nbsp;' : char
  )
  
  element.innerHTML = chars
    .map(char => `<span style="opacity: 0;">${char}</span>`)
    .join('')

  const charElements = element.querySelectorAll('span')
  
  // Simple reveal without scramble for speed
  gsap.to(charElements, {
    opacity: 1,
    stagger,
    duration: 0.05,
    ease: 'power2.out',
  })
}

/**
 * Creates particle burst effect - FAST & MINIMAL
 */
export const createParticleBurst = (
  element: HTMLElement, 
  options?: {
    count?: number
    colors?: string[]
    size?: number
  }
) => {
  const { count = 8, colors = ['#22c55e', '#34d399'], size = 2 } = options || {}
  
  const rect = element.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div')
    particle.style.cssText = `
      position: fixed;
      left: ${centerX}px;
      top: ${centerY}px;
      width: ${size}px;
      height: ${size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
    `
    
    document.body.appendChild(particle)
    
    const angle = (i / count) * Math.PI * 2
    const distance = 30 + Math.random() * 40
    const endX = centerX + Math.cos(angle) * distance
    const endY = centerY + Math.sin(angle) * distance
    
    gsap.to(particle, {
      x: endX - centerX,
      y: endY - centerY,
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => particle.remove()
    })
  }
}

/**
 * Creates smooth scroll-triggered animations - FAST
 */
export const createScrollAnimation = (
  element: HTMLElement,
  animation: gsap.TweenVars,
  trigger?: {
    start?: string
    end?: string
    scrub?: boolean | number
  }
) => {
  if (typeof window === 'undefined') return

  const { start = 'top 90%', end = 'bottom 10%', scrub = false } = trigger || {}

  return ScrollTrigger.create({
    trigger: element,
    start,
    end,
    scrub,
    animation: gsap.to(element, { ...animation, duration: 0.15 }),
    once: !scrub,
  })
}

/**
 * Advanced counter animation - FAST
 */
export const createCounterAnimation = (
  element: HTMLElement,
  target: number,
  options?: {
    duration?: number
    prefix?: string
    suffix?: string
  }
) => {
  const { duration = 0.8, prefix = '', suffix = '' } = options || {}
  
  const obj = { value: 0 }
  
  gsap.to(obj, {
    value: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      const value = Math.round(obj.value)
      element.textContent = `${prefix}${value.toLocaleString()}${suffix}`
    }
  })
}

/**
 * Creates liquid hover effect - INSTANT
 */
export const createLiquidHover = (element: HTMLElement) => {
  const handleMouseEnter = () => {
    gsap.to(element, {
      scale: 1.02,
      duration: 0.1,
      ease: 'power2.out'
    })
  }

  const handleMouseLeave = () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.12,
      ease: 'power2.out'
    })
  }

  element.addEventListener('mouseenter', handleMouseEnter)
  element.addEventListener('mouseleave', handleMouseLeave)

  return () => {
    element.removeEventListener('mouseenter', handleMouseEnter)
    element.removeEventListener('mouseleave', handleMouseLeave)
  }
}

/**
 * Creates a cinematic loader
 */
export const createCinematicLoader = (onComplete?: () => void) => {
  const loader = document.createElement('div')
  loader.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0f1e15, #1e3a23);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const logo = document.createElement('div')
  logo.innerHTML = 'TRON DYNAMICS'
  logo.style.cssText = `
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(135deg, #22c55e, #34d399);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
  `

  loader.appendChild(logo)
  document.body.appendChild(loader)

  const tl = gsap.timeline({
    onComplete: () => {
      loader.remove()
      onComplete?.()
    }
  })

  tl.to(logo, {
    opacity: 1,
    scale: 1.1,
    duration: 1,
    ease: 'power2.out'
  })
  .to(logo, {
    opacity: 0,
    scale: 0.9,
    duration: 0.5,
    ease: 'power2.in'
  }, '+=0.5')
  .to(loader, {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.out'
  })

  return tl
} 