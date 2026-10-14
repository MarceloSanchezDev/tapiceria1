import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import './WorkGallery.css';

export function WorkGallery() {
  return (
    <section className="work-gallery" id="trabajos" aria-labelledby="trabajos-title">
      <div className="work-gallery__heading">
        <div><p className="client-eyebrow client-eyebrow--dark">Trabajos realizados</p><h2 id="trabajos-title">Cada espacio tiene su propia solución</h2></div>
        <p>Esta sección queda lista para mostrar los proyectos reales del taller.</p>
      </div>
      <div className="work-gallery__grid">
        {projects.map((project, index) => (
          <article className="work-card" key={project.slug}>
            {project.image ? <img src={project.image} alt={project.title} /> : <div className="work-card__placeholder"><span>Proyecto {String(index + 1).padStart(2, '0')}</span><small>Foto del trabajo</small></div>}
            <div className="work-card__body"><p>{project.category}</p><h3>{project.title}</h3><span>{project.summary}</span><Link to={`/trabajos/${project.slug}`}>Ver proyecto <b>→</b></Link></div>
          </article>
        ))}
      </div>
    </section>
  );
}
