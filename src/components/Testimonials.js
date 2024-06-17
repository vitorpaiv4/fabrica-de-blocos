import React from 'react';

function Testimonials() {
  const testimonials = [
    { id: 1, name: 'Afonso', quote: 'Os blocos são de excelente qualidade e o atendimento é ótimo.' },
    { id: 2, name: 'João', quote: 'Recomendo a Norte Blocos pela durabilidade dos produtos.' },
    { id: 3, name: 'Fernanda', quote: 'Muito satisfeito com os blocos e o suporte técnico.' },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-6 sm:text-4xl md:text-5xl">O Que Nossos Clientes Dizem</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <p className="text-base sm:text-lg italic mb-4">"{testimonial.quote}"</p>
              <h3 className="text-xl sm:text-2xl font-bold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
