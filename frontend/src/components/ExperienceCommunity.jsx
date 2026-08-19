import React from 'react'
import { motion } from 'framer-motion'
import { workExperience, communityExperience } from '../data/experienceData'
import { Briefcase, Trophy, Users, CheckCircle2, Calendar, MapPin } from 'lucide-react'

export default function ExperienceCommunity() {
  return (
    <section id="experience" className="py-24 border-b border-neutral-800 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-500/20">
            Career Journey & Hackathons
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
            Professional Experience & Community Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Track record of engineered software solutions, measurable technical results, and leadership in active tech communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex items-center gap-3 pb-3 border-b border-slate-800"
            >
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                  Software Engineering Experience
                </h3>
                <p className="text-xs text-slate-400">Action Verb + Quantified Impact</p>
              </div>
            </motion.div>

            <div className="relative pl-6 space-y-10 border-l-2 border-slate-800 ml-3">
              {workExperience.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-blue-400 group-hover:bg-blue-400 group-hover:scale-125 transition-all shadow-md shadow-blue-500/30" />

                  <div className="rounded-xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-lg space-y-3 group-hover:border-blue-500/30 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white font-['Space_Grotesk']">
                          {exp.role}
                        </h4>
                        <p className="text-xs font-semibold text-blue-400">{exp.company}</p>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
                          <Calendar className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-blue-400" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Impact Bullet Points */}
                    <ul className="space-y-2 pt-2 text-xs text-slate-300">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-emerald-400 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Community & Hackathons Timeline (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex items-center gap-3 pb-3 border-b border-slate-800"
            >
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Trophy className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                  Hackathons & Community
                </h3>
                <p className="text-xs text-slate-400">Leadership, Collaboration & Awards</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {communityExperience.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
                  className="rounded-xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-lg space-y-3 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-1.5">
                        {item.role}
                      </span>
                      <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400">{item.organization}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800 shrink-0">
                      {item.date}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-1 text-xs text-slate-300">
                    {item.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                        <Users className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-amber-400 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
