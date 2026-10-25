'use client';

import React from 'react';

export default function ProblemStatement() {
  const literatureModels = [
    {
      name: "DeepCas",
      venue: "WWW 2017",
      method: "Samples random walk paths; encodes paths via Bi-GRU/LSTM with attention.",
      limitation: "Linearizes graph structure: misses multi-hop branching, star hubs, and explicit higher-order network motifs.",
      casmotifAdvantage: "Preserves full tree branching via dynamic CSR.",
    },
    {
      name: "DeepHawkes",
      venue: "CIKM 2017",
      method: "Couples deep neural networks with self-exciting Hawkes point processes and temporal decay kernels.",
      limitation: "Blind to tree topology: treats cascades as user-influence decays; cannot capture deep chains vs broad star evolution.",
      casmotifAdvantage: "Explicit causal network motifs on G_{t−}.",
    },
    {
      name: "CasCN",
      venue: "AAAI 2019",
      method: "Slices continuous cascades into discrete snapshot subgraphs; applies GCN + LSTM.",
      limitation: "Snapshot bottleneck: discards fine-grained continuous-time event ordering and introduces heavy GPU overhead.",
      casmotifAdvantage: "Continuous event stream with microsecond CSR queries.",
    },
    {
      name: "CasSubTS",
      venue: "Sci Rep 2025",
      method: "Dynamic subgraph sampling; Multi-Head GAT + Bi-GRU + channel attention.",
      limitation: "Heavy GNN overhead (≥154k parameters); slow dynamic graph batching and GPU-bound graph attention.",
      casmotifAdvantage: "3.1× fewer parameters (49.8k) with matching accuracy.",
    },
    {
      name: "CasTemp",
      venue: "arXiv 2025/26",
      method: "Eliminates GNNs; uses lightweight temporal walks with time-aware attention.",
      limitation: "Heuristic walk bias: temporal random walks lack explicit, deterministic higher-order motif semantics.",
      casmotifAdvantage: "Deterministic O(1) to O(log d) causal motif semantics.",
    },
    {
      name: "CasMotif (Ours)",
      venue: "2026",
      method: "Dynamic CSR adjacency + Causal Motifs on G_{t−} + Bi-GRU Attentive Sequence Head.",
      limitation: "Evaluates motifs sequentially per incoming continuous edge.",
      casmotifAdvantage: "SOTA accuracy, zero lookahead leakage, 15-minute ultra-early forecasting.",
      highlight: true,
    },
  ];

  return (
    <section id="overview" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#06b6d4] block mb-2">
            01 • Problem Formulation & Objectives
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            The Challenge of Social Cascade Forecasting
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Forecasting 24-hour viral explosions from ultra-early continuous-time diffusion events.
          </p>
        </div>

        {/* 3 Core Technical Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="glass-card p-6">
            <div className="w-11 h-11 rounded-xl bg-[#f43f5e]/15 text-[#fb7185] flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2">Heavy-Tailed Skew</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              &gt; 90% of cascades terminate in under 10 retweets, while rare viral threads explode across multiple orders of magnitude. Training in linear count space creates gradient instability; CasMotif formulates regression strictly in log space: <code className="text-[#38bdf8] font-mono">y = log₂(ΔP + 1)</code> evaluated via MSLE.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-6">
            <div className="w-11 h-11 rounded-xl bg-[#f59e0b]/15 text-[#fbbf24] flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2">Continuous-Time Dynamics</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Social spread exhibits irregular latencies and prolonged user dormancy followed by sudden bursts. Discrete snapshotting (CasCN) discards exact inter-arrival ordering (<code className="text-[#38bdf8] font-mono">Δt_edge</code>) and dormancy (<code className="text-[#38bdf8] font-mono">T_idle</code>). CasMotif models dynamics continuously in microsecond RAM time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-6">
            <div className="w-11 h-11 rounded-xl bg-[#06b6d4]/15 text-[#38bdf8] flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9v12" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2">Topological Branching</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Cascades are not linear paths. Broadcast star hubs (celebrity reposts) carry distinct momentum compared to deep conversational chains (<code className="text-[#38bdf8] font-mono">depth ≥ 3</code>) or bilateral reciprocal dyads (<code className="text-[#38bdf8] font-mono">u ↔ v</code>). CasMotif captures these micro-structures directly on dynamic graphs.
            </p>
          </div>
        </div>

        {/* Formal Task Definition Box */}
        <div className="glass-card p-8 mb-12">
          <h3 className="font-display font-bold text-xl text-white mb-3">Formal Task Definition</h3>
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            In online social networks, content diffuses as continuous-time directed reshare trees:
          </p>
          <div className="math-block mb-4">
            {"E = { (u_i, v_i, t_i) }_{i=1}^N \\quad \\text{with} \\quad 0 \\le t_1 \\le t_2 \\le \\dots \\le t_N"}
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Where user <em className="text-white">v<sub>i</sub></em> reshares from parent <em className="text-white">u<sub>i</sub></em> at continuous timestamp <em className="text-white">t<sub>i</sub></em>. Given events in early window <code className="text-[#38bdf8] font-mono">t ∈ [0, T_obs]</code> (15m or 1h), predict future popularity increment <code className="text-[#38bdf8] font-mono">ΔP = P_24h − P_obs</code> at <code className="text-[#38bdf8] font-mono">T_target = 24h</code>.
          </p>
        </div>

        {/* Literature Review Table */}
        <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 sm:p-8">
          <h3 className="font-display font-bold text-xl text-white mb-2">
            Related Works &amp; Modern SOTA Comparison
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Bridging the gap between computationally heavy GNNs and heuristic random walks:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-semibold text-xs uppercase tracking-wider">
                  <th className="py-3 px-4">Model</th>
                  <th className="py-3 px-4">Venue</th>
                  <th className="py-3 px-4">Core Methodology</th>
                  <th className="py-3 px-4">Bottleneck / Limitation</th>
                  <th className="py-3 px-4">CasMotif Advancement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {literatureModels.map((m) => (
                  <tr
                    key={m.name}
                    className={m.highlight ? 'bg-[#6366f1]/10 font-medium' : 'hover:bg-white/5'}
                  >
                    <td className="py-3.5 px-4 font-semibold text-white whitespace-nowrap">
                      {m.name}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 whitespace-nowrap">{m.venue}</td>
                    <td className="py-3.5 px-4 text-slate-300">{m.method}</td>
                    <td className="py-3.5 px-4 text-rose-300/90">{m.limitation}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30">
                        {m.casmotifAdvantage}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
