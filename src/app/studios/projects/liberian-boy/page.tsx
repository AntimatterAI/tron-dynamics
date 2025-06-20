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
  Award,
  Play,
  Download,
  Phone,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import MeteorBackground from "@/components/meteor-background"

export default function LiberianBoyPage() {
  const projectDetails = {
    title: "LIBERIAN BOY: TRIUMPH OVER WAR'S SHADOW",
    subtitle: "Documentary Series",
    status: "In Production",
    year: "2025",
    budget: "$75,000",
    duration: "3 Episodes × 45 minutes",
    location: "Atlanta, GA & Monrovia, Liberia",
    language: "English",
    genre: "Documentary, Biography",
    rating: "PG-13"
  }

  const synopsis = "A powerful three-part documentary series chronicling Dr. Alvin Glay's remarkable journey from Liberian refugee to distinguished marketing executive. Through intimate interviews, archival footage, and stunning cinematography, this series explores themes of resilience, identity, and the American Dream while shedding light on the broader refugee experience in America."

  const keyFeatures = [
    {
      title: "Personal Journey",
      description: "An intimate look at Dr. Glay's transformation from war refugee to successful executive"
    },
    {
      title: "Historical Context", 
      description: "Comprehensive coverage of the Liberian civil wars and their global impact"
    },
    {
      title: "Cultural Bridge",
      description: "Exploration of African diaspora experiences and cultural preservation"
    },
    {
      title: "Inspirational Message",
      description: "A story of hope, determination, and the power of education and opportunity"
    }
  ]

  const cast = [
    {
      name: "Dr. Alvin Glay",
      role: "Subject/Executive Producer",
      description: "Co-founder of TRON DYNAMIC and author of the memoir that inspired this series"
    },
    {
      name: "Jonathan Massaquoi", 
      role: "Executive Producer",
      description: "Co-founder of TRON DYNAMIC and former NFL athlete from Liberia"
    }
  ]

  const episodes = [
    {
      number: 1,
      title: "War's Shadow",
      description: "Young Alvin's escape from war-torn Liberia and arrival in America as a refugee",
      duration: "45 min",
      status: "Post-Production"
    },
    {
      number: 2, 
      title: "Finding Ground",
      description: "The challenges of adaptation, education, and building a new identity in America",
      duration: "45 min", 
      status: "In Production"
    },
    {
      number: 3,
      title: "Triumph Rising", 
      description: "Professional success, giving back, and inspiring the next generation",
      duration: "45 min",
      status: "Pre-Production"
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20">
      <MeteorBackground />
      
      {/* Header with Back Button */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="right" delay={0.1}>
            <Link href="/studios" className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors mb-8">
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
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    {projectDetails.status}
                  </span>
                  <span className="text-amber-400 font-medium">{projectDetails.year}</span>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight leading-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                  {projectDetails.title}
                </h1>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.3}>
                <p className="text-xl text-amber-300 mb-8 font-medium">{projectDetails.subtitle}</p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.4}>
                <p className="text-lg text-white/80 leading-relaxed mb-8 font-light">
                  {synopsis}
                </p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group relative overflow-hidden bg-amber-500/20 hover:bg-amber-500/30 backdrop-blur-xl text-amber-300 hover:text-white px-6 py-3 text-base font-medium rounded-xl border border-amber-400/30 hover:border-amber-400/50 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Play className="w-4 h-4" />
                      <span>Watch Trailer</span>
                    </div>
                  </Button>
                  
                  <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Download className="w-4 h-4" />
                      <span>Press Kit</span>
                    </div>
                  </Button>
                </div>
              </AnimatedElement>
            </div>

            <div>
              <AnimatedElement animation="slide" direction="left" delay={0.3}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500/10 to-yellow-600/10 border border-amber-400/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center">
                      <Film className="w-10 h-10 text-amber-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">Behind the Scenes</p>
                    <p className="text-white/70 text-sm">Documentary Production</p>
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
              { icon: <MapPin className="w-5 h-5" />, label: "Location", value: projectDetails.location }
            ].map((detail, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
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
              Key <span className="text-amber-300">Features</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <h3 className="text-lg font-medium text-amber-300 mb-3">{feature.title}</h3>
                  <p className="text-white/80 font-light leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Episode Guide */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Episode <span className="text-amber-300">Guide</span>
            </h2>
            <div className="space-y-4">
              {episodes.map((episode, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-300 font-medium text-sm">
                          {episode.number}
                        </span>
                        <h3 className="text-lg font-medium text-white">{episode.title}</h3>
                        <span className="text-sm text-white/60">{episode.duration}</span>
                      </div>
                      <p className="text-white/80 font-light leading-relaxed ml-12">{episode.description}</p>
                    </div>
                    <div className="md:ml-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        episode.status === 'Post-Production' ? 'bg-blue-500/20 text-blue-400' :
                        episode.status === 'In Production' ? 'bg-green-500/20 text-green-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {episode.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Cast & Crew */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Cast & <span className="text-amber-300">Crew</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cast.map((person, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-amber-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{person.name}</h3>
                  <p className="text-amber-400 font-medium mb-3 text-sm">{person.role}</p>
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
              Interested in <span className="text-amber-300">Partnership</span>?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Connect with us to explore distribution opportunities, co-production partnerships, or investment possibilities.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Button>

            <Link href="/studios">
              <Button className="group relative overflow-hidden bg-transparent border border-amber-400/30 text-amber-300/90 hover:text-white hover:border-amber-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150">
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