"use client"

import { Suspense, lazy } from "react"
import Link from "next/link"
import { 
  Building, 
  TrendingUp, 
  Globe,
  ArrowRight,
  Phone,
  Users,
  Target,
  Brain,
  Shield,
  BookOpen
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import { ServiceShowcase, AfricaContinent } from "@/components/africa-graphics"

// Lazy load simple effects
const SimpleHeroEffects = lazy(() => import("@/components/simple-hero-effects"))

export default function PortfolioPage() {
  const portfolioCompanies = [
    {
      name: "Clinix AI",
      sector: "HealthTech",
      stage: "Series A",
      location: "Atlanta, Georgia",
      description: "AI-powered medical documentation platform empowering physicians with automated note-taking and billing optimization",
      metrics: { users: "5K+", revenue: "$1.2M ARR", growth: "+250%" },
      founded: "2023",
      slug: "clinix-ai"
    },
    {
      name: "ShadowShield AI", 
      sector: "CyberSecurity",
      stage: "Seed",
      location: "San Francisco, CA",
      description: "Enterprise-grade AI governance platform providing real-time security monitoring and data protection for AI interactions",
      metrics: { users: "200+", revenue: "$800K ARR", growth: "+300%" },
      founded: "2024",
      slug: "shadowshield-ai"
    },
    {
      name: "Synergies4 AI",
      sector: "EdTech",
      stage: "Pre-Seed",
      location: "Remote Global",
      description: "AI-powered learning platform offering personalized professional development courses and intelligent learning recommendations",
      metrics: { users: "10K+", revenue: "$400K ARR", growth: "+180%" },
      founded: "2024",
      slug: "synergies4-ai"
    }
  ]

  const stats = [
    { label: "Portfolio Companies", value: "3", description: "Active investments" },
    { label: "Total Valuation", value: "$36M", description: "Combined portfolio value" },
    { label: "Average Growth", value: "+243%", description: "YoY revenue growth" },
    { label: "Active Users", value: "15K+", description: "Across all platforms" }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950/20">
      {/* Simple Portfolio Effects */}
      <Suspense fallback={null}>
        <SimpleHeroEffects variant="portfolio" />
      </Suspense>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 z-10">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <AnimatedElement animation="fade" delay={0.1} className="mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-orange-200/80 text-sm font-medium tracking-wide">
              <Building className="w-4 h-4" />
              PORTFOLIO COMPANIES
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-r from-white via-orange-200 to-red-300 bg-clip-text text-transparent mb-8 tracking-tight leading-[0.9]" style={{fontFamily: 'var(--font-orbitron)', fontWeight: 300, letterSpacing: '-0.02em'}}>
              Our Investments
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.4} className="mb-16">
            <p className="text-lg sm:text-xl md:text-2xl text-orange-100/60 font-light tracking-wide max-w-4xl mx-auto leading-relaxed" style={{fontWeight: 300}}>
              Empowering the next generation of transformational companies with strategic capital and expertise.
            </p>
          </AnimatedElement>

          {/* Portfolio Stats */}
          <AnimatedElement animation="slide" direction="up" delay={0.6} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                <div className="text-2xl md:text-3xl font-light text-white mb-2" style={{fontFamily: 'var(--font-orbitron)'}}>
                  {stat.value}
                </div>
                <div className="text-orange-300 font-medium text-sm mb-1">{stat.label}</div>
                <div className="text-orange-100/50 text-xs">{stat.description}</div>
              </div>
            ))}
          </AnimatedElement>
        </div>
      </section>

      {/* Portfolio Companies Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Featured <span className="text-orange-300">Companies</span>
            </h2>
            <p className="text-lg text-orange-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Meet the innovative companies we&apos;re proud to support as they transform industries.
            </p>
          </AnimatedElement>

          <div className="grid gap-8">
            {portfolioCompanies.map((company, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <Link href={`/ventures/portfolio/${company.slug}`}>
                  <div className="group relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-orange-400/30 overflow-hidden transition-all duration-300 hover:bg-white/[0.04] p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                      {/* Company Info */}
                      <div className="md:col-span-2">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-tight group-hover:text-orange-300 transition-colors duration-300">
                              {company.name}
                            </h3>
                            <div className="flex flex-wrap gap-3 mb-4">
                              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium">
                                {company.sector}
                              </span>
                              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                                {company.stage}
                              </span>
                              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                                {company.location}
                              </span>
                            </div>
                          </div>
                          <ArrowRight className="w-6 h-6 text-orange-400/60 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        
                        <p className="text-orange-100/70 leading-relaxed font-light mb-6">
                          {company.description}
                        </p>
                        
                        <div className="text-sm text-orange-100/50">
                          Founded {company.founded}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
                        <div className="text-center md:text-left">
                          <div className="text-xl font-light text-white mb-1" style={{fontFamily: 'var(--font-orbitron)'}}>
                            {company.metrics.users}
                          </div>
                          <div className="text-orange-300/70 text-xs">Users</div>
                        </div>
                        <div className="text-center md:text-left">
                          <div className="text-xl font-light text-white mb-1" style={{fontFamily: 'var(--font-orbitron)'}}>
                            {company.metrics.revenue}
                          </div>
                          <div className="text-orange-300/70 text-xs">Revenue</div>
                        </div>
                        <div className="text-center md:text-left">
                          <div className="text-xl font-light text-white mb-1" style={{fontFamily: 'var(--font-orbitron)'}}>
                            {company.metrics.growth}
                          </div>
                          <div className="text-orange-300/70 text-xs">Growth</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Building for <span className="text-orange-300">Africa</span>
            </h2>
            <p className="text-lg text-orange-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Our portfolio companies are solving real problems across the African continent and beyond.
            </p>
          </AnimatedElement>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Service Showcases */}
            <div className="space-y-8">
              <ServiceShowcase 
                title="Healthcare AI"
                color="orange"
                services={[
                  {
                    icon: <Brain className="w-5 h-5" />,
                    title: "Clinix AI",
                    description: "AI-powered medical documentation reducing physician workload by 60%"
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "ShadowShield AI", 
                    description: "Enterprise AI governance protecting healthcare data and compliance"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5" />,
                    title: "Synergies4 AI",
                    description: "AI-powered learning for medical professionals and healthcare teams"
                  }
                ]}
              />
            </div>

            {/* Africa Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/5 to-red-600/10 rounded-2xl p-8 border border-orange-400/20">
                <AfricaContinent showConnectionLines={true} animated={true} />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-light text-white mb-2" style={{fontFamily: 'var(--font-orbitron)'}}>
                    Global Impact
                  </h3>
                  <p className="text-orange-100/60 text-sm">
                    Our companies serve clients from Lagos to Atlanta, creating solutions that scale globally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-orange-950/10 to-red-950/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Investment <span className="text-orange-300">Philosophy</span>
            </h2>
            <p className="text-lg text-orange-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              We partner with visionary entrepreneurs building the future of technology and innovation.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Strategic Focus",
                description: "AI-powered solutions, HealthTech innovation, and enterprise-grade platforms with clear market differentiation."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Founder-First",
                description: "We invest in exceptional teams with deep domain expertise and unwavering commitment to their vision."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Growth Partnership",
                description: "Beyond capital, we provide strategic guidance, industry connections, and operational expertise."
              }
            ].map((approach, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-orange-400/20 transition-all duration-300 p-8 text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-orange-300">
                    {approach.icon}
                  </div>
                  <h3 className="text-xl font-light text-white mb-4 tracking-tight">
                    {approach.title}
                  </h3>
                  <p className="text-orange-100/60 leading-relaxed font-light">
                    {approach.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement animation="slide" direction="up" className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Partner With <span className="text-orange-300">TRON</span>
            </h2>
            <p className="text-lg text-orange-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to scale your company? Let&apos;s discuss how TRON Dynamics can fuel your growth journey.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = 'tel:+14049394238'}
              className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150 min-w-[220px]"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
              </div>
            </Button>

            <Link href="/about">
              <Button className="group relative overflow-hidden bg-transparent border border-orange-400/30 text-orange-300/90 hover:text-white hover:border-orange-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150 min-w-[220px]">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Globe className="w-4 h-4" />
                  <span>Learn More</span>
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
} 