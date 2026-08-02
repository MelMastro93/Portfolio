const PROJECTS = [
  {
    title: "LEGO Landing Page",
    description:
      "A team project recreating LEGO's landing page in HTML, CSS, and JavaScript. I led the team, coordinating how we split the sections, and personally built the interactive carousels in the dragon-themed section.",
    tags: ["HTML, CSS, JavaScript"],
    link: "https://github.com/MelMastro93/project2-LEGO",
  },
  {
    title: "Project two",
    description: "Coming soon.",
    tags: ["..."],
    link: "#",
  },
  {
    title: "Project three",
    description: "Coming soon.",
    tags: ["..."],
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article key={project.title} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
