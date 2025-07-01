"use client"

import { Suspense, lazy } from "react"
import Link from "next/link"
import { 
  Film, 
  Phone, 
  Download
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