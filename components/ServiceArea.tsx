import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceArea: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
          <MapPin size={32} className="text-brand-orange" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Onde Atendemos</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
          Nossa equipe móvel está estrategicamente posicionada para atender toda Curitiba e Região Metropolitana com rapidez.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            {['Água Verde', 'Batel', 'Centro', 'Portão', 'Santa Felicidade', 'Boqueirão', 'Cajuru', 'Cic', 'Pinheirinho', 'Xaxim', 'São José dos Pinhais', 'Colombo', 'Araucária'].map((place) => (
                <span key={place} className="bg-white/10 px-4 py-2 rounded-full border border-white/20 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all cursor-default">
                    {place}
                </span>
            ))}
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/20 italic">
                E muito mais...
            </span>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;