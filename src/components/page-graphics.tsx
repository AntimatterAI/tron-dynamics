"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { 
  Brain, 
  Building, 
  Users, 
  Globe, 
  TrendingUp,
  Smartphone,
  Palette,
  Shield,
  Zap,
  Award,
  DollarSign,
  BarChart3,
  Database,
  Network,
  Lightbulb,
  Heart
} from 'lucide-react'

// Client-side check for SSR safety
const isClient = typeof window !== 'undefined'

// Innovation Ecosystem Visualization - Shows TRON's innovation network
export const TechNetworkGraphics = () => {
  const networkRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && networkRef.current) {
      const cards = networkRef.current.querySelectorAll('.innovation-card')
      
      // Animate cards in sequence
      gsap.set(cards, { opacity: 0, y: 40, scale: 0.8 })
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      })
    }
  }, [mounted])

  if (!mounted) return null

  const innovations = [
    { icon: <Brain className="w-6 h-6" />, title: "AI Solutions", description: "Healthcare & Education AI", color: "emerald" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Mobile First", description: "Mobile-optimized applications", color: "blue" },
    { icon: <Database className="w-6 h-6" />, title: "Data Infrastructure", description: "Scalable cloud solutions", color: "purple" },
    { icon: <Network className="w-6 h-6" />, title: "Connectivity", description: "Rural internet access", color: "orange" },
    { icon: <Palette className="w-6 h-6" />, title: "Design Systems", description: "Modern design aesthetics", color: "pink" },
    { icon: <Shield className="w-6 h-6" />, title: "Security", description: "Blockchain & cybersecurity", color: "cyan" }
  ]

  return (
    <div ref={networkRef} className="relative w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 rounded-full border border-blue-400/20 mb-4">
          <Lightbulb className="w-5 h-5 text-blue-400" />
          <span className="text-blue-300 font-medium">Innovation Network</span>
        </div>
        <h3 className="text-2xl font-light text-white mb-4">Building Africa&apos;s Tech Future</h3>
        <p className="text-white/60 max-w-2xl mx-auto">From AI-powered healthcare to rural connectivity, we&apos;re developing solutions that matter.</p>
      </div>

      {/* Innovation Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {innovations.map((innovation, index) => (
          <div 
            key={index} 
            className={`innovation-card relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 group`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
              innovation.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
              innovation.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
              innovation.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
              innovation.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
              innovation.color === 'pink' ? 'bg-pink-500/20 text-pink-400' :
              'bg-cyan-500/20 text-cyan-400'
            }`}>
              {innovation.icon}
            </div>
            
            <h4 className="text-white font-medium mb-2">{innovation.title}</h4>
            <p className="text-white/60 text-sm">{innovation.description}</p>
            
            {/* Hover glow */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              innovation.color === 'emerald' ? 'bg-emerald-500/5' :
              innovation.color === 'blue' ? 'bg-blue-500/5' :
              innovation.color === 'purple' ? 'bg-purple-500/5' :
              innovation.color === 'orange' ? 'bg-orange-500/5' :
              innovation.color === 'pink' ? 'bg-pink-500/5' :
              'bg-cyan-500/5'
            }`} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Business Growth Metrics - Shows TRON's actual business performance
export const BusinessGrowthGraphics = () => {
  const chartRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && chartRef.current) {
      const metrics = chartRef.current.querySelectorAll('.growth-metric')
      
      gsap.set(metrics, { opacity: 0, y: 30 })
      gsap.to(metrics, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      })
    }
  }, [mounted])

  if (!mounted) return null

  const businessMetrics = [
    { label: 'Portfolio Value', value: '$36M', icon: <DollarSign className="w-5 h-5" />, color: 'emerald' },
    { label: 'Active Investments', value: '12', icon: <TrendingUp className="w-5 h-5" />, color: 'blue' },
    { label: 'Countries', value: '8', icon: <Globe className="w-5 h-5" />, color: 'purple' },
    { label: 'Team Members', value: '45+', icon: <Users className="w-5 h-5" />, color: 'orange' }
  ]

  return (
    <div ref={chartRef} className="relative w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 rounded-full border border-emerald-400/20 mb-4">
          <BarChart3 className="w-5 h-5 text-emerald-400" />
          <span className="text-emerald-300 font-medium">Business Growth</span>
        </div>
        <h3 className="text-2xl font-light text-white mb-4">Building Value Across Africa</h3>
        <p className="text-white/60 max-w-2xl mx-auto">Strategic investments and partnerships driving sustainable growth.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {businessMetrics.map((metric, index) => (
          <div 
            key={index} 
            className={`growth-metric relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 group`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
              metric.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
              metric.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
              metric.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
              'bg-orange-500/20 text-orange-400'
            }`}>
              {metric.icon}
            </div>
            
            <div className={`text-3xl font-light mb-2 ${
              metric.color === 'emerald' ? 'text-emerald-300' :
              metric.color === 'blue' ? 'text-blue-300' :
              metric.color === 'purple' ? 'text-purple-300' :
              'text-orange-300'
            }`}>
              {metric.value}
            </div>
            
            <div className="text-white/60 text-sm font-medium">{metric.label}</div>
            
            {/* Hover glow */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              metric.color === 'emerald' ? 'bg-emerald-500/5' :
              metric.color === 'blue' ? 'bg-blue-500/5' :
              metric.color === 'purple' ? 'bg-purple-500/5' :
              'bg-orange-500/5'
            }`} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Portfolio Companies Showcase - Shows TRON's actual portfolio
export const PortfolioShowcaseGraphics = () => {
  const portfolioRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && portfolioRef.current) {
      const cards = portfolioRef.current.querySelectorAll('.portfolio-card')
      
      gsap.set(cards, { opacity: 0, y: 40, rotateY: 10 })
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      })
    }
  }, [mounted])

  if (!mounted) return null

  const portfolioCompanies = [
    { 
      name: 'Clinix AI', 
      icon: <Brain className="w-8 h-8" />, 
      sector: 'Healthcare AI',
      description: 'AI-powered diagnostic tools for healthcare systems',
      value: '$15M',
      color: 'blue',
      metrics: { users: '50K+', accuracy: '94%' }
    },
    { 
      name: 'ShadowShield AI', 
      icon: <Shield className="w-8 h-8" />, 
      sector: 'Cybersecurity',
      description: 'Advanced threat detection for financial institutions',
      value: '$12M',
      color: 'purple',
      metrics: { clients: '200+', threats: '99.8%' }
    },
    { 
      name: 'Synergies4 AI', 
      icon: <Network className="w-8 h-8" />, 
      sector: 'Business Intelligence',
      description: 'Data analytics platform for enterprises',
      value: '$9M',
      color: 'emerald',
      metrics: { revenue: '+340%', clients: '150+' }
    }
  ]

  return (
    <div ref={portfolioRef} className="relative w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/10 rounded-full border border-orange-400/20 mb-4">
          <Award className="w-5 h-5 text-orange-400" />
          <span className="text-orange-300 font-medium">Portfolio Showcase</span>
        </div>
        <h3 className="text-2xl font-light text-white mb-4">Transforming Industries</h3>
        <p className="text-white/60 max-w-2xl mx-auto">Our portfolio companies are solving real problems and creating meaningful impact.</p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioCompanies.map((company, index) => (
          <div 
            key={index} 
            className={`portfolio-card relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 group`}
          >
            {/* Company header */}
            <div className="flex items-center justify-between mb-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                company.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                company.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                'bg-emerald-500/20 text-emerald-400'
              }`}>
                {company.icon}
              </div>
              <div className={`text-2xl font-light ${
                company.color === 'blue' ? 'text-blue-300' :
                company.color === 'purple' ? 'text-purple-300' :
                'text-emerald-300'
              }`}>
                {company.value}
              </div>
            </div>

            {/* Company info */}
            <h4 className="text-white text-xl font-medium mb-2">{company.name}</h4>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
              company.color === 'blue' ? 'bg-blue-500/20 text-blue-300' :
              company.color === 'purple' ? 'bg-purple-500/20 text-purple-300' :
              'bg-emerald-500/20 text-emerald-300'
            }`}>
              {company.sector}
            </div>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">{company.description}</p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(company.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-white font-medium">{value}</div>
                  <div className="text-white/50 text-xs capitalize">{key}</div>
                </div>
              ))}
            </div>

            {/* Hover glow */}
            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              company.color === 'blue' ? 'bg-blue-500/5' :
              company.color === 'purple' ? 'bg-purple-500/5' :
              'bg-emerald-500/5'
            }`} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Innovation Labs - Shows TRON's R&D activities
