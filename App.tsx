import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';
import ComparisonSection from './components/ComparisonSection';
import LocationLinks from './components/LocationLinks';
import LocationPage from './components/LocationPage';

const HomePage: React.FC = () => (
  <main>
    <Hero />
    <Services />
    <ComparisonSection />
    <Features />
    <ServiceArea />
    <LocationLinks />
    <Contact />
  </main>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 bg-white">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/local/:slug" element={<LocationPage />} />
          {/* Fallback route just in case */}
          <Route path="/alumimec-estruturas" element={<LocationPage />} />
        </Routes>

        <Footer />
        <FloatingControls />
      </div>
    </Router>
  );
};

export default App;