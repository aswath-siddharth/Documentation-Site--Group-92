'use client';

import React, { useState, useEffect } from 'react';

interface WalkthroughChapter {
  id: string;
  title: string;
  badge: string;
  headline: string;
  durationSec: number;
  narration: string;
  bullets: string[];
  visualType: 'problem' | 'csr' | 'motifs' | 'neural' | 'benchmarks';
}

const CHAPTERS: WalkthroughChapter[] = [
  {
    id: "problem",
    title: "1. Problem & Information Cascades",
    badge: "TASK FORMULATION",
    headline: "Forecasting 24-Hour Virality from 15-Minute Continuous Signals",
    durationSec: 15,
    narration: "Online content spreads via continuous-time directed diffusion cascades. Over 90% of threads terminate in fewer than 10 retweets, while rare viral cascades explode across multiple orders of magnitude. The objective is to observe the initial 15 minutes or 1 hour and forecast the total 24-hour increment in scale-invariant log2 space.",
    bullets: [
      "Directed diffusion stream: E = {(u_i, v_i, t_i)}",
      "Regression objective: y = log₂(ΔP + 1), evaluated via MSLE",
      "Core challenges: Heavy-tail skew, burst dormancy latencies, and topological branching."
    ],
    visualType: "problem"
  },
  {
    id: "csr",
    title: "2. Dynamic CSR Graph Memory",
    badge: "SUB-QUADRATIC COMPLEXITY",
    headline: "Replacing Heavy Python Objects with Contiguous 1D RAM Slices",
    durationSec: 20,
    narration: "Traditional graph libraries like NetworkX allocate separate Python dict objects per node, causing massive memory fragmentation in the innermost motif search loop. CasMotif utilizes dynamic 1D arrays: indptr for offset pointers, indices for target neighbors, and timestamps for continuous time. Out-neighbors are accessed in O(1) contiguous RAM slices, and node out-degree is computed via a single subtraction.",
    bullets: [
      "Flat 1D memory buffers: O(|V| + |E|) contiguous RAM layout",
      "Neighbor slice: N_out(u) = indices[indptr[u] : indptr[u+1]] in O(1)",
      "Instantaneous degree: deg_out(u) = indptr[u+1] − indptr[u] in O(1)"
    ],
    visualType: "csr"
  },
  {
    id: "motifs",
    title: "3. 5 Causal Motifs on G_{t−}",
    badge: "STRICT CAUSALITY GUARANTEE",
    headline: "Zero Lookahead Leakage via Micro-Topological Slice Evaluation",
    durationSec: 25,
    narration: "Instead of forcing a GPU-bound GNN to recursively message-pass across the entire graph at every epoch, we deterministically evaluate 5 higher-order causal network motifs strictly on the graph state before edge insertion (G_{t−}). This captures broadcast star hubs, deep conversation penetration, bilateral ping-pong dyads, and reciprocal 3-cycle closures with zero temporal lookahead leakage.",
    bullets: [
      "Col 0: Single Direct Reply (baseline 1-to-1 linear forwarding)",
      "Col 1: Sibling Star Fork (broadcast hub expansion, O(1))",
      "Col 2: Deep Directed Chain (multi-hop lineage depth ≥ 3, O(1))",
      "Col 3: Ping-Pong Dyad (mutual bilateral interaction, O(log d))",
      "Col 4: Reciprocal 3-Cycle (dense conversational triad closure)"
    ],
    visualType: "motifs"
  },
  {
    id: "neural",
    title: "4. BiGRU & Attentive Pooling",
    badge: "NEURAL SEQUENCE LEARNER",
    headline: "Linear O(K) Attention Pooling with Masked Softmax",
    durationSec: 25,
    narration: "Each edge is transformed into a rich 15-dimensional event vector combining motifs, tree hierarchy, continuous-time intervals, and user reactivation states. A Bidirectional GRU (D=64) tracks temporal evolution, followed by a learned attentive pooling head that scores the predictive importance of each historical event in linear O(K) time, masking out padded tokens.",
    bullets: [
      "BiGRU Encoder: H = BiGRU(X), H ∈ ℝ^{K × 128}",
      "Attentive Pooling: s_j = w₂^T tanh(W₁ h_j + b₁) + b₂, with masked padding (−10⁹)",
      "Bottleneck MLP Head: Maps context vector c directly to predicted log2 increment."
    ],
    visualType: "neural"
  },
  {
    id: "benchmarks",
    title: "5. Controlled SOTA Benchmark",
    badge: "42,186 SINA WEIBO CASCADES",
    headline: "Statistical Parity with 2025 SOTA at 3.1× Fewer Parameters",
    durationSec: 25,
    narration: "Evaluated on the widely referenced Sina Weibo benchmark using a strict chronological 70:15:15 split across 3 random seeds, CasMotif achieves an MSLE of 1.9845—matching 2025 SOTA CasSubTS (1.9864, p=0.93) while using only 49,824 parameters compared to CasSubTS's 153,970 parameters. Furthermore, at an ultra-early 15-minute observation window, CasMotif achieves 2.4423 MSLE and R² of 0.5757.",
    bullets: [
      "3.1× parameter advantage: 49.8k vs 154k in CasSubTS",
      "3-Model Ensemble: 1.9516 MSLE (149k params, beating 462k CasSubTS ensemble)",
      "Ultra-early 15m prediction: 4× earlier than standard 1h baselines"
    ],
    visualType: "benchmarks"
  }
];

