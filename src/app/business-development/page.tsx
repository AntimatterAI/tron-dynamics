"use client"

import { Suspense } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { 
  Briefcase, 
  ArrowRight,
  Phone,
  Target,
  CheckCircle,
  DollarSign,
  Network,
  Search
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
// import { ServiceShowcase, AfricaContinent, ImpactVisualization } from "@/components/africa-graphics"


// Dynamic imports with SSR disabled to prevent hydration errors
const SimpleHeroEffects = dynamic(() => import("@/components/simple-hero-effects"), { 
  ssr: false,
  loading: () => null
})
const MarketExpansionViz = dynamic(() => import("@/components/advanced-graphics").then(mod => ({ default: mod.MarketExpansionViz })), { 
  ssr: false,
  loading: () => <div className="h-[500px] flex items-center justify-center"><div className="text-white/60">Loading market expansion...</div></div>
})


export default function BusinessDevelopmentPage() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Business Recruitment & Sourcing",
      description: "We connect visionary entrepreneurs with the right opportunities, partners, and resources to accelerate their growth trajectory in global markets.",
      features: [
        "Executive search & talent acquisition",
        "Strategic partnership sourcing",
        "Market entry consulting",
        "Business opportunity identification",
        "Cross-border expansion planning"
      ],
      color: "from-emerald-500/20 to-green-600/20"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Investor & Capital Connections",
      description: "Bridging the gap between African entrepreneurs and global capital markets through strategic introductions and investment readiness programs.",
      features: [
        "Investor network access",
        "Pitch deck optimization", 
        "Due diligence preparation",
        "Valuation & financial modeling",
        "Investment round structuring"
      ],
      color: "from-orange-500/20 to-amber-600/20"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Strategic Business Development",
      description: "End-to-end business development services that help companies scale efficiently while maintaining cultural authenticity and market relevance.",
      features: [
        "Go-to-market strategy development",
        "Partnership & alliance building",
        "Revenue stream optimization",
        "Operational scaling frameworks",
        "International market expansion"
      ],
      color: "from-purple-500/20 to-violet-600/20"
    }
  ]

  const caseStudies = [
    {
      client: "Healthcare AI Startup",
      project: "Series A Funding & US Expansion",
      challenge: "Atlanta-based HealthTech company needed Series A funding and strategic guidance for rapid US market expansion while maintaining HIPAA compliance.",
      solution: "Connected the founders with our investor network, restructured their go-to-market strategy, and facilitated introductions to key healthcare industry partners.",
      results: [
        "Secured $2.1M Series A funding",
        "Achieved $18M valuation",
        "Expanded to 5 US states",
        "5,000+ physician users onboarded"
      ],
      outcome: "Successfully scaled to become a leading AI documentation platform for healthcare providers"
    },
    {
      client: "Cybersecurity Platform",
      project: "Enterprise Partnership Development",
      challenge: "Emerging cybersecurity platform needed enterprise-grade partnerships and channel development to reach Fortune 500 clients and scale internationally.",
      solution: "Developed strategic partnerships with major cloud providers, created enterprise sales frameworks, and facilitated key channel partner relationships.",
      results: [
        "Secured partnerships with 3 major cloud providers",
        "500+ enterprise clients onboarded",
        "Achieved $5M valuation in 12 months",
        "Expanded to European markets"
      ],
      outcome: "Established as a leading AI governance platform for enterprise environments"
    },
    {
      client: "EdTech Learning Platform",
      project: "Global Market Expansion",
      challenge: "Professional development platform needed strategic guidance for international expansion and corporate partnership development in competitive markets.",
      solution: "Created comprehensive international expansion strategy, developed corporate partnership frameworks, and optimized their learning platform for global markets.",
      results: [
        "Expanded to 15+ countries",
        "25,000+ learners acquired",
        "Partnership with 50+ corporations",
        "Achieved 92% course completion rate"
      ],
      outcome: "Transformed into a globally recognized professional development platform"
    }
  ]

  const approach = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Deep dive into your business model, market position, and growth objectives to identify optimal pathways for expansion."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create customized business development strategies that align with your vision while leveraging our extensive network."
    },
    {
      step: "03",
      title: "Network Activation",
      description: "Deploy our global network of investors, partners, and industry leaders to accelerate your business growth."
    },
    {
      step: "04",
      title: "Execution & Scaling",
      description: "Hands-on support throughout implementation, ensuring sustainable growth and long-term success."
    }
  ]

  const stats = [
    { label: "Capital Raised", value: "$25M+", description: "For portfolio companies" },
    { label: "Partnerships", value: "150+", description: "Strategic connections made" },
    { label: "Success Rate", value: "93%", description: "Funding success rate" },
    { label: "Global Reach", value: "20+", description: "Countries served" }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20">
      {/* Simple Business Effects */}
      <Suspense fallback={null}>
        <SimpleHeroEffects variant="business" />
      </Suspense>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 z-10">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <AnimatedElement animation="fade" delay={0.1} className="mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-emerald-200/80 text-sm font-medium tracking-wide">
              <Briefcase className="w-4 h-4" />
              TRON BUSINESS & DEVELOPMENT
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-r from-white via-emerald-200 to-green-300 bg-clip-text text-transparent mb-8 tracking-tight leading-[0.9]" style={{fontFamily: 'var(--font-orbitron)', fontWeight: 300, letterSpacing: '-0.02em'}}>
              Growth Partners
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.4} className="mb-16">
            <p className="text-lg sm:text-xl md:text-2xl text-emerald-100/60 font-light tracking-wide max-w-4xl mx-auto leading-relaxed" style={{fontWeight: 300}}>
              Connecting visionary entrepreneurs with capital, partnerships, and opportunities to scale globally.
            </p>
          </AnimatedElement>

          {/* Business Stats */}
          <AnimatedElement animation="slide" direction="up" delay={0.6} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                <div className="text-2xl md:text-3xl font-light text-white mb-2" style={{fontFamily: 'var(--font-orbitron)'}}>
                  {stat.value}
                </div>
                <div className="text-emerald-300 font-medium text-sm mb-1">{stat.label}</div>
                <div className="text-emerald-100/50 text-xs">{stat.description}</div>
              </div>
            ))}
          </AnimatedElement>
        </div>
      </section>

      {/* Market Expansion Visualization */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Global Market <span className="text-green-300">Expansion</span>
            </h2>
            <p className="text-lg text-emerald-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Watch as we connect African entrepreneurs with global markets, driving unprecedented growth across continents.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2}>
            <MarketExpansionViz />
          </AnimatedElement>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Core <span className="text-emerald-300">Services</span>
            </h2>
            <p className="text-lg text-emerald-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive business development solutions for the modern entrepreneur.
            </p>
          </AnimatedElement>

          <div className="grid gap-8">
            {services.map((service, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className={`relative bg-gradient-to-br ${service.color} backdrop-blur-xl rounded-2xl border border-white/10 hover:border-emerald-400/30 overflow-hidden transition-all duration-300 hover:bg-white/[0.04] p-8 group`}>
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-300 group-hover:bg-emerald-500/30 transition-colors duration-300">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                            {service.title}
                          </h3>
                          <p className="text-emerald-100/70 leading-relaxed font-light mb-6">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-white font-medium mb-4">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                          <span className="text-emerald-100/80 text-sm leading-relaxed">{feature}</span>
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



      {/* Approach Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-emerald-950/10 to-green-950/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Our <span className="text-emerald-300">Approach</span>
            </h2>
            <p className="text-lg text-emerald-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              A proven methodology that delivers measurable results for ambitious entrepreneurs.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((phase, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-emerald-400/20 transition-all duration-300 p-8 text-center">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-emerald-300 font-bold text-lg" style={{fontFamily: 'var(--font-orbitron)'}}>
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-light text-white mb-4 tracking-tight">
                    {phase.title}
                  </h3>
                  <p className="text-emerald-100/60 leading-relaxed font-light text-sm">
                    {phase.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Success <span className="text-emerald-300">Stories</span>
            </h2>
            <p className="text-lg text-emerald-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Real businesses, real growth, real impact.
            </p>
          </AnimatedElement>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-xl font-light text-white tracking-tight">
                          {study.client}
                        </h3>
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                          {study.project}
                        </span>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-white font-medium mb-2">Challenge:</h4>
                          <p className="text-emerald-100/70 text-sm leading-relaxed">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-medium mb-2">Solution:</h4>
                          <p className="text-emerald-100/70 text-sm leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      <div className="bg-emerald-950/20 rounded-lg p-4">
                        <h4 className="text-emerald-300 font-medium mb-2">Outcome:</h4>
                        <p className="text-emerald-100/80 text-sm leading-relaxed">{study.outcome}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-4">Key Results:</h4>
                      <div className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                            <span className="text-emerald-100/80 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
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
              Ready to <span className="text-emerald-300">Scale</span>?
            </h2>
            <p className="text-lg text-emerald-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Let&apos;s accelerate your business growth. From funding to partnerships, we&apos;ll connect you with the right opportunities.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = 'tel:+14049394238'}
              className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150 min-w-[220px]"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
              </div>
            </Button>

            <Link href="/portfolio">
              <Button className="group relative overflow-hidden bg-transparent border border-emerald-400/30 text-emerald-300/90 hover:text-white hover:border-emerald-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150 min-w-[220px]">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Target className="w-4 h-4" />
                  <span>View Success Stories</span>
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
} 