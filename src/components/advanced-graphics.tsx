"use client"

import { useState, useEffect } from 'react'
import { 
  Lightbulb, 
  Search, 
  Rocket, 
  Users, 
  TrendingUp, 
  Heart, 
  Building2,
  Cpu,
  Globe,
  Monitor,
  Smartphone,
  Cloud,
  ArrowRight,
  Star,
  Award,
  Briefcase,
  Shield,
  Brain,
  Settings,
  Server,
  CheckCircle,
  DollarSign
} from 'lucide-react'

// Capabilities Page - Technology Stack Ecosystem
export function ServiceIntegrationMatrix() {
  const [activeLayer, setActiveLayer] = useState(0)
  
  const techLayers = [
    { name: 'Frontend', icon: Monitor, color: '#3B82F6', techs: ['React', 'Next.js', 'TypeScript'], clients: '50+' },
    { name: 'Backend', icon: Server, color: '#10B981', techs: ['Node.js', 'Python', 'GraphQL'], clients: '45+' },
    { name: 'Mobile', icon: Smartphone, color: '#8B5CF6', techs: ['React Native', 'Flutter'], clients: '30+' },
    { name: 'Cloud', icon: Cloud, color: '#F59E0B', techs: ['AWS', 'Docker', 'Kubernetes'], clients: '40+' },
    { name: 'Security', icon: Shield, color: '#EF4444', techs: ['OAuth', 'JWT', 'Encryption'], clients: '35+' },
    { name: 'AI/ML', icon: Brain, color: '#EC4899', techs: ['TensorFlow', 'OpenAI', 'PyTorch'], clients: '25+' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % techLayers.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [techLayers.length])

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] h-auto bg-gradient-to-br from-slate-950/90 via-blue-950/50 to-purple-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden p-4 md:p-8">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Central Hub */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-600/30 backdrop-blur-xl border-2 border-white/40 animate-spin-slow" />
          <div className="absolute inset-1 md:inset-2 rounded-full bg-gradient-to-r from-cyan-400/40 to-blue-600/40 backdrop-blur-xl flex items-center justify-center">
            <Cpu className="w-4 h-4 md:w-6 md:h-6 text-cyan-300" />
          </div>
        </div>
      </div>

      {/* Tech Layer Orbits - Much better spacing */}
      <div className="relative h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
        <div className="transform scale-60 md:scale-90 transition-transform duration-300">
        {techLayers.map((layer, index) => {
          // Much larger radius for better spacing
          const radiusBase = 120 + index * 50 // Increased spacing significantly
          const angle = (index * 60) + (activeLayer * 5) // Reduced rotation speed
          const x = Math.cos((angle * Math.PI) / 180) * radiusBase
          const y = Math.sin((angle * Math.PI) / 180) * radiusBase
          
          return (
            <div
              key={layer.name}
              className="absolute transition-all duration-700 ease-in-out hover:scale-110 cursor-pointer group z-20"
              style={{ 
                transform: `translate(${x}px, ${y}px)`,
                zIndex: activeLayer === index ? 30 : 20
              }}
              onMouseEnter={() => setActiveLayer(index)}
            >
              <div
                className={`relative w-12 h-12 md:w-16 md:h-16 rounded-xl border-2 backdrop-blur-xl transition-all duration-500 ${
                  activeLayer === index ? 'scale-125 shadow-2xl border-white/60' : 'border-white/30'
                }`}
                style={{ 
                  backgroundColor: `${layer.color}25`,
                  borderColor: activeLayer === index ? `${layer.color}80` : `${layer.color}40`
                }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
                <div className="relative h-full flex flex-col items-center justify-center p-1">
                  <layer.icon className="w-4 h-4 md:w-5 md:h-5 text-white mb-1" />
                  <span className="text-white text-xs font-bold text-center leading-tight">{layer.name}</span>
                </div>
                
                {/* Enhanced Tooltip */}
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 p-3 min-w-[120px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                  <div className="text-white font-bold text-sm mb-2">{layer.name}</div>
                  {layer.techs.map((tech, i) => (
                    <div key={i} className="text-white/80 text-xs mb-1 last:mb-0">{tech}</div>
                  ))}
                  <div className="text-green-400 text-xs font-bold mt-2">{layer.clients} Projects</div>
                </div>
              </div>

              {/* Connection Line */}
              <div
                className="absolute left-1/2 top-1/2 w-0.5 origin-left opacity-40"
                style={{
                  height: `${radiusBase}px`,
                  background: `linear-gradient(to right, ${layer.color}50, transparent)`,
                  transform: `translate(-50%, -50%) rotate(${180 + angle}deg)`
                }}
              />
            </div>
          )
        })}
        </div>
      </div>

      {/* Technology Stats */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 md:gap-4 max-w-full px-2">
        {[
          { value: '200+', label: 'Projects', color: '#3B82F6' },
          { value: '6', label: 'Tech Stacks', color: '#10B981' },
          { value: '98%', label: 'Uptime', color: '#F59E0B' }
        ].map((metric, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-2 md:p-3 hover:scale-105 transition-transform min-w-[70px]"
          >
            <div className="text-sm md:text-lg font-bold text-white mb-1" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="text-xs text-white/70">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 text-center">
        <h3 className="text-lg md:text-2xl font-bold text-white">Technology Ecosystem</h3>
        <p className="text-xs md:text-sm text-white/60 mt-1">Integrated Development Stack</p>
      </div>
    </div>
  )
}

// Innovation Page - Innovation Process Flow
export function InnovationPipeline() {
  const [activePhase, setActivePhase] = useState(0)
  
  const innovationPhases = [
    { name: 'Research', icon: Search, color: '#8B5CF6', description: 'Market Analysis', progress: 92, duration: '2-4 weeks' },
    { name: 'Ideate', icon: Lightbulb, color: '#06B6D4', description: 'Creative Solutions', progress: 88, duration: '1-2 weeks' },
    { name: 'Prototype', icon: Settings, color: '#10B981', description: 'MVP Development', progress: 95, duration: '4-8 weeks' },
    { name: 'Validate', icon: CheckCircle, color: '#F59E0B', description: 'User Testing', progress: 85, duration: '2-3 weeks' },
    { name: 'Launch', icon: Rocket, color: '#EF4444', description: 'Go to Market', progress: 90, duration: '1-2 weeks' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % innovationPhases.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [innovationPhases.length])

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[650px] h-auto bg-gradient-to-br from-purple-950/90 via-indigo-950/50 to-cyan-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden p-4 md:p-8">
      {/* Spiral Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }, (_, i) => {
          const radius = 30 + i * 25
          const x = Math.cos((i * 30 * Math.PI) / 180) * radius
          const y = Math.sin((i * 30 * Math.PI) / 180) * radius
          
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full opacity-25"
              style={{
                backgroundColor: innovationPhases[i % innovationPhases.length].color,
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                animationDelay: `${i * 0.3}s`
              }}
            >
              <div className="absolute inset-0 rounded-full animate-pulse" />
            </div>
          )
        })}
      </div>

      {/* Central Innovation Hub */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative w-20 h-20 md:w-24 md:h-24">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 backdrop-blur-xl border-2 border-white/50 animate-spin-slow" />
          <div className="absolute inset-2 md:inset-3 rounded-full bg-gradient-to-r from-indigo-400/50 to-purple-600/50 backdrop-blur-xl flex items-center justify-center">
            <Brain className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          
          {/* Pulsing Waves */}
          {[1, 2, 3].map((wave) => (
            <div
              key={wave}
              className="absolute inset-0 rounded-full border-2 border-cyan-400/15 animate-ping"
              style={{ animationDelay: `${wave}s`, animationDuration: '4s' }}
            />
          ))}
        </div>
      </div>

      {/* Innovation Phase Satellites - Much better spacing */}
      <div className="relative h-full min-h-[400px] md:min-h-[550px] flex items-center justify-center">
        <div className="transform scale-60 md:scale-85 transition-transform duration-300">
        {innovationPhases.map((phase, index) => {
          // Much larger radius to prevent overlap
          const satelliteRadius = 180 + (index % 2) * 20 // Alternating radius for better spacing
          const satelliteAngle = (index * 72) + (activePhase * 5) // Reduced rotation speed
          const sx = Math.cos((satelliteAngle * Math.PI) / 180) * satelliteRadius
          const sy = Math.sin((satelliteAngle * Math.PI) / 180) * satelliteRadius
          
          return (
            <div
              key={phase.name}
              className="absolute transition-all duration-700 cursor-pointer group z-20"
              style={{ transform: `translate(${sx}px, ${sy}px)` }}
              onMouseEnter={() => setActivePhase(index)}
            >
              <div
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 backdrop-blur-xl transition-all duration-500 ${
                  activePhase === index ? 'scale-125 shadow-2xl border-white/70' : 'border-white/30'
                }`}
                style={{ 
                  backgroundColor: `${phase.color}30`,
                  borderColor: activePhase === index ? `${phase.color}80` : `${phase.color}40`
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 to-transparent" />
                <div className="relative h-full flex flex-col items-center justify-center p-2">
                  <phase.icon className="w-5 h-5 md:w-6 md:h-6 text-white mb-1" />
                  <span className="text-white text-xs font-bold text-center leading-tight">{phase.name}</span>
                </div>

                {/* Progress Ring */}
                {activePhase === index && (
                  <div
                    className="absolute -inset-1 rounded-2xl opacity-60"
                    style={{
                      background: `conic-gradient(${phase.color} ${phase.progress * 3.6}deg, transparent 0deg)`
                    }}
                  />
                )}

                {/* Enhanced Info Panel */}
                <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 p-3 min-w-[140px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                  <div className="text-white font-bold text-sm mb-1">{phase.name}</div>
                  <div className="text-white/70 text-xs mb-2">{phase.description}</div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/60">Success:</span>
                    <span className="text-green-400 font-bold">{phase.progress}%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">Duration:</span>
                    <span className="text-blue-400 font-bold">{phase.duration}</span>
                  </div>
                </div>
              </div>

              {/* Energy Beam */}
              <div
                className="absolute left-1/2 top-1/2 w-0.5 origin-left opacity-30"
                style={{
                  height: `${satelliteRadius}px`,
                  background: `linear-gradient(to right, ${phase.color}50, transparent)`,
                  transform: `translate(-50%, -50%) rotate(${180 + satelliteAngle}deg)`
                }}
              />
            </div>
          )
        })}
        </div>
      </div>

      {/* Innovation Metrics */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 md:gap-4 max-w-full px-2">
        {[
          { value: '150+', label: 'Projects', color: '#8B5CF6' },
          { value: '94%', label: 'Success Rate', color: '#06B6D4' },
          { value: '12 weeks', label: 'Avg Timeline', color: '#10B981' }
        ].map((metric, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-2 md:p-3 hover:scale-105 transition-transform min-w-[80px]"
          >
            <div className="text-sm md:text-lg font-bold text-white mb-1" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="text-xs text-white/70">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 text-center">
        <h3 className="text-lg md:text-2xl font-bold text-white">Innovation Pipeline</h3>
        <p className="text-xs md:text-sm text-white/60 mt-1">From Concept to Market</p>
      </div>
    </div>
  )
}

// Business Development Page - Global Market Network
export function MarketExpansionViz() {
  const [activeRegion, setActiveRegion] = useState(0)
  
  const globalRegions = [
    { name: 'North America', growth: '+32%', deals: 28, color: '#3B82F6', position: { x: 25, y: 35 }, revenue: '$2.1M' },
    { name: 'Europe', growth: '+45%', deals: 22, color: '#10B981', position: { x: 55, y: 25 }, revenue: '$1.8M' },
    { name: 'Africa', growth: '+78%', deals: 35, color: '#F59E0B', position: { x: 60, y: 65 }, revenue: '$1.2M' },
    { name: 'Asia Pacific', growth: '+56%', deals: 31, color: '#EF4444', position: { x: 80, y: 45 }, revenue: '$1.9M' },
    { name: 'Latin America', growth: '+28%', deals: 18, color: '#8B5CF6', position: { x: 30, y: 75 }, revenue: '$0.8M' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRegion((prev) => (prev + 1) % globalRegions.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [globalRegions.length])

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] h-auto bg-gradient-to-br from-emerald-950/90 via-teal-950/50 to-green-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden p-4 md:p-8">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 60">
          <path d="M10,20 Q30,15 50,20 T90,25 L90,45 Q70,50 50,45 T10,40 Z" 
                fill="url(#worldGradient)" opacity="0.3"/>
          <defs>
            <linearGradient id="worldGradient">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Market Activity Nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{ 
              left: `${Math.random() * 90 + 5}%`, 
              top: `${Math.random() * 80 + 10}%`,
              backgroundColor: globalRegions[i % globalRegions.length].color,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Regional Hubs - Better spacing */}
      <div className="relative h-full min-h-[400px] md:min-h-[500px]">
        {globalRegions.map((region, index) => (
          <div
            key={region.name}
            className="absolute cursor-pointer group transition-all duration-500 hover:scale-110 z-20"
            style={{
              left: `${region.position.x}%`,
              top: `${region.position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onMouseEnter={() => setActiveRegion(index)}
          >
            <div
              className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 backdrop-blur-xl transition-all duration-500 ${
                activeRegion === index ? 'scale-125 shadow-2xl border-white/70' : 'border-white/30'
              }`}
              style={{ 
                backgroundColor: `${region.color}35`,
                borderColor: activeRegion === index ? `${region.color}90` : `${region.color}50`
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 to-transparent" />
              <div className="relative h-full flex flex-col items-center justify-center p-2">
                <Globe className="w-6 h-6 md:w-8 md:h-8 text-white mb-1" />
                <span className="text-white text-xs font-bold text-center leading-tight">{region.name.split(' ')[0]}</span>
              </div>

              {/* Pulsing Ring */}
              {activeRegion === index && (
                <div
                  className="absolute -inset-2 rounded-full border-2 animate-ping"
                  style={{ borderColor: region.color }}
                />
              )}

              {/* Enhanced Region Stats */}
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 p-3 min-w-[140px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                <div className="text-white font-bold text-sm mb-2">{region.name}</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-white/60">Growth:</span>
                    <div className="text-green-400 font-bold">{region.growth}</div>
                  </div>
                  <div>
                    <span className="text-white/60">Deals:</span>
                    <div className="text-blue-400 font-bold">{region.deals}</div>
                  </div>
                  <div className="col-span-2">
                    <span className="text-white/60">Revenue:</span>
                    <div className="text-yellow-400 font-bold">{region.revenue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Global Business Metrics */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 md:gap-4 max-w-full px-2">
        {[
          { value: '134', label: 'Active Deals', color: '#10B981' },
          { value: '$7.8M', label: 'Total Revenue', color: '#3B82F6' },
          { value: '92%', label: 'Success Rate', color: '#F59E0B' }
        ].map((metric, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-2 md:p-3 hover:scale-105 transition-transform min-w-[80px]"
          >
            <div className="text-sm md:text-lg font-bold mb-1" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="text-xs text-white/70">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 text-center">
        <h3 className="text-lg md:text-2xl font-bold text-white">Global Market Presence</h3>
        <p className="text-xs md:text-sm text-white/60 mt-1">Worldwide Business Development</p>
      </div>
    </div>
  )
}

// About Page - Company DNA & Journey
export function CompanyDNAViz() {
  const [activeValue, setActiveValue] = useState(0)
  
  const values = [
    { name: 'Innovation', icon: Lightbulb, color: 'text-blue-400', description: 'Cutting-edge solutions', projects: '50+' },
    { name: 'Excellence', icon: Award, color: 'text-purple-400', description: 'Quality-first approach', projects: '98%' },
    { name: 'Impact', icon: Heart, color: 'text-red-400', description: 'Meaningful change', projects: '1M+' },
    { name: 'Growth', icon: TrendingUp, color: 'text-green-400', description: 'Continuous evolution', projects: '300%' },
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
    <div className="relative w-full min-h-[500px] md:min-h-[600px] h-auto bg-gradient-to-br from-indigo-950/90 via-purple-950/50 to-pink-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden p-4 md:p-8">
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

      {/* Central Hub */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative w-20 h-20 md:w-28 md:h-28">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/40 to-purple-600/40 backdrop-blur-xl border-2 border-white/50 animate-spin-slow" />
          <div className="absolute inset-2 md:inset-3 rounded-full bg-gradient-to-r from-purple-400/50 to-pink-600/50 backdrop-blur-xl flex items-center justify-center">
            <Heart className="w-8 h-8 md:w-12 md:h-12 text-white animate-pulse" />
          </div>
        </div>
      </div>

      {/* Company Values - Better positioning */}
      <div className="relative h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
        <div className="transform scale-75 md:scale-100 transition-transform duration-300">
                 {values.map((value, i) => {
           const angle = (i * 90) + 45 // 90 degrees apart, offset by 45
           const radius = 120 // Use fixed radius for consistency
           const x = Math.cos((angle * Math.PI) / 180) * radius
           const y = Math.sin((angle * Math.PI) / 180) * radius
          
          return (
            <div 
              key={i} 
              className="absolute cursor-pointer group transition-all duration-700 hover:scale-110 z-20" 
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
              onMouseEnter={() => setActiveValue(i)}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-xl rounded-full border-2 border-white/20 flex flex-col items-center justify-center transition-all duration-500 ${
                activeValue === i ? 'scale-125 border-indigo-400/70 shadow-2xl' : ''
              }`}>
                <value.icon className={`w-5 h-5 md:w-7 md:h-7 ${value.color} mb-1`} />
                <span className="text-white text-xs font-bold text-center leading-tight">{value.name}</span>
              </div>
              
              {/* Enhanced Value Description */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-slate-800/95 backdrop-blur-xl rounded-xl border border-white/20 p-3 min-w-[120px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                <div className="text-white font-bold text-sm mb-1">{value.name}</div>
                <div className="text-white/70 text-xs mb-2">{value.description}</div>
                <div className="text-green-400 text-xs font-bold">{value.projects}</div>
              </div>
            </div>
          )
        })}
        </div>
      </div>

      {/* Enhanced Timeline */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-1 md:gap-2 max-w-full px-2">
        {milestones.map((milestone, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-2 hover:scale-105 transition-transform min-w-[60px] md:min-w-[70px]"
          >
            <milestone.icon className="w-3 h-3 md:w-4 md:h-4 text-white mx-auto mb-1" />
            <div className="text-xs text-white font-bold">{milestone.year}</div>
            <div className="text-xs text-white/70 leading-tight">{milestone.event}</div>
            <div className="text-xs text-indigo-400 font-bold mt-1">{milestone.metric}</div>
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 text-center">
        <h3 className="text-lg md:text-2xl font-bold text-white">Company DNA</h3>
        <p className="text-xs md:text-sm text-white/60 mt-1">Our Values & Journey</p>
      </div>
    </div>
  )
}

// TRON America Page - Startup Acceleration Pipeline
export function StartupPipeline() {
  const [activeStage, setActiveStage] = useState(0)
  
  const stages = [
    { name: 'Applications', count: 500, rate: '100%', color: 'from-red-600 to-orange-500', icon: Users, success: '500/500' },
    { name: 'Screening', count: 125, rate: '25%', color: 'from-orange-600 to-yellow-500', icon: Search, success: '125/500' },
    { name: 'Interviews', count: 50, rate: '10%', color: 'from-yellow-600 to-green-500', icon: Users, success: '50/125' },
    { name: 'Incubation', count: 20, rate: '4%', color: 'from-green-600 to-blue-500', icon: Briefcase, success: '20/50' },
    { name: 'Success', count: 12, rate: '2.4%', color: 'from-blue-600 to-purple-500', icon: Star, success: '12/20' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stages.length])

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[650px] h-auto bg-gradient-to-br from-slate-900/90 to-red-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-4 md:p-8">
      <div className="text-center mb-8 md:mb-12">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2">Startup Acceleration Pipeline</h3>
        <p className="text-xs md:text-sm text-white/60">From Application to Success</p>
      </div>
      
      {/* Funnel Visualization - Much better spacing and no overlaps */}
      <div className="flex flex-col items-center space-y-6 md:space-y-8 max-w-5xl mx-auto px-4">
        {stages.map((stage, i) => (
          <div 
            key={i} 
            className="relative w-full flex flex-col items-center"
            onMouseEnter={() => setActiveStage(i)}
          >
            {/* Funnel Stage - Fixed width calculation for no overlaps */}
            <div
              className={`bg-gradient-to-r ${stage.color} rounded-xl border-2 border-white/20 flex items-center justify-between p-4 md:p-5 transition-all duration-500 cursor-pointer ${
                activeStage === i ? 'border-white/70 shadow-2xl scale-105' : 'hover:scale-[1.02]'
              }`}
              style={{ 
                width: `${Math.max(85 - i * 12, 45)}%`,
                minWidth: '280px',
                maxWidth: '500px'
              }}
            >
              {/* Stage Info */}
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <stage.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm md:text-lg">{stage.name}</div>
                  <div className="text-white/80 text-xs md:text-sm">{stage.rate} Selection Rate</div>
                  <div className="text-white/60 text-xs">{stage.success}</div>
                </div>
              </div>
              
              {/* Count */}
              <div className="text-right">
                <div className="text-white font-bold text-xl md:text-3xl">{stage.count}</div>
                <div className="text-white/80 text-xs md:text-sm">Startups</div>
              </div>
            </div>
            
            {/* Flow Arrow - Better spacing */}
            {i < stages.length - 1 && (
              <div className="flex justify-center mt-4 mb-2">
                <ArrowRight className={`w-6 h-6 md:w-8 md:h-8 text-white/60 transition-all duration-300 transform rotate-90 ${
                  activeStage === i ? 'text-yellow-300 scale-125' : ''
                }`} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Success Metrics */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-3 md:gap-6 max-w-full px-4">
        {[
          { value: '$4.2M', label: 'Deployed Capital', color: '#10B981' },
          { value: '92%', label: 'Success Rate', color: '#3B82F6' },
          { value: '180+', label: 'Jobs Created', color: '#F59E0B' }
        ].map((metric, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-3 md:p-4 hover:scale-105 transition-transform min-w-[90px]"
          >
            <div className="text-sm md:text-xl font-bold mb-1" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="text-xs md:text-sm text-white/70">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

 