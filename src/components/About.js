import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import exemple1 from '../assets/exemple1.jpg';
import exemple2 from '../assets/exemple2.jpg';
import exemple3 from '../assets/exemple3.png';

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">Qualidade e Inovação em Cada Bloco</h2>
          <p className="text-lg mb-12">Nossa fábrica tem anos de experiência no mercado, comprometida com a qualidade e a inovação nos processos de produção.</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="w-full md:w-1/2">
            <Slider {...settings}>
              <div>
                <img src={exemple1} alt="Imagem 1" className="w-full h-auto"/>
              </div>
              <div>
                <img src={exemple2} alt="Imagem 2" className="w-full h-auto"/>
              </div>
              <div>
                <img src={exemple3} alt="Imagem 3" className="w-full h-auto"/>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
