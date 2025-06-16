"use client"

import { useRef, Suspense, lazy } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Globe, Phone, Heart, Film, Briefcase, ArrowRight, ChevronDown } from 'lucide-react'

// Lazy load heavy components
const MeteorBackground = lazy(() => import('@/components/meteor-background'))

// Minimal animations - no blocking JavaScript
const useSimpleAnimations = () => {
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null)
  
  // No JavaScript animations to avoid blocking main thread
  // All content is immediately visible for optimal LCP
  
  return { heroTitleRef, heroSubtitleRef }
}

export default function HomePage() {
  const { heroTitleRef, heroSubtitleRef } = useSimpleAnimations()

  const handleCtaClick = (type: 'call' | 'learn') => {
    if (type === 'call') {
      window.location.href = 'tel:+14048233384'
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20">
      {/* Lazy load meteor background only on desktop */}
      <Suspense fallback={null}>
        {typeof window !== 'undefined' && window.innerWidth >= 768 && <MeteorBackground />}
      </Suspense>
      
      {/* Hero Section - Performance Optimized */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Simplified ambient lighting */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-green-500/2 md:bg-green-500/4 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-emerald-500/2 md:bg-emerald-500/4 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          {/* Simple Badge */}
          <div className="mb-8 md:mb-12 opacity-0 animate-fade-in">
            <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-green-200/80 text-xs md:text-sm font-medium tracking-wide">
              <span className="hidden sm:inline">Entertainment × Innovation × Impact</span>
              <span className="sm:hidden">Innovation × Impact</span>
            </div>
          </div>

          {/* Optimized Title */}
          <div className="mb-6 md:mb-8">
            <h1 
              ref={heroTitleRef}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent mb-6 md:mb-8 tracking-tight leading-[0.9] px-2"
              style={{ 
                fontFamily: 'var(--font-orbitron), -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                opacity: 1,
              }}
            >
              TRON DYNAMICS
            </h1>
          </div>

          {/* Optimized Subtitle - LCP Element */}
          <div className="mb-12 md:mb-16">
            <p 
              ref={heroSubtitleRef}
              className="lcp-text text-base sm:text-lg md:text-xl lg:text-2xl text-green-100/60 font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-4"
              style={{ fontWeight: 300, opacity: 1 }}
            >
              Where Innovation Meets Impact
            </p>
          </div>

          {/* Optimized CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center mb-16 md:mb-24 px-4 opacity-0 animate-fade-in-delayed">
            <Button
              onClick={() => handleCtaClick('call')}
              className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 md:px-8 py-4 text-sm md:text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-200 w-full max-w-xs md:max-w-none md:min-w-[220px]"
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
                className="group relative overflow-hidden bg-transparent border border-green-400/30 text-green-300/90 hover:text-white hover:border-green-400/50 px-6 md:px-8 py-4 text-sm md:text-base font-medium rounded-xl transition-all duration-200 w-full md:min-w-[220px]"
              >
                <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  <Globe className="w-4 h-4" />
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
                </div>
              </Button>
            </Link>
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto px-4 opacity-0 animate-fade-in-stats">
            <div className="group text-center">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <div className="text-2xl md:text-3xl lg:text-4xl font-light text-white group-hover:text-green-300 transition-colors duration-150"
                     style={{ fontFamily: 'var(--font-orbitron), monospace' }}>
                  2025
                </div>
              </div>
              <div className="text-green-100/40 font-normal text-xs md:text-sm tracking-wide uppercase">Strategic Vision</div>
            </div>

            <div className="group text-center">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <div className="text-2xl md:text-3xl lg:text-4xl font-light text-white group-hover:text-green-300 transition-colors duration-150"
                     style={{ fontFamily: 'var(--font-orbitron), monospace' }}>
                  $2M+
                </div>
              </div>
              <div className="text-green-100/40 font-normal text-xs md:text-sm tracking-wide uppercase">Target Revenue</div>
            </div>

            <div className="group text-center">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <div className="text-2xl md:text-3xl lg:text-4xl font-light text-white group-hover:text-green-300 transition-colors duration-150"
                     style={{ fontFamily: 'var(--font-orbitron), monospace' }}>
                  3
                </div>
              </div>
              <div className="text-green-100/40 font-normal text-xs md:text-sm tracking-wide uppercase">Core Divisions</div>
            </div>
          </div>
        </div>

        {/* Simple Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-scroll">
          <div className="flex flex-col items-center gap-2 md:gap-3 text-green-300/40">
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
            <span className="text-xs font-light tracking-widest uppercase hidden md:block">Scroll</span>
          </div>
        </div>
      </section>

      {/* Lightweight Divisions Section */}
      <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4 md:mb-6 tracking-tight px-4" 
                style={{ fontFamily: 'var(--font-orbitron), -apple-system, sans-serif' }}>
              Our <span className="text-green-300">Divisions</span>
            </h2>
            <p className="text-base md:text-lg text-green-100/50 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Three interconnected pillars driving transformational change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* TRON Studios */}
            <Link href="/studios" className="group relative md:col-span-2 lg:col-span-1">
              <div className="relative h-[320px] md:h-[400px] bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-green-400/20 overflow-hidden transition-all duration-200 hover:bg-white/[0.04]">
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

            {/* TRON Ventures */}
            <Link href="/ventures" className="group relative">
              <div className="relative h-[320px] md:h-[400px] bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-400/20 overflow-hidden transition-all duration-200 hover:bg-white/[0.04]">
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

            {/* TRON Impact */}
            <Link href="/impact" className="group relative">
              <div className="relative h-[320px] md:h-[400px] bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-400/20 overflow-hidden transition-all duration-200 hover:bg-white/[0.04]">
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

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 md:mb-6 tracking-tight px-4" 
                style={{ fontFamily: 'var(--font-orbitron), -apple-system, sans-serif' }}>
              Ready to <span className="text-green-300">Transform</span> the Future?
            </h2>
            <p className="text-base md:text-lg text-green-100/50 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Join us in creating revolutionary entertainment, funding breakthrough innovations, and making a lasting impact.
            </p>
          </div>

          <div className="inline-block w-full max-w-md mx-auto">
            <Button
              onClick={() => handleCtaClick('call')}
              className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-medium rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-200 w-full"
            >
              <div className="relative z-10 flex items-center justify-center gap-3 md:gap-4">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <div className="flex flex-col items-center">
                  <span>Let&apos;s Create Together</span>
                  <span className="text-xs md:text-sm opacity-70 font-normal">(404) 823-3384</span>
                </div>
              </div>
            </Button>
          </div>

        </div>
      </section>

    </div>
  )
}

