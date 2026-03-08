import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import CoreFeatures from './components/sections/CoreFeatures';
import ConceptGallery from './components/sections/ConceptGallery';
import Commitment from './components/sections/Commitment';
import TrendingBooths from './components/sections/TrendingBooths';
import Solutions from './components/sections/Solutions';
import PricingOptions from './components/sections/PricingOptions';
import Footer from './components/sections/Footer';
import FloatingContact from './components/ui/FloatingContact';
import PromotionalPopup from './components/ui/PromotionalPopup';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-teal-200 selection:text-teal-900 font-sans">
      <PromotionalPopup />
      <Header />

      <main>
        <Hero />
        <CoreFeatures />
        <Commitment />
        <TrendingBooths />
        <ConceptGallery />
        <Solutions />
        <PricingOptions />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
