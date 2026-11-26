import { projects, projectsIntro } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>Featured Projects</h2>
          <p>{projectsIntro}</p>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="card reveal" key={p.title}>
              <div className="thumb">
                <img src={p.image} alt={p.alt} loading="lazy" />
              </div>
              <div className="body">
                <span className="cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
