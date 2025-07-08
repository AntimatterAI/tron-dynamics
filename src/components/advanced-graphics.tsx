"use client"

import { motion } from 'framer-motion'
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
  Brain, 
  Heart, 
  Zap,
  Building2,
  BarChart3,
  Network,
  MapPin,
  Sparkles
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
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-950/50 to-blue-950/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
            style={{ left: `${i * 5}%` }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Central Integration Hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-xl"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity },
        }}
      >
        <Network className="w-16 h-16 text-white" />
      </motion.div>

      {/* Service Nodes with Dynamic Connections */}
      {services.map((service, i) => (
        <motion.div key={i} className="absolute">
          <motion.div
            className={`w-24 h-24 bg-gradient-to-br ${service.color} rounded-full border border-white/30 flex items-center justify-center backdrop-blur-xl cursor-pointer`}
            style={{
              left: `${service.position.x}%`,
              top: `${service.position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: activeService === i ? [1, 1.3, 1.1] : 1,
              boxShadow: activeService === i 
                ? ['0 0 0 0 rgba(59, 130, 246, 0.4)', '0 0 0 20px rgba(59, 130, 246, 0)', '0 0 0 0 rgba(59, 130, 246, 0.4)']
                : '0 0 0 0 rgba(59, 130, 246, 0)',
            }}
            transition={{
              duration: 0.6,
              boxShadow: { duration: 2, repeat: Infinity }
            }}
            onHoverStart={() => setActiveService(i)}
          >
            <service.icon className="w-12 h-12 text-white" />
          </motion.div>

          {/* Service Label */}
          <motion.div
            className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-white font-medium text-sm text-center"
            style={{
              left: `${service.position.x}%`,
              top: `${service.position.y + 12}%`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              opacity: activeService === i ? 1 : 0.7,
              y: activeService === i ? [0, -5, 0] : 0,
            }}
            transition={{ duration: 0.6 }}
          >
            {service.name}
          </motion.div>

          {/* Connection Particles */}
          {activeService === i && (
            <motion.div
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${service.position.x}%`,
                top: `${service.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                x: [0, 100, -100, 0],
                y: [0, -50, 50, 0],
                opacity: [1, 0.5, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Floating Integration Indicators */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

// Innovation Page - Innovation Pipeline Visualization
export function InnovationPipeline() {
  const [currentPhase, setCurrentPhase] = useState(0)
  
  const phases = [
    { name: 'Research', icon: Brain, color: 'from-purple-500 to-violet-400' },
    { name: 'Ideation', icon: Lightbulb, color: 'from-yellow-500 to-orange-400' },
    { name: 'Development', icon: Code, color: 'from-blue-500 to-cyan-400' },
    { name: 'Testing', icon: Target, color: 'from-green-500 to-emerald-400' },
    { name: 'Launch', icon: Rocket, color: 'from-red-500 to-pink-400' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [phases.length])

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-950/50 to-purple-950/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
      {/* Pipeline Flow Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Innovation Flow Line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 transform -translate-y-1/2" />

      {/* Phase Nodes */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
        <div className="flex justify-between items-center px-12">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col items-center"
              animate={{
                scale: currentPhase === i ? 1.2 : 1,
                y: currentPhase === i ? -20 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Phase Icon */}
              <motion.div
                className={`w-20 h-20 bg-gradient-to-br ${phase.color} rounded-full border-4 border-white/20 flex items-center justify-center backdrop-blur-xl relative z-10`}
                animate={{
                  boxShadow: currentPhase === i 
                    ? ['0 0 0 0 rgba(147, 51, 234, 0.4)', '0 0 0 30px rgba(147, 51, 234, 0)', '0 0 0 0 rgba(147, 51, 234, 0.4)']
                    : '0 0 0 0 rgba(147, 51, 234, 0)',
                  rotate: currentPhase === i ? [0, 360] : 0,
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity },
                  rotate: { duration: 2 }
                }}
              >
                <phase.icon className="w-10 h-10 text-white" />
              </motion.div>

              {/* Phase Label */}
              <motion.div
                className="mt-4 text-white font-medium text-sm text-center"
                animate={{
                  opacity: currentPhase === i ? 1 : 0.6,
                  scale: currentPhase === i ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {phase.name}
              </motion.div>

              {/* Innovation Sparks */}
              {currentPhase === i && (
                <>
                  {Array.from({ length: 6 }).map((_, sparkIndex) => (
                    <motion.div
                      key={sparkIndex}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                      animate={{
                        x: [0, Math.cos(sparkIndex * 60 * Math.PI / 180) * 40],
                        y: [0, Math.sin(sparkIndex * 60 * Math.PI / 180) * 40],
                        opacity: [1, 0],
                        scale: [1, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: sparkIndex * 0.1,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {phases.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i <= currentPhase ? 'bg-purple-400' : 'bg-white/20'
            }`}
          />
        ))}
      </motion.div>
    </div>
  )
}

