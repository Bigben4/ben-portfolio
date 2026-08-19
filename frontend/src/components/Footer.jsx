import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Code2, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-neutral-900 py-10 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <a
            href="#home"
            className="flex items-center gap-2 text-base font-bold font-['Space_Grotesk'] text-white hover:text-blue-400 transition-colors"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0">
              <Code2 className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
            </div>
            <span>
              NDILLE <span className="text-blue-400">ENUME</span>
            </span>
          </a>

          <div className="hidden sm:block h-4 w-px bg-neutral-800" />

          <p className="text-xs text-slate-400 flex flex-wrap items-center justify-center sm:justify-start gap-1">
            <span>© {currentYear} Ndille Enume. All rights reserved. Built with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
            <span>& React.</span>
          </p>
        </div>

        {/* Live Build Status Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-slate-300">
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
          className="group min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-blue-500/30 text-slate-300 hover:text-blue-400 text-xs font-semibold transition-all"
        >
          <span>Back to top</span>
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    </footer>
  )
}
