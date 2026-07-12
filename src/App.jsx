import { useEffect, useState } from 'react'
import './App.css'

const skills = [
  ['⚛', 'React'], ['⬡', 'Node.js'], ['JS', 'JavaScript'], ['TS', 'TypeScript'],
  ['〰', 'Tailwind CSS'], ['▤', 'SQL'], ['◆', 'Git'], ['🐧', 'Linux'],
]

const projects = [
  ['Minecraft Landing Page', 'A modern recreation of the official Minecraft.net website with a great layout and Tailwind CSS.', 'minecraft'],
  ['Password Manager Extension', 'Chrome extension that securely stores, manages and auto-fills credentials with encrypted storage.', 'password'],
  ['ERP Dashboard', 'School ERP dashboard to manage students, events, announcements and activities.', 'dashboard'],
  ['Business Websites', 'Responsive websites for local businesses to help them grow their presence online.', 'business'],
]

function SectionTitle({ eyebrow, title, action }) {
  return <div className="section-title"><div><span>{eyebrow}</span><h2>{title}</h2></div>{action && <a href="#projects">{action} <b>→</b></a>}</div>
}

function ProjectArt({ type }) { return <div className={`project-art ${type}`}><div className="window"><i /><i /><i /></div><strong>{type === 'minecraft' ? 'MINECRAFT' : type === 'dashboard' ? 'DASHBOARD' : type === 'password' ? 'PASSWORD MANAGER' : 'BUSINESS'}</strong></div> }

