import { whatsappLink } from '../../data/businessData';
export function CTAButton({ children, message, className = '' }) { return <a className={className} href={whatsappLink(message)} target="_blank" rel="noreferrer">{children}</a>; }
