import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import aboutPortrait from '../assets/about-portrait.webp'

export default function AboutMe() {
  const focusAreas = [
    'Web & Mobile Development',
    'AI Systems & RAG Pipelines',
    'High-Performance APIs',
    'Scalable Cloud Architecture'
  ]

  return (
    <section id="about" className="py-20 md:py-28 border-b border-slate-800/80 bg-gradient-to-b from-neutral-950 via-slate-950 to-neutral-950 relative overflow-hidden">
      {/* Contrasting Atmospheric Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf808_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Space_Grotesk'] text-white tracking-tight leading-tight">
            About Me
          </h2>
        </motion.div>

        {/* Minimalist 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clean Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <img
                src={aboutPortrait}
                alt="Ndille Enume"
                className="w-full h-auto object-cover object-center aspect-[4/5]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: Settled Minimalist Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white leading-snug">
                Building purposeful digital solutions that solve real problems.
              </h3>
            </div>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I develop modern web and mobile applications with a focus on performance, scalability, and clean user experience.
              </p>
              <p>
                I also work with AI automation systems and RAG pipelines to build smarter and more efficient digital solutions.
              </p>
              <p className="text-slate-200 font-medium">
                My goal is to create software that solves real-world problems and helps businesses and communities grow.
              </p>
            </div>

            {/* Clean Minimalist Focus Tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              {focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-900/90 text-slate-300 border border-neutral-800"
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Direct Links */}
            <div className="pt-4 flex items-center gap-5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
              >
                <span>View Selected Projects</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-neutral-700">·</span>
              <a
                href="#contact"
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
