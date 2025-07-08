"use client"

import { Suspense } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { 
  Zap, 
  ArrowRight,
  Phone,
  Palette,
  Shield,
  Code,
  CheckCircle,
  Settings,
  Users,
  TrendingUp,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"

// Dynamic imports with SSR disabled to prevent hydration errors
const SimpleHeroEffects = dynamic(() => import("@/components/simple-hero-effects"), { 
  ssr: false,
  loading: () => null
})
const ServiceIntegrationMatrix = dynamic(() => import("@/components/advanced-graphics").then(mod => ({ default: mod.ServiceIntegrationMatrix })), { 
  ssr: false,
  loading: () => <div className="h-[500px] flex items-center justify-center"><div className="text-white/60">Loading service integration...</div></div>
})
const TechNetworkFloating = dynamic(() => import("@/components/enhanced-graphics").then(mod => ({ default: mod.TechNetworkFloating })), { 
  ssr: false,
  loading: () => <div className="h-96 flex items-center justify-center"><div className="text-white/60">Loading visualization...</div></div>
})

export default function CapabilitiesPage() {
  const capabilities = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web, Mobile & AI Development",
      description: "Cutting-edge technology solutions that bridge traditional development with artificial intelligence, creating scalable platforms that adapt to user needs and market demands.",
      services: [
        "Custom web application development",
        "Cross-platform mobile applications", 
        "AI-powered automation systems",
        "Machine learning integration",
        "Progressive web apps (PWAs)",
        "API development & integration",
        "Cloud infrastructure & DevOps",
        "Real-time data processing"
      ],
      technologies: ["React", "Next.js", "React Native", "Python", "TensorFlow", "Node.js", "AWS", "Docker"],
      color: "from-blue-500/20 to-indigo-600/20",
      accent: "blue"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Marketing",
      description: "Afro-futurist design aesthetics combined with data-driven marketing strategies, creating brand experiences that resonate globally while celebrating African heritage.",
      services: [
        "Brand identity & visual systems",
        "User experience (UX) design",
        "Digital marketing campaigns",
        "Social media strategy & content",
        "Video production & motion graphics",
        "Website & app interface design",
        "Marketing automation systems",
        "Performance analytics & optimization"
      ],
      technologies: ["Figma", "Adobe Creative Suite", "HubSpot", "Google Analytics", "Mailchimp", "Canva", "DaVinci Resolve"],
      color: "from-purple-500/20 to-pink-600/20",
      accent: "purple"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security frameworks and compliance solutions designed to protect African businesses while meeting international standards and regulations.",
      services: [
        "Security audits & assessments",
        "Data protection & privacy compliance",
        "Incident response planning",
        "Employee security training",
        "Cloud security implementation",
        "Regulatory compliance (GDPR, CCPA)",
        "Penetration testing",
        "Security monitoring & threat detection"
      ],
      technologies: ["ISO 27001", "NIST Framework", "Wireshark", "Metasploit", "Splunk", "AWS Security", "Azure Security"],
      color: "from-green-500/20 to-emerald-600/20",
      accent: "green"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and technical requirements through comprehensive workshops and stakeholder interviews.",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Our team creates detailed wireframes, prototypes, and technical architectures that align with your vision and budget constraints.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "Using agile methodologies, we build your solution with regular check-ins, testing, and iterative improvements throughout the process.",
      icon: <Code className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "We ensure a smooth deployment with ongoing monitoring, performance optimization, and continuous improvement based on user feedback.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ]

  const stats = [
    { label: "Projects Delivered", value: "150+", description: "Across all capabilities" },
    { label: "Client Satisfaction", value: "98%", description: "Success rate" },
    { label: "Countries Served", value: "15", description: "Global reach" },
    { label: "Team Experts", value: "25+", description: "Certified professionals" }
  ]

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional", 
    "Certified Ethical Hacker (CEH)",
    "ISO 27001 Lead Auditor",
    "PMP Project Management",
    "Adobe Certified Expert"
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
              <Zap className="w-4 h-4" />
              OUR CAPABILITIES
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-8 tracking-tight leading-[0.9]" style={{fontFamily: 'var(--font-orbitron)', fontWeight: 300, letterSpacing: '-0.02em'}}>
              Our Capabilities
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.4} className="mb-16">
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/60 font-light tracking-wide max-w-4xl mx-auto leading-relaxed" style={{fontWeight: 300}}>
              Comprehensive technology solutions spanning development, design, marketing, and security—empowering African businesses to compete globally.
            </p>
          </AnimatedElement>

          {/* Capability Stats */}
          <AnimatedElement animation="slide" direction="up" delay={0.6} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center hover:border-blue-400/30 transition-colors duration-300">
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

      {/* Service Integration Visualization */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Integrated <span className="text-blue-300">Service Matrix</span>
            </h2>
            <p className="text-lg text-blue-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Our capabilities work in perfect synergy, creating comprehensive solutions that exceed the sum of their parts.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2}>
            <ServiceIntegrationMatrix />
          </AnimatedElement>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Core <span className="text-blue-300">Capabilities</span>
            </h2>
            <p className="text-lg text-blue-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              End-to-end solutions designed for the modern African entrepreneur and global enterprise.
            </p>
          </AnimatedElement>

          <div className="space-y-16">
            {capabilities.map((capability, index) => (
                             <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                 <div className={`relative bg-gradient-to-br ${capability.color} backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-400/30 overflow-hidden transition-all duration-300 hover:bg-white/[0.04] p-8 group`}>
                   <div className="grid lg:grid-cols-3 gap-8">
                     {/* Main Content */}
                     <div className="lg:col-span-2">
                       <div className="flex items-start gap-6 mb-8">
                         <div className={`w-16 h-16 ${capability.accent === 'blue' ? 'bg-blue-500/20 text-blue-300 group-hover:bg-blue-500/30 border-blue-400/30' : capability.accent === 'purple' ? 'bg-purple-500/20 text-purple-300 group-hover:bg-purple-500/30 border-purple-400/30' : 'bg-green-500/20 text-green-300 group-hover:bg-green-500/30 border-green-400/30'} rounded-xl flex items-center justify-center transition-colors duration-300 border`}>
                           {capability.icon}
                         </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                            {capability.title}
                          </h3>
                          <p className="text-blue-100/70 leading-relaxed font-light text-lg">
                            {capability.description}
                          </p>
                        </div>
                      </div>

                                             {/* Services Grid */}
                       <div className="grid md:grid-cols-2 gap-4">
                         {capability.services.map((service, serviceIndex) => (
                           <div key={serviceIndex} className="flex items-start gap-3">
                             <CheckCircle className={`w-4 h-4 ${capability.accent === 'blue' ? 'text-blue-400' : capability.accent === 'purple' ? 'text-purple-400' : 'text-green-400'} flex-shrink-0 mt-1`} />
                             <span className="text-blue-100/80 text-sm leading-relaxed">{service}</span>
                           </div>
                         ))}
                       </div>
                    </div>

                                         {/* Technologies Sidebar */}
                     <div className="space-y-6">
                       <h4 className="text-white font-medium text-lg mb-4">Technologies & Tools:</h4>
                       <div className="flex flex-wrap gap-2">
                         {capability.technologies.map((tech, techIndex) => (
                           <span key={techIndex} className={`px-3 py-2 ${capability.accent === 'blue' ? 'bg-blue-500/20 text-blue-300 border-blue-400/20' : capability.accent === 'purple' ? 'bg-purple-500/20 text-purple-300 border-purple-400/20' : 'bg-green-500/20 text-green-300 border-green-400/20'} rounded-lg text-sm font-medium border`}>
                             {tech}
                           </span>
                         ))}
                       </div>
                       
                       <div className="pt-6">
                         <Link href="/get-started">
                           <Button className={`w-full group relative overflow-hidden ${capability.accent === 'blue' ? 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border-blue-400/30 hover:border-blue-400/50' : capability.accent === 'purple' ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-400/30 hover:border-purple-400/50' : 'bg-green-500/20 hover:bg-green-500/30 text-green-300 border-green-400/30 hover:border-green-400/50'} backdrop-blur-xl hover:text-white px-6 py-3 text-sm font-medium rounded-xl border transition-all duration-150`}>
                             <div className="relative z-10 flex items-center justify-center gap-2">
                               <span>Get Started</span>
                               <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
                             </div>
                           </Button>
                         </Link>
                       </div>
                     </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-blue-950/10 to-purple-950/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Our <span className="text-blue-300">Process</span>
            </h2>
            <p className="text-lg text-blue-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              A proven methodology that ensures project success from conception to deployment.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-400/30 p-8 text-center group transition-all duration-300 h-full">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors duration-300 border border-blue-400/30">
                      {step.icon}
                    </div>
                    <div className="text-4xl font-light text-blue-300 mb-2" style={{fontFamily: 'var(--font-orbitron)'}}>
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-light text-white mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Network Visualization */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-blue-950/10 to-purple-950/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Technology <span className="text-blue-300">Network</span>
            </h2>
            <p className="text-lg text-blue-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Our interconnected technology ecosystem drives innovation across all capability areas.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2}>
            <TechNetworkFloating />
          </AnimatedElement>
        </div>
      </section>

      {/* Certifications & Expertise Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Certified <span className="text-blue-300">Expertise</span>
            </h2>
            <p className="text-lg text-blue-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Our team holds industry-leading certifications and credentials across all our capability areas.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 flex items-center gap-4 hover:border-blue-400/30 transition-colors duration-300">
                  <Award className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <span className="text-blue-100/80 font-medium">{cert}</span>
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
              Ready to <span className="text-blue-300">Transform</span>?
            </h2>
            <p className="text-lg text-blue-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Let&apos;s discuss how our capabilities can accelerate your business growth and digital transformation journey.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = 'tel:+14049394238'}
              className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150 min-w-[220px]"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <span>Discuss Your Needs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
              </div>
            </Button>

            <Link href="/innovation">
              <Button className="group relative overflow-hidden bg-transparent border border-blue-400/30 text-blue-300/90 hover:text-white hover:border-blue-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150 min-w-[220px]">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Zap className="w-4 h-4" />
                  <span>View Innovation Lab</span>
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
} 