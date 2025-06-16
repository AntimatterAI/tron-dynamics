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
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#3b82f6",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "TRON DYNAMICS | Entertainment, Innovation & Impact",
  description: "Driving transformational change through storytelling, strategic investment, and philanthropy. Three divisions united under one vision of innovation and impact.",
  keywords: ["entertainment", "film production", "angel investment", "venture capital", "philanthropy", "West Africa", "innovation", "storytelling", "TRON DYNAMICS"],
  authors: [{ name: "TRON DYNAMICS" }],
  creator: "TRON DYNAMICS",
  publisher: "TRON DYNAMICS",
  
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  
  openGraph: {
    type: "website",
    siteName: "TRON DYNAMICS",
    title: "TRON DYNAMICS | Entertainment, Innovation & Impact",
    description: "Driving transformational change through storytelling, strategic investment, and philanthropy. Built in Africa. Ready for the World.",
    url: "https://tron-dynamics.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TRON DYNAMICS - Entertainment, Innovation & Impact",
      },
    ],
    locale: "en_US",
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@trondynamics",
    creator: "@trondynamics",
    title: "TRON DYNAMICS | Entertainment, Innovation & Impact",
    description: "Driving transformational change through storytelling, strategic investment, and philanthropy. Built in Africa. Ready for the World.",
    images: ["/twitter-image.jpg"],
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
    "apple-mobile-web-app-title": "TRON DYNAMICS",
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
            .font-fallback { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
            .font-mono-fallback { font-family: 'SF Mono', Monaco, 'Inconsolata', 'Roboto Mono', monospace; }
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
          `
        }} />
        
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="manifest" href="/manifest.json" />
        
        <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
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

