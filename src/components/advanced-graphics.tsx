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
  Database,
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
  Activity,
  Settings
} from 'lucide-react'

// Capabilities Page - Advanced Tech Ecosystem
export function ServiceIntegrationMatrix() {
  const [activeLayer, setActiveLayer] = useState(0)
  
  const techLayers = [
    { name: 'Frontend', icon: Monitor, color: '#3B82F6', techs: ['React', 'Next.js', 'TypeScript'] },
    { name: 'Backend', icon: Database, color: '#10B981', techs: ['Node.js', 'Python', 'GraphQL'] },
    { name: 'Mobile', icon: Smartphone, color: '#8B5CF6', techs: ['React Native', 'Flutter'] },
    { name: 'Cloud', icon: Cloud, color: '#F59E0B', techs: ['AWS', 'Docker', 'Kubernetes'] },
    { name: 'Security', icon: Shield, color: '#EF4444', techs: ['OAuth', 'JWT', 'Encryption'] },
    { name: 'AI/ML', icon: Brain, color: '#EC4899', techs: ['TensorFlow', 'PyTorch', 'OpenAI'] }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % techLayers.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [techLayers.length])

  return (
    <div className="relative w-full min-h-[400px] h-auto bg-gradient-to-br from-slate-950/90 via-blue-950/50 to-purple-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden p-6">
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
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
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-xl border-2 border-white/30 animate-spin-slow" />
          <div className="absolute inset-3 md:inset-4 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-600/30 backdrop-blur-xl flex items-center justify-center">
            <Cpu className="w-8 h-8 md:w-12 md:h-12 text-cyan-300" />
          </div>
        </div>
      </div>

      {/* Tech Layer Orbits */}
      <div className="relative h-full min-h-[300px] flex items-center justify-center">
        {techLayers.map((layer, index) => {
          const radius = 60 + index * 20
          const angle = (index * 60) + (activeLayer * 10)
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius
          
          return (
            <div
              key={layer.name}
              className="absolute transition-all duration-500 ease-in-out hover:scale-110 cursor-pointer group"
              style={{ 
                transform: `translate(${x}px, ${y}px)`,
                zIndex: activeLayer === index ? 10 : 5
              }}
              onMouseEnter={() => setActiveLayer(index)}
            >
              <div
                className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl border-2 backdrop-blur-xl transition-all duration-300 ${
                  activeLayer === index ? 'scale-110 shadow-2xl' : ''
                }`}
                style={{ 
                  backgroundColor: `${layer.color}20`,
                  borderColor: `${layer.color}60`
                }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
                <div className="relative h-full flex flex-col items-center justify-center p-1">
                  <layer.icon className="w-4 h-4 md:w-5 md:h-5 text-white mb-1" />
                  <span className="text-white text-xs font-bold text-center">{layer.name}</span>
                </div>
                
                {/* Tech Details Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-xl rounded-lg border border-white/20 p-2 min-w-[80px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  {layer.techs.map((tech, i) => (
                    <div key={i} className="text-white text-xs mb-1 last:mb-0">{tech}</div>
                  ))}
                </div>
              </div>

              {/* Connection Line */}
              <div
                className="absolute left-1/2 top-1/2 w-0.5 origin-left opacity-60"
                style={{
                  height: `${radius}px`,
                  background: `linear-gradient(to right, ${layer.color}60, transparent)`,
                  transform: `translate(-50%, -50%) rotate(${180 + angle}deg)`
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Title */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <h3 className="text-white font-bold text-lg md:text-2xl text-center">Technology Ecosystem</h3>
      </div>
    </div>
  )
}

// Innovation Page - Innovation Process Flow
export function InnovationPipeline() {
  const [activePhase, setActivePhase] = useState(0)
  
  const innovationPhases = [
    { name: 'Discover', icon: Search, color: '#8B5CF6', description: 'Market Research', progress: 85 },
    { name: 'Ideate', icon: Lightbulb, color: '#06B6D4', description: 'Creative Solutions', progress: 92 },
    { name: 'Prototype', icon: Settings, color: '#10B981', description: 'Rapid Development', progress: 78 },
    { name: 'Test', icon: Activity, color: '#F59E0B', description: 'User Validation', progress: 89 },
    { name: 'Scale', icon: Rocket, color: '#EF4444', description: 'Market Launch', progress: 95 }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % innovationPhases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [innovationPhases.length])

  return (
    <div className="relative w-full min-h-[450px] h-auto bg-gradient-to-br from-purple-950/90 via-indigo-950/50 to-cyan-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden p-6">
      {/* Spiral Background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => {
          const radius = 40 + i * 15
          const x = Math.cos((i * 18 * Math.PI) / 180) * radius
          const y = Math.sin((i * 18 * Math.PI) / 180) * radius
          
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full opacity-40"
              style={{
                backgroundColor: innovationPhases[i % innovationPhases.length].color,
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                animationDelay: `${i * 0.1}s`
              }}
            >
              <div className="absolute inset-0 rounded-full animate-pulse" />
            </div>
          )
        })}
      </div>

      {/* Central Innovation Hub */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-28 h-28 md:w-36 md:h-36">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 backdrop-blur-xl border-2 border-white/40 animate-spin-slow" />
          <div className="absolute inset-4 md:inset-6 rounded-full bg-gradient-to-r from-indigo-400/40 to-purple-600/40 backdrop-blur-xl flex items-center justify-center">
            <Brain className="w-10 h-10 md:w-14 md:h-14 text-white" />
          </div>
          
          {/* Pulsing Waves */}
          {[1, 2, 3].map((wave) => (
            <div
              key={wave}
              className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"
              style={{ animationDelay: `${wave}s`, animationDuration: '3s' }}
            />
          ))}
        </div>
      </div>

      {/* Innovation Phase Satellites */}
      <div className="relative h-full min-h-[350px] flex items-center justify-center">
        {innovationPhases.map((phase, index) => {
          const satelliteRadius = 120
          const satelliteAngle = (index * 72) + (activePhase * 15)
          const sx = Math.cos((satelliteAngle * Math.PI) / 180) * satelliteRadius
          const sy = Math.sin((satelliteAngle * Math.PI) / 180) * satelliteRadius
          
          return (
            <div
              key={phase.name}
              className="absolute transition-all duration-500 cursor-pointer group"
              style={{ transform: `translate(${sx}px, ${sy}px)` }}
              onMouseEnter={() => setActivePhase(index)}
            >
              <div
                className={`relative w-18 h-18 md:w-20 md:h-20 rounded-2xl border-2 backdrop-blur-xl transition-all duration-300 ${
                  activePhase === index ? 'scale-125 shadow-2xl' : 'hover:scale-110'
                }`}
                style={{ 
                  backgroundColor: `${phase.color}25`,
                  borderColor: `${phase.color}70`
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                <div className="relative h-full flex flex-col items-center justify-center p-2">
                  <phase.icon className="w-5 h-5 md:w-6 md:h-6 text-white mb-1" />
                  <span className="text-white text-xs font-bold text-center">{phase.name}</span>
                </div>

                {/* Progress Ring */}
                {activePhase === index && (
                  <div
                    className="absolute -inset-1 rounded-2xl opacity-80"
                    style={{
                      background: `conic-gradient(${phase.color} ${phase.progress * 3.6}deg, transparent 0deg)`
                    }}
                  />
                )}

                {/* Detailed Info Panel */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 p-2 min-w-[100px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="text-white font-bold text-xs mb-1">{phase.name}</div>
                  <div className="text-white/70 text-xs mb-1">{phase.description}</div>
                  <div className="text-green-400 text-xs font-bold">{phase.progress}%</div>
                </div>
              </div>

              {/* Energy Beam */}
              <div
                className="absolute left-1/2 top-1/2 w-0.5 origin-left opacity-60"
                style={{
                  height: `${satelliteRadius}px`,
                  background: `linear-gradient(to right, ${phase.color}80, transparent)`,
                  transform: `translate(-50%, -50%) rotate(${180 + satelliteAngle}deg)`
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Metrics */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {[
          { value: '127+', label: 'Projects', color: '#8B5CF6' },
          { value: '94%', label: 'Success', color: '#06B6D4' },
          { value: '8.2M+', label: 'Users', color: '#10B981' }
        ].map((metric, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-3 hover:scale-105 transition-transform"
          >
            <div className="text-lg font-bold text-white mb-1" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="text-xs text-white/70">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <h3 className="text-white font-bold text-lg md:text-2xl text-center">Innovation Spiral</h3>
      </div>
    </div>
  )
}

// Business Development Page - Global Market Network
export function MarketExpansionViz() {
  const [activeRegion, setActiveRegion] = useState(0)
  
  const globalRegions = [
    { name: 'North America', growth: '+47%', deals: 23, color: '#3B82F6', position: { x: 20, y: 35 } },
    { name: 'Europe', growth: '+62%', deals: 31, color: '#10B981', position: { x: 50, y: 25 } },
    { name: 'Africa', growth: '+89%', deals: 45, color: '#F59E0B', position: { x: 55, y: 65 } },
    { name: 'Asia', growth: '+73%', deals: 38, color: '#EF4444', position: { x: 75, y: 45 } },
    { name: 'South America', growth: '+35%', deals: 18, color: '#8B5CF6', position: { x: 25, y: 75 } }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRegion((prev) => (prev + 1) % globalRegions.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [globalRegions.length])

  return (
    <div className="relative w-full min-h-[400px] h-auto bg-gradient-to-br from-emerald-950/90 via-teal-950/50 to-green-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden p-6">
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
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{ 
              left: `${Math.random() * 90 + 5}%`, 
              top: `${Math.random() * 80 + 10}%`,
              backgroundColor: globalRegions[i % globalRegions.length].color,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Regional Hubs */}
      <div className="relative h-full min-h-[300px]">
        {globalRegions.map((region, index) => (
          <div
            key={region.name}
            className="absolute cursor-pointer group transition-all duration-300 hover:scale-110"
            style={{
              left: `${region.position.x}%`,
              top: `${region.position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onMouseEnter={() => setActiveRegion(index)}
          >
            <div
              className={`relative w-16 h-16 md:w-18 md:h-18 rounded-full border-2 backdrop-blur-xl transition-all duration-300 ${
                activeRegion === index ? 'scale-125 shadow-2xl' : ''
              }`}
              style={{ 
                backgroundColor: `${region.color}30`,
                borderColor: `${region.color}80`
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
              <div className="relative h-full flex flex-col items-center justify-center p-2">
                <Globe className="w-6 h-6 md:w-7 md:h-7 text-white mb-1" />
                <span className="text-white text-xs font-bold text-center">{region.name.split(' ')[0]}</span>
              </div>

              {/* Pulsing Ring */}
              {activeRegion === index && (
                <div
                  className="absolute -inset-2 rounded-full border-2 animate-ping"
                  style={{ borderColor: region.color }}
                />
              )}

              {/* Region Stats */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 p-2 min-w-[100px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="text-white font-bold text-xs mb-1">{region.name}</div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/70">Growth:</span>
                  <span className="text-green-400 font-bold">{region.growth}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-white/70">Deals:</span>
                  <span className="text-blue-400 font-bold">{region.deals}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Global Metrics */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {[
          { value: '155+', label: 'Deals', color: '#10B981' },
          { value: '$47M+', label: 'Volume', color: '#3B82F6' },
          { value: '89%', label: 'Success', color: '#F59E0B' }
        ].map((metric, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-3 hover:scale-105 transition-transform"
          >
            <div className="text-lg font-bold mb-1" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="text-xs text-white/70">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <h3 className="text-white font-bold text-lg md:text-2xl text-center">Global Market Network</h3>
      </div>
    </div>
  )
}

// About Page - Company Values & Journey
export function CompanyDNAViz() {
  const [activeValue, setActiveValue] = useState(0)
  
  const values = [
    { name: 'Innovation', icon: Lightbulb, color: 'text-blue-400', description: 'Pushing boundaries' },
    { name: 'Excellence', icon: Award, color: 'text-purple-400', description: 'Quality focused' },
    { name: 'Impact', icon: Heart, color: 'text-red-400', description: 'Meaningful change' },
    { name: 'Growth', icon: TrendingUp, color: 'text-green-400', description: 'Continuous evolution' },
  ]

  const milestones = [
    { year: '2020', event: 'Company Founded', icon: Building2 },
    { year: '2021', event: 'First $1M Revenue', icon: TrendingUp },
    { year: '2022', event: '50+ Team Members', icon: Users },
    { year: '2023', event: 'Global Expansion', icon: Globe },
    { year: '2024', event: 'AI Innovation Hub', icon: Cpu },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [values.length])

  return (
    <div className="relative w-full min-h-[400px] h-auto bg-gradient-to-br from-indigo-950/90 via-purple-950/50 to-pink-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden p-6">
      {/* DNA Helix Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + Math.sin(i * 0.8) * 20}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Central Hub */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-20 h-20 md:w-24 md:h-24">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-600/30 backdrop-blur-xl border-2 border-white/40 animate-spin-slow" />
          <div className="absolute inset-3 rounded-full bg-gradient-to-r from-purple-400/40 to-pink-600/40 backdrop-blur-xl flex items-center justify-center">
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-white animate-pulse" />
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="relative h-full min-h-[300px] flex items-center justify-center">
        {values.map((value, i) => {
          const angle = (i * 360) / values.length
          const radius = 80
          const x = Math.cos((angle - 90) * Math.PI / 180) * radius
          const y = Math.sin((angle - 90) * Math.PI / 180) * radius
          
          return (
            <div 
              key={i} 
              className="absolute cursor-pointer group transition-all duration-500 hover:scale-110" 
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
              onMouseEnter={() => setActiveValue(i)}
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 bg-white/5 backdrop-blur-xl rounded-full border-2 border-white/20 flex flex-col items-center justify-center transition-all duration-500 ${
                activeValue === i ? 'scale-125 border-indigo-400/60 shadow-xl' : ''
              }`}>
                <value.icon className={`w-5 h-5 md:w-6 md:h-6 ${value.color}`} />
                <span className="text-white text-xs font-bold mt-1">{value.name}</span>
              </div>
              
              {/* Value Description */}
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-xl rounded-lg border border-white/20 p-2 min-w-[100px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="text-white text-xs">{value.description}</div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Timeline */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-4">
        {milestones.map((milestone, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-2 hover:scale-105 transition-transform"
          >
            <milestone.icon className="w-4 h-4 text-white mx-auto mb-1" />
            <div className="text-xs text-white font-bold">{milestone.year}</div>
            <div className="text-xs text-white/70">{milestone.event.split(' ')[0]}</div>
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <h3 className="text-white font-bold text-lg md:text-2xl text-center">Company DNA</h3>
      </div>
    </div>
  )
}

// TRON America Page - Startup Pipeline
export function StartupPipeline() {
  const [activeStage, setActiveStage] = useState(0)
  
  const stages = [
    { name: 'Applications', count: 500, rate: '100%', color: 'from-red-600 to-orange-500', icon: Users },
    { name: 'Screening', count: 100, rate: '20%', color: 'from-orange-600 to-yellow-500', icon: Search },
    { name: 'Interviews', count: 25, rate: '5%', color: 'from-yellow-600 to-green-500', icon: Users },
    { name: 'Incubation', count: 10, rate: '2%', color: 'from-green-600 to-blue-500', icon: Briefcase },
    { name: 'Success', count: 5, rate: '1%', color: 'from-blue-600 to-purple-500', icon: Star },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [stages.length])

  return (
    <div className="relative w-full min-h-[400px] h-auto bg-gradient-to-br from-slate-900/90 to-red-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-6">
      <h3 className="text-white font-bold text-lg md:text-xl text-center mb-6">Startup Acceleration Pipeline</h3>
      
      {/* Funnel Visualization */}
      <div className="space-y-4">
        {stages.map((stage, i) => (
          <div 
            key={i} 
            className="relative"
            onMouseEnter={() => setActiveStage(i)}
          >
            {/* Funnel Stage */}
            <div
              className={`mx-auto bg-gradient-to-r ${stage.color} rounded-lg border-2 border-white/20 flex items-center justify-between p-3 md:p-4 transition-all duration-500 cursor-pointer ${
                activeStage === i ? 'border-white/60 shadow-2xl scale-105' : 'hover:scale-102'
              }`}
              style={{ width: `${100 - i * 12}%` }}
            >
              {/* Stage Info */}
              <div className="flex items-center space-x-3">
                <stage.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                <div>
                  <div className="text-white font-bold text-sm md:text-base">{stage.name}</div>
                  <div className="text-white/80 text-xs md:text-sm">{stage.rate} Selection Rate</div>
                </div>
              </div>
              
              {/* Count */}
              <div className="text-right">
                <div className="text-white font-bold text-xl md:text-2xl">{stage.count}</div>
                <div className="text-white/80 text-xs md:text-sm">Startups</div>
              </div>
            </div>
            
            {/* Flow Arrow */}
            {i < stages.length - 1 && (
              <div className="flex justify-center mt-2">
                <ArrowRight className={`w-5 h-5 md:w-6 md:h-6 text-white/50 transition-all duration-300 ${
                  activeStage === i ? 'text-yellow-300 scale-125' : ''
                }`} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Success Metrics */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {[
          { value: '$25M+', label: 'Deployed', color: '#10B981' },
          { value: '93%', label: 'Success Rate', color: '#3B82F6' },
          { value: '150+', label: 'Jobs Created', color: '#F59E0B' }
        ].map((metric, i) => (
          <div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-2 md:p-3 hover:scale-105 transition-transform"
          >
            <div className="text-sm md:text-lg font-bold mb-1" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="text-xs text-white/70">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

 