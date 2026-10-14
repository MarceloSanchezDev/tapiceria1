import { Link, useParams } from 'react-router-dom';
import { getProject } from '../../data/projects';
import { whatsappLink } from '../../data/businessData';
import './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <main className="project-detail project-detail--empty"><h1>Trabajo no encontrado</h1><Link to="/">Volver a la página principal</Link></main>;

  return <main className="project-detail">
    <header><Link to="/">← Carlos Reyes Decoraciones</Link><a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp</a></header>
    <section className="project-detail__hero">
      <div>{project.image ? <img src={project.image} alt={project.title} /> : <div className="project-detail__image-placeholder">Espacio reservado para la foto principal</div>}</div>
      <div><p>{project.category}</p><h1>{project.title}</h1><span>{project.summary}</span><a href={whatsappLink(`Hola, quisiera consultar por un trabajo similar a: ${project.title}.`)} target="_blank" rel="noreferrer">Quiero algo similar</a></div>
    </section>
    <section className="project-detail__content"><div><p className="client-eyebrow client-eyebrow--dark">Sobre este trabajo</p><h2>El proyecto</h2><p>{project.description}</p></div><aside><h3>Detalles</h3><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></aside></section>
    {project.gallery.length > 0 && <section className="project-detail__gallery">{project.gallery.map((image) => <img src={image} alt="Detalle del trabajo" key={image} />)}</section>}
  </main>;
}
