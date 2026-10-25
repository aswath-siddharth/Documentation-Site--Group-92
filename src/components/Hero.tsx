'use client';

import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 pb-28 sm:pt-24 sm:pb-32 overflow-hidden">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#6366f1]/18 via-[#06b6d4]/12 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-48 left-10 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Academic Project Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#38bdf8] text-xs font-semibold mb-8 shadow-lg shadow-[#06b6d4]/15 backdrop-blur-md hover:border-[#06b6d4]/50 transition-all">
          <span className="w-2 h-2 rounded-full bg-[#06b6d4] pulse-indicator" />
          <span className="tracking-wide">23CSE498 Project Phase 2 • Team 92 • Amrita Vishwa Vidyapeetham</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-[1.12]">
          <span className="block text-slate-100">CasMotif: Information Cascade Prediction</span>
          <span className="block mt-2 gradient-text-primary">
            via Causal Temporal Motifs &amp; Attentive Sequence Models
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal mb-10 text-balance">
          A GNN-Free, streaming architecture pre-encoding higher-order causal network motifs and continuous temporal states on dynamic CSR graphs. Achieves state-of-the-art accuracy on 42,186 Weibo cascades with <strong className="text-white font-semibold">3.1× fewer parameters</strong> and enables <strong className="text-white font-semibold">15-minute ultra-early</strong> popularity forecasting.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href="#simulator"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#6366f1] via-[#4f46e5] to-[#4338ca] hover:brightness-110 shadow-xl shadow-[#6366f1]/35 transition-all hover:-translate-y-0.5 active:translate-y-0 border border-white/10"
          >
            <svg className="w-5 h-5 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
            </svg>
            <span>Launch Live Simulator</span>
          </a>

          <a
            href="#video-demo"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 border border-white/12 hover:bg-white/10 hover:border-white/25 transition-all hover:-translate-y-0.5 backdrop-blur-md"
          >
            <svg className="w-5 h-5 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>Watch Walkthrough Demo</span>
          </a>

          <a
            href="#benchmarks"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 border border-white/12 hover:bg-white/10 hover:border-white/25 transition-all hover:-translate-y-0.5 backdrop-blur-md"
          >
            <svg className="w-5 h-5 text-[#34d399]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
            <span>Controlled Benchmarks</span>
          </a>
        </div>

        {/* 4 Quantitative Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          <div className="glass-card p-6 relative overflow-hidden group border-t-2 border-t-[#38bdf8]">
            <div className="flex items-center justify-between mb-2">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#38bdf8]">49,824</div>
              <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/10 flex items-center justify-center text-[#38bdf8]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="text-sm font-semibold text-white mb-1">Parameters</div>
            <div className="text-xs text-slate-400 leading-snug">3.1× lighter than CasSubTS (154k) with matching performance</div>
          </div>

          <div className="glass-card p-6 relative overflow-hidden group border-t-2 border-t-[#818cf8]">
            <div className="flex items-center justify-between mb-2">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#818cf8]">1.9845</div>
              <div className="w-8 h-8 rounded-lg bg-[#818cf8]/10 flex items-center justify-center text-[#818cf8]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="text-sm font-semibold text-white mb-1">Weibo MSLE (3-Seed)</div>
            <div className="text-xs text-slate-400 leading-snug">Statistical parity (p = 0.93) with 2025 SOTA CasSubTS</div>
          </div>

          <div className="glass-card p-6 relative overflow-hidden group border-t-2 border-t-[#34d399]">
            <div className="flex items-center justify-between mb-2">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#34d399]">15 Min</div>
              <div className="w-8 h-8 rounded-lg bg-[#34d399]/10 flex items-center justify-center text-[#34d399]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>
            <div className="text-sm font-semibold text-white mb-1">Ultra-Early Horizon</div>
            <div className="text-xs text-slate-400 leading-snug">4× earlier than standard 1h baseline; R² = 0.5757</div>
          </div>

          <div className="glass-card p-6 relative overflow-hidden group border-t-2 border-t-[#c084fc]">
            <div className="flex items-center justify-between mb-2">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#c084fc]">G<sub>t−</sub> Causal</div>
              <div className="w-8 h-8 rounded-lg bg-[#c084fc]/10 flex items-center justify-center text-[#c084fc]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <div className="text-sm font-semibold text-white mb-1">Zero Lookahead Leakage</div>
            <div className="text-xs text-slate-400 leading-snug">Evaluated before edge insertion; replaces full graph passes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
