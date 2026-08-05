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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider border border-sky-500/20">
            Tech Stack & Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
            Technical Architecture & Mastery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized core competencies across modern full-stack web engineering, cloud backend systems, and developer tooling.
          </p>
        </div>

        {/* Semantic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const CategoryIcon = iconMap[category.icon] || Layout
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0">
                      <CategoryIcon size={20} />
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
                          className="group relative flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-medium hover:border-sky-400/50 hover:bg-slate-800/90 hover:text-white transition-all duration-200 cursor-default"
                        >
                          <SkillIcon
                            size={14}
                            className="text-sky-400 group-hover:scale-110 transition-transform shrink-0"
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
