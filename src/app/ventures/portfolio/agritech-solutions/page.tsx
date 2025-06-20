"use client"

import Link from "next/link"
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  Users, 
  MapPin, 
  TrendingUp,
  Leaf,
  Phone,
  ArrowRight,
  Globe,
  Tractor
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import MeteorBackground from "@/components/meteor-background"

export default function AgriTechSolutionsPage() {
  const companyDetails = {
    name: "AgriTech Solutions",
    tagline: "Smart Farming for Sustainable Growth",
    sector: "AgTech",
    stage: "Pre-Seed",
    location: "Nairobi, Kenya",
    founded: "2024",
    employees: "18+",
    valuation: "$3M",
    totalRaised: "$750K"
  }

  const overview = "AgriTech Solutions is transforming agriculture across East Africa through innovative drone technology, IoT sensors, and AI-powered analytics. Our platform helps smallholder farmers increase crop yields, reduce costs, and implement sustainable farming practices, bridging the gap between traditional agriculture and modern technology."

  const keyMetrics = [
    { label: "Farmers Served", value: "50K+", growth: "+300%" },
    { label: "Annual Revenue", value: "$200K", growth: "+250%" },
    { label: "Crop Yield Increase", value: "+35%", growth: "+15%" },
    { label: "Hectares Monitored", value: "100K+", growth: "+200%" }
  ]

  const solutions = [
    {
      name: "AgriDrone Pro",
      description: "Precision agriculture drones for crop monitoring and spraying",
      impact: "25% cost reduction"
    },
    {
      name: "SmartField IoT",
      description: "Soil sensors and weather stations for real-time field data",
      impact: "30% water savings"
    },
    {
      name: "CropAnalytics AI",
      description: "Machine learning platform for crop health and yield prediction",
      impact: "40% yield improvement"
    }
  ]

  const impactMetrics = [
    { label: "Food Security", value: "+40%", description: "Increase in food production" },
    { label: "Income Growth", value: "+55%", description: "Average farmer income increase" },
    { label: "Sustainability", value: "-30%", description: "Reduction in chemical usage" },
    { label: "Efficiency", value: "+45%", description: "Improvement in resource utilization" }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-950/20">
      <MeteorBackground />
      
      {/* Header with Back Button */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="right" delay={0.1}>
            <Link href="/ventures" className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 transition-colors mb-8">
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
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    {companyDetails.stage}
                  </span>
                  <span className="text-green-400 font-medium">{companyDetails.sector}</span>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight leading-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                  {companyDetails.name}
                </h1>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.3}>
                <p className="text-xl text-green-300 mb-8 font-medium">{companyDetails.tagline}</p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.4}>
                <p className="text-lg text-white/80 leading-relaxed mb-8 font-light">
                  {overview}
                </p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group relative overflow-hidden bg-green-500/20 hover:bg-green-500/30 backdrop-blur-xl text-green-300 hover:text-white px-6 py-3 text-base font-medium rounded-xl border border-green-400/30 hover:border-green-400/50 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Globe className="w-4 h-4" />
                      <span>Visit Platform</span>
                    </div>
                  </Button>
                  
                  <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Phone className="w-4 h-4" />
                      <span>Contact Team</span>
                    </div>
                  </Button>
                </div>
              </AnimatedElement>
            </div>

            <div>
              <AnimatedElement animation="slide" direction="left" delay={0.3}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-400/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Tractor className="w-10 h-10 text-green-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">Smart Agriculture</p>
                    <p className="text-white/70 text-sm">AgTech Innovation</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Details and Metrics */}
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
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
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
              Key <span className="text-green-300">Metrics</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{metric.value}</h3>
                  <p className="text-green-300 font-medium mb-2 text-sm">{metric.label}</p>
                  <div className="flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-400">{metric.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Solutions */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Our <span className="text-green-300">Solutions</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-6 h-6 text-green-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">{solution.name}</h3>
                  <p className="text-white/80 font-light text-sm leading-relaxed mb-3">{solution.description}</p>
                  <p className="text-green-400 font-medium text-sm">{solution.impact}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Agricultural Impact */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Agricultural <span className="text-green-300">Impact</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((impact, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">{impact.value}</h3>
                  <p className="text-white font-medium mb-2 text-sm">{impact.label}</p>
                  <p className="text-white/60 font-light text-xs">{impact.description}</p>
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
              Interested in <span className="text-green-300">Partnership</span>?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Connect with AgriTech Solutions to explore agricultural partnerships, technology licensing, or investment opportunities.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <span>Contact Company</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Button>

            <Link href="/ventures">
              <Button className="group relative overflow-hidden bg-transparent border border-green-400/30 text-green-300/90 hover:text-white hover:border-green-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150">
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