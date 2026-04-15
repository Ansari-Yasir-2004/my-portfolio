function Home({ data }) {
  const stackLoop = [...data.skills.stackSlider, ...data.skills.stackSlider];

  return (
    <>
      <section id="home" className="hero">
        <p className="hero-tag">Available for full-time opportunities</p>
        <h2>{data.hero.name}</h2>
        <h3>{data.hero.role}</h3>
        <p className="hero-copy">{data.hero.summary}</p>
        <div className="hero-actions">
          <a className="btn btn-solid" href={data.hero.ctaPrimary.href}>{data.hero.ctaPrimary.label}</a>
          <a className="btn btn-outline" href={data.hero.ctaSecondary.href}>{data.hero.ctaSecondary.label}</a>
        </div>
      </section>

      <section className="stack-slider-wrap" aria-label="Technology stack slider">
        <div className="stack-track">
          {stackLoop.map((stack, index) => (
            <span className="stack-pill" key={`${stack}-${index}`}>{stack}</span>
          ))}
        </div>
      </section>

      <section id="about" className="panel">
        <h3>{data.about.title}</h3>
        <p>{data.about.description}</p>
      </section>

      <section id="experience" className="section-grid">
        <h3 className="section-title">Experience</h3>
        <div className="experience-list">
          {data.experience.map((item) => (
            <article className="card" key={`${item.role}-${item.period}`}>
              <div className="card-top">
                <h4>{item.role}</h4><span>{item.period}</span>
              </div>
              <p className="muted">{item.company} • {item.location}</p>
              <ul>{item.highlights.map((point) => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-grid">
        <h3 className="section-title">Featured Projects</h3>
        <div className="project-grid">
          {data.projects.map((project) => (
            <article key={project.title} className="project-card">
              <p className="project-stack">{project.stack}</p>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-grid">
        <h3 className="section-title">Skills</h3>
        <div className="skills-grid">
          {data.skills.groups.map((group) => (
            <article key={group.title} className="card">
              <h4>{group.title}</h4>
              <div className="chip-group">
                {group.items.map((item) => <span key={item} className="chip">{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="panel contact-panel">
        <h3>Contact</h3>
        <p>Let&apos;s connect for full-time roles and freelance opportunities.</p>
        <div className="contact-links">
          <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
          <a href={`tel:${data.contact.phone.replace(/\s+/g, '')}`}>{data.contact.phone}</a>
          <a href={data.contact.github} target="_blank" rel="noreferrer">GitHub Profile</a>
        </div>
      </section>
    </>
  );
}

export default Home;
