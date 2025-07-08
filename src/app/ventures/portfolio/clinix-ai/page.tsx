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
  Activity,
  FileText,
  Phone,
  ArrowRight,
  Globe,
  Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import MeteorBackground from "@/components/meteor-background"

export default function ClinixAIPage() {
  const companyDetails = {
    name: "Clinix AI",
    tagline: "AI Documentation for The Modern Clinician",
    sector: "HealthTech",
    stage: "Series A",
    location: "Atlanta, Georgia",
    founded: "2024",
    employees: "13",
    valuation: "$18M",
    totalRaised: "$2.1M"
  }

  const overview = "Clinix AI empowers physicians and therapists to focus on what matters most—patient care—by generating billable notes, ICD-10, DSM-5-TR and CPT codes. Our advanced AI agents use EMR data and recordings to create optimal, rich SOAP/HPI Notes with enterprise-grade encryption and HIPAA-compliant security."

  const keyMetrics = [
    { label: "Note Accuracy", value: "99%", growth: "AI-powered" },
    { label: "ICD-10 CPT & DSM-5-TR", value: "Auto-Gen", growth: "codes" },
    { label: "AI Analytics", value: "Real-time", growth: "insights" },
    { label: "Session Length", value: "2 Hours", growth: "maximum" }
  ]

  const products = [
    {
      name: "Basic Plan",
      description: "SOAP Note + ICD-10 Generation with unlimited patients and white glove training",
      users: "$99/month"
    },
    {
      name: "Professional Plan",
      description: "Faster note generation, personalization, EHR integration, and 2-hour sessions",
      users: "$199/month"
    },
    {
      name: "Enterprise Plan",
      description: "User permissions, teams, priority support, and advanced analytics",
      users: "$299/month"
    }
  ]

  const teamHighlights = [
    {
      name: "Robby Gulri",
      role: "CEO",
      background: "Experienced healthcare technology leader and entrepreneur",
      experience: "Expert in scaling AI-powered healthcare solutions",
      linkedin: "https://www.linkedin.com/in/robbygulri/"
    },
    {
      name: "Paul Wallace",
      role: "CTO",
      background: "Healthcare technology entrepreneur and strategic leader",
      experience: "Expert in AI healthcare solutions architecture",
      linkedin: "https://www.linkedin.com/in/paul-wallace-08664b223/"
    },
    {
      name: "Matthew Bravo",
      role: "CMO", 
      background: "Senior marketing executive and growth strategist",
      experience: "Proven track record in healthcare market expansion",
      linkedin: "https://www.linkedin.com/in/matt-bravo-703424a4/"
    },
    {
      name: "Dr. Elvis Francois",
      role: "Chief Medical Officer",
      background: "Mayo Clinic-trained spine surgeon, Harvard fellowship",
      experience: "Renowned physician and healthcare innovation leader",
      linkedin: "https://www.tryclinixai.com/post/clinix-ai-welcomes-dr-elvis-francois-as-chief-medical-officer-partner"
    },
    {
      name: "Dr. Grigoriy Arutyunyan",
      role: "Medical Advisor",
      background: "Board-certified spine surgeon, Mayo Clinic residency",
      experience: "UCSF fellowship, Memorial Sloan Kettering training",
      linkedin: "https://www.bigappleortho.com/provider/dr-grigoriy-arutyunyan"
    }
  ]

  const milestones = [
    {
      date: "Q1 2024",
      title: "Company Founded",
      description: "Launched with HIPAA-compliant AI documentation platform"
    },
    {
      date: "Q2 2024", 
      title: "Product Launch",
      description: "Deployed AI-powered SOAP note generation with ICD-10/CPT coding"
    },
    {
      date: "Q3 2024",
      title: "Leadership Team",
      description: "Welcomed Dr. Elvis Francois as Chief Medical Officer"
    },
    {
      date: "Q4 2024",
      title: "Series A Funding",
      description: "Completed Series A round, reached $18M valuation"
    }
  ]

  const marketOpportunity = {
    addressableMarket: "$12B",
    targetSegment: "Healthcare Providers",
    marketPenetration: "1.2%",
    competitiveAdvantage: "AI-powered automation & HIPAA compliance"
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
                    <Link href="https://www.tryclinixai.com/" target="_blank" rel="noopener noreferrer">
                      <div className="relative z-10 flex items-center justify-center gap-3">
                        <Globe className="w-4 h-4" />
                        <span>Visit Website</span>
                      </div>
                    </Link>
                  </Button>
                  
                  <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150" asChild>
                    <Link href="https://www.tryclinixai.com/contact" target="_blank" rel="noopener noreferrer">
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
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-400/20">
                  <Image
                    src="/app-screenshots/clinix-ai/Frame 8.png"
                    alt="Clinix AI Dashboard - AI-Powered Medical Documentation"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">AI-Powered Medical Documentation</p>
                    <p className="text-white/70 text-sm">SOAP Notes & Billing Automation</p>
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

          {/* SOAP Notes Generation Screenshot */}
          <AnimatedElement animation="slide" direction="up" className="mb-20">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-2xl overflow-hidden border border-orange-400/20 shadow-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                <Image
                  src="/app-screenshots/clinix-ai/Frame 9.png"
                  alt="Clinix AI SOAP Notes Generation Interface"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">AI-Powered SOAP Notes Generation</h3>
                  <p className="text-white/80 text-sm sm:text-lg">Advanced medical documentation with real-time ICD-10 and CPT coding</p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Products */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Pricing <span className="text-orange-300">Plans</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {index === 0 ? <FileText className="w-6 h-6 text-orange-300" /> : 
                     index === 1 ? <Activity className="w-6 h-6 text-orange-300" /> :
                     <Shield className="w-6 h-6 text-orange-300" />}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">{product.name}</h3>
                  <p className="text-white/80 font-light text-sm leading-relaxed mb-3">{product.description}</p>
                  <p className="text-orange-400 font-bold text-lg">{product.users}</p>
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

          {/* Patient Management Screenshot */}
          <AnimatedElement animation="slide" direction="up" className="mb-20">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-2xl overflow-hidden border border-orange-400/20 shadow-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                <Image
                  src="/app-screenshots/clinix-ai/Frame 11.png"
                  alt="Clinix AI Patient Management System"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Comprehensive Patient Management</h3>
                  <p className="text-white/80 text-sm sm:text-lg">Integrated patient records and session tracking with EMR compatibility</p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Team */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Leadership <span className="text-orange-300">Team</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {teamHighlights.map((member, index) => (
                <Link key={index} href={member.linkedin} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500/30 group-hover:to-red-600/30 transition-all duration-300">
                      <Users className="w-8 h-8 text-orange-300 group-hover:text-orange-200 transition-colors duration-300" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2 group-hover:text-orange-100 transition-colors duration-300">{member.name}</h3>
                        <p className="text-orange-400 font-medium mb-3 text-sm group-hover:text-orange-300 transition-colors duration-300">{member.role}</p>
                        <p className="text-white/80 font-light text-sm leading-relaxed mb-2 group-hover:text-white/90 transition-colors duration-300">{member.background}</p>
                      </div>
                      <p className="text-white/60 font-light text-xs group-hover:text-white/70 transition-colors duration-300 mt-auto">{member.experience}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedElement>

          {/* Analytics Dashboard Screenshot */}
          <AnimatedElement animation="slide" direction="up" className="mb-20">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-2xl overflow-hidden border border-orange-400/20 shadow-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                <Image
                  src="/app-screenshots/clinix-ai/1255@3x.png"
                  alt="Clinix AI Analytics Dashboard"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Advanced Analytics Dashboard</h3>
                  <p className="text-white/80 text-sm sm:text-lg">Performance insights and billing optimization with real-time reporting</p>
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
              Connect with Clinix AI to explore partnership opportunities, integration possibilities, or investment details.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150" asChild>
              <Link href="https://www.tryclinixai.com/contact" target="_blank" rel="noopener noreferrer">
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