function App() {
  const [skillsPerPage, setSkillsPerPage] = useState(4)
  const [skillPage, setSkillPage] = useState(0)
  const skillPages = Array.from({ length: Math.ceil(skills.length / skillsPerPage) }, (_, page) => skills.slice(page * skillsPerPage, (page + 1) * skillsPerPage))
  const activeSkillPage = Math.min(skillPage, skillPages.length - 1)

  useEffect(() => {
    const updateSkillsPerPage = () => {
      const next = window.innerWidth <= 580 ? 1 : window.innerWidth <= 850 ? 2 : 4
      setSkillsPerPage(next)
    }

    updateSkillsPerPage()
    window.addEventListener('resize', updateSkillsPerPage)
    return () => window.removeEventListener('resize', updateSkillsPerPage)
  }, [])

  return <main>
    <header><a className="brand" href="#home"><em>&lt;/&gt;</em> BEN</a><nav>{['Home','About','Projects','Experience','Services','Blog','Contact'].map((x, i) => <a className={i === 0 ? 'active' : ''} href={`#${x.toLowerCase()}`} key={x}>{x}</a>)}</nav><div className="header-actions"><a href="#contact" className="icon-link">◉</a><a href="#contact" className="icon-link">in</a><a className="talk" href="#contact">Let's Talk <b>→</b></a></div></header>

    <section className="hero" id="home"><div className="hero-content"><span className="eyebrow">SOFTWARE ENGINEER</span><h1>Building digital<br />solutions for a<br /><strong>better future.</strong></h1><p>I'm Ben, a full stack developer and AI enthusiast from Cameroon. I build fast, scalable and beautiful websites and applications.</p><div className="buttons"><a className="primary" href="#projects">View My Work <b>→</b></a><a className="secondary" href="#contact">↗ &nbsp; Hire Me</a></div><small className="scroll">◯ &nbsp; SCROLL DOWN</small></div><div className="hero-art"><img src="/src/assets/ChatGPT Image Jul 12, 2026, 10_05_14 PM.png" alt="Ben, software engineer" /><div className="code-orb">&lt;/&gt;</div></div></section>

    <section className="about" id="about"><div className="about-art"><img src="/src/assets/ChatGPT Image Jul 12, 2026, 10_05_14 PM.png" alt="Developer workspace" /></div><div className="about-copy"><span className="eyebrow">ABOUT ME</span><h2>Who I Am <b>✦</b></h2><p>I love turning ideas into real products. I enjoy building web apps, automation tools and AI-powered solutions that solve real world problems.</p><ul><li>🇨🇲 &nbsp; From Cameroon</li><li>🎓 &nbsp; Software Engineering Student</li><li>🚀 &nbsp; Freelancer & Problem Solver</li><li>✨ &nbsp; Always learning something new</li></ul><a className="secondary" href="#contact">♧ &nbsp; Download Resume &nbsp; ↓</a></div><div className="stats">{[['20+','Projects Completed'],['5+','Technologies Mastered'],['2+','Years of Learning'],['100%','Passion & Dedication']].map(([n,t]) => <article key={n}><strong>{n}</strong><p>{t}</p></article>)}</div></section>

    <section className="skills"><SectionTitle eyebrow="TECH STACK" title="Technologies I Work With" /><div className="skills-carousel" aria-roledescription="carousel" aria-label="Technologies I work with"><button className="carousel-control" type="button" aria-label="Previous technologies" onClick={() => setSkillPage((page) => Math.max(0, page - 1))} disabled={activeSkillPage === 0}>←</button><div className="skills-viewport"><div className="skills-track" style={{ transform: `translateX(-${activeSkillPage * 100}%)` }}>{skillPages.map((page, pageIndex) => <div className="skill-page" key={pageIndex} aria-hidden={pageIndex !== activeSkillPage}>{page.map(([icon, name]) => <article key={name}><b>{icon}</b><span>{name}</span></article>)}</div>)}</div></div><button className="carousel-control" type="button" aria-label="Next technologies" onClick={() => setSkillPage((page) => Math.min(skillPages.length - 1, page + 1))} disabled={activeSkillPage === skillPages.length - 1}>→</button></div><div className="dots" role="tablist" aria-label="Technology carousel pages">{skillPages.map((_, page) => <button key={page} type="button" role="tab" aria-label={`Show technology page ${page + 1}`} aria-selected={activeSkillPage === page} onClick={() => setSkillPage(page)} />)}</div></section>

    <section id="projects"><SectionTitle eyebrow="FEATURED PROJECTS" title="Things I’ve Built" action="View All Projects" /><div className="projects">{projects.map(([title,copy,type]) => <article className="project" key={title}><ProjectArt type={type}/><h3>{title}</h3><p>{copy}</p><div className="tags"><span>React</span><span>{type === 'dashboard' ? 'Node.js' : 'Tailwind CSS'}</span></div><footer><a href="#contact">↗ &nbsp; {type === 'business' ? 'View Work' : 'Live Demo'}</a><a href="#contact">◉</a></footer></article>)}</div></section>

    <section className="quick-stats">{[['&lt;/&gt;','20+','Projects Completed'],['♧','10+','Happy Clients'],['☆','100%','Client Satisfaction'],['◷','24/7','Learning & Building']].map(([i,n,t])=><article key={n}><i dangerouslySetInnerHTML={{__html:i}}/><strong>{n}</strong><span>{t}</span></article>)}</section>

    <section className="lower"><div className="services" id="services"><SectionTitle eyebrow="SERVICES" title="How I Can Help You"/><ul>{[['▣','Website Development','Responsive, fast and modern websites'],['▤','Web Applications','Custom web apps and dashboards'],['◇','UI/UX Design','Clean and user friendly designs'],['⌘','API & Backend','Secure and scalable backends']].map(([i,t,p])=><li key={t}><i>{i}</i><div><b>{t}</b><small>{p}</small></div><em>›</em></li>)}</ul><a href="#contact">View All Services →</a></div><div className="journey" id="experience"><SectionTitle eyebrow="MY JOURNEY" title="Journey So Far"/><ol>{[['2022','Started Coding','Began my journey with HTML, CSS & basics'],['2023','JavaScript','Dived deep into JavaScript and built small projects.'],['2024','Backend & Databases','Learned Node.js, Express and SQL to build full stack apps.'],['2025+','Freelancing & Beyond','Helping clients, building products and exploring AI.']].map(([y,t,p])=><li key={y}><b>{y}</b><div><strong>{t}</strong><p>{p}</p></div></li>)}</ol></div><div className="testimonials"><SectionTitle eyebrow="TESTIMONIALS" title="What Clients Say"/><div className="quotes">{[['Ben is a highly skilled developer who delivers quality work on time. He understood our needs perfectly.','Divine F.','Business Owner'],['Working with Ben was a great experience. He is creative, reliable and very committed.','James T.','Startup Founder']].map(([q,n,r])=><article key={n}><b>★ ★ ★ ★ ★</b><p>{q}</p><footer><i>👤</i><span>{n}<small>{r}</small></span></footer></article>)}</div></div></section>

    <section className="contact" id="contact"><span className="eyebrow">LET'S CONNECT</span><h2>Let’s Build Something Amazing Together</h2><p>Have a project in mind or just want to say hi? I'd love to hear from you.</p><div><a href="mailto:ben.dev@example.com">✉ &nbsp; ben.dev@example.com</a><a href="#contact">◉ &nbsp; Message on WhatsApp</a><a href="#contact">in &nbsp; Connect on Linkedin</a></div></section>
    <footer className="footer"><a className="brand" href="#home"><em>&lt;/&gt;</em> BEN</a><p>© 2025 Ben. All rights reserved.<br />Made with ♥ and lots of ☕</p><a href="#home" className="top">↑</a></footer>
  </main>
}

export default App
