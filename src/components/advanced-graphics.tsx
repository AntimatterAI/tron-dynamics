"use client"

import { useState, useEffect } from 'react'
import { 
  Palette, 
  Shield, 
  Lightbulb, 
  Search, 
  Code, 
  Rocket, 
  Users, 
  TrendingUp, 
  Target, 
  Heart, 
  Zap,
  Building2,
  BarChart3
} from 'lucide-react'

// Capabilities Page - Service Integration Matrix
export function ServiceIntegrationMatrix() {
  const [activeService, setActiveService] = useState(0)
  
  const services = [
    { 
      name: 'Development', 
      icon: Code, 
      color: 'from-blue-500 to-cyan-400',
      position: { x: 20, y: 20 }
    },
    { 
      name: 'Design', 
      icon: Palette, 
      color: 'from-purple-500 to-pink-400',
      position: { x: 80, y: 20 }
    },
    { 
      name: 'Security', 
      icon: Shield, 
      color: 'from-green-500 to-emerald-400',
      position: { x: 50, y: 70 }
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-950/50 to-blue-950/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-8">
      <h3 className="text-white font-medium text-center mb-8">Service Integration Matrix</h3>
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(90deg,_rgba(255,255,255,0.1)_1px,_transparent_1px),_linear-gradient(rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Service Nodes */}
      {services.map((service, i) => (
        <div key={i} className="absolute">
          <div
            className={`w-24 h-24 bg-gradient-to-br ${service.color} rounded-full border border-white/30 flex items-center justify-center backdrop-blur-xl cursor-pointer transition-all duration-300 ${
              activeService === i ? 'scale-110 shadow-lg' : 'scale-100'
            }`}
            style={{
              left: `${service.position.x}%`,
              top: `${service.position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onMouseEnter={() => setActiveService(i)}
          >
            <service.icon className="w-12 h-12 text-white" />
          </div>

          {/* Service Label */}
          <div
            className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-white font-medium text-sm text-center"
            style={{
              left: `${service.position.x}%`,
              top: `${service.position.y + 12}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {service.name}
          </div>
        </div>
      ))}

      {/* Static Integration Indicators */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 bg-blue-400 rounded-full transition-opacity duration-1000 ${
            activeService === i % 3 ? 'opacity-100' : 'opacity-30'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

// Innovation Page - Innovation Pipeline
export function InnovationPipeline() {
  const [currentPhase, setCurrentPhase] = useState(0)
  
  const phases = [
    { name: 'Research', icon: Search, color: 'from-purple-600 to-blue-500' },
    { name: 'Ideation', icon: Lightbulb, color: 'from-blue-600 to-green-500' },
    { name: 'Development', icon: Code, color: 'from-green-600 to-yellow-500' },
    { name: 'Testing', icon: Target, color: 'from-yellow-600 to-orange-500' },
    { name: 'Launch', icon: Rocket, color: 'from-orange-600 to-red-500' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [phases.length])

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-950/50 to-purple-950/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-8">
      <h3 className="text-white font-medium text-center mb-8">Innovation Pipeline</h3>
      
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
        <div className="flex justify-between items-center px-12">
          {phases.map((phase, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center transition-all duration-500 ${
                currentPhase === i ? 'scale-120 -translate-y-5' : 'scale-100'
              }`}
            >
              {/* Phase Icon */}
              <div
                className={`w-20 h-20 bg-gradient-to-br ${phase.color} rounded-full border-4 border-white/20 flex items-center justify-center backdrop-blur-xl relative z-10 transition-all duration-300 ${
                  currentPhase === i ? 'shadow-xl' : ''
                }`}
              >
                <phase.icon className="w-10 h-10 text-white" />
              </div>

              {/* Phase Label */}
              <div
                className={`mt-4 text-white font-medium text-sm text-center transition-all duration-300 ${
                  currentPhase === i ? 'opacity-100 scale-110' : 'opacity-60 scale-100'
                }`}
              >
                {phase.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {phases.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i <= currentPhase ? 'bg-purple-400' : 'bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Business Development Page - Market Expansion Visualization  
export function MarketExpansionViz() {
  const [expandingMarket, setExpandingMarket] = useState(0)
  
  const markets = [
    { name: 'West Africa', position: { x: 30, y: 60 }, color: 'text-green-400' },
    { name: 'East Africa', position: { x: 70, y: 50 }, color: 'text-blue-400' },
    { name: 'North America', position: { x: 20, y: 30 }, color: 'text-purple-400' },
    { name: 'Europe', position: { x: 50, y: 25 }, color: 'text-yellow-400' },
    { name: 'Asia Pacific', position: { x: 80, y: 40 }, color: 'text-red-400' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setExpandingMarket((prev) => (prev + 1) % markets.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [markets.length])

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-950/50 to-emerald-950/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-8">
      <h3 className="text-white font-medium text-center mb-8">Global Market Expansion</h3>
      
      {/* World Map Grid */}
      <div className="absolute inset-8 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,135,0.3)_1px,_transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Market Nodes */}
      {markets.map((market, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${market.position.x}%`,
            top: `${market.position.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className={`relative group`}>
            <div
              className={`w-16 h-16 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center ${market.color} transition-all duration-500 ${
                expandingMarket === i ? 'scale-125 border-white/50' : 'scale-100'
              }`}
            >
              <Building2 className="w-8 h-8" />
            </div>
            
            {/* Market Label */}
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center whitespace-nowrap">
              {market.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// About Page - Company DNA Visualization
export function CompanyDNAViz() {
  const dnaElements = [
    { name: 'Innovation', color: 'text-blue-400', icon: Lightbulb },
    { name: 'Excellence', color: 'text-purple-400', icon: Heart },
    { name: 'Community', color: 'text-green-400', icon: Users },
    { name: 'Growth', color: 'text-yellow-400', icon: TrendingUp },
  ]

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-950/50 to-indigo-950/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-8">
      <h3 className="text-white font-medium text-center mb-8">Company DNA</h3>
      
      {/* DNA Helix Structure - Simplified */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-80 h-80">
          {/* DNA Strands - Static for now */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotateZ(${i * 18}deg) translateY(-${100 + i * 5}px)`,
              }}
            >
              <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60" />
            </div>
          ))}

          {/* Counter-rotating DNA strand */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`counter-${i}`}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotateZ(${-i * 18 + 90}deg) translateY(-${100 + i * 5}px)`,
              }}
            >
              <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60" />
            </div>
          ))}
        </div>
      </div>

      {/* Company Values - Static positions */}
      {dnaElements.map((element, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) translate(${100 * Math.cos(i * Math.PI / 2)}px, ${100 * Math.sin(i * Math.PI / 2)}px)`
          }}
        >
          <div
            className={`w-16 h-16 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex flex-col items-center justify-center ${element.color} transition-all duration-300 hover:scale-110`}
          >
            <element.icon className="w-6 h-6" />
            <span className="text-xs text-white mt-1">{element.name}</span>
          </div>
        </div>
      ))}

      {/* Center Core */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-xl">
        <Building2 className="w-10 h-10 text-white" />
      </div>
    </div>
  )
}

// TRON America Page - Startup Pipeline
export function StartupPipeline() {
  const [activeStage, setActiveStage] = useState(0)
  
  const stages = [
    { name: 'Applications', count: 500, color: 'from-red-600 to-orange-500', icon: Users },
    { name: 'Screening', count: 100, color: 'from-orange-600 to-yellow-500', icon: Search },
    { name: 'Interviews', count: 25, color: 'from-yellow-600 to-green-500', icon: Target },
    { name: 'Selection', count: 10, color: 'from-green-600 to-blue-500', icon: BarChart3 },
    { name: 'Incubation', count: 5, color: 'from-blue-600 to-purple-500', icon: Rocket },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [stages.length])

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-950/50 to-red-950/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-8">
      <h3 className="text-white font-medium text-center mb-8">Startup Acceleration Pipeline</h3>
      
      {/* Funnel Visualization */}
      <div className="absolute inset-8 flex items-center justify-center">
        <div className="relative w-full max-w-4xl">
          {stages.map((stage, i) => (
            <div
              key={i}
              className={`relative mb-8 transition-all duration-500 ${
                activeStage === i ? 'scale-105' : 'scale-100'
              }`}
            >
              {/* Funnel Section */}
              <div
                className={`mx-auto bg-gradient-to-r ${stage.color} rounded-lg border border-white/20 flex items-center justify-between p-4 transition-all duration-300 ${
                  activeStage === i ? 'border-white/50 shadow-lg' : ''
                }`}
                style={{
                  width: `${100 - i * 15}%`,
                }}
              >
                <div className="flex items-center gap-3">
                  <stage.icon className="w-6 h-6 text-white" />
                  <span className="text-white font-medium">{stage.name}</span>
                </div>
                <div className="text-white font-bold text-xl">
                  {stage.count}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Rate Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white/60 text-sm">Success Rate</div>
        <div className="text-green-400 font-bold text-lg">1% Selection Rate</div>
      </div>
    </div>
  )
}

// Safe replacement for TechNetworkFloating (from enhanced-graphics)
export function TechNetworkFloating() {
  const nodes = [
    { icon: Code, color: 'text-blue-400', x: 10, y: 20 },
    { icon: Palette, color: 'text-purple-400', x: 80, y: 15 },
    { icon: Shield, color: 'text-green-400', x: 90, y: 60 },
    { icon: Zap, color: 'text-yellow-400', x: 15, y: 70 },
    { icon: Rocket, color: 'text-red-400', x: 60, y: 80 },
  ]

  return (
    <div className="relative w-full h-96 overflow-hidden bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6">
      {/* Floating Nodes */}
      {nodes.map((node, i) => (
        <div
          key={i}
          className={`absolute w-12 h-12 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center ${node.color} transition-all duration-300 hover:scale-110`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        >
          <node.icon className="w-6 h-6" />
        </div>
      ))}
    </div>
  )
}

// Safe replacement for InnovationLabViz (from enhanced-graphics)
export function InnovationLabViz() {
  return (
    <div className="relative w-full h-80 flex items-center justify-center bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-8">
      <div className="relative">
        {/* Central Hub */}
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full border border-blue-400/30 flex items-center justify-center backdrop-blur-xl">
          <Rocket className="w-12 h-12 text-blue-300" />
        </div>

        {/* Orbiting Elements - Static positions */}
        {[
          { icon: Code, radius: 100, color: 'text-blue-400' },
          { icon: Target, radius: 120, color: 'text-green-400' },
          { icon: TrendingUp, radius: 110, color: 'text-purple-400' },
          { icon: Users, radius: 130, color: 'text-red-400' },
        ].map((item, i) => (
          <div
            key={i}
            className={`absolute w-16 h-16 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center ${item.color} transition-all duration-300 hover:scale-110`}
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${item.radius * Math.cos((i * Math.PI * 2) / 4)}px, ${item.radius * Math.sin((i * Math.PI * 2) / 4)}px)`
            }}
          >
            <item.icon className="w-8 h-8" />
          </div>
        ))}
      </div>
    </div>
  )
}

// Safe replacement for BusinessGrowthChart (from enhanced-graphics)
export function BusinessGrowthChart() {
  const dataPoints = [
    { year: '2022', value: 20 },
    { year: '2023', value: 45 },
    { year: '2024', value: 75 },
    { year: '2025', value: 95 },
  ]

  return (
    <div className="relative w-full h-64 bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6">
      <h3 className="text-white font-medium mb-4">Growth Trajectory</h3>
      <div className="relative h-40 flex items-end justify-between px-4">
        {dataPoints.map((point, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <div
              className="w-8 bg-gradient-to-t from-green-600 to-green-400 rounded-t transition-all duration-1000"
              style={{ height: `${point.value * 1.2}px` }}
            />
            <span className="text-xs text-white/60">{point.year}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Safe replacement for TeamNetworkViz (from enhanced-graphics)
export function TeamNetworkViz() {
  const founders = [
    { name: 'Dr. Alvin Glay', color: 'text-blue-400', position: { x: 20, y: 30 } },
    { name: 'Jonathan Massaquoi', color: 'text-green-400', position: { x: 80, y: 30 } },
    { name: 'Paul Wallace', color: 'text-purple-400', position: { x: 50, y: 70 } },
  ]

  return (
    <div className="relative w-full h-96 bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-8">
      <h3 className="text-white font-medium text-center mb-8">Founding Team Network</h3>
      
      <div className="relative h-64">
        {founders.map((founder, i) => (
          <div
            key={i}
            className="absolute transition-all duration-300 hover:scale-110"
            style={{
              left: `${founder.position.x}%`,
              top: `${founder.position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className={`w-20 h-20 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center ${founder.color}`}>
              <Users className="w-10 h-10" />
            </div>
            <div className="text-center mt-2">
              <span className="text-white text-sm font-medium block">{founder.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Safe replacement for AchievementTimeline (from enhanced-graphics)
export function AchievementTimeline() {
  const achievements = [
    { year: '2020', title: 'Company Founded', icon: Building2 },
    { year: '2021', title: 'First Major Client', icon: Target },
    { year: '2022', title: 'Team Expansion', icon: Users },
    { year: '2023', title: 'Industry Recognition', icon: TrendingUp },
    { year: '2024', title: 'Global Reach', icon: BarChart3 },
  ]

  return (
    <div className="relative w-full bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-8">
      <h3 className="text-white font-medium text-center mb-8">Our Journey</h3>
      
      <div className="relative max-w-2xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600" />
        
        {/* Achievement Points */}
        <div className="space-y-16">
          {achievements.map((achievement, i) => (
            <div
              key={i}
              className={`relative flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-4 hover:border-blue-400/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <achievement.icon className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="text-blue-300 font-medium text-sm">{achievement.year}</div>
                      <div className="text-white font-medium">{achievement.title}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Center Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Safe replacement for IncubatorEcosystem (from enhanced-graphics)
export function IncubatorEcosystem() {
  const startups = [
    { name: 'AI Startup', sector: 'AI/ML', stage: 'Seed', x: 20, y: 20 },
    { name: 'FinTech Co', sector: 'Finance', stage: 'Series A', x: 80, y: 25 },
    { name: 'HealthTech', sector: 'Healthcare', stage: 'Pre-Seed', x: 15, y: 70 },
    { name: 'EdTech Pro', sector: 'Education', stage: 'Seed', x: 75, y: 65 },
    { name: 'CyberSec', sector: 'Security', stage: 'Series A', x: 50, y: 80 },
  ]

  return (
    <div className="relative w-full h-96 bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6">
      <h3 className="text-white font-medium text-center mb-6">Incubator Ecosystem</h3>
      
      {/* Central Hub */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-full border border-red-400/30 flex items-center justify-center">
        <Building2 className="w-8 h-8 text-red-300" />
      </div>
      
      {/* Startup Nodes */}
      {startups.map((startup, i) => (
        <div
          key={i}
          className="absolute group"
          style={{
            left: `${startup.x}%`,
            top: `${startup.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="w-12 h-12 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center text-red-400 hover:scale-110 transition-transform cursor-pointer">
            <Rocket className="w-6 h-6" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-slate-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
              <div className="font-medium">{startup.name}</div>
              <div className="text-red-300">{startup.sector} • {startup.stage}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 