import React from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '../data/skillsData'
import {
  Layout,
  Server,
  Wrench,
  Code,
  Layers,
  FileCode,
  Terminal,
  Palette,
  Globe,
  Cpu,
  Zap,
  Code2,
  Box,
  Database,
  HardDrive,
  Activity,
  GitBranch,
  Sparkles,
  Share2,
  Cloud
} from 'lucide-react'

// Icon mapping helper
const iconMap = {
  Layout,
  Server,
  Wrench,
  Code,
  Layers,
  FileCode,
  Terminal,
  Palette,
  Globe,
  Cpu,
  Zap,
  Code2,
  Box,
  Database,
  HardDrive,
  Activity,
  GitBranch,
  Sparkles,
  Share2,
  Cloud
}

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-24 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-500/20">
            Tech Stack & Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
            Technical Architecture & Mastery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized core competencies across modern full-stack web engineering, cloud backend systems, and developer tooling.
          </p>
        </motion.div>

        {/* Semantic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const CategoryIcon = iconMap[category.icon] || Layout
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-800">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                      <CategoryIcon className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = iconMap[skill.icon] || Code
                      return (
                        <div
                          key={skill.name}
                          className="group relative flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-slate-200 text-xs font-medium hover:border-blue-400/50 hover:bg-neutral-800 hover:text-white transition-all duration-200 cursor-default"
                        >
                          <SkillIcon
                            className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-blue-400 group-hover:scale-110 transition-transform"
                          />
                          <span>{skill.name}</span>
                          <span className="text-[9px] text-slate-500 font-mono bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800/80">
                            {skill.level}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Footer indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Category {idx + 1} of 3</span>
                  <span className="text-sky-400 font-semibold">{category.skills.length} Mastered</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
