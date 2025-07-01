"use client"

import { Suspense, lazy } from "react"
import Link from "next/link"
import { ArrowRight, Users, Award, Globe, Target, Heart, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"

// Lazy load simple effects
const SimpleHeroEffects = lazy(() => import("@/components/simple-hero-effects"))

export default function AboutPage() {
  const founders = [
    {
      name: "Dr. Alvin Glay",
      title: "Co-Founder & CEO",
      image: "/dr-alvin-glay-portrait.jpg",
      description: "A visionary entrepreneur, investor, and strategist, Dr. Alvin Glay brings a wealth of experience in technology, business development, and creative industries. With a background in investment strategy and economic growth initiatives, he is committed to empowering African entrepreneurs and amplifying untold stories through film and innovation.",
      credentials: [
        "Doctorate in Business - Georgia State University",
        "MBA - Mercer University", 
        "BBA in Finance - Georgia State University"
      ],
      expertise: "His journey from a Liberian refugee to a distinguished marketing executive is chronicled in his memoir, \"LIBERIAN BOY: TRIUMPH OVER WAR'S SHADOW.\""
    },
    {
      name: "Jonathan Massaquoi",
      title: "Co-Founder & CTO",
      image: "/jonathan-massaquoi-portrait.jpg",
      description: "A former NFL athlete turned entrepreneur, Jonathan Massaquoi has a passion for community development, creative storytelling, and investment in African business ecosystems. His leadership and network in sports, entertainment, and business make him a key driver of TRON DYNAMICS' mission to elevate voices from the African diaspora.",
      credentials: [
        "Selected by Atlanta Falcons in 5th round of 2012 NFL Draft",
        "Troy University Football - 128 tackles, 19.5 sacks over two seasons",
        "Played for Atlanta Falcons, Tennessee Titans, and Kansas City Chiefs"
      ],
      expertise: "Born in Monrovia, Liberia, Massaquoi moved to the United States as an infant. He played college football at Troy University and spent three seasons as an NFL linebacker, accumulating 70 tackles and 6 sacks."
    }
  ]



  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/20">
      {/* Simple About Effects */}
      <Suspense fallback={null}>
        <SimpleHeroEffects variant="about" />
      </Suspense>
      
      {/* Hero Section - with proper top spacing for fixed nav */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 z-10">

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <AnimatedElement animation="fade" delay={0.1} className="mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-blue-200/80 text-sm font-medium tracking-wide">
              <Info className="w-4 h-4" />
              OUR STORY
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-8 tracking-tight leading-[0.9] max-w-full" style={{fontFamily: 'var(--font-orbitron)', fontWeight: 300, letterSpacing: '-0.02em'}}>
              Our Story
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.4} className="mb-16">
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100/60 font-light tracking-wide max-w-4xl mx-auto leading-relaxed" style={{fontWeight: 300}}>
              From refugee to entrepreneur, from athlete to investor - the journey that shaped TRON DYNAMIC and our mission to amplify nomadic voices.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.6} className="inline-block">
            <Link href="#founders">
              <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150 min-w-[220px]" style={{backdropFilter: 'blur(20px)'}}>
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Users className="w-4 h-4" />
                  <span>Meet Our Founders</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Meet Our <span className="text-blue-300">Founders</span>
            </h2>
            <p className="text-lg text-blue-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Two visionaries united by their commitment to empowering the African diaspora and driving transformational change.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-16">
            {founders.map((founder, index) => (
              <AnimatedElement key={index} animation="slide" direction={index === 0 ? "left" : "right"} delay={index * 0.2}>
                <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] group h-full flex flex-col">
                  <div className="relative z-10 p-8 flex-1 flex flex-col">
                    <div className="flex flex-col items-center text-center mb-8">
                      <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center border border-blue-400/30 group-hover:border-blue-400/50 transition-colors duration-150">
                        <Users className="w-24 h-24 text-blue-300" />
                      </div>
                      <h3 className="text-3xl font-light text-white mb-2 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                        {founder.name}
                      </h3>
                      <p className="text-blue-400 font-medium text-lg">{founder.title}</p>
                    </div>
                    
                    <div className="space-y-6 text-white/80 flex-1">
                      <p className="leading-relaxed font-light">{founder.description}</p>
                      
                      <div className="space-y-3">
                        {founder.credentials.map((credential, credIndex) => (
                          <div key={credIndex} className="flex items-start gap-3">
                            <Award className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                            <span className="text-sm leading-relaxed">{credential}</span>
                          </div>
                        ))}
                      </div>
                      
                      <p className="leading-relaxed font-light">{founder.expertise}</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedElement animation="slide" direction="left">
              <div className="relative bg-gradient-to-br from-blue-500/5 to-blue-600/10 backdrop-blur-xl rounded-2xl border border-blue-400/20 hover:border-blue-400/40 overflow-hidden transition-all duration-150 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-blue-600/15 group h-full">
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors duration-150 border border-blue-400/30">
                      <Target className="w-8 h-8 text-blue-300" />
                  </div>
                  <h3 className="text-3xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                    Our Mission
                  </h3>
                  </div>
                  <p className="text-blue-100/70 leading-relaxed font-light text-lg flex-1">
                    To amplify nomadic voices and drive transformational change by investing in creative storytelling, groundbreaking innovations, and economic empowerment. Through film, technology, and education, we aim to eradicate global challenges and foster sustainable growth.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide" direction="right" delay={0.2}>
              <div className="relative bg-gradient-to-br from-purple-500/5 to-purple-600/10 backdrop-blur-xl rounded-2xl border border-purple-400/20 hover:border-purple-400/40 overflow-hidden transition-all duration-150 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-purple-600/15 group h-full">
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors duration-150 border border-purple-400/30">
                      <Globe className="w-8 h-8 text-purple-300" />
                  </div>
                  <h3 className="text-3xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                    Our Vision
                  </h3>
                  </div>
                  <p className="text-purple-100/70 leading-relaxed font-light text-lg flex-1">
                    To drive transformational change by amplifying nomadic voices and fostering groundbreaking solutions that eradicate global challenges. Through storytelling, innovation, technology, and education, we aim to empower and reshape underserved communities and industries.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement animation="slide" direction="up" className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Join Our <span className="text-blue-300">Journey</span>
            </h2>
            <p className="text-lg text-blue-100/50 max-w-2xl mx-auto font-light leading-relaxed">
                             Be part of the transformation. Whether you&apos;re a storyteller, entrepreneur, or changemaker, there&apos;s a place for you in the TRON DYNAMIC ecosystem.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150 min-w-[220px]" style={{backdropFilter: 'blur(20px)'}}>
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Heart className="w-4 h-4" />
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-100" />
                </div>
              </Button>
            </Link>

            <Link href="/">
              <Button className="group relative overflow-hidden bg-transparent border border-blue-400/30 text-blue-300/90 hover:text-white hover:border-blue-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150 min-w-[220px]">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <span>Back to Home</span>
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}

