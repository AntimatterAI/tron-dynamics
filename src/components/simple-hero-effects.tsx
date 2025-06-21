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
      primaryRgba: 'rgba(229, 62, 62, 0.35)',
      secondaryRgba: 'rgba(255, 107, 53, 0.3)',
      accentRgba: 'rgba(0, 255, 135, 0.25)',
    },
    studios: {
      primary: '#E53E3E',
      secondary: '#DC2626',
      accent: '#F87171',
      primaryRgba: 'rgba(229, 62, 62, 0.35)',
      secondaryRgba: 'rgba(220, 38, 38, 0.3)',
      accentRgba: 'rgba(248, 113, 113, 0.25)',
    },
    ventures: {
      primary: '#FF6B35',
      secondary: '#EA580C',
      accent: '#FB923C',
      primaryRgba: 'rgba(255, 107, 53, 0.35)',
      secondaryRgba: 'rgba(234, 88, 12, 0.3)',
      accentRgba: 'rgba(251, 146, 60, 0.25)',
    },
    impact: {
      primary: '#00FF87',
      secondary: '#10B981',
      accent: '#34D399',
      primaryRgba: 'rgba(0, 255, 135, 0.35)',
      secondaryRgba: 'rgba(16, 185, 129, 0.3)',
      accentRgba: 'rgba(52, 211, 153, 0.25)',
    },
    about: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      accent: '#A78BFA',
      primaryRgba: 'rgba(139, 92, 246, 0.35)',
      secondaryRgba: 'rgba(124, 58, 237, 0.3)',
      accentRgba: 'rgba(167, 139, 250, 0.25)',
    }
  }

  const scheme = colorSchemes[variant]

  return (
    <>
      {/* Inject WILD CSS animations */}
      <style jsx global>{`
        @keyframes heroWildGradient {
          0% {
            background-position: 0% 0%;
            transform: scale(1) rotate(0deg);
          }
          25% {
            background-position: 100% 50%;
            transform: scale(1.1) rotate(90deg);
          }
          50% {
            background-position: 50% 100%;
            transform: scale(0.9) rotate(180deg);
          }
          75% {
            background-position: 0% 50%;
            transform: scale(1.2) rotate(270deg);
          }
          100% {
            background-position: 0% 0%;
            transform: scale(1) rotate(360deg);
          }
        }

        @keyframes heroWildFloat {
          0% {
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          20% {
            transform: translate(30px, -20px) rotate(144deg) scale(1.3);
          }
          40% {
            transform: translate(-25px, -40px) rotate(288deg) scale(0.8);
          }
          60% {
            transform: translate(40px, -10px) rotate(432deg) scale(1.5);
          }
          80% {
            transform: translate(-15px, -50px) rotate(576deg) scale(0.7);
          }
          100% {
            transform: translate(0px, 0px) rotate(720deg) scale(1);
          }
        }

        @keyframes heroWildPulse {
          0% {
            opacity: 0.6;
            transform: scale(1);
            filter: blur(2px);
          }
          25% {
            opacity: 1;
            transform: scale(1.4);
            filter: blur(0px);
          }
          50% {
            opacity: 0.8;
            transform: scale(0.6);
            filter: blur(4px);
          }
          75% {
            opacity: 1;
            transform: scale(1.6);
            filter: blur(1px);
          }
          100% {
            opacity: 0.6;
            transform: scale(1);
            filter: blur(2px);
          }
        }

        @keyframes heroWildGlow {
          0% {
            box-shadow: 0 0 30px ${scheme.primaryRgba}, 0 0 60px ${scheme.primaryRgba}, 0 0 90px ${scheme.primaryRgba};
            filter: brightness(1.2);
          }
          33% {
            box-shadow: 0 0 50px ${scheme.secondaryRgba}, 0 0 100px ${scheme.secondaryRgba}, 0 0 150px ${scheme.secondaryRgba};
            filter: brightness(1.8);
          }
          66% {
            box-shadow: 0 0 40px ${scheme.accentRgba}, 0 0 80px ${scheme.accentRgba}, 0 0 120px ${scheme.accentRgba};
            filter: brightness(1.5);
          }
          100% {
            box-shadow: 0 0 30px ${scheme.primaryRgba}, 0 0 60px ${scheme.primaryRgba}, 0 0 90px ${scheme.primaryRgba};
            filter: brightness(1.2);
          }
        }

        @keyframes heroSparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
          }
        }

        .hero-wild-gradient {
          background: linear-gradient(-45deg, ${scheme.primaryRgba}, ${scheme.secondaryRgba}, ${scheme.accentRgba}, ${scheme.primaryRgba}, ${scheme.secondaryRgba});
          background-size: 800% 800%;
          animation: heroWildGradient 8s ease infinite;
        }

        .hero-wild-float {
          animation: heroWildFloat 6s ease-in-out infinite;
        }

        .hero-wild-pulse {
          animation: heroWildPulse 4s ease-in-out infinite;
        }

        .hero-wild-glow {
          animation: heroWildGlow 3s ease-in-out infinite;
        }

        .hero-sparkle {
          animation: heroSparkle 2s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* WILD Animated Background Gradient */}
        <div className="hero-wild-gradient absolute inset-0 opacity-90"></div>
        
        {/* Multiple Gradient Layers for Depth */}
        <div 
          className="absolute inset-0 hero-wild-pulse"
          style={{
            background: `radial-gradient(circle at 20% 80%, ${scheme.primaryRgba} 0%, transparent 60%), 
                        radial-gradient(circle at 80% 20%, ${scheme.secondaryRgba} 0%, transparent 60%),
                        radial-gradient(circle at 40% 40%, ${scheme.accentRgba} 0%, transparent 60%)`,
            opacity: 0.7
          }}
        />

        {/* MASSIVE Floating Orbs */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute hero-wild-float hero-wild-pulse"
              style={{
                left: `${5 + (i * 8)}%`,
                top: `${10 + (i * 7)}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + (i * 0.5)}s`
              }}
            >
              <div 
                className="rounded-full hero-wild-glow"
                style={{ 
                  backgroundColor: i % 3 === 0 ? scheme.primary : i % 3 === 1 ? scheme.secondary : scheme.accent,
                  width: `${15 + (i * 3)}px`,
                  height: `${15 + (i * 3)}px`,
                  opacity: 0.8
                }}
              />
            </div>
          ))}
        </div>

        {/* Geometric Madness */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`geo-${i}`}
              className="absolute hero-wild-float"
              style={{
                left: `${15 + (i * 12)}%`,
                top: `${20 + (i * 10)}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${6 + i}s`
              }}
            >
              <div 
                className={`${i % 3 === 0 ? 'rotate-45' : i % 3 === 1 ? 'rounded-full' : ''} hero-wild-glow`}
                style={{ 
                  backgroundColor: scheme.accent,
                  width: `${12 + (i * 2)}px`,
                  height: `${12 + (i * 2)}px`,
                  opacity: 0.6,
                  clipPath: i % 3 === 2 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none'
                }}
              />
            </div>
          ))}
        </div>

        {/* Sparkle Effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute hero-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i * 0.1)}s`
              }}
            >
              <div 
                className="w-2 h-2 rounded-full"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  opacity: 0.8,
                  boxShadow: `0 0 10px ${scheme.primary}, 0 0 20px ${scheme.secondary}`
                }}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20 hero-wild-pulse"
          style={{
            backgroundImage: `
              linear-gradient(${scheme.primaryRgba} 2px, transparent 2px),
              linear-gradient(90deg, ${scheme.secondaryRgba} 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* DRAMATIC Corner Glows */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-2/3 h-2/3 rounded-full blur-3xl hero-wild-pulse"
            style={{ 
              background: `radial-gradient(circle, ${scheme.primaryRgba} 0%, transparent 50%)`,
              animationDuration: '5s'
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-full blur-3xl hero-wild-pulse"
            style={{ 
              background: `radial-gradient(circle, ${scheme.secondaryRgba} 0%, transparent 50%)`,
              animationDelay: '2.5s',
              animationDuration: '6s'
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-1/2 h-1/2 rounded-full blur-2xl hero-wild-pulse transform -translate-x-1/2 -translate-y-1/2"
            style={{ 
              background: `radial-gradient(circle, ${scheme.accentRgba} 0%, transparent 40%)`,
              animationDelay: '1.2s',
              animationDuration: '4s'
            }}
          />
        </div>

        {/* WILD Flowing Lines */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-0 w-full h-1 hero-wild-pulse"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${scheme.primary}80, ${scheme.secondary}80, transparent)`,
              animationDuration: '3s',
              filter: 'blur(1px)'
            }}
          />
          <div 
            className="absolute top-2/4 left-0 w-full h-1 hero-wild-pulse"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${scheme.secondary}80, ${scheme.accent}80, transparent)`,
              animationDelay: '1.5s',
              animationDuration: '4s',
              filter: 'blur(1px)'
            }}
          />
          <div 
            className="absolute top-3/4 left-0 w-full h-1 hero-wild-pulse"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${scheme.accent}80, ${scheme.primary}80, transparent)`,
              animationDelay: '3s',
              animationDuration: '5s',
              filter: 'blur(1px)'
            }}
          />
        </div>

        {/* Diagonal Energy Beams */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-full h-full hero-wild-pulse"
            style={{ 
              background: `linear-gradient(45deg, transparent 48%, ${scheme.primary}40 49%, ${scheme.primary}40 51%, transparent 52%)`,
              animationDuration: '6s',
              opacity: 0.3
            }}
          />
          <div 
            className="absolute top-0 left-0 w-full h-full hero-wild-pulse"
            style={{ 
              background: `linear-gradient(-45deg, transparent 48%, ${scheme.secondary}40 49%, ${scheme.secondary}40 51%, transparent 52%)`,
              animationDelay: '3s',
              animationDuration: '8s',
              opacity: 0.3
            }}
          />
        </div>

      </div>
    </>
  )
} 