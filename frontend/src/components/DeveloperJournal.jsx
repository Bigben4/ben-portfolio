import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { journalMilestones } from '../data/journalData'
import { Calendar, Trophy, Rocket, Users, Code2, Sparkles, ChevronLeft, ChevronRight, Layers, Database, Server } from 'lucide-react'

const iconMap = {
  Trophy,
  Rocket,
  Users,
  Code2,
  Sparkles,
  Database,
  Server,
  Layers
}

function MilestoneImageSlider({ images, singleImage, title, isActive, date, category, IconComponent }) {
  // Normalize images array
  const rawList = Array.isArray(images) && images.length > 0 ? images : singleImage ? [singleImage] : []
  const imageList = rawList.map((img) => (typeof img === 'string' ? img : img?.url || img))

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-switch photos of the current milestone every 4 seconds when active (slow, cinematic pace)
  useEffect(() => {
    if (!isActive || isHovered || imageList.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isActive, isHovered, imageList.length])

  const goToNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % imageList.length)
  }

  const goToPrev = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length)
  }

  const goToIndex = (idx, e) => {
    e.stopPropagation()
    setCurrentIndex(idx)
  }

  const currentImage = imageList[currentIndex] || imageList[0]

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group w-full h-72 sm:h-88 md:h-[400px] lg:h-[450px] xl:h-[480px] rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl relative transition-all duration-1000 select-none ${
        isActive
          ? 'border-2 border-sky-500/70 shadow-[0_0_35px_rgba(56,189,248,0.25)]'
          : 'border border-neutral-800'
      }`}
    >
      {/* 1s Smooth Crossfade between photos of this milestone */}
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={currentImage}
          alt={`${title} - photo ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
          className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </AnimatePresence>

      {/* Atmospheric Depth Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none z-10" />

      {/* Top Header Overlays: Image Counter Badge & Interactive Progress Segments */}
      {imageList.length > 1 && (
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-auto">
          {/* Photo Counter Pill */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/80 border border-neutral-800/90 backdrop-blur-md text-xs font-mono text-neutral-300 shadow-md">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>{currentIndex + 1} / {imageList.length}</span>
          </span>

          {/* Interactive Progress Indicators */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/80 border border-neutral-800/90 backdrop-blur-md">
            {imageList.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => goToIndex(idx, e)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-5 bg-blue-400 shadow-[0_0_8px_#3b82f6]'
                    : 'w-1.5 bg-neutral-600 hover:bg-neutral-400'
                }`}
                aria-label={`Switch to photo ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Prev / Next Navigation Arrows */}
      {imageList.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 hover:bg-blue-600 border border-neutral-700/80 hover:border-blue-400 text-white backdrop-blur-md transition-all duration-300 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 z-20 focus:opacity-100 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={goToNext}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 hover:bg-blue-600 border border-neutral-700/80 hover:border-blue-400 text-white backdrop-blur-md transition-all duration-300 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 z-20 focus:opacity-100 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </>
      )}
    </div>
  )
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
        rootMargin: '-15% 0px -15% 0px',
        threshold: 0.2
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={rowRef}
      id={`journal-milestone-${item.id}`}
      className="flex items-center justify-center relative my-16 sm:my-24 md:my-32 lg:my-40 w-full"
    >
      {/* Central Junction Node (Desktop: Center Axis) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
        <div
          className={`w-6 h-6 rounded-full border-2 bg-neutral-950 flex items-center justify-center transition-all duration-500 ${
            isActive
              ? 'border-sky-400 shadow-[0_0_18px_#38bdf8] scale-125 ring-4 ring-sky-500/20'
              : 'border-neutral-700 shadow-none opacity-50 scale-90'
          }`}
        >
          {isActive && (
            <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
          )}
        </div>
      </div>

      {/* Mobile Node (Left-aligned stem) */}
      <div className="md:hidden absolute left-4 sm:left-6 -translate-x-1/2 top-8 z-20 items-center justify-center flex pointer-events-none">
        <div
          className={`w-5 h-5 rounded-full border-2 bg-neutral-950 flex items-center justify-center transition-all duration-500 ${
            isActive
              ? 'border-sky-400 shadow-[0_0_14px_#38bdf8] scale-110'
              : 'border-neutral-700 shadow-none opacity-40 scale-90'
          }`}
        >
          {isActive && (
            <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_6px_#38bdf8]" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-28 xl:gap-36 items-center w-full">
          
          {/* TEXT & BADGES BLOCK */}
          <div
            className={`w-full ${
              isEven
                ? 'md:order-1 md:pr-4 lg:pr-8'
                : 'md:order-2 md:pl-4 lg:pl-8'
            }`}
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              {/* Date Badge */}
              <span
                className={`font-mono text-xs sm:text-sm px-3.5 py-1 rounded-full border font-semibold inline-flex items-center gap-1.5 transition-all duration-500 ${
                  isActive
                    ? 'border-blue-500/40 bg-blue-950/30 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                    : 'border-neutral-800 bg-neutral-900/30 text-neutral-500'
                }`}
              >
                <Calendar className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-neutral-500'}`} />
                {item.date}
              </span>

              {/* Category Badge */}
              <span
                className={`text-xs sm:text-sm px-3 py-1 rounded-full font-semibold border inline-flex items-center gap-1.5 transition-all duration-500 ${
                  isActive
                    ? `${item.badgeColor} shadow-[0_0_10px_rgba(59,130,246,0.25)]`
                    : 'border-neutral-800 bg-neutral-900/30 text-neutral-500'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                {item.category}
              </span>
            </div>

            {/* Title */}
            <h3
              className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight font-['Space_Grotesk'] leading-[1.15] mb-3 transition-all duration-500 ${
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
              className={`text-sm sm:text-base leading-relaxed max-w-xl transition-colors duration-500 ${
                isActive ? 'text-neutral-300' : 'text-neutral-500'
              }`}
            >
              {item.description}
            </p>
          </div>

          {/* LARGE PHOTO CARD WITH MULTI-IMAGE SWITCHING */}
          <div
            className={`w-full ${
              isEven
                ? 'md:order-2 md:pl-4 lg:pl-8'
                : 'md:order-1 md:pr-4 lg:pr-8'
            }`}
          >
            <MilestoneImageSlider
              images={item.images}
              singleImage={item.imageSrc || item.image}
              title={item.title}
              isActive={isActive}
              date={item.date}
              category={item.category}
              IconComponent={IconComponent}
            />
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
      className="relative w-full bg-gradient-to-b from-neutral-950 via-slate-950 to-neutral-950 py-16 sm:py-24 border-b border-slate-800/80 text-slate-100 overflow-hidden"
    >
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf806_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      {/* Atmospheric Royal Blue Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-sky-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
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
            Timeline of hackathon victories, developer summit presentations, and major engineering releases.
          </motion.p>
        </div>

        {/* Full-Scale Timeline Container */}
        <div ref={containerRef} className="relative">
          
          {/* Central Stem (Desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[3px] bg-slate-800 pointer-events-none hidden md:block"
          />

          {/* Animated Glowing Progress Line (Desktop) */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[3px] bg-gradient-to-b from-sky-400 via-blue-500 to-cyan-400 shadow-[0_0_18px_#38bdf8] pointer-events-none hidden md:block origin-top"
          />

          {/* Left Stem (Mobile) */}
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-6 top-4 bottom-4 w-[3px] bg-slate-800 pointer-events-none md:hidden"
          />

          {/* Animated Glowing Progress Line (Mobile) */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            aria-hidden="true"
            className="absolute left-4 sm:left-6 top-4 bottom-4 w-[3px] bg-gradient-to-b from-sky-400 via-blue-500 to-cyan-400 shadow-[0_0_16px_#38bdf8] pointer-events-none md:hidden origin-top"
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
