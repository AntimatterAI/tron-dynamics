"use client"

import Link from "next/link"
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  MapPin, 
  BookOpen,
  GraduationCap,
  School,
  Phone,
  ArrowRight,
  Heart,
  Star,
  Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import MeteorBackground from "@/components/meteor-background"

export default function LiberianEducationFundPage() {
  const initiativeDetails = {
    title: "Liberian Education Fund",
    category: "Education",
    status: "Active",
    launched: "2023",
    location: "Monrovia, Liberia",
    investment: "$250,000",
    duration: "3 years"
  }

  const overview = "The Liberian Education Fund is our flagship education initiative providing scholarships, educational resources, and STEM programs to underserved students in Liberia. Through partnerships with local schools and communities, we&apos;re breaking down barriers to quality education and empowering the next generation of Liberian leaders."

  const impactMetrics = [
    { label: "Students Supported", value: "500+", description: "Scholarships and educational support" },
    { label: "Partner Schools", value: "15", description: "Across Monrovia and rural areas" },
    { label: "Graduation Rate", value: "95%", description: "Of supported students" },
    { label: "STEM Focus", value: "65%", description: "Students in STEM programs" }
  ]

  const programs = [
    {
      name: "Scholarship Program",
      description: "Full and partial scholarships covering tuition, books, and supplies",
      beneficiaries: "300+ students",
      impact: "100% retention rate"
    },
    {
      name: "STEM Labs",
      description: "Technology and science laboratories in partner schools",
      beneficiaries: "8 schools",
      impact: "40% increase in STEM enrollment"
    },
    {
      name: "Teacher Training",
      description: "Professional development for local educators",
      beneficiaries: "75+ teachers",
      impact: "Improved student outcomes"
    }
  ]

  const successStories = [
    {
      student: "Grace Konneh",
      achievement: "University of Liberia Engineering Program",
      story: "First in her family to attend university, now studying civil engineering"
    },
    {
      student: "Marcus Toe",
      achievement: "National Science Fair Winner",
      story: "Developed water purification system for rural communities"
    },
    {
      student: "Sarah Johnson",
      achievement: "Medical School Acceptance",
      story: "Pursuing dream of becoming a doctor to serve her community"
    }
  ]

  const partnerships = [
    { name: "University of Liberia", type: "Academic Partnership" },
    { name: "Ministry of Education", type: "Government Collaboration" },
    { name: "Local Community Organizations", type: "Community Outreach" },
    { name: "International NGOs", type: "Resource Sharing" }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-green-950/20">
      <MeteorBackground />
      
      {/* Header with Back Button */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="right" delay={0.1}>
            <Link href="/impact" className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 transition-colors mb-8">
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
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    {initiativeDetails.status}
                  </span>
                  <span className="text-green-400 font-medium">{initiativeDetails.category}</span>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight leading-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                  {initiativeDetails.title}
                </h1>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.3}>
                <p className="text-xl text-green-300 mb-8 font-medium">Empowering Through Education</p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.4}>
                <p className="text-lg text-white/80 leading-relaxed mb-8 font-light">
                  {overview}
                </p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group relative overflow-hidden bg-green-500/20 hover:bg-green-500/30 backdrop-blur-xl text-green-300 hover:text-white px-6 py-3 text-base font-medium rounded-xl border border-green-400/30 hover:border-green-400/50 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Heart className="w-4 h-4" />
                      <span>Donate Now</span>
                    </div>
                  </Button>
                  
                  <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Phone className="w-4 h-4" />
                      <span>Get Involved</span>
                    </div>
                  </Button>
                </div>
              </AnimatedElement>
            </div>

            <div>
              <AnimatedElement animation="slide" direction="left" delay={0.3}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-400/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-10 h-10 text-green-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">Education Access</p>
                    <p className="text-white/70 text-sm">Liberian Students</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Initiative Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Calendar className="w-5 h-5" />, label: "Launched", value: initiativeDetails.launched },
              { icon: <MapPin className="w-5 h-5" />, label: "Location", value: initiativeDetails.location },
              { icon: <DollarSign className="w-5 h-5" />, label: "Investment", value: initiativeDetails.investment },
              { icon: <Target className="w-5 h-5" />, label: "Duration", value: initiativeDetails.duration }
            ].map((detail, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
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
              Impact <span className="text-green-300">Metrics</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">{metric.value}</h3>
                  <p className="text-white font-medium mb-2 text-sm">{metric.label}</p>
                  <p className="text-white/60 font-light text-xs">{metric.description}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Programs */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Our <span className="text-green-300">Programs</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-green-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">{program.name}</h3>
                  <p className="text-white/80 font-light text-sm leading-relaxed mb-3">{program.description}</p>
                  <div className="space-y-1">
                    <p className="text-green-400 font-medium text-sm">{program.beneficiaries}</p>
                    <p className="text-white/60 font-light text-xs">{program.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Success Stories */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Success <span className="text-green-300">Stories</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-green-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{story.student}</h3>
                  <p className="text-green-400 font-medium mb-3 text-sm">{story.achievement}</p>
                  <p className="text-white/80 font-light text-sm leading-relaxed">{story.story}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Partnerships */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Key <span className="text-green-300">Partnerships</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {partnerships.map((partner, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <School className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{partner.name}</h3>
                    <p className="text-green-400 font-medium text-sm">{partner.type}</p>
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
              Support <span className="text-green-300">Education</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Join us in transforming lives through education. Your support helps us provide opportunities to more students in Liberia.
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
              <Button className="group relative overflow-hidden bg-transparent border border-green-400/30 text-green-300/90 hover:text-white hover:border-green-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150">
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