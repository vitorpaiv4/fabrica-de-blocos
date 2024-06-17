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
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
      {image && (
        <img src={image} alt={title} className="w-full h-32 sm:h-40 object-cover mb-4 rounded-lg" />
      )}
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2 text-sm sm:text-base">{description}</p>
      <p className="text-lg sm:text-xl mb-2 text-red-500 font-bold">{formatCurrency(price)}</p>
      <p className="text-xs sm:text-sm text-gray-500 line-through">{formatCurrency(oldPrice)}</p>
      <button onClick={addToCart} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProductCard;
