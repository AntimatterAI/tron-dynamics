"use client"

import React from 'react'

// Simple Background Component
const SimpleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Simple gradient overlays with CSS animations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    
      {/* Simple grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  )
}

// Main Hero Graphics Component
export const HeroGraphics = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <SimpleBackground />
    </div>
  )
}

// Lightweight Card Component
export const EnhancedCard = ({ 
  children, 
  className = "", 
  glowColor = "emerald" 
}: { 
  children: React.ReactNode
  className?: string
  glowColor?: "emerald" | "orange" | "blue"
}) => {
  const glowClasses = {
    emerald: 'hover:shadow-emerald-400/25',
    orange: 'hover:shadow-orange-400/25', 
    blue: 'hover:shadow-blue-400/25'
  }

  return (
    <div 
      className={`relative bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/[0.04] hover:scale-[1.02] ${glowClasses[glowColor]} hover:shadow-lg ${className}`}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 