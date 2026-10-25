'use client';

import React from 'react';

export default function TeamSection() {
  const members = [
    {
      name: "Aswath Siddharth R",
      roll: "CB.SC.U4CSE23109",
      initials: "AS",
      color: "from-[#6366f1] via-[#818cf8] to-[#c084fc]"
    },
    {
      name: "Darshan R",
      roll: "CB.SC.U4CSE23115",
      initials: "DR",
      color: "from-[#06b6d4] via-[#38bdf8] to-[#818cf8]"
    },
    {
      name: "Varun S",
      roll: "CB.SC.U4CSE23157",
      initials: "VS",
      color: "from-[#10b981] via-[#34d399] to-[#06b6d4]"
    },
    {
      name: "Kavin Karthic M",
      roll: "CB.SC.U4CSE23161",
      initials: "KM",
      color: "from-[#a855f7] via-[#c084fc] to-[#f472b6]"
    },
    {
      name: "Harish Krishna B",
      roll: "CB.SC.U4CSE23323",
      initials: "HB",
      color: "from-[#f59e0b] via-[#fbbf24] to-[#f97316]"
    }
  ];

  return (
    <section id="team" className="py-24 relative border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-purple text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
            08 • Team Details
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Research Team &amp; Faculty Mentorship
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            Department of Computer Science and Engineering • Amrita Vishwa Vidyapeetham • 23CSE498 Project Phase 2
          </p>
        </div>

        {/* Faculty Guide Spotlight */}
        <div className="glass-panel p-6 sm:p-8 mb-12 border border-[#6366f1]/30 bg-gradient-to-r from-[#6366f1]/15 via-[#06b6d4]/10 to-transparent flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#6366f1] via-[#06b6d4] to-[#a855f7] p-[2px] shadow-xl shadow-[#6366f1]/30 flex-shrink-0">
            <div className="w-full h-full bg-slate-50 rounded-[14px] flex items-center justify-center font-display font-bold text-2xl text-slate-900">
              DV
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <h3 className="font-display font-bold text-2xl text-slate-900">Mr. Dayanand V</h3>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full badge-cyan font-semibold">Faculty Guide</span>
            </div>
            <div className="text-sm font-semibold text-[#0284c7]">
              Assistant Professor • Department of Computer Science and Engineering
            </div>
            <div className="text-xs text-slate-600 mt-0.5">
              Amrita School of Computing, Amrita Vishwa Vidyapeetham
            </div>
          </div>
        </div>

        {/* Student Team Grid (Team Number: 92) */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
              Team Number: 92 (B.Tech CSE)
            </h3>
            <p className="text-slate-600 text-xs mt-0.5">Undergraduate Researchers, Class of 2026</p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-semibold">
            5 Researchers
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {members.map((m) => (
            <div key={m.roll} className="glass-card p-5 text-center flex flex-col justify-between group hover:border-slate-300 transition-all">
              <div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${m.color} p-[1.5px] mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform`}>
                  <div className="w-full h-full bg-slate-50 rounded-[14px] flex items-center justify-center font-display font-bold text-lg text-slate-900">
                    {m.initials}
                  </div>
                </div>
                <h4 className="font-display font-bold text-base text-slate-900 mb-1 leading-snug">{m.name}</h4>
                <div className="font-mono text-[11px] text-[#0284c7] mb-2 px-2 py-0.5 rounded bg-slate-50 inline-block">
                  {m.roll}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Enrichment Activity */}
        <div className="glass-panel p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4 border border-[#10b981]/30 bg-gradient-to-r from-[#10b981]/10 via-white to-transparent">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#34d399]" />
              <h4 className="font-display font-bold text-base sm:text-lg text-slate-900">
                Technical Enrichment Activity Certification
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              All 5 team members have completed the mandatory Professional Online Certification in <strong className="text-slate-900">Social Network Analysis</strong> via Coursera (10–20 Hours per member) covering network metrics, viral diffusion models, and structural motifs.
            </p>
          </div>
          <span className="px-4 py-2 rounded-xl text-xs font-bold badge-emerald flex items-center gap-1.5 shadow-sm">
            <span>✓</span>
            <span>100% Certified</span>
          </span>
        </div>
      </div>
    </section>
  );
}
