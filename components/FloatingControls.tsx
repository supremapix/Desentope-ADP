import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

const FloatingControls: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left Side: Contact Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/5541985171966?text=Olá, preciso de um encanador!"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
          aria-label="Falar no WhatsApp"
        >
          <div className="relative bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center">
            <MessageCircle size={28} fill="white" className="text-white" />
          </div>
          <span className="ml-3 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
            Orçamento via WhatsApp
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:+554133451194"
          className="group relative flex items-center"
          aria-label="Ligar Agora"
        >
          <div className="relative bg-brand-blue hover:bg-blue-800 text-white p-3 md:p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center">
            <Phone size={24} fill="white" className="text-white" />
          </div>
          <span className="ml-3 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
            Ligar (41) 3345-1194
          </span>
        </a>
      </div>

      {/* Right Side: Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-brand-orange transition-all duration-300 transform ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
};

export default FloatingControls;