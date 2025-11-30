import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "Atendimento 24 Horas",
  "Equipe Qualificada e Certificada",
  "Orçamento Gratuito no Local",
  "Garantia Total dos Serviços",
  "Atendimento Rápido (Chegamos em até 40min)",
  "Preço Justo e Transparente"
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange/20 rounded-full -z-10"></div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue/10 rounded-full -z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=1000" 
               alt="Técnico qualificado" 
               className="rounded-2xl shadow-2xl w-full object-cover h-[400px] lg:h-[500px]"
             />
             <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                <p className="text-3xl font-bold text-brand-blue">15+</p>
                <p className="text-gray-600 font-medium">Anos de experiência servindo Curitiba</p>
             </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Por Que Escolher a <br/>
              <span className="text-brand-blue">Desentope ADP?</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Entendemos que problemas hidráulicos causam transtornos e prejuízos. Por isso, nossa missão é resolver seu problema com máxima agilidade e o mínimo de sujeira.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                  <span className="font-semibold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a 
                href="#contact" 
                className="inline-block bg-brand-blue hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
              >
                Fale com um Especialista
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;