"use client"

import { useState, useEffect } from 'react'
import { 
  Lightbulb, 
  Search, 
  Code, 
  Rocket, 
  Users, 
  TrendingUp, 
  Target, 
  Heart, 
  Building2,
  Cpu,
  Database,
  Globe,
  Monitor,
  Smartphone,
  Cloud,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  MapPin,
  Briefcase
} from 'lucide-react'

// Capabilities Page - Technology Stack Visualization
export function ServiceIntegrationMatrix() {
  const [activeStack, setActiveStack] = useState(0)
  
  const techStacks = [
    { 
      name: 'Frontend', 
      icon: Monitor, 
      color: 'from-blue-500 to-cyan-400',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      position: { x: 15, y: 25 }
    },
    { 
      name: 'Backend', 
      icon: Database, 
      color: 'from-green-500 to-emerald-400',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
      position: { x: 85, y: 25 }
    },
    { 
      name: 'Mobile', 
      icon: Smartphone, 
      color: 'from-purple-500 to-pink-400',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      position: { x: 15, y: 75 }
    },
    { 
      name: 'Cloud', 
      icon: Cloud, 
      color: 'from-orange-500 to-red-400',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      position: { x: 85, y: 75 }
    },
    { 
      name: 'Security', 
      icon: Lock, 
      color: 'from-yellow-500 to-orange-400',
      technologies: ['OAuth', 'JWT', 'Encryption', 'HTTPS'],
      position: { x: 50, y: 50 }
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStack((prev) => (prev + 1) % techStacks.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [techStacks.length])

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-900/90 to-blue-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-8">
      <h3 className="text-white font-bold text-xl text-center mb-8">Our Technology Stack</h3>
      
      {/* Connection Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <line x1="20%" y1="30%" x2="80%" y2="30%" stroke="url(#connectionGrad)" strokeWidth="2" />
          <line x1="20%" y1="30%" x2="20%" y2="70%" stroke="url(#connectionGrad)" strokeWidth="2" />
          <line x1="80%" y1="30%" x2="80%" y2="70%" stroke="url(#connectionGrad)" strokeWidth="2" />
          <line x1="20%" y1="70%" x2="80%" y2="70%" stroke="url(#connectionGrad)" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="url(#connectionGrad)" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="url(#connectionGrad)" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="url(#connectionGrad)" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="url(#connectionGrad)" strokeWidth="2" />
        </svg>
      </div>

      {/* Technology Nodes */}
      {techStacks.map((stack, i) => (
        <div key={i} className="absolute group" style={{
          left: `${stack.position.x}%`,
          top: `${stack.position.y}%`,
          transform: 'translate(-50%, -50%)'
        }}>
          <div
            className={`w-28 h-28 bg-gradient-to-br ${stack.color} rounded-xl border-2 border-white/30 flex flex-col items-center justify-center backdrop-blur-xl cursor-pointer transition-all duration-500 ${
              activeStack === i ? 'scale-110 shadow-2xl border-white/60' : 'scale-100 hover:scale-105'
            }`}
            onMouseEnter={() => setActiveStack(i)}
          >
            <stack.icon className="w-8 h-8 text-white mb-2" />
            <span className="text-white font-bold text-sm">{stack.name}</span>
          </div>
          
          {/* Technology Details */}
          <div className={`absolute top-full mt-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            activeStack === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}>
            <div className="bg-slate-800/90 backdrop-blur-xl rounded-lg border border-white/20 p-3 min-w-[120px]">
              {stack.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="flex items-center text-white text-xs mb-1 last:mb-0">
                  <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Center Hub */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full border-2 border-indigo-400/40 flex items-center justify-center backdrop-blur-xl">
        <Cpu className="w-10 h-10 text-indigo-300" />
      </div>
    </div>
  )
}

// Innovation Page - Innovation Process Flow
export function InnovationPipeline() {
  const [currentPhase, setCurrentPhase] = useState(0)
  
  const phases = [
    { name: 'Research', icon: Search, color: 'from-purple-600 to-blue-500', description: 'Market Analysis' },
    { name: 'Ideate', icon: Lightbulb, color: 'from-blue-600 to-green-500', description: 'Creative Solutions' },
    { name: 'Prototype', icon: Code, color: 'from-green-600 to-yellow-500', description: 'Build & Test' },
    { name: 'Validate', icon: Target, color: 'from-yellow-600 to-orange-500', description: 'User Feedback' },
    { name: 'Launch', icon: Rocket, color: 'from-orange-600 to-red-500', description: 'Go to Market' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [phases.length])

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-900/90 to-purple-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-8">
      <h3 className="text-white font-bold text-xl text-center mb-8">Innovation Process</h3>
      
      {/* Process Flow Line */}
      <div className="absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 via-yellow-500 to-orange-500 transform -translate-y-1/2 rounded-full"></div>
      
      {/* Phase Nodes */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
        <div className="flex justify-between items-center px-12">
          {phases.map((phase, i) => (
            <div key={i} className="relative flex flex-col items-center">
              {/* Phase Circle */}
              <div className={`relative w-24 h-24 bg-gradient-to-br ${phase.color} rounded-full border-4 border-white/30 flex items-center justify-center backdrop-blur-xl transition-all duration-500 ${
                currentPhase === i ? 'scale-125 border-white/60 shadow-2xl' : 'scale-100 hover:scale-110'
              }`}>
                <phase.icon className="w-10 h-10 text-white" />
                
                {/* Progress Ring */}
                {currentPhase === i && (
                  <div className="absolute inset-0 rounded-full border-4 border-transparent">
                    <div className="absolute inset-0 rounded-full border-4 border-white/60 border-t-transparent animate-spin"></div>
                  </div>
                )}
              </div>

              {/* Phase Info */}
              <div className="mt-4 text-center">
                <div className={`text-white font-bold text-sm transition-all duration-300 ${
                  currentPhase === i ? 'scale-110 text-yellow-300' : 'scale-100'
                }`}>
                  {phase.name}
                </div>
                <div className={`text-white/70 text-xs mt-1 transition-all duration-300 ${
                  currentPhase === i ? 'opacity-100' : 'opacity-60'
                }`}>
                  {phase.description}
                </div>
              </div>

              {/* Arrow to Next Phase */}
              {i < phases.length - 1 && (
                <ArrowRight className={`absolute top-10 -right-8 w-6 h-6 text-white/50 transition-all duration-300 ${
                  currentPhase === i ? 'text-yellow-300 scale-125' : ''
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Innovation Metrics */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">50+</div>
          <div className="text-xs text-white/70">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">95%</div>
          <div className="text-xs text-white/70">Success Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">3M+</div>
          <div className="text-xs text-white/70">Users Impacted</div>
        </div>
      </div>
    </div>
  )
}

// Business Development Page - Global Market Presence
export function MarketExpansionViz() {
  const [activeRegion, setActiveRegion] = useState(0)
  
  const regions = [
    { name: 'West Africa', clients: 25, growth: '+45%', position: { x: 45, y: 55 }, color: 'text-green-400' },
    { name: 'East Africa', clients: 18, growth: '+32%', position: { x: 55, y: 50 }, color: 'text-blue-400' },
    { name: 'North America', clients: 12, growth: '+28%', position: { x: 25, y: 35 }, color: 'text-purple-400' },
    { name: 'Europe', clients: 8, growth: '+15%', position: { x: 50, y: 30 }, color: 'text-yellow-400' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRegion((prev) => (prev + 1) % regions.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [regions.length])

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-900/90 to-emerald-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-8">
      <h3 className="text-white font-bold text-xl text-center mb-8">Global Market Presence</h3>
      
      {/* World Map Representation */}
      <div className="absolute inset-8 rounded-xl overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-xl border border-emerald-500/20">
          {/* Continent Shapes (simplified) */}
          <div className="absolute top-1/4 left-1/4 w-16 h-12 bg-emerald-500/10 rounded-lg"></div> {/* North America */}
          <div className="absolute top-1/3 left-1/2 w-12 h-16 bg-emerald-500/10 rounded-lg"></div> {/* Europe */}
          <div className="absolute top-1/2 left-[45%] w-20 h-20 bg-emerald-500/10 rounded-lg"></div> {/* Africa */}
        </div>
      </div>

      {/* Regional Nodes */}
      {regions.map((region, i) => (
        <div key={i} className="absolute group" style={{
          left: `${region.position.x}%`,
          top: `${region.position.y}%`,
          transform: 'translate(-50%, -50%)'
        }}>
          <div className={`relative w-20 h-20 bg-white/5 backdrop-blur-xl rounded-full border-2 border-white/20 flex items-center justify-center cursor-pointer transition-all duration-500 ${
            activeRegion === i ? 'scale-125 border-emerald-400/60 shadow-2xl' : 'scale-100 hover:scale-110'
          }`}>
            <div className="text-center">
              <Building2 className={`w-6 h-6 mx-auto mb-1 ${region.color}`} />
              <div className="text-white font-bold text-xs">{region.clients}</div>
            </div>
            
            {/* Pulse Effect */}
            {activeRegion === i && (
              <div className="absolute inset-0 rounded-full border-2 border-emerald-400/60 animate-ping"></div>
            )}
          </div>
          
          {/* Region Details */}
          <div className={`absolute top-full mt-3 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            activeRegion === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}>
            <div className="bg-slate-800/90 backdrop-blur-xl rounded-lg border border-white/20 p-3 text-center min-w-[100px]">
              <div className="text-white font-bold text-sm">{region.name}</div>
              <div className="text-emerald-400 text-xs">{region.clients} Clients</div>
              <div className="text-green-300 text-xs">{region.growth}</div>
            </div>
          </div>
        </div>
      ))}

      {/* Business Metrics */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between">
        <div className="text-center">
          <div className="text-xl font-bold text-white">63+</div>
          <div className="text-xs text-white/70">Active Clients</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-emerald-400">4</div>
          <div className="text-xs text-white/70">Continents</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-green-400">150%</div>
          <div className="text-xs text-white/70">YoY Growth</div>
        </div>
      </div>
    </div>
  )
}

// About Page - Company Values & Milestones
export function CompanyDNAViz() {
  const [activeValue, setActiveValue] = useState(0)
  
  const values = [
    { name: 'Innovation', icon: Lightbulb, color: 'text-blue-400', description: 'Pushing boundaries' },
    { name: 'Excellence', icon: Award, color: 'text-purple-400', description: 'Uncompromising quality' },
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
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-900/90 to-indigo-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-8">
      <h3 className="text-white font-bold text-xl text-center mb-8">Our DNA & Journey</h3>
      
      {/* Company Values Circle */}
      <div className="absolute left-8 top-20 bottom-8 w-64">
        <div className="relative w-full h-full">
          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full border-2 border-indigo-400/40 flex items-center justify-center backdrop-blur-xl">
            <Building2 className="w-8 h-8 text-indigo-300" />
          </div>
          
          {/* Values around the circle */}
          {values.map((value, i) => {
            const angle = (i * 360) / values.length
            const radius = 80
            const x = Math.cos((angle - 90) * Math.PI / 180) * radius
            const y = Math.sin((angle - 90) * Math.PI / 180) * radius
            
            return (
              <div key={i} className="absolute left-1/2 top-1/2" style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
              }}>
                <div className={`w-16 h-16 bg-white/5 backdrop-blur-xl rounded-full border-2 border-white/20 flex flex-col items-center justify-center transition-all duration-500 ${
                  activeValue === i ? 'scale-125 border-indigo-400/60 shadow-xl' : 'scale-100 hover:scale-110'
                }`}>
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                  <span className="text-white text-xs font-bold mt-1">{value.name}</span>
                </div>
                
                {/* Value Description */}
                {activeValue === i && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-xl rounded-lg border border-white/20 p-2 min-w-[120px] text-center">
                    <div className="text-white text-xs">{value.description}</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="absolute right-8 top-20 bottom-8 w-64">
        <h4 className="text-white font-bold text-lg mb-4">Our Journey</h4>
        <div className="relative h-full">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
          
          {/* Milestones */}
          {milestones.map((milestone, i) => (
            <div key={i} className="relative flex items-center mb-8" style={{ marginLeft: '1rem' }}>
              {/* Timeline Node */}
              <div className="absolute -left-4 w-3 h-3 bg-indigo-500 rounded-full border-2 border-white"></div>
              
              {/* Milestone Content */}
              <div className="ml-4 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-3 hover:border-indigo-400/30 transition-colors">
                <div className="flex items-center mb-1">
                  <milestone.icon className="w-4 h-4 text-indigo-400 mr-2" />
                  <span className="text-indigo-300 font-bold text-sm">{milestone.year}</span>
                </div>
                <div className="text-white text-sm">{milestone.event}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// TRON America Page - Startup Ecosystem
export function StartupPipeline() {
  const [activeStage, setActiveStage] = useState(0)
  
  const stages = [
    { name: 'Applications', count: 500, rate: '100%', color: 'from-red-600 to-orange-500', icon: Users },
    { name: 'Screening', count: 100, rate: '20%', color: 'from-orange-600 to-yellow-500', icon: Search },
    { name: 'Interviews', count: 25, rate: '5%', color: 'from-yellow-600 to-green-500', icon: Users },
    { name: 'Incubation', count: 10, rate: '2%', color: 'from-green-600 to-blue-500', icon: Briefcase },
    { name: 'Success', count: 5, rate: '1%', color: 'from-blue-600 to-purple-500', icon: Star },
  ]

  const successStories = [
    { name: 'FinTech Pro', sector: 'Finance', funding: '$2.5M', stage: 'Series A' },
    { name: 'HealthAI', sector: 'Healthcare', funding: '$1.8M', stage: 'Seed' },
    { name: 'EduTech', sector: 'Education', funding: '$3.2M', stage: 'Series A' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [stages.length])

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-900/90 to-red-900/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-8">
      <h3 className="text-white font-bold text-xl text-center mb-8">Startup Acceleration Pipeline</h3>
      
      {/* Funnel Visualization */}
      <div className="absolute left-8 top-20 right-8 bottom-20">
        {stages.map((stage, i) => (
          <div key={i} className="relative mb-4">
            {/* Funnel Stage */}
            <div
              className={`mx-auto bg-gradient-to-r ${stage.color} rounded-lg border-2 border-white/20 flex items-center justify-between p-4 transition-all duration-500 ${
                activeStage === i ? 'border-white/60 shadow-2xl scale-105' : 'hover:scale-102'
              }`}
              style={{ width: `${100 - i * 15}%` }}
            >
              {/* Stage Info */}
              <div className="flex items-center space-x-3">
                <stage.icon className="w-6 h-6 text-white" />
                <div>
                  <div className="text-white font-bold">{stage.name}</div>
                  <div className="text-white/80 text-sm">{stage.rate} Selection Rate</div>
                </div>
              </div>
              
              {/* Count */}
              <div className="text-right">
                <div className="text-white font-bold text-2xl">{stage.count}</div>
                <div className="text-white/80 text-sm">Startups</div>
              </div>
            </div>
            
            {/* Flow Arrow */}
            {i < stages.length - 1 && (
              <div className="flex justify-center mt-2">
                <ArrowRight className={`w-6 h-6 text-white/50 transition-all duration-300 ${
                  activeStage === i ? 'text-yellow-300 scale-125' : ''
                }`} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Success Stories */}
      <div className="absolute right-8 top-20 w-64 h-64 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4">
        <h4 className="text-white font-bold text-lg mb-3">Success Stories</h4>
        {successStories.map((story, i) => (
          <div key={i} className="mb-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-green-400/30 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="text-white font-bold text-sm">{story.name}</span>
              <Star className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="text-white/70 text-xs">{story.sector}</div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-green-400 text-xs font-bold">{story.funding}</span>
              <span className="text-blue-400 text-xs">{story.stage}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Location Badge */}
      <div className="absolute top-4 right-4 flex items-center space-x-2 bg-red-500/20 backdrop-blur-xl rounded-full px-3 py-1 border border-red-400/30">
        <MapPin className="w-4 h-4 text-red-400" />
        <span className="text-white text-sm font-medium">Atlanta, GA</span>
      </div>
    </div>
  )
}

// Safe replacement components for legacy imports
export function TechNetworkFloating() {
  return <ServiceIntegrationMatrix />
}

export function InnovationLabViz() {
  return <InnovationPipeline />
}

export function BusinessGrowthChart() {
  return <MarketExpansionViz />
}

export function TeamNetworkViz() {
  return <CompanyDNAViz />
}

export function AchievementTimeline() {
  return <CompanyDNAViz />
}

export function IncubatorEcosystem() {
  return <StartupPipeline />
} 