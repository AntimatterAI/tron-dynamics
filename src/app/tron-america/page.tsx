"use client"

import { Suspense } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { 
  MapPin, 
  Building, 
  ArrowRight,
  Phone,
  Users,
  TrendingUp,
  Rocket,
  Globe,
  CheckCircle,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"

// Dynamic imports with SSR disabled to prevent hydration errors
const SimpleHeroEffects = dynamic(() => import("@/components/simple-hero-effects"), { 
  ssr: false,
  loading: () => null
})
const StartupPipeline = dynamic(() => import("@/components/advanced-graphics").then(mod => ({ default: mod.StartupPipeline })), { 
  ssr: false,
  loading: () => <div className="h-[500px] flex items-center justify-center"><div className="text-white/60">Loading startup pipeline...</div></div>
})
const IncubatorEcosystem = dynamic(() => import("@/components/enhanced-graphics").then(mod => ({ default: mod.IncubatorEcosystem })), { 
  ssr: false,
  loading: () => <div className="h-96 flex items-center justify-center"><div className="text-white/60">Loading ecosystem...</div></div>
})

export default function TronAmericaPage() {
  const incubatorFeatures = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startup Acceleration",
      description: "6-month intensive program providing mentorship, funding connections, and market validation for early-stage startups in AI, FinTech, and HealthTech.",
      benefits: [
        "Up to $100K seed funding",
        "Dedicated mentor network",
        "Market validation frameworks",
        "Investor pitch preparation",
        "Tech infrastructure access"
      ],
      color: "from-blue-500/20 to-indigo-600/20",
      accent: "blue"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Co-Working & Community",
      description: "State-of-the-art co-working spaces designed for collaboration, networking, and innovation with 24/7 access for incubator members.",
      benefits: [
        "24/7 secure access",
        "Meeting & conference rooms",
        "High-speed fiber internet",
        "Event & workshop spaces",
        "Coffee bar & relaxation areas"
      ],
      color: "from-green-500/20 to-emerald-600/20", 
      accent: "green"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Expansion",
      description: "Strategic guidance for scaling across Southeast markets with access to our extensive network of partners, investors, and industry leaders.",
      benefits: [
        "Southeast market intelligence",
        "Strategic partnership development",
        "Cross-border expansion support",
        "Regulatory guidance",
        "Distribution channel access"
      ],
      color: "from-purple-500/20 to-pink-600/20",
      accent: "purple"
    }
  ]

  const atlantaAdvantages = [
    {
      title: "Tech Talent Hub",
      description: "Access to top-tier talent from Georgia Tech, Emory, and other leading universities",
      stat: "40K+",
      label: "Tech professionals"
    },
    {
      title: "Cost Efficiency",
      description: "40% lower operational costs compared to Silicon Valley and NYC",
      stat: "40%",
      label: "Cost savings"
    },
    {
      title: "Business Climate", 
      description: "Georgia ranked #1 for business for 11 consecutive years",
      stat: "#1",
      label: "Business ranking"
    },
    {
      title: "Global Connectivity",
      description: "Hartsfield-Jackson: World&apos;s busiest airport with direct flights worldwide",
      stat: "150+",
      label: "Destinations"
    }
  ]

  const portfolioHighlights = [
    {
      company: "Clinix AI",
      sector: "HealthTech",
      description: "AI-powered medical documentation platform",
      funding: "$2.1M Series A",
      valuation: "$18M",
      users: "5K+ physicians"
    },
    {
      company: "ShadowShield AI", 
      sector: "CyberSecurity",
      description: "Enterprise AI security and governance platform",
      funding: "$1.2M Seed",
      valuation: "$5M",
      users: "500+ enterprises"
    },
    {
      company: "Synergies4 AI",
      sector: "EdTech",
      description: "Professional development and learning platform",
      funding: "Pre-Series A",
      valuation: "$3M",
      users: "25K+ learners"
    }
  ]

  const milestones = [
    {
      year: "2024",
      title: "TRON America Launch",
      description: "Established 15,000 sq ft incubator facility in Atlanta&apos;s Technology Square"
    },
    {
      year: "2024",
      title: "First Cohort",
      description: "Launched inaugural accelerator program with 12 selected startups"
    },
    {
      year: "2024", 
      title: "Global Headquarters",
      description: "Designated as TRON Dynamic&apos;s global headquarters and operations center"
    },
    {
      year: "2025",
      title: "Southeast Expansion",
      description: "Planning satellite locations in Charlotte, Nashville, and Miami"
    }
  ]

  const stats = [
    { label: "Facility Size", value: "15K", unit: "sq ft", description: "State-of-the-art space" },
    { label: "Startups Supported", value: "25+", unit: "", description: "And growing" },
    { label: "Capital Deployed", value: "$10M+", unit: "", description: "In portfolio companies" },
    { label: "Jobs Created", value: "150+", unit: "", description: "High-tech positions" }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-red-950/20">
      {/* Background Effects */}
      <Suspense fallback={null}>
        <SimpleHeroEffects variant="america" />
      </Suspense>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 z-10">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <AnimatedElement animation="fade" delay={0.1} className="mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-red-200/80 text-sm font-medium tracking-wide">
              <Building className="w-4 h-4" />
              TRON AMERICA
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-r from-white via-red-200 to-orange-300 bg-clip-text text-transparent mb-8 tracking-tight leading-[0.9]" style={{fontFamily: 'var(--font-orbitron)', fontWeight: 300, letterSpacing: '-0.02em'}}>
              TRON America
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.3} className="mb-6">
            <div className="inline-flex items-center gap-2 text-red-300/80 text-lg font-medium">
              <MapPin className="w-5 h-5" />
              Atlanta, Georgia • Global Headquarters
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.4} className="mb-16">
            <p className="text-lg sm:text-xl md:text-2xl text-red-100/60 font-light tracking-wide max-w-4xl mx-auto leading-relaxed" style={{fontWeight: 300}}>
              Southeast&apos;s Premier VC Tech Incubator & Startup Hub. Empowering the next generation of innovators to build, scale, and impact globally.
            </p>
          </AnimatedElement>

          {/* Hero Stats */}
          <AnimatedElement animation="slide" direction="up" delay={0.6} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center hover:border-red-400/30 transition-colors duration-300">
                <div className="text-2xl md:text-3xl font-light text-white mb-2" style={{fontFamily: 'var(--font-orbitron)'}}>
                  {stat.value}{stat.unit}
                </div>
                <div className="text-red-300 font-medium text-sm mb-1">{stat.label}</div>
                <div className="text-red-100/50 text-xs">{stat.description}</div>
              </div>
            ))}
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.8} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = 'tel:+14049394238'}
              className="group relative overflow-hidden bg-red-500/20 hover:bg-red-500/30 backdrop-blur-xl text-red-300 hover:text-white px-8 py-4 text-base font-medium rounded-xl border border-red-400/30 hover:border-red-400/50 transition-all duration-150 min-w-[220px]"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <span>Join Our Incubator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
              </div>
            </Button>

            <Link href="/capabilities">
              <Button className="group relative overflow-hidden bg-transparent border border-red-400/30 text-red-300/90 hover:text-white hover:border-red-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150 min-w-[220px]">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Zap className="w-4 h-4" />
                  <span>Our Capabilities</span>
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>

      {/* Startup Acceleration Pipeline */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Acceleration <span className="text-orange-300">Pipeline</span>
            </h2>
            <p className="text-lg text-red-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Our proven systematic approach to transforming innovative ideas into market-leading companies.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2}>
            <StartupPipeline />
          </AnimatedElement>
        </div>
      </section>

      {/* Incubator Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Incubator <span className="text-red-300">Programs</span>
            </h2>
            <p className="text-lg text-red-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive support systems designed to accelerate startup growth from idea to market leadership.
            </p>
          </AnimatedElement>

          <div className="space-y-16">
            {incubatorFeatures.map((feature, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className={`relative bg-gradient-to-br ${feature.color} backdrop-blur-xl rounded-2xl border border-white/10 hover:border-red-400/30 overflow-hidden transition-all duration-300 hover:bg-white/[0.04] p-8 group`}>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-6 mb-8">
                        <div className={`w-16 h-16 ${feature.accent === 'blue' ? 'bg-blue-500/20 text-blue-300 group-hover:bg-blue-500/30 border-blue-400/30' : feature.accent === 'green' ? 'bg-green-500/20 text-green-300 group-hover:bg-green-500/30 border-green-400/30' : 'bg-purple-500/20 text-purple-300 group-hover:bg-purple-500/30 border-purple-400/30'} rounded-xl flex items-center justify-center transition-colors duration-300 border`}>
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                            {feature.title}
                          </h3>
                          <p className="text-red-100/70 leading-relaxed font-light text-lg">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Benefits Sidebar */}
                    <div className="space-y-4">
                      <h4 className="text-white font-medium text-lg mb-4">Program Benefits:</h4>
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-3">
                          <CheckCircle className={`w-4 h-4 ${feature.accent === 'blue' ? 'text-blue-400' : feature.accent === 'green' ? 'text-green-400' : 'text-purple-400'} flex-shrink-0 mt-1`} />
                          <span className="text-red-100/80 text-sm leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Atlanta Advantages Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-red-950/10 to-orange-950/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Why <span className="text-red-300">Atlanta</span>?
            </h2>
            <p className="text-lg text-red-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              The Southeast&apos;s emerging tech capital offers unmatched advantages for startup growth and scaling.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {atlantaAdvantages.map((advantage, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-red-400/30 p-8 text-center group transition-all duration-300 h-full">
                  <div className="mb-6">
                    <div className="text-4xl font-light text-red-300 mb-2" style={{fontFamily: 'var(--font-orbitron)'}}>
                      {advantage.stat}
                    </div>
                    <div className="text-red-200/80 text-sm font-medium">{advantage.label}</div>
                  </div>
                  <h3 className="text-xl font-light text-white mb-4 tracking-tight">
                    {advantage.title}
                  </h3>
                  <p className="text-red-100/70 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Incubator Ecosystem Visualization */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-red-950/10 to-orange-950/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Startup <span className="text-red-300">Ecosystem</span>
            </h2>
            <p className="text-lg text-red-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Our dynamic ecosystem connects startups with resources, mentorship, and funding opportunities.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2}>
            <IncubatorEcosystem />
          </AnimatedElement>
        </div>
      </section>

      {/* Portfolio Highlights Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Portfolio <span className="text-red-300">Highlights</span>
            </h2>
            <p className="text-lg text-red-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Success stories from our incubator alumni driving innovation across multiple sectors.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioHighlights.map((company, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-red-400/30 p-8 group transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-xl font-light text-white tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                      {company.company}
                    </h3>
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">
                      {company.sector}
                    </span>
                  </div>
                  
                  <p className="text-red-100/70 text-sm leading-relaxed mb-6">
                    {company.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-red-200/60 text-sm">Funding:</span>
                      <span className="text-red-300 font-medium">{company.funding}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-red-200/60 text-sm">Valuation:</span>
                      <span className="text-red-300 font-medium">{company.valuation}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-red-200/60 text-sm">Users:</span>
                      <span className="text-red-300 font-medium">{company.users}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <Link href={`/ventures/portfolio/${company.company.toLowerCase().replace(' ', '-')}`}>
                      <Button className="w-full group relative overflow-hidden bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-white border border-red-400/30 hover:border-red-400/50 py-2 text-sm rounded-lg transition-all duration-150">
                        <div className="relative z-10 flex items-center justify-center gap-2">
                          <span>View Details</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-100" />
                        </div>
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-red-950/10 to-orange-950/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Our <span className="text-red-300">Journey</span>
            </h2>
            <p className="text-lg text-red-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              From concept to Southeast leader - the TRON America timeline.
            </p>
          </AnimatedElement>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 hover:border-red-400/30 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-20 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-red-300 font-medium text-sm" style={{fontFamily: 'var(--font-orbitron)'}}>{milestone.year}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white mb-1">{milestone.title}</h3>
                      <p className="text-red-100/80 font-light text-sm">{milestone.description}</p>
                    </div>
                  </div>
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
              Ready to <span className="text-red-300">Scale</span>?
            </h2>
            <p className="text-lg text-red-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Join the Southeast&apos;s most dynamic startup ecosystem. From idea to IPO, we&apos;ll be with you every step of the way.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = 'tel:+14049394238'}
              className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150 min-w-[220px]"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <span>Apply to Incubator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
              </div>
            </Button>

            <Link href="/ventures">
              <Button className="group relative overflow-hidden bg-transparent border border-red-400/30 text-red-300/90 hover:text-white hover:border-red-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150 min-w-[220px]">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Globe className="w-4 h-4" />
                  <span>View Portfolio</span>
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
} 