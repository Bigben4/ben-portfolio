import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  Key,
  Copy,
  Check,
  Cpu,
  Layers,
  AlertCircle,
  Sparkles
} from 'lucide-react'
import { GithubIcon } from './UI/SocialIcons'

export default function ProjectCard({ project }) {
  const [copiedField, setCopiedField] = useState(null)

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldName)
    setTimeout(() => {
      setCopiedField(null)
    }, 2000)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Background Subtle Gradient Overlay */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
      />

      <div className="relative z-10 space-y-5">
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
              {project.tagline}
            </p>
          </div>

          {/* Action Links (Live Demo + GitHub) */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all"
                title="View Source Code"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo for ${project.title}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-sky-500/10 hover:bg-sky-500 hover:text-slate-950 border border-sky-500/30 text-sky-400 font-semibold text-xs transition-all"
                title="Live Demo"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Demo Credentials Box */}
        {project.demoAccount && (
          <div className="rounded-xl bg-slate-900/90 border border-amber-500/30 p-3.5 space-y-2 text-xs">
            <div className="flex items-center justify-between text-amber-400 font-semibold">
              <div className="flex items-center gap-1.5">
                <Key size={14} />
                <span>Demo Account Credentials</span>
              </div>
              <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                One-Click Copy
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono">
              <button
                type="button"
                onClick={() => handleCopy(project.demoAccount.email, 'email')}
                className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all text-left group/btn"
                title="Click to copy email"
              >
                <div className="truncate">
                  <span className="text-slate-500 text-[10px] block font-sans">Email:</span>
                  <span className="text-sky-300">{project.demoAccount.email}</span>
                </div>
                {copiedField === 'email' ? (
                  <Check size={14} className="text-emerald-400 shrink-0" />
                ) : (
                  <Copy size={14} className="text-slate-500 group-hover/btn:text-sky-400 shrink-0" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleCopy(project.demoAccount.password, 'password')}
                className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all text-left group/btn"
                title="Click to copy password"
              >
                <div className="truncate">
                  <span className="text-slate-500 text-[10px] block font-sans">Password:</span>
                  <span className="text-amber-300">{project.demoAccount.password}</span>
                </div>
                {copiedField === 'password' ? (
                  <Check size={14} className="text-emerald-400 shrink-0" />
                ) : (
                  <Copy size={14} className="text-slate-500 group-hover/btn:text-amber-400 shrink-0" />
                )}
              </button>
            </div>
          </div>
        )}

        {/* Structured Case Study Sections */}
        <div className="space-y-3.5 text-xs text-slate-300 leading-relaxed pt-1">
          {/* Problem Statement */}
          <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
            <h4 className="font-semibold text-slate-200 text-xs flex items-center gap-1.5 mb-1 text-sky-400 uppercase tracking-wider">
              <span>Problem Statement</span>
            </h4>
            <p className="text-slate-300">{project.problemStatement}</p>
          </div>

          {/* Technical Architecture */}
          <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
            <h4 className="font-semibold text-slate-200 text-xs flex items-center gap-1.5 mb-1 text-purple-400 uppercase tracking-wider">
              <Layers size={13} />
              <span>Technical Architecture</span>
            </h4>
            <p className="text-slate-300">{project.technicalArchitecture}</p>
          </div>

          {/* Key Engineering Challenge */}
          <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
            <h4 className="font-semibold text-slate-200 text-xs flex items-center gap-1.5 mb-1 text-emerald-400 uppercase tracking-wider">
              <Cpu size={13} />
              <span>Key Engineering Challenge</span>
            </h4>
            <p className="text-slate-300">{project.engineeringChallenge}</p>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-sky-500/30 transition-colors"
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
