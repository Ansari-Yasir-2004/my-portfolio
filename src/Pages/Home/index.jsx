function Home({ data }) {
  return (
    <section id="home" className="page-shell">
      <h2>{data.hero.name}</h2>
      <p>{data.hero.role}</p>
      <p>{data.hero.summary}</p>

      <section id="about">
        <h3>{data.about.title}</h3>
        <p>{data.about.description}</p>
      </section>

      <section id="experience">
        <h3>Experience</h3>
        <ul>
          {data.experience.map((item) => (
            <li key={`${item.role}-${item.period}`}>
              {item.role} • {item.company} • {item.period}
            </li>
          ))}
        </ul>
      </section>

      <section id="projects">
        <h3>Projects</h3>
        <ul>
          {data.projects.map((project) => (
            <li key={project.title}>
              {project.title} — {project.stack}
            </li>
          ))}
        </ul>
      </section>

      <section id="skills">
        <h3>Skills</h3>
        <p>{data.skills.frontend.join(', ')}</p>
      </section>

      <section id="contact">
        <h3>Contact</h3>
        <p>{data.contact.email}</p>
      </section>
    </section>
  );
}

export default Home;
