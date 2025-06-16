"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Globe, Phone, Heart, Film, Briefcase, ArrowRight, ChevronDown } from 'lucide-react'
import MeteorBackground from '@/components/meteor-background'
import AnimatedElement from '@/components/animated-element'
import { createAdvancedTyping, createCounterAnimation, createParticleBurst, DURATION, STAGGER } from '@/lib/animations'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null)
  const statsRefs = useRef<(HTMLDivElement | null)[]>([])
  const heroSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Detect mobile device
    const isMobile = window.innerWidth < 768

    // Hero title typing animation - reduced for mobile
    if (heroTitleRef.current && !isMobile) {
      setTimeout(() => {
        createAdvancedTyping(heroTitleRef.current!, 'TRON DYNAMICS', {
          stagger: 0.03,
        })
      }, 300)
    } else if (heroTitleRef.current) {
      // Instant reveal on mobile for better performance
      heroTitleRef.current.textContent = 'TRON DYNAMICS'
      gsap.fromTo(heroTitleRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.2 }
      )
    }

    // Hero subtitle - simplified for mobile
    if (heroSubtitleRef.current && !isMobile) {
      setTimeout(() => {
        createAdvancedTyping(heroSubtitleRef.current!, 'Where Innovation Meets Impact', {
          stagger: 0.02,
        })
      }, 800)
    } else if (heroSubtitleRef.current) {
      heroSubtitleRef.current.textContent = 'Where Innovation Meets Impact'
      gsap.fromTo(heroSubtitleRef.current, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.4 }
      )
    }

    // Simplified counters for stats
    const statValues = [2025, 2000000, 3]
    const statSuffixes = ['', '+', '']
    
    statsRefs.current.forEach((ref, index) => {
      if (ref) {
        ScrollTrigger.create({
          trigger: ref,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            if (isMobile) {
              // Instant reveal on mobile
              ref.textContent = statValues[index] + statSuffixes[index]
            } else {
              createCounterAnimation(ref, statValues[index], {
                duration: 1.2,
                suffix: statSuffixes[index],
              })
            }
          },
        })
      }
    })

  }, [])

  const handleCtaClick = (type: 'call' | 'learn') => {
    if (type === 'call') {
      // Reduced particle effect for performance
      const button = document.querySelector('[data-cta="call"]')
      if (button && window.innerWidth >= 768) {
        createParticleBurst(button as HTMLElement, {
          count: 4,
          colors: ['#22c55e', '#34d399'],
          size: 1.5,
        })
      }
      setTimeout(() => {
        window.location.href = 'tel:+14048233384'
      }, 50)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20">
      <MeteorBackground />
      
      {/* Hero Section - Mobile Optimized */}
      <section 
        ref={heroSectionRef}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12"
      >
        {/* Reduced ambient lighting for performance */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-green-500/3 md:bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/3 md:bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          {/* Mobile-Optimized Badge */}
          <AnimatedElement
            animation="fade"
            delay={0.1}
            className="mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-green-200/80 text-xs md:text-sm font-medium tracking-wide">
              <span className="hidden sm:inline">Entertainment × Innovation × Impact</span>
              <span className="sm:hidden">Innovation × Impact</span>
            </div>
          </AnimatedElement>

          {/* Responsive Title */}
          <AnimatedElement
            animation="none"
            className="mb-6 md:mb-8"
          >
            <h1 
              ref={heroTitleRef}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent mb-6 md:mb-8 tracking-tight leading-[0.9] px-2"
              style={{ 
                fontFamily: 'var(--font-orbitron)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
              }}
            >
              {/* Text will be populated by animation or directly */}
            </h1>
          </AnimatedElement>

          {/* Mobile-Optimized Subtitle */}
          <AnimatedElement
            animation="none"
            className="mb-12 md:mb-16"
          >
            <p 
              ref={heroSubtitleRef}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-100/60 font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-4"
              style={{ fontWeight: 300 }}
            >
              {/* Text will be populated by animation or directly */}
            </p>
          </AnimatedElement>

          {/* Mobile-First CTA Buttons */}
          <AnimatedElement
            animation="cinematic"
            direction="up"
            delay={0.6}
            duration={DURATION.fast}
            className="flex flex-col gap-4 justify-center items-center mb-16 md:mb-24 px-4"
          >
            <Button
              data-cta="call"
              onClick={() => handleCtaClick('call')}
              className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 md:px-8 py-4 md:py-4 text-sm md:text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150 w-full max-w-xs md:max-w-none md:min-w-[220px]"
            >
              <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                <Phone className="w-4 h-4" />
                <div className="flex flex-col items-center">
                  <span>Give us a call</span>
                  <span className="text-xs opacity-70 font-normal">(404) 823-3384</span>
                </div>
              </div>
            </Button>

            <Link href="/about" className="w-full max-w-xs md:max-w-none">
              <Button
                className="group relative overflow-hidden bg-transparent border border-green-400/30 text-green-300/90 hover:text-white hover:border-green-400/50 px-6 md:px-8 py-4 md:py-4 text-sm md:text-base font-medium rounded-xl transition-all duration-150 w-full md:min-w-[220px]"
              >
                <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  <Globe className="w-4 h-4" />
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
                </div>
              </Button>
            </Link>
          </AnimatedElement>

          {/* Mobile-Responsive Stats */}
          <AnimatedElement
            animation="slide"
            direction="up"
            delay={0.8}
            duration={DURATION.fast}
            stagger={STAGGER.small}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto px-4"
          >
            <div className="group text-center">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <div 
                  ref={(el) => { statsRefs.current[0] = el }}
                  className="text-2xl md:text-3xl lg:text-4xl font-light text-white group-hover:text-green-300 transition-colors duration-150"
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  2025
                </div>
              </div>
              <div className="text-green-100/40 font-normal text-xs md:text-sm tracking-wide uppercase">Strategic Vision</div>
            </div>

            <div className="group text-center">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <div 
                  ref={(el) => { statsRefs.current[1] = el }}
                  className="text-2xl md:text-3xl lg:text-4xl font-light text-white group-hover:text-green-300 transition-colors duration-150"
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  $0
                </div>
              </div>
              <div className="text-green-100/40 font-normal text-xs md:text-sm tracking-wide uppercase">Target Revenue</div>
            </div>

            <div className="group text-center">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <div 
                  ref={(el) => { statsRefs.current[2] = el }}
                  className="text-2xl md:text-3xl lg:text-4xl font-light text-white group-hover:text-green-300 transition-colors duration-150"
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  0
                </div>
              </div>
              <div className="text-green-100/40 font-normal text-xs md:text-sm tracking-wide uppercase">Core Divisions</div>
            </div>
          </AnimatedElement>
        </div>

        {/* Mobile-Optimized Scroll Indicator */}
        <AnimatedElement
          animation="fade"
          delay={1}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 md:gap-3 text-green-300/40">
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
            <span className="text-xs font-light tracking-widest uppercase hidden md:block">Scroll</span>
          </div>
        </AnimatedElement>
      </section>

      {/* Mobile-Optimized Divisions */}
      <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <AnimatedElement
            animation="cinematic"
            direction="up"
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4 md:mb-6 tracking-tight px-4" style={{ fontFamily: 'var(--font-orbitron)' }}>
              Our <span className="text-green-300">Divisions</span>
            </h2>
            <p className="text-base md:text-lg text-green-100/50 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Three interconnected pillars driving transformational change
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* TRON Studios - Mobile Optimized */}
            <AnimatedElement
              animation="cinematic"
              direction="up"
              delay={0.1}
              hover="liquid"
              className="group relative md:col-span-2 lg:col-span-1"
            >
              <Link href="/studios">
                <div className="relative h-[320px] md:h-[400px] bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-green-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04]">
                  
                  <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-green-500/30 transition-colors duration-150">
                        <Film className="w-5 h-5 md:w-6 md:h-6 text-green-300" />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-light text-white mb-3 md:mb-4 tracking-tight">
                        TRON Studios
                      </h3>
                      
                      <p className="text-green-100/60 mb-6 md:mb-8 leading-relaxed font-light text-sm md:text-base">
                        Revolutionary film production pushing the boundaries of storytelling and visual innovation.
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-green-300/70 group-hover:text-green-300 transition-colors duration-150">
                      <span className="text-sm font-medium">Explore Studios</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedElement>

            {/* TRON Ventures - Mobile Optimized */}
            <AnimatedElement
              animation="cinematic"
              direction="up"
              delay={0.2}
              hover="liquid"
              className="group relative"
            >
              <Link href="/ventures">
                <div className="relative h-[320px] md:h-[400px] bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04]">
                  
                  <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-amber-500/30 transition-colors duration-150">
                        <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-amber-300" />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-light text-white mb-3 md:mb-4 tracking-tight">
                        TRON Ventures
                      </h3>
                      
                      <p className="text-amber-100/60 mb-6 md:mb-8 leading-relaxed font-light text-sm md:text-base">
                        Strategic angel investment in groundbreaking startups, funding the future of innovation.
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-amber-300/70 group-hover:text-amber-300 transition-colors duration-150">
                      <span className="text-sm font-medium">Explore Ventures</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedElement>

            {/* TRON Impact - Mobile Optimized */}
            <AnimatedElement
              animation="cinematic"
              direction="up"
              delay={0.3}
              hover="liquid"
              className="group relative"
            >
              <Link href="/impact">
                <div className="relative h-[320px] md:h-[400px] bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04]">
                  
                  <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-500/30 transition-colors duration-150">
                        <Heart className="w-5 h-5 md:w-6 md:h-6 text-cyan-300" />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-light text-white mb-3 md:mb-4 tracking-tight">
                        TRON Impact
                      </h3>
                      
                      <p className="text-cyan-100/60 mb-6 md:mb-8 leading-relaxed font-light text-sm md:text-base">
                        Philanthropic initiatives creating lasting positive change in communities worldwide.
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-cyan-300/70 group-hover:text-cyan-300 transition-colors duration-150">
                      <span className="text-sm font-medium">Explore Impact</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedElement>

          </div>
        </div>
      </section>

      {/* Mobile-Optimized Final CTA */}
      <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <AnimatedElement
            animation="cinematic"
            direction="up"
            className="mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 md:mb-6 tracking-tight px-4" style={{ fontFamily: 'var(--font-orbitron)' }}>
              Ready to <span className="text-green-300">Transform</span> the Future?
            </h2>
            <p className="text-base md:text-lg text-green-100/50 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Join us in creating revolutionary entertainment, funding breakthrough innovations, and making a lasting impact.
            </p>
          </AnimatedElement>

          <AnimatedElement
            animation="cinematic"
            direction="up"
            delay={0.2}
            hover="magnetic"
            className="inline-block w-full max-w-md mx-auto"
          >
            <Button
              onClick={() => handleCtaClick('call')}
              className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-medium rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-150 w-full"
            >
              <div className="relative z-10 flex items-center justify-center gap-3 md:gap-4">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <div className="flex flex-col items-center">
                  <span>Let&apos;s Create Together</span>
                  <span className="text-xs md:text-sm opacity-70 font-normal">(404) 823-3384</span>
                </div>
              </div>
            </Button>
          </AnimatedElement>

        </div>
      </section>

    </div>
  )
}

