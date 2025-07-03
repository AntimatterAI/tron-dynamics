"use client"

import React, { useState, useEffect } from 'react'
import { Rocket, Users, Heart, Brain, Building, Code, Palette } from 'lucide-react'

// African Continent SVG Component
const AfricaContinent = ({ className = "", showConnectionLines = false, animated = true }: { className?: string, showConnectionLines?: boolean, animated?: boolean }) => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 400 500" 
        className={`w-full h-full ${animated ? 'transition-all duration-1000' : ''} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Africa Continent Shape */}
        <path
          d="M200 50 C220 45, 240 50, 250 70 C260 90, 270 110, 280 130 C290 150, 300 170, 310 190 C320 210, 325 230, 330 250 C335 270, 340 290, 345 310 C350 330, 355 350, 360 370 C365 390, 370 410, 365 430 C360 450, 350 470, 340 480 C330 490, 320 485, 310 480 C300 475, 290 470, 280 465 C270 460, 260 455, 250 450 C240 445, 230 440, 220 435 C210 430, 200 425, 190 420 C180 415, 170 410, 160 405 C150 400, 140 395, 130 390 C120 385, 110 380, 100 375 C90 370, 80 365, 70 360 C60 355, 50 350, 45 340 C40 330, 35 320, 30 310 C25 300, 20 290, 15 280 C10 270, 5 260, 10 250 C15 240, 20 230, 25 220 C30 210, 35 200, 40 190 C45 180, 50 170, 55 160 C60 150, 65 140, 70 130 C75 120, 80 110, 85 100 C90 90, 95 80, 100 70 C105 60, 110 50, 120 45 C130 40, 140 35, 150 35 C160 35, 170 40, 180 45 C190 50, 200 50"
          fill="rgba(0, 255, 135, 0.1)"
          stroke="rgba(0, 255, 135, 0.3)"
          strokeWidth="2"
          className={animated ? 'animate-pulse' : ''}
        />
        
        {/* Connection Lines */}
        {showConnectionLines && (
          <g className={`${animated ? 'animate-pulse' : ''}`}>
            <line x1="200" y1="150" x2="350" y2="100" stroke="rgba(0, 255, 135, 0.2)" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="200" y1="200" x2="50" y2="120" stroke="rgba(0, 255, 135, 0.2)" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="200" y1="250" x2="380" y2="200" stroke="rgba(0, 255, 135, 0.2)" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="200" y1="300" x2="20" y2="250" stroke="rgba(0, 255, 135, 0.2)" strokeWidth="1" strokeDasharray="5,5" />
          </g>
        )}

        {/* City Points */}
        <circle cx="150" cy="120" r="4" fill="#FF6B35" className={animated ? 'animate-ping' : ''} />
        <circle cx="200" cy="180" r="4" fill="#FF6B35" className={animated ? 'animate-ping' : ''} />
        <circle cx="250" cy="250" r="4" fill="#FF6B35" className={animated ? 'animate-ping' : ''} />
        <circle cx="180" cy="320" r="4" fill="#FF6B35" className={animated ? 'animate-ping' : ''} />
        <circle cx="220" cy="280" r="4" fill="#FF6B35" className={animated ? 'animate-ping' : ''} />

        {/* Labels */}
        <text x="150" y="110" textAnchor="middle" className="text-xs fill-white font-medium">Lagos</text>
        <text x="200" y="170" textAnchor="middle" className="text-xs fill-white font-medium">Accra</text>
        <text x="250" y="240" textAnchor="middle" className="text-xs fill-white font-medium">Nairobi</text>
        <text x="180" y="310" textAnchor="middle" className="text-xs fill-white font-medium">Cape Town</text>
        <text x="220" y="270" textAnchor="middle" className="text-xs fill-white font-medium">Johannesburg</text>
      </svg>
    </div>
  )
}

// Service Showcase Component
const ServiceShowcase = ({ title, services, color = "emerald" }: { title: string, services: Array<{ icon: React.ReactNode, title: string, description: string }>, color?: string }) => {
  const colorConfig = {
    emerald: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-400/20",
      text: "text-emerald-300",
      icon: "bg-emerald-500/20"
    },
    orange: {
      bg: "bg-orange-500/10", 
      border: "border-orange-400/20",
      text: "text-orange-300",
      icon: "bg-orange-500/20"
    },
    blue: {
      bg: "bg-blue-500/10",
      border: "border-blue-400/20", 
      text: "text-blue-300",
      icon: "bg-blue-500/20"
    }
  }
  
  const config = colorConfig[color as keyof typeof colorConfig]

  return (
    <div className="relative p-8 backdrop-blur-xl rounded-2xl border overflow-hidden" style={{ backgroundColor: config.bg.replace('bg-', 'rgba('), borderColor: config.border.replace('border-', 'rgba(') }}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />
      
      <h3 className={`text-2xl font-light mb-6 tracking-tight ${config.text}`} style={{ fontFamily: 'var(--font-orbitron)' }}>
        {title}
      </h3>
      
      <div className="grid gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/10">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${config.icon}`}>
              {service.icon}
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">{service.title}</h4>
              <p className="text-white/60 text-sm font-light">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Impact Visualization Component
