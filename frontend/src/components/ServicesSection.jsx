import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, BrainCircuit, CloudCog } from 'lucide-react'

const services = [
  {
    id: 1,
    number: '01',
    title: 'Web & Mobile Development',
    description: 'Engineering high-performance, responsive applications using React, Next.js, and modern mobile frameworks. Focused on clean UI/UX and seamless user experiences.',
    icon: Code2,
    gradient: 'from-blue-600/10 to-indigo-600/10',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-600/20'
  },
  {
    id: 2,
    number: '02',
    title: 'AI Integration & Automation',
    description: 'I help businesses save time and reduce stress by using AI and automation to handle repetitive tasks and improve workflows. This can include AI-powered features, automated customer support, document processing, smart dashboards, AI agents, and RAG-based systems for intelligent applications. The goal is simple: less manual work, faster processes, better service, and more time to focus on what truly matters.',
    icon: BrainCircuit,
    gradient: 'from-emerald-600/10 to-teal-600/10',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-600/20'
  },
  {
    id: 3,
    number: '03',
    title: 'UI/UX & Product Experience',
    description: 'I design modern, clean, and easy-to-use digital experiences that help users trust your product and navigate it with ease. I focus on creating interfaces that feel smooth, professional, and simple to understand while helping businesses turn visitors into active users, customers, or loyal clients.',
    icon: Palette,
    gradient: 'from-purple-600/10 to-fuchsia-600/10',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-600/20'
  },
  {
    id: 4,
    number: '04',
    title: 'Scalable Cloud Architecture',
    description: 'Deploying reliable, auto-scaling infrastructure on AWS and Vercel. Utilizing Docker, Redis, and modern CI/CD pipelines to ensure maximum uptime.',
    icon: CloudCog,
    gradient: 'from-sky-600/10 to-cyan-600/10',
    iconColor: 'text-sky-600',
    borderColor: 'border-sky-600/20'
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Contrasting Ambient Glows */}
      <div className="absolute top-1/3 -left-20 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Space_Grotesk'] text-black dark:text-white tracking-tight leading-tight">
            Specialized Services
          </h2>
          <p className="text-black dark:text-white text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering robust engineering solutions tailored to scale businesses, automate workflows, and enhance digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
              className="group relative p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Default static gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-100 group-hover:opacity-30 transition-opacity duration-700`} />
              
              {/* Animated glowing orbs and floating icons on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${service.gradient} blur-3xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 ease-out`} />
                <div className={`absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr ${service.gradient} blur-3xl opacity-0 group-hover:opacity-80 group-hover:scale-150 transition-all duration-1000 ease-out delay-100`} />
                
                {/* Floating Background Icons */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 z-0 mix-blend-multiply">
                  <service.icon className={`absolute top-4 left-1/4 w-24 h-24 ${service.iconColor} animate-float1`} strokeWidth={1} />
                  <service.icon className={`absolute -bottom-6 right-8 w-32 h-32 ${service.iconColor} animate-float2`} strokeWidth={1} />
                  <service.icon className={`absolute top-1/3 -right-8 w-20 h-20 ${service.iconColor} animate-float3`} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content wrapped to sit above backgrounds */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white dark:bg-zinc-950 border ${service.borderColor} shadow-sm transform group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={2} />
                  </div>
                  <span className="text-4xl sm:text-5xl font-black text-black dark:text-white/5 font-['Space_Grotesk'] leading-none transform group-hover:translate-x-2 transition-transform duration-500">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 font-['Space_Grotesk'] tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base group-hover:text-black dark:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
