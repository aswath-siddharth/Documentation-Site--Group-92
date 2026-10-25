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
    title: "1. Problem & Cascades",
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
    title: "2. Dynamic CSR Memory",
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
    title: "3. 5 Causal Motifs",
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
    title: "4. Neural Sequence Head",
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
    title: "5. SOTA Benchmark",
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
    <section id="video-demo" className="py-24 relative bg-slate-50/70 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-purple text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
            05 • Demonstration Showcase
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Interactive Walkthrough Demo
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            Experience the visual slide presentation showcasing each core module, dynamic CSR arrays, causal motif extraction, and multi-seed evaluations.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="glass-panel overflow-hidden border border-slate-200 shadow-2xl shadow-slate-900/10">
          {/* Main Visual Display Screen */}
          <div className="p-8 sm:p-14 bg-gradient-to-b from-slate-50 to-[var(--bg-elevated)] min-h-[440px] flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Screen background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl flex flex-col items-center">
              <span className="inline-block font-mono text-xs font-bold px-3 py-1 rounded-full badge-indigo mb-4 uppercase tracking-wider">
                {currentChapter.badge}
              </span>

              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 tracking-tight text-balance">
                {currentChapter.headline}
              </h3>

              {/* Visual Mini Graphic */}
              <div className="w-full max-w-2xl mb-8">
                {currentChapter.visualType === 'problem' && (
                  <div className="glass-card p-6 flex flex-col sm:flex-row items-center justify-around gap-4 border border-slate-200">
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f59e0b] to-[#fbbf24] text-white font-bold flex items-center justify-center mx-auto mb-2 shadow-lg shadow-[#f59e0b]/30 text-lg">
                        u0
                      </div>
                      <span className="text-xs font-medium text-slate-700">Root Tweet</span>
                    </div>
                    <div className="text-2xl text-ink-indigo rotate-90 sm:rotate-0 font-bold">&rarr;</div>
                    <div className="space-y-2">
                      <div className="flex gap-2 justify-center">
                        <span className="text-xs font-mono px-2.5 py-1 rounded badge-cyan font-bold">t = 12s (u1)</span>
                        <span className="text-xs font-mono px-2.5 py-1 rounded badge-cyan font-bold">t = 45s (u2)</span>
                      </div>
                      <div className="text-xs px-3 py-1.5 rounded-lg badge-emerald font-semibold">
                        T_obs = 15m &rarr; Predict 24h &Delta;P increment
                      </div>
                    </div>
                  </div>
                )}

                {currentChapter.visualType === 'csr' && (
                  <div className="glass-card p-6 text-left font-mono text-xs space-y-3 border border-slate-200">
                    <div className="text-ink-sky font-bold text-sm">Dynamic 1D Contiguous Buffers:</div>
                    <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                      <span className="text-slate-600 w-16 font-bold">indptr:</span>
                      <span className="bg-[#6366f1]/25 border border-[#6366f1] px-3 py-1 rounded text-slate-900 font-bold">[0, 2, 3, 4, 4]</span>
                      <span className="text-slate-500 text-[11px]">(|V|+1 pointers)</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                      <span className="text-slate-600 w-16 font-bold">indices:</span>
                      <span className="bg-[#06b6d4]/25 border border-[#06b6d4] px-3 py-1 rounded text-slate-900 font-bold">[1, 2, 2, 3]</span>
                      <span className="text-slate-500 text-[11px]">(contiguous neighbors)</span>
                    </div>
                  </div>
                )}

                {currentChapter.visualType === 'motifs' && (
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="glass-card p-4 border border-slate-200">
                      <div className="text-sm font-bold text-ink-sky mb-1">Star Fork</div>
                      <div className="text-xs text-slate-600 font-mono">v &larr; u &rarr; w (O(1))</div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded badge-cyan mt-2 inline-block">Broadcast Hub</span>
                    </div>
                    <div className="glass-card p-4 border border-slate-200">
                      <div className="text-sm font-bold text-ink-indigo mb-1">Deep Chain</div>
                      <div className="text-xs text-slate-600 font-mono">depth &ge; 3 (O(1))</div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded badge-indigo mt-2 inline-block">Viral Depth</span>
                    </div>
                    <div className="glass-card p-4 border border-slate-200">
                      <div className="text-sm font-bold text-[#ec4899] mb-1">3-Cycle Triad</div>
                      <div className="text-xs text-slate-600 font-mono">u &rarr; v &rarr; w &rarr; u</div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#ec4899]/15 text-ink-pink border border-[#ec4899]/30 mt-2 inline-block">Dense Closure</span>
                    </div>
                  </div>
                )}

                {currentChapter.visualType === 'neural' && (
                  <div className="glass-card p-5 flex items-center justify-between font-mono text-xs text-center border border-slate-200">
                    <div className="text-ink-sky font-bold">15-D Vectors<br /><span className="text-slate-600 text-[10px]">[B, K, 15]</span></div>
                    <div className="text-ink-indigo font-bold">&rarr;</div>
                    <div className="text-ink-indigo font-bold">BiGRU (D=64)<br /><span className="text-slate-600 text-[10px]">[B, K, 128]</span></div>
                    <div className="text-ink-indigo font-bold">&rarr;</div>
                    <div className="text-ink-emerald font-bold">Attentive Pool<br /><span className="text-slate-600 text-[10px]">c = &Sigma; &alpha;<sub>j</sub> h<sub>j</sub></span></div>
                    <div className="text-ink-indigo font-bold">&rarr;</div>
                    <div className="text-ink-amber font-bold">MLP Head<br /><span className="text-slate-600 text-[10px]">log₂(&Delta;P + 1)</span></div>
                  </div>
                )}

                {currentChapter.visualType === 'benchmarks' && (
                  <div className="glass-card p-5 flex justify-around text-center border border-[#10b981]/30">
                    <div>
                      <div className="font-display font-black text-3xl text-ink-emerald">1.9845</div>
                      <div className="text-xs text-slate-600 mt-1">CasMotif MSLE (3-Seed)</div>
                    </div>
                    <div>
                      <div className="font-display font-black text-3xl text-ink-indigo">1.9864</div>
                      <div className="text-xs text-slate-600 mt-1">CasSubTS SOTA MSLE</div>
                    </div>
                    <div>
                      <div className="font-display font-black text-3xl text-ink-sky">3.1×</div>
                      <div className="text-xs text-slate-600 mt-1">Fewer Parameters (50k vs 154k)</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Narration */}
              <p className="text-slate-700 text-sm max-w-2xl leading-relaxed mb-6">
                {currentChapter.narration}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-left text-xs text-slate-600">
                {currentChapter.bullets.map((b, i) => (
                  <div key={i} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 flex items-start gap-2">
                    <span className="text-ink-emerald font-bold">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Control Bar */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200">
            {/* Scrubber Timeline */}
            <div
              className="w-full h-2.5 bg-slate-100 rounded-full cursor-pointer relative mb-5 overflow-hidden group"
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
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-100 text-xs font-semibold"
                >
                  ⏮ Prev
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6366f1] to-[#4f46e5] hover:brightness-110 text-white flex items-center justify-center shadow-lg shadow-[#6366f1]/30 transition-transform active:scale-95"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? '⏸' : '▶'}
                </button>

                <button
                  onClick={() => selectChapter(Math.min(CHAPTERS.length - 1, currentIdx + 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-100 text-xs font-semibold"
                >
                  Next ⏭
                </button>

                <span className="font-mono text-xs text-slate-600 ml-2">
                  {curM}:{curS} / {totM}:{totS}
                </span>
              </div>

              {/* Chapter Buttons */}
              <div className="flex flex-wrap gap-1.5">
                {CHAPTERS.map((chap, i) => (
                  <button
                    key={chap.id}
                    onClick={() => selectChapter(i)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      i === currentIdx
                        ? 'bg-[#6366f1]/30 border border-[#818cf8] text-slate-900 shadow-sm'
                        : 'bg-slate-50 border border-slate-200/70 text-slate-600 hover:text-slate-900'
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
