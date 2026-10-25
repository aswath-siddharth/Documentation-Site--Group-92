'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#04060a] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#6366f1] to-[#06b6d4] flex items-center justify-center text-white font-bold text-xs">
                CM
              </div>
              <span className="font-display font-bold text-lg text-white">CasMotif</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md mb-4">
              Information Cascade Prediction via Causal Temporal Motifs and Attentive Sequence Models. Conducted as 23CSE498 Project Phase 2 by Team Number 92 at Amrita Vishwa Vidyapeetham.
            </p>
            <div className="text-[11px] text-slate-500">
              Department of Computer Science and Engineering • Guided by Mr. Dayanand V
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h5 className="font-display font-semibold text-white text-sm mb-3">Navigation</h5>
            <ul className="space-y-2">
              <li><a href="#overview" className="hover:text-white transition-colors">Problem &amp; Objectives</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">CSR &amp; Causal Motifs</a></li>
              <li><a href="#pipelines" className="hover:text-white transition-colors">System Pipelines</a></li>
              <li><a href="#simulator" className="hover:text-white transition-colors">Interactive Simulator</a></li>
            </ul>
          </div>

          {/* Project Links */}
          <div>
            <h5 className="font-display font-semibold text-white text-sm mb-3">Resources</h5>
            <ul className="space-y-2">
              <li><a href="#video-demo" className="hover:text-white transition-colors">Demonstration Video</a></li>
              <li><a href="#benchmarks" className="hover:text-white transition-colors">Controlled Benchmarks</a></li>
              <li><a href="#progress" className="hover:text-white transition-colors">Progress (≈ 85%)</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Research Team</a></li>
              <li>
                <a
                  href="https://github.com/aswath-siddharth/Forecasting-Motif-Evolution-in-Social-Networks-using-Temporal-Graph-Networks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#38bdf8] hover:underline"
                >
                  GitHub Repository ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 CasMotif Research Project • Amrita Vishwa Vidyapeetham • All Rights Reserved.
          </div>
          <div>
            MIT License • Powered by Next.js, React 19 &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
