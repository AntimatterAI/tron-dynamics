"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Rocket, Users, Heart, Brain, Building, Code, Palette, Zap, Globe, Target, ArrowRight, Sparkles, TrendingUp, MapPin } from 'lucide-react'
import Africa from '@react-map/africa'
// import { AnimatedCounter } from './enhanced-graphics'

// Client-side check to prevent SSR issues
const isClient = typeof window !== 'undefined'

// Modern African Continent SVG Component with proper coordinate system
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
        <div className="w-full h-64 bg-gradient-to-br from-emerald-500/5 to-emerald-600/10 rounded-2xl flex items-center justify-center border border-emerald-400/20">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-300 text-sm font-medium">Loading Africa</span>
          </div>
        </div>
      </div>
    )
  }

  // Major African cities with SVG coordinates (calculated based on actual Africa map)
  const majorCities = [
    { name: "Lagos", x: 280, y: 400, country: "Nigeria", size: "major" },
    { name: "Cairo", x: 450, y: 200, country: "Egypt", size: "major" },
    { name: "Kinshasa", x: 380, y: 450, country: "DR Congo", size: "major" },
    { name: "Johannesburg", x: 420, y: 620, country: "South Africa", size: "major" },
    { name: "Nairobi", x: 500, y: 470, country: "Kenya", size: "major" },
    { name: "Accra", x: 220, y: 380, country: "Ghana", size: "medium" },
    { name: "Casablanca", x: 200, y: 180, country: "Morocco", size: "medium" },
    { name: "Cape Town", x: 380, y: 680, country: "South Africa", size: "medium" }
  ]

  return (
    <div ref={containerRef} className={`relative ${className} ${animated ? 'transition-all duration-1000 ease-out' : ''} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-xl overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 animate-pulse" />
        
        {/* Modern Africa SVG Container */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
          
          <Africa
            type="select-multiple"
            size={800}
            mapColor="rgba(16, 185, 129, 0.08)"
            strokeColor="rgba(16, 185, 129, 0.4)"
            strokeWidth={1.5}
            hoverColor="rgba(16, 185, 129, 0.15)"
            selectColor="rgba(16, 185, 129, 0.25)"
            hints={false}
            onSelect={() => {}}
          />
          
          {/* Enhanced connection lines overlay */}
          {showConnectionLines && (
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 10 }}
              viewBox="0 0 800 800"
            >
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(16, 185, 129, 0.6)" />
                  <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
                  <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
                </linearGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Dynamic connection lines */}
              <g className="animate-pulse">
                <line x1="280" y1="400" x2="120" y2="200" stroke="url(#connectionGradient)" strokeWidth="2" filter="url(#glow)" opacity="0.7" />
                <line x1="450" y1="200" x2="650" y2="150" stroke="url(#connectionGradient)" strokeWidth="2" filter="url(#glow)" opacity="0.7" />
                <line x1="500" y1="470" x2="720" y2="400" stroke="url(#connectionGradient)" strokeWidth="2" filter="url(#glow)" opacity="0.7" />
                <line x1="380" y1="450" x2="80" y2="500" stroke="url(#connectionGradient)" strokeWidth="2" filter="url(#glow)" opacity="0.7" />
                <line x1="420" y1="620" x2="600" y2="720" stroke="url(#connectionGradient)" strokeWidth="2" filter="url(#glow)" opacity="0.7" />
              </g>
              
              {/* Orbital rings */}
              <circle cx="400" cy="400" r="150" fill="none" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="1" strokeDasharray="5,5" className="animate-spin" style={{ animationDuration: '20s' }} />
              <circle cx="400" cy="400" r="200" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" strokeDasharray="3,7" className="animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
            </svg>
          )}

          {/* Modern city markers */}
          {showCities && (
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 20 }}
              viewBox="0 0 800 800"
            >
              <defs>
                <radialGradient id="cityGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(251, 146, 60, 0.8)" />
                  <stop offset="70%" stopColor="rgba(251, 146, 60, 0.4)" />
                  <stop offset="100%" stopColor="rgba(251, 146, 60, 0)" />
                </radialGradient>
              </defs>
              
              {majorCities.map((city, index) => (
                <g key={city.name} className="group">
                  {/* Pulsing background */}
                  <circle 
                    cx={city.x} 
                    cy={city.y} 
                    r={city.size === 'major' ? 12 : 8}
                    fill="url(#cityGlow)"
                    className="animate-pulse"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                  
                  {/* City dot */}
                  <circle 
                    cx={city.x} 
                    cy={city.y} 
                    r={city.size === 'major' ? 4 : 3}
                    fill="rgba(251, 146, 60, 1)"
                    stroke="rgba(255, 255, 255, 0.8)"
                    strokeWidth="1"
                    className="drop-shadow-lg"
                  />
                  
                  {/* City label */}
                  <text 
                    x={city.x} 
                    y={city.y - 15} 
                    textAnchor="middle" 
                    className="fill-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8))' }}
                  >
                    {city.name}
                  </text>
                </g>
              ))}
            </svg>
          )}
        </div>
        
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  )
}

// Ultra-modern Service Showcase Component
const ServiceShowcase = ({ 
  title, 
  services, 
  color = "emerald",
  layout = "grid"
}: { 
  title: string, 
  services: Array<{ icon: React.ReactNode, title: string, description: string }>, 
  color?: "emerald" | "orange" | "blue" | "purple",
  layout?: "grid" | "list"
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const colorConfig = {
    emerald: {
      bg: "from-emerald-500/10 to-emerald-600/5",
      border: "border-emerald-400/30",
      text: "text-emerald-300",
      icon: "bg-emerald-500/20 text-emerald-400",
      glow: "shadow-emerald-500/20"
    },
    orange: {
      bg: "from-orange-500/10 to-orange-600/5",
      border: "border-orange-400/30",
      text: "text-orange-300",
      icon: "bg-orange-500/20 text-orange-400",
      glow: "shadow-orange-500/20"
    },
    blue: {
      bg: "from-blue-500/10 to-blue-600/5",
      border: "border-blue-400/30",
      text: "text-blue-300",
      icon: "bg-blue-500/20 text-blue-400",
      glow: "shadow-blue-500/20"
    },
    purple: {
      bg: "from-purple-500/10 to-purple-600/5",
      border: "border-purple-400/30",
      text: "text-purple-300",
      icon: "bg-purple-500/20 text-purple-400",
      glow: "shadow-purple-500/20"
    }
  }
  
  const config = colorConfig[color]

  return (
    <div className={`relative p-8 backdrop-blur-xl rounded-3xl border bg-gradient-to-br ${config.bg} ${config.border} ${config.glow} shadow-2xl overflow-hidden group`}>
      {/* Modern top accent */}
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent ${config.text} opacity-50`} />
      
      {/* Floating elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-current rounded-full opacity-30 animate-pulse" />
      <div className="absolute top-8 right-8 w-1 h-1 bg-current rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-12 h-12 rounded-xl ${config.icon} flex items-center justify-center`}>
            <Target className="w-6 h-6" />
          </div>
          <h3 className={`text-2xl font-light tracking-tight ${config.text}`} style={{ fontFamily: 'var(--font-orbitron)' }}>
            {title}
          </h3>
        </div>
        
        <div className={layout === 'grid' ? 'grid gap-4' : 'space-y-4'}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative p-6 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] group/item ${hoveredIndex === index ? 'scale-105 shadow-lg' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${config.icon} transition-all duration-300 group-hover/item:scale-110`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    {service.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform group-hover/item:translate-x-1" />
                  </h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{service.description}</p>
                </div>
              </div>
              
              {/* Hover indicator */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover/item:border-current ${config.text} opacity-0 group-hover/item:opacity-20 transition-all duration-300`} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '20px 20px' }} />
      </div>
    </div>
  )
}

// Revolutionary Impact Visualization Component
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
        portfolio: 36,
        countries: 50,
        lives: 1000000,
        partnerships: 25
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const metrics = [
    { 
      value: animatedValues.portfolio, 
      suffix: 'M', 
      label: 'Portfolio Value', 
      sublabel: 'Combined valuation',
      color: 'emerald',
      icon: <TrendingUp className="w-5 h-5" />
    },
    { 
      value: animatedValues.countries, 
      suffix: '+', 
      label: 'Countries Reached', 
      sublabel: 'Global footprint',
      color: 'blue',
      icon: <Globe className="w-5 h-5" />
    },
    { 
      value: animatedValues.lives, 
      suffix: '+', 
      label: 'Lives Impacted', 
      sublabel: 'Through innovation',
      color: 'orange',
      icon: <Heart className="w-5 h-5" />
    },
    { 
      value: animatedValues.partnerships, 
      suffix: '+', 
      label: 'Strategic Partners', 
      sublabel: 'Global network',
      color: 'purple',
      icon: <Users className="w-5 h-5" />
    }
  ]

  return (
    <div className="relative py-20">
      {/* Hero section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 rounded-full border border-emerald-400/20 mb-6">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-300 text-sm font-medium">Our Impact Story</span>
        </div>
        
        <h2 className="text-5xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-orbitron)' }}>
          Transforming <span className="text-emerald-300">Africa&apos;s</span> Future
        </h2>
        <p className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
          Building bridges between African innovation and global opportunities, one connection at a time
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Enhanced Africa Visualization */}
        <div className="relative">
          <AfricaContinent 
            showConnectionLines={true} 
            animated={true} 
            showCities={true}
            className="transform hover:scale-105 transition-transform duration-700"
          />
          
          {/* Floating stats */}
          <div className="absolute -top-8 -right-8 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 backdrop-blur-xl rounded-2xl p-4 border border-emerald-400/20">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-emerald-300 font-medium">54 Countries</div>
                <div className="text-white/60 text-sm">Across Africa</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Impact Metrics */}
        <div className="grid grid-cols-2 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="relative bg-gradient-to-br from-white/[0.02] to-white/[0.01] backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center group hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background glow */}
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
                
                <div className={`text-3xl font-light mb-2 ${
                  metric.color === 'emerald' ? 'text-emerald-300' :
                  metric.color === 'blue' ? 'text-blue-300' :
                  metric.color === 'orange' ? 'text-orange-300' :
                  'text-purple-300'
                }`} style={{ fontFamily: 'var(--font-orbitron)' }}>
                  {metric.value > 999999 ? Math.floor(metric.value / 1000000) : metric.value}{metric.suffix}
                </div>
                
                <div className="text-white font-medium mb-1">{metric.label}</div>
                <div className="text-white/60 text-sm">{metric.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Next-generation Call to Action Graphics Component
const CallToActionGraphics = () => {
  const [, setHoveredCapability] = useState<number | null>(null)

  const capabilities = [
    { 
      icon: <Brain className="w-7 h-7" />, 
      title: "AI & Machine Learning", 
      description: "Intelligent systems revolutionizing healthcare, education, and business across Africa",
      color: "emerald"
    },
    { 
      icon: <Rocket className="w-7 h-7" />, 
      title: "Startup Acceleration", 
      description: "Launching next-generation companies that solve Africa&apos;s biggest challenges",
      color: "blue"
    },
    { 
      icon: <Building className="w-7 h-7" />, 
      title: "Digital Infrastructure", 
      description: "Building the foundational technology for Africa&apos;s digital transformation",
      color: "orange"
    },
    { 
      icon: <Users className="w-7 h-7" />, 
      title: "Innovation Ecosystem", 
      description: "Connecting entrepreneurs, investors, and innovators in a thriving network",
      color: "purple"
    },
    { 
      icon: <Code className="w-7 h-7" />, 
      title: "Technology Solutions", 
      description: "Cutting-edge development and digital solutions for the modern world",
      color: "emerald"
    },
    { 
      icon: <Palette className="w-7 h-7" />, 
      title: "Afro-futurist Design", 
      description: "Creative excellence that tells Africa&apos;s story through innovative design",
      color: "blue"
    }
  ]

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-800/30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full border border-emerald-400/20 mb-8">
            <Zap className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-300 font-medium">Let&apos;s Build Together</span>
          </div>
          
          <h2 className="text-6xl font-light text-white mb-8 tracking-tight" style={{ fontFamily: 'var(--font-orbitron)' }}>
            The Future of <span className="text-emerald-300">Africa</span>
          </h2>
                     <p className="text-2xl text-white/60 max-w-4xl mx-auto font-light leading-relaxed">
             A call to all African innovators, entrepreneurs, and dreamers - together we&apos;re building tomorrow&apos;s solutions today
           </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl rounded-3xl border border-white/10 p-8 text-center group hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredCapability(index)}
              onMouseLeave={() => setHoveredCapability(null)}
            >
              {/* Background glow effect */}
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
              
              {/* Hover indicator */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-20 transition-all duration-300 ${
                capability.color === 'emerald' ? 'text-emerald-400' :
                capability.color === 'blue' ? 'text-blue-400' :
                capability.color === 'orange' ? 'text-orange-400' :
                'text-purple-400'
              }`} />
            </div>
          ))}
        </div>

        {/* Central Africa Showcase */}
        <div className="relative bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl p-12 border border-emerald-400/20 backdrop-blur-xl">
          {/* Decorative elements */}
          <div className="absolute top-6 right-6 w-3 h-3 bg-emerald-400/30 rounded-full animate-pulse" />
          <div className="absolute top-12 right-12 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <h3 className="text-4xl font-light text-white mb-8 tracking-tight" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Africa is <span className="text-emerald-300">Rising</span>
              </h3>
                             <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
                 We&apos;re not just building companies - we&apos;re architecting an ecosystem. From Lagos to Cape Town, from Accra to Nairobi, we&apos;re connecting brilliance and creating opportunities for African innovation to shine globally.
               </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-5 py-3 bg-emerald-500/20 rounded-full border border-emerald-400/20">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 text-sm font-medium">Innovation</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-orange-500/20 rounded-full border border-orange-400/20">
                  <TrendingUp className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-300 text-sm font-medium">Investment</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-blue-500/20 rounded-full border border-blue-400/20">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-300 text-sm font-medium">Global Impact</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                                     <div className="text-white font-medium">Join the Movement</div>
                   <div className="text-white/60 text-sm">Be part of Africa&apos;s transformation</div>
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
              
              {/* Floating success indicator */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 backdrop-blur-xl rounded-2xl p-4 border border-emerald-400/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  <div>
                    <div className="text-emerald-300 font-medium text-sm">Active</div>
                    <div className="text-white/60 text-xs">Growing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Export all components
export { AfricaContinent, ServiceShowcase, ImpactVisualization, CallToActionGraphics } 