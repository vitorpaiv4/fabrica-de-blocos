// CartItem.js
import React from 'react';
import { useCart } from './CartContext';

function CartItem({ item }) {
  const { dispatch } = useCart();

  const removeItem = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } });
  };

  const increaseQty = () => {
    dispatch({ type: 'INCREASE_QTY', payload: { id: item.id } });
  };

  const decreaseQty = () => {
    dispatch({ type: 'DECREASE_QTY', payload: { id: item.id } });
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 mb-4 rounded shadow">
      <div>
        <h4 className="text-lg font-bold">{item.title}</h4>
        <p>Preço Unitário: {formatCurrency(item.price)}</p>
        <div className="flex items-center mt-2">
          <button onClick={decreaseQty} className="bg-gray-200 px-2">-</button>
          <span className="mx-2">{item.qty}</span>
          <button onClick={increaseQty} className="bg-gray-200 px-2">+</button>
        </div>
      </div>
      <div>
        <p>Total: {formatCurrency(item.price * item.qty)}</p>
        <button onClick={removeItem} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded ml-4">
          Remover
        </button>
      </div>
    </div>
  );
}

export default CartItem;
