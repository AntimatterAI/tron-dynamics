"use client"

import Link from "next/link"
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Code,
  Laptop,
  Phone,
  ArrowRight,
  Heart,
  Target,
  Monitor
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import MeteorBackground from "@/components/meteor-background"

export default function TechSkillsAfricaPage() {
  const initiativeDetails = {
    title: "Tech Skills Africa",
    category: "Digital Literacy",
    status: "Expanding",
    launched: "2022",
    location: "Ghana, Nigeria, Senegal",
    investment: "$180,000",
    duration: "Ongoing"
  }

  const overview = "Tech Skills Africa is bridging the digital divide by providing comprehensive technology training programs across West Africa. We teach coding, digital marketing, and tech entrepreneurship to young adults, empowering them with the skills needed to thrive in the digital economy and create sustainable careers in technology."

  const impactMetrics = [
    { label: "Students Trained", value: "1,200+", description: "Across 3 countries" },
    { label: "Training Centers", value: "8", description: "In major cities" },
    { label: "Employment Rate", value: "78%", description: "Within 6 months of graduation" },
    { label: "Startups Launched", value: "45+", description: "By program graduates" }
  ]

  const programs = [
    {
      name: "Web Development Bootcamp",
      description: "12-week intensive program covering HTML, CSS, JavaScript, and React",
      graduates: "400+ students",
      success: "85% employment rate"
    },
    {
      name: "Digital Marketing Academy",
      description: "8-week course on social media marketing, SEO, and digital advertising",
      graduates: "350+ students", 
      success: "70% career advancement"
    },
    {
      name: "Tech Entrepreneurship Program",
      description: "6-month program teaching startup development and business skills",
      graduates: "150+ students",
      success: "30% launched startups"
    }
  ]

  const locations = [
    { city: "Accra, Ghana", center: "3 locations", students: "450+" },
    { city: "Lagos, Nigeria", center: "4 locations", students: "600+" },
    { city: "Dakar, Senegal", center: "1 location", students: "150+" }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/20">
      <MeteorBackground />
      
      {/* Header with Back Button */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="right" delay={0.1}>
            <Link href="/impact" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Impact</span>
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
                    {initiativeDetails.status}
                  </span>
                  <span className="text-blue-400 font-medium">{initiativeDetails.category}</span>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight leading-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                  {initiativeDetails.title}
                </h1>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.3}>
                <p className="text-xl text-blue-300 mb-8 font-medium">Building Africa&apos;s Tech Workforce</p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.4}>
                <p className="text-lg text-white/80 leading-relaxed mb-8 font-light">
                  {overview}
                </p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group relative overflow-hidden bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-xl text-blue-300 hover:text-white px-6 py-3 text-base font-medium rounded-xl border border-blue-400/30 hover:border-blue-400/50 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Heart className="w-4 h-4" />
                      <span>Support Program</span>
                    </div>
                  </Button>
                  
                  <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Phone className="w-4 h-4" />
                      <span>Apply Now</span>
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
                      <Code className="w-10 h-10 text-blue-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">Tech Training</p>
                    <p className="text-white/70 text-sm">Digital Skills Development</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Details & Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Calendar className="w-5 h-5" />, label: "Launched", value: initiativeDetails.launched },
              { icon: <MapPin className="w-5 h-5" />, label: "Countries", value: "3" },
              { icon: <DollarSign className="w-5 h-5" />, label: "Investment", value: initiativeDetails.investment },
              { icon: <Target className="w-5 h-5" />, label: "Status", value: initiativeDetails.status }
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

          {/* Impact Metrics */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Impact <span className="text-blue-300">Metrics</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{metric.value}</h3>
                  <p className="text-white font-medium mb-2 text-sm">{metric.label}</p>
                  <p className="text-white/60 font-light text-xs">{metric.description}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Programs */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Training <span className="text-blue-300">Programs</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Laptop className="w-6 h-6 text-blue-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">{program.name}</h3>
                  <p className="text-white/80 font-light text-sm leading-relaxed mb-3">{program.description}</p>
                  <div className="space-y-1">
                    <p className="text-blue-400 font-medium text-sm">{program.graduates}</p>
                    <p className="text-white/60 font-light text-xs">{program.success}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Locations */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Our <span className="text-blue-300">Locations</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-6 h-6 text-blue-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{location.city}</h3>
                  <div className="space-y-1">
                    <p className="text-blue-400 font-medium text-sm">{location.center}</p>
                    <p className="text-white/60 font-light text-xs">{location.students} trained</p>
                  </div>
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
              Join the <span className="text-blue-300">Tech Revolution</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Support our mission to build Africa&apos;s next generation of tech talent. Every contribution helps someone learn a life-changing skill.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Heart className="w-4 h-4" />
                <span>Support Initiative</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Button>

            <Link href="/impact">
              <Button className="group relative overflow-hidden bg-transparent border border-blue-400/30 text-blue-300/90 hover:text-white hover:border-blue-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Impact</span>
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
} 