"use client"

import React, { useState, useEffect } from 'react'
import { 
    Heart,
    TrendingUp,
    Lightbulb,
    Award,
    Cpu,
    Brain,
    Globe,
    Smartphone,
    Cloud,
    Shield,
    Search,
    Rocket,
    CheckCircle,
    Users,
    Building2,
    DollarSign,
    Briefcase,
    Star,
    ArrowRight,
    MapPin,
    Building,
    Link,
    Wifi,
    Database,
    Code,
    FileText
  } from 'lucide-react'

// Capabilities Page - Service Integration Matrix
export function ServiceIntegrationMatrix() {
  const [activeService, setActiveService] = useState(0)
  
  const services = [
    { name: 'AI/ML', icon: Brain, color: '#3B82F6', connections: 12, projects: '25+' },
    { name: 'Blockchain', icon: Link, color: '#8B5CF6', connections: 8, projects: '15+' },
    { name: 'IoT', icon: Wifi, color: '#10B981', connections: 15, projects: '30+' },
    { name: 'Cloud', icon: Cloud, color: '#F59E0B', connections: 20, projects: '40+' },
    { name: 'Mobile', icon: Smartphone, color: '#EF4444', connections: 18, projects: '35+' },
    { name: 'Web', icon: Globe, color: '#06B6D4', connections: 22, projects: '50+' },
    { name: 'Data', icon: Database, color: '#84CC16', connections: 16, projects: '28+' },
    { name: 'Security', icon: Shield, color: '#F97316', connections: 14, projects: '22+' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] h-auto bg-gradient-to-br from-blue-950/90 to-purple-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden p-4 sm:p-6 md:p-8">
      {/* Network Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${10 + i * 4}%`,
                top: `${20 + Math.sin(i * 0.5) * 30}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white">Service Integration Matrix</h3>
        <p className="text-xs sm:text-sm text-white/60 mt-1">Connected Technology Stack</p>
      </div>

      {/* Responsive Grid Layout - No Overlaps Guaranteed */}
      <div className="absolute inset-8 sm:inset-12 md:inset-16 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-xs sm:max-w-md md:max-w-2xl">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="relative group cursor-pointer transition-all duration-500 hover:scale-110 flex justify-center"
              onMouseEnter={() => setActiveService(i)}
            >
              <div 
                className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl border-2 backdrop-blur-xl transition-all duration-500 ${
                  activeService === i ? 'scale-125 shadow-2xl border-white/70' : 'border-white/30'
                }`}
                style={{ 
                  backgroundColor: `${service.color}30`,
                  borderColor: activeService === i ? `${service.color}80` : `${service.color}40`
                }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent" />
                <div className="relative h-full flex flex-col items-center justify-center p-1 sm:p-2">
                  <service.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white mb-1" />
                  <span className="text-white text-xs font-bold text-center leading-tight">{service.name}</span>
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 p-2 sm:p-3 min-w-[100px] sm:min-w-[120px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                  <div className="text-white font-bold text-xs sm:text-sm mb-1">{service.name}</div>
                  <div className="text-green-400 text-xs font-bold">{service.projects}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-full px-4 z-10">
        {[
          { value: '150+', label: 'Integrations', color: '#3B82F6' },
          { value: '99.9%', label: 'Uptime', color: '#10B981' },
          { value: '24/7', label: 'Support', color: '#F59E0B' }
        ].map((stat, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-2 sm:p-3 hover:scale-105 transition-transform min-w-[60px] sm:min-w-[70px] md:min-w-[80px]"
          >
            <div className="text-xs sm:text-sm md:text-base font-bold mb-1" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="text-xs text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Innovation Page - Innovation Pipeline Flow  
export function InnovationPipeline() {
  const [activePhase, setActivePhase] = useState(0)
  
  const phases = [
    { name: 'Research', icon: Search, color: '#3B82F6', duration: '2-4 weeks', success: '85%' },
    { name: 'Prototype', icon: Cpu, color: '#8B5CF6', duration: '4-8 weeks', success: '70%' },
    { name: 'Development', icon: Code, color: '#10B981', duration: '8-16 weeks', success: '90%' },
    { name: 'Testing', icon: CheckCircle, color: '#F59E0B', duration: '2-6 weeks', success: '95%' },
    { name: 'Launch', icon: Rocket, color: '#EF4444', duration: '1-2 weeks', success: '98%' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [phases.length])

  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] h-auto bg-gradient-to-br from-purple-950/90 to-pink-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden p-4 sm:p-6 md:p-8">
      {/* Innovation Particles */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
              style={{
                left: `${15 + i * 5}%`,
                top: `${25 + Math.cos(i * 0.7) * 35}%`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white">Innovation Pipeline</h3>
        <p className="text-xs sm:text-sm text-white/60 mt-1">From Idea to Market</p>
      </div>

      {/* Responsive Horizontal Flow */}
      <div className="absolute inset-8 sm:inset-12 md:inset-16 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-2 md:space-x-4 w-full max-w-xs sm:max-w-4xl overflow-x-auto">
          {phases.map((phase, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center">
              <div 
                className="relative group cursor-pointer transition-all duration-500 hover:scale-110"
                onMouseEnter={() => setActivePhase(i)}
              >
                <div 
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border-2 backdrop-blur-xl transition-all duration-500 ${
                    activePhase === i ? 'scale-125 shadow-2xl border-white/70' : 'border-white/30'
                  }`}
                  style={{ 
                    backgroundColor: `${phase.color}30`,
                    borderColor: activePhase === i ? `${phase.color}80` : `${phase.color}40`
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent" />
                  <div className="relative h-full flex flex-col items-center justify-center p-2">
                    <phase.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white mb-1" />
                    <span className="text-white text-xs font-bold text-center leading-tight">{phase.name}</span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 p-2 sm:p-3 min-w-[100px] sm:min-w-[120px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                    <div className="text-white font-bold text-xs sm:text-sm mb-1">{phase.name}</div>
                    <div className="text-white/80 text-xs mb-2">{phase.duration}</div>
                    <div className="text-green-400 text-xs font-bold">{phase.success}</div>
                  </div>
                </div>
              </div>
              
              {/* Flow Arrow */}
              {i < phases.length - 1 && (
                <div className="flex justify-center my-2 sm:my-0 sm:mx-2">
                  <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/60 transition-all duration-300 transform sm:rotate-0 rotate-90 ${
                    activePhase === i ? 'text-yellow-300 scale-125' : ''
                  }`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-full px-4 z-10">
        {[
          { value: '200+', label: 'Projects', color: '#8B5CF6' },
          { value: '85%', label: 'Success Rate', color: '#10B981' },
          { value: '12mo', label: 'Avg Timeline', color: '#F59E0B' }
        ].map((stat, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-2 sm:p-3 hover:scale-105 transition-transform min-w-[60px] sm:min-w-[70px] md:min-w-[80px]"
          >
            <div className="text-xs sm:text-sm md:text-base font-bold mb-1" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="text-xs text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Business Development Page - Market Expansion Visualization
export function MarketExpansionViz() {
  const [activeMarket, setActiveMarket] = useState(0)
  
  const markets = [
    { name: 'West Africa', icon: MapPin, color: '#10B981', growth: '+45%', revenue: '$2.1M' },
    { name: 'East Africa', icon: Building, color: '#3B82F6', growth: '+32%', revenue: '$1.8M' },
    { name: 'North America', icon: Briefcase, color: '#8B5CF6', growth: '+28%', revenue: '$3.2M' },
    { name: 'Europe', icon: Users, color: '#F59E0B', growth: '+38%', revenue: '$2.7M' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMarket((prev) => (prev + 1) % markets.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [markets.length])

  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] h-auto bg-gradient-to-br from-green-950/90 to-blue-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden p-4 sm:p-6 md:p-8">
      {/* Global Network Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
              style={{
                left: `${5 + i * 3.5}%`,
                top: `${15 + Math.sin(i * 0.3) * 40}%`,
                animationDelay: `${i * 0.15}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white">Global Market Expansion</h3>
        <p className="text-xs sm:text-sm text-white/60 mt-1">Growing Worldwide Presence</p>
      </div>

      {/* Responsive 2x2 Grid */}
      <div className="absolute inset-8 sm:inset-12 md:inset-16 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-xs sm:max-w-md md:max-w-lg">
          {markets.map((market, i) => (
            <div 
              key={i} 
              className="relative group cursor-pointer transition-all duration-500 hover:scale-110 flex justify-center"
              onMouseEnter={() => setActiveMarket(i)}
            >
              <div 
                className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl border-2 backdrop-blur-xl transition-all duration-500 ${
                  activeMarket === i ? 'scale-125 shadow-2xl border-white/70' : 'border-white/30'
                }`}
                style={{ 
                  backgroundColor: `${market.color}30`,
                  borderColor: activeMarket === i ? `${market.color}80` : `${market.color}40`
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent" />
                <div className="relative h-full flex flex-col items-center justify-center p-2">
                  <market.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white mb-1" />
                  <span className="text-white text-xs font-bold text-center leading-tight">{market.name}</span>
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 p-2 sm:p-3 min-w-[100px] sm:min-w-[120px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                  <div className="text-white font-bold text-xs sm:text-sm mb-1">{market.name}</div>
                  <div className="text-green-400 text-xs font-bold">{market.growth}</div>
                  <div className="text-blue-400 text-xs font-bold">{market.revenue}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-full px-4 z-10">
        {[
          { value: '4', label: 'Markets', color: '#10B981' },
          { value: '$9.8M', label: 'Total Revenue', color: '#3B82F6' },
          { value: '35%', label: 'Avg Growth', color: '#F59E0B' }
        ].map((stat, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-2 sm:p-3 hover:scale-105 transition-transform min-w-[60px] sm:min-w-[70px] md:min-w-[80px]"
          >
            <div className="text-xs sm:text-sm md:text-base font-bold mb-1" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="text-xs text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// About Page - Company DNA & Journey
export function CompanyDNAViz() {
  const [activeValue, setActiveValue] = useState(0)
  
  const values = [
    { name: 'Innovation', icon: Lightbulb, color: '#3B82F6', description: 'Cutting-edge solutions', projects: '50+' },
    { name: 'Excellence', icon: Award, color: '#8B5CF6', description: 'Quality-first approach', projects: '98%' },
    { name: 'Impact', icon: Heart, color: '#EF4444', description: 'Meaningful change', projects: '1M+' },
    { name: 'Growth', icon: TrendingUp, color: '#10B981', description: 'Continuous evolution', projects: '300%' },
  ]

  const milestones = [
    { year: '2020', event: 'Founded', icon: Building2, metric: 'Day 1' },
    { year: '2021', event: '$1M Revenue', icon: DollarSign, metric: '12 months' },
    { year: '2022', event: '50+ Team', icon: Users, metric: '24 months' },
    { year: '2023', event: 'Global Expansion', icon: Globe, metric: '36 months' },
    { year: '2024', event: 'AI Innovation', icon: Brain, metric: '48 months' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [values.length])

  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] h-auto bg-gradient-to-br from-indigo-950/90 via-purple-950/50 to-pink-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden p-4 sm:p-6 md:p-8">
      {/* DNA Helix Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 6}%`,
                top: `${30 + Math.sin(i * 0.8) * 25}%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white">Company DNA</h3>
        <p className="text-xs sm:text-sm text-white/60 mt-1">Our Values & Journey</p>
      </div>

      {/* Responsive 2x2 Grid Layout - No Overlaps */}
      <div className="absolute inset-8 sm:inset-12 md:inset-16 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 flex items-center justify-center">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
          
          {/* Central Hub */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/40 to-purple-600/40 backdrop-blur-xl border-2 border-white/50 animate-spin-slow" />
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-purple-400/50 to-pink-600/50 backdrop-blur-xl flex items-center justify-center">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white animate-pulse" />
              </div>
            </div>
          </div>

          {/* Values in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-16 w-full">
            {values.map((value, i) => (
              <div 
                key={i} 
                className="relative group cursor-pointer transition-all duration-700 hover:scale-110 z-10 flex justify-center items-center" 
                onMouseEnter={() => setActiveValue(i)}
              >
                <div 
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl border-2 backdrop-blur-xl transition-all duration-500 ${
                    activeValue === i ? 'scale-125 shadow-2xl border-white/70' : 'border-white/30'
                  }`}
                  style={{ 
                    backgroundColor: `${value.color}30`,
                    borderColor: activeValue === i ? `${value.color}80` : `${value.color}40`
                  }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent" />
                  <div className="relative h-full flex flex-col items-center justify-center p-1">
                    <value.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white mb-0.5" />
                    <span className="text-white text-xs font-bold text-center leading-none">{value.name}</span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 p-2 sm:p-3 min-w-[100px] sm:min-w-[120px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                    <div className="text-white font-bold text-xs sm:text-sm mb-1">{value.name}</div>
                    <div className="text-white/80 text-xs mb-2">{value.description}</div>
                    <div className="text-green-400 text-xs font-bold">{value.projects}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-full px-4 z-10">
        {milestones.map((milestone, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-2 hover:scale-105 transition-transform min-w-[50px] sm:min-w-[60px] md:min-w-[70px]"
          >
            <milestone.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white mx-auto mb-1" />
            <div className="text-xs text-white font-bold">{milestone.year}</div>
            <div className="text-xs text-white/70 leading-tight">{milestone.event}</div>
            <div className="text-xs text-indigo-400 font-bold mt-1">{milestone.metric}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// TRON America Page - Startup Acceleration Pipeline
export function StartupPipeline() {
  const [activeStage, setActiveStage] = useState(0)
  
  const stages = [
    { name: 'Applications', icon: FileText, color: 'from-red-500 to-orange-500', count: '500', rate: '100%', success: '500/500' },
    { name: 'Screening', icon: Search, color: 'from-orange-500 to-yellow-500', count: '125', rate: '25%', success: '125/500' },
    { name: 'Interviews', icon: Users, color: 'from-yellow-500 to-green-500', count: '50', rate: '10%', success: '50/125' },
    { name: 'Incubation', icon: Building, color: 'from-green-500 to-blue-500', count: '20', rate: '4%', success: '20/50' },
    { name: 'Success', icon: Star, color: 'from-blue-500 to-purple-500', count: '12', rate: '2.4%', success: '12/20' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stages.length])

  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] h-auto bg-gradient-to-br from-slate-900/90 to-red-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-4 sm:p-6 md:p-8">
      {/* Title */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-2">Startup Acceleration Pipeline</h3>
        <p className="text-xs sm:text-sm text-white/60">From Application to Success</p>
      </div>
      
      {/* Responsive Vertical Stack */}
      <div className="absolute inset-8 sm:inset-12 md:inset-16 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 w-full max-w-xs sm:max-w-sm md:max-w-md">
          {stages.map((stage, i) => (
            <div 
              key={i} 
              className="relative w-full flex flex-col items-center"
              onMouseEnter={() => setActiveStage(i)}
            >
              {/* Stage Card */}
              <div
                className={`bg-gradient-to-r ${stage.color} rounded-lg border-2 border-white/20 flex items-center justify-between p-2 sm:p-3 md:p-4 transition-all duration-500 cursor-pointer w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] ${
                  activeStage === i ? 'border-white/70 shadow-2xl scale-105' : 'hover:scale-[1.02]'
                }`}
              >
                {/* Stage Info */}
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <stage.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs sm:text-sm md:text-base">{stage.name}</div>
                    <div className="text-white/80 text-xs">{stage.rate} Selection Rate</div>
                    <div className="text-white/60 text-xs">{stage.success}</div>
                  </div>
                </div>
                
                {/* Count */}
                <div className="text-right">
                  <div className="text-white font-bold text-sm sm:text-lg md:text-xl">{stage.count}</div>
                  <div className="text-white/80 text-xs">Startups</div>
                </div>
              </div>
              
              {/* Flow Arrow */}
              {i < stages.length - 1 && (
                <div className="flex justify-center my-1 sm:my-2">
                  <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/60 transition-all duration-300 transform rotate-90 ${
                    activeStage === i ? 'text-yellow-300 scale-125' : ''
                  }`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-full px-4 z-10">
        {[
          { value: '$4.2M', label: 'Deployed Capital', color: '#10B981' },
          { value: '92%', label: 'Success Rate', color: '#3B82F6' },
          { value: '180+', label: 'Jobs Created', color: '#F59E0B' }
        ].map((metric, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-2 hover:scale-105 transition-transform min-w-[60px] sm:min-w-[70px] md:min-w-[80px]"
          >
            <div className="text-xs sm:text-sm md:text-base font-bold mb-1" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="text-xs text-white/70">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

 