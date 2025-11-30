import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Métodos de Desentupimento</h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">Entenda a diferença entre nossas tecnologias</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="p-4 text-left">Características</th>
                <th className="p-4 text-center">Máquina Roto-Rooter</th>
                <th className="p-4 text-center bg-brand-orange">Hidrojateamento (Premium)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-4 font-semibold text-gray-700">Tipo de Ação</td>
                <td className="p-4 text-center text-gray-600">Mecânica (Cabos rotativos)</td>
                <td className="p-4 text-center text-gray-600 bg-orange-50">Hidráulica (Água alta pressão)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-700">Indicação</td>
                <td className="p-4 text-center text-gray-600">Entupimentos sólidos localizados</td>
                <td className="p-4 text-center text-gray-600 bg-orange-50">Limpeza total e gordura</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-700">Limpeza da Parede do Tubo</td>
                <td className="p-4 text-center text-gray-600">Parcial</td>
                <td className="p-4 text-center font-bold text-green-600 bg-orange-50">100% Completa</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-700">Risco de Danos</td>
                <td className="p-4 text-center text-gray-600">Baixo</td>
                <td className="p-4 text-center text-gray-600 bg-orange-50">Nulo (Apenas água)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-700">Custo x Benefício</td>
                <td className="p-4 text-center text-gray-600">Econômico</td>
                <td className="p-4 text-center text-gray-600 bg-orange-50">Maior Durabilidade</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-700">Garantia Estendida</td>
                <td className="p-4 text-center text-red-500"><X size={20} className="inline"/></td>
                <td className="p-4 text-center text-green-500 bg-orange-50"><Check size={20} className="inline"/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;