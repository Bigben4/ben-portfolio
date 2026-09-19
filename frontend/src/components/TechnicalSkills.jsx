import React from 'react'
import { motion } from 'framer-motion'
import { skillsCarousel } from '../data/skillsData'

export default function TechnicalSkills() {
  // Duplicate array twice to ensure smooth infinite marquee scroll
  const marqueeItems = [...skillsCarousel, ...skillsCarousel]

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-black font-['Space_Grotesk'] text-black dark:text-white tracking-tight mb-4">
            Technical Mastery
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The core technologies, frameworks, and architectures I use to engineer robust, high-performance software.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Carousel Container */}
      <div className="relative flex overflow-hidden w-full group py-4">
        {/* Left/Right Fading Gradients for Smooth Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent dark:from-zinc-900 z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent dark:from-zinc-900 z-10 pointer-events-none" />
        
        {/* Animated Track */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
          {marqueeItems.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center min-w-[140px] md:min-w-[180px] space-y-5 px-4"
            >
              {/* Image Icon Box */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 shadow-md flex items-center justify-center p-4 transform hover:scale-110 hover:-translate-y-2 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 cursor-crosshair">
                <img 
                  src={skill.src} 
                  alt={skill.name} 
                  className={`w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 ${skill.invertDark ? 'dark:invert' : ''}`}
                  loading="lazy"
                />
              </div>
              
              {/* Skill Name */}
              <span className="text-sm font-semibold font-mono text-gray-700 dark:text-gray-300 tracking-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
