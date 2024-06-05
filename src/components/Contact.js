import React from 'react';

function Contact() {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-6 sm:text-4xl md:text-5xl">Entre em Contato</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base md:text-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base md:text-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Telefone"
              className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base md:text-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Tipo de Projeto"
              className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base md:text-lg"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Mensagem"
              className="w-full px-3 py-2 border rounded-lg text-sm sm:text-base md:text-lg"
              rows="4"
            ></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
