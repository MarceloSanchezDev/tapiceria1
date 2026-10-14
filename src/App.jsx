import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PremiumElegantPage from './pages/PremiumElegantPage/PremiumElegantPage';
import WarmFamilyPage from './pages/WarmFamilyPage/WarmFamilyPage';
import CommercialConversionPage from './pages/CommercialConversionPage/CommercialConversionPage';
import ClientLandingPage from './pages/ClientLandingPage/ClientLandingPage';
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage';

export default function App() {
  return <Routes><Route path="/" element={<ClientLandingPage/>}/><Route path="/trabajos/:slug" element={<ProjectDetailPage/>}/><Route path="/presentacion" element={<Home/>}/><Route path="/opcion-1-premium" element={<PremiumElegantPage/>}/><Route path="/opcion-2-familiar" element={<WarmFamilyPage/>}/><Route path="/opcion-3-comercial" element={<CommercialConversionPage/>}/></Routes>;
}
