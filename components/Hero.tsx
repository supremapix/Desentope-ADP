import React from 'react';
import { Siren, ArrowRight, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=2000" 
          alt="Encanador trabalhando em Curitiba" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-100 border border-red-500/30 px-3 py-1 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <Siren size={16} className="text-red-400" />
            <span>Plantão 24 Horas em Curitiba e Região</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Desentope ADP <br/>
            <span className="text-brand-orange">Soluções Rápidas em Hidráulica</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
            Especialistas em vazamentos, desentupimentos e manutenções. 
            Atendimento imediato na Cidade Industrial e toda Curitiba.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5541985171966?text=Olá, preciso de um orçamento!" 
              className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/25"
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </a>
            <a 
              href="tel:+554133451194" 
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              <Phone size={20} />
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-gray-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;