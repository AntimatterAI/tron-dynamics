import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // TRON DYNAMIC Brand Colors
        'obsidian': {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#d6d6d6',
          300: '#b4b4b4',
          400: '#8a8a8a',
          500: '#6b6b6b',
          600: '#555555',
          700: '#434343',
          800: '#2e2e2e',
          900: '#1a1a1a',
          950: '#0f0f0f',
        },
        'golden': {
          50: '#fdfdf9',
          100: '#faf9f1',
          200: '#f5f2e3',
          300: '#ebe6cf',
          400: '#ddd4b8',
          500: '#cdc1a1',
          600: '#b8a98a',
          700: '#9d8e75',
          800: '#837661',
          900: '#6b6050',
          950: '#383329',
        },
        'copper': {
          50: '#fef8f3',
          100: '#feede1',
          200: '#fcd8b9',
          300: '#f9bb87',
          400: '#f59353',
          500: '#b87333',
          600: '#a85a1f',
          700: '#8b441a',
          800: '#71361c',
          900: '#5c2e19',
          950: '#31150b',
        },
        'electric': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        'void': {
          50: '#f1f8f3',
          100: '#ddeee1',
          200: '#bddcc5',
          300: '#93c3a0',
          400: '#64a275',
          500: '#478558',
          600: '#366a44',
          700: '#2d5538',
          800: '#26442f',
          900: '#1f3827',
          950: '#0f1e15',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-in-out",
        "slide-up": "slide-up 0.8s ease-out",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.8s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "gradient": "gradient 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "meteor": "meteor 5s linear infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        "slide-up": {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        "slide-in-left": {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        "slide-in-right": {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        "scale-in": {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        "float": {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        "gradient": {
          '0%, 100%': { 
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        "glow": {
          '0%': { 
            'box-shadow': '0 0 20px rgba(34, 197, 94, 0.2)',
            'filter': 'brightness(1)'
          },
          '100%': { 
            'box-shadow': '0 0 40px rgba(34, 197, 94, 0.4)',
            'filter': 'brightness(1.1)'
          },
        },
        "shimmer": {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        "meteor": {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "golden-gradient": "linear-gradient(135deg, #cdc1a1 0%, #b8a98a 50%, #9d8e75 100%)",
        "electric-gradient": "linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)",
        "obsidian-gradient": "linear-gradient(135deg, #1f3827 0%, #26442f 50%, #2d5538 100%)",
        "cosmic-gradient": "linear-gradient(135deg, #0f1e15 0%, #1f3827 25%, #26442f 50%, #1f3827 75%, #0f1e15 100%)",
        "aurora-gradient": "linear-gradient(135deg, #22c55e 0%, #cdc1a1 25%, #16a34a 50%, #b8a98a 75%, #22c55e 100%)",
        "copper-gradient": "linear-gradient(135deg, #b87333 0%, #a85a1f 50%, #8b441a 100%)",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backdropBlur: {
        'xs': '2px',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

