'use client';

import React from 'react';

export default function ProjectProgress() {
  const modules = [
    { name: "Stream Ingestion", desc: "Parent-child edge stream, 15m & 1h horizon filters", category: "Data", status: "Functional" },
    { name: "CSR Graph Builder", desc: "Dynamic indptr, indices, timestamps flat buffers", category: "Graph", status: "Functional" },
    { name: "Causal Motif Engine", desc: "5 motif types detected on G_{t−}, multi-hot encoded", category: "Topological", status: "Functional" },
    { name: "Temporal Dynamics Engine", desc: "Δt_edge, Δt_M, T_idle, reactivation flag I_react", category: "Physics", status: "Functional" },
    { name: "Event Vector Assembly", desc: "15-D Weibo feature vectors serialised to NPZ", category: "Engine", status: "Functional" },
    { name: "Target Builder", desc: "24h increment ΔP = P_24h − P_obs, log2-space target", category: "Metrics", status: "Functional" },
    { name: "Dataset & Collate", desc: "Chronological split (70:15:15), boolean mask collate", category: "PyTorch", status: "Functional" },
    { name: "Sequence Architecture", desc: "Bi-GRU encoder + learned attentive pooling + MLP head", category: "Neural", status: "Functional" },
    { name: "Weibo Benchmark", desc: "1h and 15m test evaluations completed (1.980 @ 1h)", category: "Validation", status: "Functional" },
    { name: "Ablation Studies", desc: "Attentive vs. Mean vs. Max pooling completed", category: "Ablation", status: "Functional" }
  ];

  return (
    <section id="progress" className="py-24 relative bg-slate-50/60 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-emerald text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            07 • Implementation Status
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Project Progress (≈ 85% Functional)
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            Evaluation status for 23CSE498 Project Phase 2 (Panel Review 1) with 10 primary modules verified end-to-end.
          </p>
        </div>

        {/* Big Progress Card */}
        <div className="glass-panel p-6 sm:p-8 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded badge-cyan uppercase mb-2 inline-block">
                Production Readiness
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">System Maturity &amp; Readiness</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                All foundational stages from continuous stream ingestion to multi-seed model evaluation are fully operational.
              </p>
            </div>
            <div className="flex items-baseline gap-1 bg-gradient-to-r from-[#6366f1]/20 to-[#06b6d4]/20 border border-[#6366f1]/30 px-5 py-2.5 rounded-2xl shadow-lg">
              <span className="font-display font-black text-4xl sm:text-5xl gradient-text-primary">85</span>
              <span className="text-xl font-bold text-ink-sky">%</span>
            </div>
          </div>

          {/* Giant Progress Bar */}
          <div className="w-full h-4 bg-slate-50 rounded-full overflow-hidden mb-8 p-0.5 border border-slate-200 shadow-inner">
            <div className="h-full bg-gradient-to-r from-[#06b6d4] via-[#6366f1] to-[#10b981] rounded-full w-[85%] shine-effect shadow-md" />
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {modules.map((m) => (
              <div key={m.name} className="glass-card p-4 flex items-center justify-between group hover:border-slate-300 transition-all">
                <div className="pr-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
                    <span className="font-semibold text-slate-900 text-sm">{m.name}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-50 text-slate-600">{m.category}</span>
                  </div>
                  <div className="text-slate-600 text-xs leading-relaxed">{m.desc}</div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold badge-emerald flex-shrink-0 flex items-center gap-1">
                  <span>✓</span>
                  <span>{m.status}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap for Remaining 15% */}
        <div className="glass-panel p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] pulse-indicator" />
            <h4 className="font-display font-bold text-xl text-slate-900">
              Roadmap to 100% Completion (Phase 2 Review 2)
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
            <div className="glass-card p-5 border-t-2 border-t-[#38bdf8]">
              <div className="text-xs font-mono font-bold text-ink-sky mb-2 uppercase">Milestone 01</div>
              <strong className="text-slate-900 text-sm block mb-1.5">Intermediate Baselines</strong>
              <p className="text-slate-600 leading-relaxed text-xs">
                Benchmark intermediate models between DeepHawkes (&apos;17) and CasSubTS (&apos;25), specifically CasCN and CasSeqGCN on the unified 42,186 chronological split.
              </p>
            </div>

            <div className="glass-card p-5 border-t-2 border-t-[#818cf8]">
              <div className="text-xs font-mono font-bold text-ink-indigo mb-2 uppercase">Milestone 02</div>
              <strong className="text-slate-900 text-sm block mb-1.5">Multi-Horizon Expansion</strong>
              <p className="text-slate-600 leading-relaxed text-xs">
                Expand observation horizons beyond 15m and 1h to include 2h and 3h observation windows, matching the complete CasSubTS evaluation protocol.
              </p>
            </div>

            <div className="glass-card p-5 border-t-2 border-t-[#34d399]">
              <div className="text-xs font-mono font-bold text-ink-emerald mb-2 uppercase">Milestone 03</div>
              <strong className="text-slate-900 text-sm block mb-1.5">Cross-Domain Generalization</strong>
              <p className="text-slate-600 leading-relaxed text-xs">
                Validate whether conversation-tree motif formulations transfer effectively across platforms onto a second network dataset (Twitter or DBLP citations).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
