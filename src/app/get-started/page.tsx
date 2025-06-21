"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Rocket, 
  Film, 
  Target, 
  Heart, 
  Send, 
  ArrowRight,
  User,
  Mail,
  Building,
  MessageSquare,
  Calendar,
  CheckCircle,
  Phone,
  MapPin
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import MeteorBackground from "@/components/meteor-background"

export default function GetStartedPage() {
  const [selectedPath, setSelectedPath] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: "",
    budget: "",
    timeline: ""
  })

  const pathways = [
    {
      id: "studios",
      title: "Film Production",
      subtitle: "TRON STUDIOS",
      description: "Collaborate on authentic storytelling projects that amplify African narratives",
      icon: <Film className="w-8 h-8" />,
      benefits: ["Documentary Development", "Feature Film Production", "Post-Production Services", "Distribution Support"],
      timeline: "2-6 months",
      investment: "$25K - $500K"
    },
    {
      id: "ventures",
      title: "Angel Investment",
      subtitle: "TRON VENTURES",
      description: "Secure funding and mentorship for your African-focused startup",
      icon: <Target className="w-8 h-8" />,
      benefits: ["$5K-$100K Investment", "Strategic Mentorship", "Network Access", "Business Development"],
      timeline: "6-8 weeks",
      investment: "$5K - $100K"
    },
    {
      id: "impact",
      title: "Social Impact",
      subtitle: "TRON IMPACT",
      description: "Partner with us on philanthropic initiatives that empower communities",
      icon: <Heart className="w-8 h-8" />,
      benefits: ["Program Partnership", "Volunteer Opportunities", "Corporate Sponsorship", "Impact Measurement"],
      timeline: "1-3 months",
      investment: "Varies"
    }
  ]

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      content: "hello@trondynamics.com",
      action: "Send Email",
      href: "mailto:hello@trondynamics.com"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      content: "+1 (404) 939-4238",
      action: "Schedule Call",
              href: "tel:+14049394238"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      content: "Atlanta, GA & Monrovia, LR",
      action: "Get Directions",
      href: "#"
    }
  ]

  const faqs = [
    {
      question: "How long does the application process take?",
      answer: "Our team reviews all applications within 48 hours. The full process from application to decision typically takes 1-2 weeks, depending on the complexity of your project."
    },
    {
              question: "What makes TRON DYNAMIC different?",
      answer: "We focus specifically on African narratives and diaspora stories, combining entertainment, investment, and impact initiatives under one unified vision of amplifying African voices globally."
    },
    {
      question: "Do you work with international projects?",
      answer: "Absolutely! While we focus on African stories and markets, we welcome collaborators from around the world who share our vision of authentic, impactful storytelling and innovation."
    },
    {
      question: "What&apos;s the minimum investment or project size?",
      answer: "We work with projects of all sizes. For TRON Ventures, our range is $5K-$100K. For TRON Studios, budgets start at $25K. TRON Impact partnerships vary based on scope and impact potential."
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/20">
      <MeteorBackground />
      
      {/* Hero Section - with proper top spacing for fixed nav */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <AnimatedElement animation="fade" delay={0.1} className="mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-violet-200/80 text-sm font-medium tracking-wide">
              <Rocket className="w-4 h-4" />
              GET STARTED
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.2} className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent mb-8 tracking-tight leading-[0.9] max-w-full" style={{fontFamily: 'var(--font-orbitron)', fontWeight: 300, letterSpacing: '-0.02em'}}>
              Ready to Transform Your Vision?
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.4} className="mb-16">
            <p className="text-lg sm:text-xl md:text-2xl text-violet-100/60 font-light tracking-wide max-w-3xl mx-auto leading-relaxed" style={{fontWeight: 300}}>
              Whether you&apos;re a filmmaker, entrepreneur, or changemaker, TRON DYNAMIC is here to amplify your impact and accelerate your success.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide" direction="up" delay={0.6} className="inline-block">
            <Link href="#pathways">
              <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150 min-w-[220px]" style={{backdropFilter: 'blur(20px)'}}>
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <ArrowRight className="w-4 h-4" />
                  <span>Choose Your Path</span>
                </div>
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>

      {/* Pathway Selection */}
      <section id="pathways" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Choose Your <span className="text-violet-300">Path</span>
            </h2>
            <p className="text-lg text-violet-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Select the division that aligns with your goals and let&apos;s start your journey together.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pathways.map((pathway, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div 
                  className={`relative h-[500px] bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-violet-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] cursor-pointer group ${
                    selectedPath === pathway.id 
                      ? 'ring-2 ring-violet-500 bg-violet-500/5' 
                      : ''
                  }`}
                  onClick={() => setSelectedPath(pathway.id)}
                >
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="text-center space-y-6">
                      <div className="w-16 h-16 bg-violet-500/20 rounded-xl flex items-center justify-center mx-auto group-hover:bg-violet-500/30 transition-colors duration-150">
                        {pathway.icon}
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-violet-300 mb-1">{pathway.subtitle}</p>
                        <h3 className="text-2xl font-light text-white mb-3 tracking-tight">{pathway.title}</h3>
                        <p className="text-violet-100/60 text-sm mb-6 font-light">{pathway.description}</p>
                      </div>
                      
                      <div className="space-y-3">
                        {pathway.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                            <span className="text-white/80 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-white/10">
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <p className="text-white/60">Timeline</p>
                          <p className="text-white font-medium">{pathway.timeline}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/60">Investment</p>
                          <p className="text-white font-medium">{pathway.investment}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          {selectedPath && (
            <AnimatedElement animation="slide" direction="up" className="max-w-2xl mx-auto">
              <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden p-8">
                <div className="relative z-10 text-center">
                  <div className="mb-8">
                    <h3 className="text-2xl font-light text-white mb-2 tracking-tight">
                      Great choice! Let&apos;s get started with{" "}
                      <span className="text-violet-300">
                        {pathways.find(p => p.id === selectedPath)?.subtitle}
                      </span>
                    </h3>
                    <p className="text-violet-100/60 font-light">
                      Ready to begin your journey? Give us a call and we'll get started right away.
                    </p>
                  </div>

                  <Button 
                    className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-lg font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150"
                    style={{backdropFilter: 'blur(20px)'}}
                    onClick={() => window.location.href = 'tel:+14049394238'}
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Phone className="w-5 h-5" />
                      <div className="flex flex-col items-center">
                        <span>Call Us Now</span>
                        <span className="text-sm opacity-70 font-normal">+1 (404) 939-4238</span>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </AnimatedElement>
          )}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Get in <span className="text-violet-300">Touch</span>
            </h2>
            <p className="text-lg text-violet-100/50 max-w-2xl mx-auto font-light leading-relaxed">
              Prefer to reach out directly? We&apos;re here to help in whatever way works best for you.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((contact, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="relative h-[300px] bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-violet-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] text-center p-8 group">
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-violet-500/30 transition-colors duration-150">
                      {contact.icon}
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4 tracking-tight">{contact.title}</h3>
                    <p className="text-violet-100/60 leading-relaxed font-light mb-8">{contact.content}</p>
                    <Button className="group relative overflow-hidden bg-transparent hover:bg-white/5 text-violet-400 hover:text-violet-300 px-4 py-2 text-sm rounded-lg transition-all duration-150 mx-auto">
                      <a href={contact.href} className="flex items-center gap-2">
                        <span>{contact.action}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="slide" direction="up" className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
              Frequently Asked <span className="text-violet-300">Questions</span>
            </h2>
          </AnimatedElement>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedElement key={index} animation="slide" direction="up" delay={index * 0.1}>
                <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-violet-400/20 overflow-hidden transition-all duration-150 hover:bg-white/[0.04] p-6">
                  <div className="relative z-10">
                    <h4 className="text-lg font-light text-white mb-3 tracking-tight">{faq.question}</h4>
                    <p className="text-violet-100/60 font-light leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
