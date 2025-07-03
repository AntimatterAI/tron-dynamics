"use client"

import React, { useState, useEffect } from 'react'
import { Rocket, Users, Heart, Brain, Building, Code, Palette } from 'lucide-react'
import Africa from '@react-map/africa'
// import { AnimatedCounter } from './enhanced-graphics'

// Client-side check to prevent SSR issues
const isClient = typeof window !== 'undefined'

// African Continent SVG Component using accurate react-map data
const AfricaContinent = ({ className = "", showConnectionLines = false, animated = true }: { className?: string, showConnectionLines?: boolean, animated?: boolean }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    if (isClient) {
      const timer = setTimeout(() => setIsVisible(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!mounted || !isClient) {
    return (
      <div className={`relative ${className}`}>
        <div className="w-full h-64 bg-emerald-500/10 rounded-lg flex items-center justify-center">
          <span className="text-emerald-300 text-sm">Loading Africa Map...</span>
        </div>
      </div>
    )
  }

  // Major African cities with approximate coordinates (these will need to be positioned relative to the SVG)
  const majorCities = [
    { name: "Lagos", country: "NG" },
    { name: "Cairo", country: "EG" },
    { name: "Kinshasa", country: "CD" },
    { name: "Johannesburg", country: "ZA" },
    { name: "Nairobi", country: "KE" },
    { name: "Casablanca", country: "MA" },
    { name: "Accra", country: "GH" },
    { name: "Cape Town", country: "ZA" }
  ]

  return (
    <div className={`relative ${className} ${animated ? 'transition-all duration-1000' : ''} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="relative">
        <Africa
          type="select-multiple"
          size={800}
          mapColor="rgba(0, 255, 135, 0.1)"
          strokeColor="rgba(0, 255, 135, 0.3)"
          strokeWidth={1}
          hoverColor="rgba(0, 255, 135, 0.2)"
          selectColor="rgba(0, 255, 135, 0.3)"
          hints={false}
          onSelect={() => {
            // Map interactions handled automatically by the component
          }}
        />
        
        {/* Connection Lines Overlay */}
        {showConnectionLines && (
          <svg 
            className={`absolute inset-0 w-full h-full pointer-events-none ${animated ? 'animate-pulse' : ''}`}
            style={{ zIndex: 10 }}
          >
            <defs>
              <pattern id="connectionDots" patternUnits="userSpaceOnUse" width="8" height="8">
                <circle cx="4" cy="4" r="1" fill="rgba(0, 255, 135, 0.4)" />
              </pattern>
            </defs>
            
            {/* Global connection lines emanating from Africa */}
            <line x1="400" y1="200" x2="600" y2="100" stroke="url(#connectionDots)" strokeWidth="2" opacity="0.6" />
            <line x1="400" y1="300" x2="100" y2="150" stroke="url(#connectionDots)" strokeWidth="2" opacity="0.6" />
            <line x1="450" y1="400" x2="700" y2="350" stroke="url(#connectionDots)" strokeWidth="2" opacity="0.6" />
            <line x1="350" y1="500" x2="50" y2="400" stroke="url(#connectionDots)" strokeWidth="2" opacity="0.6" />
          </svg>
        )}

        {/* City markers and labels overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {majorCities.slice(0, 5).map((city, index) => {
            // Accurate geographic coordinate conversion to SVG space
            // Africa bounds: lat 37°N to -35°S, lng -17°W to 51°E
            // SVG viewBox for react-map/africa: 0 0 1000 1000 (approximate)
            const cityCoords = [
              { lat: 6.5244, lng: 3.3792 },   // Lagos
              { lat: 30.0444, lng: 31.2357 }, // Cairo
              { lat: -4.4419, lng: 15.2663 }, // Kinshasa
              { lat: -26.2041, lng: 28.0473 }, // Johannesburg
              { lat: -1.2921, lng: 36.8219 }  // Nairobi
            ]
            
            const coord = cityCoords[index]
            
            // Convert lat/lng to SVG coordinates (0-100% within the SVG bounds)
            // Africa SVG bounds: North: 37°, South: -35°, West: -17°, East: 51°
            const latRange = 37 - (-35) // 72 degrees
            const lngRange = 51 - (-17) // 68 degrees
            
            // Calculate percentage position within Africa bounds
            const x = ((coord.lng - (-17)) / lngRange) * 100 // Convert longitude to %
            const y = ((37 - coord.lat) / latRange) * 100      // Convert latitude to % (inverted for SVG)
            
            const pos = { 
              top: `${Math.max(5, Math.min(95, y))}%`, 
              left: `${Math.max(5, Math.min(95, x))}%` 
            }
            
            return (
              <div 
                key={city.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={pos}
              >
                <div className={`relative group`}>
                  <div className={`w-4 h-4 bg-orange-400 rounded-full border-2 border-white shadow-lg ${animated ? 'animate-pulse' : ''}`} />
                  <div className={`absolute w-8 h-8 bg-orange-400 rounded-full -top-2 -left-2 opacity-30 ${animated ? 'animate-ping' : ''}`} />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {city.name}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
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
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center group hover:border-emerald-400/20 transition-all duration-300">
            <div className="text-3xl font-light text-emerald-300 mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
              $36M
            </div>
            <div className="text-white font-medium mb-1">Portfolio Value</div>
            <div className="text-white/60 text-sm">Combined valuation</div>
          </div>
          
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center group hover:border-emerald-400/20 transition-all duration-300">
            <div className="text-3xl font-light text-emerald-300 mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
              50+
            </div>
            <div className="text-white font-medium mb-1">Countries Reached</div>
            <div className="text-white/60 text-sm">Global impact</div>
          </div>
          
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center group hover:border-emerald-400/20 transition-all duration-300">
            <div className="text-3xl font-light text-emerald-300 mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
              1M+
            </div>
            <div className="text-white font-medium mb-1">Lives Touched</div>
            <div className="text-white/60 text-sm">Through our work</div>
          </div>
          
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center group hover:border-emerald-400/20 transition-all duration-300">
            <div className="text-3xl font-light text-emerald-300 mb-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
              25+
            </div>
            <div className="text-white font-medium mb-1">Partnerships</div>
            <div className="text-white/60 text-sm">Strategic alliances</div>
          </div>
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