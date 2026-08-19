import React from 'react'
import { motion } from 'framer-motion'
import { projectsData } from '../data/projectsData'
import ProjectCard from './ProjectCard'
import { FolderGit2, Sparkles } from 'lucide-react'

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 border-b border-neutral-800 bg-black relative">
      {/* Background Radial Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-neutral-800 pb-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-500/20">
              <FolderGit2 className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <span>Production Work & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
              Featured Software Engineering Projects
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Architectural breakdowns of production-grade platforms focusing on real-world problem solving, scalability, and engineering impact.
          </p>
        </motion.div>

        {/* Projects Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
