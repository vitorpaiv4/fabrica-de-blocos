import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';

function CartPage({ setView }) {
  const { state } = useCart();

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Carrinho de Compras</h2>
      {state.items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <button onClick={() => setView('home')} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Voltar à Loja
      </button>
    </div>
  );
}

export default CartPage;
