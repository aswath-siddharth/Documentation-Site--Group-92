'use client';

import React, { useState } from 'react';

export default function Methodology() {
  const [activeTab, setActiveTab] = useState<'csr' | 'motifs' | 'features' | 'sequence'>('csr');

  const motifs = [
    {
      col: "Col 0",
      name: "Single Direct Reply",
      complexity: "O(1)",
      condition: "¬cycle ∧ ¬dyad ∧ ¬chain ∧ ¬star",
      significance: "Default 1-to-1 linear forwarding with out-degree 0 and depth < 3.",
      accent: "#38bdf8",
      svg: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100">
          <circle cx="25" cy="50" r="14" fill="#38bdf8" />
          <circle cx="75" cy="50" r="13" fill="#818cf8" />
          <line x1="39" y1="50" x2="61" y2="50" stroke="#64748b" strokeWidth="2.5" />
          <polygon points="61 46 68 50 61 54" fill="#64748b" />
          <text x="25" y="54" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">u</text>
          <text x="75" y="54" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">v</text>
        </svg>
      )
    },
    {
      col: "Col 1",
      name: "Sibling Star Fork",
      complexity: "O(1)",
      condition: "deg_out(u) ≥ 1 on G_{t−}",
      significance: "Parent acts as broadcast hub. Captures viral branching hot-spots.",
      accent: "#f59e0b",
      svg: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100">
          <circle cx="25" cy="50" r="15" fill="#f59e0b" />
          <circle cx="75" cy="25" r="11" fill="#38bdf8" />
          <circle cx="75" cy="75" r="11" fill="#34d399" />
          <line x1="40" y1="43" x2="64" y2="30" stroke="#64748b" strokeWidth="2.5" />
          <line x1="40" y1="57" x2="64" y2="70" stroke="#64748b" strokeWidth="2.5" />
          <text x="25" y="54" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">u</text>
          <text x="75" y="29" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">w</text>
          <text x="75" y="79" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">v</text>
        </svg>
      )
    },
    {
      col: "Col 2",
      name: "Deep Directed Chain",
      complexity: "O(1)",
      condition: "depth(u) + 1 ≥ 3",
      significance: "Multi-hop conversation lineage. Captures organic word-of-mouth viral depth.",
      accent: "#6366f1",
      svg: (
        <svg className="w-24 h-20 mx-auto" viewBox="0 0 120 100">
          <circle cx="18" cy="50" r="9" fill="#94a3b8" />
          <circle cx="48" cy="50" r="9" fill="#38bdf8" />
          <circle cx="78" cy="50" r="9" fill="#818cf8" />
          <circle cx="106" cy="50" r="9" fill="#c084fc" />
          <line x1="27" y1="50" x2="39" y2="50" stroke="#64748b" strokeWidth="2" />
          <line x1="57" y1="50" x2="69" y2="50" stroke="#64748b" strokeWidth="2" />
          <line x1="87" y1="50" x2="97" y2="50" stroke="#64748b" strokeWidth="2" />
          <polygon points="38 47 43 50 38 53" fill="#64748b" />
          <polygon points="68 47 73 50 68 53" fill="#64748b" />
          <polygon points="96 47 101 50 96 53" fill="#64748b" />
        </svg>
      )
    },
    {
      col: "Col 3",
      name: "Ping-Pong Dyad",
      complexity: "O(log d_v)",
      condition: "u ∈ N_out(v) on G_{t−}",
      significance: "Mutual interaction u ↔ v. Signals bilateral debate and intense engagement.",
      accent: "#a855f7",
      svg: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100">
          <circle cx="28" cy="50" r="13" fill="#a855f7" />
          <circle cx="72" cy="50" r="13" fill="#a855f7" />
          <path d="M 38 42 C 50 32, 60 32, 62 40" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
          <polygon points="61 36 67 42 59 43" fill="#38bdf8" />
          <path d="M 62 58 C 50 68, 40 68, 38 60" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
          <polygon points="39 64 33 58 41 57" fill="#f43f5e" />
          <text x="28" y="54" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">u</text>
          <text x="72" y="54" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">v</text>
        </svg>
      )
    },
    {
      col: "Col 4",
      name: "Reciprocal 3-Cycle",
      complexity: "O(d_v log d_w)",
      condition: "∃ w ∈ N_out(v) s.t. u ∈ N_out(w)",
      significance: "Directed triangle loop u → v → w → u. Dense conversational triad closure.",
      accent: "#ec4899",
      svg: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100">
          <circle cx="50" cy="22" r="11" fill="#ec4899" />
          <circle cx="25" cy="72" r="11" fill="#ec4899" />
          <circle cx="75" cy="72" r="11" fill="#ec4899" />
          <line x1="42" y1="31" x2="31" y2="61" stroke="#64748b" strokeWidth="2" />
          <line x1="36" y1="72" x2="64" y2="72" stroke="#64748b" strokeWidth="2" />
          <line x1="69" y1="61" x2="58" y2="31" stroke="#64748b" strokeWidth="2" />
          <text x="50" y="26" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">u</text>
          <text x="25" y="76" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">v</text>
          <text x="75" y="76" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">w</text>
        </svg>
      )
    }
  ];

  return (
    <section id="methodology" className="py-24 relative border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-indigo text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]" />
            02 • Proposed Methodology
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            GNN-Free Causal Motif Forecasting
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            Deterministically pre-encoding higher-order causal network motifs and continuous temporal physics on streaming CSR graphs.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 p-1.5 rounded-2xl bg-slate-50 border border-slate-200 max-w-fit mx-auto">
          <button
            onClick={() => setActiveTab('csr')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'csr'
                ? 'bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white shadow-lg shadow-[#6366f1]/30'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <span>1. Dynamic CSR Layout</span>
          </button>
          <button
            onClick={() => setActiveTab('motifs')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'motifs'
                ? 'bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white shadow-lg shadow-[#6366f1]/30'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <span>2. 5 Causal Motifs on G<sub>t−</sub></span>
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'features'
                ? 'bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white shadow-lg shadow-[#6366f1]/30'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <span>3. 15-D Causal Event Vectors</span>
          </button>
          <button
            onClick={() => setActiveTab('sequence')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'sequence'
                ? 'bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white shadow-lg shadow-[#6366f1]/30'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <span>4. Attentive Sequence Head</span>
          </button>
        </div>

        {/* Tab 1: CSR Graph */}
        {activeTab === 'csr' && (
          <div className="glass-panel p-6 sm:p-8 animate-in fade-in duration-300">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded badge-cyan uppercase mb-2 inline-block">
                Contiguous Flat Memory Buffer
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900 mt-2">
                Why Compressed Sparse Row (CSR)? Replacing NetworkX Latency
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-2">
                Standard graph packages (e.g. NetworkX) allocate separate Python dictionary objects per node, causing massive memory fragmentation and pointer-chasing latency in the innermost motif search loop. CasMotif uses a <strong className="text-slate-900">flat 1D contiguous RAM layout</strong>:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-50 border border-[#38bdf8]/30 rounded-xl p-5 shadow-inner">
                <div className="font-mono text-sm font-bold text-ink-sky mb-1">indptr [|V| + 1]</div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Offset pointer array where slice <code className="text-slate-800 font-mono bg-slate-50 px-1 py-0.5 rounded">[indptr[u] : indptr[u+1]]</code> marks the start and end offsets of node <em>u</em>&apos;s out-neighbors.
                </p>
              </div>

              <div className="bg-slate-50 border border-[#818cf8]/30 rounded-xl p-5 shadow-inner">
                <div className="font-mono text-sm font-bold text-ink-indigo mb-1">indices [|E|]</div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Stores target neighbor IDs for directed outgoing edges in contiguous RAM buffers with zero pointer chasing and predictable CPU cache hits.
                </p>
              </div>

              <div className="bg-slate-50 border border-[#34d399]/30 rounded-xl p-5 shadow-inner">
                <div className="font-mono text-sm font-bold text-ink-emerald mb-1">timestamps [|E|]</div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Stores continuous-time arrival timestamp <em>t<sub>i</sub></em> for each edge, enabling microsecond inter-arrival delta computations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display font-bold text-slate-900 text-base">
                    Slice-Based Neighbor Retrieval
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded badge-cyan">O(1) Complexity</span>
                </div>
                <div className="bg-slate-50 border border-slate-200/70 rounded-lg p-3 my-2 font-mono text-sm text-ink-sky">
                  N<sub>out</sub>(u) = indices[indptr[u] : indptr[u+1]]
                </div>
                <p className="text-slate-600 text-xs">Direct zero-copy array slicing into contiguous RAM.</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display font-bold text-slate-900 text-base">
                    Instantaneous Degree Computation
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded badge-emerald">O(1) Complexity</span>
                </div>
                <div className="bg-slate-50 border border-slate-200/70 rounded-lg p-3 my-2 font-mono text-sm text-ink-emerald">
                  deg<sub>out</sub>(u) = indptr[u+1] &minus; indptr[u]
                </div>
                <p className="text-slate-600 text-xs">Single-subtraction O(1) time without neighbor iteration.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 5 Causal Motifs */}
        {activeTab === 'motifs' && (
          <div className="animate-in fade-in duration-300">
            <div className="glass-panel p-6 mb-8 border-l-4 border-l-[#10b981]">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#10b981] pulse-indicator" />
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Strict Causal Guarantee: Motifs Evaluated on G<sub>t−</sub>
                </h3>
              </div>
              <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                For each continuous diffusion event <em>(u, v, t)</em>, motifs are evaluated strictly on the graph state <strong className="text-slate-900">before</strong> inserting edge <em>t</em>. This mathematically eliminates lookahead leakage and replaces expensive multi-layer GNN graph convolutions with instantaneous slice queries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {motifs.map((m) => (
                <div key={m.name} className="glass-card p-6 text-center flex flex-col justify-between group hover:border-slate-300">
                  <div>
                    <div className="h-24 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      {m.svg}
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                        {m.col}
                      </span>
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#06b6d4]/20 text-ink-sky font-semibold border border-[#06b6d4]/30">
                        {m.complexity}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-slate-900 mb-1.5">{m.name}</h4>
                    <div className="font-mono text-xs text-slate-600 bg-slate-50 py-1 px-2 rounded border border-slate-200/70 mb-3">
                      {m.condition}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">{m.significance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: 15-D Features */}
        {activeTab === 'features' && (
          <div className="glass-panel p-6 sm:p-8 animate-in fade-in duration-300">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded badge-purple uppercase mb-2 inline-block">
                Feature Space Architecture
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900 mt-2">
                The 15-Dimensional Causal Event Feature Vector
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-2">
                Decomposed into 4 complementary groups capturing micro-motifs, macro tree hierarchy, arrival velocities, and user dormancy:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Group 1 */}
              <div className="bg-slate-50 border border-[#38bdf8]/30 rounded-xl p-5 shadow-inner">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                  <h4 className="font-display font-bold text-slate-900 text-base">Group 1: Higher-Order Motifs</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded badge-cyan font-bold">5-D (Cols 0–4)</span>
                </div>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-sky">Col 0: motif_single</span>
                    <span className="text-slate-600">¬cycle ∧ ¬dyad ∧ ¬chain ∧ ¬star</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-sky">Col 1: motif_star</span>
                    <span className="text-slate-600">deg_out(u) ≥ 1 on G_t−</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-sky">Col 2: motif_chain</span>
                    <span className="text-slate-600">depth(u) + 1 ≥ 3</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-sky">Col 3: motif_dyad</span>
                    <span className="text-slate-600">u ∈ N_out(v) on G_t−</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-sky">Col 4: motif_cycle</span>
                    <span className="text-slate-600">∃ w ∈ N_out(v) s.t. u ∈ N_out(w)</span>
                  </li>
                </ul>
              </div>

              {/* Group 2 */}
              <div className="bg-slate-50 border border-[#818cf8]/30 rounded-xl p-5 shadow-inner">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                  <h4 className="font-display font-bold text-slate-900 text-base">Group 2: Tree Structure</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded badge-indigo font-bold">3-D (Cols 5, 6, 11)</span>
                </div>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-indigo">Col 5: tree_depth</span>
                    <span className="text-slate-600">depth(v) = depth(u) + 1</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-indigo">Col 6: parent_out_degree</span>
                    <span className="text-slate-600">indptr[u+1] − indptr[u] on G_t−</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-indigo">Col 11: descendant_count</span>
                    <span className="text-slate-600">Σ 1 (Subtree ancestor walk)</span>
                  </li>
                </ul>
              </div>

              {/* Group 3 */}
              <div className="bg-slate-50 border border-[#34d399]/30 rounded-xl p-5 shadow-inner">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                  <h4 className="font-display font-bold text-slate-900 text-base">Group 3: Continuous Time</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded badge-emerald font-bold">4-D (Cols 14, 12, 8, 13)</span>
                </div>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-emerald">Col 14: dt_edge</span>
                    <span className="text-slate-600">t_i − t_{"{i-1}"} (instantaneous velocity)</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-emerald">Col 12: dt_motif</span>
                    <span className="text-slate-600">t_i − min(t_participating edges)</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-emerald">Col 8: t_from_root</span>
                    <span className="text-slate-600">max(0, t_i − t_publish)</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-emerald">Col 13: cumulative_prior</span>
                    <span className="text-slate-600">Total retweets prior to window</span>
                  </li>
                </ul>
              </div>

              {/* Group 4 */}
              <div className="bg-slate-50 border border-[#c084fc]/30 rounded-xl p-5 shadow-inner">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                  <h4 className="font-display font-bold text-slate-900 text-base">Group 4: User Dynamics</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded badge-purple font-bold">3-D (Cols 7, 10, 9)</span>
                </div>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-purple">Col 7: node_count</span>
                    <span className="text-slate-600">|V_{"{t−}"}| (unique active users in graph)</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-purple">Col 10: t_idle</span>
                    <span className="text-slate-600">t_i − max(t_history(u))</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700">
                    <span className="font-mono text-ink-purple">Col 9: i_reactivate</span>
                    <span className="text-slate-600">1[T_idle &gt; 300 s] (dormant reactivation)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Attentive Sequence Learner */}
        {activeTab === 'sequence' && (
          <div className="glass-panel p-6 sm:p-8 animate-in fade-in duration-300">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded badge-emerald uppercase mb-2 inline-block">
                Deep Neural Architecture
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900 mt-2">
                Sequence Architecture Pipeline
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-2">
                Given an observed continuous sequence <code className="font-mono text-ink-sky px-1.5 py-0.5 rounded bg-slate-50">X &isin; &reals;<sup>K &times; 15</sup></code>, the deep sequence learner executes across three stages:
              </p>
            </div>

            <div className="space-y-6">
              {/* Stage 1 */}
              <div className="bg-slate-50 border border-[#6366f1]/30 rounded-xl p-6 shadow-inner">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-[#6366f1] text-white font-bold text-xs flex items-center justify-center">1</span>
                  <h4 className="font-display font-bold text-slate-900 text-lg">
                    Bidirectional GRU Encoder (Temporal Evolution)
                  </h4>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm mb-3">
                  Processes continuous forward-backward context per edge representation:
                </p>
                <div className="bg-slate-50 border border-slate-200/70 rounded-lg p-3 font-mono text-sm text-ink-indigo">
                  H = BiGRU(X), &nbsp;&nbsp; H &isin; &reals;<sup>K &times; 2D</sup>, &nbsp;&nbsp; D = 64
                </div>
              </div>

              {/* Stage 2 */}
              <div className="bg-slate-50 border border-[#06b6d4]/30 rounded-xl p-6 shadow-inner">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-[#06b6d4] text-white font-bold text-xs flex items-center justify-center">2</span>
                  <h4 className="font-display font-bold text-slate-900 text-lg">
                    Learned Attentive Pooling Head (Linear O(K) Complexity)
                  </h4>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm mb-3">
                  Assigns importance weights <em className="text-slate-900">α<sub>j</sub></em> across variable-length history. Padded tokens receive <code className="font-mono text-slate-800 bg-slate-50 px-1 py-0.5 rounded">s<sub>j</sub> = −10⁹</code> before softmax, strictly zeroing out sequence padding masks:
                </p>
                <div className="bg-slate-50 border border-slate-200/70 rounded-lg p-3 font-mono text-sm text-ink-sky overflow-x-auto space-y-1">
                  <div>s<sub>j</sub> = w<sub>2</sub><sup>T</sup> tanh(W<sub>1</sub> h<sub>j</sub> + b<sub>1</sub>) + b<sub>2</sub></div>
                  <div>&alpha;<sub>j</sub> = exp(s<sub>j</sub>) / &sum;<sub>k</sub> exp(s<sub>k</sub>), &nbsp;&nbsp; c = &sum;<sub>j=1</sub><sup>K</sup> &alpha;<sub>j</sub> h<sub>j</sub></div>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="bg-slate-50 border border-[#10b981]/30 rounded-xl p-6 shadow-inner">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-[#10b981] text-white font-bold text-xs flex items-center justify-center">3</span>
                  <h4 className="font-display font-bold text-slate-900 text-lg">
                    Multi-Layer Perceptron (MLP) Regression Head
                  </h4>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm mb-3">
                  Maps pooled cascade context vector <em className="text-slate-900">c</em> to log-space popularity increment:
                </p>
                <div className="bg-slate-50 border border-slate-200/70 rounded-lg p-3 font-mono text-sm text-ink-emerald overflow-x-auto space-y-1">
                  <div>y&#770; = MLP(c) = log<sub>2</sub>(&Delta;P&#770; + 1)</div>
                  <div>&#8466;<sub>MSLE</sub> = (1 / B) &sum;<sub>i=1</sub><sup>B</sup> (y<sub>i</sub> &minus; y&#770;<sub>i</sub>)<sup>2</sup></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
