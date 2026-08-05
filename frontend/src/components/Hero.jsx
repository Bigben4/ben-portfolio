import React from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  ArrowDown,
  FileText,
  Sparkles,
  Terminal,
  MessageCircle
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './UI/SocialIcons'

export default function Hero() {
  const whatsAppUrl = 'https://wa.me/237671807750'
  const emailAddress = 'Ebrahimndille@gmail.com'

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center border-b border-slate-800/60"
    >
      {/* Background Ambient Glow & Grid Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0284c718,transparent_55%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300 tracking-wide">
                NDILLE ENUME · FULL-STACK ENGINEER
              </span>
            </motion.div>

            {/* Primary Name & Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight leading-[1.12]">
                NDILLE <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">ENUMES</span>
              </h1>
              
              {/* Reduced to exactly two tight sentences focused on React, Next.js, Node.js */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
                I am a Full-Stack Software Engineer specialized in React, Next.js, and Node.js. I build high-performance web applications and scalable API architectures tailored for production environments.
              </p>
            </motion.div>

            {/* Action Buttons (CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* CTA 1: Primary - View Selected Work */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 hover:from-sky-300 hover:to-cyan-200 shadow-lg shadow-sky-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Selected Work</span>
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </a>

              {/* CTA 2: Secondary - Download CV / Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText size={16} className="text-sky-400 group-hover:scale-110 transition-transform" />
                <span>Download CV / Resume</span>
              </a>

              {/* Quick WhatsApp Chat Icon Button */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp Message"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500 hover:text-slate-950 border border-emerald-500/30 transition-all duration-200"
                title="Chat on WhatsApp"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </motion.div>

            {/* Social Proof Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 flex items-center gap-4"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect With Me
              </span>
              <div className="h-4 w-px bg-slate-800" />
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800 hover:scale-110 transition-all duration-200 shadow-sm"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800 hover:scale-110 transition-all duration-200 shadow-sm"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={`mailto:${emailAddress}`}
                  aria-label="Send Email to Ndille Enume"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800 hover:scale-110 transition-all duration-200 shadow-sm"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Terminal Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl shadow-sky-950/40 backdrop-blur-xl"
            >
              {/* Window Controls */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-500">engineer-profile.ts</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-sky-500/10 text-[11px] font-mono text-sky-400 border border-sky-500/20">
                  <Sparkles size={12} />
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Code Snippet Display */}
              <div className="space-y-3 font-mono text-xs sm:text-sm leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-sky-300">engineer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-400">'Ndille Enume'</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-emerald-400">'Full-Stack Software Engineer'</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">specialization:</span> [
                  </div>
                  <div className="pl-4 text-sky-300">
                    'React 19', 'Next.js 15', 'Node.js', 'TypeScript', 'PostgreSQL'
                  </div>
                  <div>],</div>
                  <div>
                    <span className="text-slate-400">focus:</span>{' '}
                    <span className="text-emerald-400">'High-Performance Web Apps & APIs'</span>
                  </div>
                </div>
                <div>&#125;;</div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-sky-400">
                    <Terminal size={14} />
                    <span>ndille@dev:~$ pnpm test:architecture</span>
                  </div>
                  <span className="text-emerald-400 font-bold">✓ 100% Passed</span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                  <div className="text-lg font-bold text-sky-400 font-['Space_Grotesk']">12+</div>
                  <div className="text-[11px] text-slate-400">Shipped Apps</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                  <div className="text-lg font-bold text-emerald-400 font-['Space_Grotesk']">99.9%</div>
                  <div className="text-[11px] text-slate-400">API Uptime</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                  <div className="text-lg font-bold text-cyan-400 font-['Space_Grotesk']">&lt; 100ms</div>
                  <div className="text-[11px] text-slate-400">Avg Latency</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
