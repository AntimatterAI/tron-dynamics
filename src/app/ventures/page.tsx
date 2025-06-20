"use client"

import Link from "next/link"
import { 
  Target, 
  TrendingUp, 
  Building, 
  Zap,
  ArrowRight,
  Globe,
  BarChart3,
  Rocket,
  Phone,
  Briefcase
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import MeteorBackground from "@/components/meteor-background"

export default function VenturesPage() {
  const portfolioCompanies = [
    {
      name: "PayFlow Africa",
      sector: "FinTech",
      stage: "Series A",
      location: "Lagos, Nigeria",
      description: "Digital payment infrastructure for small businesses across West Africa",
      metrics: { users: "500K+", revenue: "$2M ARR", growth: "+150%" },
      logo: "/african-landscape-hero.jpg",
      founded: "2022"
    },
    {
      name: "EduConnect",
      sector: "EdTech", 
      stage: "Seed",
      location: "Accra, Ghana",
      description: "AI-powered learning platform connecting students with quality education",
      metrics: { users: "100K+", revenue: "$500K ARR", growth: "+200%" },
      logo: "/african-landscape-hero.jpg",
      founded: "2023"
    },
    {
      name: "AgriTech Solutions",
      sector: "AgTech",
      stage: "Pre-Seed",
      location: "Nairobi, Kenya",
      description: "Smart farming solutions for sustainable agriculture in East Africa",
      metrics: { users: "50K+", revenue: "$200K ARR", growth: "+300%" },
      logo: "/african-landscape-hero.jpg",
      founded: "2024"
    }
  ]

  const investmentCriteria = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Early Stage Focus",
      description: "We invest in pre-seed to Series A companies with proven traction",
      details: ["MVP developed", "Initial revenue", "Growing user base", "Strong team"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "African Market",
      description: "Companies solving real problems for African consumers and businesses",
      details: ["Local market knowledge", "Scalable solutions", "Cultural relevance", "Regional expansion"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Technology Driven",
      description: "Leveraging technology to create scalable and innovative solutions",
      details: ["Tech-enabled", "Scalable model", "Innovation focus", "Digital-first"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Potential",
      description: "High-growth startups with clear path to profitability and scale",
      details: ["Large market", "Growth metrics", "Unit economics", "Clear strategy"]
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950/20">
      <MeteorBackground />
      
      {/* Hero Section - with proper top spacing for fixed nav */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <AnimatedElement animation="fade" delay={0.1} className="mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-orange-200/80 text-sm font-medium tracking-wide">
              <Briefcase className="w-4 h-4" />
              TRON VENTURES
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-r from-white via-orange-200 to-red-300 bg-clip-text text-transparent mb-8 tracking-tight leading-[0.9] max-w-full" style={{fontFamily: 'var(--font-orbitron)', fontWeight: 300, letterSpacing: '-0.02em'}}>
              Investing in African Innovation
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.4} className="mb-16">
            <p className="text-lg sm:text-xl md:text-2xl text-orange-100/60 font-light tracking-wide max-w-3xl mx-auto leading-relaxed" style={{fontWeight: 300}}>
              Empowering the next generation of African entrepreneurs with capital, mentorship, and strategic partnerships to build world-class companies.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.5} className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
              <div className="group text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="text-3xl lg:text-4xl font-light text-white group-hover:text-orange-300 transition-colors duration-150" style={{fontFamily: 'var(--font-orbitron)'}}>
                    $5K-$100K
                  </div>
                </div>
                <div className="text-orange-100/40 font-normal text-sm tracking-wide uppercase">Investment Range</div>
              </div>

              <div className="group text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="text-3xl lg:text-4xl font-light text-white group-hover:text-orange-300 transition-colors duration-150" style={{fontFamily: 'var(--font-orbitron)'}}>
                    12+
                  </div>
                </div>
                <div className="text-orange-100/40 font-normal text-sm tracking-wide uppercase">Portfolio Companies</div>
              </div>

              <div className="group text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="text-3xl lg:text-4xl font-light text-white group-hover:text-orange-300 transition-colors duration-150" style={{fontFamily: 'var(--font-orbitron)'}}>
                    +185%
                  </div>
                </div>
                <div className="text-orange-100/40 font-normal text-sm tracking-wide uppercase">Average Return</div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150 min-w-[220px]" style={{backdropFilter: 'blur(20px)'}}>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <div className="flex flex-col items-center">
                  <span>Apply for Funding</span>
                  <span className="text-xs opacity-70 font-normal">+1 (404) 939-4238</span>
                </div>
              </div>
            </Button>

            <Link href="#portfolio">
              <Button className="group relative overflow-hidden bg-transparent border border-orange-400/30 text-orange-300/90 hover:text-white hover:border-orange-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150 min-w-[220px]">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <BarChart3 className="w-4 h-4" />
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Investment <span className="text-orange-300">Criteria</span>
            </h2>
            <p className="text-lg text-orange-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              We look for exceptional entrepreneurs building innovative solutions for African markets.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentCriteria.map((criteria, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="relative h-[400px] bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-orange-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] group">
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-colors duration-150">
                        {criteria.icon}
                      </div>
                      <h3 className="text-2xl font-light text-white mb-4 tracking-tight">{criteria.title}</h3>
                      <p className="text-orange-100/60 mb-8 leading-relaxed font-light">{criteria.description}</p>
                    </div>
                    
                    <div className="mt-auto space-y-2">
                      {criteria.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-400 rounded-full" />
                          <span className="text-white/80 text-sm">{detail}</span>
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

      {/* Portfolio Companies */}
      <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Portfolio <span className="text-orange-300">Companies</span>
            </h2>
            <p className="text-lg text-orange-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Meet the innovative companies we&apos;re proud to support as they transform industries.
            </p>
          </AnimatedElement>

          <div className="space-y-8">
            {portfolioCompanies.map((company, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-orange-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] group">
                  <div className="relative z-10 p-8">
                    <div className="grid lg:grid-cols-4 gap-8 items-center">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center">
                          <Building className="w-8 h-8 text-orange-300" />
                        </div>
                        <div>
                          <h3 className="text-xl font-light text-white tracking-tight">{company.name}</h3>
                          <p className="text-orange-400 text-sm font-medium">{company.sector}</p>
                          <p className="text-white/60 text-xs">{company.stage}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-white/80 font-light">{company.description}</p>
                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <span>{company.location}</span>
                          <span>•</span>
                          <span>Founded {company.founded}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-lg font-bold text-white">{company.metrics.users}</p>
                          <p className="text-xs text-white/60">Users</p>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-white">{company.metrics.revenue}</p>
                          <p className="text-xs text-white/60">Revenue</p>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-green-400">{company.metrics.growth}</p>
                          <p className="text-xs text-white/60">Growth</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button className="group relative overflow-hidden bg-transparent hover:bg-white/5 text-white/70 hover:text-white px-4 py-2 text-sm rounded-lg transition-all duration-150">
                          <div className="flex items-center gap-2">
                            <span>View Details</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </Button>
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
              Ready to Scale Your <span className="text-orange-300">Startup</span>?
            </h2>
            <p className="text-lg text-orange-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Join our portfolio of innovative companies transforming African markets with technology and entrepreneurship.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="inline-block">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-12 py-6 text-lg font-medium rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-150">
              <div className="relative z-10 flex items-center justify-center gap-4">
                <Rocket className="w-5 h-5" />
                <div className="flex flex-col items-center">
                  <span>Apply for Funding</span>
                  <span className="text-sm opacity-70 font-normal">+1 (404) 939-4238</span>
                </div>
              </div>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
