import commercialHtml from '../../templates/commercial.html?raw';
import { StitchTemplate } from '../../components/StitchTemplate';
import './CommercialConversionPage.css';

export default function CommercialConversionPage() { return <div className="commercial-page"><StitchTemplate html={commercialHtml}/></div>; }
