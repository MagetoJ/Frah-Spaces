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
            <Route path="/products" element={<ProductsPage />} />
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
