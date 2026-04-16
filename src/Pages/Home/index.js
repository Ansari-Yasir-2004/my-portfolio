import React, { useState } from "react";
import CaseStudyModal from "../../Components/CaseStudyModal";
import { Typewriter } from "react-simple-typewriter";

const Home = ({ data }) => {
  const stackLoop = [...data.skills.stackSlider, ...data.skills.stackSlider];
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="home" className="hero reveal hero-flex">

        {/* LEFT */}
        <div className="hero-left">
          <p className="hero-tag">Available for full-time opportunities</p>
          <h2 className="hero-name">{data.hero.name}</h2>
          <h3 className="hero-typing">
            <Typewriter
              words={[
                'Junior Full Stack Web Developer',
                'React Developer',
                'Frontend Specialist'
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h3>
          <p className="hero-copy">{data.hero.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={data.hero.ctaPrimary.href}>{data.hero.ctaPrimary.label}</a>
            <a className="btn btn-outline-light" href="/Yasir_Ansari_2026.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="profile-wrapper">
            <img src="/profile.png" alt="Yasir Ansari" />
          </div>
        </div>

      </section>

      <section className="value-strip reveal" aria-label="Value proposition">
        {data.valueProps.map((v) => <span key={v} className="value-pill">{v}</span>)}
      </section>

      <section className="stack-slider-wrap reveal" aria-label="Technology stack slider">
        <div className="stack-track">
          {stackLoop.map((s, i) => <span className="stack-pill" key={`${s}-${i}`}>{s}</span>)}
        </div>
      </section>

      <section id="about" className="panel reveal">
        <h3>{data.about.title}</h3>
        <p>{data.about.description}</p>
      </section>

      <section id="experience" className="section-grid reveal">
        <h3 className="section-title">Experience</h3>
        <div className="experience-list">
          {data.experience.map((item) => (
            <article className="card text" key={`${item.role}-${item.period}`}>
              <div className="card-top">
                <h4>{item.role}</h4><span>{item.period}</span>
              </div>
              <p className="muted">{item.company} • {item.location}</p>
              <ul>{item.highlights.map((p) => <li key={p}>{p}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-grid reveal">
        <h3 className="section-title">Featured Projects</h3>
        <div className="project-grid">
          {data.projects.map((project) => (
            <article key={project.title} className="project-card">
              <p className="project-stack">{project.stack}</p>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-links">

                <div className="project-links">

                  {project.caseStudy && (
                    <button
                      // className="btn btn-outline"
                      onClick={() => {
                        setSelectedProject(project);
                        setIsOpen(true);
                      }}
                    >
                      Case Study
                    </button>
                  )}

                  {project.links?.map((l) => (
                    <a
                      key={`${project.title}-${l.label}`}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-grid reveal">
        <h3 className="section-title">Skills</h3>
        <div className="skills-grid">
          {data.skills.groups.map((g) => (
            <article key={g.title} className="card text">
              <h4>{g.title}</h4>
              <div className="chip-group">{g.items.map((i) => <span key={i} className="chip">{i}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="panel contact-panel reveal">
        <h3>Contact</h3>
        <p>Let&apos;s connect for full-time opportunities.</p>
        <div className="contact-links">
          <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
          <a href={`tel:${data.contact.phone.replace(/\s+/g, '')}`}>{data.contact.phone}</a>
          <a href={data.contact.github} target="_blank" rel="noreferrer">GitHub Profile</a>
        </div>
      </section>

      <CaseStudyModal
        show={isOpen}
        handleClose={() => setIsOpen(false)}
        project={selectedProject}
      />
    </>
  );
}

export default Home;
