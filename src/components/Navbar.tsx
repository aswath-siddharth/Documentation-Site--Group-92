'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'overview', 'methodology', 'pipelines', 'simulator', 'video-demo', 'benchmarks', 'progress', 'team', 'docs'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview', id: 'overview' },
    { name: 'Methodology', href: '#methodology', id: 'methodology' },
    { name: 'Pipelines', href: '#pipelines', id: 'pipelines' },
    { name: 'Simulator', href: '#simulator', id: 'simulator', highlight: true },
    { name: 'Walkthrough', href: '#video-demo', id: 'video-demo' },
    { name: 'Benchmarks', href: '#benchmarks', id: 'benchmarks' },
    { name: 'Progress', href: '#progress', id: 'progress' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Docs', href: '#docs', id: 'docs' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-50/85 backdrop-blur-xl border-b border-slate-200 shadow-2xl shadow-slate-900/10' 
        : 'bg-slate-50/60 backdrop-blur-md border-b border-slate-200/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6366f1] via-[#06b6d4] to-[#a855f7] p-[1.5px] shadow-lg shadow-[#6366f1]/25 group-hover:shadow-[#6366f1]/40 transition-all duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-slate-50 rounded-[10px] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#0284c7] group-hover:text-slate-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
          </div>
          <div>
            <div className="font-display font-extrabold text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
              <span>Cas</span>
              <span className="gradient-text-primary">Motif</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#6366f1]/20 text-[#4f46e5] border border-[#6366f1]/30 ml-1 hidden sm:inline-block">
                v2.0
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-slate-100 text-slate-900 shadow-inner shadow-slate-200/60'
                    : link.highlight
                    ? 'text-[#0284c7] hover:text-slate-900 hover:bg-[#38bdf8]/10'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & GitHub */}
        <div className="flex items-center gap-2.5">
          <a
            href="#simulator"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white hover:brightness-110 shadow-md shadow-[#6366f1]/25 transition-all active:scale-95"
          >
            <span>Live Demo</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] pulse-indicator" />
          </a>

          <a
            href="https://github.com/aswath-siddharth/Forecasting-Motif-Evolution-in-Social-Networks-using-Temporal-Graph-Networks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-800 hover:text-slate-900 transition-all hover:-translate-y-0.5"
            aria-label="GitHub Repository"
          >
            <svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span className="hidden md:inline">GitHub</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-50/95 backdrop-blur-2xl border-b border-slate-200 px-4 py-4 space-y-1.5 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200 flex gap-2">
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2 rounded-lg text-xs font-semibold bg-[#6366f1] text-white"
            >
              Launch Simulator
            </a>
            <a
              href="https://github.com/aswath-siddharth/Forecasting-Motif-Evolution-in-Social-Networks-using-Temporal-Graph-Networks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-lg text-xs font-semibold bg-slate-100 text-slate-900"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
