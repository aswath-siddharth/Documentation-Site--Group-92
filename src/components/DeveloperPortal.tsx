'use client';

import React, { useState } from 'react';

export default function DeveloperPortal() {
  const [copied, setCopied] = useState<boolean>(false);

  const codeString = `# 1. Download DeepHawkes Sina Weibo dataset bundle
curl -L -o weibo_data/datasets.zip "https://www.dropbox.com/s/0kadkjyuwffcuw2/datasets.zip?dl=1"
unzip -j weibo_data/datasets.zip '*weibo*' -d weibo_data/

# 2. Extract 15-D Causal Motif & Temporal features (15-minute window)
python -m pipeline_w.weibo_parser \\
    --input weibo_data/dataset_weibo.txt \\
    --output-dir weibo_data/processed_900 \\
    --observation-time 900

# 3. Train & Evaluate Attentive BiGRU Regressor (15-min horizon)
python -m pipeline_w.train_weibo \\
    --data-dir weibo_data/processed_900 \\
    --output-dir pipeline_w/outputs_900

# 4. Standard 1-Hour Benchmark & CasSubTS controlled comparison
python -m pipeline_w.weibo_parser \\
    --input weibo_data/dataset_weibo.txt \\
    --output-dir weibo_data/processed_3600 \\
    --observation-time 3600

python -m pipeline_w.train_weibo \\
    --data-dir weibo_data/processed_3600 \\
    --output-dir pipeline_w/outputs_3600

# 5. Run unattended multi-seed comparison across seeds 42, 43, 44
python -m pipeline_w.multiseed`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const references = [
    {
      id: "1",
      venue: "Sci Rep '25",
      citation: "J. Wang et al. \"Fusing Temporal and Structural Information via Subgraph Sampling and Multi-Head Attention for Information Cascade Prediction.\" Scientific Reports, 15:6801, 2025."
    },
    {
      id: "2",
      venue: "ACM CIKM '17",
      citation: "Q. Cao et al. \"DeepHawkes: Bridging the Gap between Prediction and Understanding of Information Cascades.\" ACM CIKM, pp. 1149–1158, 2017."
    },
    {
      id: "3",
      venue: "ACM WSDM '17",
      citation: "A. Paranjape, A. R. Benson, and J. Leskovec. \"Motifs in Temporal Networks.\" ACM WSDM, pp. 601–610, 2017."
    },
    {
      id: "4",
      venue: "IEEE ICDE '19",
      citation: "X. Chen et al. \"Information Diffusion Prediction via Recurrent Cascades Convolution.\" IEEE ICDE, pp. 770–781, 2019."
    },
    {
      id: "5",
      venue: "Neurocomputing '21",
      citation: "C. Chen et al. \"Information Cascade Prediction with Sequential and Graphical Neural Networks.\" Neurocomputing, 454:443–453, 2021."
    },
    {
      id: "6",
      venue: "ICLR '20",
      citation: "E. Rossi et al. \"Temporal Graph Networks for Deep Learning on Dynamic Graphs.\" ICLR Workshop on Graph Representation Learning, 2020."
    },
    {
      id: "7",
      venue: "Mgmt Sci '16",
      citation: "S. Goel, A. Anderson, J. Hofman, and D. J. Watts. \"The Structural Virality of Online Diffusion.\" Management Science, 62(1):180–196, 2016."
    },
    {
      id: "8",
      venue: "IEEE TKDE '23",
      citation: "X. Xu, F. Zhou, K. Zhang, S. Liu, and G. Trajcevski. \"CasFlow: Exploring Hierarchical Structures and Propagation Uncertainty for Cascade Prediction.\" IEEE TKDE, 35(4):3484–3499, 2023."
    }
  ];

  return (
    <section id="docs" className="py-24 relative bg-slate-50/70 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
            09 • Documentation &amp; Citations
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Developer Portal &amp; Reproducibility Guide
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            Quickstart terminal commands, dataset contracts, and academic literature references.
          </p>
        </div>

        {/* Quickstart Code Block */}
        <div className="glass-panel overflow-hidden mb-12 border border-slate-200">
          {/* Terminal Window Header */}
          <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-slate-600 ml-2">bash — casmotif-pipeline</span>
            </div>

            <button
              onClick={copyCode}
              className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5 transition-all active:scale-95"
            >
              {copied ? '✓ Copied to Clipboard!' : '📋 Copy Script'}
            </button>
          </div>

          <div className="bg-slate-50 p-5 sm:p-6 overflow-x-auto font-mono text-xs text-slate-800 leading-relaxed">
            <pre><code>{codeString}</code></pre>
          </div>
        </div>

        {/* References Section */}
        <div className="glass-panel p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] pulse-indicator" />
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">Academic References</h3>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm mb-6">
            Key literature establishing foundational cascade theory, temporal motifs, and baseline architectures:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {references.map((r) => (
              <div key={r.id} className="glass-card p-4 text-xs text-slate-700 leading-relaxed hover:border-slate-300 transition-all flex items-start gap-3">
                <span className="font-mono text-ink-sky font-bold text-sm">[{r.id}]</span>
                <div className="flex-1">
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded badge-indigo font-bold mr-2 inline-block mb-1">
                    {r.venue}
                  </span>
                  <span>{r.citation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
