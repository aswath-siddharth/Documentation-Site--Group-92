'use client';

import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 text-slate-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6366f1] via-[#06b6d4] to-[#a855f7] p-[1.5px] shadow-lg shadow-[#6366f1]/25">
                <div className="w-full h-full bg-slate-50 rounded-[10px] flex items-center justify-center font-display font-bold text-xs text-slate-900">
                  CM
                </div>
              </div>
              <span className="font-display font-extrabold text-xl text-slate-900">
                Cas<span className="gradient-text-primary">Motif</span>
              </span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed max-w-md mb-4">
              Information Cascade Prediction via Causal Temporal Motifs and Attentive Sequence Models. Conducted as 23CSE498 Project Phase 2 by Team Number 92 at Amrita Vishwa Vidyapeetham.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-600">
              <span className="w-2 h-2 rounded-full bg-[#34d399] pulse-indicator" />
              <span>Department of Computer Science and Engineering • Guided by Mr. Dayanand V</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h5 className="font-display font-semibold text-slate-900 text-sm mb-3">Navigation</h5>
            <ul className="space-y-2">
              <li><a href="#overview" className="hover:text-slate-900 transition-colors">Problem &amp; Objectives</a></li>
              <li><a href="#methodology" className="hover:text-slate-900 transition-colors">CSR &amp; Causal Motifs</a></li>
              <li><a href="#pipelines" className="hover:text-slate-900 transition-colors">System Pipelines</a></li>
              <li><a href="#simulator" className="hover:text-slate-900 transition-colors">Interactive Simulator</a></li>
              <li><a href="#video-demo" className="hover:text-slate-900 transition-colors">Walkthrough Demo</a></li>
            </ul>
          </div>

          {/* Project Links */}
          <div>
            <h5 className="font-display font-semibold text-slate-900 text-sm mb-3">Resources</h5>
            <ul className="space-y-2">
              <li><a href="#benchmarks" className="hover:text-slate-900 transition-colors">Controlled Benchmarks</a></li>
              <li><a href="#progress" className="hover:text-slate-900 transition-colors">Progress (≈ 85%)</a></li>
              <li><a href="#team" className="hover:text-slate-900 transition-colors">Research Team</a></li>
              <li><a href="#docs" className="hover:text-slate-900 transition-colors">Developer Portal</a></li>
              <li>
                <a
                  href="https://github.com/aswath-siddharth/Forecasting-Motif-Evolution-in-Social-Networks-using-Temporal-Graph-Networks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-sky hover:underline flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 CasMotif Research Project • Amrita Vishwa Vidyapeetham • Team 92.
          </div>
          <div className="flex items-center gap-4">
            <span>Next.js 16 • React 19 • Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="px-3 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
