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
      primaryRgba: 'rgba(229, 62, 62, 0.08)',
      secondaryRgba: 'rgba(255, 107, 53, 0.06)',
      accentRgba: 'rgba(0, 255, 135, 0.04)',
    },
    studios: {
      primary: '#E53E3E',
      secondary: '#DC2626',
      accent: '#F87171',
      primaryRgba: 'rgba(229, 62, 62, 0.08)',
      secondaryRgba: 'rgba(220, 38, 38, 0.06)',
      accentRgba: 'rgba(248, 113, 113, 0.04)',
    },
    ventures: {
      primary: '#FF6B35',
      secondary: '#EA580C',
      accent: '#FB923C',
      primaryRgba: 'rgba(255, 107, 53, 0.08)',
      secondaryRgba: 'rgba(234, 88, 12, 0.06)',
      accentRgba: 'rgba(251, 146, 60, 0.04)',
    },
    impact: {
      primary: '#00FF87',
      secondary: '#10B981',
      accent: '#34D399',
      primaryRgba: 'rgba(0, 255, 135, 0.08)',
      secondaryRgba: 'rgba(16, 185, 129, 0.06)',
      accentRgba: 'rgba(52, 211, 153, 0.04)',
    },
    about: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      accent: '#A78BFA',
      primaryRgba: 'rgba(139, 92, 246, 0.08)',
      secondaryRgba: 'rgba(124, 58, 237, 0.06)',
      accentRgba: 'rgba(167, 139, 250, 0.04)',
    }
  }

  const scheme = colorSchemes[variant]

  return (
    <>
      {/* Elegant, subtle CSS animations */}
      <style jsx global>{`
        @keyframes demureGradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes demureFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-8px) translateX(4px);
          }
        }

        @keyframes demurePulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes demureGlow {
          0%, 100% {
            box-shadow: 0 0 8px ${scheme.primaryRgba};
            opacity: 0.2;
          }
          50% {
            box-shadow: 0 0 12px ${scheme.secondaryRgba};
            opacity: 0.3;
          }
        }

        .demure-gradient {
          background: linear-gradient(-45deg, ${scheme.primaryRgba}, ${scheme.secondaryRgba}, ${scheme.accentRgba});
          background-size: 300% 300%;
          animation: demureGradient 25s ease infinite;
        }

        .demure-float {
          animation: demureFloat 15s ease-in-out infinite;
        }

        .demure-pulse {
          animation: demurePulse 12s ease-in-out infinite;
        }

        .demure-glow {
          animation: demureGlow 10s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Subtle Animated Background */}
        <div className="demure-gradient absolute inset-0 opacity-40"></div>

        {/* Elegant Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute demure-float"
              style={{
                left: `${20 + (i * 20)}%`,
                top: `${25 + (i * 15)}%`,
                animationDelay: `${i * 3}s`,
                animationDuration: `${15 + (i * 2)}s`
              }}
            >
              <div 
                className="rounded-full demure-glow"
                style={{ 
                  backgroundColor: i % 3 === 0 ? scheme.primary : i % 3 === 1 ? scheme.secondary : scheme.accent,
                  width: `${4 + (i * 2)}px`,
                  height: `${4 + (i * 2)}px`,
                  opacity: 0.25
                }}
              />
            </div>
          ))}
        </div>

        {/* Sophisticated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(${scheme.primaryRgba} 1px, transparent 1px),
              linear-gradient(90deg, ${scheme.primaryRgba} 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px'
          }}
        />

        {/* Refined Corner Ambience */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-1/3 h-1/3 rounded-full blur-3xl demure-pulse"
            style={{ 
              background: `radial-gradient(circle, ${scheme.primaryRgba} 0%, transparent 70%)`,
              animationDuration: '18s'
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-1/3 h-1/3 rounded-full blur-3xl demure-pulse"
            style={{ 
              background: `radial-gradient(circle, ${scheme.secondaryRgba} 0%, transparent 70%)`,
              animationDelay: '9s',
              animationDuration: '20s'
            }}
          />
        </div>

        {/* Subtle Accent Line */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/2 left-0 w-full h-[0.5px] demure-pulse"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${scheme.accent}30, transparent)`,
              animationDuration: '15s'
            }}
          />
        </div>

      </div>
    </>
  )
} 