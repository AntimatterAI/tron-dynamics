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
  Zap,
  Play,
  Download,
  Phone,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import MeteorBackground from "@/components/meteor-background"

export default function RisingTidesPage() {
  const projectDetails = {
    title: "RISING TIDES",
    subtitle: "Feature Film",
    status: "Pre-Production",
    year: "2027",
    budget: "$500,000",
    duration: "120 minutes",
    location: "Lagos, Nigeria & Accra, Ghana",
    language: "English, Yoruba, Twi",
    genre: "Drama, Business",
    rating: "PG-13"
  }

  const synopsis = "A compelling drama following three young entrepreneurs as they navigate the challenges of building tech startups in West Africa. Against the backdrop of rapidly evolving cities and traditional societies, they must overcome funding obstacles, cultural barriers, and personal conflicts while pursuing their dreams of technological innovation that could transform their communities."

  const keyFeatures = [
    {
      title: "Authentic Setting",
      description: "Filmed on location in Lagos and Accra, showcasing the vibrant startup ecosystems of West Africa"
    },
    {
      title: "Tech Innovation", 
      description: "Exploring cutting-edge solutions in fintech, healthtech, and agritech sectors"
    },
    {
      title: "Cultural Dynamics",
      description: "Balancing traditional values with modern entrepreneurial ambitions"
    },
    {
      title: "Economic Empowerment",
      description: "Highlighting how technology can drive economic growth and social impact"
    }
  ]

  const mainCast = [
    {
      name: "Adunni Adeleke",
      role: "Kemi - Fintech Founder",
      description: "A determined young woman revolutionizing mobile banking for underserved communities",
      character: "Lead protagonist fighting gender barriers in the tech industry"
    },
    {
      name: "Kwame Asante", 
      role: "Kofi - Agritech Innovator",
      description: "A brilliant engineer developing drone technology for smallholder farmers",
      character: "Bridging the gap between traditional agriculture and modern technology"
    },
    {
      name: "Emeka Okafor",
      role: "Chidi - Healthtech Entrepreneur",
      description: "A passionate doctor creating telemedicine solutions for rural areas",
      character: "Balancing social impact with business sustainability"
    }
  ]

  const crew = [
    {
      name: "Jonathan Massaquoi",
      role: "Executive Producer",
      description: "Co-founder of TRON DYNAMIC bringing authentic African storytelling expertise"
    },
    {
      name: "Dr. Alvin Glay", 
      role: "Co-Executive Producer",
      description: "Providing business authenticity and entrepreneurial insights"
    },
    {
      name: "Ama Asante",
      role: "Director (Attached)",
      description: "Award-winning director known for powerful African narratives"
    },
    {
      name: "Chiwetel Ejiofor",
      role: "Executive Producer (Attached)",
      description: "Acclaimed actor and filmmaker supporting authentic African cinema"
    }
  ]

  const themes = [
    "Entrepreneurship",
    "Innovation", 
    "Gender Equality",
    "Economic Development",
    "Technology Access",
    "Cultural Change",
    "Social Impact",
    "Youth Empowerment"
  ]

  const productionNotes = [
    {
      phase: "Pre-Production",
      status: "Active",
      description: "Script development, casting, and location scouting in progress",
      timeline: "Q1 2026"
    },
    {
      phase: "Principal Photography",
      status: "Planned",
      description: "8-week shoot across Lagos and Accra with international crew",
      timeline: "Q3 2026"
    },
    {
      phase: "Post-Production",
      status: "Planned", 
      description: "Editing, color correction, and sound design in Atlanta facilities",
      timeline: "Q1 2027"
    },
    {
      phase: "Distribution",
      status: "In Discussion",
      description: "Targeting major streaming platforms and international film festivals",
      timeline: "Q3 2027"
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/20">
      <MeteorBackground />
      
      {/* Header with Back Button */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="right" delay={0.1}>
            <Link href="/studios" className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors mb-8">
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
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
                    {projectDetails.status}
                  </span>
                  <span className="text-purple-400 font-medium">{projectDetails.year}</span>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight leading-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                  {projectDetails.title}
                </h1>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.3}>
                <p className="text-xl text-purple-300 mb-8 font-medium">{projectDetails.subtitle}</p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.4}>
                <p className="text-lg text-white/80 leading-relaxed mb-8 font-light">
                  {synopsis}
                </p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group relative overflow-hidden bg-purple-500/20 hover:bg-purple-500/30 backdrop-blur-xl text-purple-300 hover:text-white px-6 py-3 text-base font-medium rounded-xl border border-purple-400/30 hover:border-purple-400/50 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Play className="w-4 h-4" />
                      <span>Watch Pitch</span>
                    </div>
                  </Button>
                  
                  <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Download className="w-4 h-4" />
                      <span>Investment Deck</span>
                    </div>
                  </Button>
                </div>
              </AnimatedElement>
            </div>

            <div>
              <AnimatedElement animation="slide" direction="left" delay={0.3}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-400/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Zap className="w-10 h-10 text-purple-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">Tech Innovation</p>
                    <p className="text-white/70 text-sm">Feature Film Development</p>
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
              { icon: <Clock className="w-5 h-5" />, label: "Runtime", value: projectDetails.duration },
              { icon: <MapPin className="w-5 h-5" />, label: "Locations", value: "Nigeria & Ghana" }
            ].map((detail, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
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
              Key <span className="text-purple-300">Features</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <h3 className="text-lg font-medium text-purple-300 mb-3">{feature.title}</h3>
                  <p className="text-white/80 font-light leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Main Cast */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Main <span className="text-purple-300">Cast</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {mainCast.map((actor, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{actor.name}</h3>
                  <p className="text-purple-400 font-medium mb-3 text-sm">{actor.role}</p>
                  <p className="text-white/80 font-light text-sm leading-relaxed mb-3">{actor.description}</p>
                  <p className="text-white/60 font-light text-xs leading-relaxed">{actor.character}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Themes */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Core <span className="text-purple-300">Themes</span>
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {themes.map((theme, index) => (
                <span key={index} className="px-4 py-2 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-300 text-sm font-medium">
                  {theme}
                </span>
              ))}
            </div>
          </AnimatedElement>

          {/* Production Timeline */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Production <span className="text-purple-300">Timeline</span>
            </h2>
            <div className="space-y-4">
              {productionNotes.map((phase, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-lg font-medium text-white">{phase.phase}</h3>
                        <span className="text-purple-400 text-sm font-medium">{phase.timeline}</span>
                      </div>
                      <p className="text-white/80 font-light leading-relaxed">{phase.description}</p>
                    </div>
                    <div className="md:ml-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        phase.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                        phase.status === 'Planned' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Creative Team */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Creative <span className="text-purple-300">Team</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {crew.map((person, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Film className="w-8 h-8 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{person.name}</h3>
                  <p className="text-purple-400 font-medium mb-3 text-sm">{person.role}</p>
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
              Join the <span className="text-purple-300">Innovation</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              We're seeking co-producers, distributors, and investors to help bring this groundbreaking story of African innovation to global audiences.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <span>Investment Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Button>

            <Link href="/studios">
              <Button className="group relative overflow-hidden bg-transparent border border-purple-400/30 text-purple-300/90 hover:text-white hover:border-purple-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150">
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