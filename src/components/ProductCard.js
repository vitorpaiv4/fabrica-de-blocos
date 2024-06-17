// ProductCard.js
import React from 'react';
import { useCart } from './CartContext';

function ProductCard({ id, title, description, price, oldPrice, image }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, title, description, price: parseFloat(price), image }
    });
  };

  const formatCurrency = (value) => {
    return `R$ ${parseFloat(value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
      {image && (
        <img src={image} alt={title} className="w-full h-40 md:h-48 lg:h-56 object-cover mb-4 rounded-lg" />
      )}
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2 text-sm md:text-base lg:text-lg">{description}</p>
      <p className="text-lg md:text-xl lg:text-2xl mb-2 text-red-500 font-bold">{formatCurrency(price)}</p>
      <p className="text-xs md:text-sm lg:text-base text-gray-500 line-through">{formatCurrency(oldPrice)}</p>
      <button onClick={addToCart} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-3 md:px-5 lg:py-4 lg:px-6 rounded">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProductCard;
