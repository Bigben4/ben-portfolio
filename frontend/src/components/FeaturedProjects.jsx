import React from 'react'
import { motion } from 'framer-motion'
import { projectsData } from '../data/projectsData'
import ProjectCard from './ProjectCard'
import { FolderGit2, Sparkles } from 'lucide-react'

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 border-b border-slate-800/60 relative">
      {/* Background Radial Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-sky-500/20">
              <FolderGit2 size={14} />
              <span>Production Work & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
              Featured Software Engineering Projects
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Architectural breakdowns of production-grade platforms focusing on real-world problem solving, scalability, and engineering impact.
          </p>
        </div>

        {/* Projects Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
