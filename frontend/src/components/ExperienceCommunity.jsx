import React from 'react'
import { motion } from 'framer-motion'
import { workExperience, communityExperience } from '../data/experienceData'
import { Briefcase, Trophy, Users, CheckCircle2, Calendar, MapPin } from 'lucide-react'

export default function ExperienceCommunity() {
  return (
    <section id="experience" className="py-24 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider border border-sky-500/20">
            Career Journey & Hackathons
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
            Professional Experience & Community Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Track record of engineered software solutions, measurable technical results, and leadership in active tech communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                  Software Engineering Experience
                </h3>
                <p className="text-xs text-slate-400">Action Verb + Quantified Impact</p>
              </div>
            </div>

            <div className="relative pl-6 space-y-10 border-l-2 border-slate-800 ml-3">
              {workExperience.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-400 group-hover:bg-sky-400 group-hover:scale-125 transition-all shadow-md shadow-sky-500/30" />

                  <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5 shadow-lg space-y-3 group-hover:border-sky-500/30 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white font-['Space_Grotesk']">
                          {exp.role}
                        </h4>
                        <p className="text-xs font-semibold text-sky-400">{exp.company}</p>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                          <Calendar size={12} className="text-sky-400" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Impact Bullet Points */}
                    <ul className="space-y-2 pt-2 text-xs text-slate-300">
                      {exp.highlights.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community & Hackathons Timeline (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Trophy size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                  Hackathons & Community
                </h3>
                <p className="text-xs text-slate-400">Leadership, Collaboration & Awards</p>
              </div>
            </div>

            <div className="space-y-6">
              {communityExperience.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-800 bg-slate-950/80 p-5 shadow-lg space-y-3 hover:border-amber-500/40 transition-colors"
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
                    <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 shrink-0">
                      {item.date}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-1 text-xs text-slate-300">
                    {item.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <Users size={14} className="text-amber-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
