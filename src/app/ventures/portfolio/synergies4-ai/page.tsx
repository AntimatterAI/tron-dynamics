"use client"

import Link from "next/link"
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  Users, 
  MapPin, 
  TrendingUp,
  Brain,
  Phone,
  ArrowRight,
  Globe,
  Target,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import MeteorBackground from "@/components/meteor-background"

export default function Synergies4AIPage() {
  const companyDetails = {
    name: "Synergies4 AI",
    tagline: "AI-Powered Learning Platform for Professional Development",
    sector: "EdTech",
    stage: "Pre-Seed",
    location: "Remote Global",
    founded: "2024",
    employees: "12+",
    valuation: "$3M",
    totalRaised: "$650K"
  }

  const overview = "Synergies4 AI revolutionizes professional development through AI-powered learning experiences. Our platform offers personalized course recommendations, intelligent learning paths, and comprehensive training programs in Agile & Scrum, Leadership, and Product Management, designed to accelerate career growth."

  const keyMetrics = [
    { label: "Active Learners", value: "10K+", growth: "+180%" },
    { label: "Annual Revenue", value: "$400K", growth: "+160%" },
    { label: "Course Completion", value: "85%", growth: "industry-leading" },
    { label: "Skill Certifications", value: "5K+", growth: "issued" }
  ]

  const products = [
    {
      name: "AI Learning Assistant",
      description: "Personalized course recommendations and intelligent learning path optimization",
      users: "10K+ Users"
    },
    {
      name: "Leadership Development",
      description: "Comprehensive leadership training programs with real-world application focus",
      users: "Premium Track"
    },
    {
      name: "Agile & Scrum Mastery",
      description: "Complete certification programs for agile methodology and scrum framework",
      users: "Professional Cert"
    }
  ]

  const teamHighlights = [
    {
      name: "Alex Johnson",
      role: "CEO & Co-Founder",
      background: "Former Google L&D Director, Stanford Education",
      experience: "12+ years in learning technology"
    },
    {
      name: "Maria Garcia",
      role: "CTO & Co-Founder", 
      background: "Ex-Microsoft AI researcher, Carnegie Mellon PhD",
      experience: "8+ years in AI/ML education"
    },
    {
      name: "David Park",
      role: "Head of Content",
      background: "Former McKinsey learning consultant",
      experience: "10+ years in professional development"
    }
  ]

  const milestones = [
    {
      date: "Q1 2024",
      title: "Company Founded",
      description: "Launched AI-powered learning platform with initial course catalog"
    },
    {
      date: "Q2 2024", 
      title: "Seed Funding",
      description: "Raised $650K pre-seed round led by TRON Ventures"
    },
    {
      date: "Q3 2024",
      title: "10K Learners",
      description: "Reached 10,000 active learners across professional development programs"
    },
    {
      date: "Q4 2024",
      title: "AI Assistant Launch",
      description: "Deployed personalized AI learning assistant with recommendation engine"
    }
  ]

  const marketOpportunity = {
    addressableMarket: "$4B",
    targetSegment: "Professional Learning",
    marketPenetration: "0.5%",
    competitiveAdvantage: "AI-personalized & outcome-focused"
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950/20">
      <MeteorBackground />
      
      {/* Header with Back Button */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="right" delay={0.1}>
            <Link href="/ventures" className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Ventures</span>
            </Link>
          </AnimatedElement>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedElement animation="slide" direction="up" delay={0.1}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                    {companyDetails.stage}
                  </span>
                  <span className="text-orange-400 font-medium">{companyDetails.sector}</span>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight leading-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                  {companyDetails.name}
                </h1>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.3}>
                <p className="text-xl text-orange-300 mb-8 font-medium">{companyDetails.tagline}</p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.4}>
                <p className="text-lg text-white/80 leading-relaxed mb-8 font-light">
                  {overview}
                </p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group relative overflow-hidden bg-orange-500/20 hover:bg-orange-500/30 backdrop-blur-xl text-orange-300 hover:text-white px-6 py-3 text-base font-medium rounded-xl border border-orange-400/30 hover:border-orange-400/50 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Globe className="w-4 h-4" />
                      <span>Visit Platform</span>
                    </div>
                  </Button>
                  
                  <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Phone className="w-4 h-4" />
                      <span>Try AI Assistant</span>
                    </div>
                  </Button>
                </div>
              </AnimatedElement>
            </div>

            <div>
              <AnimatedElement animation="slide" direction="left" delay={0.3}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-400/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <Brain className="w-10 h-10 text-orange-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">AI Learning Platform</p>
                    <p className="text-white/70 text-sm">Professional Development</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Calendar className="w-5 h-5" />, label: "Founded", value: companyDetails.founded },
              { icon: <MapPin className="w-5 h-5" />, label: "Location", value: companyDetails.location },
              { icon: <Users className="w-5 h-5" />, label: "Team Size", value: companyDetails.employees },
              { icon: <DollarSign className="w-5 h-5" />, label: "Valuation", value: companyDetails.valuation }
            ].map((detail, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {detail.icon}
                  </div>
                  <p className="text-white/60 text-sm mb-1">{detail.label}</p>
                  <p className="text-white font-medium">{detail.value}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Key Metrics */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Key <span className="text-orange-300">Metrics</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{metric.value}</h3>
                  <p className="text-orange-300 font-medium mb-2 text-sm">{metric.label}</p>
                  <div className="flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-400">{metric.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Products */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Learning <span className="text-orange-300">Solutions</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {index === 0 ? <Brain className="w-6 h-6 text-orange-300" /> : 
                     index === 1 ? <Target className="w-6 h-6 text-orange-300" /> :
                     <Award className="w-6 h-6 text-orange-300" />}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">{product.name}</h3>
                  <p className="text-white/80 font-light text-sm leading-relaxed mb-3">{product.description}</p>
                  <p className="text-orange-400 font-medium text-sm">{product.users}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Market Opportunity */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Market <span className="text-orange-300">Opportunity</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(marketOpportunity).map(([key, value], index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">{value}</h3>
                  <p className="text-white/80 font-light text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Team */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Leadership <span className="text-orange-300">Team</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {teamHighlights.map((member, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{member.name}</h3>
                  <p className="text-orange-400 font-medium mb-3 text-sm">{member.role}</p>
                  <p className="text-white/80 font-light text-sm leading-relaxed mb-2">{member.background}</p>
                  <p className="text-white/60 font-light text-xs">{member.experience}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Milestones */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Key <span className="text-orange-300">Milestones</span>
            </h2>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-20 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-orange-300 font-medium text-sm">{milestone.date}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white mb-1">{milestone.title}</h3>
                      <p className="text-white/80 font-light text-sm">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement animation="slide" direction="up" className="mb-8">
            <h2 className="text-3xl font-light text-white mb-4 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Interested in <span className="text-orange-300">Partnership</span>?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Connect with Synergies4 AI to explore partnership opportunities, content collaboration, or investment details.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <span>Try AI Assistant</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Button>

            <Link href="/ventures">
              <Button className="group relative overflow-hidden bg-transparent border border-orange-400/30 text-orange-300/90 hover:text-white hover:border-orange-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Portfolio</span>
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
} 