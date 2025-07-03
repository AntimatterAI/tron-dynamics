"use client"

import { Suspense, lazy } from "react"
import Link from "next/link"
import { 
  Rocket, 
  Smartphone, 
  ArrowRight,
  Phone,
  Palette,
  Database,
  Globe,
  CheckCircle,
  Code,
  Brain,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import { ServiceShowcase, AfricaContinent } from "@/components/africa-graphics"

// Lazy load simple effects
const SimpleHeroEffects = lazy(() => import("@/components/simple-hero-effects"))

export default function InnovationPage() {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development & UI/UX Design",
      description: "Mobile-first platforms, web apps, and progressive digital tools with UX tuned to African consumer behaviors and device usage patterns.",
      features: [
        "Cross-platform mobile applications",
        "Progressive web app development",
        "User experience optimization",
        "Performance-focused architecture",
        "Localization for African markets"
      ],
      color: "from-blue-500/20 to-indigo-600/20"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand & Design Systems",
      description: "Afro-futurist design aesthetics combined with modern branding strategy, creating visual identities that resonate globally while celebrating African heritage.",
      features: [
        "Visual identity & brand strategy", 
        "Afro-futurist design language",
        "Social media design systems",
        "Campaign execution & localization",
        "Cross-border brand reach"
      ],
      color: "from-purple-500/20 to-pink-600/20"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data & Business Management",
      description: "Custom dashboards, KPI tracking, CRM and POS integrations providing actionable insights for scaling and investor readiness.",
      features: [
        "Custom dashboard development",
        "CRM & POS system integration",
        "Business intelligence analytics",
        "Automated reporting systems",
        "Investor-ready metrics tracking"
      ],
      color: "from-green-500/20 to-emerald-600/20"
    }
  ]

  const caseStudies = [
    {
      client: "FinTech Startup - Lagos",
      project: "Mobile Payment Platform",
      challenge: "Needed a secure, scalable mobile payment solution for West African markets with offline capability and local currency support.",
      solution: "Developed a progressive web app with offline-first architecture, multi-currency support, and biometric authentication optimized for low-bandwidth environments.",
      results: [
        "250K+ active users in 6 months",
        "99.9% uptime across 4 countries", 
        "$2M+ in transaction volume",
        "Secured Series A funding"
      ],
      technologies: ["React Native", "Node.js", "Blockchain", "Biometric API"]
    },
    {
      client: "EdTech Platform - Accra",
      project: "Learning Management System",
      challenge: "Required an engaging educational platform that works on low-end devices and intermittent internet connectivity for rural African students.",
      solution: "Built a lightweight LMS with offline content sync, gamified learning paths, and SMS-based progress notifications for areas with limited internet.",
      results: [
        "50K+ students enrolled",
        "85% course completion rate",
        "Available in 8 local languages",
        "Partnered with 200+ schools"
      ],
      technologies: ["Progressive Web App", "Firebase", "SMS API", "Content CDN"]
    },
    {
      client: "Agricultural Cooperative - Kenya",
      project: "Supply Chain Dashboard",
      challenge: "Needed real-time visibility into crop harvesting, pricing, and distribution across multiple farming cooperatives with limited technical infrastructure.",
      solution: "Created a simplified dashboard system with WhatsApp integration for real-time updates, automated pricing alerts, and GPS tracking for deliveries.",
      results: [
        "40% increase in crop pricing",
        "90% reduction in food waste",
        "Connected 500+ farmers",
        "Expanded to 3 countries"
      ],
      technologies: ["WhatsApp Business API", "GPS Tracking", "Data Analytics", "Cloud Infrastructure"]
    }
  ]

  const stats = [
    { label: "Apps Launched", value: "25+", description: "Across African markets" },
    { label: "Active Users", value: "500K+", description: "Combined platforms" },
    { label: "Countries", value: "12", description: "Market presence" },
    { label: "Success Rate", value: "95%", description: "Project completion" }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/20">
      {/* Simple Innovation Effects */}
      <Suspense fallback={null}>
        <SimpleHeroEffects variant="innovation" />
      </Suspense>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 z-10">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <AnimatedElement animation="fade" delay={0.1} className="mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-blue-200/80 text-sm font-medium tracking-wide">
              <Rocket className="w-4 h-4" />
              TRON INNOVATION
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-8 tracking-tight leading-[0.9]" style={{fontFamily: 'var(--font-orbitron)', fontWeight: 300, letterSpacing: '-0.02em'}}>
              Innovation Lab
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.4} className="mb-16">
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/60 font-light tracking-wide max-w-4xl mx-auto leading-relaxed" style={{fontWeight: 300}}>
              Transforming African businesses through cutting-edge technology, Afro-futurist design, and data-driven solutions.
            </p>
          </AnimatedElement>

          {/* Innovation Stats */}
          <AnimatedElement animation="slide" direction="up" delay={0.6} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                <div className="text-2xl md:text-3xl font-light text-white mb-2" style={{fontFamily: 'var(--font-orbitron)'}}>
                  {stat.value}
                </div>
                <div className="text-blue-300 font-medium text-sm mb-1">{stat.label}</div>
                <div className="text-blue-100/50 text-xs">{stat.description}</div>
              </div>
            ))}
          </AnimatedElement>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Core <span className="text-blue-300">Services</span>
            </h2>
            <p className="text-lg text-blue-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive technology solutions designed for the modern African entrepreneur.
            </p>
          </AnimatedElement>

          <div className="grid gap-8">
            {services.map((service, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className={`relative bg-gradient-to-br ${service.color} backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-400/30 overflow-hidden transition-all duration-300 hover:bg-white/[0.04] p-8 group`}>
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-300 group-hover:bg-blue-500/30 transition-colors duration-300">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                            {service.title}
                          </h3>
                          <p className="text-blue-100/70 leading-relaxed font-light mb-6">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-white font-medium mb-4">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                          <span className="text-blue-100/80 text-sm leading-relaxed">{feature}</span>
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

      {/* Innovation Across Africa Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Innovation Across <span className="text-blue-300">Africa</span>
            </h2>
            <p className="text-lg text-blue-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Connecting entrepreneurs from Lagos to Cape Town with cutting-edge technology solutions.
            </p>
          </AnimatedElement>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Service Showcases */}
            <div className="space-y-8">
              <ServiceShowcase 
                title="Tech Innovation"
                color="blue"
                services={[
                  {
                    icon: <Code className="w-5 h-5" />,
                    title: "Full-Stack Development",
                    description: "Building scalable applications for African markets with offline-first architecture"
                  },
                  {
                    icon: <Brain className="w-5 h-5" />,
                    title: "AI Integration", 
                    description: "Implementing intelligent solutions that work in low-resource environments"
                  },
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Performance Optimization",
                    description: "Ensuring fast, reliable experiences across all device types and network conditions"
                  }
                ]}
              />
            </div>

            {/* Africa Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/5 to-purple-600/10 rounded-2xl p-8 border border-blue-400/20">
                <AfricaContinent showConnectionLines={true} animated={true} />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-light text-white mb-2" style={{fontFamily: 'var(--font-orbitron)'}}>
                    Continental Reach
                  </h3>
                  <p className="text-blue-100/60 text-sm">
                    Our innovations power businesses across 12 African countries and beyond
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-blue-950/10 to-purple-950/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Success <span className="text-blue-300">Stories</span>
            </h2>
            <p className="text-lg text-blue-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Real-world impact across African markets and beyond.
            </p>
          </AnimatedElement>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-xl font-light text-white tracking-tight">
                          {study.client}
                        </h3>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                          {study.project}
                        </span>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-medium mb-2">Challenge:</h4>
                          <p className="text-blue-100/70 text-sm leading-relaxed">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-medium mb-2">Solution:</h4>
                          <p className="text-blue-100/70 text-sm leading-relaxed">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-4">Results:</h4>
                      <div className="space-y-3 mb-6">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                            <span className="text-blue-100/80 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div>
                        <h4 className="text-white font-medium mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                              {tech}
                            </span>
                          ))}
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

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement animation="slide" direction="up" className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Ready to <span className="text-blue-300">Innovate</span>?
            </h2>
            <p className="text-lg text-blue-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Let&apos;s build something extraordinary together. From concept to launch, we&apos;ll guide your digital transformation.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = 'tel:+14049394238'}
              className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150 min-w-[220px]"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
              </div>
            </Button>

            <Link href="/portfolio">
              <Button className="group relative overflow-hidden bg-transparent border border-blue-400/30 text-blue-300/90 hover:text-white hover:border-blue-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150 min-w-[220px]">
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