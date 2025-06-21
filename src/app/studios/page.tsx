"use client"

import { Suspense, lazy } from "react"
import Link from "next/link"
import { 
  Film, 
  Phone, 
  Download,
  Camera,
  Zap,
  Users,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"

// Lazy load simple effects
const SimpleHeroEffects = lazy(() => import("@/components/simple-hero-effects"))

export default function StudiosPage() {

  const projects = [
    {
      title: "LIBERIAN BOY: TRIUMPH OVER WAR&apos;S SHADOW",
      type: "Documentary Series",
      status: "In Production",
      year: "2025",
      description: "A powerful documentary series chronicling Dr. Alvin Glay&apos;s journey from Liberian refugee to distinguished executive.",
      budget: "$75K",
      image: "/dr-alvin-glay-portrait.jpg",
      tags: ["Refugee Story", "Triumph", "Resilience", "American Dream"],
      slug: "liberian-boy"
    },
    {
      title: "DIASPORA VOICES",
      type: "Anthology Series", 
      status: "Development",
      year: "2026",
      description: "An anthology exploring diverse experiences across the African diaspora through intimate personal narratives.",
      budget: "$150K",
      image: "/african-landscape-hero.jpg",
      tags: ["Anthology", "Cultural Identity", "Heritage", "Global"],
      slug: "diaspora-voices"
    },
    {
      title: "RISING TIDES",
      type: "Feature Film",
      status: "Pre-Production",
      year: "2027",
      description: "A dramatic feature film about young entrepreneurs building tech startups across West Africa.",
      budget: "$500K",
      image: "/jonathan-massaquoi-portrait.jpg",
      tags: ["Entrepreneurship", "Technology", "West Africa", "Innovation"],
      slug: "rising-tides"
    }
  ]

  const capabilities = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Production",
      description: "Full-service film production from concept to distribution",
      features: ["4K/8K Filming", "Drone Cinematography", "Color Grading", "Sound Design"]
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Post-Production", 
      description: "State-of-the-art editing and visual effects capabilities",
      features: ["Advanced Editing", "VFX & CGI", "Motion Graphics", "Audio Mixing"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Distribution",
      description: "Strategic partnerships with major streaming platforms",
      features: ["Netflix", "Amazon Prime", "YouTube", "Festival Circuit"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Talent Development",
      description: "Mentoring emerging filmmakers and storytellers",
      features: ["Workshops", "Mentorship", "Equipment Access", "Networking"]
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20">
      {/* Simple Studio Effects */}
      <Suspense fallback={null}>
        <SimpleHeroEffects variant="studios" />
      </Suspense>
      
      {/* Hero Section - with proper top spacing for fixed nav */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 z-10">

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <AnimatedElement animation="fade" delay={0.1} className="mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-amber-200/80 text-sm font-medium tracking-wide">
              <Film className="w-4 h-4" />
              TRON STUDIOS
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-r from-white via-amber-200 to-yellow-300 bg-clip-text text-transparent mb-8 tracking-tight leading-[0.9] max-w-full" style={{fontFamily: 'var(--font-orbitron)', fontWeight: 300, letterSpacing: '-0.02em'}}>
              Amplifying African Narratives
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.4} className="mb-16">
            <p className="text-lg sm:text-xl md:text-2xl text-amber-100/60 font-light tracking-wide max-w-3xl mx-auto leading-relaxed" style={{fontWeight: 300}}>
              Creating authentic stories that showcase the resilience, creativity, and diverse experiences of the African diaspora through powerful cinematic storytelling.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150 min-w-[220px]" style={{backdropFilter: 'blur(20px)'}}>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <div className="flex flex-col items-center">
                  <span>Give us a call</span>
                  <span className="text-xs opacity-70 font-normal">+1 (404) 939-4238</span>
                </div>
              </div>
            </Button>

            <Link href="/get-started">
              <Button className="group relative overflow-hidden bg-transparent border border-amber-400/30 text-amber-300/90 hover:text-white hover:border-amber-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150 min-w-[220px]">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Download className="w-4 h-4" />
                  <span>Press Kit</span>
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Current <span className="text-amber-300">Projects</span>
            </h2>
            <p className="text-lg text-amber-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              From documentaries to feature films, we&apos;re developing groundbreaking content that celebrates African stories and global perspectives.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] group h-full flex flex-col">
                  <div className="relative z-10 p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'In Production' ? 'bg-green-500/20 text-green-400' :
                          project.status === 'Development' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {project.status}
                        </span>
                        <span className="text-amber-400 text-sm font-medium">{project.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-light text-white tracking-tight mb-2">{project.title}</h3>
                      <p className="text-amber-400 font-medium mb-4 text-sm">{project.type}</p>
                      <p className="text-white/80 leading-relaxed font-light text-sm mb-6">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/70">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-white/60">Budget</p>
                          <p className="text-sm font-bold text-amber-400">{project.budget}</p>
                        </div>
                        <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center group-hover:bg-amber-500/30 transition-colors duration-150">
                          <Film className="w-4 h-4 text-amber-300" />
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

      {/* Capabilities */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Production <span className="text-amber-300">Capabilities</span>
            </h2>
            <p className="text-lg text-amber-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              State-of-the-art equipment and world-class talent to bring your stories to life.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="relative h-[400px] bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] group">
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors duration-150">
                        {capability.icon}
                      </div>
                      <h3 className="text-2xl font-light text-white mb-4 tracking-tight">{capability.title}</h3>
                      <p className="text-amber-100/60 mb-8 leading-relaxed font-light">{capability.description}</p>
                    </div>
                    
                    <div className="mt-auto space-y-3">
                      {capability.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
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

      {/* Awards & Recognition */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Awards & <span className="text-amber-300">Recognition</span>
            </h2>
            <p className="text-lg text-amber-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Our commitment to authentic storytelling has earned recognition from industry leaders.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Sundance Selection", year: "2025", category: "Documentary Short" },
              { title: "NAACP Image Award", year: "2024", category: "Outstanding Documentary" },
              { title: "African Film Festival", year: "2024", category: "Best Narrative Feature" }
            ].map((award, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="relative h-[400px] bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] text-center p-8 group">
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500/30 transition-colors duration-150">
                      <Award className="w-6 h-6 text-amber-300" />
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4 tracking-tight">{award.title}</h3>
                    <p className="text-amber-400 font-medium mb-2">{award.year}</p>
                    <p className="text-amber-100/60 leading-relaxed font-light">{award.category}</p>
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
              Ready to Tell Your <span className="text-amber-300">Story</span>?
            </h2>
            <p className="text-lg text-amber-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Partner with TRON Studios to create authentic, powerful narratives that resonate with global audiences and drive meaningful change.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="inline-block">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-12 py-6 text-lg font-medium rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-150">
              <div className="relative z-10 flex items-center justify-center gap-4">
                <Phone className="w-5 h-5" />
                <div className="flex flex-col items-center">
                  <span>Start Your Project</span>
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