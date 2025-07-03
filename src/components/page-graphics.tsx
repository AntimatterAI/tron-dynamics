"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { 
  Rocket, 
  Brain, 
  Building, 
  Users, 
  Globe, 
  Target,
  Network,
  Code,
  Palette,
  Shield,
  Zap,
  Award,
  Database,
  Smartphone
} from 'lucide-react'

// Client-side check for SSR safety
const isClient = typeof window !== 'undefined'

// Tech Network Visualization
export const TechNetworkGraphics = () => {
  const networkRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && networkRef.current) {
      const nodes = networkRef.current.querySelectorAll('.network-node')
      const connections = networkRef.current.querySelectorAll('.network-connection')
      
      // Animate nodes
      gsap.set(nodes, { scale: 0, opacity: 0 })
      gsap.to(nodes, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      })
      
      // Animate connections
      gsap.set(connections, { strokeDasharray: 100, strokeDashoffset: 100 })
      gsap.to(connections, {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.2,
        delay: 0.5,
        ease: "power2.out"
      })
      
      // Floating animation
      gsap.to(nodes, {
        y: "random(-10, 10)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.2
      })
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div ref={networkRef} className="relative w-full h-96 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />
      
      {/* SVG Network */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
        {/* Connections */}
        <line className="network-connection" x1="100" y1="100" x2="300" y2="150" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
        <line className="network-connection" x1="300" y1="150" x2="500" y2="100" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
        <line className="network-connection" x1="500" y1="100" x2="700" y2="200" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
        <line className="network-connection" x1="700" y1="200" x2="600" y2="300" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
        <line className="network-connection" x1="600" y1="300" x2="400" y2="350" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
        <line className="network-connection" x1="400" y1="350" x2="200" y2="300" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
        <line className="network-connection" x1="200" y1="300" x2="100" y2="100" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
        <line className="network-connection" x1="300" y1="150" x2="600" y2="300" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
        <line className="network-connection" x1="500" y1="100" x2="200" y2="300" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
      </svg>
      
      {/* Network Nodes */}
      <div className="absolute inset-0">
        <div className="network-node absolute w-16 h-16 bg-blue-500/20 rounded-full border-2 border-blue-400/50 flex items-center justify-center" style={{ top: '25%', left: '12%' }}>
          <Brain className="w-8 h-8 text-blue-400" />
        </div>
        <div className="network-node absolute w-16 h-16 bg-purple-500/20 rounded-full border-2 border-purple-400/50 flex items-center justify-center" style={{ top: '37%', left: '37%' }}>
          <Code className="w-8 h-8 text-purple-400" />
        </div>
        <div className="network-node absolute w-16 h-16 bg-emerald-500/20 rounded-full border-2 border-emerald-400/50 flex items-center justify-center" style={{ top: '25%', left: '62%' }}>
          <Rocket className="w-8 h-8 text-emerald-400" />
        </div>
        <div className="network-node absolute w-16 h-16 bg-orange-500/20 rounded-full border-2 border-orange-400/50 flex items-center justify-center" style={{ top: '50%', left: '87%' }}>
          <Globe className="w-8 h-8 text-orange-400" />
        </div>
        <div className="network-node absolute w-16 h-16 bg-pink-500/20 rounded-full border-2 border-pink-400/50 flex items-center justify-center" style={{ top: '75%', left: '75%' }}>
          <Users className="w-8 h-8 text-pink-400" />
        </div>
        <div className="network-node absolute w-16 h-16 bg-cyan-500/20 rounded-full border-2 border-cyan-400/50 flex items-center justify-center" style={{ top: '87%', left: '50%' }}>
          <Building className="w-8 h-8 text-cyan-400" />
        </div>
        <div className="network-node absolute w-16 h-16 bg-yellow-500/20 rounded-full border-2 border-yellow-400/50 flex items-center justify-center" style={{ top: '75%', left: '25%' }}>
          <Target className="w-8 h-8 text-yellow-400" />
        </div>
      </div>
      
      {/* Floating labels */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1">
        <span className="text-blue-300 text-sm font-medium">Innovation Network</span>
      </div>
    </div>
  )
}

