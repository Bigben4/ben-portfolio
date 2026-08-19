import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { journalMilestones } from '../data/journalData'
import { Calendar, Trophy, Rocket, Users, Code2, Sparkles } from 'lucide-react'

const iconMap = {
  Trophy,
  Rocket,
  Users,
  Code2,
  Sparkles
}

function MilestoneRow({ item, index, isEven }) {
  const rowRef = useRef(null)
  const [isActive, setIsActive] = useState(index === 0)
  const IconComponent = iconMap[item.icon] || Sparkles

  useEffect(() => {
    const el = rowRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting)
      },
      {
        rootMargin: '-25% 0px -25% 0px',
        threshold: 0.15
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={rowRef}
      id={`journal-milestone-${item.id}`}
      className="min-h-[75vh] md:min-h-[85vh] flex items-center justify-center relative my-12 md:my-20 w-full"
    >
      {/* Central Junction Node (Desktop: Center Axis) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
        <div
          className={`w-5 h-5 rounded-full border-2 bg-black flex items-center justify-center transition-all duration-500 ${
            isActive
              ? 'border-blue-500 shadow-[0_0_14px_#3b82f6] scale-110'
              : 'border-neutral-700 shadow-none opacity-40 scale-90'
          }`}
        >
          {isActive && (
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_6px_#60a5fa]" />
          )}
        </div>
      </div>

      {/* Mobile Node (Left-aligned stem) */}
      <div className="md:hidden absolute left-4 sm:left-6 -translate-x-1/2 top-8 z-20 items-center justify-center flex pointer-events-none">
        <div
          className={`w-5 h-5 rounded-full border-2 bg-black flex items-center justify-center transition-all duration-500 ${
            isActive
              ? 'border-blue-500 shadow-[0_0_14px_#3b82f6] scale-110'
              : 'border-neutral-700 shadow-none opacity-40 scale-90'
          }`}
        >
          {isActive && (
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_6px_#60a5fa]" />
          )}
        </div>
      </div>

      {/* Main Content Grid */}
      <div
        className={`w-full transition-all duration-500 ease-out pl-10 sm:pl-14 md:pl-0 ${
          isActive
            ? 'opacity-100 scale-100'
            : 'opacity-30 scale-[0.97] blur-[0.5px]'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center w-full">
          
          {/* TEXT & BADGES BLOCK */}
          <div
            className={`w-full ${
              isEven ? 'md:order-1' : 'md:order-2'
            }`}
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {/* Date Badge */}
              <span
                className={`font-mono text-xs sm:text-sm px-4 py-1.5 rounded-full border font-semibold inline-flex items-center gap-2 transition-all duration-500 ${
                  isActive
                    ? 'border-blue-500/40 bg-blue-950/30 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                    : 'border-neutral-800 bg-neutral-900/30 text-neutral-500'
                }`}
              >
                <Calendar className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-neutral-500'}`} />
                {item.date}
              </span>

              {/* Category Badge */}
              <span
                className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-full font-semibold border inline-flex items-center gap-1.5 transition-all duration-500 ${
                  isActive
                    ? `${item.badgeColor} shadow-[0_0_10px_rgba(59,130,246,0.25)]`
                    : 'border-neutral-800 bg-neutral-900/30 text-neutral-500'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {item.category}
              </span>
            </div>

            {/* Title */}
            <h3
              className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-['Space_Grotesk'] leading-[1.15] mb-4 transition-all duration-500 ${
                isActive
                  ? 'text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.25)]'
                  : 'text-neutral-400'
              }`}
              style={
                isActive
                  ? { filter: 'drop-shadow(0 0 12px rgba(59,130,246,0.25))' }
                  : undefined
              }
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-xl transition-colors duration-500 ${
                isActive ? 'text-neutral-300' : 'text-neutral-500'
              }`}
            >
              {item.description}
            </p>
          </div>

          {/* LARGE PHOTO CARD */}
          <div
            className={`w-full ${
              isEven ? 'md:order-2' : 'md:order-1'
            }`}
          >
            <div
              className={`group w-full h-80 sm:h-96 md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl relative transition-all duration-500 ${
                isActive
                  ? 'border-2 border-blue-500/60 shadow-[0_0_30px_rgba(59,130,246,0.2)]'
                  : 'border border-neutral-800'
              }`}
            >
              <img
                src={item.image}
                alt={item.imageAlt || item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Dark Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Bottom Card Footer Tags */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono backdrop-blur-md transition-all duration-500 ${
                    isActive
                      ? 'bg-black/85 border border-blue-500/40 text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                      : 'bg-black/60 border border-neutral-800 text-neutral-500'
                  }`}
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  {item.date}
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium backdrop-blur-md transition-all duration-500 ${
                    isActive
                      ? 'bg-black/85 border border-blue-500/40 text-blue-300'
                      : 'bg-black/60 border border-neutral-800 text-neutral-500'
                  }`}
                >
                  <IconComponent className="w-4 h-4 text-blue-400" />
                  {item.category}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function DeveloperJournal() {
  const containerRef = useRef(null)
  
  // Smooth scroll progression stem line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section
      id="journal"
      className="relative w-full bg-black py-24 sm:py-32 border-b border-neutral-800 text-slate-100 overflow-hidden"
    >
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      {/* Atmospheric Royal Blue Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-sky-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-28 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/40 text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider border border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
          >
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span>Chronicles & Event Highlights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Space_Grotesk'] text-white tracking-tight leading-tight"
          >
            Developer Journal & Milestones
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Timeline of hackathon victories, developer summit presentations, and major engineering releases by NDILLE ENUME.
          </motion.p>
        </div>

        {/* Full-Scale Timeline Container */}
        <div ref={containerRef} className="relative">
          
          {/* Central Stem (Desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-neutral-800/80 pointer-events-none hidden md:block"
          />

          {/* Animated Glowing Progress Line (Desktop) */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-sky-400 to-blue-600 shadow-[0_0_14px_#3b82f6] pointer-events-none hidden md:block origin-top"
          />

          {/* Left Stem (Mobile) */}
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-6 top-4 bottom-4 w-[2px] bg-neutral-800 pointer-events-none md:hidden"
          />

          {/* Animated Glowing Progress Line (Mobile) */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            aria-hidden="true"
            className="absolute left-4 sm:left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-sky-400 to-blue-600 shadow-[0_0_12px_#3b82f6] pointer-events-none md:hidden origin-top"
          />

          {/* Milestone Rows List */}
          <div className="relative z-10 space-y-8 md:space-y-0">
            {journalMilestones.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <MilestoneRow
                  key={item.id}
                  item={item}
                  index={index}
                  isEven={isEven}
                />
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
