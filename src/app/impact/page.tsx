"use client"

import { Suspense, lazy } from "react"
import Link from "next/link"
import { 
  Heart, 
  Users, 
  GraduationCap, 
  HandHeart, 
  Lightbulb,
  ArrowRight,
  Star,
  BookOpen,
  School,
  MapPin,
  Leaf
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"

// Lazy load simple effects
const SimpleHeroEffects = lazy(() => import("@/components/simple-hero-effects"))

export default function ImpactPage() {

  const initiatives = [
    {
      title: "Liberian Education Fund",
      category: "Education",
      location: "Monrovia, Liberia",
      description: "Providing scholarships and educational resources to underserved students in Liberia, focusing on STEM and entrepreneurship programs.",
      impact: {
        students: "500+",
        schools: "15",
        graduation: "95%"
      },
      budget: "$250K",
      status: "Active",
      image: "/african-landscape-hero.jpg",
      year: "2023",
      slug: "liberian-education-fund"
    },
    {
      title: "Tech Skills Africa",
      category: "Digital Literacy",
      location: "Ghana, Nigeria, Senegal",
      description: "Training programs teaching coding, digital marketing, and tech entrepreneurship to young adults across West Africa.",
      impact: {
        students: "1,200+",
        centers: "8",
        employed: "78%"
      },
      budget: "$180K",
      status: "Expanding",
      image: "/african-landscape-hero.jpg",
      year: "2022",
      slug: "tech-skills-africa"
    },
    {
      title: "Women Entrepreneurs Initiative",
      category: "Economic Empowerment",
      location: "West Africa",
      description: "Mentorship and microfinance programs supporting women-led businesses in rural and urban communities.",
      impact: {
        women: "300+",
        businesses: "150",
        income: "+85%"
      },
      budget: "$120K",
      status: "Active",
      image: "/african-landscape-hero.jpg",
      year: "2024",
      slug: "women-entrepreneurs"
    }
  ]

  const focusAreas = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education Access",
      description: "Breaking barriers to quality education in underserved communities",
      metrics: ["2,000+ Students Supported", "30+ Schools Partner", "95% Graduation Rate", "$500K+ Invested"]
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Community Empowerment",
      description: "Building sustainable programs that strengthen local communities",
      metrics: ["50+ Communities", "200+ Leaders Trained", "15+ Projects Launched", "$300K+ Impact"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Support",
      description: "Fostering the next generation of African innovators and entrepreneurs",
      metrics: ["100+ Startups", "500+ Jobs Created", "20+ Patents Filed", "$1M+ Revenue Generated"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership Development",
      description: "Cultivating ethical leaders who drive positive change",
      metrics: ["500+ Leaders", "75+ Organizations", "25+ Countries", "$2M+ Economic Impact"]
    }
  ]

  const impactStats = [
    { label: "Lives Transformed", value: "10K+", change: "+250%" },
    { label: "Communities Served", value: "150+", change: "+180%" },
    { label: "Total Investment", value: "$2.5M", change: "+300%" },
    { label: "Programs Launched", value: "25+", change: "+200%" }
  ]

  const getInvolvedOptions = [
    { 
      title: "Volunteer", 
      description: "Share your skills and time with our programs",
      icon: <Users className="w-8 h-8" />,
      action: "Join Now"
    },
    { 
      title: "Partner", 
      description: "Collaborate with us on impactful initiatives",
      icon: <HandHeart className="w-8 h-8" />,
      action: "Explore Partnership"
    },
    { 
      title: "Donate", 
      description: "Support our mission with financial contributions",
      icon: <Heart className="w-8 h-8" />,
      action: "Make a Donation"
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-950/20">
      {/* Simple Impact Effects */}
      <Suspense fallback={null}>
        <SimpleHeroEffects variant="impact" />
      </Suspense>
      
      {/* Hero Section - with proper top spacing for fixed nav */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 z-10">

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <AnimatedElement animation="fade" delay={0.1} className="mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-green-200/80 text-sm font-medium tracking-wide">
              <Leaf className="w-4 h-4" />
              TRON IMPACT
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent mb-8 tracking-tight leading-[0.9] max-w-full" style={{fontFamily: 'var(--font-orbitron)', fontWeight: 300, letterSpacing: '-0.02em'}}>
              Empowering Communities Through Impact
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.4} className="mb-16">
            <p className="text-lg sm:text-xl md:text-2xl text-green-100/60 font-light tracking-wide max-w-3xl mx-auto leading-relaxed" style={{fontWeight: 300}}>
              Creating lasting change through education, community empowerment, and sustainable development initiatives across African communities.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.5} className="mb-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-4xl mx-auto">
              {impactStats.map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="text-3xl lg:text-4xl font-light text-white group-hover:text-green-300 transition-colors duration-150" style={{fontFamily: 'var(--font-orbitron)'}}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-green-100/40 font-normal text-sm tracking-wide uppercase mb-2">{stat.label}</div>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-400">{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150 min-w-[220px]" style={{backdropFilter: 'blur(20px)'}}>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <HandHeart className="w-4 h-4" />
                <div className="flex flex-col items-center">
                  <span>Get Involved</span>
                  <span className="text-xs opacity-70 font-normal">Make a difference</span>
                </div>
              </div>
            </Button>

            <Link href="#initiatives">
              <Button className="group relative overflow-hidden bg-transparent border border-green-400/30 text-green-300/90 hover:text-white hover:border-green-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150 min-w-[220px]">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <BookOpen className="w-4 h-4" />
                  <span>Impact Report</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Our Focus <span className="text-green-300">Areas</span>
            </h2>
            <p className="text-lg text-green-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Strategic initiatives designed to create sustainable impact across education, community development, and innovation ecosystems.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-green-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] group h-full flex flex-col">
                  <div className="relative z-10 p-8 flex-1 flex flex-col">
                    <div className="flex-1">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors duration-150">
                        {area.icon}
                      </div>
                      <h3 className="text-2xl font-light text-white mb-4 tracking-tight">{area.title}</h3>
                      <p className="text-green-100/60 mb-8 leading-relaxed font-light">{area.description}</p>
                    </div>
                    
                    <div className="mt-auto space-y-3">
                      {area.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-white/80 text-sm leading-relaxed">{metric}</span>
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

      {/* Current Initiatives */}
      <section id="initiatives" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Current <span className="text-green-300">Initiatives</span>
            </h2>
            <p className="text-lg text-green-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Transformative programs creating measurable impact in communities across Africa.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-green-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] group h-full flex flex-col">
                  <div className="relative z-10 p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            initiative.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                            initiative.status === 'Expanding' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {initiative.status}
                          </span>
                        <span className="text-green-400 text-sm font-medium">{initiative.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-light text-white tracking-tight mb-2">{initiative.title}</h3>
                      <p className="text-green-400 font-medium mb-2 text-sm">{initiative.category}</p>
                      
                      <div className="flex items-center gap-1 text-white/60 text-xs mb-4">
                              <MapPin className="w-3 h-3" />
                              {initiative.location}
                            </div>
                      
                      <p className="text-white/80 leading-relaxed font-light text-sm mb-6">{initiative.description}</p>
                        
                      <div className="grid grid-cols-3 gap-3 mb-6">
                          {Object.entries(initiative.impact).map(([key, value], impactIndex) => (
                            <div key={impactIndex} className="text-center">
                            <p className="text-sm font-bold text-green-400 mb-1">{value}</p>
                              <p className="text-xs text-white/60 capitalize">{key}</p>
                            </div>
                          ))}
                      </div>
                        </div>
                        
                    <div className="mt-auto">
                        <div className="flex items-center justify-between">
                          <div>
                          <p className="text-xs text-white/60">Investment</p>
                          <p className="text-sm font-bold text-green-400">{initiative.budget}</p>
                          </div>
                        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-150">
                          <School className="w-4 h-4 text-green-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Get <span className="text-green-300">Involved</span>
            </h2>
            <p className="text-lg text-green-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Join us in creating lasting change. There are many ways to contribute to our mission.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            {getInvolvedOptions.map((option, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="relative min-h-[400px] md:h-auto bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-green-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] text-center p-8 group">
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-colors duration-150">
                      {option.icon}
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4 tracking-tight">{option.title}</h3>
                    <p className="text-green-100/60 leading-relaxed font-light mb-8">{option.description}</p>
                    <Button className="group relative overflow-hidden bg-transparent hover:bg-white/5 text-green-400 hover:text-green-300 px-4 py-2 text-sm rounded-lg transition-all duration-150 mx-auto">
                      <div className="flex items-center gap-2">
                        <span>{option.action}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Button>
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
              Ready to Make an <span className="text-green-300">Impact</span>?
            </h2>
            <p className="text-lg text-green-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Join our community of changemakers and help us create a better future for communities across Africa.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="inline-block">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-12 py-6 text-lg font-medium rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-150">
              <div className="relative z-10 flex items-center justify-center gap-4">
                <Heart className="w-5 h-5" />
                <div className="flex flex-col items-center">
                  <span>Start Your Journey</span>
                  <span className="text-sm opacity-70 font-normal">Make a difference today</span>
                </div>
              </div>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
