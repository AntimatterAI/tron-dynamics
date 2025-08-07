"use client"

import { useRef, Suspense, lazy } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Globe, Phone, Heart, Briefcase, ArrowRight, ChevronDown, Code, Palette, Shield } from 'lucide-react'
import { CallToActionGraphics, ImpactVisualization } from '@/components/africa-graphics'
import { HeroGraphics, EnhancedCard } from '@/components/hero-graphics'

// Lazy load simple effects
const SimpleHeroEffects = lazy(() => import('@/components/simple-hero-effects'))

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
      window.location.href = 'tel:+14049394238'
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20">
      {/* Enhanced Hero Graphics with GSAP */}
      <HeroGraphics />
      
      {/* Simple Hero Effects */}
      <Suspense fallback={null}>
        <SimpleHeroEffects variant="home" />
      </Suspense>
      
      {/* Hero Section - Performance Optimized */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 z-10">

        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          {/* Simple Badge */}
          <div className="mb-8 md:mb-12 opacity-0 animate-fade-in">
            <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-gray-300/80 text-xs md:text-sm font-medium tracking-wide">
              <span className="hidden sm:inline">Entertainment × Innovation × Impact</span>
              <span className="sm:hidden">Innovation × Impact</span>
            </div>
          </div>

          {/* Optimized Title */}
          <div className="mb-6 md:mb-8">
            <h1 
              ref={heroTitleRef}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light bg-gradient-to-r from-white via-red-400 to-green-400 bg-clip-text text-transparent mb-6 md:mb-8 tracking-tight leading-[0.95] px-4"
              style={{ 
                fontFamily: 'var(--font-orbitron), -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                opacity: 1,
                background: 'linear-gradient(135deg, #E53E3E, #FF6B35, #00FF87)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              Where Innovation Meets Impact
            </h1>
          </div>

          {/* Optimized Subtitle - LCP Element */}
          <div className="mb-8 md:mb-12">
            <p 
              ref={heroSubtitleRef}
              className="lcp-text text-sm sm:text-base md:text-lg lg:text-xl text-gray-300/80 font-light tracking-wide max-w-2xl mx-auto leading-relaxed px-6"
              style={{ fontWeight: 300, opacity: 1 }}
            >
              Amplifying nomadic voices and fostering groundbreaking solutions that eradicate global challenges.
            </p>
          </div>

          {/* Optimized CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 md:mb-20 px-6 opacity-0 animate-fade-in-delayed">
            <Link href="/about" className="w-full sm:w-auto">
              <Button
                className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3 sm:py-4 text-sm font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-200 w-full sm:w-auto min-w-[200px]"
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
                </div>
              </Button>
            </Link>

            <Link href="/get-started" className="w-full sm:w-auto">
              <Button
                className="group relative overflow-hidden bg-transparent border border-emerald-400/40 text-emerald-300/90 hover:text-white hover:border-emerald-400/60 px-6 py-3 sm:py-4 text-sm font-medium rounded-xl transition-all duration-200 w-full sm:w-auto min-w-[200px]"
                style={{ borderColor: 'rgba(0, 255, 135, 0.4)', color: 'rgba(0, 255, 135, 0.9)' }}
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>Invest in the Future</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
                </div>
              </Button>
            </Link>
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
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* <FloatingParticles count={20} speed="medium" /> */}
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-3 md:mb-4 tracking-tight px-6" 
                style={{ fontFamily: 'var(--font-orbitron), -apple-system, sans-serif' }}>
              Driving Growth Through <span style={{ color: '#00FF87' }}>Innovation, Ventures & Storytelling</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300/60 max-w-4xl mx-auto font-light leading-relaxed px-6">
              TRON DYNAMIC is a forward‑thinking platform merging innovation, investment and storytelling to address global challenges. Through interconnected ventures, a studio and consulting initiatives, we empower underrepresented voices, scale groundbreaking startups, and produce narratives that inspire change.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            
            {/* Portfolio Companies */}
            <Link href="/portfolio" className="group relative">
              <EnhancedCard className="h-[280px] sm:h-[320px] md:h-[380px]" glowColor="orange">
                <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-150" style={{ backgroundColor: 'rgba(255, 107, 53, 0.2)' }}>
                      <Briefcase className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#FF6B35' }} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-white mb-3 md:mb-4 tracking-tight">
                      TRON Ventures
                    </h3>
                    <p className="text-gray-300/60 mb-6 md:mb-8 leading-relaxed font-light text-sm md:text-base">
                      Bridging the wealth and innovation gap by investing in startups led by underrepresented founders. Portfolio includes AI-powered medical documentation, cybersecurity governance, and EdTech platforms.
                    </p>
                  </div>
                  <div className="flex items-center justify-between transition-colors duration-150" style={{ color: 'rgba(255, 107, 53, 0.7)' }}>
                    <span className="text-sm font-medium">View Portfolio</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                  </div>
                </div>
              </EnhancedCard>
            </Link>

            {/* TRON Innovation */}
            <Link href="/innovation" className="group relative">
              <EnhancedCard className="h-[280px] sm:h-[320px] md:h-[380px]" glowColor="blue">
                <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-150" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}>
                      <Globe className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#3B82F6' }} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-white mb-3 md:mb-4 tracking-tight">
                      TRON Innovation
                    </h3>
                    <p className="text-gray-300/60 mb-6 md:mb-8 leading-relaxed font-light text-sm md:text-base">
                      Transforms bold ideas into market‑ready solutions. Our innovation lab has delivered 25+ apps, amassed 500K+ active users, and maintains a 95% success rate across 12 countries.
                    </p>
                  </div>
                  <div className="flex items-center justify-between transition-colors duration-150" style={{ color: 'rgba(59, 130, 246, 0.7)' }}>
                    <span className="text-sm font-medium">Explore Innovation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                  </div>
                </div>
              </EnhancedCard>
            </Link>

            {/* TRON Business & Development */}
            <Link href="/business-development" className="group relative">
              <EnhancedCard className="h-[280px] sm:h-[320px] md:h-[380px]" glowColor="emerald">
                <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-150" style={{ backgroundColor: 'rgba(0, 255, 135, 0.2)' }}>
                      <Heart className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#00FF87' }} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-white mb-3 md:mb-4 tracking-tight">
                      Business Consulting
                    </h3>
                    <p className="text-gray-300/60 mb-6 md:mb-8 leading-relaxed font-light text-sm md:text-base">
                      Connects visionary entrepreneurs with capital, partnerships and strategies to expand worldwide. $25M+ capital raised, 150+ partnerships, 93% funding success rate across 20+ countries.
                    </p>
                  </div>
                  <div className="flex items-center justify-between transition-colors duration-150" style={{ color: 'rgba(0, 255, 135, 0.7)' }}>
                    <span className="text-sm font-medium">Explore Services</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                  </div>
                </div>
              </EnhancedCard>
            </Link>

          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-blue-950/10 to-purple-950/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-3 md:mb-4 tracking-tight px-6" 
                style={{ fontFamily: 'var(--font-orbitron), -apple-system, sans-serif' }}>
              Our <span style={{ color: '#3B82F6' }}>Capabilities</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300/60 max-w-2xl mx-auto font-light leading-relaxed px-6">
              Comprehensive technology solutions spanning development, design, marketing, and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            
            {/* Web, Mobile & AI Development */}
            <Link href="/capabilities" className="group relative">
              <EnhancedCard className="h-[280px] sm:h-[320px] md:h-[380px]" glowColor="blue">
                <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-150" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}>
                      <Code className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#3B82F6' }} />
                    </div>
                    <h3 className="text-lg md:text-xl font-light text-white mb-3 md:mb-4 tracking-tight">
                      Web, Mobile & AI Development
                    </h3>
                    <p className="text-gray-300/60 mb-6 md:mb-8 leading-relaxed font-light text-sm md:text-base">
                      Custom applications, AI-powered systems, and scalable platforms built with cutting-edge technology.
                    </p>
                  </div>
                  <div className="flex items-center justify-between transition-colors duration-150" style={{ color: 'rgba(59, 130, 246, 0.7)' }}>
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                  </div>
                </div>
              </EnhancedCard>
            </Link>

            {/* Design & Marketing */}
            <Link href="/capabilities" className="group relative">
              <EnhancedCard className="h-[280px] sm:h-[320px] md:h-[380px]" glowColor="orange">
                <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-150" style={{ backgroundColor: 'rgba(255, 107, 53, 0.2)' }}>
                      <Palette className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#FF6B35' }} />
                    </div>
                    <h3 className="text-lg md:text-xl font-light text-white mb-3 md:mb-4 tracking-tight">
                      Design & Marketing
                    </h3>
                    <p className="text-gray-300/60 mb-6 md:mb-8 leading-relaxed font-light text-sm md:text-base">
                      Afro-futurist design, brand strategy, and data-driven marketing campaigns that resonate globally.
                    </p>
                  </div>
                  <div className="flex items-center justify-between transition-colors duration-150" style={{ color: 'rgba(255, 107, 53, 0.7)' }}>
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                  </div>
                </div>
              </EnhancedCard>
            </Link>

            {/* Cybersecurity & Compliance */}
            <Link href="/capabilities" className="group relative">
              <EnhancedCard className="h-[280px] sm:h-[320px] md:h-[380px]" glowColor="emerald">
                <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-150" style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)' }}>
                      <Shield className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#10B981' }} />
                    </div>
                    <h3 className="text-lg md:text-xl font-light text-white mb-3 md:mb-4 tracking-tight">
                      Cybersecurity & Compliance
                    </h3>
                    <p className="text-gray-300/60 mb-6 md:mb-8 leading-relaxed font-light text-sm md:text-base">
                      Comprehensive security frameworks and compliance solutions for African businesses.
                    </p>
                  </div>
                  <div className="flex items-center justify-between transition-colors duration-150" style={{ color: 'rgba(16, 185, 129, 0.7)' }}>
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                  </div>
                </div>
              </EnhancedCard>
            </Link>

          </div>
        </div>
      </section>

      {/* Impact Visualization */}
      <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ImpactVisualization />
        </div>
      </section>

      {/* What We Can Build Together */}
      <CallToActionGraphics />

      {/* Final CTA */}
      <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 md:mb-6 tracking-tight px-4" 
                style={{ fontFamily: 'var(--font-orbitron), -apple-system, sans-serif' }}>
              Ready to <span style={{ color: '#00FF87' }}>Transform</span> the Future?
            </h2>
            <p className="text-base md:text-lg text-gray-300/60 max-w-2xl mx-auto font-light leading-relaxed px-4">
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
                  <span className="text-xs md:text-sm opacity-70 font-normal">(404) 939-4238</span>
                </div>
              </div>
            </Button>
          </div>

        </div>
      </section>

    </div>
  )
}

