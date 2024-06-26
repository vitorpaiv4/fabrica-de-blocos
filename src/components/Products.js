// Products.js
import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';

// Certifique-se de importar as imagens corretas
// import productImage1 from '../path/to/productImage1.jpg';
// import productImage2 from '../path/to/productImage2.jpg';
// import productImage3 from '../path/to/productImage3.jpg';

const products = [
  {
    id: 1,
    title: 'Bloco Estrutural 19',
    description: 'Tamanho: 19cm x 19cm x 39cm',
    price: '6.80',
    oldPrice: '7.50',
    // image: productImage1,
  },
  {
    id: 2,
    title: 'Bloco Estrutural 14',
    description: 'Tamanho: 14cm x 19cm x 39cm',
    price: '4.95',
    oldPrice: '5.50',
    // image: productImage2,
  },
  {
    id: 3,
    title: 'Bloco de Vedação 9',
    description: 'Tamanho: 9cm x 19cm x 39cm',
    price: '3.40',
    oldPrice: '4.00',
    // image: productImage3,
  },
  {
    id: 4,
    title: 'Bloco de Vedação 14',
    description: 'Tamanho: 14cm x 19cm x 39cm',
    price: '4.30',
    oldPrice: '4.80',
    // image: productImage1,
  },
  {
    id: 5,
    title: 'Meio Bloco 14',
    description: 'Tamanho: 14cm x 19cm x 19cm',
    price: '2.50',
    oldPrice: '3.00',
    // image: productImage2,
  },
  {
    id: 6,
    title: 'Meio Bloco 9',
    description: 'Tamanho: 9cm x 19cm x 19cm',
    price: '2.00',
    oldPrice: '2.50',
    // image: productImage3,
  },
  {
    id: 7,
    title: 'Canaleta 9',
    description: 'Tamanho: 9cm x 19cm x 39cm',
    price: '4.60',
    oldPrice: '5.00',
    // image: productImage1,
  },
  {
    id: 8,
    title: 'Canaleta 14',
    description: 'Tamanho: 14cm x 19cm x 39cm',
    price: '5.50',
    oldPrice: '6.00',
    // image: productImage2,
  },
  {
    id: 9,
    title: 'M² de piso (6cm)',
    description: 'M² de piso com 6cm de espessura',
    price: '75.00',
    oldPrice: '80.00',
    // image: productImage3,
  },
  {
    id: 10,
    title: 'M² de piso (8cm)',
    description: 'M² de piso com 8cm de espessura',
    price: '79.20',
    oldPrice: '85.00',
    // image: productImage1,
  }
];

function Products({ setView }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Nossos Produtos</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-2 sm:p-4 lg:p-6">
              <ProductCard
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                oldPrice={product.oldPrice}
                // Passe a imagem se disponível
                // image={product.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Products;
