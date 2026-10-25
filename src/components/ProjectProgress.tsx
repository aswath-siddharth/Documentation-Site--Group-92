'use client';

import React from 'react';

export default function ProjectProgress() {
  const modules = [
    { name: "Stream Ingestion", desc: "Parent-child edge stream, 15m & 1h horizon filters", status: "Functional" },
    { name: "CSR Graph Builder", desc: "Dynamic indptr, indices, timestamps flat buffers", status: "Functional" },
    { name: "Causal Motif Engine", desc: "5 motif types detected on G_{t−}, multi-hot encoded", status: "Functional" },
    { name: "Temporal Dynamics Engine", desc: "Δt_edge, Δt_M, T_idle, reactivation flag I_react", status: "Functional" },
    { name: "Event Vector Assembly", desc: "15-D Weibo feature vectors serialised to NPZ", status: "Functional" },
    { name: "Target Builder", desc: "24h increment ΔP = P_24h − P_obs, log2-space target", status: "Functional" },
    { name: "Dataset & Collate", desc: "Chronological split (70:15:15), boolean mask collate", status: "Functional" },
    { name: "Sequence Architecture", desc: "Bi-GRU encoder + learned attentive pooling + MLP head", status: "Functional" },
    { name: "Weibo Benchmark", desc: "1h and 15m test evaluations completed (1.980 @ 1h)", status: "Functional" },
    { name: "Ablation Studies", desc: "Attentive vs. Mean vs. Max pooling completed", status: "Functional" }
  ];

  return (
    <section id="progress" className="py-20 relative bg-[#090d16]/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#34d399] block mb-2">
            07 • Implementation Status
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Project Progress (≈ 85% Functional)
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Evaluation status for 23CSE498 Project Phase 2 (Panel Review 1) with 10 primary modules verified end-to-end.
          </p>
        </div>

        {/* Big Progress Card */}
        <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-white">System Maturity &amp; Readiness</h3>
              <p className="text-slate-400 text-sm mt-1">
                All foundational stages from continuous stream ingestion to multi-seed model evaluation are fully operational.
              </p>
            </div>
            <div className="font-display font-extrabold text-4xl sm:text-5xl text-[#38bdf8]">
              ≈ 85%
            </div>
          </div>

          {/* Giant Progress Bar */}
          <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden mb-8 p-0.5 border border-white/10">
            <div className="h-full bg-gradient-to-r from-[#06b6d4] via-[#6366f1] to-[#10b981] rounded-full w-[85%] shine-effect" />
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {modules.map((m) => (
              <div key={m.name} className="glass-card p-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white text-sm">{m.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{m.desc}</div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30 flex-shrink-0 ml-3">
                  {m.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap for Remaining 15% */}
        <div className="glass-card p-6 sm:p-8">
          <h4 className="font-display font-bold text-lg text-white mb-4">
            Roadmap to 100% Completion (Phase 2 Review 2)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="bg-[#090d16] border border-white/10 rounded-xl p-4">
              <strong className="text-[#38bdf8] block mb-1">1. Intermediate Baselines:</strong>
              <p className="text-slate-400 leading-relaxed">
                Benchmark intermediate models between DeepHawkes (&apos;17) and CasSubTS (&apos;25), specifically CasCN and CasSeqGCN on the unified 42,186 chronological split.
              </p>
            </div>

            <div className="bg-[#090d16] border border-white/10 rounded-xl p-4">
              <strong className="text-[#818cf8] block mb-1">2. Multi-Horizon Expansion:</strong>
              <p className="text-slate-400 leading-relaxed">
                Expand observation horizons beyond 15m and 1h to include 2h and 3h observation windows, matching the complete CasSubTS evaluation protocol.
              </p>
            </div>

            <div className="bg-[#090d16] border border-white/10 rounded-xl p-4">
              <strong className="text-[#34d399] block mb-1">3. Cross-Domain Generalization:</strong>
              <p className="text-slate-400 leading-relaxed">
                Validate whether conversation-tree motif formulations transfer effectively across platforms onto a second network dataset (Twitter or DBLP citations).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
