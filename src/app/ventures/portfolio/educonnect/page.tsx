"use client"

import Link from "next/link"
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  Users, 
  MapPin, 
  TrendingUp,
  BookOpen,
  Brain,
  Phone,
  ArrowRight,
  Globe,
  GraduationCap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import MeteorBackground from "@/components/meteor-background"

export default function EduConnectPage() {
  const companyDetails = {
    name: "EduConnect",
    tagline: "AI-Powered Learning for Africa",
    sector: "EdTech",
    stage: "Seed",
    location: "Accra, Ghana",
    founded: "2023",
    employees: "28+",
    valuation: "$6M",
    totalRaised: "$1.8M"
  }

  const overview = "EduConnect is revolutionizing education across Africa by leveraging AI to create personalized learning experiences for students of all ages. Our platform connects learners with quality educational content, expert tutors, and adaptive assessments, making world-class education accessible to underserved communities throughout the continent."

  const keyMetrics = [
    { label: "Active Students", value: "100K+", growth: "+200%" },
    { label: "Annual Revenue", value: "$500K", growth: "+180%" },
    { label: "Course Completions", value: "85%", growth: "+25%" },
    { label: "Partner Schools", value: "250+", growth: "+150%" }
  ]

  const products = [
    {
      name: "EduConnect Learn",
      description: "AI-powered adaptive learning platform with personalized curricula",
      users: "75K+"
    },
    {
      name: "EduConnect Teach",
      description: "Tools for educators to create and deliver engaging content",
      users: "5K+"
    },
    {
      name: "EduConnect Assess",
      description: "Intelligent assessment and progress tracking system",
      users: "20K+"
    }
  ]

  const teamHighlights = [
    {
      name: "Akosua Frimpong",
      role: "CEO & Co-Founder",
      background: "Former World Bank education specialist, Harvard EdM",
      experience: "12+ years in education policy"
    },
    {
      name: "Kofi Mensah",
      role: "CTO & Co-Founder", 
      background: "Ex-Microsoft AI researcher, PhD in Computer Science",
      experience: "10+ years in AI/ML development"
    },
    {
      name: "Amina Kassim",
      role: "Head of Content",
      background: "Former Cambridge University curriculum designer",
      experience: "8+ years in educational content"
    }
  ]

  const impactMetrics = [
    { label: "Students Served", value: "100K+", description: "Across 15 African countries" },
    { label: "Learning Outcomes", value: "+40%", description: "Improvement in test scores" },
    { label: "Teacher Training", value: "2,500+", description: "Educators certified on platform" },
    { label: "Rural Reach", value: "60%", description: "Of users from rural areas" }
  ]

  const milestones = [
    {
      date: "Q1 2023",
      title: "Company Founded",
      description: "Launched with basic AI tutoring system"
    },
    {
      date: "Q3 2023", 
      title: "Seed Funding",
      description: "Raised $800K seed round led by TRON Ventures"
    },
    {
      date: "Q1 2024",
      title: "50K Students",
      description: "Reached first 50,000 active students milestone"
    },
    {
      date: "Q3 2024",
      title: "Series A Prep",
      description: "Completed $1M bridge round for expansion"
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/20">
      <MeteorBackground />
      
      {/* Header with Back Button */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="right" delay={0.1}>
            <Link href="/ventures" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Ventures</span>
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
                    {companyDetails.stage}
                  </span>
                  <span className="text-blue-400 font-medium">{companyDetails.sector}</span>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight leading-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                  {companyDetails.name}
                </h1>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.3}>
                <p className="text-xl text-blue-300 mb-8 font-medium">{companyDetails.tagline}</p>
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
                      <Globe className="w-4 h-4" />
                      <span>Visit Platform</span>
                    </div>
                  </Button>
                  
                  <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Phone className="w-4 h-4" />
                      <span>Contact Team</span>
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
                      <Brain className="w-10 h-10 text-blue-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">AI Learning</p>
                    <p className="text-white/70 text-sm">EdTech Innovation</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details & Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Calendar className="w-5 h-5" />, label: "Founded", value: companyDetails.founded },
              { icon: <MapPin className="w-5 h-5" />, label: "Location", value: companyDetails.location },
              { icon: <Users className="w-5 h-5" />, label: "Team Size", value: companyDetails.employees },
              { icon: <DollarSign className="w-5 h-5" />, label: "Valuation", value: companyDetails.valuation }
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

          {/* Key Metrics */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Key <span className="text-blue-300">Metrics</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{metric.value}</h3>
                  <p className="text-blue-300 font-medium mb-2 text-sm">{metric.label}</p>
                  <div className="flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-400">{metric.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Educational Impact */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Educational <span className="text-blue-300">Impact</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((impact, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{impact.value}</h3>
                  <p className="text-white font-medium mb-2 text-sm">{impact.label}</p>
                  <p className="text-white/60 font-light text-xs">{impact.description}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Products */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Product <span className="text-blue-300">Suite</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-blue-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">{product.name}</h3>
                  <p className="text-white/80 font-light text-sm leading-relaxed mb-3">{product.description}</p>
                  <p className="text-blue-400 font-medium text-sm">{product.users} users</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Team */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Leadership <span className="text-blue-300">Team</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {teamHighlights.map((member, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-blue-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3 text-sm">{member.role}</p>
                  <p className="text-white/80 font-light text-sm leading-relaxed mb-2">{member.background}</p>
                  <p className="text-white/60 font-light text-xs">{member.experience}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Milestones */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Key <span className="text-blue-300">Milestones</span>
            </h2>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-20 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-300 font-medium text-sm">{milestone.date}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white mb-1">{milestone.title}</h3>
                      <p className="text-white/80 font-light text-sm">{milestone.description}</p>
                    </div>
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
              Interested in <span className="text-blue-300">Partnership</span>?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Connect with EduConnect to explore educational partnerships, content licensing, or investment opportunities.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-4 h-4" />
                <span>Contact Company</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Button>

            <Link href="/ventures">
              <Button className="group relative overflow-hidden bg-transparent border border-blue-400/30 text-blue-300/90 hover:text-white hover:border-blue-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150">
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Portfolio</span>
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
} 