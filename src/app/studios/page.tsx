"use client"

import { Suspense, lazy } from "react"
import Link from "next/link"
import { 
  Film, 
  Phone, 
  Download,
  Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"

// Lazy load simple effects
const SimpleHeroEffects = lazy(() => import("@/components/simple-hero-effects"))

export default function StudiosPage() {

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
              Amplifying Untold Stories. Inspiring Global Audiences.
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.4} className="mb-16">
            <p className="text-lg sm:text-xl md:text-2xl text-amber-100/60 font-light tracking-wide max-w-3xl mx-auto leading-relaxed" style={{fontWeight: 300}}>
              TRON Studio produces films, documentaries and digital content that challenge narratives and inspire change. We emphasize storytelling and representation across African and diasporic experiences.
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

      {/* Areas of Focus */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Areas of <span className="text-amber-300">Focus</span>
            </h2>
            <p className="text-lg text-amber-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Championing diverse voices through film, digital media and narrative marketing.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedElement animation="slide" direction="up" delay={0.1}>
              <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] group h-full flex flex-col p-8">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors duration-150">
                  <Film className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-tight">Storytelling & Representation</h3>
                <p className="text-amber-100/60 mb-6 leading-relaxed font-light flex-1">
                  Championing diverse voices through film, digital media and narrative marketing that resonates with global audiences.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-amber-400 rounded-full" />
                    <span className="text-white/80 text-sm">Documentary production</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-amber-400 rounded-full" />
                    <span className="text-white/80 text-sm">Digital content creation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-amber-400 rounded-full" />
                    <span className="text-white/80 text-sm">Narrative marketing</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide" direction="up" delay={0.2}>
              <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] group h-full flex flex-col p-8">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors duration-150">
                  <Film className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-tight">Talent Development</h3>
                <p className="text-amber-100/60 mb-6 leading-relaxed font-light flex-1">
                  Mentorship and training for emerging filmmakers and storytellers from the African diaspora.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-amber-400 rounded-full" />
                    <span className="text-white/80 text-sm">Filmmaker mentorship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-amber-400 rounded-full" />
                    <span className="text-white/80 text-sm">Technical training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-amber-400 rounded-full" />
                    <span className="text-white/80 text-sm">Creative development</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide" direction="up" delay={0.3}>
              <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] group h-full flex flex-col p-8">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors duration-150">
                  <Globe className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-tight">Global Distribution & Impact</h3>
                <p className="text-amber-100/60 mb-6 leading-relaxed font-light flex-1">
                  Connecting stories to global audiences to spark dialogue and cultural understanding.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-amber-400 rounded-full" />
                    <span className="text-white/80 text-sm">International distribution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-amber-400 rounded-full" />
                    <span className="text-white/80 text-sm">Cultural dialogue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-amber-400 rounded-full" />
                    <span className="text-white/80 text-sm">Social impact</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-amber-950/10 to-yellow-950/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Featured <span className="text-amber-300">Project</span>
            </h2>
            <p className="text-lg text-amber-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Spotlight on transformative stories that resonate with global audiences.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2}>
            <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium">
                      MEMOIR ADAPTATION
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                    LIBERIAN BOY: TRIUMPH OVER WAR&apos;S SHADOW
                  </h3>
                  <p className="text-amber-100/70 leading-relaxed font-light mb-8 text-lg">
                    A deeply moving memoir by Dr. Alvin Glay, this film adaptation captures his journey from war-torn Liberia to becoming a marketing executive, exploring themes of survival, resilience, and the immigrant experience.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
                      <div>
                        <span className="text-white font-medium">Journey of Resilience:</span>
                        <span className="text-amber-100/80 ml-2">From refugee to successful entrepreneur</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
                      <div>
                        <span className="text-white font-medium">Cultural Bridge:</span>
                        <span className="text-amber-100/80 ml-2">Connecting African and American experiences</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
                      <div>
                        <span className="text-white font-medium">Global Impact:</span>
                        <span className="text-amber-100/80 ml-2">Inspiring dialogue about immigration and identity</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center border border-amber-400/30">
                    <Film className="w-24 h-24 text-amber-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          </AnimatedElement>
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