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
      citation: "J. Wang et al. \"Fusing Temporal and Structural Information via Subgraph Sampling and Multi-Head Attention for Information Cascade Prediction.\" Scientific Reports, 15:6801, 2025."
    },
    {
      id: "2",
      citation: "Q. Cao et al. \"DeepHawkes: Bridging the Gap between Prediction and Understanding of Information Cascades.\" ACM CIKM, pp. 1149–1158, 2017."
    },
    {
      id: "3",
      citation: "A. Paranjape, A. R. Benson, and J. Leskovec. \"Motifs in Temporal Networks.\" ACM WSDM, pp. 601–610, 2017."
    },
    {
      id: "4",
      citation: "X. Chen et al. \"Information Diffusion Prediction via Recurrent Cascades Convolution.\" IEEE ICDE, pp. 770–781, 2019."
    },
    {
      id: "5",
      citation: "C. Chen et al. \"Information Cascade Prediction with Sequential and Graphical Neural Networks.\" Neurocomputing, 454:443–453, 2021."
    },
    {
      id: "6",
      citation: "E. Rossi et al. \"Temporal Graph Networks for Deep Learning on Dynamic Graphs.\" ICLR Workshop on Graph Representation Learning, 2020."
    },
    {
      id: "7",
      citation: "S. Goel, A. Anderson, J. Hofman, and D. J. Watts. \"The Structural Virality of Online Diffusion.\" Management Science, 62(1):180–196, 2016."
    },
    {
      id: "8",
      citation: "X. Xu, F. Zhou, K. Zhang, S. Liu, and G. Trajcevski. \"CasFlow: Exploring Hierarchical Structures and Propagation Uncertainty for Cascade Prediction.\" IEEE TKDE, 35(4):3484–3499, 2023."
    }
  ];

  return (
    <section id="docs" className="py-20 relative bg-[#090d16]/50 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#38bdf8] block mb-2">
            09 • Documentation &amp; Citations
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Developer Portal &amp; Reproducibility Guide
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Quickstart terminal commands, dataset contracts, and academic literature references.
          </p>
        </div>

        {/* Quickstart Code Block */}
        <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                Reproducing the Benchmark Pipelines
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Execute directly from the root of the repository:
              </p>
            </div>
            <button
              onClick={copyCode}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 flex items-center gap-1.5 transition-all"
            >
              {copied ? '✓ Copied!' : '📋 Copy Script'}
            </button>
          </div>

          <div className="bg-[#05070c] border border-white/10 rounded-xl overflow-hidden font-mono text-xs text-slate-300 p-5 overflow-x-auto leading-relaxed">
            <pre><code>{codeString}</code></pre>
          </div>
        </div>

        {/* References Section */}
        <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 sm:p-8">
          <h3 className="font-display font-bold text-xl text-white mb-2">Academic References</h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">
            Key literature establishing foundational cascade theory, temporal motifs, and baseline architectures:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {references.map((r) => (
              <div key={r.id} className="glass-card p-4 text-xs text-slate-300 leading-relaxed">
                <span className="font-mono text-[#38bdf8] font-bold mr-2">[{r.id}]</span>
                <span>{r.citation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
