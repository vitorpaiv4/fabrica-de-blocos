import React from 'react';
import { useCart } from './CartContext';

function CartItem({ item }) {
  const { dispatch } = useCart();

  const removeItem = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } });
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 mb-4 rounded shadow">
      <div>
        <h4 className="text-lg font-bold">{item.title}</h4>
        <p>Quantidade: {item.qty}</p>
        <p>Preço: ${item.price}</p>
      </div>
      <button onClick={removeItem} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
        Remover
      </button>
    </div>
  );
}

export default CartItem;