// Business Growth Visualization
export const BusinessGrowthGraphics = () => {
  const chartRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && chartRef.current) {
      const bars = chartRef.current.querySelectorAll('.growth-bar')
      const metrics = chartRef.current.querySelectorAll('.growth-metric')
      
      // Animate bars
      gsap.set(bars, { scaleY: 0, transformOrigin: "bottom" })
      gsap.to(bars, {
        scaleY: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out"
      })
      
      // Animate metrics
      gsap.set(metrics, { opacity: 0, y: 20 })
      gsap.to(metrics, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.8,
        ease: "power2.out"
      })
    }
  }, [mounted])

  if (!mounted) return null

  const growthData = [
    { label: 'Q1', value: 25, color: 'emerald' },
    { label: 'Q2', value: 45, color: 'blue' },
    { label: 'Q3', value: 70, color: 'purple' },
    { label: 'Q4', value: 95, color: 'orange' }
  ]

  return (
    <div ref={chartRef} className="relative w-full h-80 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl p-8">
      <div className="flex items-end h-full gap-8 justify-center">
        {growthData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="growth-metric mb-4 text-center">
              <div className={`text-2xl font-bold text-${item.color}-400`}>{item.value}%</div>
              <div className="text-white/60 text-sm">Growth</div>
            </div>
            <div className="relative w-16 h-48 bg-white/10 rounded-lg overflow-hidden">
              <div 
                className={`growth-bar absolute bottom-0 w-full bg-gradient-to-t from-${item.color}-500 to-${item.color}-400 rounded-lg`}
                style={{ height: `${item.value}%` }}
              />
            </div>
            <div className="text-white/80 text-sm mt-2 font-medium">{item.label}</div>
          </div>
        ))}
      </div>
      
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1">
        <span className="text-emerald-300 text-sm font-medium">Business Growth</span>
      </div>
    </div>
  )
}

