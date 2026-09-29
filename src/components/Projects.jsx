const PROJECTS = [
  {
    title: "LEGO Landing Page",
    description:
      "A team project recreating LEGO's landing page in HTML, CSS, and JavaScript. I led the team, coordinating how we split the sections, and personally built the interactive carousels in the dragon-themed section.",
    tags: ["HTML, CSS, JavaScript"],
    link: "https://github.com/MelMastro93/project2-LEGO",
  },
  {
    title: "PixelPlayground",
    description: "A team e-commerce project built with React, HTML, CSS, and the Fetch API. I worked on the payments page and created the product imagery, generating visuals with AI and refining them in Photoshop.",
    tags: ["'React', 'JavaScript', 'Photoshop'"],
    link: "https://github.com/ValentinaLi00/PixelPlayground",
  },
  {
    title: "Weather App",
    description: "A weather app built with React, fetching real-time data from the Open-Meteo API. Search any city to see current conditions and a 6-day forecast, with a background that shifts color based on the temperature.",
    tags: ["React, JavaScript, REST API"],
    link: "https://weather-app-virid-tau-bgmoalbu1v.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <h2>PixelPlayground</h2>
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
