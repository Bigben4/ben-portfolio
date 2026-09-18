import React from 'react'
import { motion } from 'framer-motion'
import { projectsData } from '../data/projectsData'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects() {
 return (
 <section id="projects" className="py-24 border-b border-gray-200 bg-white relative overflow-hidden">
 {/* Background Radial Ambient Glows */}
 <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
 <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
 <div className="absolute inset-0 bg-white [background-size:24px_24px] pointer-events-none opacity-30" />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
 {/* Section Header */}
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, ease: 'easeOut' }}
 className="text-center max-w-3xl mx-auto mb-16 space-y-4"
 >
 <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Space_Grotesk'] text-black tracking-tight leading-tight">
 Projects
 </h2>
 <p className="text-black text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
 Architectural breakdowns of production-grade platforms focusing on real-world problem solving, scalability, and engineering impact.
 </p>
 </motion.div>

 {/* Projects Case Studies Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {projectsData.map((project, index) => (
 <ProjectCard key={project.id} project={project} index={index} />
 ))}
 </div>
 </div>
 </section>
 )
}
