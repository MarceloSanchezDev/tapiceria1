import familyHtml from '../../templates/family.html?raw';
import { StitchTemplate } from '../../components/StitchTemplate';
import './WarmFamilyPage.css';

export default function WarmFamilyPage() { return <div className="family-page"><StitchTemplate html={familyHtml}/></div>; }
