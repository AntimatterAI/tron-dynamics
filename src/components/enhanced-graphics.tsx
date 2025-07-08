"use client"

import { motion } from 'framer-motion'
import { 
  Code, 
  Palette, 
  Shield, 
  Zap, 
  Globe, 
  Rocket, 
  Target,
  TrendingUp,
  Users,
  Award,
  Star,
  Building
} from 'lucide-react'

// Simple Tech Network for Capabilities Page
export function TechNetworkFloating() {
  const nodes = [
    { icon: Code, color: 'text-blue-400', x: 10, y: 20 },
    { icon: Palette, color: 'text-purple-400', x: 80, y: 15 },
    { icon: Shield, color: 'text-green-400', x: 90, y: 60 },
    { icon: Zap, color: 'text-yellow-400', x: 15, y: 70 },
    { icon: Globe, color: 'text-indigo-400', x: 50, y: 10 },
    { icon: Rocket, color: 'text-red-400', x: 60, y: 80 },
  ]

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Floating Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className={`absolute w-12 h-12 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center ${node.color}`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            scale: { delay: i * 0.2, duration: 0.5 },
            y: { 
              delay: i * 0.3, 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ scale: 1.2 }}
        >
          <node.icon className="w-6 h-6" />
        </motion.div>
      ))}
      
      {/* Simple connection indicators */}
      {nodes.map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
          style={{
            left: `${nodes[i].x + 5}%`,
            top: `${nodes[i].y + 5}%`,
          }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

// Innovation Lab Visualization
export function InnovationLabViz() {
  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      <div className="relative">
        {/* Central Hub */}
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full border border-blue-400/30 flex items-center justify-center backdrop-blur-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Rocket className="w-12 h-12 text-blue-300" />
        </motion.div>

        {/* Orbiting Elements */}
        {[
          { icon: Code, delay: 0, radius: 100, color: 'text-blue-400' },
          { icon: Target, delay: 1, radius: 120, color: 'text-green-400' },
          { icon: TrendingUp, delay: 2, radius: 110, color: 'text-purple-400' },
          { icon: Users, delay: 3, radius: 130, color: 'text-red-400' },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute w-16 h-16 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center ${item.color}`}
            style={{
              top: '50%',
              left: '50%',
            }}
            initial={{ x: -32, y: -32 }}
            animate={{
              x: -32 + item.radius * Math.cos((i * Math.PI * 2) / 4),
              y: -32 + item.radius * Math.sin((i * Math.PI * 2) / 4),
              rotate: 360,
            }}
            transition={{
              x: { delay: item.delay * 0.5, duration: 1 },
              y: { delay: item.delay * 0.5, duration: 1 },
              rotate: { 
                delay: item.delay * 0.5, 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }
            }}
            whileHover={{ scale: 1.2 }}
          >
            <item.icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Business Growth Chart Visualization
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
        {/* Simple bar chart instead of complex SVG */}
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

// Team Network Visualization for About Page
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
        {/* Founder Nodes */}
        {founders.map((founder, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${founder.position.x}%`,
              top: `${founder.position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
          >
            <div className={`w-20 h-20 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center ${founder.color} hover:scale-110 transition-transform cursor-pointer`}>
              <Users className="w-10 h-10" />
            </div>
            <div className="text-center mt-2">
              <span className="text-white text-sm font-medium block">{founder.name}</span>
            </div>
          </motion.div>
        ))}
        
        {/* Simple connection pulses */}
        {founders.map((founder, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${founder.position.x}%`,
              top: `${founder.position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [1, 4, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Achievement Timeline for About Page
export function AchievementTimeline() {
  const achievements = [
    { year: '2020', title: 'Company Founded', icon: Building },
    { year: '2021', title: 'First Major Client', icon: Star },
    { year: '2022', title: 'Team Expansion', icon: Users },
    { year: '2023', title: 'Industry Recognition', icon: Award },
    { year: '2024', title: 'Global Reach', icon: Globe },
  ]

  return (
    <div className="relative w-full">
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
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.3 + 0.3, duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// TRON America Incubator Visualization
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
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Building className="w-8 h-8 text-red-300" />
      </motion.div>
      
      {/* Startup Nodes */}
      {startups.map((startup, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${startup.x}%`,
            top: `${startup.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
        >
          <div className="relative group">
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
        </motion.div>
      ))}
      
      {/* Simple pulse animations for connections */}
      {startups.map((startup, i) => (
        <motion.div
          key={`connection-${i}`}
          className="absolute w-1 h-1 bg-red-400/50 rounded-full"
          style={{
            left: `${startup.x + 3}%`,
            top: `${startup.y + 3}%`,
          }}
          animate={{
            scale: [1, 5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.6,
          }}
        />
      ))}
    </div>
  )
} 