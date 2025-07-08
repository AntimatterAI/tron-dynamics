"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'
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
  MapPin,
  Briefcase,
  Shield,
  Brain,
  Activity,
  Settings
} from 'lucide-react'

// Capabilities Page - Advanced Tech Ecosystem
export function ServiceIntegrationMatrix() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimationControls()
  const [activeLayer, setActiveLayer] = useState(0)
  
  const techLayers = [
    { name: 'Frontend', icon: Monitor, color: '#3B82F6', techs: ['React', 'Next.js', 'TypeScript'] },
    { name: 'Backend', icon: Database, color: '#10B981', techs: ['Node.js', 'Python', 'GraphQL'] },
    { name: 'Mobile', icon: Smartphone, color: '#8B5CF6', techs: ['React Native', 'Flutter'] },
    { name: 'Cloud', icon: Cloud, color: '#F59E0B', techs: ['AWS', 'Docker', 'Kubernetes'] },
    { name: 'Security', icon: Shield, color: '#EF4444', techs: ['OAuth', 'JWT', 'Encryption'] },
    { name: 'AI/ML', icon: Brain, color: '#EC4899', techs: ['TensorFlow', 'PyTorch', 'OpenAI'] }
  ]

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }))

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % techLayers.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [techLayers.length])

  return (
    <div ref={ref} className="relative w-full h-[600px] bg-gradient-to-br from-slate-950/90 via-blue-950/50 to-purple-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
      {/* Animated Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Central Nexus */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: 0 }}
        animate={controls}
        variants={{
          visible: { scale: 1, rotate: 360 }
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative w-32 h-32">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-xl border-2 border-white/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-600/30 backdrop-blur-xl flex items-center justify-center">
            <Cpu className="w-12 h-12 text-cyan-300" />
          </div>
        </div>
      </motion.div>

      {/* Tech Layer Orbits */}
      {techLayers.map((layer, index) => {
        const radius = 120 + index * 40
        const angle = (index * 60) + (activeLayer * 10)
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius
        
        return (
          <motion.div
            key={layer.name}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={controls}
            variants={{
              visible: { scale: 1, opacity: 1 }
            }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.div
              className={`relative w-20 h-20 rounded-xl border-2 backdrop-blur-xl cursor-pointer group ${
                activeLayer === index ? 'scale-110 shadow-2xl' : 'hover:scale-105'
              }`}
              style={{ 
                backgroundColor: `${layer.color}20`,
                borderColor: `${layer.color}60`
              }}
              whileHover={{ scale: 1.1 }}
              onMouseEnter={() => setActiveLayer(index)}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
              <div className="relative h-full flex flex-col items-center justify-center p-2">
                <layer.icon className="w-6 h-6 text-white mb-1" />
                <span className="text-white text-xs font-bold">{layer.name}</span>
              </div>
              
              {/* Floating Tech Details */}
              <motion.div
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-xl rounded-lg border border-white/20 p-2 min-w-[100px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {layer.techs.map((tech, i) => (
                  <div key={i} className="text-white text-xs mb-1 last:mb-0">{tech}</div>
                ))}
              </motion.div>
            </motion.div>

            {/* Connection Lines to Center */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-0.5 origin-left"
              style={{
                height: `${radius}px`,
                background: `linear-gradient(to right, ${layer.color}60, transparent)`,
                transform: `translate(-50%, -50%) rotate(${180 + angle}deg)`
              }}
              initial={{ scaleX: 0 }}
              animate={controls}
              variants={{
                visible: { scaleX: 1 }
              }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
          </motion.div>
        )
      })}

      {/* Title */}
      <motion.div
        className="absolute top-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-white font-bold text-2xl text-center">Technology Ecosystem</h3>
      </motion.div>
    </div>
  )
}

// Innovation Page - 3D Innovation Spiral
export function InnovationPipeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimationControls()
  const [activePhase, setActivePhase] = useState(0)
  
  const innovationPhases = [
    { name: 'Discover', icon: Search, color: '#8B5CF6', description: 'Market Research & Insights', progress: 85 },
    { name: 'Ideate', icon: Lightbulb, color: '#06B6D4', description: 'Creative Brainstorming', progress: 92 },
    { name: 'Prototype', icon: Settings, color: '#10B981', description: 'Rapid Development', progress: 78 },
    { name: 'Test', icon: Activity, color: '#F59E0B', description: 'User Validation', progress: 89 },
    { name: 'Scale', icon: Rocket, color: '#EF4444', description: 'Market Launch', progress: 95 }
  ]

  const spiralNodes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    angle: i * 24,
    radius: 80 + i * 8,
    delay: i * 0.1,
    color: innovationPhases[i % innovationPhases.length].color
  }))

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % innovationPhases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [innovationPhases.length])

  return (
    <div ref={ref} className="relative w-full h-[700px] bg-gradient-to-br from-purple-950/90 via-indigo-950/50 to-cyan-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
      {/* 3D Spiral Path */}
             {spiralNodes.map((node) => {
        const x = Math.cos((node.angle * Math.PI) / 180) * node.radius
        const y = Math.sin((node.angle * Math.PI) / 180) * node.radius
        
        return (
          <motion.div
            key={node.id}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={controls}
            variants={{
              visible: { scale: 1, opacity: 0.6 }
            }}
            transition={{ duration: 0.5, delay: node.delay }}
          >
            <motion.div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: node.color }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: node.delay
              }}
            />
          </motion.div>
        )
      })}

      {/* Central Innovation Hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={controls}
        variants={{
          visible: { scale: 1 }
        }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative w-40 h-40">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 backdrop-blur-xl border-2 border-white/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-6 rounded-full bg-gradient-to-r from-indigo-400/40 to-purple-600/40 backdrop-blur-xl flex items-center justify-center">
            <Brain className="w-16 h-16 text-white" />
          </div>
          
          {/* Pulsing Innovation Waves */}
          {[1, 2, 3].map((wave) => (
            <motion.div
              key={wave}
              className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
              animate={{
                scale: [1, 2, 2.5],
                opacity: [0.6, 0.3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: wave * 1
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Innovation Phase Satellites */}
      {innovationPhases.map((phase, index) => {
        const satelliteRadius = 200
        const satelliteAngle = (index * 72) + (activePhase * 15)
        const sx = Math.cos((satelliteAngle * Math.PI) / 180) * satelliteRadius
        const sy = Math.sin((satelliteAngle * Math.PI) / 180) * satelliteRadius
        
        return (
          <motion.div
            key={phase.name}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(calc(-50% + ${sx}px), calc(-50% + ${sy}px))` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={controls}
            variants={{
              visible: { scale: 1, opacity: 1 }
            }}
            transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
          >
            <motion.div
              className={`relative w-24 h-24 rounded-2xl border-2 backdrop-blur-xl cursor-pointer group ${
                activePhase === index ? 'scale-125 shadow-2xl' : 'hover:scale-110'
              }`}
              style={{ 
                backgroundColor: `${phase.color}25`,
                borderColor: `${phase.color}70`
              }}
              whileHover={{ scale: 1.15 }}
              onMouseEnter={() => setActivePhase(index)}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
              <div className="relative h-full flex flex-col items-center justify-center p-2">
                <phase.icon className="w-8 h-8 text-white mb-1" />
                <span className="text-white text-xs font-bold text-center">{phase.name}</span>
              </div>

              {/* Progress Ring */}
              <motion.div
                className="absolute -inset-1 rounded-2xl"
                style={{
                  background: `conic-gradient(${phase.color} ${phase.progress * 3.6}deg, transparent 0deg)`
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: activePhase === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Detailed Info Panel */}
              <motion.div
                className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 p-3 min-w-[140px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                <div className="text-white font-bold text-sm mb-1">{phase.name}</div>
                <div className="text-white/70 text-xs mb-2">{phase.description}</div>
                <div className="flex items-center justify-center space-x-1">
                  <div className="text-green-400 text-xs font-bold">{phase.progress}%</div>
                  <div className="text-white/50 text-xs">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Energy Beam to Center */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-0.5 origin-left"
              style={{
                height: `${satelliteRadius}px`,
                background: `linear-gradient(to right, ${phase.color}80, transparent)`,
                transform: `translate(-50%, -50%) rotate(${180 + satelliteAngle}deg)`
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={controls}
              variants={{
                visible: { scaleX: 1, opacity: 0.6 }
              }}
              transition={{ duration: 1, delay: 1 + index * 0.2 }}
            />
          </motion.div>
        )
      })}

      {/* Floating Innovation Metrics */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        {[
          { value: '127+', label: 'Active Projects', color: '#8B5CF6' },
          { value: '94%', label: 'Success Rate', color: '#06B6D4' },
          { value: '8.2M+', label: 'Users Reached', color: '#10B981' }
        ].map((metric, i) => (
          <motion.div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl font-bold text-white mb-1" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="text-xs text-white/70">{metric.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Title */}
      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-white font-bold text-2xl text-center">Innovation Spiral</h3>
      </motion.div>
    </div>
  )
}

// Business Development Page - Global Market Network
export function MarketExpansionViz() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimationControls()
  const [activeRegion, setActiveRegion] = useState(0)
  
  const globalRegions = [
    { name: 'North America', growth: '+47%', deals: 23, color: '#3B82F6', position: { x: 20, y: 35 } },
    { name: 'Europe', growth: '+62%', deals: 31, color: '#10B981', position: { x: 50, y: 25 } },
    { name: 'Africa', growth: '+89%', deals: 45, color: '#F59E0B', position: { x: 55, y: 65 } },
    { name: 'Asia', growth: '+73%', deals: 38, color: '#EF4444', position: { x: 75, y: 45 } },
    { name: 'South America', growth: '+35%', deals: 18, color: '#8B5CF6', position: { x: 25, y: 75 } }
  ]

  const connectionLines = [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 0 }
  ]

  const marketNodes = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    region: i % globalRegions.length,
    delay: Math.random() * 3,
    size: 0.5 + Math.random() * 1
  }))

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRegion((prev) => (prev + 1) % globalRegions.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [globalRegions.length])

  return (
    <div ref={ref} className="relative w-full h-[650px] bg-gradient-to-br from-emerald-950/90 via-teal-950/50 to-green-950/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
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
      {marketNodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full"
          style={{ 
            left: `${node.x}%`, 
            top: `${node.y}%`,
            backgroundColor: globalRegions[node.region].color,
            width: `${node.size * 6}px`,
            height: `${node.size * 6}px`
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={controls}
          variants={{
            visible: { scale: 1, opacity: 0.6 }
          }}
          transition={{ duration: 0.5, delay: node.delay }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: globalRegions[node.region].color }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.6, 0.2, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: node.delay
            }}
          />
        </motion.div>
      ))}

      {/* Connection Lines */}
      {connectionLines.map((connection, i) => {
        const from = globalRegions[connection.from].position
        const to = globalRegions[connection.to].position
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${from.x}%`,
              top: `${from.y}%`,
              width: `${Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2))}%`,
              height: '2px',
              background: `linear-gradient(to right, ${globalRegions[connection.from].color}80, ${globalRegions[connection.to].color}80)`,
              transformOrigin: 'left center',
              transform: `rotate(${Math.atan2(to.y - from.y, to.x - from.x) * 180 / Math.PI}deg)`
            }}
            initial={{ scaleX: 0 }}
            animate={controls}
            variants={{
              visible: { scaleX: 1 }
            }}
            transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
          />
        )
      })}

      {/* Regional Hubs */}
      {globalRegions.map((region, index) => (
        <motion.div
          key={region.name}
          className="absolute"
          style={{
            left: `${region.position.x}%`,
            top: `${region.position.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={controls}
          variants={{
            visible: { scale: 1, opacity: 1 }
          }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
        >
          <motion.div
            className={`relative w-20 h-20 rounded-full border-2 backdrop-blur-xl cursor-pointer group ${
              activeRegion === index ? 'scale-125 shadow-2xl' : 'hover:scale-110'
            }`}
            style={{ 
              backgroundColor: `${region.color}30`,
              borderColor: `${region.color}80`
            }}
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => setActiveRegion(index)}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
            <div className="relative h-full flex flex-col items-center justify-center p-2">
              <Globe className="w-8 h-8 text-white mb-1" />
              <span className="text-white text-xs font-bold text-center">{region.name.split(' ')[0]}</span>
            </div>

            {/* Pulsing Growth Ring */}
            {activeRegion === index && (
              <motion.div
                className="absolute -inset-2 rounded-full border-2"
                style={{ borderColor: region.color }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0.2, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
            )}

            {/* Region Stats Panel */}
            <motion.div
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 p-3 min-w-[120px] text-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              <div className="text-white font-bold text-sm mb-1">{region.name}</div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/70">Growth:</span>
                <span className="text-green-400 font-bold">{region.growth}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/70">Deals:</span>
                <span className="text-blue-400 font-bold">{region.deals}</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}

      {/* Global Metrics Dashboard */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        {[
          { value: '155+', label: 'Active Deals', color: '#10B981' },
          { value: '$47M+', label: 'Deal Volume', color: '#3B82F6' },
          { value: '89%', label: 'Close Rate', color: '#F59E0B' }
        ].map((metric, i) => (
          <motion.div
            key={i}
            className="text-center bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl font-bold mb-1" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="text-xs text-white/70">{metric.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Title */}
      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-white font-bold text-2xl text-center">Global Market Network</h3>
      </motion.div>
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

 