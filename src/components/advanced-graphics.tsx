"use client"

import React, { useState, useEffect, useMemo } from 'react'
import { 
  Settings, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Lightbulb, 
  Cpu, 
  Code, 
  Server,
  Award,
  Heart,
  TrendingUp,
  Building2,
  DollarSign,
  Users,
  Brain,
  FileText,
  Search,
  Building,
  Star,
  ArrowRight
} from 'lucide-react'

// Portfolio Page - Service Integration Matrix with simplified animations
export function ServiceIntegrationMatrix() {
  const [activeService, setActiveService] = useState(0)

  const services = useMemo(() => [
    { name: 'AI/ML', icon: Cpu, color: '#8B5CF6', integration: '150+', performance: '99.9%' },
    { name: 'Cloud', icon: Server, color: '#06B6D4', integration: '200+', performance: '99.8%' },
    { name: 'Security', icon: Shield, color: '#EF4444', integration: '85+', performance: '100%' },
    { name: 'Analytics', icon: Database, color: '#10B981', integration: '120+', performance: '99.7%' },
  ], [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [services])

  return (
    <div className="relative w-full h-auto bg-gradient-to-br from-slate-900 via-blue-900/50 to-purple-900/30 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
      <div className="text-center py-8 px-6 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Service Integration Matrix</h3>
        <p className="text-sm md:text-base text-white/60">Connected Technology Stack</p>
      </div>
      
      <div className="px-8 pb-8 relative z-10">
        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto mb-12">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`group cursor-pointer transition-all duration-500 ${
                activeService === i ? 'scale-105' : 'hover:scale-[1.02]'
              }`}
            >
              <div 
                className={`relative w-full aspect-square rounded-2xl border-2 backdrop-blur-xl transition-all duration-500 p-6 ${
                  activeService === i 
                    ? 'border-white/70 shadow-2xl' 
                    : 'border-white/20'
                }`}
                style={{ 
                  backgroundColor: `${service.color}20`,
                  boxShadow: activeService === i ? `0 0 30px ${service.color}40` : undefined
                }}
              >
                <div className="relative flex flex-col items-center justify-center h-full text-center">
                  <service.icon 
                    className={`w-10 h-10 md:w-12 md:h-12 text-white mb-4 transition-all duration-300 ${
                      activeService === i ? 'scale-110' : ''
                    }`} 
                  />
                  <span className="text-white font-semibold text-lg mb-2">{service.name}</span>
                  <span className="text-green-400 font-bold text-sm">{service.integration} APIs</span>
                  <span className="text-blue-400 font-bold text-sm">{service.performance} Uptime</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { value: '150+', label: 'Integrations', color: '#3B82F6' },
              { value: '99.9%', label: 'Uptime', color: '#10B981' },
              { value: '24/7', label: 'Support', color: '#F59E0B' }
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center backdrop-blur-xl rounded-xl border border-white/10 px-6 py-4 min-w-[120px] transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}10, rgba(255,255,255,0.05))`
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
    </div>
  )
}

