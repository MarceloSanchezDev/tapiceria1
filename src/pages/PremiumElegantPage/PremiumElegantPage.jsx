import premiumHtml from '../../templates/premium.html?raw';
import { StitchTemplate } from '../../components/StitchTemplate';
import './PremiumElegantPage.css';

export default function PremiumElegantPage() { return <div className="premium-page"><StitchTemplate html={premiumHtml}/></div>; }