export const InnovationLabsGraphics = () => {
  const labsRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && labsRef.current) {
      const labs = labsRef.current.querySelectorAll('.lab-card')
      
      gsap.set(labs, { opacity: 0, scale: 0.9 })
      gsap.to(labs, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      })
    }
  }, [mounted])

  if (!mounted) return null

  const labs = [
    { 
      title: 'AI Research', 
      focus: 'Machine Learning & Computer Vision',
      projects: 8,
      icon: <Brain className="w-6 h-6" />,
      color: 'blue'
    },
    { 
      title: 'Fintech Innovation', 
      focus: 'Blockchain & Digital Payments',
      projects: 12,
      icon: <DollarSign className="w-6 h-6" />,
      color: 'emerald'
    },
    { 
      title: 'Healthcare Technology', 
      focus: 'Telemedicine & Diagnostics',
      projects: 6,
      icon: <Heart className="w-6 h-6" />,
      color: 'purple'
    },
    { 
      title: 'Design & UX', 
      focus: 'User Experience & Creative Technology',
      projects: 15,
      icon: <Palette className="w-6 h-6" />,
      color: 'orange'
    }
  ]

  return (
    <div ref={labsRef} className="relative w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 rounded-full border border-purple-400/20 mb-4">
          <Zap className="w-5 h-5 text-purple-400" />
          <span className="text-purple-300 font-medium">Innovation Labs</span>
        </div>
        <h3 className="text-2xl font-light text-white mb-4">Research & Development</h3>
        <p className="text-white/60 max-w-2xl mx-auto">Cutting-edge research facilities across Africa driving tomorrow&apos;s innovations.</p>
      </div>

      {/* Labs Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {labs.map((lab, index) => (
          <div 
            key={index} 
            className={`lab-card relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 group`}
          >
            {/* Lab header */}
            <div className="flex items-start justify-between mb-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                lab.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                lab.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                lab.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                'bg-orange-500/20 text-orange-400'
              }`}>
                {lab.icon}
              </div>
              <div className="text-right">
                <div className={`text-2xl font-light ${
                  lab.color === 'blue' ? 'text-blue-300' :
                  lab.color === 'emerald' ? 'text-emerald-300' :
                  lab.color === 'purple' ? 'text-purple-300' :
                  'text-orange-300'
                }`}>
                  {lab.projects}
                </div>
                <div className="text-white/50 text-xs">Active Projects</div>
              </div>
            </div>

            {/* Lab info */}
            <h4 className="text-white text-xl font-medium mb-4">{lab.title}</h4>
            <p className="text-white/60 text-sm mb-4">{lab.focus}</p>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                lab.color === 'blue' ? 'bg-blue-400' :
                lab.color === 'emerald' ? 'bg-emerald-400' :
                lab.color === 'purple' ? 'bg-purple-400' :
                'bg-orange-400'
              } animate-pulse`} />
              <span className="text-white/60 text-xs">Active Research</span>
            </div>

            {/* Hover glow */}
            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              lab.color === 'blue' ? 'bg-blue-500/5' :
              lab.color === 'emerald' ? 'bg-emerald-500/5' :
              lab.color === 'purple' ? 'bg-purple-500/5' :
              'bg-orange-500/5'
            }`} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Global Connections - Shows TRON's international partnerships
export const GlobalConnectionsGraphics = () => {
  const connectionsRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (isClient && connectionsRef.current) {
      const connections = connectionsRef.current.querySelectorAll('.connection-card')
      
      gsap.set(connections, { opacity: 0, x: -30 })
      gsap.to(connections, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      })
    }
  }, [mounted])

  if (!mounted) return null

  const globalConnections = [
    { region: 'Silicon Valley', partnerships: 8, focus: 'Technology Transfer', color: 'blue' },
    { region: 'London', partnerships: 12, focus: 'Financial Services', color: 'emerald' },
    { region: 'Singapore', partnerships: 6, focus: 'Asia-Pacific Expansion', color: 'purple' },
    { region: 'Dubai', partnerships: 10, focus: 'Middle East Gateway', color: 'orange' }
  ]

  return (
    <div ref={connectionsRef} className="relative w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 rounded-full border border-blue-400/20 mb-4">
          <Globe className="w-5 h-5 text-blue-400" />
          <span className="text-blue-300 font-medium">Global Network</span>
        </div>
        <h3 className="text-2xl font-light text-white mb-4">International Partnerships</h3>
        <p className="text-white/60 max-w-2xl mx-auto">Connecting African innovation with global markets and expertise.</p>
      </div>

      {/* Connections Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {globalConnections.map((connection, index) => (
          <div 
            key={index} 
            className={`connection-card relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 group`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
              connection.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
              connection.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
              connection.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
              'bg-orange-500/20 text-orange-400'
            }`}>
              <Building className="w-6 h-6" />
            </div>
            
            <h4 className="text-white font-medium mb-2">{connection.region}</h4>
            <div className={`text-2xl font-light mb-2 ${
              connection.color === 'blue' ? 'text-blue-300' :
              connection.color === 'emerald' ? 'text-emerald-300' :
              connection.color === 'purple' ? 'text-purple-300' :
              'text-orange-300'
            }`}>
              {connection.partnerships}
            </div>
            <div className="text-white/50 text-xs mb-3">Partnerships</div>
            <p className="text-white/60 text-sm">{connection.focus}</p>

            {/* Hover glow */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              connection.color === 'blue' ? 'bg-blue-500/5' :
              connection.color === 'emerald' ? 'bg-emerald-500/5' :
              connection.color === 'purple' ? 'bg-purple-500/5' :
              'bg-orange-500/5'
            }`} />
          </div>
        ))}
      </div>
    </div>
  )
}

// About Page: Founders Journey & Values Visualization
export const FoundersJourneyGraphics = () => {
  const journeyRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isClient) return

    setIsVisible(true)
    
    if (journeyRef.current) {
      const elements = journeyRef.current.querySelectorAll('[data-animate]')
      
      gsap.fromTo(elements, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          stagger: 0.2,
          ease: "power2.out"
        }
      )
      
      // Subtle floating animation for the journey path
      gsap.to(journeyRef.current.querySelectorAll('[data-float]'), {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.3
      })
    }
  }, [])

  if (!isClient || !isVisible) return null

  const journeySteps = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Refugee to Visionary",
      description: "From Liberian refugee to successful entrepreneur",
      color: "text-orange-300",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Athlete to Investor", 
      description: "NFL experience to business leadership",
      color: "text-emerald-300",
      bgColor: "bg-emerald-500/10"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Technology and strategic operations",
      color: "text-blue-300", 
      bgColor: "bg-blue-500/10"
    }
  ]

  return (
    <div ref={journeyRef} className="relative w-full max-w-4xl mx-auto">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center mb-12" data-animate>
        <h3 className="text-2xl font-light text-white mb-4">Our Journey</h3>
        <p className="text-white/60 max-w-2xl mx-auto">From diverse backgrounds to shared vision</p>
      </div>

      {/* Journey timeline */}
      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-y-1/2" data-animate></div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {journeySteps.map((step, index) => (
            <div key={index} className="text-center" data-animate data-float>
              <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 ${step.color} border border-white/10`}>
                {step.icon}
              </div>
              <h4 className="text-white font-medium mb-2">{step.title}</h4>
              <p className="text-white/50 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// About Page: Company Values Visualization  
