import React from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  ArrowDown,
  FileText,
  MessageCircle
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './UI/SocialIcons'
import heroPortrait from '../assets/hero-portrait.webp'

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text Content (6 cols on desktop for balanced large visual) */}
          <div className="lg:col-span-6 space-y-6 text-left">

            {/* Primary Name & Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight leading-[1.12]">
                NDILLE <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">ENUME</span>
              </h1>
              
              {/* Strong Value-Driven Branding Statement */}
              <div className="pt-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-['Space_Grotesk'] text-slate-100 leading-[1.2] tracking-tight">
                  I engineer high-impact solutions that{' '}
                  <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    solve real-world problems.
                  </span>
                </h2>
              </div>
            </motion.div>

            {/* Action Buttons (CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto"
            >
              {/* CTA 1: Primary - View Selected Work */}
              <a
                href="#projects"
                className="group min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 hover:from-sky-300 hover:to-cyan-200 shadow-lg shadow-sky-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:translate-y-1 transition-transform" />
              </a>

              {/* CTA 2: Secondary - Download CV / Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-slate-700 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-sky-400 group-hover:scale-110 transition-transform" />
                <span>Download CV / Resume</span>
              </a>

              {/* Quick WhatsApp Chat Icon Button */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp Message"
                className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500 hover:text-slate-950 border border-emerald-500/30 transition-all duration-200"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </motion.div>

            {/* Social Proof Icons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect With Me
              </span>
              <div className="h-4 w-px bg-slate-800 hidden sm:block" />
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="min-h-[48px] min-w-[48px] flex items-center justify-center p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-neutral-800 hover:scale-110 transition-all duration-200 shadow-sm"
                >
                  <GithubIcon className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="min-h-[48px] min-w-[48px] flex items-center justify-center p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-neutral-800 hover:scale-110 transition-all duration-200 shadow-sm"
                >
                  <LinkedinIcon className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
                </a>
                <a
                  href={`mailto:${emailAddress}`}
                  aria-label="Send Email to Ndille Enume"
                  className="min-h-[48px] min-w-[48px] flex items-center justify-center p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-neutral-800 hover:scale-110 transition-all duration-200 shadow-sm"
                >
                  <Mail className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Hero Portrait with Animated Glowing Laser Border */}
          <div className="lg:col-span-6 relative flex items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-lg lg:max-w-xl mx-auto"
            >
              {/* Backlight Ambient Glow Rings */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/30 via-blue-600/25 to-cyan-400/30 blur-3xl rounded-full pointer-events-none transform scale-105" />
              <div className="absolute -inset-2 bg-gradient-to-b from-sky-500/20 via-transparent to-blue-500/20 rounded-[36px] blur-2xl pointer-events-none" />

              {/* Animated Glowing Laser Border Outer Wrapper */}
              <div className="relative p-[2.5px] rounded-[32px] overflow-hidden shadow-2xl shadow-sky-950/50 group">
                
                {/* 360-Degree Continuous Rotating Laser Conic Gradient */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_290deg,#38bdf8_325deg,#60a5fa_345deg,#38bdf8_360deg)] pointer-events-none"
                />

                {/* Additional Glow Diffusion Layer */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_290deg,#0284c7_325deg,#38bdf8_360deg)] blur-md opacity-80 pointer-events-none"
                />

                {/* Static Inner Dark Border Layer */}
                <div className="relative rounded-[30px] bg-gradient-to-b from-neutral-900/95 via-neutral-950/98 to-black p-4 sm:p-5 backdrop-blur-2xl overflow-hidden">
                  
                  {/* Subtle Background Grid Pattern inside Card */}
                  <div className="absolute inset-0 bg-[radial-gradient(#38bdf815_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />
                  
                  {/* Image Presentation Box */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900/80 via-neutral-950/90 to-black flex items-center justify-center pt-6 px-4 border border-slate-800/60">
                    <img
                      src={heroPortrait}
                      alt="Ndille Enume - Full-Stack Software Engineer"
                      className="w-full h-auto max-h-[520px] sm:max-h-[580px] lg:max-h-[620px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] transform transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="eager"
                    />
                    
                    {/* Subtle Bottom Vignette Gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