export default function VideoWalkthrough() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [elapsedSec, setElapsedSec] = useState<number>(0);

  const totalDuration = CHAPTERS.reduce((acc, c) => acc + c.durationSec, 0);
  const currentChapter = CHAPTERS[currentIdx];

  // Playback timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setElapsedSec((prev) => {
          const next = prev + 0.5;
          let acc = 0;
          let newChap = 0;
          for (let i = 0; i < CHAPTERS.length; i++) {
            acc += CHAPTERS[i].durationSec;
            if (next < acc) {
              newChap = i;
              break;
            }
            if (i === CHAPTERS.length - 1) newChap = i;
          }
          if (newChap !== currentIdx) {
            setCurrentIdx(newChap);
          }
          if (next >= totalDuration) {
            setIsPlaying(false);
            return 0;
          }
          return next;
        });
      }, 500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentIdx, totalDuration]);

  const selectChapter = (index: number) => {
    setCurrentIdx(index);
    let sum = 0;
    for (let i = 0; i < index; i++) {
      sum += CHAPTERS[i].durationSec;
    }
    setElapsedSec(sum);
  };

  const progressPct = Math.min(100, (elapsedSec / totalDuration) * 100);
  const curM = Math.floor(elapsedSec / 60);
  const curS = Math.floor(elapsedSec % 60).toString().padStart(2, '0');
  const totM = Math.floor(totalDuration / 60);
  const totS = Math.floor(totalDuration % 60).toString().padStart(2, '0');

  return (
    <section id="video-demo" className="py-20 relative bg-[#090d16]/60 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#c084fc] block mb-2">
            05 • Demonstration Showcase
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Demonstration Video &amp; Interactive Walkthrough
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Experience the interactive visual presentation showcasing each core module, dynamic CSR arrays, causal motif extraction, and multi-seed evaluations.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="bg-[#151d30] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
          {/* Main Visual Display Screen */}
          <div className="p-8 sm:p-12 bg-[#05070c] min-h-[420px] flex flex-col justify-center items-center text-center relative overflow-hidden">
            <span className="inline-block font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#6366f1]/15 text-[#818cf8] border border-[#6366f1]/30 mb-4">
              {currentChapter.badge}
            </span>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white max-w-3xl mb-6 tracking-tight">
              {currentChapter.headline}
            </h3>

            {/* Visual Mini Graphic */}
            <div className="w-full max-w-xl mb-6">
              {currentChapter.visualType === 'problem' && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-around">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[#f59e0b] text-white font-bold flex items-center justify-center mx-auto mb-2 shadow-lg shadow-[#f59e0b]/30">
                      u0
                    </div>
                    <span className="text-xs text-slate-300">Root Message</span>
                  </div>
                  <div className="text-2xl text-[#6366f1]">➔</div>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#38bdf8]/20 text-[#38bdf8]">t = 12s (u1)</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#38bdf8]/20 text-[#38bdf8]">t = 45s (u2)</span>
                    </div>
                    <div className="text-xs px-3 py-1 rounded bg-[#10b981]/15 border border-[#10b981]/30 text-[#34d399]">
                      T_obs = 15m ➔ Predict 24h Increment
                    </div>
                  </div>
                </div>
              )}

              {currentChapter.visualType === 'csr' && (
                <div className="bg-[#0f172a] border border-white/10 rounded-xl p-5 text-left font-mono text-xs space-y-2">
                  <div className="text-[#38bdf8] font-bold">Dynamic 1D Contiguous Buffers:</div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 w-16">indptr:</span>
                    <span className="bg-[#6366f1]/20 border border-[#6366f1] px-2.5 py-0.5 rounded text-white">[0, 2, 3, 4, 4]</span>
                    <span className="text-slate-500 text-[11px]">(|V|+1 pointers)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 w-16">indices:</span>
                    <span className="bg-[#06b6d4]/20 border border-[#06b6d4] px-2.5 py-0.5 rounded text-white">[1, 2, 2, 3]</span>
                    <span className="text-slate-500 text-[11px]">(contiguous neighbors)</span>
                  </div>
                </div>
              )}

              {currentChapter.visualType === 'motifs' && (
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                    <div className="text-xs font-bold text-[#38bdf8]">Star Fork</div>
                    <div className="text-[10px] text-slate-400">v ← u → w (O(1))</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                    <div className="text-xs font-bold text-[#818cf8]">Deep Chain</div>
                    <div className="text-[10px] text-slate-400">depth ≥ 3 (O(1))</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                    <div className="text-xs font-bold text-[#ec4899]">3-Cycle Triad</div>
                    <div className="text-[10px] text-slate-400">u → v → w → u</div>
                  </div>
                </div>
              )}

              {currentChapter.visualType === 'neural' && (
                <div className="bg-black/40 border border-white/10 rounded-xl p-4 flex items-center justify-between font-mono text-[11px] text-center">
                  <div className="text-[#38bdf8]">15-D Vectors<br />[B, K_max, 15]</div>
                  <div className="text-[#6366f1]">➔</div>
                  <div className="text-[#818cf8]">BiGRU (D=64)<br />[B, K_max, 128]</div>
                  <div className="text-[#6366f1]">➔</div>
                  <div className="text-[#34d399]">Attentive Pool<br />c = Σ α_j h_j</div>
                  <div className="text-[#6366f1]">➔</div>
                  <div className="text-[#f59e0b]">MLP Head<br />log₂(ΔP̂ + 1)</div>
                </div>
              )}

              {currentChapter.visualType === 'benchmarks' && (
                <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-xl p-4 flex justify-around text-center">
                  <div>
                    <div className="font-display font-bold text-2xl text-[#34d399]">1.9845</div>
                    <div className="text-[11px] text-slate-400">CasMotif MSLE (3-Seed)</div>
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl text-[#818cf8]">1.9864</div>
                    <div className="text-[11px] text-slate-400">CasSubTS SOTA MSLE</div>
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl text-[#38bdf8]">3.1×</div>
                    <div className="text-[11px] text-slate-400">Fewer Parameters (50k vs 154k)</div>
                  </div>
                </div>
              )}
            </div>

            {/* Narration */}
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed mb-4">
              {currentChapter.narration}
            </p>

            <ul className="text-left text-xs text-slate-400 space-y-1.5 max-w-xl">
              {currentChapter.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#34d399] font-bold">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Control Bar */}
          <div className="p-4 sm:p-5 bg-[#090d16] border-t border-white/10">
            {/* Scrubber Timeline */}
            <div
              className="w-full h-2 bg-white/10 rounded-full cursor-pointer relative mb-4 overflow-hidden"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                const targetSec = pct * totalDuration;
                setElapsedSec(targetSec);
                let acc = 0;
                for (let i = 0; i < CHAPTERS.length; i++) {
                  acc += CHAPTERS[i].durationSec;
                  if (targetSec <= acc) {
                    setCurrentIdx(i);
                    break;
                  }
                }
              }}
            >
              <div
                className="h-full bg-gradient-to-r from-[#6366f1] via-[#06b6d4] to-[#10b981] rounded-full transition-all duration-150"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => selectChapter(Math.max(0, currentIdx - 1))}
                  className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 text-xs"
                >
                  ⏮ Prev
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-9 h-9 rounded-full bg-[#6366f1] hover:bg-[#4f46e5] text-white flex items-center justify-center shadow-lg shadow-[#6366f1]/30 transition-transform active:scale-95"
                >
                  {isPlaying ? '⏸' : '▶'}
                </button>

                <button
                  onClick={() => selectChapter(Math.min(CHAPTERS.length - 1, currentIdx + 1))}
                  className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 text-xs"
                >
                  Next ⏭
                </button>

                <span className="font-mono text-xs text-slate-400 ml-2">
                  {curM}:{curS} / {totM}:{totS}
                </span>
              </div>

              {/* Chapter Buttons */}
              <div className="flex flex-wrap gap-1.5">
                {CHAPTERS.map((chap, i) => (
                  <button
                    key={chap.id}
                    onClick={() => selectChapter(i)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      i === currentIdx
                        ? 'bg-[#6366f1]/25 border border-[#818cf8] text-white shadow-sm'
                        : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {chap.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
