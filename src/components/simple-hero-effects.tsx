"use client"

import { useEffect, useState } from 'react'

interface SimpleHeroEffectsProps {
  variant?: 'home' | 'studios' | 'ventures' | 'impact' | 'about'
}

export default function SimpleHeroEffects({ variant = 'home' }: SimpleHeroEffectsProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const colorSchemes = {
    home: {
      primary: 'rgba(229, 62, 62, 0.1)',
      secondary: 'rgba(255, 107, 53, 0.08)',
      accent: 'rgba(0, 255, 135, 0.06)',
    },
    studios: {
      primary: 'rgba(229, 62, 62, 0.08)',
      secondary: 'rgba(220, 38, 38, 0.06)',
      accent: 'rgba(248, 113, 113, 0.04)',
    },
    ventures: {
      primary: 'rgba(255, 107, 53, 0.08)',
      secondary: 'rgba(234, 88, 12, 0.06)',
      accent: 'rgba(251, 146, 60, 0.04)',
    },
    impact: {
      primary: 'rgba(0, 255, 135, 0.08)',
      secondary: 'rgba(16, 185, 129, 0.06)',
      accent: 'rgba(52, 211, 153, 0.04)',
    },
    about: {
      primary: 'rgba(139, 92, 246, 0.08)',
      secondary: 'rgba(124, 58, 237, 0.06)',
      accent: 'rgba(167, 139, 250, 0.04)',
    }
  }

  const scheme = colorSchemes[variant]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 animate-gradient-shift opacity-60"
          style={{
            background: `radial-gradient(circle at 30% 70%, ${scheme.primary} 0%, transparent 50%), 
                        radial-gradient(circle at 70% 30%, ${scheme.secondary} 0%, transparent 50%), 
                        radial-gradient(circle at 50% 50%, ${scheme.accent} 0%, transparent 50%)`,
            animation: 'gradientShift 20s ease-in-out infinite'
          }}
        />
      </div>

      {/* Floating Particles - CSS Only */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + (i * 2)}s`
            }}
          >
            <div 
              className="w-1 h-1 rounded-full blur-sm"
              style={{ 
                backgroundColor: i % 3 === 0 ? '#E53E3E' : i % 3 === 1 ? '#FF6B35' : '#00FF87',
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`
              }}
            />
          </div>
        ))}
      </div>

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Ambient Corner Glows */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-1/3 h-1/3 rounded-full blur-3xl animate-pulse-slow"
          style={{ 
            background: `radial-gradient(circle, ${scheme.primary} 0%, transparent 70%)`,
            animationDuration: '8s'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-1/3 h-1/3 rounded-full blur-3xl animate-pulse-slow"
          style={{ 
            background: `radial-gradient(circle, ${scheme.secondary} 0%, transparent 70%)`,
            animationDelay: '4s',
            animationDuration: '10s'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background: radial-gradient(circle at 30% 70%, ${scheme.primary} 0%, transparent 50%), 
                       radial-gradient(circle at 70% 30%, ${scheme.secondary} 0%, transparent 50%), 
                       radial-gradient(circle at 50% 50%, ${scheme.accent} 0%, transparent 50%);
          }
          33% {
            background: radial-gradient(circle at 70% 30%, ${scheme.primary} 0%, transparent 50%), 
                       radial-gradient(circle at 30% 70%, ${scheme.secondary} 0%, transparent 50%), 
                       radial-gradient(circle at 80% 80%, ${scheme.accent} 0%, transparent 50%);
          }
          66% {
            background: radial-gradient(circle at 50% 50%, ${scheme.primary} 0%, transparent 50%), 
                       radial-gradient(circle at 80% 20%, ${scheme.secondary} 0%, transparent 50%), 
                       radial-gradient(circle at 20% 80%, ${scheme.accent} 0%, transparent 50%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(3px);
          }
        }

        .animate-gradient-shift {
          animation: gradientShift 20s ease-in-out infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  )
} 