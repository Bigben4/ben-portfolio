import React from 'react'
import { motion } from 'framer-motion'
import { journalMilestones } from '../data/journalData'
import { Calendar, Trophy, Rocket, Users, Code2, Sparkles } from 'lucide-react'

const iconMap = {
  Trophy,
  Rocket,
  Users,
  Code2
}

export default function DeveloperJournal() {
  return (
    <section id="journal" className="py-24 border-b border-slate-800/60 relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider border border-sky-500/20">
            Chronicles & Event Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
            Developer Journal & Milestones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Timeline of hackathon victories, developer summit presentations, and major engineering releases with event photos.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-800 -translate-x-1/2" />

          <div className="space-y-10 md:space-y-14">
            {journalMilestones.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Sparkles
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Badge */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full bg-slate-950 border-2 border-sky-400 text-sky-400 z-10 shadow-lg shadow-sky-500/20">
                    <IconComponent size={18} />
                  </div>

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5 shadow-xl hover:border-sky-500/40 transition-all duration-300 space-y-4 group">
                      {/* Image Thumbnail Slot */}
                      <div className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900 group-hover:border-sky-500/30 transition-colors">
                        <img
                          src={item.image}
                          alt={item.imageAlt || item.title}
                          className="w-full h-44 sm:h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Metadata Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold border ${item.badgeColor}`}>
                          {item.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                          <Calendar size={12} className="text-sky-400" />
                          {item.date}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
