import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clinix AI | AI-Powered Medical Documentation | TRON DYNAMIC Portfolio",
  description: "Clinix AI empowers physicians and therapists with AI-powered medical documentation, generating billable SOAP notes, ICD-10, DSM-5-TR and CPT codes with enterprise-grade security.",
  keywords: ["Clinix AI", "medical documentation", "AI healthcare", "SOAP notes", "ICD-10", "CPT codes", "medical AI", "healthcare technology"],
  openGraph: {
    title: "Clinix AI | AI-Powered Medical Documentation",
    description: "AI-powered medical documentation platform empowering physicians with automated note-taking and billing optimization.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clinix AI - AI-Powered Medical Documentation",
      },
    ],
  },
  twitter: {
    title: "Clinix AI | AI-Powered Medical Documentation",
    description: "AI-powered medical documentation platform empowering physicians with automated note-taking and billing optimization.",
  },
}

export default function ClinixAILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 