// Innovation Page - Simplified Innovation Pipeline
export function InnovationPipeline() {
  const [activeStage, setActiveStage] = useState(0)
  
  const stages = useMemo(() => [
    { name: 'Research', icon: Lightbulb, color: '#F59E0B', projects: 45, success: '92%' },
    { name: 'Development', icon: Code, color: '#8B5CF6', projects: 38, success: '87%' },
    { name: 'Testing', icon: Settings, color: '#06B6D4', projects: 29, success: '94%' },
    { name: 'Deployment', icon: Zap, color: '#10B981', projects: 22, success: '98%' },
  ], [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [stages])

  return (
    <div className="relative w-full h-auto bg-gradient-to-br from-purple-900 via-indigo-900/50 to-blue-900/30 backdrop-blur-xl rounded-2xl border border-purple-500/30 overflow-hidden">
      <div className="text-center py-8 px-6 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Innovation Pipeline</h3>
        <p className="text-sm md:text-base text-white/60">From Concept to Reality</p>
      </div>
      
      <div className="px-8 pb-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Pipeline Stages */}
          <div className="space-y-6 mb-12 relative">
            {stages.map((stage, i) => (
              <div 
                key={i} 
                className={`w-full transition-all duration-500 ${
                  activeStage === i ? 'scale-[1.02]' : ''
                }`}
              >
                <div
                  className={`bg-gradient-to-r from-white/5 to-white/10 rounded-xl border-2 p-6 transition-all duration-500 cursor-pointer ${
                    activeStage === i 
                      ? 'border-white/70 shadow-2xl' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  style={{
                    backgroundColor: activeStage === i ? `${stage.color}20` : undefined,
                    boxShadow: activeStage === i ? `0 0 30px ${stage.color}40` : undefined
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <stage.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl">{stage.name}</div>
                        <div className="text-white/80 text-sm">{stage.success} Success Rate</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-white font-bold text-3xl">{stage.projects}</div>
                      <div className="text-white/80 text-sm">Projects</div>
                    </div>
                  </div>
                </div>
                
                {i < stages.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-white/60" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                { value: '200+', label: 'Projects', color: '#8B5CF6' },
                { value: '94%', label: 'Success Rate', color: '#10B981' },
                { value: '12mo', label: 'Avg Timeline', color: '#F59E0B' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center backdrop-blur-xl rounded-xl border border-white/10 px-6 py-4 min-w-[120px] transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}10, rgba(255,255,255,0.05))`
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
      </div>
    </div>
  )
}

// Ventures Page - Market Expansion with simple animations
export function MarketExpansionViz() {
  const [activeMarket, setActiveMarket] = useState(0)
  
  const markets = useMemo(() => [
    { name: 'North America', icon: Globe, color: '#10B981', growth: '+35%', revenue: '$4.2M' },
    { name: 'Europe', icon: Building2, color: '#3B82F6', growth: '+28%', revenue: '$2.8M' },
    { name: 'Africa', icon: Heart, color: '#F59E0B', growth: '+45%', revenue: '$1.9M' },
    { name: 'Asia-Pacific', icon: TrendingUp, color: '#8B5CF6', growth: '+52%', revenue: '$0.9M' },
  ], [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMarket((prev) => (prev + 1) % markets.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [markets])

  return (
    <div className="relative w-full h-auto bg-gradient-to-br from-green-950/90 via-blue-950/50 to-indigo-950/30 backdrop-blur-xl rounded-2xl border border-green-500/30 overflow-hidden">
      <div className="text-center py-8 px-6 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Global Market Expansion</h3>
        <p className="text-sm md:text-base text-white/60">Revenue Growth by Region</p>
      </div>
      
      <div className="px-8 pb-8 relative z-10">
        <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto mb-12">
          {markets.map((market, i) => (
            <div 
              key={i} 
              className={`group cursor-pointer transition-all duration-500 ${
                activeMarket === i ? 'scale-105' : 'hover:scale-[1.02]'
              }`}
            >
              <div 
                className={`relative w-full aspect-square rounded-2xl border-2 backdrop-blur-xl transition-all duration-500 p-6 ${
                  activeMarket === i 
                    ? 'border-white/70 shadow-2xl' 
                    : 'border-white/20'
                }`}
                style={{ 
                  backgroundColor: `${market.color}20`,
                  boxShadow: activeMarket === i ? `0 0 30px ${market.color}40` : undefined
                }}
              >
                <div className="relative flex flex-col items-center justify-center h-full text-center">
                  <market.icon 
                    className={`w-10 h-10 md:w-12 md:h-12 text-white mb-4 transition-all duration-300 ${
                      activeMarket === i ? 'scale-110' : ''
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

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { value: '4', label: 'Markets', color: '#10B981' },
              { value: '$9.8M', label: 'Total Revenue', color: '#3B82F6' },
              { value: '35%', label: 'Avg Growth', color: '#F59E0B' }
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center backdrop-blur-xl rounded-xl border border-white/10 px-6 py-4 min-w-[120px] transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}10, rgba(255,255,255,0.05))`
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
    </div>
  )
}

// About Page - Company DNA with simplified animations
export function CompanyDNAViz() {
  const [activeValue, setActiveValue] = useState(0)
  
  const values = useMemo(() => [
    { name: 'Innovation', icon: Lightbulb, color: '#FF4500', description: 'Cutting-edge solutions', intensity: 95 },
    { name: 'Excellence', icon: Award, color: '#9932CC', description: 'Quality-first approach', intensity: 98 },
    { name: 'Impact', icon: Heart, color: '#DC143C', description: 'Meaningful change', intensity: 92 },
    { name: 'Growth', icon: TrendingUp, color: '#32CD32', description: 'Continuous evolution', intensity: 88 },
  ], [])

  const milestones = useMemo(() => [
    { year: '2020', event: 'Founded', icon: Building2, metric: 'Day 1', impact: 85 },
    { year: '2021', event: '$1M Revenue', icon: DollarSign, metric: '12 months', impact: 90 },
    { year: '2022', event: '50+ Team', icon: Users, metric: '24 months', impact: 94 },
    { year: '2023', event: 'Global Expansion', icon: Globe, metric: '36 months', impact: 97 },
    { year: '2024', event: 'AI Innovation', icon: Brain, metric: '48 months', impact: 100 },
  ], [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [values])

  return (
    <div className="relative w-full h-auto bg-gradient-to-br from-indigo-950/90 via-purple-950/50 to-pink-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
      <div className="text-center py-8 px-6 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Company DNA</h3>
        <p className="text-sm md:text-base text-white/60">Our Values & Journey</p>
      </div>

      <div className="px-8 pb-8 relative z-10">
        <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto mb-16">
          {values.map((value, i) => (
            <div 
              key={i} 
              className={`group cursor-pointer transition-all duration-500 ${
                activeValue === i ? 'scale-105' : 'hover:scale-[1.02]'
              }`}
            >
              <div 
                className={`relative w-full aspect-square rounded-2xl border-2 backdrop-blur-xl transition-all duration-500 p-6 ${
                  activeValue === i 
                    ? 'border-white/70 shadow-2xl' 
                    : 'border-white/20'
                }`}
                style={{ 
                  backgroundColor: `${value.color}20`,
                  boxShadow: activeValue === i ? `0 0 30px ${value.color}40` : undefined
                }}
              >
                <div className="relative flex flex-col items-center justify-center h-full text-center">
                  <value.icon 
                    className={`w-10 h-10 md:w-12 md:h-12 text-white mb-4 transition-all duration-300 ${
                      activeValue === i ? 'scale-110' : ''
                    }`} 
                  />
                  <span className="text-white font-semibold text-lg mb-2">{value.name}</span>
                  <span className="text-white/60 text-sm mb-2">{value.description}</span>
                  <span className="text-green-400 font-bold text-sm">{value.intensity}% Intensity</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className="text-center backdrop-blur-xl rounded-xl border border-white/10 p-4 min-w-[100px] transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))'
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
    </div>
  )
}

// TRON America Page - Startup Pipeline with simplified animations
export function StartupPipeline() {
  const [activeStage, setActiveStage] = useState(0)
  
  const stages = useMemo(() => [
    { name: 'Applications', icon: FileText, color: 'from-red-500 to-orange-500', count: '500', rate: '100%', velocity: 95 },
    { name: 'Screening', icon: Search, color: 'from-orange-500 to-yellow-500', count: '125', rate: '25%', velocity: 88 },
    { name: 'Interviews', icon: Users, color: 'from-yellow-500 to-green-500', count: '50', rate: '10%', velocity: 92 },
    { name: 'Incubation', icon: Building, color: 'from-green-500 to-blue-500', count: '20', rate: '4%', velocity: 97 },
    { name: 'Success', icon: Star, color: 'from-blue-500 to-purple-500', count: '12', rate: '2.4%', velocity: 100 },
  ], [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [stages])

  return (
    <div className="relative w-full h-auto bg-gradient-to-br from-black via-red-950/95 to-orange-950/90 backdrop-blur-xl rounded-2xl border border-red-500/30 overflow-hidden">
      <div className="text-center py-8 px-6 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Startup Acceleration Pipeline</h3>
        <p className="text-sm md:text-base text-white/60">From Application to Success</p>
      </div>
      
      <div className="px-8 pb-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8 mb-16">
            {stages.map((stage, i) => (
              <div 
                key={i} 
                className={`w-full transition-all duration-500 ${
                  activeStage === i ? 'scale-[1.02]' : ''
                }`}
              >
                <div
                  className={`bg-gradient-to-r ${stage.color} rounded-xl border-2 p-6 transition-all duration-500 cursor-pointer ${
                    activeStage === i 
                      ? 'border-white/70 shadow-2xl' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <stage.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl">{stage.name}</div>
                        <div className="text-white/80 text-sm">{stage.rate} Selection Rate</div>
                        <div className="text-white/60 text-sm">Velocity: {stage.velocity}%</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-white font-bold text-3xl">{stage.count}</div>
                      <div className="text-white/80 text-sm">Startups</div>
                    </div>
                  </div>
                </div>
                
                {i < stages.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-white/60 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { value: '$4.2M', label: 'Deployed Capital', color: '#10B981' },
              { value: '92%', label: 'Success Rate', color: '#3B82F6' },
              { value: '180+', label: 'Jobs Created', color: '#F59E0B' }
            ].map((metric, i) => (
              <div
                key={i}
                className="text-center backdrop-blur-xl rounded-xl border border-white/10 px-6 py-4 min-w-[120px] transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${metric.color}10, rgba(255,255,255,0.05))`
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
    </div>
  )
}

 