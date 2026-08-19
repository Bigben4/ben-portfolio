import img0215 from '../assets/IMG_0215.jpg'
import img0387 from '../assets/IMG_0387.jpg'
import img4952 from '../assets/IMG_4952.jpg'
import whatsappImg from '../assets/WhatsApp Image 2026-08-05 at 1.56.20 AM.jpeg'
import reeplsImg1 from '../assets/2026-reepls-taskflow.png'
import reeplsImg2 from '../assets/Screenshot From 2026-08-19 15-59-12.png'
import reeplsImg3 from '../assets/Screenshot From 2026-08-19 15-59-18.png'
import reeplsJoinImg1 from '../assets/IMG_5172.jpg'
import reeplsJoinImg2 from '../assets/IMG_5173.jpg'
import prometheusImg1 from '../assets/2026-prometheus-hackathon.jpg'
import prometheusImg2 from '../assets/2026-prometheus-hackathon-participants.jpg'
import prometheusImg3 from '../assets/2026-prometheus-hackathon-prizes.jpg'
import prometheusImg4 from '../assets/2026-prometheus-hackathon-dday.jpg'
import prometheusImg5 from '../assets/2026-prometheus-hackathon-coding.jpg'
import erpSchemaImg from '../assets/2026-school-erp-schema.png'
import erpSqlImg from '../assets/2026-school-erp-sql.png'

export const journalMilestones = [
  {
    id: "milestone-school-erp-backend",
    date: "February 2026",
    category: "Backend & Database Architecture",
    title: "Architecting the School ERP Backend",
    description: "Transitioned the School ERP system into the full-stack backend phase. Designed a multi-entity relational schema in Microsoft SQL Server to manage user roles, student records, courses, grading, and payment processing. Integrated the database layer with a Node.js and Express.js API in VS Code, solving complex relational mapping, foreign key constraints, and backend data flow challenges.",
    image: erpSchemaImg,
    imageSrc: "/assets/journal/2026-school-erp-schema.jpg",
    imageAlt: "School ERP Relational Database Schema in Microsoft SQL Server",
    images: [
      erpSchemaImg,
      erpSqlImg
    ],
    icon: "Database",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: "milestone-prometheus-hackathon",
    date: "July 2026",
    category: "Hackathon & AI Innovation",
    title: "Prometheus AI Hackathon",
    description: "Competed in the Prometheus AI Hackathon hosted at the Reepls Technology Workspace in Buea. Collaborated alongside over 25 on-site developers and AI enthusiasts across two high-intensity days, building and shipping innovative AI prototypes. A defining event in pushing technical boundaries and building in public within Cameroon's growing engineering community.",
    image: prometheusImg1,
    imageSrc: "/assets/journal/2026-prometheus-hackathon.jpg",
    imageAlt: "Prometheus AI Hackathon at Reepls Technology Workspace in Buea",
    images: [
      prometheusImg1,
      prometheusImg2,
      prometheusImg3,
      prometheusImg4,
      prometheusImg5
    ],
    icon: "Trophy",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: "milestone-joining-reepls",
    date: "August 2026",
    category: "Career Milestone",
    title: "Joining Reepls Technologies",
    description: "Officially joined Reepls Technologies as a Software Engineering Intern for a 3-month tenure. Stepping into a fast-paced engineering environment focused on shipping real-world software, expanding into AI-driven architecture, and writing clean, scalable production code alongside a talented team.",
    image: reeplsJoinImg1,
    imageSrc: "/assets/journal/2026-joining-reepls.jpg",
    imageAlt: "Joining Reepls Technologies Software Engineering Internship Office Banner",
    images: [
      reeplsJoinImg1,
      reeplsJoinImg2
    ],
    icon: "Users",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: "milestone-reepls-taskflow",
    date: "August 2026",
    category: "Internship & AI Architecture",
    title: "AI TaskFlow at Reepls",
    description: "Kicked off my first major engineering assignment at Reepls Technologies building AI TaskFlow, an intelligent task management system. Stepped into the role with zero prior Python background—mastering Python and the Django ecosystem from scratch while actively shipping production code. Architected a clean Django backend paired with a lightweight HTML/CSS/Vanilla JS frontend and real-time AI workflows.",
    image: reeplsImg1,
    imageSrc: "/assets/journal/2026-reepls-taskflow.png",
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
    imageSrc: "/assets/journal/IMG_4952.jpg",
    imageAlt: "Cameroon International Tech Summit & Buea Innovation Bootcamp with CITSCM and UNDP at Mountain Hotel",
    images: [
      img4952,
      img0215,
      img0387,
      whatsappImg
    ],
    icon: "Sparkles",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  }
]