// Portfolio Showcase Graphics
export const PortfolioShowcaseGraphics = () => {
  const portfolioRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && portfolioRef.current) {
      const cards = portfolioRef.current.querySelectorAll('.portfolio-card')
      
      gsap.set(cards, { rotateY: 180, opacity: 0 })
      gsap.to(cards, {
        rotateY: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      })
      
      // Hover animations
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" })
        })
      })
    }
  }, [mounted])

  if (!mounted) return null

  const portfolioCompanies = [
    { name: 'Clinix AI', icon: <Brain className="w-8 h-8" />, color: 'blue', value: '$15M' },
    { name: 'ShadowShield AI', icon: <Shield className="w-8 h-8" />, color: 'purple', value: '$12M' },
    { name: 'Synergies4 AI', icon: <Network className="w-8 h-8" />, color: 'emerald', value: '$9M' }
  ]

  return (
    <div ref={portfolioRef} className="relative w-full">
      <div className="grid md:grid-cols-3 gap-6">
        {portfolioCompanies.map((company, index) => (
          <div key={index} className={`portfolio-card relative bg-gradient-to-br from-${company.color}-500/10 to-${company.color}-600/20 rounded-2xl p-6 border border-${company.color}-400/20`}>
            <div className="flex items-center justify-between mb-6">
              <div className={`w-12 h-12 rounded-xl bg-${company.color}-500/20 flex items-center justify-center`}>
                {company.icon}
              </div>
              <div className={`text-2xl font-bold text-${company.color}-400`}>{company.value}</div>
            </div>
            <h3 className="text-white text-lg font-medium mb-2">{company.name}</h3>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className={`h-2 bg-gradient-to-r from-${company.color}-500 to-${company.color}-400 rounded-full`} style={{ width: `${70 + index * 10}%` }} />
            </div>
            <div className="text-white/60 text-sm mt-2">Performance</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Innovation Labs Graphics
export const InnovationLabsGraphics = () => {
  const labsRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && labsRef.current) {
      const elements = labsRef.current.querySelectorAll('.innovation-element')
      
      gsap.set(elements, { opacity: 0, scale: 0.8 })
      gsap.to(elements, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      })
      
      // Continuous rotation for some elements
      const rotatingElements = labsRef.current.querySelectorAll('.rotating-element')
      gsap.to(rotatingElements, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      })
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div ref={labsRef} className="relative w-full h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl overflow-hidden">
      {/* Central hub */}
      <div className="innovation-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center">
        <Zap className="w-10 h-10 text-purple-400" />
      </div>
      
      {/* Orbiting elements */}
      <div className="rotating-element absolute top-1/2 left-1/2 w-64 h-64 transform -translate-x-1/2 -translate-y-1/2">
        <div className="innovation-element absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
          <Smartphone className="w-6 h-6 text-blue-400" />
        </div>
        <div className="innovation-element absolute top-1/2 -right-4 transform -translate-y-1/2 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
          <Database className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="innovation-element absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
          <Palette className="w-6 h-6 text-orange-400" />
        </div>
        <div className="innovation-element absolute top-1/2 -left-4 transform -translate-y-1/2 w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
          <Award className="w-6 h-6 text-pink-400" />
        </div>
      </div>
      
      {/* Corner elements */}
      <div className="innovation-element absolute top-8 left-8 w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center">
        <Code className="w-8 h-8 text-cyan-400" />
      </div>
      <div className="innovation-element absolute top-8 right-8 w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center">
        <Brain className="w-8 h-8 text-yellow-400" />
      </div>
      <div className="innovation-element absolute bottom-8 left-8 w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center">
        <Rocket className="w-8 h-8 text-red-400" />
      </div>
      <div className="innovation-element absolute bottom-8 right-8 w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center">
        <Target className="w-8 h-8 text-green-400" />
      </div>
      
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1">
        <span className="text-purple-300 text-sm font-medium">Innovation Labs</span>
      </div>
    </div>
  )
}

// Global Connections Graphics
export const GlobalConnectionsGraphics = () => {
  const globeRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && globeRef.current) {
      const connections = globeRef.current.querySelectorAll('.global-connection')
      const points = globeRef.current.querySelectorAll('.global-point')
      
      gsap.set(points, { scale: 0, opacity: 0 })
      gsap.to(points, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      })
      
      gsap.set(connections, { strokeDasharray: 200, strokeDashoffset: 200 })
      gsap.to(connections, {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.3,
        delay: 0.5,
        ease: "power2.out"
      })
      
      // Pulsing animation
      gsap.to(points, {
        scale: 1.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.2
      })
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div ref={globeRef} className="relative w-full h-96 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-2xl overflow-hidden">
      {/* World map outline */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
        {/* Connection lines */}
        <path className="global-connection" d="M 150 200 Q 300 100 450 200" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="3" fill="none" />
        <path className="global-connection" d="M 450 200 Q 600 150 750 200" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="3" fill="none" />
        <path className="global-connection" d="M 150 200 Q 300 300 450 200" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="3" fill="none" />
        <path className="global-connection" d="M 450 200 Q 600 300 750 200" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="3" fill="none" />
      </svg>
      
      {/* Global points */}
      <div className="global-point absolute w-4 h-4 bg-blue-500 rounded-full" style={{ top: '50%', left: '18%' }} />
      <div className="global-point absolute w-4 h-4 bg-emerald-500 rounded-full" style={{ top: '50%', left: '56%' }} />
      <div className="global-point absolute w-4 h-4 bg-red-500 rounded-full" style={{ top: '50%', left: '94%' }} />
      <div className="global-point absolute w-4 h-4 bg-yellow-500 rounded-full" style={{ top: '35%', left: '37%' }} />
      <div className="global-point absolute w-4 h-4 bg-purple-500 rounded-full" style={{ top: '65%', left: '75%' }} />
      
      {/* Stats overlay */}
      <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
        <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-400">50+</div>
          <div className="text-white/60 text-sm">Countries</div>
        </div>
        <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400">25+</div>
          <div className="text-white/60 text-sm">Partners</div>
        </div>
        <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-400">$25M+</div>
          <div className="text-white/60 text-sm">Raised</div>
        </div>
      </div>
      
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1">
        <span className="text-blue-300 text-sm font-medium">Global Network</span>
      </div>
    </div>
  )
} 