// Business Development Page - Market Expansion Visualization
export function MarketExpansionViz() {
  const [expandingMarket, setExpandingMarket] = useState(0)
  
  const markets = [
    { name: 'West Africa', size: 60, growth: 85, x: 20, y: 30 },
    { name: 'East Africa', size: 45, growth: 70, x: 35, y: 45 },
    { name: 'North America', size: 80, growth: 60, x: 70, y: 20 },
    { name: 'Europe', size: 70, growth: 55, x: 75, y: 50 },
    { name: 'Asia', size: 55, growth: 90, x: 85, y: 35 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setExpandingMarket((prev) => (prev + 1) % markets.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [markets.length])

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-950/50 to-green-950/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
      {/* World Map Grid Effect */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-px bg-green-500/30"
            style={{ top: `${i * 10}%`, left: 0, right: 0 }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px bg-green-500/30"
            style={{ left: `${i * 6.67}%`, top: 0, bottom: 0 }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scaleY: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      {/* Market Nodes */}
      {markets.map((market, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${market.x}%`,
            top: `${market.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Market Circle */}
          <motion.div
            className="relative bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-full border border-green-400/30 flex items-center justify-center backdrop-blur-xl"
            style={{ width: `${market.size}px`, height: `${market.size}px` }}
            animate={{
              scale: expandingMarket === i ? [1, 1.5, 1.2] : 1,
              boxShadow: expandingMarket === i 
                ? ['0 0 0 0 rgba(34, 197, 94, 0.4)', '0 0 0 40px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0.4)']
                : '0 0 0 0 rgba(34, 197, 94, 0)',
            }}
            transition={{
              duration: 1,
              boxShadow: { duration: 2, repeat: Infinity }
            }}
          >
            <BarChart3 className="w-6 h-6 text-green-400" />
          </motion.div>

          {/* Market Label */}
          <motion.div
            className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium text-center whitespace-nowrap"
            animate={{
              opacity: expandingMarket === i ? 1 : 0.7,
              y: expandingMarket === i ? [0, -5, 0] : 0,
            }}
            transition={{ duration: 0.6 }}
          >
            {market.name}
            <div className="text-green-400 text-xs">{market.growth}% growth</div>
          </motion.div>

          {/* Growth Rays */}
          {expandingMarket === i && (
            <>
              {Array.from({ length: 8 }).map((_, rayIndex) => (
                <motion.div
                  key={rayIndex}
                  className="absolute w-px h-8 bg-gradient-to-t from-green-400 to-transparent origin-bottom"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${rayIndex * 45}deg)`,
                  }}
                  animate={{
                    scaleY: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: rayIndex * 0.1,
                  }}
                />
              ))}
            </>
          )}
        </motion.div>
      ))}

      {/* Connection Lines Between Markets */}
      {expandingMarket !== null && markets.map((market, i) => (
        <motion.div
          key={`connection-${i}`}
          className="absolute w-0.5 bg-gradient-to-r from-green-400/50 to-transparent"
          style={{
            left: `${markets[expandingMarket]?.x}%`,
            top: `${markets[expandingMarket]?.y}%`,
            width: `${Math.abs(market.x - (markets[expandingMarket]?.x || 0))}%`,
            height: '1px',
            transformOrigin: 'left',
            transform: `rotate(${Math.atan2(
              market.y - (markets[expandingMarket]?.y || 0),
              market.x - (markets[expandingMarket]?.x || 0)
            ) * 180 / Math.PI}deg)`,
          }}
          animate={{
            scaleX: i !== expandingMarket ? [0, 1, 0] : 0,
            opacity: i !== expandingMarket ? [0, 0.8, 0] : 0,
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  )
}

// About Page - Company DNA Visualization
export function CompanyDNAViz() {
  const [rotationSpeed, setRotationSpeed] = useState(1)
  
  const dnaElements = [
    { name: 'Innovation', color: 'text-blue-400', icon: Lightbulb },
    { name: 'Excellence', color: 'text-purple-400', icon: Heart },
    { name: 'Community', color: 'text-green-400', icon: Users },
    { name: 'Growth', color: 'text-yellow-400', icon: TrendingUp },
  ]

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-950/50 to-indigo-950/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
      {/* DNA Helix Structure */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-80 h-80"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20 / rotationSpeed,
            repeat: Infinity,
            ease: "linear",
          }}
          onHoverStart={() => setRotationSpeed(0.3)}
          onHoverEnd={() => setRotationSpeed(1)}
        >
          {/* DNA Strands */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotateZ(${i * 18}deg) translateY(-${100 + i * 5}px)`,
              }}
            >
              <motion.div
                className="w-3 h-3 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            </motion.div>
          ))}

          {/* Counter-rotating DNA strand */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`counter-${i}`}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotateZ(${-i * 18 + 90}deg) translateY(-${100 + i * 5}px)`,
              }}
            >
              <motion.div
                className="w-3 h-3 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1 + 1,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Company Values Orbiting */}
      {dnaElements.map((element, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
          }}
          animate={{
            rotate: 360,
            x: -100 + Math.cos(i * Math.PI / 2) * 120,
            y: -100 + Math.sin(i * Math.PI / 2) * 120,
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          }}
        >
          <motion.div
            className={`w-16 h-16 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex flex-col items-center justify-center ${element.color}`}
            whileHover={{ scale: 1.2 }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(255, 255, 255, 0.1)',
                '0 0 0 10px rgba(255, 255, 255, 0)',
                '0 0 0 0 rgba(255, 255, 255, 0.1)',
              ],
            }}
            transition={{
              boxShadow: { duration: 3, repeat: Infinity, delay: i * 0.5 }
            }}
          >
            <element.icon className="w-6 h-6" />
            <span className="text-xs text-white mt-1">{element.name}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* Center Core */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity },
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
        }}
      >
        <Building2 className="w-10 h-10 text-white" />
      </motion.div>
    </div>
  )
}

// TRON America Page - Startup Acceleration Pipeline
export function StartupPipeline() {
  const [activeStage, setActiveStage] = useState(0)
  
  const stages = [
    { name: 'Application', icon: Code, companies: 500, color: 'from-gray-500 to-slate-400' },
    { name: 'Screening', icon: Search, companies: 100, color: 'from-blue-500 to-cyan-400' },
    { name: 'Incubation', icon: Rocket, companies: 25, color: 'from-purple-500 to-violet-400' },
    { name: 'Acceleration', icon: Zap, companies: 10, color: 'from-yellow-500 to-orange-400' },
    { name: 'Launch', icon: Sparkles, companies: 5, color: 'from-green-500 to-emerald-400' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [stages.length])

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-950/50 to-orange-950/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
      {/* Pipeline Flow Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Funnel Structure */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              className="relative mb-8 last:mb-0"
              animate={{
                scale: activeStage === i ? 1.05 : 1,
                y: activeStage === i ? -5 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Stage Container */}
              <div className="flex items-center justify-between">
                {/* Stage Info */}
                <motion.div
                  className="flex items-center space-x-4 z-10 relative"
                  animate={{
                    x: activeStage === i ? 10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${stage.color} rounded-full border-2 border-white/20 flex items-center justify-center backdrop-blur-xl`}
                    animate={{
                      boxShadow: activeStage === i 
                        ? ['0 0 0 0 rgba(251, 146, 60, 0.4)', '0 0 0 20px rgba(251, 146, 60, 0)', '0 0 0 0 rgba(251, 146, 60, 0.4)']
                        : '0 0 0 0 rgba(251, 146, 60, 0)',
                      rotate: activeStage === i ? [0, 360] : 0,
                    }}
                    transition={{
                      boxShadow: { duration: 2, repeat: Infinity },
                      rotate: { duration: 1 }
                    }}
                  >
                    <stage.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="text-white">
                    <div className="font-semibold text-lg">{stage.name}</div>
                    <div className="text-orange-300 text-sm">{stage.companies} companies</div>
                  </div>
                </motion.div>

                {/* Funnel Section */}
                <motion.div
                  className={`flex-1 ml-8 h-16 bg-gradient-to-r ${stage.color} rounded-r-full relative overflow-hidden`}
                  style={{
                    width: `${(5 - i) * 20}%`,
                    maxWidth: `${100 - i * 15}%`,
                  }}
                  animate={{
                    opacity: activeStage === i ? 1 : 0.6,
                    scale: activeStage === i ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Flow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{
                      x: activeStage === i ? ['-100%', '100%'] : '-100%',
                      opacity: activeStage === i ? [0, 1, 0] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: activeStage === i ? Infinity : 0,
                    }}
                  />

                  {/* Company Dots */}
                  {Array.from({ length: Math.min(stage.companies / 10, 10) }).map((_, dotIndex) => (
                    <motion.div
                      key={dotIndex}
                      className="absolute w-2 h-2 bg-white/60 rounded-full"
                      style={{
                        left: `${dotIndex * 10 + 5}%`,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}
                      animate={{
                        scale: activeStage === i ? [1, 1.5, 1] : 1,
                        opacity: activeStage === i ? [0.6, 1, 0.6] : 0.4,
                      }}
                      transition={{
                        duration: 1,
                        repeat: activeStage === i ? Infinity : 0,
                        delay: dotIndex * 0.1,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Success Rate Indicator */}
              {i < stages.length - 1 && (
                <motion.div
                  className="flex justify-center mt-2"
                  animate={{
                    opacity: activeStage === i ? 1 : 0.5,
                  }}
                >
                  <div className="text-xs text-orange-300">
                    {Math.round((stages[i + 1].companies / stage.companies) * 100)}% success rate
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Southeast Tech Hub Indicator */}
      <motion.div
        className="absolute top-4 right-4 flex items-center space-x-2 text-orange-300"
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <MapPin className="w-5 h-5" />
        <span className="text-sm font-medium">Atlanta Tech Hub</span>
      </motion.div>
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
        <motion.div
          key={i}
          className={`absolute w-12 h-12 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center ${node.color}`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            y: { 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }
          }}
        >
          <node.icon className="w-6 h-6" />
        </motion.div>
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
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full border border-blue-400/30 flex items-center justify-center backdrop-blur-xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Rocket className="w-12 h-12 text-blue-300" />
        </motion.div>

        {/* Orbiting Elements */}
        {[
          { icon: Code, radius: 100, color: 'text-blue-400' },
          { icon: Target, radius: 120, color: 'text-green-400' },
          { icon: TrendingUp, radius: 110, color: 'text-purple-400' },
          { icon: Users, radius: 130, color: 'text-red-400' },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute w-16 h-16 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center ${item.color}`}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              x: item.radius * Math.cos((i * Math.PI * 2) / 4),
              y: item.radius * Math.sin((i * Math.PI * 2) / 4),
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          >
            <item.icon className="w-8 h-8" />
          </motion.div>
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
            <motion.div
              className="w-8 bg-gradient-to-t from-green-600 to-green-400 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${point.value * 1.2}px` }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
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
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${founder.position.x}%`,
              top: `${founder.position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ delay: i * 0.3, duration: 2, repeat: Infinity }}
          >
            <div className={`w-20 h-20 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center ${founder.color}`}>
              <Users className="w-10 h-10" />
            </div>
            <div className="text-center mt-2">
              <span className="text-white text-sm font-medium block">{founder.name}</span>
            </div>
          </motion.div>
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
            <motion.div
              key={i}
              className={`relative flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.3, duration: 0.6 }}
            >
              <div className={`w-1/2 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-4">
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
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ delay: i * 0.3 + 0.3, duration: 2, repeat: Infinity }}
              />
            </motion.div>
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
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-full border border-red-400/30 flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Building2 className="w-8 h-8 text-red-300" />
      </motion.div>
      
      {/* Startup Nodes */}
      {startups.map((startup, i) => (
        <motion.div
          key={i}
          className="absolute group"
          style={{
            left: `${startup.x}%`,
            top: `${startup.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5
          }}
        >
          <div className="w-12 h-12 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center text-red-400">
            <Rocket className="w-6 h-6" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-slate-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
              <div className="font-medium">{startup.name}</div>
              <div className="text-red-300">{startup.sector} • {startup.stage}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 