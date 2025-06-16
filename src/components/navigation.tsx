'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'
import { gsap } from 'gsap'
import AnimatedElement from './animated-element'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLNavElement>(null)
  const logoRef = useRef<HTMLHeadingElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { name: 'Studios', href: '/studios' },
    { name: 'Ventures', href: '/ventures' },
    { name: 'Impact', href: '/impact' },
    { name: 'About', href: '/about' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Fast logo animation
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, 
        { opacity: 0, y: -5 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', delay: 0.1 }
      )
    }
  }, [])

  useEffect(() => {
    // Fast mobile menu animation
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.15, ease: 'power2.out' }
        )
      } else {
        gsap.to(mobileMenuRef.current,
          { height: 0, opacity: 0, duration: 0.1, ease: 'power2.in' }
        )
      }
    }
  }, [isOpen])

  const handleCallClick = () => {
    window.location.href = 'tel:+14048233384'
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-slate-900/20 backdrop-blur-2xl border-b border-white/10'
            : 'bg-transparent'
        }`}
        style={{ 
          willChange: 'transform',
          backdropFilter: isScrolled ? 'blur(40px) saturate(150%)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            
            {/* Refined Logo */}
            <AnimatedElement
              animation="none"
              hover="magnetic"
              className="z-50"
            >
              <Link href="/" className="group">
                <h1
                  ref={logoRef}
                  className="text-2xl md:text-3xl font-light text-white group-hover:text-green-300 transition-colors duration-150"
                  style={{ 
                    fontFamily: 'var(--font-orbitron)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                  }}
                >
                  TRON DYNAMICS
                </h1>
              </Link>
            </AnimatedElement>

            {/* Elegant Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <AnimatedElement
                  key={item.name}
                  animation="fade"
                  delay={0.1 + index * 0.05}
                  scrollTrigger={false}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className={`relative py-2 px-3 text-sm font-light transition-all duration-150 ${
                      pathname === item.href
                        ? 'text-green-300'
                        : 'text-white/70 hover:text-white'
                    }`}
                    style={{ fontWeight: 300 }}
                  >
                    {item.name}
                    
                    {/* Subtle underline */}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-px bg-green-300 transition-all duration-150 ${
                        pathname === item.href
                          ? 'opacity-100 scale-x-100'
                          : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                </AnimatedElement>
              ))}

              {/* Refined CTA Button */}
              <AnimatedElement
                animation="fade"
                delay={0.3}
                scrollTrigger={false}
                hover="liquid"
              >
                <Button
                  onClick={handleCallClick}
                  className="relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-5 py-2 text-sm font-light rounded-lg border border-white/20 hover:border-white/30 transition-all duration-150"
                  style={{
                    backdropFilter: 'blur(20px)',
                    fontWeight: 300,
                  }}
                >
                  <div className="relative z-10 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </div>
                </Button>
              </AnimatedElement>
            </div>

            {/* Minimalist Mobile Menu Button */}
            <AnimatedElement
              animation="fade"
              delay={0.2}
              scrollTrigger={false}
              className="md:hidden z-50"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-150 rounded-lg"
              >
                <div className="w-5 h-5 relative">
                  <Menu
                    className={`absolute inset-0 transition-all duration-100 ${
                      isOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
                    }`}
                  />
                  <X
                    className={`absolute inset-0 transition-all duration-100 ${
                      isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
                    }`}
                  />
                </div>
              </Button>
            </AnimatedElement>
          </div>

          {/* Elegant Mobile Navigation */}
          <div
            ref={mobileMenuRef}
            className="md:hidden overflow-hidden"
            style={{ height: 0 }}
          >
            <div className="py-6 space-y-4 bg-slate-900/40 backdrop-blur-2xl rounded-2xl mt-4 border border-white/10"
              style={{ backdropFilter: 'blur(40px) saturate(150%)' }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-3 text-base font-light transition-all duration-150 ${
                    pathname === item.href
                      ? 'text-green-300 bg-green-500/5'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ fontWeight: 300 }}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-6 pt-4 border-t border-white/10">
                <Button
                  onClick={handleCallClick}
                  className="w-full bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white py-3 font-light rounded-lg transition-all duration-150"
                  style={{ fontWeight: 300 }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Subtle Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
} 