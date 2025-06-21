import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ShadowShield AI | Enterprise AI Governance & Security | TRON DYNAMIC Portfolio",
  description: "ShadowShield AI provides enterprise-grade AI governance platform with real-time security monitoring and data protection for AI interactions across organizations.",
  keywords: ["ShadowShield AI", "AI governance", "cybersecurity", "AI security", "enterprise security", "data protection", "AI monitoring", "security platform"],
  openGraph: {
    title: "ShadowShield AI | Enterprise AI Governance & Security",
    description: "Enterprise-grade AI governance platform providing real-time security monitoring and data protection for AI interactions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ShadowShield AI - Enterprise AI Governance & Security",
      },
    ],
  },
  twitter: {
    title: "ShadowShield AI | Enterprise AI Governance & Security",
    description: "Enterprise-grade AI governance platform providing real-time security monitoring and data protection for AI interactions.",
  },
}

export default function ShadowShieldAILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 