// ProductCard.js
import React from 'react';
import { useCart } from './CartContext';

function ProductCard({ title, description, price, oldPrice, image, id }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { title, description, price: parseFloat(price), image, id }
    });
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
      <img src={image} alt={title} className="w-full h-32 sm:h-40 object-cover mb-4 rounded-lg" />
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2 text-sm sm:text-base">{description}</p>
      <p className="text-lg sm:text-xl mb-2 text-red-500 font-bold">R${price}</p>
      <p className="text-xs sm:text-sm text-gray-500 line-through">R${oldPrice}</p>
      <button onClick={addToCart} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProductCard;
