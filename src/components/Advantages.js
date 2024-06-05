import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

function Advantages() {
  const advantages = [
    { id: 1, title: 'Alta Durabilidade', description: 'Blocos resistentes e duradouros.' },
    { id: 2, title: 'Sustentabilidade', description: 'Produzidos com materiais ecologicamente corretos.' },
    { id: 3, title: 'Economia', description: 'Redução de custos com manutenção e reparos.' },
    { id: 4, title: 'Versatilidade', description: 'Adequados para diversos tipos de construções.' },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-6 sm:text-4xl md:text-5xl">Por Que Escolher Nossos Blocos de Concreto?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="flex items-center text-left sm:text-center">
              <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-4 sm:mr-2 md:mr-4" />
              <div>
                <h3 className="text-xl font-bold sm:text-2xl">{advantage.title}</h3>
                <p className="text-sm sm:text-base md:text-lg">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Advantages;
