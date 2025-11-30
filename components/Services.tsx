import React from 'react';
import { Droplet, AlertCircle, Settings, ShieldCheck, RefreshCw, PhoneIncoming } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Caça Vazamentos',
    description: 'Detecção precisa e reparo de vazamentos visíveis e ocultos, evitando desperdício e conta alta.',
    icon: Droplet,
  },
  {
    id: '2',
    title: 'Desentupimentos',
    description: 'Equipamentos modernos para desentupir pias, ralos, vasos sanitários e colunas de prédios.',
    icon: AlertCircle,
  },
  {
    id: '3',
    title: 'Instalações',
    description: 'Instalação profissional de torneiras, registros, chuveiros, aquecedores e metais sanitários.',
    icon: Settings,
  },
  {
    id: '4',
    title: 'Manutenção Preventiva',
    description: 'Inspeção completa e manutenção de sistemas hidráulicos residenciais e comerciais.',
    icon: ShieldCheck,
  },
  {
    id: '5',
    title: 'Troca de Encanamento',
    description: 'Substituição segura de tubulações antigas, enferrujadas ou danificadas.',
    icon: RefreshCw,
  },
  {
    id: '6',
    title: 'Emergências 24h',
    description: 'Atendimento imediato a qualquer hora do dia ou da noite para urgências hidráulicas.',
    icon: PhoneIncoming,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Nossos Serviços</h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em hidráulica com qualidade técnica e garantia de serviço.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-transparent hover:border-brand-blue group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                <service.icon size={32} className="text-brand-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;