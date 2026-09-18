import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import aboutPortrait from '../assets/about-portrait.webp'

export default function AboutMe() {
 const focusAreas = [
 'Web & Mobile Development',
 'AI Systems & RAG Pipelines',
 'High-Performance APIs',
 'Scalable Cloud Architecture'
 ]

 return (
 <section id="about" className="py-20 md:py-28 border-b border-gray-200 relative overflow-hidden">
 {/* Contrasting Atmospheric Ambient Glows */}
 <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
 <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
 <div className="absolute inset-0 bg-white [background-size:24px_24px] pointer-events-none" />

 <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
 
 {/* Section Header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7, ease: 'easeOut' }}
 className="text-center max-w-2xl mx-auto mb-16 space-y-3"
 >
 <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Space_Grotesk'] text-black tracking-tight leading-tight">
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
 <div className="relative w-full max-w-md lg:max-w-lg rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-xl">
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
 <p className="text-black text-xl sm:text-2xl md:text-3xl leading-relaxed font-normal tracking-tight">
 Hi, I'm <span className="text-blue-600 font-black">NDILLE ENUME</span>. I develop modern web and mobile applications with a focus on performance, scalability, and clean user experience. I also work with AI automation systems and RAG pipelines to build smarter and more efficient digital solutions. My goal is to create software that solves real-world problems and helps businesses and communities grow.
 </p>

 {/* Clean Minimalist Focus Tags */}
 <div className="pt-2 flex flex-wrap gap-2.5">
 {focusAreas.map((area, idx) => (
 <span
 key={idx}
 className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white text-black border border-gray-200"
 >
 {area}
 </span>
 ))}
 </div>

 {/* Direct Links */}
 <div className="pt-2 flex items-center gap-6">
 <a
 href="#projects"
 className="inline-flex items-center gap-2 text-base font-semibold text-blue-600 hover:text-blue-600 transition-colors group"
 >
 <span>View Selected Projects</span>
 <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
 </a>
 <span className="text-neutral-700">·</span>
 <a
 href="#contact"
 className="text-base font-medium text-black hover:text-black transition-colors"
 >
 Get in Touch
 </a>
 </div>
 </motion.div>

 </div>

 </div>
 </section>
 )
}
