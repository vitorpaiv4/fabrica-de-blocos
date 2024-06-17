import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png'; 

function Hero() {
  return (
<div className="bg-[#003366] text-white py-20">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Norte Blocos Logo" className="h-40 w-auto" /> 
        </div>
        <h1 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl">Blocos de Concreto de Alta Qualidade para suas Construções</h1>
        <p className="text-lg mb-6 sm:text-xl md:text-2xl">Durabilidade, Sustentabilidade e Economia para seu Projeto</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://api.whatsapp.com/send?phone=5569993373982&text=Oi,%20gostaria%20de%20fazer%20um%20or%C3%A7amento." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <FaWhatsapp className="w-5 h-5 mr-2" />
            <span>Solicite uma Cotação Agora no WhatsApp</span>
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
