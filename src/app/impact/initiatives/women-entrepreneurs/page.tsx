"use client"

import Link from "next/link"
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Users,
  TrendingUp,
  Phone,
  ArrowRight,
  Heart,
  Star,
  Target,
  Briefcase
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"
import MeteorBackground from "@/components/meteor-background"

export default function WomenEntrepreneursPage() {
  const initiativeDetails = {
    title: "Women Entrepreneurs Initiative",
    category: "Economic Empowerment",
    status: "Active",
    launched: "2024",
    location: "West Africa",
    investment: "$120,000",
    duration: "2 years"
  }

  const overview = "The Women Entrepreneurs Initiative empowers women across West Africa to build and scale successful businesses through comprehensive mentorship, microfinance programs, and business development support. We&apos;re breaking down barriers and creating opportunities for women to achieve economic independence and drive community development."

  const impactMetrics = [
    { label: "Women Supported", value: "300+", description: "Entrepreneurs mentored" },
    { label: "Businesses Launched", value: "150+", description: "New enterprises created" },
    { label: "Income Increase", value: "+85%", description: "Average participant improvement" },
    { label: "Jobs Created", value: "500+", description: "Employment opportunities generated" }
  ]

  const programs = [
    {
      name: "Business Mentorship Program",
      description: "One-on-one mentoring with successful female entrepreneurs and business leaders",
      participants: "200+ women",
      success: "90% business plan completion"
    },
    {
      name: "Microfinance & Lending",
      description: "Small loans and financial support for business startup and expansion",
      participants: "120+ recipients",
      success: "95% repayment rate"
    },
    {
      name: "Skills Development Workshop",
      description: "Training in business management, marketing, and financial literacy",
      participants: "300+ participants",
      success: "80% skill certification"
    }
  ]

  const successStories = [
    {
      entrepreneur: "Fatou Diallo",
      business: "Organic Food Processing",
      achievement: "Increased revenue from $500 to $5,000/month",
      impact: "Created 12 jobs in rural Senegal"
    },
    {
      entrepreneur: "Adwoa Asante",
      business: "Fashion & Textiles",
      achievement: "Expanded to 3 locations across Ghana",
      impact: "Employs 25 women in her community"
    },
    {
      entrepreneur: "Blessing Okoro",
      business: "Tech Services",
      achievement: "Digital marketing agency serving 50+ clients",
      impact: "First female tech entrepreneur in her region"
    }
  ]

  const supportServices = [
    { service: "Business Plan Development", beneficiaries: "250+ women" },
    { service: "Market Access Support", beneficiaries: "180+ businesses" },
    { service: "Digital Marketing Training", beneficiaries: "200+ participants" },
    { service: "Financial Management", beneficiaries: "300+ attendees" }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/20">
      <MeteorBackground />
      
      {/* Header with Back Button */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement animation="slide" direction="right" delay={0.1}>
            <Link href="/impact" className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors mb-8">
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
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                    {initiativeDetails.status}
                  </span>
                  <span className="text-purple-400 font-medium">{initiativeDetails.category}</span>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight leading-tight" style={{fontFamily: 'var(--font-orbitron)'}}>
                  {initiativeDetails.title}
                </h1>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.3}>
                <p className="text-xl text-purple-300 mb-8 font-medium">Empowering Women, Building Communities</p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.4}>
                <p className="text-lg text-white/80 leading-relaxed mb-8 font-light">
                  {overview}
                </p>
              </AnimatedElement>

              <AnimatedElement animation="slide" direction="up" delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group relative overflow-hidden bg-purple-500/20 hover:bg-purple-500/30 backdrop-blur-xl text-purple-300 hover:text-white px-6 py-3 text-base font-medium rounded-xl border border-purple-400/30 hover:border-purple-400/50 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Heart className="w-4 h-4" />
                      <span>Support Women</span>
                    </div>
                  </Button>
                  
                  <Button className="group relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3 text-base font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-150">
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <Phone className="w-4 h-4" />
                      <span>Apply for Program</span>
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
                      <Briefcase className="w-10 h-10 text-purple-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">Women Entrepreneurship</p>
                    <p className="text-white/70 text-sm">Economic Empowerment</p>
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
              { icon: <MapPin className="w-5 h-5" />, label: "Region", value: initiativeDetails.location },
              { icon: <DollarSign className="w-5 h-5" />, label: "Investment", value: initiativeDetails.investment },
              { icon: <Target className="w-5 h-5" />, label: "Duration", value: initiativeDetails.duration }
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

          {/* Impact Metrics */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Impact <span className="text-purple-300">Metrics</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">{metric.value}</h3>
                  <p className="text-white font-medium mb-2 text-sm">{metric.label}</p>
                  <p className="text-white/60 font-light text-xs">{metric.description}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Programs */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Our <span className="text-purple-300">Programs</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">{program.name}</h3>
                  <p className="text-white/80 font-light text-sm leading-relaxed mb-3">{program.description}</p>
                  <div className="space-y-1">
                    <p className="text-purple-400 font-medium text-sm">{program.participants}</p>
                    <p className="text-white/60 font-light text-xs">{program.success}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Success Stories */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Success <span className="text-purple-300">Stories</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{story.entrepreneur}</h3>
                  <p className="text-purple-400 font-medium mb-2 text-sm">{story.business}</p>
                  <p className="text-white/80 font-light text-sm leading-relaxed mb-2">{story.achievement}</p>
                  <p className="text-white/60 font-light text-xs">{story.impact}</p>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Support Services */}
          <AnimatedElement animation="slide" direction="up" className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-tight text-center" style={{fontFamily: 'var(--font-orbitron)'}}>
              Support <span className="text-purple-300">Services</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {supportServices.map((service, index) => (
                <div key={index} className="bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{service.service}</h3>
                    <p className="text-purple-400 font-medium text-sm">{service.beneficiaries}</p>
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
              Empower <span className="text-purple-300">Women</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Support women entrepreneurs in building successful businesses that strengthen communities and drive economic growth across Africa.
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
              <Button className="group relative overflow-hidden bg-transparent border border-purple-400/30 text-purple-300/90 hover:text-white hover:border-purple-400/50 px-8 py-4 text-base font-medium rounded-xl transition-all duration-150">
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