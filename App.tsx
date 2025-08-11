
import React from 'react';
import Header from './components/Header';
import SpecialistSection from './components/SpecialistSection';
import AdvantagesSection from './components/AdvantagesSection';
import SocialProof from './components/SocialProof';
import Simulator from './components/Simulator';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <Header />
      <SpecialistSection />
      <main>
        <AdvantagesSection />
        <SocialProof />
        <Simulator />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;