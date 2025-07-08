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

// Capabilities Page - Advanced Neural Network Matrix
export function ServiceIntegrationMatrix() {
  const [activeService, setActiveService] = useState(0)
  const [connectionNodes, setConnectionNodes] = useState<number[]>([])
  
  const services = [
    { name: 'AI/ML', icon: Brain, color: '#00D4FF', projects: '25+', strength: 95 },
    { name: 'Blockchain', icon: Link, color: '#9D4EDD', projects: '15+', strength: 88 },
    { name: 'IoT', icon: Wifi, color: '#06FFA5', projects: '30+', strength: 92 },
    { name: 'Cloud', icon: Cloud, color: '#FFD23F', projects: '40+', strength: 98 },
    { name: 'Mobile', icon: Smartphone, color: '#FF006E', projects: '35+', strength: 90 },
    { name: 'Web', icon: Globe, color: '#8338EC', projects: '50+', strength: 96 },
    { name: 'Data', icon: Database, color: '#3A86FF', projects: '28+', strength: 94 },
    { name: 'Security', icon: Shield, color: '#FB5607', projects: '22+', strength: 87 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
      // Generate random connection nodes for neural network effect
      setConnectionNodes(Array.from({ length: 6 }, () => Math.floor(Math.random() * services.length)))
    }, 800) // Much faster - neural network speed
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div className="relative w-full h-auto bg-gradient-to-br from-black via-blue-950/95 to-purple-950/90 backdrop-blur-xl rounded-3xl border border-cyan-500/20 overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          {/* Dynamic connection lines */}
          {connectionNodes.map((node, i) => (
            <g key={i}>
              <line
                x1={100 + (activeService % 4) * 150}
                y1={100 + Math.floor(activeService / 4) * 150}
                x2={100 + (node % 4) * 150}
                y2={100 + Math.floor(node / 4) * 150}
                stroke="url(#neuralGradient)"
                strokeWidth="2"
                opacity="0.6"
                className="animate-pulse"
                style={{ animationDuration: '0.5s' }}
              />
              <circle
                cx={100 + (node % 4) * 150}
                cy={100 + Math.floor(node / 4) * 150}
                r="3"
                fill={services[activeService]?.color}
                className="animate-ping"
                style={{ animationDuration: '0.8s' }}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={services[activeService]?.color} stopOpacity="0.8" />
              <stop offset="100%" stopColor="cyan" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-bounce"
            style={{
              left: `${5 + i * 4.5}%`,
              top: `${10 + Math.sin(i * 0.8) * 30}%`,
              animationDelay: `${i * 0.05}s`,
              animationDuration: '1.2s'
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <div className="text-center py-8 px-6 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Service Integration Matrix</h3>
        <p className="text-sm md:text-base text-white/60">Connected Technology Stack</p>
      </div>

      {/* Main Content Area */}
      <div className="px-8 pb-8 relative z-10">
        {/* Services Grid - Enhanced with Glowing Effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group cursor-pointer transition-all duration-500"
              style={{
                animationDelay: `${i * 0.1}s`
              }}
            >
              <div 
                className={`relative w-full aspect-square rounded-2xl border-2 backdrop-blur-xl transition-all duration-700 p-4 ${
                  activeService === i 
                    ? 'scale-110 shadow-2xl border-white/70 shadow-white/20' 
                    : 'border-white/20 hover:border-white/40'
                }`}
                style={{ 
                  backgroundColor: `${service.color}20`,
                  borderColor: activeService === i ? service.color : 'rgba(255,255,255,0.2)',
                  boxShadow: activeService === i ? `0 0 30px ${service.color}40, 0 0 60px ${service.color}20` : undefined
                }}
              >
                {/* Pulsing Glow Effect */}
                {activeService === i && (
                  <div 
                    className="absolute inset-0 rounded-2xl animate-pulse"
                    style={{
                      background: `radial-gradient(circle, ${service.color}30 0%, transparent 70%)`,
                      animation: 'pulse 2s infinite'
                    }}
                  />
                )}
                
                <div className="relative flex flex-col items-center justify-center h-full text-center">
                  <service.icon 
                    className={`w-8 h-8 md:w-10 md:h-10 text-white mb-3 transition-all duration-500 ${
                      activeService === i ? 'scale-125 drop-shadow-lg' : ''
                    }`} 
                  />
                  <span className="text-white font-semibold text-sm md:text-base">{service.name}</span>
                  <span className="text-white/60 text-xs mt-1">{service.projects} projects</span>
                </div>

                {/* Connection Lines to Active Service */}
                {activeService === i && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(4)].map((_, lineIndex) => (
                      <div
                        key={lineIndex}
                        className="absolute w-px h-8 bg-gradient-to-b from-transparent to-white/30 animate-pulse"
                        style={{
                          left: `${25 + lineIndex * 16.66}%`,
                          top: '-8px',
                          animationDelay: `${lineIndex * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats with Gradient Backgrounds */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { value: '150+', label: 'Integrations', color: '#3B82F6' },
              { value: '99.9%', label: 'Uptime', color: '#10B981' },
              { value: '24/7', label: 'Support', color: '#F59E0B' }
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center backdrop-blur-xl rounded-xl border border-white/10 px-6 py-4 min-w-[120px] animate-fadeInUp"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}10, rgba(255,255,255,0.05))`,
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: 'backwards'
                }}
              >
                <div className="text-lg md:text-xl font-bold mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}

// Innovation Page - Quantum Innovation Accelerator
export function InnovationPipeline() {
  const [activePhase, setActivePhase] = useState(0)
  const [energyLevel, setEnergyLevel] = useState(0)
  
  const phases = [
    { name: 'Research', icon: Search, color: '#FF0080', duration: '2-4 weeks', energy: 85 },
    { name: 'Prototype', icon: Cpu, color: '#00FF88', duration: '4-8 weeks', energy: 92 },
    { name: 'Development', icon: Code, color: '#8000FF', duration: '8-16 weeks', energy: 96 },
    { name: 'Testing', icon: CheckCircle, color: '#FF8000', duration: '2-6 weeks', energy: 88 },
    { name: 'Launch', icon: Rocket, color: '#00FFFF', duration: '1-2 weeks', energy: 100 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length)
      setEnergyLevel(phases[activePhase]?.energy || 0)
    }, 900) // Super fast quantum transitions
    return () => clearInterval(interval)
  }, [phases.length, activePhase])

  return (
    <div className="relative w-full h-auto bg-gradient-to-br from-black via-purple-950/95 to-pink-950/90 backdrop-blur-xl rounded-3xl border border-purple-500/30 overflow-hidden">
      {/* Quantum Energy Field */}
      <div className="absolute inset-0 opacity-25">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          {/* Energy waves */}
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${100 + i * 60} Q 200 ${50 + i * 60} 400 ${100 + i * 60} T 800 ${100 + i * 60}`}
              stroke={phases[activePhase]?.color}
              strokeWidth="2"
              fill="none"
              opacity="0.6"
              className="animate-pulse"
              style={{ 
                animationDuration: `${0.3 + i * 0.1}s`,
                filter: `drop-shadow(0 0 10px ${phases[activePhase]?.color})`
              }}
            />
          ))}
        </svg>
      </div>
      
      {/* Innovation sparks */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full animate-ping"
            style={{
              backgroundColor: phases[(activePhase + i) % phases.length]?.color,
              left: `${5 + i * 6}%`,
              top: `${15 + Math.sin(i * 1.2) * 25}%`,
              animationDelay: `${i * 0.08}s`,
              animationDuration: '0.6s',
              boxShadow: `0 0 10px ${phases[(activePhase + i) % phases.length]?.color}`
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <div className="text-center py-8 px-6 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Innovation Pipeline</h3>
        <p className="text-sm md:text-base text-white/60">From Idea to Market</p>
      </div>

      {/* Main Content Area */}
      <div className="px-8 pb-8 relative z-10">
        {/* Pipeline Flow - Enhanced with Energy Beams */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-6xl mx-auto mb-12 relative">
          {/* Energy Flow Line */}
          <div className="absolute inset-0 hidden md:block pointer-events-none">
            <div 
              className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{
                background: `linear-gradient(90deg, transparent, ${phases[activePhase]?.color}60, transparent)`,
                animation: 'flow 2.5s infinite'
              }}
            />
          </div>

          {phases.map((phase, i) => (
            <React.Fragment key={i}>
              <div 
                className="group cursor-pointer transition-all duration-700 relative z-10"
                style={{
                  animationDelay: `${i * 0.15}s`
                }}
              >
                <div 
                  className={`relative w-32 h-32 md:w-40 md:h-40 rounded-2xl border-2 backdrop-blur-xl transition-all duration-700 ${
                    activePhase === i 
                      ? 'scale-125 shadow-2xl border-white/70' 
                      : 'border-white/20 scale-100'
                  }`}
                  style={{ 
                    backgroundColor: `${phase.color}20`,
                    borderColor: activePhase === i ? phase.color : 'rgba(255,255,255,0.2)',
                    boxShadow: activePhase === i ? `0 0 40px ${phase.color}50, 0 0 80px ${phase.color}20` : undefined
                  }}
                >
                  {/* Progress Ring */}
                  {activePhase === i && (
                    <div className="absolute -inset-2 rounded-2xl border-2 border-white/20 animate-spin-slow">
                      <div 
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: `conic-gradient(${phase.color} 0deg, transparent 45deg, ${phase.color} 90deg, transparent 135deg)`
                        }}
                      />
                    </div>
                  )}

                  <div className="relative flex flex-col items-center justify-center h-full p-4 text-center">
                    <phase.icon 
                      className={`w-8 h-8 md:w-10 md:h-10 text-white mb-2 transition-all duration-500 ${
                        activePhase === i ? 'scale-125 drop-shadow-lg' : ''
                      }`} 
                    />
                    <span className="text-white font-semibold text-sm md:text-base">{phase.name}</span>
                    <span className="text-white/60 text-xs mt-1">{phase.duration}</span>
                  </div>
                </div>
              </div>
              
              {/* Animated Flow Arrows */}
              {i < phases.length - 1 && (
                <div className="relative">
                  <ArrowRight className="w-6 h-6 text-white/40 hidden md:block relative z-10" />
                  {activePhase === i && (
                    <ArrowRight 
                      className="w-6 h-6 absolute inset-0 hidden md:block animate-pulse z-20"
                      style={{ color: phase.color }}
                    />
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Enhanced Stats */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { value: '200+', label: 'Projects', color: '#8B5CF6' },
              { value: '94%', label: 'Success Rate', color: '#10B981' },
              { value: '12mo', label: 'Avg Timeline', color: '#F59E0B' }
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center backdrop-blur-xl rounded-xl border border-white/10 px-6 py-4 min-w-[120px] animate-fadeInUp"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}10, rgba(255,255,255,0.05))`,
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: 'backwards'
                }}
              >
                <div className="text-lg md:text-xl font-bold mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flow {
          0% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 1; transform: translateX(0%); }
          100% { opacity: 0; transform: translateX(100%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}

// Business Development Page - Real-Time Global Market Tracker
export function MarketExpansionViz() {
  const [activeMarket, setActiveMarket] = useState(0)
  const [marketPulse, setMarketPulse] = useState(0)
  
  const markets = [
    { name: 'West Africa', icon: MapPin, color: '#00FF7F', growth: '+45%', revenue: '$2.1M', deals: 12, trend: 'up' },
    { name: 'East Africa', icon: Building, color: '#1E90FF', growth: '+32%', revenue: '$1.8M', deals: 8, trend: 'up' },
    { name: 'North America', icon: Briefcase, color: '#FF1493', growth: '+28%', revenue: '$3.2M', deals: 15, trend: 'stable' },
    { name: 'Europe', icon: Users, color: '#FFD700', growth: '+38%', revenue: '$2.7M', deals: 10, trend: 'up' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMarket((prev) => (prev + 1) % markets.length)
      setMarketPulse(prev => (prev + 1) % 100)
    }, 1000) // Fast market updates like real trading
    return () => clearInterval(interval)
  }, [markets.length])

  return (
    <div className="relative w-full h-auto bg-gradient-to-br from-green-950/90 to-blue-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
      {/* Global Network Lines */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 400 300">
          {markets.map((_, i) => (
            <g key={i}>
              <circle
                cx={100 + (i % 2) * 200}
                cy={100 + Math.floor(i / 2) * 100}
                r="2"
                fill="#10B981"
                className="animate-ping"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
              {i < markets.length - 1 && (
                <line
                  x1={100 + (i % 2) * 200}
                  y1={100 + Math.floor(i / 2) * 100}
                  x2={100 + ((i + 1) % 2) * 200}
                  y2={100 + Math.floor((i + 1) / 2) * 100}
                  stroke="#10B981"
                  strokeWidth="1"
                  opacity="0.3"
                  className="animate-pulse"
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Header Section */}
      <div className="text-center py-8 px-6 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Global Market Expansion</h3>
        <p className="text-sm md:text-base text-white/60">Growing Worldwide Presence</p>
      </div>

      {/* Main Content Area */}
      <div className="px-8 pb-8 relative z-10">
        {/* Markets Grid with Radar Effect */}
        <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto mb-12 relative">
          {/* Central Radar Ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-green-400/20 animate-ping"
              style={{ animationDuration: '3s' }}
            />
            <div 
              className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border border-green-400/30 animate-ping"
              style={{ animationDuration: '2s', animationDelay: '0.5s' }}
            />
          </div>

          {markets.map((market, i) => (
            <div 
              key={i} 
              className="group cursor-pointer transition-all duration-500 relative z-10"
              style={{
                animationDelay: `${i * 0.1}s`
              }}
            >
              <div 
                className={`relative w-full aspect-square rounded-2xl border-2 backdrop-blur-xl transition-all duration-700 p-6 ${
                  activeMarket === i 
                    ? 'scale-110 shadow-2xl border-white/70' 
                    : 'border-white/20'
                }`}
                style={{ 
                  backgroundColor: `${market.color}20`,
                  borderColor: activeMarket === i ? market.color : 'rgba(255,255,255,0.2)',
                  boxShadow: activeMarket === i ? `0 0 40px ${market.color}40, 0 0 80px ${market.color}20` : undefined
                }}
              >
                {/* Revenue Flow Animation */}
                {activeMarket === i && (
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-sweep"
                      style={{ animation: 'sweep 2s infinite' }}
                    />
                  </div>
                )}

                <div className="relative flex flex-col items-center justify-center h-full text-center">
                  <market.icon 
                    className={`w-10 h-10 md:w-12 md:h-12 text-white mb-4 transition-all duration-500 ${
                      activeMarket === i ? 'scale-125 drop-shadow-lg' : ''
                    }`} 
                  />
                  <span className="text-white font-semibold text-lg mb-2">{market.name}</span>
                  <span className="text-green-400 font-bold text-sm">{market.growth}</span>
                  <span className="text-blue-400 font-bold text-sm">{market.revenue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { value: '4', label: 'Markets', color: '#10B981' },
              { value: '$9.8M', label: 'Total Revenue', color: '#3B82F6' },
              { value: '35%', label: 'Avg Growth', color: '#F59E0B' }
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center backdrop-blur-xl rounded-xl border border-white/10 px-6 py-4 min-w-[120px] animate-fadeInUp"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}10, rgba(255,255,255,0.05))`,
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: 'backwards'
                }}
              >
                <div className="text-lg md:text-xl font-bold mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes sweep {
          0% { transform: translateX(-100%) skewX(-30deg); }
          100% { transform: translateX(200%) skewX(-30deg); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}

// About Page - Dynamic DNA Core & Evolution Timeline
export function CompanyDNAViz() {
  const [activeValue, setActiveValue] = useState(0)
  const [evolutionPhase, setEvolutionPhase] = useState(0)
  
  const values = [
    { name: 'Innovation', icon: Lightbulb, color: '#FF4500', description: 'Cutting-edge solutions', intensity: 95 },
    { name: 'Excellence', icon: Award, color: '#9932CC', description: 'Quality-first approach', intensity: 98 },
    { name: 'Impact', icon: Heart, color: '#DC143C', description: 'Meaningful change', intensity: 92 },
    { name: 'Growth', icon: TrendingUp, color: '#32CD32', description: 'Continuous evolution', intensity: 88 },
  ]

  const milestones = [
    { year: '2020', event: 'Founded', icon: Building2, metric: 'Day 1', impact: 85 },
    { year: '2021', event: '$1M Revenue', icon: DollarSign, metric: '12 months', impact: 90 },
    { year: '2022', event: '50+ Team', icon: Users, metric: '24 months', impact: 94 },
    { year: '2023', event: 'Global Expansion', icon: Globe, metric: '36 months', impact: 97 },
    { year: '2024', event: 'AI Innovation', icon: Brain, metric: '48 months', impact: 100 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length)
      setEvolutionPhase((prev) => (prev + 1) % milestones.length)
    }, 1100) // Fast DNA replication speed
    return () => clearInterval(interval)
  }, [values.length, milestones.length])

  return (
    <div className="relative w-full h-auto bg-gradient-to-br from-indigo-950/90 via-purple-950/50 to-pink-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
      {/* DNA Helix Animation */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full relative">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full animate-bounce"
              style={{
                left: `${50 + Math.sin(i * 0.5) * 30}%`,
                top: `${20 + i * 3}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Header Section */}
      <div className="text-center py-8 px-6 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Company DNA</h3>
        <p className="text-sm md:text-base text-white/60">Our Values & Journey</p>
      </div>

      {/* Main Content Area */}
      <div className="px-8 pb-8 relative z-10">
        {/* Values Grid with Central Pulse */}
        <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto mb-16 relative">
          {/* Central DNA Core */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-indigo-400/30 animate-spin-slow"
                style={{ animation: 'spin-slow 8s linear infinite' }}
              />
              <div 
                className="absolute inset-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-600/20 animate-pulse"
              />
              <Heart className="absolute inset-0 m-auto w-6 h-6 md:w-8 md:h-8 text-white/60" />
            </div>
          </div>

          {values.map((value, i) => (
            <div 
              key={i} 
              className="group cursor-pointer transition-all duration-700 relative z-10"
              style={{
                animationDelay: `${i * 0.2}s`
              }}
            >
              <div 
                className={`relative w-full aspect-square rounded-2xl border-2 backdrop-blur-xl transition-all duration-700 p-6 ${
                  activeValue === i 
                    ? 'scale-110 shadow-2xl border-white/70' 
                    : 'border-white/20'
                }`}
                style={{ 
                  backgroundColor: `${value.color}20`,
                  borderColor: activeValue === i ? value.color : 'rgba(255,255,255,0.2)',
                  boxShadow: activeValue === i ? `0 0 40px ${value.color}40, 0 0 80px ${value.color}20` : undefined
                }}
              >
                {/* Energy Rings */}
                {activeValue === i && (
                  <>
                    <div 
                      className="absolute -inset-2 rounded-2xl border border-white/20 animate-ping"
                      style={{ animationDuration: '2s' }}
                    />
                    <div 
                      className="absolute -inset-4 rounded-2xl border border-white/10 animate-ping"
                      style={{ animationDuration: '3s', animationDelay: '0.5s' }}
                    />
                  </>
                )}

                <div className="relative flex flex-col items-center justify-center h-full text-center">
                  <value.icon 
                    className={`w-10 h-10 md:w-12 md:h-12 text-white mb-4 transition-all duration-500 ${
                      activeValue === i ? 'scale-125 drop-shadow-lg' : ''
                    }`} 
                  />
                  <span className="text-white font-semibold text-lg mb-2">{value.name}</span>
                  <span className="text-white/60 text-sm mb-2">{value.description}</span>
                  <span className="text-green-400 font-bold text-sm">{value.projects}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Timeline */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className="text-center backdrop-blur-xl rounded-xl border border-white/10 p-4 min-w-[100px] transition-all duration-500 animate-fadeInUp"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                animationDelay: `${i * 0.1}s`,
                animationFillMode: 'backwards'
              }}
            >
              <milestone.icon className="w-6 h-6 text-white mx-auto mb-2" />
              <div className="text-sm text-white font-bold mb-1">{milestone.year}</div>
              <div className="text-xs text-white/70 mb-2">{milestone.event}</div>
              <div className="text-xs text-indigo-400 font-bold">{milestone.metric}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}

// TRON America Page - High-Speed Startup Accelerator
export function StartupPipeline() {
  const [activeStage, setActiveStage] = useState(0)
  const [velocity, setVelocity] = useState(0)
  
  const stages = [
    { name: 'Applications', icon: FileText, color: 'from-red-500 to-orange-500', count: '500', rate: '100%', velocity: 95 },
    { name: 'Screening', icon: Search, color: 'from-orange-500 to-yellow-500', count: '125', rate: '25%', velocity: 88 },
    { name: 'Interviews', icon: Users, color: 'from-yellow-500 to-green-500', count: '50', rate: '10%', velocity: 92 },
    { name: 'Incubation', icon: Building, color: 'from-green-500 to-blue-500', count: '20', rate: '4%', velocity: 97 },
    { name: 'Success', icon: Star, color: 'from-blue-500 to-purple-500', count: '12', rate: '2.4%', velocity: 100 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
      setVelocity(stages[activeStage]?.velocity || 0)
    }, 1200) // Accelerator speed
    return () => clearInterval(interval)
  }, [stages.length, activeStage])

  return (
    <div className="relative w-full h-auto bg-gradient-to-br from-black via-red-950/95 to-orange-950/90 backdrop-blur-xl rounded-2xl border border-red-500/30 overflow-hidden">
      {/* Accelerator Velocity Field */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          {/* Speed lines */}
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={50 + i * 45}
              x2="800"
              y2={50 + i * 45}
              stroke="url(#speedGradient)"
              strokeWidth="1"
              opacity="0.7"
              className="animate-pulse"
              style={{ 
                animationDuration: `${0.2 + i * 0.05}s`,
                animationDelay: `${i * 0.03}s`
              }}
            />
          ))}
          <defs>
            <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#FF4500" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Velocity indicators */}
      <div className="absolute inset-0 opacity-25">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full animate-ping"
            style={{
              left: `${velocity + i * 4}%`,
              top: `${10 + Math.sin(i * 0.8) * 30}%`,
              animationDelay: `${i * 0.03}s`,
              animationDuration: '0.4s',
              transform: `translateX(${velocity * 2}px)`
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <div className="text-center py-8 px-6 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Startup Acceleration Pipeline</h3>
        <p className="text-sm md:text-base text-white/60">From Application to Success</p>
      </div>
      
      {/* Main Content Area */}
      <div className="px-8 pb-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Pipeline with Progress Indicators */}
          <div className="space-y-8 mb-16 relative">
            {/* Progress Line */}
            <div className="absolute left-6 top-0 bottom-16 w-0.5 bg-gradient-to-b from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 opacity-30" />
            
            {stages.map((stage, i) => (
              <div 
                key={i} 
                className="w-full relative"
                style={{
                  animationDelay: `${i * 0.15}s`
                }}
              >
                {/* Progress Indicator */}
                <div 
                  className={`absolute left-4 w-4 h-4 rounded-full border-2 border-white z-20 transition-all duration-700 ${
                    activeStage >= i ? 'bg-white scale-125' : 'bg-transparent'
                  }`}
                  style={{
                    top: '24px',
                    boxShadow: activeStage >= i ? '0 0 20px rgba(255,255,255,0.5)' : undefined
                  }}
                />

                {/* Stage Card */}
                <div
                  className={`bg-gradient-to-r ${stage.color} rounded-xl border-2 border-white/20 p-6 transition-all duration-700 cursor-pointer ml-12 ${
                    activeStage === i 
                      ? 'border-white/70 shadow-2xl scale-[1.02] shadow-white/20' 
                      : 'hover:scale-[1.01]'
                  }`}
                  style={{
                    boxShadow: activeStage === i ? '0 0 30px rgba(255,255,255,0.2)' : undefined
                  }}
                >
                  {/* Progress Flow Effect */}
                  {activeStage === i && (
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-flow"
                        style={{ animation: 'flow 2s infinite' }}
                      />
                    </div>
                  )}

                  <div className="relative flex items-center justify-between">
                    {/* Stage Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <stage.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl">{stage.name}</div>
                        <div className="text-white/80 text-sm">{stage.rate} Selection Rate</div>
                        <div className="text-white/60 text-sm">{stage.success}</div>
                      </div>
                    </div>
                    
                    {/* Count with Counter Effect */}
                    <div className="text-right">
                      <div 
                        className={`text-white font-bold text-3xl transition-all duration-500 ${
                          activeStage === i ? 'scale-110' : ''
                        }`}
                      >
                        {stage.count}
                      </div>
                      <div className="text-white/80 text-sm">Startups</div>
                    </div>
                  </div>
                </div>
                
                {/* Flow Arrow */}
                {i < stages.length - 1 && (
                  <div className="flex justify-center py-4 relative">
                    <ArrowRight 
                      className={`w-6 h-6 text-white/60 transition-all duration-500 transform rotate-90 ${
                        activeStage === i ? 'text-yellow-300 scale-125 animate-bounce' : ''
                      }`} 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { value: '$4.2M', label: 'Deployed Capital', color: '#10B981' },
              { value: '92%', label: 'Success Rate', color: '#3B82F6' },
              { value: '180+', label: 'Jobs Created', color: '#F59E0B' }
            ].map((metric, i) => (
              <div
                key={i}
                className="text-center backdrop-blur-xl rounded-xl border border-white/10 px-6 py-4 min-w-[120px] animate-fadeInUp"
                style={{
                  background: `linear-gradient(135deg, ${metric.color}10, rgba(255,255,255,0.05))`,
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: 'backwards'
                }}
              >
                <div className="text-lg md:text-xl font-bold mb-1" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="text-sm text-white/70">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}

 