import React from 'react';
import { Facebook, Instagram, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-brand-blue rounded-full text-white">
                <Wrench size={24} />
              </div>
              <h2 className="text-xl font-bold text-white">
                Desentope ADP <span className="text-brand-orange">24h</span>
              </h2>
            </div>
            <p className="mb-6 leading-relaxed">
              Sua melhor escolha para serviços hidráulicos em Curitiba. Profissionalismo, rapidez e garantia em cada atendimento.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Início</Link></li>
              <li><a href="/#services" className="hover:text-brand-orange transition-colors">Serviços</a></li>
              <li><a href="/#features" className="hover:text-brand-orange transition-colors">Sobre Nós</a></li>
              <li><a href="/#contact" className="hover:text-brand-orange transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Legal/Info */}
          <div>
             <h3 className="text-white text-lg font-bold mb-6">Informações</h3>
             <ul className="space-y-3">
                <li><Link to="/" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Termos de Uso</Link></li>
                <li className="pt-4 text-sm text-gray-500">
                    Rua Luiz Maltaca, 36<br/>
                    Cidade Industrial de Curitiba - PR
                </li>
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Desentope ADP. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Desenvolvido ❤️ por <a href="https://www.supremasite.com.br" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-400 hover:text-white">Suprema Mídia Express</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;