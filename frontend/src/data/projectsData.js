export const projectsData = [
  {
    id: "questops",
    title: "QuestOps",
    category: "Full-Stack Developer Platform",
    tagline: "Developer Workflow & Real-Time Task Automation Engine",
    demoUrl: "https://questops-demo.vercel.app",
    githubUrl: "https://github.com/ben-dev/questops",
    featured: true,
    demoAccount: {
      email: "guest@questops.dev",
      password: "Password123!"
    },
    problemStatement:
      "Distributed engineering teams suffered from fragmented release tracking and manual approval bottlenecks, delaying delivery pipelines.",
    technicalArchitecture:
      "Built with Next.js 15 App Router and Server Actions, Node.js microservices, PostgreSQL with Prisma ORM, WebSockets for real-time telemetry, and Redis event queues.",
    engineeringChallenge:
      "Reduced real-time dashboard update latency by 68% (from 420ms to 135ms) by engineering optimistic UI state handlers with dynamic WebSocket topic subscriptions.",
    technologies: [
      "Next.js 15",
      "React 19",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "WebSockets",
      "Tailwind CSS"
    ],
    gradient: "from-blue-600/20 via-indigo-600/20 to-sky-500/20"
  },
  {
    id: "heritage-vault",
    title: "HeritageVault",
    category: "Family Heritage & Genealogy Platform",
    tagline: "Interactive Multi-Generational Genealogy & Media Archival Engine",
    demoUrl: "https://heritage-vault.vercel.app",
    githubUrl: "https://github.com/ben-dev/heritage-vault",
    featured: true,
    demoAccount: {
      email: "guest@heritagevault.app",
      password: "Heritage2025!"
    },
    problemStatement:
      "Families lacked a private, high-security digital workspace to map complex ancestral trees and stream high-resolution historical oral archives.",
    technicalArchitecture:
      "React SPA with HTML5 Canvas tree engine, Express.js REST API server, MongoDB schema for dynamic graph trees, Cloudinary CDN pipeline, and JWT auth.",
    engineeringChallenge:
      "Architected a custom incremental rendering engine for 1,000+ node interactive family trees, sustaining steady 60fps canvas zooming and panning.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Canvas API",
      "JWT",
      "Tailwind CSS",
      "Cloudinary"
    ],
    gradient: "from-amber-600/20 via-emerald-600/20 to-teal-500/20"
  },
  {
    id: "shopcraft",
    title: "ShopCraft SaaS",
    category: "High-Performance E-Commerce Engine",
    tagline: "Scalable Multi-Tenant E-Commerce Platform with Real-Time Inventory",
    demoUrl: "https://shopcraft-storefront.vercel.app",
    githubUrl: "https://github.com/ben-dev/shopcraft-engine",
    featured: true,
    demoAccount: {
      email: "admin@shopcraft.io",
      
      password: "ShopAdmin2025!"
    },
    problemStatement:
      "High-volume retailers suffered database deadlocks and inventory drift during high-concurrency flash sale traffic spikes.",
    technicalArchitecture:
      "Next.js App Router with SSR storefront, Node.js & Express REST API, PostgreSQL database with transactional locks, Redis caching layer, and Stripe Connect.",
    engineeringChallenge:
      "Eliminated inventory race conditions during high-concurrency checkouts by implementing Redis atomic locks (SETNX) backed by asynchronous worker queues.",
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Stripe API",
      "Express",
      "Tailwind CSS"
    ],
    gradient: "from-purple-600/20 via-sky-600/20 to-cyan-500/20"
  },
  {
    id: "omnipulse",
    title: "OmniPulse AI",
    category: "AI Log Monitoring & Diagnostic Suite",
    tagline: "High-Throughput Streaming Log Parser & Semantic Incident Triage",
    demoUrl: "https://omnipulse-ai.vercel.app",
    githubUrl: "https://github.com/ben-dev/omnipulse-ai",
    featured: true,
    demoAccount: {
      email: "analyst@omnipulse.ai",
      password: "Pulse2025!"
    },
    problemStatement:
      "SRE teams wasted critical incident response hours parsing unstructured raw log streams without automated root-cause recommendations.",
    technicalArchitecture:
      "React dashboard interface, Python FastAPI backend, Node.js event orchestration service, Ollama local LLM integration for vector embeddings, and Docker containerization.",
    engineeringChallenge:
      "Engineered a streaming log ingestion pipeline processing 5,000+ log lines/sec with zero memory leaks by leveraging Node.js backpressure stream controllers.",
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "Node.js",
      "Ollama AI",
      "Docker",
      "Vector Search",
      "Tailwind CSS"
    ],
    gradient: "from-emerald-600/20 via-cyan-600/20 to-blue-500/20"
  }
]
