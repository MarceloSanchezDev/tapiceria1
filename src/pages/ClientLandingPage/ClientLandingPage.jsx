import { useState } from 'react';
import { defaultWhatsappMessage, whatsappLink } from '../../data/businessData';
import { WorkGallery } from '../../components/WorkGallery/WorkGallery';
import { ScrollCurtain } from '../../components/ScrollCurtain/ScrollCurtain';
import './ClientLandingPage.css';
import './ServiceCardAnimations.css';

const services = ['Cortinas a medida', 'Cortinas roller', 'Blackout', 'Retapizado'];
const spaces = ['Living', 'Dormitorio', 'Oficina / local', 'Casa completa'];

export default function ClientLandingPage() {
  const [service, setService] = useState(services[0]);
  const [space, setSpace] = useState(spaces[0]);
  const [measure, setMeasure] = useState('Tengo medidas aproximadas');
  const [animatedService, setAnimatedService] = useState('');

  const playServiceAnimation = (name) => {
    if (animatedService === name) {
      setAnimatedService('');
      return;
    }
    setAnimatedService('');
    window.requestAnimationFrame(() => setAnimatedService(name));
  };

  const tiltCard = (event) => {
    if (event.pointerType === 'touch') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    event.currentTarget.style.setProperty('--tilt-x', `${-y * 7}deg`);
    event.currentTarget.style.setProperty('--tilt-y', `${x * 9}deg`);
  };

  const resetCardTilt = (event) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
  };

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
          <h1>Cortinas y tapicería <em>a medida</em> para tu hogar.</h1>
          <p className="client-lead">Asesoramiento, medición e instalación con la calidad de un taller familiar.</p>
          <div className="client-hero__buttons">
            <a className="client-button client-button--gold" href="#cotizador">Solicitar presupuesto</a>
            <a className="client-button client-button--whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
          </div>
          <ul className="client-proof">
            <li>+50 años de experiencia</li><li>Medición a domicilio</li>
          </ul>
        </div>
      </section>

      <section className="client-services" aria-labelledby="servicios-title">
        <h2 id="servicios-title">Soluciones hechas para tu espacio</h2>
        <div className="client-service-grid">
          <button type="button" className={`client-service-card client-service-card--curtains ${animatedService === 'curtains' ? 'is-animated' : ''}`} onPointerMove={tiltCard} onPointerLeave={resetCardTilt} onClick={() => playServiceAnimation('curtains')}>
            <div className="client-service-visual client-service-visual--curtains" aria-hidden="true"><i /><i /><i /></div>
            <span>01</span><h3>Cortinas a medida</h3><p>Telas, barrales y rieles elegidos para cada ambiente.</p><small>Presioná para ver</small>
          </button>
          <button type="button" className={`client-service-card client-service-card--blackout ${animatedService === 'blackout' ? 'is-animated' : ''}`} onPointerMove={tiltCard} onPointerLeave={resetCardTilt} onClick={() => playServiceAnimation('blackout')}>
            <div className="client-service-visual client-service-visual--blackout" aria-hidden="true"><i /></div>
            <span>02</span><h3>Roller y blackout</h3><p>Privacidad y control de luz con instalación profesional.</p><small>Presioná para ver</small>
          </button>
          <button type="button" className={`client-service-card client-service-card--upholstery ${animatedService === 'upholstery' ? 'is-animated' : ''}`} onPointerMove={tiltCard} onPointerLeave={resetCardTilt} onClick={() => playServiceAnimation('upholstery')}>
            <div className="client-service-visual client-service-visual--upholstery" aria-hidden="true"><em /></div>
            <span>03</span><h3>Tapicería</h3><p>Renovamos sillones y sillas con materiales de calidad.</p><small>Presioná para ver</small>
          </button>
        </div>
      </section>

      <WorkGallery />

      <section className="client-calculator" id="cotizador" aria-labelledby="cotizador-title">
        <div className="client-calculator__intro">
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
      <ScrollCurtain />
    </main>
  );
}
