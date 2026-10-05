import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return <main className="presentation-home"><div><p>Presentación interna</p><h1>Cortinas &amp; Tapizados</h1><nav aria-label="Opciones de sitio"><Link to="/opcion-1-premium">Opción 1 — Premium Elegant</Link><Link to="/opcion-2-familiar">Opción 2 — Family &amp; Local</Link><Link to="/opcion-3-comercial">Opción 3 — Commercial &amp; Conversion</Link></nav></div></main>;
}
