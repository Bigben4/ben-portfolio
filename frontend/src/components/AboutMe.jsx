import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FileText } from 'lucide-react'
import aboutPortrait from '../assets/about-portrait.webp'

export default function AboutMe() {
 const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS || 'Ebrahimndille@gmail.com'
 const tags = [
 { label: 'Name', value: 'Ndille Enume' },
 { label: 'Location', value: 'Cameroon' },
 { label: 'Email', value: emailAddress },
 { label: 'Status', value: 'Available for work' }
 ]

 return (
 <section id="about" className="py-20 md:py-28 border-b border-gray-200 dark:border-zinc-800 relative overflow-hidden">
 {/* Contrasting Atmospheric Ambient Glows */}
 <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
 <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
 <div className="absolute inset-0 bg-white dark:bg-zinc-950 [background-size:24px_24px] pointer-events-none" />

 <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
 
 {/* Section Header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7, ease: 'easeOut' }}
 className="text-center max-w-2xl mx-auto mb-16 space-y-3"
 >
 <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Space_Grotesk'] text-black dark:text-white tracking-tight leading-tight">
 About Me
 </h2>
 </motion.div>

 {/* Minimalist 2-Column Grid with Increased Size & Typography */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
 
 {/* Left Column: Enlarged Clean Portrait (6 Cols) */}
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, ease: 'easeOut' }}
 className="lg:col-span-6 relative flex items-center justify-center w-full"
 >
 <div className="relative w-full max-w-md lg:max-w-lg rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl">
 <img
 src={aboutPortrait}
 alt="Ndille Enume"
 className="w-full h-auto object-cover object-center aspect-[4/5]"
 loading="lazy"
 />
 </div>
 </motion.div>

 {/* Right Column: Settled Large Minimalist Text (6 Cols) */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
 className="lg:col-span-6 space-y-8 text-left"
 >
 <div className="space-y-4">
 <h3 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
 Hi, I'm <span className="text-blue-600">NDILLE ENUME</span>.
 </h3>
 <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
 I engineer high-performance web and mobile apps, scalable cloud architectures, and AI-driven automation systems to solve real-world problems efficiently.
 </p>
 </div>

 {/* Personal Info Tags */}
 <div className="pt-2 flex flex-wrap gap-2.5">
 {tags.map((tag, idx) => (
 <span
 key={idx}
 className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white dark:bg-zinc-950 text-black dark:text-white border border-gray-200 dark:border-zinc-800"
 >
 <span className="text-gray-500 mr-1">{tag.label}:</span> {tag.value}
 </span>
 ))}
 </div>

 {/* Direct Links and CTA */}
 <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
 <a
 href="/resume.pdf"
 target="_blank"
 rel="noopener noreferrer"
 className="group min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-black dark:text-white bg-white dark:bg-zinc-950 hover:bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
 >
 <FileText className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-blue-600 group-hover:scale-110 transition-transform" />
 <span>Download CV / Resume</span>
 </a>
 
 <div className="flex items-center gap-4">
 <a
 href="#projects"
 className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
 >
 <span>Selected Projects</span>
 <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
 </a>
 <span className="text-gray-300">|</span>
 <a
 href="#contact"
 className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:text-white transition-colors"
 >
 Get in Touch
 </a>
 </div>
 </div>
 </motion.div>

 </div>

 </div>
 </section>
 )
}
