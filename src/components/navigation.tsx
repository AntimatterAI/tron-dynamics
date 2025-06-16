'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

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

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCallClick = () => {
    window.location.href = 'tel:+14048233384'
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
        style={{ 
          willChange: 'transform',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Responsive Logo */}
            <Link href="/" className="group z-50">
              <h1
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white group-hover:text-green-300 transition-colors duration-150"
                style={{ 
                  fontFamily: 'var(--font-orbitron)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                }}
              >
                TRON DYNAMICS
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-2 px-3 text-sm font-light transition-all duration-150 group ${
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
              ))}

              {/* Desktop CTA Button */}
              <Button
                onClick={handleCallClick}
                className="relative overflow-hidden bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-4 lg:px-5 py-2 text-sm font-light rounded-lg border border-white/20 hover:border-white/30 transition-all duration-150"
                style={{
                  fontWeight: 300,
                }}
              >
                <div className="relative z-10 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="hidden lg:inline">Call</span>
                </div>
              </Button>
            </div>

            {/* Mobile Menu Button - Larger touch target */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-3 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-150 rounded-lg z-50 min-w-[44px] min-h-[44px]"
              aria-label="Toggle navigation menu"
            >
              <div className="w-5 h-5 relative">
                <Menu
                  className={`absolute inset-0 transition-all duration-200 ${
                    isOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
                  }`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-200 ${
                    isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
                  }`}
                />
              </div>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-2 bg-slate-900/90 backdrop-blur-xl rounded-2xl mt-4 border border-white/10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 text-base font-light transition-all duration-150 min-h-[44px] flex items-center ${
                    pathname === item.href
                      ? 'text-green-300 bg-green-500/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ fontWeight: 300 }}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-6 pt-4 border-t border-white/10">
                <Button
                  onClick={() => {
                    handleCallClick()
                    setIsOpen(false)
                  }}
                  className="w-full bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white py-4 font-light rounded-lg transition-all duration-150 min-h-[44px]"
                  style={{ fontWeight: 300 }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us: (404) 823-3384
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
} 