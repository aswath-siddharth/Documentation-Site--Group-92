'use client';

import React from 'react';

export default function ProblemStatement() {
  const literatureModels = [
    {
      name: "DeepCas",
      venue: "WWW '17",
      method: "Samples random walk paths; encodes paths via Bi-GRU/LSTM with attention.",
      limitation: "Linearizes graph structure: misses multi-hop branching, star hubs, and explicit higher-order network motifs.",
      casmotifAdvantage: "Preserves full tree branching via dynamic CSR.",
    },
    {
      name: "DeepHawkes",
      venue: "CIKM '17",
      method: "Couples deep neural networks with self-exciting Hawkes point processes and temporal decay kernels.",
      limitation: "Blind to tree topology: treats cascades as user-influence decays; cannot capture deep chains vs broad star evolution.",
      casmotifAdvantage: "Explicit causal network motifs on G_{t−}.",
    },
    {
      name: "CasCN",
      venue: "AAAI '19",
      method: "Slices continuous cascades into discrete snapshot subgraphs; applies GCN + LSTM.",
      limitation: "Snapshot bottleneck: discards fine-grained continuous-time event ordering and introduces heavy GPU overhead.",
      casmotifAdvantage: "Continuous event stream with microsecond CSR queries.",
    },
    {
      name: "CasSubTS",
      venue: "Sci Rep '25",
      method: "Dynamic subgraph sampling; Multi-Head GAT + Bi-GRU + channel attention.",
      limitation: "Heavy GNN overhead (≥154k parameters); slow dynamic graph batching and GPU-bound graph attention.",
      casmotifAdvantage: "3.1× fewer parameters (49.8k) with matching accuracy.",
    },
    {
      name: "CasTemp",
      venue: "arXiv '25",
      method: "Eliminates GNNs; uses lightweight temporal walks with time-aware attention.",
      limitation: "Heuristic walk bias: temporal random walks lack explicit, deterministic higher-order motif semantics.",
      casmotifAdvantage: "Deterministic O(1) to O(log d) causal motif semantics.",
    },
    {
      name: "CasMotif (Ours)",
      venue: "2026",
      method: "Dynamic CSR adjacency + Causal Motifs on G_{t−} + Bi-GRU Attentive Sequence Head.",
      limitation: "Evaluates motifs sequentially per incoming continuous edge.",
      casmotifAdvantage: "SOTA accuracy, zero lookahead leakage, 15-min ultra-early forecasting.",
      highlight: true,
    },
  ];

  return (
    <section id="overview" className="py-24 relative border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
            01 • Problem Formulation &amp; Objectives
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            The Challenge of Social Cascade Forecasting
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            Forecasting 24-hour viral explosions from ultra-early continuous-time diffusion events.
          </p>
        </div>

        {/* 3 Core Technical Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="glass-card p-6 border-t-2 border-t-[#f43f5e]">
            <div className="w-12 h-12 rounded-xl bg-[#f43f5e]/15 text-ink-rose flex items-center justify-center mb-5 border border-[#f43f5e]/25">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Heavy-Tailed Skew</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              &gt; 90% of cascades terminate in under 10 retweets, while rare viral threads explode across multiple orders of magnitude. Training in linear count space creates severe gradient instability.
            </p>
            <div className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/70 text-xs font-mono text-ink-sky">
              Target: <span className="text-slate-900">y = log₂(ΔP + 1)</span> (MSLE)
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-6 border-t-2 border-t-[#f59e0b]">
            <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/15 text-ink-amber flex items-center justify-center mb-5 border border-[#f59e0b]/25">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Continuous-Time Dynamics</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Social spread exhibits irregular latencies and prolonged user dormancy followed by sudden bursts. Discrete snapshotting discards exact inter-arrival ordering and latency deltas.
            </p>
            <div className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/70 text-xs font-mono text-ink-amber">
              Tracking: <span className="text-slate-900">Δt_edge, Δt_motif, T_idle</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-6 border-t-2 border-t-[#06b6d4]">
            <div className="w-12 h-12 rounded-xl bg-[#06b6d4]/15 text-ink-sky flex items-center justify-center mb-5 border border-[#06b6d4]/25">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9v12" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Topological Branching</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Cascades are not linear paths. Broadcast star hubs (celebrity reposts) carry distinct momentum compared to deep conversational chains or bilateral reciprocal dyads.
            </p>
            <div className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/70 text-xs font-mono text-ink-emerald">
              Motifs: <span className="text-slate-900">Star, Chain, Dyad, 3-Cycle</span>
            </div>
          </div>
        </div>

        {/* Formal Task Definition Box */}
        <div className="glass-panel p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6366f1] pulse-indicator" />
            <h3 className="font-display font-bold text-xl text-slate-900">Formal Task Definition</h3>
          </div>
          <p className="text-slate-700 text-sm mb-4 leading-relaxed">
            In online social networks, content diffuses as continuous-time directed reshare trees:
          </p>

          {/* Formatted Mathematical Block */}
          <div className="bg-slate-50 border border-[#6366f1]/30 rounded-xl p-5 mb-5 shadow-inner">
            <div className="text-center font-mono text-base sm:text-lg text-slate-900 mb-3 flex items-center justify-center flex-wrap gap-2">
              <span className="font-bold text-ink-sky">E</span>
              <span>=</span>
              <span>&#123;</span>
              <span>(u<sub>i</sub>, v<sub>i</sub>, t<sub>i</sub>)</span>
              <span>&#125;<sub>i=1</sub><sup>N</sup></span>
              <span className="text-slate-600 mx-3">with</span>
              <span className="text-ink-emerald">0 &le; t<sub>1</sub> &le; t<sub>2</sub> &le; &hellip; &le; t<sub>N</sub></span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                <span><strong>u<sub>i</sub> &rarr; v<sub>i</sub></strong>: Parent-to-child retweet</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#818cf8]" />
                <span><strong>t<sub>i</sub></strong>: Continuous arrival timestamp</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#34d399]" />
                <span><strong>N</strong>: Total observed reshare count</span>
              </div>
            </div>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed">
            Where user <em className="text-slate-900 font-medium">v<sub>i</sub></em> reshares from parent <em className="text-slate-900 font-medium">u<sub>i</sub></em> at continuous timestamp <em className="text-slate-900 font-medium">t<sub>i</sub></em>. Given events in early observation window <code className="text-ink-sky font-mono px-1.5 py-0.5 rounded bg-slate-50">t &isin; [0, T_obs]</code> (15m or 1h), predict future popularity increment <code className="text-ink-sky font-mono px-1.5 py-0.5 rounded bg-slate-50">&Delta;P = P_24h &minus; P_obs</code> at <code className="text-ink-sky font-mono px-1.5 py-0.5 rounded bg-slate-50">T_target = 24h</code>.
          </p>
        </div>

        {/* Literature Review Table */}
        <div className="glass-panel p-6 sm:p-8 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                Related Works &amp; Modern SOTA Comparison
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Bridging the gap between computationally heavy GNNs and heuristic random walks:
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full badge-indigo font-semibold">
              6 Architectures
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4">Model</th>
                  <th className="py-3.5 px-4">Venue</th>
                  <th className="py-3.5 px-4">Core Methodology</th>
                  <th className="py-3.5 px-4">Bottleneck / Limitation</th>
                  <th className="py-3.5 px-4">CasMotif Advancement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-slate-50">
                {literatureModels.map((m) => (
                  <tr
                    key={m.name}
                    className={`transition-colors ${
                      m.highlight
                        ? 'bg-gradient-to-r from-[#6366f1]/15 via-[#06b6d4]/10 to-transparent border-l-4 border-l-[#38bdf8]'
                        : 'hover:bg-slate-50/70'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {m.highlight && <span className="w-2 h-2 rounded-full bg-[#38bdf8] pulse-indicator" />}
                        <span>{m.name}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-mono text-xs whitespace-nowrap">{m.venue}</td>
                    <td className="py-3.5 px-4 text-slate-700 text-xs leading-relaxed">{m.method}</td>
                    <td className="py-3.5 px-4 text-rose-700/90 text-xs leading-relaxed">{m.limitation}</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${
                        m.highlight
                          ? 'bg-[#10b981]/20 text-ink-emerald border border-[#10b981]/40 shadow-sm shadow-[#10b981]/20'
                          : 'bg-[#10b981]/10 text-ink-emerald border border-[#10b981]/25'
                      }`}>
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
