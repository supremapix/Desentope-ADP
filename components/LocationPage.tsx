import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cities, neighborhoods } from './LocationLinks';
import Contact from './Contact';
import { Phone, CheckCircle2, MapPin, Wrench } from 'lucide-react';

const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Helper to de-slugify
  const findName = (slug: string | undefined) => {
    if (!slug) return "Curitiba";
    const allLocations = [...cities, ...neighborhoods];
    const match = allLocations.find(loc => 
      loc.toLowerCase()
         .replace(/\s+/g, '-')
         .replace(/[^\w\-]+/g, '')
         .replace(/\-\-+/g, '-') === slug
    );
    return match || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const locationName = findName(slug);

  useEffect(() => {
    // SEO Updates
    document.title = `Desentupidora e Encanador em ${locationName} | Desentope ADP 24h`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `Precisa de encanador ou desentupidora em ${locationName}? A Desentope ADP atende 24h com rapidez, garantia e preço justo. Ligue agora! (41) 3345-1194`);
    }
    
    // Canonical link
    let linkCanon = document.querySelector('link[rel="canonical"]');
    if (!linkCanon) {
        linkCanon = document.createElement('link');
        linkCanon.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanon);
    }
    linkCanon.setAttribute('href', `https://www.desentopeadp.com.br/local/${slug}`);

    // Scroll to top
    window.scrollTo(0, 0);
  }, [locationName, slug]);

  return (
    <div className="pt-24">
      {/* Dynamic Hero */}
      <section className="bg-brand-dark text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Desentupidora em <span className="text-brand-orange">{locationName}</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
                Chegamos rápido em {locationName}. Atendimento 24 horas para casas, comércios e indústrias.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <a href="https://wa.me/5541985171966" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105">
                    <Phone size={20} /> Chamar no WhatsApp
                </a>
            </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  
                  {/* Text Content */}
                  <div className="lg:col-span-2 space-y-12">
                      
                      {/* Section 1 */}
                      <div>
                          <h2 className="text-2xl font-bold text-brand-blue mb-4 flex items-center gap-2">
                              <MapPin /> Atendimento Rápido em {locationName}
                          </h2>
                          <p className="text-gray-600 leading-relaxed text-lg text-justify">
                              Se você reside ou possui comércio em <strong>{locationName}</strong> e está enfrentando problemas hidráulicos, a Desentope ADP é sua parceira confiável. Entendemos que emergências como canos estourados, pias entupidas ou retorno de esgoto não têm hora para acontecer. Por isso, mantemos equipes estratégicas prontas para atender a região de {locationName} com agilidade incomparável. Nosso tempo de resposta é otimizado porque conhecemos bem as rotas e particularidades da sua região, garantindo que o técnico chegue o mais breve possível para resolver seu problema.
                          </p>
                      </div>

                      {/* Image Break 1 */}
                      <img 
                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
                        alt={`Serviço de encanador em ${locationName}`}
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />

                      {/* Section 2 */}
                      <div>
                          <h2 className="text-2xl font-bold text-brand-blue mb-4 flex items-center gap-2">
                              <Wrench /> Serviços Especializados para {locationName}
                          </h2>
                          <p className="text-gray-600 leading-relaxed text-lg text-justify">
                              Oferecemos um portfólio completo de serviços para os moradores de {locationName}. Realizamos desentupimento de vasos sanitários, ralos, pias e tanques utilizando equipamentos modernos como máquinas rotativas e hidrojateamento de alta pressão, que limpam a tubulação sem quebrar pisos ou paredes. Além disso, somos especialistas em caça-vazamentos, detectando problemas ocultos que aumentam sua conta de água. Seja uma simples troca de torneira ou uma complexa manutenção de rede de esgoto, nossa equipe técnica em {locationName} está habilitada para executar com excelência e limpeza.
                          </p>
                      </div>

                      {/* Section 3 */}
                      <div>
                          <h2 className="text-2xl font-bold text-brand-blue mb-4">
                              Por que escolher a Desentope ADP em {locationName}?
                          </h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-gray-50 p-4 rounded-lg">
                                  <h3 className="font-bold flex items-center gap-2 mb-2"><CheckCircle2 className="text-green-500" /> Preço Justo</h3>
                                  <p className="text-sm text-gray-600">Cobramos valores transparentes e oferecemos orçamento gratuito no local em {locationName}.</p>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                  <h3 className="font-bold flex items-center gap-2 mb-2"><CheckCircle2 className="text-green-500" /> Garantia</h3>
                                  <p className="text-sm text-gray-600">Todos os serviços realizados em {locationName} possuem garantia total por escrito.</p>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                  <h3 className="font-bold flex items-center gap-2 mb-2"><CheckCircle2 className="text-green-500" /> Equipamento Moderno</h3>
                                  <p className="text-sm text-gray-600">Usamos tecnologia de ponta para resolver o problema na raiz, evitando reincidências.</p>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                  <h3 className="font-bold flex items-center gap-2 mb-2"><CheckCircle2 className="text-green-500" /> Atendimento 24h</h3>
                                  <p className="text-sm text-gray-600">Sábados, domingos e feriados. Se você está em {locationName}, pode contar conosco.</p>
                              </div>
                          </div>
                      </div>

                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-1">
                      <div className="bg-white p-6 rounded-xl shadow-xl sticky top-24 border border-gray-100">
                          <h3 className="text-xl font-bold mb-4 text-center">Solicitar Visita em {locationName}</h3>
                          <p className="text-sm text-gray-500 text-center mb-6">Técnicos próximos a você agora.</p>
                          <a 
                            href="tel:+554133451194"
                            className="block w-full bg-brand-blue text-white text-center py-3 rounded-lg font-bold mb-3 hover:bg-blue-800 transition-colors"
                          >
                             Ligar (41) 3345-1194
                          </a>
                          <a 
                            href="https://wa.me/5541985171966"
                            className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                          >
                             WhatsApp (41) 98517-1966
                          </a>
                          
                          <div className="mt-8">
                              <h4 className="font-bold text-gray-700 mb-3 border-b pb-2">Outros bairros atendidos</h4>
                              <div className="flex flex-wrap gap-2">
                                  {neighborhoods.slice(0, 10).map(n => (
                                      <Link key={n} to={`/local/${n.toLowerCase().replace(/ /g, '-')}`} className="text-xs text-brand-blue hover:underline">
                                          {n}
                                      </Link>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <Contact />
    </div>
  );
};

export default LocationPage;