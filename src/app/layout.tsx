import type { Metadata, Viewport } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#22c55e",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "TRON DYNAMICS | Entertainment, Innovation & Impact",
  description: "Driving transformational change through storytelling, strategic investment, and philanthropy. Three divisions united under one vision of innovation and impact.",
  keywords: ["entertainment", "film production", "angel investment", "venture capital", "philanthropy", "West Africa", "innovation", "storytelling"],
  authors: [{ name: "TRON DYNAMICS" }],
  openGraph: {
    title: "TRON DYNAMICS | Entertainment, Innovation & Impact",
    description: "Driving transformational change through storytelling, strategic investment, and philanthropy.",
    type: "website",
    siteName: "TRON DYNAMICS",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRON DYNAMICS | Entertainment, Innovation & Impact",
    description: "Driving transformational change through storytelling, strategic investment, and philanthropy.",
  },
  robots: "index, follow",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#22c55e" />
        <meta name="theme-color" content="#22c55e" />
      </head>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white overflow-x-hidden`}>
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

