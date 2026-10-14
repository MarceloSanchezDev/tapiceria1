import { useState } from 'react';
import { defaultWhatsappMessage, whatsappLink } from '../../data/businessData';
import { WorkGallery } from '../../components/WorkGallery/WorkGallery';
import './ClientLandingPage.css';

const services = ['Cortinas a medida', 'Cortinas roller', 'Blackout', 'Retapizado'];
const spaces = ['Living', 'Dormitorio', 'Oficina / local', 'Casa completa'];

export default function ClientLandingPage() {
  const [service, setService] = useState(services[0]);
  const [space, setSpace] = useState(spaces[0]);
  const [measure, setMeasure] = useState('Tengo medidas aproximadas');

  const requestQuote = () => {
    const message = `${defaultWhatsappMessage}\n\nMe interesa: ${service}.\nAmbiente: ${space}.\nMedidas: ${measure}.`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="client-landing">
      <header className="client-header">
        <a className="client-brand" href="#inicio">
          <span className="client-brand__mark">CR</span>
          <span><strong>Carlos Reyes</strong><small>Decoraciones</small></span>
        </a>
        <div className="client-header__actions">
          <a className="client-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="client-quote-link" href="#cotizador">Pedir presupuesto</a>
        </div>
      </header>

      <section className="client-hero" id="inicio">
        <div className="client-hero__image" />
        <div className="client-hero__shade" />
        <div className="client-hero__content">
          <p className="client-eyebrow">Taller propio · Atención personalizada</p>
          <h1>Cortinas y tapicería <em>a medida</em> para tu hogar.</h1>
          <p className="client-lead">Asesoramiento, medición e instalación con la calidad de un taller familiar.</p>
          <div className="client-hero__buttons">
            <a className="client-button client-button--gold" href="#cotizador">Solicitar presupuesto</a>
            <a className="client-button client-button--whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
          </div>
          <ul className="client-proof">
            <li>+50 años de experiencia</li><li>Medición sin cargo</li><li>Garantía escrita</li>
          </ul>
        </div>
      </section>

      <section className="client-services" aria-labelledby="servicios-title">
        <p className="client-eyebrow client-eyebrow--dark">Lo que hacemos</p>
        <h2 id="servicios-title">Soluciones hechas para tu espacio</h2>
        <div className="client-service-grid">
          <article><span>01</span><h3>Cortinas a medida</h3><p>Telas, barrales y rieles elegidos para cada ambiente.</p></article>
          <article><span>02</span><h3>Roller y blackout</h3><p>Privacidad y control de luz con instalación profesional.</p></article>
          <article><span>03</span><h3>Tapicería</h3><p>Renovamos sillones y sillas con materiales de calidad.</p></article>
        </div>
      </section>

      <WorkGallery />

      <section className="client-calculator" id="cotizador" aria-labelledby="cotizador-title">
        <div className="client-calculator__intro">
          <p className="client-eyebrow client-eyebrow--dark">Presupuesto rápido</p>
          <h2 id="cotizador-title">Contanos qué necesitás</h2>
          <p>Elegí estas opciones y te llevamos la consulta lista a WhatsApp.</p>
        </div>
        <div className="client-calculator__card">
          <fieldset>
            <legend><b>1</b> ¿Qué estás buscando?</legend>
            <div className="client-options">{services.map((item) => <button className={service === item ? 'is-active' : ''} key={item} type="button" onClick={() => setService(item)}>{item}</button>)}</div>
          </fieldset>
          <fieldset>
            <legend><b>2</b> ¿Dónde es el trabajo?</legend>
            <div className="client-options client-options--compact">{spaces.map((item) => <button className={space === item ? 'is-active' : ''} key={item} type="button" onClick={() => setSpace(item)}>{item}</button>)}</div>
          </fieldset>
          <fieldset>
            <legend><b>3</b> Medidas</legend>
            <select value={measure} onChange={(event) => setMeasure(event.target.value)}>
              <option>Tengo medidas aproximadas</option><option>Necesito que midan en domicilio</option><option>Quiero asesoramiento primero</option>
            </select>
          </fieldset>
          <button className="client-submit" type="button" onClick={requestQuote}>Continuar por WhatsApp <span>→</span></button>
        </div>
      </section>

      <footer className="client-footer">
        <div><strong>Carlos Reyes Decoraciones</strong><span>Cortinas, roller y tapicería a medida.</span></div>
        <a href={whatsappLink()} target="_blank" rel="noreferrer">Escribinos por WhatsApp</a>
      </footer>
    </main>
  );
}