export const CompanyValuesGraphics = () => {
  const valuesRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isClient) return

    setIsVisible(true)
    
    if (valuesRef.current) {
      const cards = valuesRef.current.querySelectorAll('[data-value-card]')
      
      gsap.fromTo(cards,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)"
        }
      )
    }
  }, [])

  if (!isClient || !isVisible) return null

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Empowerment",
      description: "Amplifying voices and creating opportunities",
      color: "text-emerald-300",
      bgColor: "from-emerald-500/5 to-emerald-600/10"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Innovation", 
      description: "Technology-driven solutions for global challenges",
      color: "text-blue-300",
      bgColor: "from-blue-500/5 to-blue-600/10"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Impact",
      description: "Sustainable growth and meaningful change",
      color: "text-purple-300", 
      bgColor: "from-purple-500/5 to-purple-600/10"
    }
  ]

  return (
    <div ref={valuesRef} className="relative w-full max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-light text-white mb-4">Our Values</h3>
        <p className="text-white/60">Principles that drive everything we do</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div 
            key={index} 
            data-value-card
            className={`relative bg-gradient-to-br ${value.bgColor} backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center group hover:border-white/20 transition-all duration-300`}
          >
            <div className={`w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4 ${value.color} group-hover:bg-white/10 transition-colors duration-300`}>
              {value.icon}
            </div>
            <h4 className="text-white font-medium mb-3">{value.title}</h4>
            <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 