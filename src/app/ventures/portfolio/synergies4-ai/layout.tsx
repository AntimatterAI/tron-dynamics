import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Synergies4 AI | AI-Powered Learning Platform | TRON DYNAMIC Portfolio",
  description: "Synergies4 AI offers personalized professional development courses with intelligent learning recommendations, empowering professionals through AI-driven education technology.",
  keywords: ["Synergies4 AI", "AI learning", "EdTech", "professional development", "online courses", "AI education", "learning platform", "skill development"],
  openGraph: {
    title: "Synergies4 AI | AI-Powered Learning Platform",
    description: "AI-powered learning platform offering personalized professional development courses and intelligent learning recommendations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Synergies4 AI - AI-Powered Learning Platform",
      },
    ],
  },
  twitter: {
    title: "Synergies4 AI | AI-Powered Learning Platform",
    description: "AI-powered learning platform offering personalized professional development courses and intelligent learning recommendations.",
  },
}

export default function Synergies4AILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 