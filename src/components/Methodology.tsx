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
      svg: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100">
          <circle cx="25" cy="50" r="14" fill="#38bdf8" />
          <circle cx="75" cy="50" r="12" fill="#818cf8" />
          <line x1="39" y1="50" x2="63" y2="50" stroke="#fff" strokeWidth="2.5" />
          <polygon points="63 46 70 50 63 54" fill="#fff" />
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
      svg: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100">
          <circle cx="25" cy="50" r="15" fill="#f59e0b" />
          <circle cx="75" cy="25" r="11" fill="#38bdf8" />
          <circle cx="75" cy="75" r="11" fill="#34d399" />
          <line x1="40" y1="43" x2="64" y2="30" stroke="#fff" strokeWidth="2.5" />
          <line x1="40" y1="57" x2="64" y2="70" stroke="#fff" strokeWidth="2.5" />
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
      svg: (
        <svg className="w-20 h-16 mx-auto" viewBox="0 0 120 100">
          <circle cx="20" cy="50" r="10" fill="#94a3b8" />
          <circle cx="50" cy="50" r="10" fill="#38bdf8" />
          <circle cx="80" cy="50" r="10" fill="#818cf8" />
          <circle cx="108" cy="50" r="10" fill="#c084fc" />
          <line x1="30" y1="50" x2="40" y2="50" stroke="#fff" strokeWidth="2" />
          <line x1="60" y1="50" x2="70" y2="50" stroke="#fff" strokeWidth="2" />
          <line x1="90" y1="50" x2="98" y2="50" stroke="#fff" strokeWidth="2" />
        </svg>
      )
    },
    {
      col: "Col 3",
      name: "Ping-Pong Dyad",
      complexity: "O(log d_v)",
      condition: "u ∈ N_out(v) in G_{t−}",
      significance: "Mutual interaction u ↔ v. Signals bilateral debate and intense engagement.",
      svg: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100">
          <circle cx="28" cy="50" r="13" fill="#a855f7" />
          <circle cx="72" cy="50" r="13" fill="#a855f7" />
          <path d="M 38 42 C 50 32, 60 32, 62 40" fill="none" stroke="#fff" strokeWidth="2.2" />
          <path d="M 62 58 C 50 68, 40 68, 38 60" fill="none" stroke="#fff" strokeWidth="2.2" />
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
      svg: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100">
          <circle cx="50" cy="22" r="11" fill="#ec4899" />
          <circle cx="25" cy="72" r="11" fill="#ec4899" />
          <circle cx="75" cy="72" r="11" fill="#ec4899" />
          <line x1="42" y1="31" x2="31" y2="61" stroke="#fff" strokeWidth="2" />
          <line x1="36" y1="72" x2="64" y2="72" stroke="#fff" strokeWidth="2" />
          <line x1="69" y1="61" x2="58" y2="31" stroke="#fff" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <section id="methodology" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#818cf8] block mb-2">
            02 • Proposed Methodology
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            GNN-Free Causal Motif Forecasting
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Deterministically pre-encoding higher-order causal network motifs and continuous temporal physics on streaming CSR graphs.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('csr')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'csr'
                ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            1. Dynamic CSR Representation
          </button>
          <button
            onClick={() => setActiveTab('motifs')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'motifs'
                ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            2. 5 Causal Motifs on G_t−
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'features'
                ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            3. 15-D Causal Event Vectors
          </button>
          <button
            onClick={() => setActiveTab('sequence')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'sequence'
                ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            4. Attentive Sequence Learner
          </button>
        </div>

        {/* Tab 1: CSR Graph */}
        {activeTab === 'csr' && (
          <div className="glass-card p-8">
            <h3 className="font-display font-bold text-2xl text-white mb-3">
              Why Compressed Sparse Row (CSR)? Replacing NetworkX Overhead
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Standard graph packages (e.g. NetworkX) allocate separate Python dictionary objects per node, causing memory fragmentation and pointer-chasing latency in the innermost motif search loop. CasMotif uses a <strong className="text-white">flat 1D contiguous RAM layout</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#090d16] border border-white/10 rounded-xl p-5">
                <div className="font-mono text-sm font-bold text-[#38bdf8] mb-1">indptr [|V| + 1]</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Offset pointer array where slice <code className="text-slate-200">[indptr[u] : indptr[u+1]]</code> marks the start and end offsets of node <em>u</em>&apos;s out-neighbors.
                </p>
              </div>

              <div className="bg-[#090d16] border border-white/10 rounded-xl p-5">
                <div className="font-mono text-sm font-bold text-[#818cf8] mb-1">indices [|E|]</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Stores target neighbor IDs for directed outgoing edges in contiguous RAM buffers with zero pointer chasing.
                </p>
              </div>

              <div className="bg-[#090d16] border border-white/10 rounded-xl p-5">
                <div className="font-mono text-sm font-bold text-[#34d399] mb-1">timestamps [|E|]</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Stores continuous-time arrival timestamp <em>t<sub>i</sub></em> for each edge, enabling microsecond inter-arrival delta computations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-5">
                <h4 className="font-display font-semibold text-white text-base mb-2">
                  Slice-Based Neighbor Retrieval in O(1)
                </h4>
                <div className="math-block text-sm mb-2">
                  {"N_{out}(u) = \\text{indices}[\\text{indptr}[u] : \\text{indptr}[u+1]]"}
                </div>
                <p className="text-slate-400 text-xs">Direct zero-copy array slicing into contiguous RAM.</p>
              </div>

              <div className="bg-[#06b6d4]/10 border border-[#06b6d4]/30 rounded-xl p-5">
                <h4 className="font-display font-semibold text-white text-base mb-2">
                  Instantaneous Degree in O(1)
                </h4>
                <div className="math-block text-sm mb-2">
                  {"\\text{deg}_{out}(u) = \\text{indptr}[u+1] - \\text{indptr}[u]"}
                </div>
                <p className="text-slate-400 text-xs">Single-subtraction O(1) time without neighbor iteration.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 5 Causal Motifs */}
        {activeTab === 'motifs' && (
          <div>
            <div className="glass-card p-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#10b981] pulse-indicator" />
                <h3 className="font-display font-bold text-xl text-white">
                  Strict Causal Guarantee: Motifs Evaluated on G<sub>t−</sub>
                </h3>
              </div>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                For each continuous diffusion event <em>(u, v, t)</em>, motifs are evaluated strictly on the graph state <strong className="text-white">before</strong> inserting edge <em>t</em>. This mathematically eliminates lookahead leakage and replaces expensive multi-layer GNN graph convolutions with instantaneous slice queries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {motifs.map((m) => (
                <div key={m.name} className="glass-card p-5 text-center flex flex-col justify-between">
                  <div>
                    <div className="h-20 flex items-center justify-center mb-3">{m.svg}</div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/10 text-slate-300">
                        {m.col}
                      </span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#06b6d4]/20 text-[#38bdf8]">
                        {m.complexity}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-white mb-1.5">{m.name}</h4>
                    <p className="font-mono text-xs text-slate-400 mb-2">{m.condition}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{m.significance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: 15-D Features */}
        {activeTab === 'features' && (
          <div className="glass-card p-8">
            <h3 className="font-display font-bold text-2xl text-white mb-3">
              The 15-Dimensional Causal Event Feature Vector
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Decomposed into 4 complementary groups capturing micro-motifs, macro tree hierarchy, arrival velocities, and user dormancy:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Group 1 */}
              <div className="bg-[#090d16] border border-white/10 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                  <h4 className="font-display font-bold text-white text-base">Group 1: Higher-Order Motifs</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#38bdf8]/15 text-[#38bdf8]">5-D (Cols 0–4)</span>
                </div>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#38bdf8]">Col 0: motif_single</span>
                    <span className="text-slate-400">¬cycle ∧ ¬dyad ∧ ¬chain ∧ ¬star</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#38bdf8]">Col 1: motif_star</span>
                    <span className="text-slate-400">deg_out(u) ≥ 1 on G_t−</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#38bdf8]">Col 2: motif_chain</span>
                    <span className="text-slate-400">depth(u) + 1 ≥ 3</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#38bdf8]">Col 3: motif_dyad</span>
                    <span className="text-slate-400">u ∈ N_out(v) on G_t−</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#38bdf8]">Col 4: motif_cycle</span>
                    <span className="text-slate-400">∃ w ∈ N_out(v) s.t. u ∈ N_out(w)</span>
                  </li>
                </ul>
              </div>

              {/* Group 2 */}
              <div className="bg-[#090d16] border border-white/10 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                  <h4 className="font-display font-bold text-white text-base">Group 2: Tree Structure</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#818cf8]/15 text-[#818cf8]">3-D (Cols 5, 6, 11)</span>
                </div>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#818cf8]">Col 5: tree_depth</span>
                    <span className="text-slate-400">depth(v) = depth(u) + 1</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#818cf8]">Col 6: parent_out_degree</span>
                    <span className="text-slate-400">indptr[u+1] − indptr[u] on G_t−</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#818cf8]">Col 11: descendant_count</span>
                    <span className="text-slate-400">Σ_{"{w ∈ Subtree(u)}"} 1 (ancestor walk)</span>
                  </li>
                </ul>
              </div>

              {/* Group 3 */}
              <div className="bg-[#090d16] border border-white/10 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                  <h4 className="font-display font-bold text-white text-base">Group 3: Continuous Time</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#34d399]/15 text-[#34d399]">4-D (Cols 14, 12, 8, 13)</span>
                </div>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#34d399]">Col 14: dt_edge</span>
                    <span className="text-slate-400">t_i − t_{"{i-1}"} (instantaneous velocity)</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#34d399]">Col 12: dt_motif</span>
                    <span className="text-slate-400">t_i − min(t_participating edges)</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#34d399]">Col 8: t_from_root</span>
                    <span className="text-slate-400">max(0, t_i − t_publish)</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#34d399]">Col 13: cumulative_prior</span>
                    <span className="text-slate-400">Total retweets prior to window</span>
                  </li>
                </ul>
              </div>

              {/* Group 4 */}
              <div className="bg-[#090d16] border border-white/10 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                  <h4 className="font-display font-bold text-white text-base">Group 4: User Dynamics</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#c084fc]/15 text-[#c084fc]">3-D (Cols 7, 10, 9)</span>
                </div>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#c084fc]">Col 7: node_count</span>
                    <span className="text-slate-400">|V_{"{t−}"}| (unique active users in graph)</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#c084fc]">Col 10: t_idle</span>
                    <span className="text-slate-400">t_i − max(t_history(u))</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-300">
                    <span className="font-mono text-[#c084fc]">Col 9: i_reactivate</span>
                    <span className="text-slate-400">1[T_idle &gt; 300 s] (dormant reactivation)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Attentive Sequence Learner */}
        {activeTab === 'sequence' && (
          <div className="glass-card p-8">
            <h3 className="font-display font-bold text-2xl text-white mb-3">
              Sequence Architecture Pipeline
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Given an observed continuous sequence <code className="font-mono text-[#38bdf8]">X ∈ ℝ^{"{K × 15}"}</code>, the deep sequence learner executes across three stages:
            </p>

            <div className="space-y-6">
              {/* Stage 1 */}
              <div className="bg-[#090d16] border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#6366f1] text-white font-bold text-xs flex items-center justify-center">1</span>
                  <h4 className="font-display font-bold text-white text-lg">
                    Bidirectional GRU Encoder (Temporal Evolution)
                  </h4>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mb-3">
                  Processes continuous forward-backward context per edge representation:
                </p>
                <div className="math-block text-sm">
                  {"H = \\text{BiGRU}(X), \\quad H \\in \\mathbb{R}^{K \\times 2D}, \\quad D = 64"}
                </div>
              </div>

              {/* Stage 2 */}
              <div className="bg-[#090d16] border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#06b6d4] text-white font-bold text-xs flex items-center justify-center">2</span>
                  <h4 className="font-display font-bold text-white text-lg">
                    Learned Attentive Pooling Head (Linear O(K) Complexity)
                  </h4>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mb-3">
                  Assigns importance weights <em className="text-white">α<sub>j</sub></em> across variable-length history. Padded tokens receive <code className="font-mono text-slate-200">s_j = −10⁹</code> before softmax, strictly zeroing out sequence padding masks:
                </p>
                <div className="math-block text-sm">
                  {"s_j = w_2^T \\tanh(W_1 h_j + b_1) + b_2, \\quad \\alpha_j = \\frac{\\exp(s_j)}{\\sum_k \\exp(s_k)}, \\quad c = \\sum_{j=1}^K \\alpha_j h_j"}
                </div>
              </div>

              {/* Stage 3 */}
              <div className="bg-[#090d16] border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#10b981] text-white font-bold text-xs flex items-center justify-center">3</span>
                  <h4 className="font-display font-bold text-white text-lg">
                    Multi-Layer Perceptron (MLP) Regression Head
                  </h4>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mb-3">
                  Maps pooled cascade context vector <em className="text-white">c</em> to log-space popularity increment:
                </p>
                <div className="math-block text-sm">
                  {"\\hat{y} = \\text{MLP}(c) = \\log_2(\\Delta\\hat{P} + 1), \\quad \\mathcal{L}_{MSLE} = \\frac{1}{B} \\sum_{i=1}^B (y_i - \\hat{y}_i)^2"}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
