import { motion } from 'framer-motion'
import { journalMilestones } from '../data/journalData'
import { Calendar, Trophy, Rocket, Users, Code2, Sparkles } from 'lucide-react'

const iconMap = {
  Trophy,
  Rocket,
  Users,
  Code2
}

const animationEase = [0.21, 0.47, 0.32, 0.98]

export default function DeveloperJournal() {
  return (
    <section
      id="journal"
      className="relative w-full bg-black py-24 md:py-36 overflow-hidden border-b border-neutral-800"
    >
      {/* Background Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-60" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: animationEase }}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-28 space-y-3"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
            Chronicles & Event Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
            Developer Journal & Milestones
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Timeline of hackathon victories, developer summit presentations, and major engineering releases by NDILLE ENUME.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Stem Line: Smooth top-to-bottom height reveal */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.0, ease: animationEase }}
            style={{ originY: 0 }}
            className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500/40 via-neutral-800 to-neutral-800/40 pointer-events-none origin-top"
          />

          {/* Timeline Items List */}
          <div className="space-y-16 md:space-y-28">
            {journalMilestones.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Sparkles
              const isEven = index % 2 === 0

              return (
                <div
                  key={item.id}
                  id={`journal-item-${item.id}`}
                  className="relative flex flex-col md:grid md:grid-cols-2 md:gap-14 lg:gap-20 items-center pl-10 sm:pl-14 md:pl-0"
                >
                  {/* Circular Junction Node (Desktop: Center Stem / Mobile: Left Margin Stem) */}
                  {/* Desktop Node */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none"
                  >
                    <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-black shadow-[0_0_10px_#3b82f6] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    </div>
                  </motion.div>

                  {/* Mobile Node */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="md:hidden absolute left-4 sm:left-6 -translate-x-1/2 top-6 z-20 items-center justify-center flex pointer-events-none"
                  >
                    <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-black shadow-[0_0_10px_#3b82f6] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    </div>
                  </motion.div>

                  {/* Text Content Block (Soft horizontal entry matching column side) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: animationEase }}
                    className={`order-1 ${isEven ? 'md:order-1' : 'md:order-2'} w-full`}
                  >
                    <div className="group relative rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 sm:p-7 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                      {/* Subtle hover gradient */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Header Badges */}
                      <div className="relative z-10 flex flex-wrap items-center gap-2.5 mb-4">
                        {/* Year / Date Badge */}
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </span>

                        {/* Category Badge */}
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${item.badgeColor}`}>
                          <IconComponent className="w-3.5 h-3.5" />
                          {item.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="relative z-10 text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white tracking-tight group-hover:text-blue-300 transition-colors leading-snug mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="relative z-10 text-neutral-400 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Image Container Block (Smooth scale and fade reveal) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: animationEase }}
                    className={`order-2 ${isEven ? 'md:order-2' : 'md:order-1'} w-full mt-4 md:mt-0`}
                  >
                    <div className="group relative h-56 md:h-72 w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                      <img
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Dark Gradient Overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Bottom Overlay Info Tag */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/85 border border-neutral-800/80 backdrop-blur-md text-xs font-mono text-neutral-300 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" />
                          {item.date}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/85 border border-neutral-800/80 backdrop-blur-md text-xs font-medium text-neutral-400">
                          <IconComponent className="w-3.5 h-3.5 text-blue-400" />
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
