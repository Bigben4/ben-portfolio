import img0215 from '../assets/IMG_0215.jpg'
import img0387 from '../assets/IMG_0387.jpg'
import img4952 from '../assets/IMG_4952.jpg'
import whatsappImg from '../assets/WhatsApp Image 2026-08-05 at 1.56.20 AM.jpeg'
import reeplsImg1 from '../assets/2026-reepls-taskflow.png'
import reeplsImg2 from '../assets/Screenshot From 2026-08-19 15-59-12.png'
import reeplsImg3 from '../assets/Screenshot From 2026-08-19 15-59-18.png'

export const journalMilestones = [
  {
    id: "milestone-reepls-taskflow",
    date: "August 2026",
    category: "Internship & AI Architecture",
    title: "AI TaskFlow at Reepls",
    description: "Kicked off my first major engineering assignment at Reepls Technologies building AI TaskFlow, an intelligent task management system. Stepped into the role with zero prior Python background—mastering Python and the Django ecosystem from scratch while actively shipping production code. Architected a clean Django backend paired with a lightweight HTML/CSS/Vanilla JS frontend and real-time AI workflows.",
    image: reeplsImg1,
    imageAlt: "AI TaskFlow Smart Productivity System at Reepls Technologies",
    images: [
      reeplsImg1,
      reeplsImg2,
      reeplsImg3
    ],
    icon: "Rocket",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: "milestone-cameroon-tech-summit",
    date: "August 2026",
    category: "Summit & Innovation",
    title: "Cameroon Tech Summit",
    description: "Participated in the Cameroon International Tech Summit & Buea Innovation Bootcamp organized by CITSCM in collaboration with UNDP at Mountain Hotel. The core takeaway was crystal clear: never build a solution before truly understanding the problem. Stepped out to validate ideas directly with potential users and test real-world friction before writing code.",
    image: img4952,
    imageAlt: "Cameroon International Tech Summit & Buea Innovation Bootcamp with CITSCM and UNDP at Mountain Hotel",
    images: [
      img4952,
      img0215,
      img0387,
      whatsappImg
    ],
    icon: "Sparkles",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: "milestone-1",
    date: "July 2025",
    category: "Hackathon Victory",
    title: "1st Place Winner — Prometheus Global AI Hackathon",
    description: "Led a 4-person engineering team to construct an AI-powered log diagnostic engine utilizing Next.js 15 App Router and Ollama LLM embeddings in 48 hours.",
    image: img0215,
    imageAlt: "Prometheus AI Hackathon Team Collaboration",
    images: [
      img0215,
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
    ],
    icon: "Trophy",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  },
  {
    id: "milestone-2",
    date: "May 2025",
    category: "Major Project Release",
    title: "Shipped QuestOps SaaS Platform v1.0",
    description: "Architected and deployed full-stack developer task automation platform featuring WebSockets telemetry and optimized PostgreSQL Prisma query pipelines.",
    image: img0387,
    imageAlt: "QuestOps SaaS Platform Dashboard",
    images: [
      img0387,
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    icon: "Code2",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20"
  },
  {
    id: "milestone-3",
    date: "February 2025",
    category: "GDG Workshop Host",
    title: "Featured Speaker at GDG 'Build with AI' Summit",
    description: "Presented technical deep-dives on Next.js 15 Server Actions and local LLM orchestration with Ollama for 150+ student and professional engineers.",
    image: img4952,
    imageAlt: "GDG Build with AI Tech Summit Speaker Presentation",
    images: [
      img4952,
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80"
    ],
    icon: "Users",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: "milestone-4",
    date: "November 2024",
    category: "Engineering Milestone",
    title: "Engineered HeritageVault Tree Layout Engine",
    description: "Implemented custom incremental HTML5 Canvas graph rendering pipeline handling 1,000+ interactive family tree nodes at sustained 60fps.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "HeritageVault Data Visualization & Graph Engine",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80"
    ],
    icon: "Code2",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  }
]
