"use client"

import Link from "next/link"
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  Users, 
  Film, 
  MapPin, 
  Clock, 
  Globe,
  Play,
  Download,
  Phone,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import MeteorBackground from "@/components/meteor-background"

export default function DiasporaVoicesPage() {
  const projectDetails = {
    title: "DIASPORA VOICES",
    subtitle: "Anthology Series",
    status: "Development",
    year: "2026",
    budget: "$150,000",
    duration: "6 Episodes × 60 minutes",
    location: "Multiple International Locations",
    language: "English, French, Portuguese",
    genre: "Documentary, Anthology",
    rating: "TV-14"
  }

  const synopsis = "An ambitious anthology series exploring the diverse experiences across the African diaspora through intimate personal narratives. Each episode follows different individuals and families as they navigate identity, heritage, and belonging in their adopted countries while maintaining connections to their African roots."

  const keyFeatures = [
    {
      title: "Global Perspective",
      description: "Stories from six different countries showcasing the diversity of the African diaspora experience"
    },
    {
      title: "Cultural Preservation", 
      description: "Exploring how traditions, languages, and customs are maintained across generations"
    },
    {
      title: "Identity & Belonging",
      description: "Deep examination of what it means to be African in different cultural contexts"
    },
    {
      title: "Intergenerational Stories",
      description: "Capturing perspectives from first-generation immigrants to third-generation descendants"
    }
  ]

  const crew = [
    {
      name: "Jonathan Massaquoi",
      role: "Executive Producer",
      description: "Co-founder of TRON DYNAMIC with deep connections to African diaspora communities"
    },
    {
      name: "Dr. Alvin Glay", 
      role: "Creative Consultant",
      description: "Providing insight and authenticity to refugee and immigrant experiences"
    }
  ]

  const episodes = [
    {
      number: 1,
      title: "Roots and Routes",
      location: "London, UK",
      description: "A Nigerian-British family navigating cultural identity across three generations",
      duration: "60 min",
      status: "Development"
    },
    {
      number: 2, 
      title: "Between Two Worlds",
      location: "Paris, France",
      description: "Senegalese artists using their craft to bridge traditional and contemporary cultures",
      duration: "60 min", 
      status: "Development"
    },
    {
      number: 3,
      title: "New Beginnings", 
      location: "Toronto, Canada",
      description: "Ethiopian refugees building community and preserving heritage in their new home",
      duration: "60 min",
      status: "Development"
    },
    {
      number: 4,
      title: "Rhythm of Home",
      location: "São Paulo, Brazil", 
      description: "Angolan musicians connecting with Brazil's African heritage through music",
      duration: "60 min",
      status: "Development"
    },
    {
      number: 5,
      title: "Digital Bridges",
      location: "Berlin, Germany",
      description: "Young tech entrepreneurs using digital platforms to connect diaspora communities",
      duration: "60 min",
      status: "Pre-Development"
    },
    {
      number: 6,
      title: "Coming Full Circle",
      location: "Atlanta, USA",
      description: "African-Americans reconnecting with their ancestral roots through DNA and travel",
      duration: "60 min",
      status: "Pre-Development"
    }
  ]

  const themes = [
    "Cultural Identity",
    "Heritage Preservation", 
    "Intergenerational Dialogue",
    "Global Migration",
    "Community Building",
    "Art & Expression"
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/20">
      <MeteorBackground />
      
      {/* Header with Back Button */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="right" delay={0.1}>
            <Link href="/studios" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Studios</span>
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
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {projectDetails.status}
                  </span>
                  <span className="text-blue-400 font-medium">{projectDetails.year}</span>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight leading-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                  {projectDetails.title}
                </h1>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.3}>
                <p className="text-xl text-blue-300 mb-8 font-medium">{projectDetails.subtitle}</p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.4}>
                <p className="text-lg text-white/80 leading-relaxed mb-8 font-light">
                  {synopsis}
                </p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group relative overflow-hidden bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-xl text-blue-300 hover:text-white px-6 py-3 text-base font-medium rounded-xl border border-blue-400/30 hover:border-blue-400/50 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Play className="w-4 h-4" />
                      <span>Watch Concept</span>
                    </div>
                  </Button>
                  
                  <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Download className="w-4 h-4" />
                      <span>Project Deck</span>
                    </div>
                  </Button>
                </div>
              </AnimatedElement>
            </div>

            <div>
              <AnimatedElement animation="slide" direction="left" delay={0.3}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-400/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Globe className="w-10 h-10 text-blue-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">Global Stories</p>
                    <p className="text-white/70 text-sm">Anthology Development</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Calendar className="w-5 h-5" />, label: "Release", value: projectDetails.year },
              { icon: <DollarSign className="w-5 h-5" />, label: "Budget", value: projectDetails.budget },
              { icon: <Clock className="w-5 h-5" />, label: "Duration", value: projectDetails.duration },
              { icon: <MapPin className="w-5 h-5" />, label: "Locations", value: "6 Countries" }
            ].map((detail, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {detail.icon}
                  </div>
                  <p className="text-white/60 text-sm mb-1">{detail.label}</p>
                  <p className="text-white font-medium">{detail.value}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Key Features */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Key <span className="text-blue-300">Features</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <h3 className="text-lg font-medium text-blue-300 mb-3">{feature.title}</h3>
                  <p className="text-white/80 font-light leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Episode Guide */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Episode <span className="text-blue-300">Guide</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {episodes.map((episode, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-300 font-medium text-sm">
                      {episode.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white">{episode.title}</h3>
                      <p className="text-blue-400 text-sm font-medium">{episode.location}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      episode.status === 'Development' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {episode.status}
                    </span>
                  </div>
                  <p className="text-white/80 font-light leading-relaxed mb-3">{episode.description}</p>
                  <p className="text-white/60 text-sm">{episode.duration}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Themes */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Central <span className="text-blue-300">Themes</span>
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {themes.map((theme, index) => (
                <span key={index} className="px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium">
                  {theme}
                </span>
              ))}
            </div>
          </AnimatedElement>

          {/* Cast & Crew */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Creative <span className="text-blue-300">Team</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {crew.map((person, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{person.name}</h3>
                  <p className="text-blue-400 font-medium mb-3 text-sm">{person.role}</p>
                  <p className="text-white/80 font-light text-sm leading-relaxed">{person.description}</p>
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
              Join Our <span className="text-blue-300">Global Story</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              We're seeking co-producers, distributors, and cultural consultants to help bring these important stories to global audiences.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <span>Discuss Partnership</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Button>

            <Link href="/studios">
              <Button className="group relative overflow-hidden bg-transparent border border-blue-400/30 text-blue-300/90 hover:text-white hover:border-blue-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Studios</span>
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
} 