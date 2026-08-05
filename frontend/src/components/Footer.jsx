import React from 'react'
import { ArrowUp, Code2, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <a
            href="#home"
            className="flex items-center gap-2 text-base font-bold font-['Space_Grotesk'] text-white hover:text-sky-400 transition-colors"
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <Code2 size={16} />
            </div>
            <span>
              BEN<span className="text-sky-400">.DEV</span>
            </span>
          </a>

          <div className="hidden sm:block h-4 w-px bg-slate-800" />

          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>© {currentYear} Benjamin. All rights reserved. Built with</span>
            <Heart size={12} className="text-rose-500 fill-rose-500" />
            <span>& React.</span>
          </p>
        </div>

        {/* Live Build Status Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Systems Operational · Built with React & Vite</span>
        </div>

        {/* Quick Back to Top Anchor Link */}
        <a
          href="#home"
          aria-label="Scroll back to top of page"
          className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/30 text-slate-300 hover:text-sky-400 text-xs font-semibold transition-all"
        >
          <span>Back to top</span>
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </footer>
  )
}
