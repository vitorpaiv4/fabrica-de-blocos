import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <div className="mb-4">
          <h4 className="text-lg font-bold sm:text-xl md:text-2xl">Norte Blocos</h4>
          <p className="text-sm sm:text-base md:text-lg">Artefatos de Concreto</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-4">
          <div className="flex items-center justify-center">
            <MapPinIcon className="w-4 h-4 mr-2" />
            <a 
              href="https://www.google.com/maps/place/Norte+Blocos+Artefatos+de+Concreto/@-8.7546794,-63.8500767,20.5z/data=!4m14!1m7!3m6!1s0x92325b4565864ad9:0x9768b8829d518c58!2sR.+Daniela,+3505+-+Igarap%C3%A9,+Porto+Velho+-+RO,+76824-329!3b1!8m2!3d-8.7547117!4d-63.8502774!3m5!1s0x92325b107693a16f:0xf33a89df2673f169!8m2!3d-8.75471!4d-63.8503252!16s%2Fg%2F11t6y9894n?hl=pt-BR&entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              R. Daniela, 3505 - Igarapé, Porto Velho - RO, 76824-458
            </a>
          </div>
          <div className="flex items-center justify-center">
            <PhoneIcon className="w-4 h-4 mr-2" />
            <a href="tel:+5569993373982" className="text-gray-400 hover:text-white text-sm sm:text-base md:text-lg">
              (69) 99337-3982
            </a>
          </div>
          <div className="flex items-center justify-center">
            <EnvelopeIcon className="w-4 h-4 mr-2" />
            <a 
              href="mailto:norteblocos.ro@gmail.com" 
              className="text-gray-400 hover:text-white text-sm sm:text-base md:text-lg"
            >
              norteblocos.ro@gmail.com
            </a>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com/profile.php?id=100083873379541&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/norteblocos?igsh=ODhnbHhpcWhmNnJ3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5569993373982&text=Oi,%20gostaria%20de%20fazer%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg">&copy; 2024 Norte Blocos. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;
