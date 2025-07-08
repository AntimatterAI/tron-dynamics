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

// Capabilities Page - Clean Service Grid
export function ServiceIntegrationMatrix() {
  const [activeService, setActiveService] = useState(0)
  
  const services = [
    { name: 'AI/ML', icon: Brain, color: '#3B82F6', projects: '25+' },
    { name: 'Blockchain', icon: Link, color: '#8B5CF6', projects: '15+' },
    { name: 'IoT', icon: Wifi, color: '#10B981', projects: '30+' },
    { name: 'Cloud', icon: Cloud, color: '#F59E0B', projects: '40+' },
    { name: 'Mobile', icon: Smartphone, color: '#EF4444', projects: '35+' },
    { name: 'Web', icon: Globe, color: '#06B6D4', projects: '50+' },
    { name: 'Data', icon: Database, color: '#84CC16', projects: '28+' },
    { name: 'Security', icon: Shield, color: '#F97316', projects: '22+' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div className="relative w-full h-auto bg-gradient-to-br from-blue-950/90 to-purple-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
      {/* Header Section */}
      <div className="text-center py-8 px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Service Integration Matrix</h3>
        <p className="text-sm md:text-base text-white/60">Connected Technology Stack</p>
      </div>

      {/* Main Content Area */}
      <div className="px-8 pb-8">
        {/* Services Grid - Professional Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setActiveService(i)}
            >
              <div 
                className={`relative w-full aspect-square rounded-2xl border-2 backdrop-blur-xl transition-all duration-300 p-4 ${
                  activeService === i ? 'scale-110 shadow-2xl border-white/70' : 'border-white/20'
                }`}
                style={{ 
                  backgroundColor: `${service.color}20`,
                  borderColor: activeService === i ? `${service.color}` : 'rgba(255,255,255,0.2)'
                }}
              >
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white mb-3" />
                  <span className="text-white font-semibold text-sm md:text-base">{service.name}</span>
                  <span className="text-white/60 text-xs mt-1">{service.projects} projects</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { value: '150+', label: 'Integrations', color: '#3B82F6' },
              { value: '99.9%', label: 'Uptime', color: '#10B981' },
              { value: '24/7', label: 'Support', color: '#F59E0B' }
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 px-6 py-4 min-w-[120px]"
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

// Innovation Page - Clean Pipeline Flow
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
    <div className="relative w-full h-auto bg-gradient-to-br from-purple-950/90 to-pink-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
      {/* Header Section */}
      <div className="text-center py-8 px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Innovation Pipeline</h3>
        <p className="text-sm md:text-base text-white/60">From Idea to Market</p>
      </div>

      {/* Main Content Area */}
      <div className="px-8 pb-8">
        {/* Pipeline Flow - Horizontal Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-6xl mx-auto mb-12">
          {phases.map((phase, i) => (
            <React.Fragment key={i}>
              <div 
                className="group cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActivePhase(i)}
              >
                <div 
                  className={`relative w-32 h-32 md:w-40 md:h-40 rounded-2xl border-2 backdrop-blur-xl transition-all duration-300 ${
                    activePhase === i ? 'scale-110 shadow-2xl border-white/70' : 'border-white/20'
                  }`}
                  style={{ 
                    backgroundColor: `${phase.color}20`,
                    borderColor: activePhase === i ? phase.color : 'rgba(255,255,255,0.2)'
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                    <phase.icon className="w-8 h-8 md:w-10 md:h-10 text-white mb-2" />
                    <span className="text-white font-semibold text-sm md:text-base">{phase.name}</span>
                    <span className="text-white/60 text-xs mt-1">{phase.success}</span>
                  </div>
                </div>
              </div>
              
              {/* Arrow between phases */}
              {i < phases.length - 1 && (
                <ArrowRight className="w-6 h-6 text-white/40 hidden md:block" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { value: '200+', label: 'Projects', color: '#8B5CF6' },
              { value: '85%', label: 'Success Rate', color: '#10B981' },
              { value: '12mo', label: 'Avg Timeline', color: '#F59E0B' }
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 px-6 py-4 min-w-[120px]"
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

// Business Development Page - Clean Market Grid
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
    <div className="relative w-full h-auto bg-gradient-to-br from-green-950/90 to-blue-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
      {/* Header Section */}
      <div className="text-center py-8 px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Global Market Expansion</h3>
        <p className="text-sm md:text-base text-white/60">Growing Worldwide Presence</p>
      </div>

      {/* Main Content Area */}
      <div className="px-8 pb-8">
        {/* Markets Grid */}
        <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto mb-12">
          {markets.map((market, i) => (
            <div 
              key={i} 
              className="group cursor-pointer transition-all duration-300"
              onMouseEnter={() => setActiveMarket(i)}
            >
              <div 
                className={`relative w-full aspect-square rounded-2xl border-2 backdrop-blur-xl transition-all duration-300 p-6 ${
                  activeMarket === i ? 'scale-105 shadow-2xl border-white/70' : 'border-white/20'
                }`}
                style={{ 
                  backgroundColor: `${market.color}20`,
                  borderColor: activeMarket === i ? market.color : 'rgba(255,255,255,0.2)'
                }}
              >
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <market.icon className="w-10 h-10 md:w-12 md:h-12 text-white mb-4" />
                  <span className="text-white font-semibold text-lg mb-2">{market.name}</span>
                  <span className="text-green-400 font-bold text-sm">{market.growth}</span>
                  <span className="text-blue-400 font-bold text-sm">{market.revenue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { value: '4', label: 'Markets', color: '#10B981' },
              { value: '$9.8M', label: 'Total Revenue', color: '#3B82F6' },
              { value: '35%', label: 'Avg Growth', color: '#F59E0B' }
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 px-6 py-4 min-w-[120px]"
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

// About Page - Clean Values Layout
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
    <div className="relative w-full h-auto bg-gradient-to-br from-indigo-950/90 via-purple-950/50 to-pink-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
      {/* Header Section */}
      <div className="text-center py-8 px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Company DNA</h3>
        <p className="text-sm md:text-base text-white/60">Our Values & Journey</p>
      </div>

      {/* Main Content Area */}
      <div className="px-8 pb-8">
        {/* Values Grid */}
        <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto mb-16">
          {values.map((value, i) => (
            <div 
              key={i} 
              className="group cursor-pointer transition-all duration-300"
              onMouseEnter={() => setActiveValue(i)}
            >
              <div 
                className={`relative w-full aspect-square rounded-2xl border-2 backdrop-blur-xl transition-all duration-300 p-6 ${
                  activeValue === i ? 'scale-105 shadow-2xl border-white/70' : 'border-white/20'
                }`}
                style={{ 
                  backgroundColor: `${value.color}20`,
                  borderColor: activeValue === i ? value.color : 'rgba(255,255,255,0.2)'
                }}
              >
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <value.icon className="w-10 h-10 md:w-12 md:h-12 text-white mb-4" />
                  <span className="text-white font-semibold text-lg mb-2">{value.name}</span>
                  <span className="text-white/60 text-sm mb-2">{value.description}</span>
                  <span className="text-green-400 font-bold text-sm">{value.projects}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className="text-center bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4 min-w-[100px] hover:scale-105 transition-transform"
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

// TRON America Page - Clean Vertical Pipeline (NO OVERLAPS)
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
    <div className="relative w-full h-auto bg-gradient-to-br from-slate-900/90 to-red-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
      {/* Header Section */}
      <div className="text-center py-8 px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Startup Acceleration Pipeline</h3>
        <p className="text-sm md:text-base text-white/60">From Application to Success</p>
      </div>
      
      {/* Main Content Area - Clean Vertical Layout */}
      <div className="px-8 pb-8">
        <div className="max-w-2xl mx-auto">
          {/* Pipeline Stages - Properly Spaced */}
          <div className="space-y-8 mb-16">
            {stages.map((stage, i) => (
              <div 
                key={i} 
                className="w-full"
                onMouseEnter={() => setActiveStage(i)}
              >
                {/* Stage Card - Full Width, No Overlap */}
                <div
                  className={`bg-gradient-to-r ${stage.color} rounded-xl border-2 border-white/20 p-6 transition-all duration-300 cursor-pointer ${
                    activeStage === i ? 'border-white/70 shadow-2xl scale-[1.02]' : 'hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-center justify-between">
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
                    
                    {/* Count */}
                    <div className="text-right">
                      <div className="text-white font-bold text-3xl">{stage.count}</div>
                      <div className="text-white/80 text-sm">Startups</div>
                    </div>
                  </div>
                </div>
                
                {/* Flow Arrow - Centered, Proper Spacing */}
                {i < stages.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className={`w-6 h-6 text-white/60 transition-all duration-300 transform rotate-90 ${
                      activeStage === i ? 'text-yellow-300 scale-125' : ''
                    }`} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { value: '$4.2M', label: 'Deployed Capital', color: '#10B981' },
              { value: '92%', label: 'Success Rate', color: '#3B82F6' },
              { value: '180+', label: 'Jobs Created', color: '#F59E0B' }
            ].map((metric, i) => (
              <div
                key={i}
                className="text-center bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 px-6 py-4 min-w-[120px]"
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

 