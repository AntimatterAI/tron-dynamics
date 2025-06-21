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
      accentRgba: 'rgba(0, 255, 135, 0.08)',
    },
    studios: {
      primary: '#E53E3E',
      secondary: '#DC2626',
      accent: '#F87171',
      primaryRgba: 'rgba(229, 62, 62, 0.15)',
      secondaryRgba: 'rgba(220, 38, 38, 0.12)',
      accentRgba: 'rgba(248, 113, 113, 0.08)',
    },
    ventures: {
      primary: '#FF6B35',
      secondary: '#EA580C',
      accent: '#FB923C',
      primaryRgba: 'rgba(255, 107, 53, 0.15)',
      secondaryRgba: 'rgba(234, 88, 12, 0.12)',
      accentRgba: 'rgba(251, 146, 60, 0.08)',
    },
    impact: {
      primary: '#00FF87',
      secondary: '#10B981',
      accent: '#34D399',
      primaryRgba: 'rgba(0, 255, 135, 0.15)',
      secondaryRgba: 'rgba(16, 185, 129, 0.12)',
      accentRgba: 'rgba(52, 211, 153, 0.08)',
    },
    about: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      accent: '#A78BFA',
      primaryRgba: 'rgba(139, 92, 246, 0.15)',
      secondaryRgba: 'rgba(124, 58, 237, 0.12)',
      accentRgba: 'rgba(167, 139, 250, 0.08)',
    }
  }

  const scheme = colorSchemes[variant]

  return (
    <>
      {/* Balanced, sophisticated animations */}
      <style jsx global>{`
        @keyframes sophisticatedGradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes sophisticatedFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) translateX(8px) rotate(180deg);
          }
        }

        @keyframes sophisticatedPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.15);
          }
        }

        @keyframes sophisticatedGlow {
          0%, 100% {
            box-shadow: 0 0 15px ${scheme.primaryRgba};
            opacity: 0.3;
          }
          50% {
            box-shadow: 0 0 25px ${scheme.secondaryRgba};
            opacity: 0.5;
          }
        }

        @keyframes sophisticatedGeometry {
          0%, 100% {
            transform: rotate(0deg) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: rotate(180deg) scale(1.2);
            opacity: 0.4;
          }
        }

        .sophisticated-gradient {
          background: linear-gradient(-45deg, ${scheme.primaryRgba}, ${scheme.secondaryRgba}, ${scheme.accentRgba}, ${scheme.primaryRgba});
          background-size: 400% 400%;
          animation: sophisticatedGradient 18s ease infinite;
        }

        .sophisticated-float {
          animation: sophisticatedFloat 12s ease-in-out infinite;
        }

        .sophisticated-pulse {
          animation: sophisticatedPulse 8s ease-in-out infinite;
        }

        .sophisticated-glow {
          animation: sophisticatedGlow 7s ease-in-out infinite;
        }

        .sophisticated-geometry {
          animation: sophisticatedGeometry 10s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Enhanced Animated Background */}
        <div className="sophisticated-gradient absolute inset-0 opacity-60"></div>

        {/* Additional Gradient Layer */}
        <div 
          className="absolute inset-0 sophisticated-pulse"
          style={{
            background: `radial-gradient(circle at 30% 70%, ${scheme.primaryRgba} 0%, transparent 50%), 
                        radial-gradient(circle at 70% 30%, ${scheme.secondaryRgba} 0%, transparent 50%)`,
            opacity: 0.4
          }}
        />

        {/* More Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute sophisticated-float"
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${20 + (i * 12)}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${12 + (i * 1.5)}s`
              }}
            >
              <div 
                className="rounded-full sophisticated-glow"
                style={{ 
                  backgroundColor: i % 3 === 0 ? scheme.primary : i % 3 === 1 ? scheme.secondary : scheme.accent,
                  width: `${6 + (i * 2)}px`,
                  height: `${6 + (i * 2)}px`,
                  opacity: 0.4
                }}
              />
            </div>
          ))}
        </div>

        {/* Elegant Geometric Accents */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={`geo-${i}`}
              className="absolute sophisticated-geometry"
              style={{
                left: `${25 + (i * 25)}%`,
                top: `${30 + (i * 20)}%`,
                animationDelay: `${i * 4}s`,
                animationDuration: `${10 + i}s`
              }}
            >
              <div 
                className={`${i % 2 === 0 ? 'rotate-45' : 'rounded-full'}`}
                style={{ 
                  backgroundColor: scheme.accent,
                  width: `${8 + (i * 2)}px`,
                  height: `${8 + (i * 2)}px`,
                  opacity: 0.3
                }}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.06] sophisticated-pulse"
          style={{
            backgroundImage: `
              linear-gradient(${scheme.primaryRgba} 1px, transparent 1px),
              linear-gradient(90deg, ${scheme.secondaryRgba} 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            animationDuration: '20s'
          }}
        />

        {/* Enhanced Corner Ambience */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-2/5 h-2/5 rounded-full blur-3xl sophisticated-pulse"
            style={{ 
              background: `radial-gradient(circle, ${scheme.primaryRgba} 0%, transparent 60%)`,
              animationDuration: '14s'
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-2/5 h-2/5 rounded-full blur-3xl sophisticated-pulse"
            style={{ 
              background: `radial-gradient(circle, ${scheme.secondaryRgba} 0%, transparent 60%)`,
              animationDelay: '7s',
              animationDuration: '16s'
            }}
          />
        </div>

        {/* Sophisticated Accent Lines */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/3 left-0 w-full h-[0.5px] sophisticated-pulse"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${scheme.accent}50, transparent)`,
              animationDuration: '12s'
            }}
          />
          <div 
            className="absolute top-2/3 left-0 w-full h-[0.5px] sophisticated-pulse"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${scheme.primary}40, transparent)`,
              animationDelay: '6s',
              animationDuration: '15s'
            }}
          />
        </div>

      </div>
    </>
  )
} 