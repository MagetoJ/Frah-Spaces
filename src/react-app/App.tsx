import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navigation from "@/react-app/components/Navigation";
import Footer from "@/react-app/components/Footer";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import ServicesPage from "@/react-app/pages/Services";
import ProductsPage from "@/react-app/pages/Products";
import EquipmentPage from "@/react-app/pages/Equipment";
import DesignsPage from "@/react-app/pages/Designs";
import WorkPage from "@/react-app/pages/Work";
import EngagePage from "@/react-app/pages/Engage";

// Service Pages
import ArchitecturalDesigns from "@/react-app/pages/services/ArchitecturalDesigns";
import Construction from "@/react-app/pages/services/Construction";
import InteriorDesign from "@/react-app/pages/services/InteriorDesign";
import ProjectManagement from "@/react-app/pages/services/ProjectManagement";
import Consultancy from "@/react-app/pages/services/Consultancy";

// Product Pages
import WallingRoofing from "@/react-app/pages/products/WallingRoofing";
import Flooring from "@/react-app/pages/products/Flooring";
import WindowsDoors from "@/react-app/pages/products/WindowsDoors";
import InteriorFinishes from "@/react-app/pages/products/InteriorFinishes";
import OutdoorLandscaping from "@/react-app/pages/products/OutdoorLandscaping";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/architectural-designs" element={<ArchitecturalDesigns />} />
            <Route path="/services/construction" element={<Construction />} />
            <Route path="/services/interior-design" element={<InteriorDesign />} />
            <Route path="/services/project-management" element={<ProjectManagement />} />
            <Route path="/services/consultancy" element={<Consultancy />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/walling-roofing" element={<WallingRoofing />} />
            <Route path="/products/flooring" element={<Flooring />} />
            <Route path="/products/windows-doors" element={<WindowsDoors />} />
            <Route path="/products/interior-finishes" element={<InteriorFinishes />} />
            <Route path="/products/outdoor-landscaping" element={<OutdoorLandscaping />} />
            <Route path="/equipment" element={<EquipmentPage />} />
            <Route path="/designs" element={<DesignsPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/engage" element={<EngagePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
