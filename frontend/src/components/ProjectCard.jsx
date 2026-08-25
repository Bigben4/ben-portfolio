import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  Cpu,
  Layers,
  ArrowUpRight,
  Globe,
  RotateCw,
  Loader2
} from 'lucide-react'
import { GithubIcon } from './UI/SocialIcons'

export default function ProjectCard({ project, index = 0 }) {
  const [iframeLoading, setIframeLoading] = useState(true)
  const [iframeKey, setIframeKey] = useState(0)

  const targetUrl = project.demoUrl || project.githubUrl

  const handleReloadIframe = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIframeLoading(true)
    setIframeKey((prev) => prev + 1)
  }

  // Extract domain for browser address bar display
  const getDisplayUrl = () => {
    if (!project.demoUrl) return project.githubUrl ? 'github.com/repository' : 'localhost:3000'
    try {
      const parsed = new URL(project.demoUrl)
      return parsed.hostname.replace(/^www\./, '')
    } catch {
      return project.demoUrl.replace(/^https?:\/\//, '')
    }
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 sm:p-6 shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Background Subtle Gradient Overlay */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
      />

      <div className="relative z-10 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Card Header: Category & Action Links */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-2">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white group-hover:text-sky-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-1">
                {project.role}
              </p>
            </div>

            {/* Top Action Links (Live Demo + GitHub) */}
            <div className="flex items-center gap-2 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-neutral-800 transition-all flex items-center justify-center shadow-sm"
                  title="View Source Code"
                >
                  <GithubIcon className="w-5 h-5 shrink-0" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live demo for ${project.title}`}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 hover:from-sky-300 hover:to-cyan-200 text-slate-950 font-bold text-xs shadow-md shadow-sky-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  title="Open Live Project in New Tab"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>
              )}
            </div>
          </div>

          {/* Interactive Browser Frame Live Preview Container */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800/90 bg-neutral-950 shadow-xl group/browser transition-all duration-300 hover:border-sky-500/50">
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 border-b border-slate-800/80 bg-neutral-900/95 text-slate-400 text-[11px] font-mono select-none">
              {/* Window Dots */}
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* Browser URL Bar Display */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-950 border border-slate-800/80 text-[10px] text-slate-300 max-w-[180px] sm:max-w-[240px] truncate">
                <Globe className="w-3 h-3 text-sky-400 shrink-0" />
                <span className="truncate">{getDisplayUrl()}</span>
              </div>

              {/* Browser Actions: Reload & Launch */}
              <div className="flex items-center gap-1.5">
                {project.demoUrl && (
                  <button
                    type="button"
                    onClick={handleReloadIframe}
                    className="p-1 rounded hover:bg-neutral-800 text-slate-400 hover:text-white transition-colors"
                    title="Reload live preview"
                    aria-label="Reload preview"
                  >
                    <RotateCw className="w-3 h-3" />
                  </button>
                )}
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-950 hover:bg-sky-500 hover:text-slate-950 border border-slate-800 hover:border-sky-400 text-[10px] text-sky-400 font-semibold transition-all"
                  title="Open live site in new tab"
                >
                  <span className="hidden sm:inline">Launch</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Viewport Live Preview Display Area */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
              {project.demoUrl ? (
                <div className="relative w-full h-full overflow-hidden">
                  {/* Loading Spinner */}
                  {iframeLoading && (
                    <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center gap-2 z-20 text-slate-400 text-xs font-mono">
                      <Loader2 className="w-6 h-6 text-sky-400 animate-spin" />
                      <span>Loading Live Preview...</span>
                    </div>
                  )}

                  {/* Scaled High-Res Desktop Iframe */}
                  <iframe
                    key={iframeKey}
                    src={project.demoUrl}
                    title={`${project.title} live preview`}
                    loading="lazy"
                    onLoad={() => setIframeLoading(false)}
                    className={`w-[200%] h-[200%] transform scale-50 origin-top-left border-0 transition-opacity duration-500 ${
                      iframeLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              ) : (
                /* Fallback Image Preview if no demo URL */
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full h-full group/img cursor-pointer"
                  title={`Open ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover/img:scale-105"
                    loading="lazy"
                  />
                </a>
              )}
            </div>
          </div>

          {/* Structured Case Study Sections */}
          <div className="space-y-3 text-xs text-slate-300 leading-relaxed pt-1">
            {/* Problem Statement */}
            <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800/80">
              <h4 className="font-semibold text-sky-400 text-xs flex items-center gap-1.5 mb-1 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Problem Statement</span>
              </h4>
              <p className="text-slate-300">{project.problemStatement || project.problem}</p>
            </div>

            {/* Technical Architecture */}
            <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800/80">
              <h4 className="font-semibold text-purple-400 text-xs flex items-center gap-1.5 mb-1 uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>Technical Architecture</span>
              </h4>
              <p className="text-slate-300">{project.technicalArchitecture || project.solution}</p>
            </div>
          </div>
        </div>

        {/* Card Footer: Tech Stack Badges */}
        <div className="pt-4 border-t border-slate-800/80 space-y-3">
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5">
            {(project.technologies || project.techStack || []).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-950 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
