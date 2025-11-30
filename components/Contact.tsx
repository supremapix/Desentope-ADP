import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    service: 'Vazamento',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Nova Solicitação via Site*%0A%0A*Nome:* ${formData.name}%0A*Endereço:* ${formData.address}%0A*Serviço:* ${formData.service}%0A*Mensagem:* ${formData.message}`;
    window.open(`https://wa.me/5541985171966?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Entre em Contato</h2>
          <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Canais de Atendimento</h3>
            
            <div className="flex items-start gap-4">
              <div className="bg-brand-blue p-3 rounded-lg text-white">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Telefones</h4>
                <p className="text-gray-600 mt-1 hover:text-brand-blue">
                    <a href="https://wa.me/5541985171966">WhatsApp: (41) 98517-1966</a>
                </p>
                <p className="text-gray-600 hover:text-brand-blue">
                    <a href="tel:+554133451194">Fixo: (41) 3345-1194</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-blue p-3 rounded-lg text-white">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Email</h4>
                <p className="text-gray-600 mt-1">contato@desentopeadp.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-blue p-3 rounded-lg text-white">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Horário de Atendimento</h4>
                <p className="text-green-600 font-semibold mt-1">24 Horas - 7 Dias por Semana</p>
                <p className="text-gray-500 text-sm">Inclusive Sábados, Domingos e Feriados</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-blue p-3 rounded-lg text-white">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Localização</h4>
                <p className="text-gray-600 mt-1">Rua Luiz Maltaca, 36</p>
                <p className="text-gray-500 text-sm">Cidade Industrial de Curitiba - PR</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicitar Orçamento Rápido</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Endereço / Bairro</label>
                <input 
                  type="text" 
                  id="address" 
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                  placeholder="Rua e Bairro"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Serviço</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white"
                >
                  <option>Vazamento</option>
                  <option>Desentupimento</option>
                  <option>Instalação</option>
                  <option>Limpeza de Caixa d'Água</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all resize-none"
                  placeholder="Descreva seu problema..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Enviar no WhatsApp <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;