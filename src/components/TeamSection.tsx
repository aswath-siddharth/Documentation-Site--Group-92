'use client';

import React from 'react';

export default function TeamSection() {
  const members = [
    {
      name: "Aswath Siddharth R",
      roll: "CB.SC.U4CSE23109",
      initials: "AS",
      role: "Architecture Lead • Benchmark Replication & Multi-Seed Comparison",
      color: "from-[#6366f1] to-[#818cf8]"
    },
    {
      name: "Darshan R",
      roll: "CB.SC.U4CSE23115",
      initials: "DR",
      role: "Streaming CSR Graph Engine • Feature Vector Extraction",
      color: "from-[#06b6d4] to-[#38bdf8]"
    },
    {
      name: "Varun S",
      roll: "CB.SC.U4CSE23157",
      initials: "VS",
      role: "Causal Motif Engine • Leapfrog Triejoin & Topological Joins",
      color: "from-[#10b981] to-[#34d399]"
    },
    {
      name: "Kavin Karthic M",
      roll: "CB.SC.U4CSE23161",
      initials: "KM",
      role: "Deep Sequence Modeling • Attentive Pooling & MLP Head",
      color: "from-[#a855f7] to-[#c084fc]"
    },
    {
      name: "Harish Krishna B",
      roll: "CB.SC.U4CSE23323",
      initials: "HB",
      role: "Data Ingestion Pipeline • Target Formulations & Metrics",
      color: "from-[#f59e0b] to-[#fbbf24]"
    }
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#a855f7] block mb-2">
            08 • Team Details
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Research Team &amp; Faculty Mentorship
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Department of Computer Science and Engineering • Amrita Vishwa Vidyapeetham • 23CSE498 Project Phase 2
          </p>
        </div>

        {/* Faculty Guide Spotlight */}
        <div className="bg-gradient-to-r from-[#6366f1]/10 via-[#06b6d4]/10 to-transparent border border-[#6366f1]/30 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#6366f1] to-[#06b6d4] flex items-center justify-center font-display font-bold text-2xl text-white shadow-xl shadow-[#6366f1]/30 flex-shrink-0">
            DV
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl text-white">Mr. Dayanand V</h3>
            <div className="text-sm font-semibold text-[#38bdf8] mt-0.5">
              Project Faculty Guide • Assistant Professor
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Department of Computer Science and Engineering, Amrita Vishwa Vidyapeetham
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-2xl leading-relaxed">
              Guiding research methodology on streaming dynamic graphs, causal temporal motif formulations, sub-quadratic join algorithms, and leak-free chronological evaluation protocols.
            </p>
          </div>
        </div>

        {/* Student Team Grid (Team Number: 92) */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-display font-bold text-xl text-white">
            Team Number: 92 (B.Tech CSE)
          </h3>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
            5 Researchers
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {members.map((m) => (
            <div key={m.roll} className="glass-card p-5 text-center flex flex-col justify-between group">
              <div>
                <div className={`w-14 h-14 rounded-full bg-gradient-to-tr ${m.color} flex items-center justify-center font-display font-bold text-base text-white mx-auto mb-3 shadow-md group-hover:scale-105 transition-transform`}>
                  {m.initials}
                </div>
                <h4 className="font-display font-bold text-base text-white mb-1">{m.name}</h4>
                <div className="font-mono text-xs text-[#38bdf8] mb-2">{m.roll}</div>
                <p className="text-xs text-slate-400 leading-snug">{m.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Enrichment Activity */}
        <div className="bg-[#151d30] border border-white/10 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-base text-white mb-1">
              Technical Enrichment Activity Certification
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              All 5 team members have completed the mandatory Professional Online Certification in <strong className="text-slate-200">Social Network Analysis</strong> via Coursera (10–20 Hours per member) covering network metrics, viral diffusion models, and structural motifs.
            </p>
          </div>
          <span className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30">
            ✓ 100% Certified
          </span>
        </div>
      </div>
    </section>
  );
}
