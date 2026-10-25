import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CasMotif — Information Cascade Prediction via Causal Temporal Motifs",
  description: "Official Research Documentation Portal and Project Showcase for CasMotif (23CSE498 Project Phase 2, Team 92, Amrita Vishwa Vidyapeetham). GNN-Free continuous information cascade prediction matching SOTA accuracy with 3.1x fewer parameters.",
  keywords: ["CasMotif", "Information Cascades", "Temporal Graph Networks", "Causal Network Motifs", "Attentive Sequence Models", "Social Network Analysis", "Weibo Benchmark"],
  authors: [{ name: "Aswath Siddharth R" }, { name: "Darshan R" }, { name: "Varun S" }, { name: "Kavin Karthic M" }, { name: "Harish Krishna B" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-[#6366f1] selection:text-white">
        {children}
      </body>
    </html>
  );
}
