import type { Metadata, Viewport } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "optional",
  preload: false,
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional", 
  preload: false,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#dc2626",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "TRON DYNAMIC | Entertainment, Innovation & Impact",
  description: "Driving transformational change through storytelling, strategic investment, and philanthropy. Three divisions united under one vision of innovation and impact.",
  keywords: ["entertainment", "film production", "angel investment", "venture capital", "philanthropy", "West Africa", "innovation", "storytelling", "TRON DYNAMIC"],
  authors: [{ name: "TRON DYNAMIC" }],
  creator: "TRON DYNAMIC",
  publisher: "TRON DYNAMIC",
  
  icons: {
    icon: [
      { url: "/favicon.svg?v=4", type: "image/svg+xml" },
      { url: "/favicon.ico?v=4", sizes: "32x32" }
    ],
    shortcut: "/favicon.ico?v=4",
    apple: "/apple-touch-icon.svg?v=4",
  },
  
  openGraph: {
    type: "website",
    siteName: "TRON DYNAMIC",
    title: "TRON DYNAMIC | Entertainment, Innovation & Impact",
    description: "Driving transformational change through storytelling, strategic investment, and philanthropy. Built in Africa. Ready for the World.",
    url: "https://tron-dynamics.vercel.app",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "TRON DYNAMIC - Entertainment, Innovation & Impact",
      },
    ],
    locale: "en_US",
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@trondynamics",
    creator: "@trondynamics",
    title: "TRON DYNAMIC | Entertainment, Innovation & Impact",
    description: "Driving transformational change through storytelling, strategic investment, and philanthropy. Built in Africa. Ready for the World.",
    images: ["/og-image.svg"],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  verification: {
    google: "your-google-verification-code",
  },
  
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "TRON DYNAMIC",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              --font-mono: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
            }
            body { 
              font-family: var(--font-primary);
              font-display: swap;
            }
            .font-fallback { font-family: var(--font-primary); }
            .font-mono-fallback { font-family: var(--font-mono); }
            /* Critical CSS for LCP optimization */
            .lcp-text {
              font-family: var(--font-primary);
              font-weight: 300;
              opacity: 1;
              will-change: auto;
            }
          `
        }} />
        
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="theme-color" content="#dc2626" />
        <link rel="manifest" href="/manifest.json" />
        
        <link rel="preload" href="/favicon.svg?v=4" as="image" type="image/svg+xml" />
        
        {/* Explicit favicon declarations for better compatibility */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=4" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=4" />
        <link rel="shortcut icon" href="/favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg?v=4" />
      </head>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white overflow-x-hidden font-fallback`}>
        <SmoothScrollProvider>
          <Navigation />
          <main className="relative">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

