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
      primary: '#E53E3E',
      secondary: '#FF6B35',
      accent: '#00FF87',
      primaryRgba: 'rgba(229, 62, 62, 0.15)',
      secondaryRgba: 'rgba(255, 107, 53, 0.12)',
      accentRgba: 'rgba(0, 255, 135, 0.1)',
    },
    studios: {
      primary: '#E53E3E',
      secondary: '#DC2626',
      accent: '#F87171',
      primaryRgba: 'rgba(229, 62, 62, 0.15)',
      secondaryRgba: 'rgba(220, 38, 38, 0.12)',
      accentRgba: 'rgba(248, 113, 113, 0.1)',
    },
    ventures: {
      primary: '#FF6B35',
      secondary: '#EA580C',
      accent: '#FB923C',
      primaryRgba: 'rgba(255, 107, 53, 0.15)',
      secondaryRgba: 'rgba(234, 88, 12, 0.12)',
      accentRgba: 'rgba(251, 146, 60, 0.1)',
    },
    impact: {
      primary: '#00FF87',
      secondary: '#10B981',
      accent: '#34D399',
      primaryRgba: 'rgba(0, 255, 135, 0.15)',
      secondaryRgba: 'rgba(16, 185, 129, 0.12)',
      accentRgba: 'rgba(52, 211, 153, 0.1)',
    },
    about: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      accent: '#A78BFA',
      primaryRgba: 'rgba(139, 92, 246, 0.15)',
      secondaryRgba: 'rgba(124, 58, 237, 0.12)',
      accentRgba: 'rgba(167, 139, 250, 0.1)',
    }
  }

  const scheme = colorSchemes[variant]

  return (
    <>
      {/* Inject custom CSS animations */}
      <style jsx global>{`
        @keyframes heroGradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes heroFloat {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: translate(15px, -15px) rotate(120deg);
          }
          66% {
            transform: translate(-10px, -25px) rotate(240deg);
          }
        }

        @keyframes heroPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes heroGlow {
          0%, 100% {
            box-shadow: 0 0 20px ${scheme.primaryRgba}, 0 0 40px ${scheme.primaryRgba};
          }
          50% {
            box-shadow: 0 0 30px ${scheme.secondaryRgba}, 0 0 60px ${scheme.secondaryRgba};
          }
        }

        .hero-gradient-bg {
          background: linear-gradient(-45deg, ${scheme.primaryRgba}, ${scheme.secondaryRgba}, ${scheme.accentRgba}, ${scheme.primaryRgba});
          background-size: 400% 400%;
          animation: heroGradientShift 15s ease infinite;
        }

        .hero-float {
          animation: heroFloat 12s ease-in-out infinite;
        }

        .hero-pulse {
          animation: heroPulse 8s ease-in-out infinite;
        }

        .hero-glow {
          animation: heroGlow 6s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 hero-gradient-bg opacity-80"></div>

        {/* Large Floating Orbs */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute hero-float hero-pulse"
              style={{
                left: `${10 + (i * 15)}%`,
                top: `${15 + (i * 10)}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${10 + (i * 2)}s`
              }}
            >
              <div 
                className="rounded-full blur-sm hero-glow"
                style={{ 
                  backgroundColor: i % 3 === 0 ? scheme.primary : i % 3 === 1 ? scheme.secondary : scheme.accent,
                  width: `${8 + (i * 2)}px`,
                  height: `${8 + (i * 2)}px`,
                  opacity: 0.4
                }}
              />
            </div>
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={`geo-${i}`}
              className="absolute hero-float"
              style={{
                left: `${20 + (i * 20)}%`,
                top: `${25 + (i * 15)}%`,
                animationDelay: `${i * 3}s`,
                animationDuration: `${15 + i}s`
              }}
            >
              <div 
                className={`${i % 2 === 0 ? 'rotate-45' : 'rounded-full'} blur-[1px]`}
                style={{ 
                  backgroundColor: scheme.accent,
                  width: `${6 + i}px`,
                  height: `${6 + i}px`,
                  opacity: 0.3
                }}
              />
            </div>
          ))}
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(${scheme.primaryRgba} 1px, transparent 1px),
              linear-gradient(90deg, ${scheme.primaryRgba} 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Corner Ambient Lights */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-1/2 h-1/2 rounded-full blur-3xl hero-pulse"
            style={{ 
              background: `radial-gradient(circle, ${scheme.primaryRgba} 0%, transparent 60%)`,
              animationDuration: '12s'
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full blur-3xl hero-pulse"
            style={{ 
              background: `radial-gradient(circle, ${scheme.secondaryRgba} 0%, transparent 60%)`,
              animationDelay: '6s',
              animationDuration: '14s'
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-1/3 h-1/3 rounded-full blur-2xl hero-pulse transform -translate-x-1/2 -translate-y-1/2"
            style={{ 
              background: `radial-gradient(circle, ${scheme.accentRgba} 0%, transparent 50%)`,
              animationDelay: '3s',
              animationDuration: '10s'
            }}
          />
        </div>

        {/* Flowing Lines */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-0 w-full h-[1px] hero-pulse"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${scheme.primary}40, transparent)`,
              animationDuration: '8s'
            }}
          />
          <div 
            className="absolute top-3/4 left-0 w-full h-[1px] hero-pulse"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${scheme.secondary}40, transparent)`,
              animationDelay: '4s',
              animationDuration: '12s'
            }}
          />
        </div>

      </div>
    </>
  )
} 