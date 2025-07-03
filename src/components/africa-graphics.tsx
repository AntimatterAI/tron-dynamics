"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Rocket, Users, Heart, Brain, Building, Code, Palette, Zap, Globe, Target, ArrowRight, Sparkles, TrendingUp, MapPin } from 'lucide-react'
import Africa from '@react-map/africa'
// import { AnimatedCounter } from './enhanced-graphics'

// Client-side check to prevent SSR issues
const isClient = typeof window !== 'undefined'

// Modern African Continent Component with PROPER coordinates
const AfricaContinent = ({ className = "", showConnectionLines = false, animated = true, showCities = true }: { 
  className?: string, 
  showConnectionLines?: boolean, 
  animated?: boolean,
  showCities?: boolean 
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    if (isClient) {
      const timer = setTimeout(() => setIsVisible(true), 200)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!mounted || !isClient) {
    return (
      <div className={`relative ${className}`}>
        <div className="w-full h-80 bg-gradient-to-br from-emerald-500/5 to-emerald-600/10 rounded-3xl flex items-center justify-center border border-emerald-400/20">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-300 text-sm font-medium">Loading Africa</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={`relative ${className} ${animated ? 'transition-all duration-1000 ease-out' : ''} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="relative bg-gradient-to-br from-slate-900/40 to-slate-800/20 rounded-3xl p-8 border border-slate-700/30 backdrop-blur-xl overflow-hidden">
        {/* Modern background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/3 via-transparent to-blue-500/3" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
        
        {/* Enhanced Africa Map Container */}
        <div className="relative">
          {/* Decorative header */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center z-10">
            <Sparkles className="w-3 h-3 text-emerald-400" />
          </div>
          
          {/* Professional Africa Map */}
          <div className="relative">
            <Africa
              type="select-multiple"
              size={600}
              mapColor="rgba(16, 185, 129, 0.12)"
              strokeColor="rgba(16, 185, 129, 0.6)"
              strokeWidth={1.5}
              hoverColor="rgba(16, 185, 129, 0.2)"
              selectColor="rgba(16, 185, 129, 0.3)"
              hints={false}
              onSelect={() => {}}
            />
            
            {/* FIXED: Major African cities with PROPER positioning */}
            {showCities && (
              <div className="absolute inset-0 pointer-events-none">
                {/* Lagos, Nigeria - POSITIONED ON VISIBLE GREEN CONTINENT */}
                <div className="absolute" style={{ top: '45%', left: '58%' }}>
                  <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg animate-pulse" />
                  <div className="absolute -top-8 -left-8 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-white opacity-0 hover:opacity-100 transition-opacity">
                    Lagos
                  </div>
                </div>
                
                {/* Cairo, Egypt - POSITIONED ON VISIBLE GREEN CONTINENT */}
                <div className="absolute" style={{ top: '25%', left: '68%' }}>
                  <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="absolute -top-8 -left-8 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-white opacity-0 hover:opacity-100 transition-opacity">
                    Cairo
                  </div>
                </div>
                
                {/* Kinshasa, DR Congo - POSITIONED ON VISIBLE GREEN CONTINENT */}
                <div className="absolute" style={{ top: '55%', left: '62%' }}>
                  <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <div className="absolute -top-8 -left-12 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-white opacity-0 hover:opacity-100 transition-opacity">
                    Kinshasa
                  </div>
                </div>
                
                {/* Johannesburg, South Africa - POSITIONED ON VISIBLE GREEN CONTINENT */}
                <div className="absolute" style={{ top: '78%', left: '64%' }}>
                  <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.6s' }} />
                  <div className="absolute -top-8 -left-16 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-white opacity-0 hover:opacity-100 transition-opacity">
                    Johannesburg
                  </div>
                </div>
                
                {/* Nairobi, Kenya - POSITIONED ON VISIBLE GREEN CONTINENT */}
                <div className="absolute" style={{ top: '50%', left: '72%' }}>
                  <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.8s' }} />
                  <div className="absolute -top-8 -left-10 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-white opacity-0 hover:opacity-100 transition-opacity">
                    Nairobi
                  </div>
                </div>
              </div>
            )}
            
            {/* Professional connection lines */}
            {showConnectionLines && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600">
                <defs>
                  <linearGradient id="modernConnectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
                  </linearGradient>
                </defs>
                
                {/* Subtle connection arcs */}
                <path 
                  d="M 168 312 Q 300 250 348 348" 
                  stroke="url(#modernConnectionGradient)" 
                  strokeWidth="1.5" 
                  fill="none" 
                  opacity="0.6"
                  strokeDasharray="3,3"
                  className="animate-pulse"
                />
                <path 
                  d="M 348 168 Q 450 250 384 360" 
                  stroke="url(#modernConnectionGradient)" 
                  strokeWidth="1.5" 
                  fill="none" 
                  opacity="0.6"
                  strokeDasharray="3,3"
                  className="animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
                <path 
                  d="M 276 348 Q 350 400 312 468" 
                  stroke="url(#modernConnectionGradient)" 
                  strokeWidth="1.5" 
                  fill="none" 
                  opacity="0.6"
                  strokeDasharray="3,3"
                  className="animate-pulse"
                  style={{ animationDelay: '1s' }}
                />
              </svg>
            )}
          </div>
          
          {/* Modern stats overlay */}
          <div className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 backdrop-blur-xl rounded-2xl p-4 border border-emerald-400/20">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-emerald-300 font-medium text-sm">12 Countries</div>
                <div className="text-white/60 text-xs">Active markets</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  )
}

// Professional Service Showcase Component
const ServiceShowcase = ({ title, description, icon, theme = "emerald" }: {
  title: string
  description: string
  icon: React.ReactNode
  theme?: "emerald" | "blue" | "orange" | "purple"
}) => {
  const themeConfig = {
    emerald: {
      bg: "from-emerald-500/8 to-emerald-600/4",
      border: "border-emerald-400/20",
      text: "text-emerald-300",
      icon: "bg-emerald-500/15 text-emerald-400",
      glow: "shadow-emerald-500/20"
    },
    blue: {
      bg: "from-blue-500/8 to-blue-600/4",
      border: "border-blue-400/20",
      text: "text-blue-300",
      icon: "bg-blue-500/15 text-blue-400",
      glow: "shadow-blue-500/20"
    },
    orange: {
      bg: "from-orange-500/8 to-orange-600/4",
      border: "border-orange-400/20",
      text: "text-orange-300",
      icon: "bg-orange-500/15 text-orange-400",
      glow: "shadow-orange-500/20"
    },
    purple: {
      bg: "from-purple-500/8 to-purple-600/4",
      border: "border-purple-400/20",
      text: "text-purple-300",
      icon: "bg-purple-500/15 text-purple-400",
      glow: "shadow-purple-500/20"
    }
  }

  const config = themeConfig[theme]

  return (
    <div className={`relative p-8 backdrop-blur-xl rounded-3xl border bg-gradient-to-br ${config.bg} ${config.border} ${config.glow} shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-500`}>
      {/* Modern header line */}
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent ${config.text} opacity-30`} />
      
      {/* Floating accent dots */}
      <div className="absolute top-6 right-6 w-2 h-2 bg-current rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-10 right-10 w-1 h-1 bg-current rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl ${config.icon} flex items-center justify-center shadow-lg`}>
            {icon}
          </div>
          <h3 className={`text-2xl font-light tracking-tight ${config.text}`} style={{ fontFamily: 'var(--font-orbitron)' }}>
            {title}
          </h3>
        </div>
        
        <p className="text-white/70 font-light leading-relaxed text-lg">
          {description}
        </p>
        
        {/* Professional CTA */}
        <div className="mt-8 flex items-center gap-3 text-white/60 hover:text-white transition-colors group-hover:text-white">
          <span className="text-sm font-medium">Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
      
      {/* Subtle hover glow */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${config.glow}`} />
    </div>
  )
}

// Modern Impact Visualization Component
const ImpactVisualization = () => {
  const [animatedValues, setAnimatedValues] = useState({
    portfolio: 0,
    countries: 0,
    lives: 0,
    partnerships: 0
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        portfolio: 8,
        countries: 12,
        lives: 15000,
        partnerships: 6
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const metrics = [
    { 
      value: animatedValues.portfolio, 
      suffix: 'M', 
      label: 'Portfolio Value', 
      sublabel: 'USD invested',
      color: 'emerald',
      icon: <TrendingUp className="w-5 h-5" />
    },
    { 
      value: animatedValues.countries, 
      suffix: '', 
      label: 'Countries', 
      sublabel: 'Market presence',
      color: 'blue',
      icon: <Globe className="w-5 h-5" />
    },
    { 
      value: animatedValues.lives, 
      suffix: '+', 
      label: 'People Reached', 
      sublabel: 'Through our solutions',
      color: 'orange',
      icon: <Heart className="w-5 h-5" />
    },
    { 
      value: animatedValues.partnerships, 
      suffix: '+', 
      label: 'Global Partners', 
      sublabel: 'Strategic alliances',
      color: 'purple',
      icon: <Users className="w-5 h-5" />
    }
  ]

  return (
    <div className="relative py-24">
      {/* Professional hero section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500/10 rounded-full border border-emerald-400/20 mb-8">
          <Sparkles className="w-5 h-5 text-emerald-400" />
          <span className="text-emerald-300 font-medium">Impact Across Africa</span>
        </div>
        
        <h2 className="text-5xl font-light text-white mb-8 tracking-tight" style={{ fontFamily: 'var(--font-orbitron)' }}>
          Building <span className="text-emerald-300">Africa&apos;s</span> Future
        </h2>
        <p className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
          Building strategic partnerships to connect innovation and investment across African markets
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Enhanced Africa Map */}
        <div className="relative">
          <AfricaContinent 
            showConnectionLines={true} 
            animated={true} 
            showCities={true}
            className="transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Professional Impact Metrics */}
        <div className="grid grid-cols-2 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center group hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle background glow */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                metric.color === 'emerald' ? 'bg-emerald-500/5' :
                metric.color === 'blue' ? 'bg-blue-500/5' :
                metric.color === 'orange' ? 'bg-orange-500/5' :
                'bg-purple-500/5'
              }`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                  metric.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                  metric.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                  metric.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {metric.icon}
                </div>
                
                <div className={`text-4xl font-light mb-2 ${
                  metric.color === 'emerald' ? 'text-emerald-300' :
                  metric.color === 'blue' ? 'text-blue-300' :
                  metric.color === 'orange' ? 'text-orange-300' :
                  'text-purple-300'
                }`}>
                  {metric.value.toLocaleString()}{metric.suffix}
                </div>
                
                <div className="text-white font-medium mb-1">{metric.label}</div>
                <div className="text-white/50 text-sm">{metric.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Modern Call to Action Component
const CallToActionGraphics = () => {
  const capabilities = [
    { 
      icon: <Brain className="w-7 h-7" />, 
      title: "AI & Machine Learning", 
      description: "Developing intelligent systems for healthcare, education, and fintech applications",
      color: "emerald"
    },
    { 
      icon: <Rocket className="w-7 h-7" />, 
      title: "Venture Capital", 
      description: "Strategic investment in early-stage companies with strong growth potential",
      color: "blue"
    },
    { 
      icon: <Building className="w-7 h-7" />, 
      title: "Digital Infrastructure", 
      description: "Building scalable technology platforms and digital solutions",
      color: "orange"
    },
    { 
      icon: <Users className="w-7 h-7" />, 
      title: "Ecosystem Development", 
      description: "Connecting entrepreneurs, investors, and innovators through our network",
      color: "purple"
    },
    { 
      icon: <Code className="w-7 h-7" />, 
      title: "Technology Solutions", 
      description: "Custom development and digital transformation solutions",
      color: "emerald"
    },
    { 
      icon: <Palette className="w-7 h-7" />, 
      title: "Creative Excellence", 
      description: "Professional design and creative services for modern businesses",
      color: "blue"
    }
  ]

  return (
    <div className="relative py-24">
      {/* Professional hero section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full border border-emerald-400/20 mb-8">
          <Zap className="w-5 h-5 text-emerald-400" />
          <span className="text-emerald-300 font-medium">What We Build</span>
        </div>
        
        <h2 className="text-6xl font-light text-white mb-8 tracking-tight" style={{ fontFamily: 'var(--font-orbitron)' }}>
          Transforming <span className="text-emerald-300">Africa</span>
        </h2>
        <p className="text-2xl text-white/60 max-w-4xl mx-auto font-light leading-relaxed">
          We work across key African markets, building infrastructure, companies, and solutions for tomorrow
        </p>
      </div>

      {/* Professional capabilities grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {capabilities.map((capability, index) => (
          <div 
            key={index} 
            className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl rounded-3xl border border-white/10 p-8 text-center group hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
          >
            {/* Subtle glow effect */}
            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              capability.color === 'emerald' ? 'bg-emerald-500/5' :
              capability.color === 'blue' ? 'bg-blue-500/5' :
              capability.color === 'orange' ? 'bg-orange-500/5' :
              'bg-purple-500/5'
            }`} />
            
            <div className="relative z-10">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                capability.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30' :
                capability.color === 'blue' ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30' :
                capability.color === 'orange' ? 'bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30' :
                'bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30'
              }`}>
                {capability.icon}
              </div>
              
              <h3 className="text-xl font-medium text-white mb-4">{capability.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">{capability.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Professional showcase section */}
      <div className="relative bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl p-16 border border-emerald-400/20 backdrop-blur-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <h3 className="text-4xl font-light text-white mb-8 tracking-tight" style={{ fontFamily: 'var(--font-orbitron)' }}>
              <span className="text-emerald-300">Let&apos;s</span> Build Together
            </h3>
            <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
              We&apos;re building a network of companies and solutions that create value, connecting talent with opportunities and transforming ideas into practical results.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-6 py-3 bg-emerald-500/20 rounded-full border border-emerald-400/20">
                <Target className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Innovation</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-orange-500/20 rounded-full border border-orange-400/20">
                <TrendingUp className="w-4 h-4 text-orange-400" />
                <span className="text-orange-300 font-medium">Investment</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 rounded-full border border-blue-400/20">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 font-medium">Global Impact</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-white font-medium">Join Our Network</div>
                <div className="text-white/60 text-sm">Connect with our ecosystem</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <AfricaContinent 
              showConnectionLines={true} 
              animated={true} 
              showCities={true}
              className="transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Export all components
export { AfricaContinent, ServiceShowcase, ImpactVisualization, CallToActionGraphics } 