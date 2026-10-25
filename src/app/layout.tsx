import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CasMotif — Information Cascade Prediction via Causal Temporal Motifs",
  description: "Official Research Documentation Portal and Project Showcase for CasMotif (23CSE498 Project Phase 2, Team 92, Amrita Vishwa Vidyapeetham). GNN-Free continuous information cascade prediction matching SOTA accuracy with 3.1x fewer parameters.",
  keywords: ["CasMotif", "Information Cascades", "Temporal Graph Networks", "Causal Network Motifs", "Attentive Sequence Models", "Social Network Analysis", "Weibo Benchmark"],
  authors: [{ name: "Aswath Siddharth R" }, { name: "Darshan R" }, { name: "Varun S" }, { name: "Kavin Karthic M" }, { name: "Harish Krishna B" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[#07090e] text-[#f8fafc] antialiased selection:bg-[#6366f1] selection:text-white">
        {children}
      </body>
    </html>
  );
}
