import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu, X, Instagram, Linkedin, Youtube, Mail, MoveUpRight } from 'lucide-react'
import { portfolio } from './data/portfolio'
import SectionHeading from './components/SectionHeading'

const nav = [{ label: 'About', href: '#about' }, { label: 'Selected work', href: '#work' }, { label: 'Creative', href: '#creative' }, { label: 'Recognition', href: '#recognition' }, { label: 'Contact', href: '#contact' }]

function Portrait() {
  return <div className="portrait-frame">
    <img src={portfolio.portrait} alt="Portrait of Bhavya" onError={(e) => { e.currentTarget.style.display = 'none' }} />
    <div className="portrait-fallback"><span className="portrait-initial">{portfolio.initials}</span><span className="portrait-caption">A portrait will live here</span></div>
    <div className="portrait-stamp">IN PROGRESS<br/><span>EST. 2026</span></div>
  </div>
}

export default function App() {
  const [open, setOpen] = useState(false)
  return <div className="site-shell">
    <header className="topbar">
      <a className="wordmark" href="#home">{portfolio.name}<span>.</span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>{nav.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav>
      <a className="top-contact" href="#contact">Let’s connect <ArrowUpRight size={15}/></a>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" />{portfolio.eyebrow}</div>
          <h1>{portfolio.headline.split('ideas')[0]}<em>ideas</em>{portfolio.headline.split('ideas')[1]}</h1>
          <p className="hero-intro">{portfolio.intro}</p>
          <div className="hero-actions"><a className="button-primary" href="#work">Explore my work <ArrowUpRight size={16}/></a><a className="text-link" href="#about">A little about me <ArrowDownRight size={16}/></a></div>
          <div className="hero-meta"><span>BASED IN</span><strong>{portfolio.location}</strong><span className="meta-divider">·</span><span>OPEN TO</span><strong>Ideas & collaborations</strong></div>
        </div>
        <div className="hero-visual"><Portrait /><div className="vertical-note">A PERSONAL ARCHIVE OF CURIOSITY & CREATION</div></div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line"/></div>
      </section>

      <section className="intro-band" id="about">
        <SectionHeading index="01" kicker="A LITTLE INTRODUCTION" title="Curiosity is where everything begins." />
        <div className="about-copy">{portfolio.about.map((p, i) => <p key={i}>{p}</p>)}<a href="#contact" className="underlined-link">More conversations, more possibilities <ArrowUpRight size={15}/></a></div>
      </section>

      <section className="work-section" id="work">
        <SectionHeading index="02" kicker="SELECTED WORK" title="A few things taking shape." description="Projects, experiments and collaborations — a selection of work and ideas." />
        <div className="project-list">{portfolio.projects.map((project) => <a className="project-row" href={project.link} key={project.number}>
          <span className="project-number">{project.number}</span><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><span className="project-note">{project.note}</span></div><span className="project-arrow"><ArrowUpRight/></span>
        </a>)}</div>
      </section>

      <section className="creative-section" id="creative">
        <SectionHeading index="03" kicker="BEYOND THE PROJECTS" title="Different ways to create." description="The things that keep the mind moving and the imagination awake." />
        <div className="creative-grid">{portfolio.creative.map(item => <article className="creative-card" key={item.mark}><span className="creative-mark">{item.mark}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><ArrowUpRight className="creative-arrow"/></article>)}</div>
      </section>

      <section className="recognition-section" id="recognition">
        <SectionHeading index="04" kicker="MILESTONES" title="Learning, showing up, growing." description="A living record of recognitions and experiences. Details will be added as they are confirmed." />
        <div className="recognition-list">{portfolio.recognition.map((item, i) => <div className="recognition-row" key={item.title}><span className="recognition-no">0{i+1}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><span className="recognition-year">{item.year}</span></div>)}</div>
      </section>

      <section className="publication-section">
        <div className="publication-art"><span className="art-small">A NOTE ON</span><span className="art-title">the<br/><i>written</i><br/>word.</span><span className="art-bottom">STORIES · IDEAS · PERSPECTIVES</span></div>
        <div className="publication-copy"><div className="section-index">05 / PUBLICATIONS</div><h2>Words that find<br/><em>their way out.</em></h2><p>Writing and published work, collected in one place. This space will grow with every new page.</p>{portfolio.publications.map(p => <a className="publication-link" href={p.link} key={p.title}><span><strong>{p.title}</strong><small>{p.detail}</small></span><MoveUpRight/></a>)}</div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-index">06 / THE NEXT CHAPTER</div><h2>Have something<br/>good in <em>mind?</em></h2><p>For conversations, collaborations or simply to say hello.</p>
        <a className="contact-email" href={`mailto:${portfolio.email}`}><Mail size={18}/>{portfolio.email}<ArrowUpRight size={18}/></a>
        <div className="contact-bottom"><span>{portfolio.name} · PERSONAL PORTFOLIO</span><span>MADE WITH INTENTION.</span></div>
      </section>
    </main>

    <footer className="footer"><a className="wordmark" href="#home">{portfolio.name}<span>.</span></a><span>© 2026 · A WORK IN PROGRESS</span><div className="socials">{portfolio.socials.map(s => <a href={s.url} key={s.label} aria-label={s.label}>{s.label === 'Instagram' ? <Instagram/> : s.label === 'LinkedIn' ? <Linkedin/> : <Youtube/>}</a>)}</div></footer>
  </div>
}