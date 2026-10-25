'use client';

import React, { useState } from 'react';

export default function PipelineComparison() {
  const [pipeline, setPipeline] = useState<'weibo' | 'reddit'>('weibo');

  return (
    <section id="pipelines" className="py-24 relative bg-slate-50/60 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
            03 • System Architecture
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            End-to-End Processing Pipelines
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            Switch between the published Sina Weibo benchmark system (Pipeline W) and the decoupled Reddit exploration framework (Pipelines A, B, C).
          </p>
        </div>

        {/* Switcher Buttons */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl bg-slate-50 border border-slate-200 flex gap-2">
            <button
              onClick={() => setPipeline('weibo')}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                pipeline === 'weibo'
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white shadow-lg shadow-[#6366f1]/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>Pipeline W (Sina Weibo Benchmark)</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 font-bold">42.2k</span>
            </button>
            <button
              onClick={() => setPipeline('reddit')}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                pipeline === 'reddit'
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white shadow-lg shadow-[#6366f1]/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>Pipelines A, B, C (Reddit Virality)</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 font-bold">Decoupled</span>
            </button>
          </div>
        </div>

        {/* Weibo Pipeline W */}
        {pipeline === 'weibo' && (
          <div className="glass-panel p-6 sm:p-8 animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
              <div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded badge-cyan uppercase mb-2 inline-block">
                  Continuous Regression Benchmark • 42,186 Cascades
                </span>
                <h3 className="font-display font-bold text-2xl text-slate-900 mt-1">
                  Pipeline W Workflow: Continuous Ingestion to 24-Hour Popularity
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                Chronological 70:15:15 Split
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Step 1 */}
              <div className="glass-card p-6 border-t-2 border-t-[#6366f1] relative group flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#6366f1]/20 border border-[#6366f1]/40 text-[#4f46e5] font-bold text-xs flex items-center justify-center mb-4">
                    01
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-base mb-1.5">Raw Stream Ingestion</h4>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Parsed from DeepHawkes Weibo bundle. Retains posts between 08:00–18:59 Beijing time and sizes <code className="text-slate-800 font-mono bg-slate-50 px-1 py-0.5 rounded">10 ≤ N ≤ 1000</code>.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/70">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 block text-center">
                    Parent-Child Stream
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="glass-card p-6 border-t-2 border-t-[#06b6d4] relative group flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/20 border border-[#06b6d4]/40 text-[#0284c7] font-bold text-xs flex items-center justify-center mb-4">
                    02
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-base mb-1.5">Dynamic CSR Engine</h4>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Incrementally updates <code className="text-slate-800 font-mono bg-slate-50 px-1 py-0.5 rounded">indptr</code>, <code className="text-slate-800 font-mono bg-slate-50 px-1 py-0.5 rounded">indices</code>, and <code className="text-slate-800 font-mono bg-slate-50 px-1 py-0.5 rounded">timestamps</code> arrays in contiguous RAM with zero pointer-chasing.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/70">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-cyan block text-center">
                    O(1) Slice Lookups
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="glass-card p-6 border-t-2 border-t-[#10b981] relative group flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#10b981]/20 border border-[#10b981]/40 text-[#059669] font-bold text-xs flex items-center justify-center mb-4">
                    03
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-base mb-1.5">Causal Extraction</h4>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Detects 5 motifs and continuous temporal dynamics on <code className="text-slate-800 font-mono bg-slate-50 px-1 py-0.5 rounded">G_t−</code>. Strictly zero lookahead data leakage.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/70">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-emerald block text-center">
                    [B, K_max, 15] NPZ
                  </span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="glass-card p-6 border-t-2 border-t-[#f59e0b] relative group flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#d97706] font-bold text-xs flex items-center justify-center mb-4">
                    04
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-base mb-1.5">Attentive BiGRU</h4>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    BiGRU (D=64) + Attention Pooling + MLP Head trained on MSLE in log2 space: <code className="text-slate-800 font-mono bg-slate-50 px-1 py-0.5 rounded">y = log₂(ΔP + 1)</code>.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/70">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded badge-amber block text-center">
                    49,824 Parameters
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reddit Pipelines A, B, C */}
        {pipeline === 'reddit' && (
          <div className="glass-panel p-6 sm:p-8 animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
              <div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded badge-purple uppercase mb-2 inline-block">
                  Parallel Subreddit Virality Engine • Flat CSV Decoupling
                </span>
                <h3 className="font-display font-bold text-2xl text-slate-900 mt-1">
                  Pipelines A, B, C: Decoupled Real-Time Classification
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                P95 Cutoff Target
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 border-l-4 border-l-[#38bdf8] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display font-bold text-slate-900 text-lg">Pipeline A</h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded badge-cyan">T ≤ 15 min</span>
                  </div>
                  <div className="text-sm font-semibold text-[#0284c7] mb-2">Streaming Feature Engine</div>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Converts early comment streams into continuous N × 20 matrices using dynamic CSR and Worst-Case Optimal Joins (WCOJ) Leapfrog Triejoin iterators.
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg font-mono text-[11px] text-slate-700 border border-slate-200/70">
                  Output: pipeline_a_features.csv (post_id, X_seq)
                </div>
              </div>

              <div className="glass-card p-6 border-l-4 border-l-[#818cf8] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display font-bold text-slate-900 text-lg">Pipeline B</h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded badge-indigo">T = 24 hours</span>
                  </div>
                  <div className="text-sm font-semibold text-[#4f46e5] mb-2">Ground-Truth Target Engine</div>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Flattens 24h thread history, discarding late comments (&gt;86,400s). Groups posts by subreddit to compute dynamic 95th percentile (P95) volume cutoffs to assign binary virality labels.
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg font-mono text-[11px] text-slate-700 border border-slate-200/70">
                  Output: pipeline_b_labels.csv (post_id, y_viral)
                </div>
              </div>

              <div className="glass-card p-6 border-l-4 border-l-[#34d399] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display font-bold text-slate-900 text-lg">Pipeline C</h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded badge-emerald">PyTorch Neural</span>
                  </div>
                  <div className="text-sm font-semibold text-[#059669] mb-2">Hybrid Neural Learning Engine</div>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Inner joins Pipeline A and B on <code className="text-slate-800 font-mono bg-slate-50 px-1 py-0.5 rounded">post_id</code>. Batches variable sequences into [B, K_max, 20] tensors. Trains BiGRU + Attentive Pooling with Focal Loss.
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg font-mono text-[11px] text-slate-700 border border-slate-200/70">
                  Model: CascadeAttentionGRU (BCE / Focal)
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
