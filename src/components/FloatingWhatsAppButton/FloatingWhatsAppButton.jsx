import { whatsappLink } from '../../data/businessData';
import './FloatingWhatsAppButton.css';

export function FloatingWhatsAppButton() {
  return <a className="floating-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Escribinos por WhatsApp"><span className="material-symbols-outlined" aria-hidden="true">chat</span><span>WhatsApp</span></a>;
}