const ImpactVisualization = () => {
  const impactMetrics = [
    { value: "$36M", label: "Portfolio Value", description: "Combined valuation" },
    { value: "50+", label: "Countries Reached", description: "Global impact" },
    { value: "1M+", label: "Lives Touched", description: "Through our work" },
    { value: "25+", label: "Partnerships", description: "Strategic alliances" }
  ]

  return (
    <div className="relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-orbitron)' }}>
          Our <span className="text-emerald-300">Impact</span> Across Africa
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
          Building bridges between African innovation and global opportunities
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Africa Visualization */}
        <div className="relative">
          <AfricaContinent showConnectionLines={true} animated={true} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent animate-pulse" />
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 gap-6">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center group hover:border-emerald-400/20 transition-all duration-300">
              <div className="text-3xl font-light text-emerald-300 mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                {metric.value}
              </div>
              <div className="text-white font-medium mb-1">{metric.label}</div>
              <div className="text-white/60 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Call to Action Graphics Component
const CallToActionGraphics = () => {
  const capabilities = [
    { icon: <Brain className="w-6 h-6" />, title: "AI Solutions", description: "Intelligent systems for healthcare, education, and business" },
    { icon: <Rocket className="w-6 h-6" />, title: "Startups", description: "Launching innovative companies that solve real problems" },
    { icon: <Building className="w-6 h-6" />, title: "Infrastructure", description: "Building the foundation for African tech ecosystem" },
    { icon: <Users className="w-6 h-6" />, title: "Communities", description: "Connecting entrepreneurs, investors, and innovators" },
    { icon: <Code className="w-6 h-6" />, title: "Technology", description: "Cutting-edge development and digital transformation" },
    { icon: <Palette className="w-6 h-6" />, title: "Design", description: "Afro-futurist design that tells our story" }
  ]

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-orbitron)' }}>
            What We Can <span className="text-emerald-300">Build</span> Together
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
                          A call to all African innovators, entrepreneurs, and dreamers - let&apos;s build the future together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-8 text-center group hover:border-emerald-400/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300">
                {capability.icon}
              </div>
              <h3 className="text-xl font-medium text-white mb-4">{capability.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        {/* Central Africa Graphic */}
        <div className="relative bg-gradient-to-br from-emerald-500/5 to-emerald-600/10 rounded-2xl p-12 border border-emerald-400/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Africa is <span className="text-emerald-300">Rising</span>
              </h3>
              <p className="text-white/80 font-light leading-relaxed mb-6">
                We&apos;re not just building companies - we&apos;re building an ecosystem. From Lagos to Cape Town, from Accra to Nairobi, we&apos;re connecting the dots and creating opportunities for African innovation to shine on the global stage.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium">Innovation</span>
                <span className="px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium">Investment</span>
                <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium">Impact</span>
              </div>
            </div>
            
            <div className="relative">
              <AfricaContinent showConnectionLines={true} animated={true} />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-emerald-300" />
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