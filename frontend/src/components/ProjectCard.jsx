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
 className="group relative rounded-2xl bg-gray-200 dark:bg-zinc-800 shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
 >
 {/* Animated Spinning Border Layer (Visible on Hover) */}
 <div 
   className="absolute inset-[-100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[spin_3s_linear_infinite]"
   style={{ background: 'conic-gradient(from 90deg, transparent 0%, transparent 40%, rgba(37, 99, 235, 0.4) 50%, #2563eb 60%, transparent 100%)' }}
 />

 {/* Solid Inner Background (Masks the center, leaves 1px border) */}
 <div className="absolute inset-[1px] rounded-2xl bg-white dark:bg-zinc-950 z-0 transition-colors" />

 {/* Background Subtle Gradient Overlay */}
 <div
 className={`absolute inset-[1px] rounded-2xl ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0`}
 />

 <div className="relative z-10 p-5 sm:p-6 space-y-5 flex-1 flex flex-col justify-between h-full w-full">
 <div className="space-y-4">
 {/* Card Header: Category & Action Links */}
 <div className="flex items-start justify-between gap-4">
 <div>
 <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold text-blue-600 bg-blue-600/10 border border-blue-600 mb-2">
 {project.category}
 </span>
 <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-black dark:text-white group-hover:text-blue-600 transition-colors">
 {project.title}
 </h3>
 <p className="text-xs text-black dark:text-white font-medium mt-1">
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
 className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-black dark:text-white hover:text-black dark:text-white hover:border-blue-600 hover:bg-white dark:bg-zinc-950 transition-all flex items-center justify-center shadow-sm"
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
 className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-600 text-white font-bold text-xs shadow-md shadow-sky-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
 title="Open Live Project in New Tab"
 >
 <span>Live Demo</span>
 <ExternalLink className="w-4 h-4 shrink-0" />
 </a>
 )}
 </div>
 </div>

 {/* Interactive Browser Frame Live Preview Container */}
 <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl group/browser transition-all duration-300 hover:border-blue-600">
 {/* Browser Header Bar */}
 <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-black dark:text-white text-[11px] font-mono select-none">
 {/* Window Dots */}
 <div className="flex items-center gap-1.5">
 <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
 <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
 <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
 </div>

 {/* Browser URL Bar Display */}
 <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-[10px] text-black dark:text-white max-w-[180px] sm:max-w-[240px] truncate">
 <Globe className="w-3 h-3 text-blue-600 shrink-0" />
 <span className="truncate">{getDisplayUrl()}</span>
 </div>

 {/* Browser Actions: Reload & Launch */}
 <div className="flex items-center gap-1.5">
 {project.demoUrl && (
 <button
 type="button"
 onClick={handleReloadIframe}
 className="p-1 rounded hover:bg-white dark:bg-zinc-950 text-black dark:text-white hover:text-black dark:text-white transition-colors"
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
 className="flex items-center gap-1 px-2 py-0.5 rounded bg-white dark:bg-zinc-950 hover:bg-blue-600 hover:text-blue-600 border border-gray-200 dark:border-zinc-800 hover:border-blue-600 text-[10px] text-blue-600 font-semibold transition-all"
 title="Open live site in new tab"
 >
 <span className="hidden sm:inline">Launch</span>
 <ArrowUpRight className="w-3 h-3" />
 </a>
 </div>
 </div>

 {/* Viewport Live Preview Display Area */}
 <div className="relative aspect-[16/10] w-full overflow-hidden bg-white dark:bg-zinc-950">
 {project.demoUrl ? (
 <a
 href={targetUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="relative block w-full h-full overflow-hidden cursor-pointer group/iframe"
 title={`Open ${project.title}`}
 >
 {/* Loading Spinner */}
 {iframeLoading && (
 <div className="absolute inset-0 bg-white dark:bg-zinc-950 flex flex-col items-center justify-center gap-2 z-20 text-black dark:text-white text-xs font-mono">
 <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
 <span>Loading Live Preview...</span>
 </div>
 )}

 {/* Scaled High-Res Desktop Iframe (non-interactive) */}
 <iframe
 key={iframeKey}
 src={project.demoUrl}
 title={`${project.title} live preview`}
 loading="lazy"
 onLoad={() => setIframeLoading(false)}
 className={`w-[200%] h-[200%] transform scale-50 origin-top-left border-0 transition-all duration-700 pointer-events-none group-hover/iframe:scale-[0.52] ${
 iframeLoading ? 'opacity-0' : 'opacity-100'
 }`}
 sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
 />

 {/* Transparent hover overlay */}
 <div className="absolute inset-0 z-30 bg-black/0 group-hover/iframe:bg-black/5 dark:group-hover/iframe:bg-white/5 transition-colors" />
 </a>
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
 <div className="space-y-3 text-xs text-black dark:text-white leading-relaxed pt-1">
 {/* Problem Statement */}
 <div className="bg-white dark:bg-zinc-950 p-3 rounded-lg border border-gray-200 dark:border-zinc-800">
 <h4 className="font-semibold text-blue-600 text-xs flex items-center gap-1.5 mb-1 uppercase tracking-wider">
 <Layers className="w-3.5 h-3.5" />
 <span>Problem Statement</span>
 </h4>
 <p className="text-black dark:text-white">{project.problemStatement || project.problem}</p>
 </div>

 {/* Technical Architecture */}
 <div className="bg-white dark:bg-zinc-950 p-3 rounded-lg border border-gray-200 dark:border-zinc-800">
 <h4 className="font-semibold text-purple-400 text-xs flex items-center gap-1.5 mb-1 uppercase tracking-wider">
 <Cpu className="w-3.5 h-3.5" />
 <span>Technical Architecture</span>
 </h4>
 <p className="text-black dark:text-white">{project.technicalArchitecture || project.solution}</p>
 </div>
 </div>
 </div>

 {/* Card Footer: Tech Stack Badges */}
 <div className="pt-4 border-t border-gray-200 dark:border-zinc-800 space-y-3">
 {/* Tech Stack Pills */}
 <div className="flex flex-wrap gap-1.5">
 {(project.technologies || project.techStack || []).map((tech) => (
 <span
 key={tech}
 className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-black dark:text-white"
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
