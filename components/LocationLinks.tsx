import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export const cities = [
  "Curitiba", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", 
  "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", "Campo Magro", 
  "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", "Itaperuçu", 
  "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", "Quitandinha", 
  "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
];

export const neighborhoods = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", "Boqueirão de Cima", 
  "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", "Vila Nossa Senhora da Luz", 
  "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", "Vila Hauer", "Batel Soho", "Alto da Rua XV", 
  "CIC Norte", "CIC Central", "CIC Sul", "Vila Guaíra", "Centro Histórico", "Ecoville", "Carmo Abranches", 
  "Água Verde", "Ahú (Alto da Glória)", "Alto Boqueirão", "Alto da Glória", "Alto da XV", "Atuba", 
  "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho (Champagnat)", "Boa Vista", 
  "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", 
  "Campo Comprido", "Campo de Santana", "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", 
  "Centro", "Centro Cívico", "Cidade Industrial de Curitiba", "Cristo Rei", "Fanny", "Fazendinha", 
  "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", 
  "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", 
  "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", 
  "Santa Cândida", "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", 
  "São João", "São Lourenço", "São Miguel", "Vila Pantanal", "Seminário", "Sítio Cercado", "Taboão", 
  "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", "Vista Alegre", "Xaxim", 
  "Santa Quitéria Velha", "Portão Velho", "Guaíra Velho", "Uberaba de Cima", "Uberaba de Baixo", 
  "São Braz Velho", "Cidade Industrial", "Vila Verde", "Vila Barigui", "Caiuá", "Xaxim Velho", 
  "Fazendinha-Portão", "Campo Comprido Velho", "Bacacheri Velho", "Capão da Imbuia Velho", 
  "Pinheirinho Velho", "Vila São Pedro (Uberaba)", "Vila Osternack", "Neo Ville", "Vila Formosa", 
  "Vila Sandra", "Conjunto Caiuá", "Conjunto Parigot de Souza", "Vila Reno", "Vila Audi"
];

const slugify = (text: string) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

const LocationLinks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-2xl font-bold text-center mb-8 text-brand-dark">Atendemos em Curitiba e Região</h3>
        
        <div className="mb-10">
          <h4 className="text-xl font-semibold mb-4 text-brand-blue flex items-center gap-2">
            <MapPin size={20} /> Cidades
          </h4>
          <div className="flex flex-wrap gap-3">
            {cities.map(city => (
              <Link 
                key={city} 
                to={`/local/${slugify(city)}`}
                className="bg-white hover:bg-brand-blue hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm border border-gray-200 transition-colors shadow-sm"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-brand-blue flex items-center gap-2">
            <MapPin size={20} /> Bairros de Curitiba
          </h4>
          <div className="flex flex-wrap gap-2 h-96 overflow-y-auto pr-2 custom-scrollbar">
            {neighborhoods.map(hood => (
              <Link 
                key={hood} 
                to={`/local/${slugify(hood)}`}
                className="bg-white hover:bg-brand-orange hover:text-white text-gray-600 px-3 py-1.5 rounded text-xs border border-gray-100 transition-colors"
              >
                {hood}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationLinks;