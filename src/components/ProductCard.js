import React from 'react';

function ProductCard({ title, description, price, oldPrice, image }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
      <img src={image} alt={title} className="w-full h-32 sm:h-40 object-cover mb-4 rounded-lg" />
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2 text-sm sm:text-base">{description}</p>
      <p className="text-lg sm:text-xl mb-2 text-red-500 font-bold">{price}</p>
      <p className="text-xs sm:text-sm text-gray-500 line-through">{oldPrice}</p>
    </div>
  );
}

export default ProductCard;
