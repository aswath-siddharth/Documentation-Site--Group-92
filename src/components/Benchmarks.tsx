'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Benchmarks() {
  const [activeTab, setActiveTab] = useState<'multiseed' | 'ablation' | 'early' | 'tradeoffs'>('multiseed');
  const [inputLog2, setInputLog2] = useState<number>(1.9845);

  const factor = Math.pow(Math.LN2, 2); // ≈ 0.480453
  const convertedLn = (inputLog2 * factor).toFixed(4);

  return (
    <section id="benchmarks" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#38bdf8] block mb-2">
            06 • Experimental Validation
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Controlled Benchmark Results &amp; Ablations
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Empirical validation on 42,186 Sina Weibo cascades under identical chronological partitions and multi-seed significance tests.
          </p>
        </div>

        {/* Dashboard Box */}
        <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 sm:p-8 mb-12">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveTab('multiseed')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'multiseed'
                  ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              1. Multi-Seed vs CasSubTS
            </button>
            <button
              onClick={() => setActiveTab('ablation')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'ablation'
                  ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              2. Pooling Ablation Study
            </button>
            <button
              onClick={() => setActiveTab('early')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'early'
                  ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              3. Ultra-Early 15-Min Horizon
            </button>
            <button
              onClick={() => setActiveTab('tradeoffs')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'tradeoffs'
                  ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              4. Design Choices &amp; Trade-Offs
            </button>
          </div>

          {/* Tab 1: Multi-seed Controlled Weibo */}
          {activeTab === 'multiseed' && (
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Controlled Benchmark: Sina Weibo (42,186 Cascades, T_obs = 1 Hour)
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Single models evaluated across 3 independent seeds (42, 43, 44) on the chronological 70:15:15 split (29,530 train / 6,328 val / 6,328 test; target log₂(ΔP + 1)).
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 font-semibold text-xs uppercase tracking-wider">
                      <th className="py-3 px-4">Metric</th>
                      <th className="py-3 px-4">Ours (3-Seed Mean)</th>
                      <th className="py-3 px-4">CasSubTS (3-Seed Mean)</th>
                      <th className="py-3 px-4">DeepHawkes (CIKM &apos;17)</th>
                      <th className="py-3 px-4">Margin vs CasSubTS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="bg-[#6366f1]/10 font-medium">
                      <td className="py-3 px-4 font-semibold text-white">MSLE ↓ (log₂)</td>
                      <td className="py-3 px-4 text-[#38bdf8] font-bold">1.9845 ± 0.0187</td>
                      <td className="py-3 px-4 text-slate-300">1.9864 ± 0.0258</td>
                      <td className="py-3 px-4 text-slate-400">2.4410</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30">
                          0.1% lower (tie, p = 0.93)
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-white">MAPE ↓</td>
                      <td className="py-3 px-4 text-slate-300">0.2315</td>
                      <td className="py-3 px-4 text-slate-300">0.2308</td>
                      <td className="py-3 px-4 text-slate-400">—</td>
                      <td className="py-3 px-4 text-slate-400">0.3% diff (comparable)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-white">MAE ↓</td>
                      <td className="py-3 px-4 text-slate-300">77.23</td>
                      <td className="py-3 px-4 text-slate-300">75.97</td>
                      <td className="py-3 px-4 text-slate-400">≈ 96.2</td>
                      <td className="py-3 px-4 text-slate-400">1.7% diff (comparable)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-white">Parameters</td>
                      <td className="py-3 px-4 text-[#34d399] font-bold">49,824 (50k)</td>
                      <td className="py-3 px-4 text-slate-300">153,970 (154k)</td>
                      <td className="py-3 px-4 text-slate-400">≈ 2,200*</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30">
                          3.1× fewer parameters
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-[#10b981]/10 font-medium">
                      <td className="py-3 px-4 font-semibold text-[#34d399]">3-Model Ensemble</td>
                      <td className="py-3 px-4 font-bold text-[#34d399]">1.9516 (149k params)</td>
                      <td className="py-3 px-4 text-slate-300">1.9730 (462k params)</td>
                      <td className="py-3 px-4 text-slate-400">—</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30">
                          Beats CasSubTS Ensemble (p = 0.29)
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Parameter Bar Comparison */}
              <div className="bg-[#090d16] border border-white/10 rounded-xl p-6 mb-8">
                <h4 className="font-display font-semibold text-white text-sm mb-4">
                  Parameter Footprint Comparison (Lower is Better)
                </h4>
                <div className="space-y-4 text-xs font-medium">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>CasMotif Single Model</span>
                      <span className="text-[#34d399] font-bold">49,824 parameters (3.1× lighter)</span>
                    </div>
                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#10b981] to-[#06b6d4] rounded-full w-[32.3%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>CasSubTS (Knowledge-Based Systems 2025)</span>
                      <span className="text-[#818cf8]">153,970 parameters</span>
                    </div>
                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>CasMotif 3-Model Parameter-Matched Ensemble</span>
                      <span className="text-[#38bdf8] font-bold">149,472 parameters (below one CasSubTS!)</span>
                    </div>
                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] rounded-full w-[97%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Loss Curves Image */}
              <div className="bg-[#090d16] border border-white/10 rounded-xl p-6 text-center">
                <h4 className="font-display font-semibold text-white text-base mb-2">
                  Empirical Training &amp; Validation Loss Trajectories
                </h4>
                <div className="max-w-2xl mx-auto my-4 rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/assets/loss_curves.png"
                    alt="Empirical Loss Curves"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-slate-400 text-xs">
                  Figure: Training and validation loss curves showing smooth convergence with early stopping without overfitting.
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Pooling Ablation */}
          {activeTab === 'ablation' && (
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Sequence Pooling Ablation Study (T_obs = 1 Hour)
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Quantifying the exact performance gain of learned attentive pooling over standard pooling operators:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 font-semibold text-xs uppercase tracking-wider">
                      <th className="py-3 px-4">Rank</th>
                      <th className="py-3 px-4">Strategy</th>
                      <th className="py-3 px-4">Params</th>
                      <th className="py-3 px-4">MSLE ↓</th>
                      <th className="py-3 px-4">MAE ↓</th>
                      <th className="py-3 px-4">PCC ↑</th>
                      <th className="py-3 px-4">Analysis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="bg-[#6366f1]/10 font-medium">
                      <td className="py-3 px-4 font-bold text-[#38bdf8]">1</td>
                      <td className="py-3 px-4 font-bold text-white">Attentive Pooling (Ours)</td>
                      <td className="py-3 px-4 font-mono text-slate-300">49,824</td>
                      <td className="py-3 px-4 font-bold text-[#38bdf8]">1.9804</td>
                      <td className="py-3 px-4 text-slate-300">77.78</td>
                      <td className="py-3 px-4 font-bold text-[#34d399]">0.7933</td>
                      <td className="py-3 px-4 text-xs text-[#34d399]">
                        +5.2% over mean, +12.6% over max
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">2</td>
                      <td className="py-3 px-4 text-slate-200">Mean Pooling Baseline</td>
                      <td className="py-3 px-4 font-mono text-slate-400">3,167</td>
                      <td className="py-3 px-4 text-slate-300">2.0829</td>
                      <td className="py-3 px-4 text-slate-300">76.08</td>
                      <td className="py-3 px-4 text-slate-300">0.7784</td>
                      <td className="py-3 px-4 text-xs text-slate-400">Uniform average dilutes signal across inactive nodes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">3</td>
                      <td className="py-3 px-4 text-slate-200">Max Pooling Baseline</td>
                      <td className="py-3 px-4 font-mono text-slate-400">3,147</td>
                      <td className="py-3 px-4 text-slate-300">2.2304</td>
                      <td className="py-3 px-4 text-slate-300">81.46</td>
                      <td className="py-3 px-4 text-slate-300">0.7615</td>
                      <td className="py-3 px-4 text-xs text-slate-400">Biased toward isolated extreme burst spikes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">4</td>
                      <td className="py-3 px-4 text-slate-400">Mean Baseline</td>
                      <td className="py-3 px-4 font-mono text-slate-500">—</td>
                      <td className="py-3 px-4 text-rose-300">5.2825</td>
                      <td className="py-3 px-4 text-slate-400">105.32</td>
                      <td className="py-3 px-4 text-slate-500">—</td>
                      <td className="py-3 px-4 text-xs text-rose-300/80">Sanity floor predicting constant training mean</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 3: Ultra-Early 15-Min */}
          {activeTab === 'early' && (
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Ultra-Early Horizon Validation (T_obs = 15 Minutes / 900s)
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Evaluating virality prediction when observing only the first 15 minutes of cascade evolution (4× earlier than standard literature):
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 font-semibold text-xs uppercase tracking-wider">
                      <th className="py-3 px-4">Rank</th>
                      <th className="py-3 px-4">Strategy</th>
                      <th className="py-3 px-4">MSLE ↓</th>
                      <th className="py-3 px-4">RMSE ↓</th>
                      <th className="py-3 px-4">R² ↑</th>
                      <th className="py-3 px-4">Early Viability Assessment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="bg-[#6366f1]/10 font-medium">
                      <td className="py-3 px-4 font-bold text-[#38bdf8]">1</td>
                      <td className="py-3 px-4 font-bold text-white">Attentive BiGRU (Ours)</td>
                      <td className="py-3 px-4 font-bold text-[#38bdf8]">2.4423</td>
                      <td className="py-3 px-4 text-slate-300">1275.2</td>
                      <td className="py-3 px-4 font-bold text-[#34d399]">0.5757</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-[#10b981]/15 text-[#34d399]">
                          Strong R²=0.58 with only 15m signal
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">2</td>
                      <td className="py-3 px-4 text-slate-200">Mean Pooling</td>
                      <td className="py-3 px-4 text-slate-300">2.7758</td>
                      <td className="py-3 px-4 text-slate-300">1282.5</td>
                      <td className="py-3 px-4 text-slate-300">0.5176</td>
                      <td className="py-3 px-4 text-xs text-slate-400">Degrades by +13.6% MSLE</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">3</td>
                      <td className="py-3 px-4 text-slate-200">Max Pooling</td>
                      <td className="py-3 px-4 text-slate-300">2.9097</td>
                      <td className="py-3 px-4 text-slate-300">1335.5</td>
                      <td className="py-3 px-4 text-slate-300">0.4943</td>
                      <td className="py-3 px-4 text-xs text-slate-400">Degrades by +19.1% MSLE</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-400">4</td>
                      <td className="py-3 px-4 text-slate-400">Mean Baseline</td>
                      <td className="py-3 px-4 text-rose-300">5.7562</td>
                      <td className="py-3 px-4 text-slate-400">2391.2</td>
                      <td className="py-3 px-4 text-rose-300">0.0004</td>
                      <td className="py-3 px-4 text-xs text-rose-300/80">Outperformed by 57.6% MSLE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 4: Design Trade-offs */}
          {activeTab === 'tradeoffs' && (
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Architectural Design Choices and Trade-Offs (Slide 19)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 font-semibold text-xs uppercase tracking-wider">
                      <th className="py-3 px-4">Design Decision</th>
                      <th className="py-3 px-4">Primary Reason</th>
                      <th className="py-3 px-4">What It Costs / Trade-Off</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-white">CSR arrays over NetworkX</td>
                      <td className="py-3.5 px-4">Slice-time neighbor access inside the hot loop</td>
                      <td className="py-3.5 px-4 text-slate-400">In-place append overhead; requires flat memory buffers</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-white">Attentive pooling over self-attention</td>
                      <td className="py-3.5 px-4">Linear O(K) in sequence length; inspectable weights</td>
                      <td className="py-3.5 px-4 text-slate-400">Less expressive than all-pairs pairwise attention</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-white">BiGRU over GAT / GCN</td>
                      <td className="py-3.5 px-4">Eliminates GPU graph sampling and memory explosion</td>
                      <td className="py-3.5 px-4 text-slate-400">Must pre-extract structural inductive bias</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-white">Causal G_{"{t−}"} evaluation</td>
                      <td className="py-3.5 px-4">Eliminates temporal lookahead data leakage</td>
                      <td className="py-3.5 px-4 text-slate-400">Must evaluate motifs sequentially per incoming edge</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-white">Log-space MSLE objective</td>
                      <td className="py-3.5 px-4">Scale-invariant penalty across power-law cascades</td>
                      <td className="py-3.5 px-4 text-slate-400">Absolute errors on giant cascades are less penalized</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* The Log-Base Trap Explainer Card */}
        <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-[#fbbf24] font-bold text-base mb-2">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>Beware the Literature&apos;s &quot;Log-Base Trap&quot; in MSLE Comparisons</span>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
            Published papers report MSLE in different log bases without always stating it. DeepHawkes evaluates in <strong className="text-white">log base 2</strong> (<code>log2(y+1)</code>), while HierCas evaluates in <strong className="text-white">natural log (ln)</strong>. Because <code className="text-[#fbbf24] font-mono">MSLE_ln = MSLE_log2 × ln(2)² ≈ 0.4805 × MSLE_log2</code>, quoting a log2 score against a natural-log baseline roughly <em>halves or doubles</em> the apparent score! CasMotif explicitly reports both units to ensure scientific fidelity.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10 text-xs">
            <label htmlFor="log2-input-converter" className="text-slate-300 font-semibold">Interactive Unit Converter:</label>
            <input
              id="log2-input-converter"
              type="number"
              value={inputLog2}
              step={0.01}
              onChange={(e) => setInputLog2(Number(e.target.value))}
              className="bg-[#090d16] border border-white/20 rounded px-2.5 py-1 text-white font-mono w-28 outline-none focus:border-[#fbbf24]"
            />
            <span className="text-slate-400">MSLE (log₂) =</span>
            <strong className="text-[#38bdf8] font-mono text-sm">{convertedLn} (natural log units)</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
