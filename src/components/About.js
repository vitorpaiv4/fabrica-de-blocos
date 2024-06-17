import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../assets/product3.png';
import image2 from '../assets/product1.png';
import image3 from '../assets/blocks1.png';

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative py-20 bg-gray-100">
      <Slider {...settings}>
        {[image1, image2, image3].map((image, index) => (
          <div key={index} className="relative w-full h-[500px]">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto text-center text-white px-4 md:px-8 lg:px-16">
                {index === 0 && (
                  <>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                      Qualidade e Inovação em Cada Bloco
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl mb-12">
                      Nossa fábrica tem anos de experiência no mercado, comprometida com a qualidade e a inovação nos processos de produção.
                    </p>
                  </>
                )}
                {index === 1 && (
                  <>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                      Compromisso com a Excelência
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl mb-12">
                      Produzindo blocos de alta qualidade para construções duráveis e seguras.
                    </p>
                  </>
                )}
                {index === 2 && (
                  <>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                      Inovação Constante
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl mb-12">
                      Investindo continuamente em tecnologia para aprimorar nossos produtos.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default About;
