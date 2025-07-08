"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  Users, 
  MapPin, 
  TrendingUp,
  Lock,
  Phone,
  ArrowRight,
  Globe,
  Eye,
  Database
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import MeteorBackground from "@/components/meteor-background"

export default function ShadowShieldAIPage() {
  const companyDetails = {
    name: "ShadowShield AI",
    tagline: "Secure AI. Protect Your Data. Govern AI Use with Confidence",
    sector: "CyberSecurity",
    stage: "Seed",
    location: "San Francisco, CA",
    founded: "2024",
    employees: "15+",
    valuation: "$5M",
    totalRaised: "$1.2M"
  }

  const overview = "ShadowShield AI delivers next-generation AI security capabilities with enterprise-grade guardrails, ensuring organizations can innovate boldly without compromising on control, privacy, or security. Our platform provides real-time monitoring, DLP enforcement, and comprehensive AI governance for enterprise environments."

  const keyMetrics = [
    { label: "Enterprise Clients", value: "500+", growth: "+350%" },
    { label: "Cost Savings", value: "$2.2M", growth: "avg. per client" },
    { label: "Customer Rating", value: "4.8/5", growth: "50+ reviews" },
    { label: "DLP Rule Presets", value: "100+", growth: "industry coverage" }
  ]

  const products = [
    {
      name: "AI Security Monitoring",
      description: "Real-time visibility and control over AI interactions with comprehensive compliance tracking",
      users: "Enterprise"
    },
    {
      name: "Data Loss Prevention",
      description: "Advanced DLP enforcement with 100+ rule presets for all industries and use cases",
      users: "Multi-Industry"
    },
    {
      name: "Governance Dashboard",
      description: "Complete oversight of AI usage patterns, security alerts, and regulatory compliance",
      users: "C-Suite Ready"
    }
  ]



  const milestones = [
    {
      date: "Q1 2024",
      title: "Company Founded",
      description: "Launched enterprise AI security platform with initial DLP capabilities"
    },
    {
      date: "Q2 2024", 
      title: "Seed Funding",
      description: "Raised $1.2M seed round led by TRON Ventures"
    },
    {
      date: "Q3 2024",
      title: "100+ Enterprises",
      description: "Onboarded first 100 enterprise clients across Fortune 500"
    },
    {
      date: "Q4 2024",
      title: "Security Certifications",
      description: "Achieved SOC 2, GDPR, and HIPAA compliance certifications"
    }
  ]

  const marketOpportunity = {
    addressableMarket: "$8B",
    targetSegment: "Enterprise Security",
    marketPenetration: "0.8%",
    competitiveAdvantage: "AI-native security & real-time governance"
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
                  <Button className="group relative overflow-hidden bg-orange-500/20 hover:bg-orange-500/30 backdrop-blur-xl text-orange-300 hover:text-white px-6 py-3 text-base font-medium rounded-xl border border-orange-400/30 hover:border-orange-400/50 transition-all duration-150" asChild>
                    <Link href="https://www.shadowshieldai.com/" target="_blank" rel="noopener noreferrer">
                      <div className="relative z-10 flex items-center justify-center gap-3">
                        <Globe className="w-4 h-4" />
                        <span>Visit Website</span>
                      </div>
                    </Link>
                  </Button>
                  
                  <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150" asChild>
                    <Link href="https://www.shadowshieldai.com/" target="_blank" rel="noopener noreferrer">
                      <div className="relative z-10 flex items-center justify-center gap-3">
                        <Phone className="w-4 h-4" />
                        <span>Request Demo</span>
                      </div>
                    </Link>
                  </Button>
                </div>
              </AnimatedElement>
            </div>

            <div>
              <AnimatedElement animation="slide" direction="left" delay={0.3}>
                <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-400/20">
                  <Image
                    src="/app-screenshots/shadowshield-ai/Admin.png"
                    alt="ShadowShield AI Admin Dashboard - AI Security Platform"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                    <p className="text-white font-medium text-sm sm:text-base">AI Security & Governance Platform</p>
                    <p className="text-white/70 text-xs sm:text-sm">Enterprise Data Protection</p>
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

          {/* DLP Rules Management Screenshot */}
          <AnimatedElement animation="slide" direction="up" className="mb-20">
            <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-2xl overflow-hidden border border-orange-400/20 shadow-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                <Image
                  src="/app-screenshots/shadowshield-ai/DLP Rules.png"
                  alt="ShadowShield AI DLP Rules Management Interface"
                  width={400}
                  height={250}
                  className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Data Loss Prevention Rules</h3>
                  <p className="text-white/80 text-sm sm:text-base">Configure and manage comprehensive DLP policies across your organization</p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Products */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Core <span className="text-orange-300">Solutions</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {index === 0 ? <Eye className="w-6 h-6 text-orange-300" /> : 
                     index === 1 ? <Lock className="w-6 h-6 text-orange-300" /> :
                     <Database className="w-6 h-6 text-orange-300" />}
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

          {/* Security Alerts Screenshot */}
          <AnimatedElement animation="slide" direction="up" className="mb-20">
            <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-2xl overflow-hidden border border-orange-400/20 shadow-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                <Image
                  src="/app-screenshots/shadowshield-ai/Alerts.png"
                  alt="ShadowShield AI Security Alerts Dashboard"
                  width={400}
                  height={250}
                  className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Real-Time Security Alerts</h3>
                  <p className="text-white/80 text-sm sm:text-base">Advanced threat detection with instant notifications and response capabilities</p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* User Management Screenshot */}
          <AnimatedElement animation="slide" direction="up" className="mb-20">
            <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-2xl overflow-hidden border border-orange-400/20 shadow-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                <Image
                  src="/app-screenshots/shadowshield-ai/Users.png"
                  alt="ShadowShield AI User Management Interface"
                  width={400}
                  height={250}
                  className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Enterprise User Management</h3>
                  <p className="text-white/80 text-sm sm:text-base">Comprehensive access control and user permissions management</p>
                </div>
              </div>
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

          {/* Configuration Panel Screenshot */}
          <AnimatedElement animation="slide" direction="up" className="mb-20">
            <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-2xl overflow-hidden border border-orange-400/20 shadow-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                <Image
                  src="/app-screenshots/shadowshield-ai/Config and Settings.png"
                  alt="ShadowShield AI Configuration and Settings"
                  width={400}
                  height={250}
                  className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Advanced Configuration Panel</h3>
                  <p className="text-white/80 text-sm sm:text-base">Comprehensive system settings and security policy customization</p>
                </div>
              </div>
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
              Connect with ShadowShield AI to explore partnership opportunities, security integration, or investment details.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150" asChild>
              <Link href="https://www.shadowshieldai.com/" target="_blank" rel="noopener noreferrer">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span>Request Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
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