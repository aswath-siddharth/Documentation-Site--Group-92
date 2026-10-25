'use client';

import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-16 pb-24 overflow-hidden">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6366f1]/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-24 right-1/4 w-[450px] h-[450px] bg-[#06b6d4]/12 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Academic Project Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/25 text-[#38bdf8] text-xs font-semibold mb-6 shadow-lg shadow-[#06b6d4]/10">
          <span className="w-2 h-2 rounded-full bg-[#06b6d4] pulse-indicator" />
          <span>23CSE498 Project Phase 2 • Team 92 • Amrita Vishwa Vidyapeetham</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-[1.12]">
          <span className="block text-slate-100">CasMotif: Information Cascade Prediction</span>
          <span className="block mt-2 bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc] bg-clip-text text-transparent">
            via Causal Temporal Motifs & Attentive Sequence Models
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-10">
          A GNN-Free, streaming architecture pre-encoding higher-order causal network motifs and continuous temporal states on dynamic CSR graphs. Achieves state-of-the-art accuracy on 42,186 Weibo cascades with <strong className="text-white font-semibold">3.1× fewer parameters</strong> and enables <strong className="text-white font-semibold">15-minute ultra-early</strong> popularity forecasting.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#simulator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#4f46e5] hover:from-[#4f46e5] hover:to-[#4338ca] shadow-lg shadow-[#6366f1]/30 transition-all hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
            </svg>
            <span>Launch Live Simulator</span>
          </a>

          <a
            href="#video-demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>Watch Walkthrough Demo</span>
          </a>

          <a
            href="#benchmarks"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 text-[#34d399]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
            <span>Controlled Benchmarks</span>
          </a>
        </div>

        {/* 4 Quantitative Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          <div className="glass-card p-5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="font-display font-bold text-3xl text-[#38bdf8] mb-1">49,824</div>
            <div className="text-sm font-semibold text-slate-200 mb-0.5">Parameters</div>
            <div className="text-xs text-slate-400">3.1× lighter than CasSubTS (154k)</div>
          </div>

          <div className="glass-card p-5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#818cf8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="font-display font-bold text-3xl text-[#818cf8] mb-1">1.9845</div>
            <div className="text-sm font-semibold text-slate-200 mb-0.5">Weibo MSLE (3-Seed)</div>
            <div className="text-xs text-slate-400">Statistical parity (p = 0.93) with SOTA</div>
          </div>

          <div className="glass-card p-5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#34d399] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="font-display font-bold text-3xl text-[#34d399] mb-1">15 Min</div>
            <div className="text-sm font-semibold text-slate-200 mb-0.5">Early Observation Window</div>
            <div className="text-xs text-slate-400">4× earlier than standard 1h baseline</div>
          </div>

          <div className="glass-card p-5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c084fc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="font-display font-bold text-3xl text-[#c084fc] mb-1">G<sub>t−</sub> Causal</div>
            <div className="text-sm font-semibold text-slate-200 mb-0.5">Zero Lookahead Leakage</div>
            <div className="text-xs text-slate-400">Evaluated before edge insertion</div>
          </div>
        </div>
      </div>
    </section>
  );
}
