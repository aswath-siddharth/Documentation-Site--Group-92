'use client';

import React, { useState } from 'react';

export default function PipelineComparison() {
  const [pipeline, setPipeline] = useState<'weibo' | 'reddit'>('weibo');

  return (
    <section id="pipelines" className="py-20 relative bg-[#090d16]/50 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#38bdf8] block mb-2">
            03 • System Architecture
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            End-to-End Processing Pipelines
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Switch between the published Sina Weibo benchmark system (Pipeline W) and the decoupled Reddit exploration framework (Pipelines A, B, C).
          </p>
        </div>

        {/* Switcher Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setPipeline('weibo')}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              pipeline === 'weibo'
                ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            Pipeline W (Sina Weibo Benchmark)
          </button>
          <button
            onClick={() => setPipeline('reddit')}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              pipeline === 'reddit'
                ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            Pipelines A, B, C (Reddit Classification)
          </button>
        </div>

        {/* Weibo Pipeline W */}
        {pipeline === 'weibo' && (
          <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#38bdf8]/15 text-[#38bdf8] uppercase">
                Continuous Regression Benchmark • 42,186 Cascades
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-2">
                Pipeline W Workflow: Continuous Ingestion to 24-Hour Popularity
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="glass-card p-5 relative">
                <div className="w-7 h-7 rounded-full bg-[#6366f1] text-white font-bold text-xs flex items-center justify-center mb-3">
                  1
                </div>
                <h4 className="font-display font-bold text-white text-base mb-1">Raw Stream Ingestion</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  Parsed from DeepHawkes Weibo bundle. Retains posts between 08:00–18:59 Beijing time and sizes <code className="text-slate-200">10 ≤ N ≤ 1000</code>.
                </p>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                  Chronological 70:15:15
                </span>
              </div>

              <div className="glass-card p-5 relative">
                <div className="w-7 h-7 rounded-full bg-[#06b6d4] text-white font-bold text-xs flex items-center justify-center mb-3">
                  2
                </div>
                <h4 className="font-display font-bold text-white text-base mb-1">Dynamic CSR Engine</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  Incrementally updates <code className="text-slate-200">indptr</code>, <code className="text-slate-200">indices</code>, and <code className="text-slate-200">timestamps</code> arrays in RAM.
                </p>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                  O(1) Slice Lookups
                </span>
              </div>

              <div className="glass-card p-5 relative">
                <div className="w-7 h-7 rounded-full bg-[#10b981] text-white font-bold text-xs flex items-center justify-center mb-3">
                  3
                </div>
                <h4 className="font-display font-bold text-white text-base mb-1">Causal Vector Extraction</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  Detects 5 motifs and continuous temporal dynamics on <code className="text-slate-200">G_{"{t−}"}</code>. Zero lookahead leakage.
                </p>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                  [B, K_max, 15] NPZ
                </span>
              </div>

              <div className="glass-card p-5 relative">
                <div className="w-7 h-7 rounded-full bg-[#f59e0b] text-white font-bold text-xs flex items-center justify-center mb-3">
                  4
                </div>
                <h4 className="font-display font-bold text-white text-base mb-1">Attentive BiGRU Learner</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  BiGRU (D=64) + Attention Pooling + MLP Head trained on MSLE in log2 space: <code className="text-slate-200">y = log₂(ΔP + 1)</code>.
                </p>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                  49,824 Parameters
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Reddit Pipelines A, B, C */}
        {pipeline === 'reddit' && (
          <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#a855f7]/15 text-[#c084fc] uppercase">
                Parallel Subreddit Virality Engine • Flat CSV Decoupling
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-2">
                Pipelines A, B, C: Decoupled Real-Time Classification
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 border-l-4 border-l-[#38bdf8]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display font-bold text-white text-lg">Pipeline A</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">T ≤ 15 min</span>
                </div>
                <div className="text-sm font-semibold text-[#38bdf8] mb-2">Streaming Feature Engine</div>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Converts early comment streams into continuous N × 20 matrices using dynamic CSR and Worst-Case Optimal Joins (WCOJ) Leapfrog Triejoin iterators. Evaluates multi-way edge joins in worst-case optimal time.
                </p>
                <div className="bg-[#090d16] p-2.5 rounded font-mono text-[11px] text-slate-300 border border-white/5">
                  Output: pipeline_a_features.csv (post_id, X_seq)
                </div>
              </div>

              <div className="glass-card p-6 border-l-4 border-l-[#818cf8]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display font-bold text-white text-lg">Pipeline B</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">T = 24 hours</span>
                </div>
                <div className="text-sm font-semibold text-[#818cf8] mb-2">Ground-Truth Target Engine</div>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Flattens 24h thread history, discarding late comments (&gt;86,400s). Groups posts by subreddit to compute dynamic 95th percentile (P95) volume cutoffs to assign binary virality labels.
                </p>
                <div className="bg-[#090d16] p-2.5 rounded font-mono text-[11px] text-slate-300 border border-white/5">
                  Output: pipeline_b_labels.csv (post_id, y_viral)
                </div>
              </div>

              <div className="glass-card p-6 border-l-4 border-l-[#34d399]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display font-bold text-white text-lg">Pipeline C</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">PyTorch Neural Model</span>
                </div>
                <div className="text-sm font-semibold text-[#34d399] mb-2">Hybrid Neural Learning Engine</div>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Inner joins Pipeline A and B on <code className="text-slate-200">post_id</code>. Batches variable sequences into [B, K_max, 20] tensors. Trains BiGRU + Attentive Pooling + MLP Classifier with Focal Loss.
                </p>
                <div className="bg-[#090d16] p-2.5 rounded font-mono text-[11px] text-slate-300 border border-white/5">
                  Model: CascadeAttentionGRU (BCE / Focal Loss)
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
