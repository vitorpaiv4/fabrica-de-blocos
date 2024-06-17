// CartPage.js
import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';

function CartPage({ setView }) {
  const { state } = useCart();

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2);
  };

  const handleCheckout = () => {
    const message = state.items.map(item => 
      `*${item.title}* - Quantidade: ${item.qty} - Total: R$${(item.price * item.qty).toFixed(2)}`
    ).join('%0A');
    const totalPrice = getTotalPrice();
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5569993373982&text=${encodeURIComponent(message)}%0A%0ATotal: R$${totalPrice}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Carrinho de Compras</h2>
      {state.items.length > 0 ? (
        <>
          {state.items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-4">
            <h3 className="text-xl font-bold">Total: R${getTotalPrice()}</h3>
            <button onClick={handleCheckout} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
              Finalizar Compra no WhatsApp
            </button>
            <button onClick={() => setView('home')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4">
              Voltar à Loja
            </button>
          </div>
        </>
      ) : (
        <p className="text-lg">Seu carrinho está vazio.</p>
      )}
    </div>
  );
}

export default CartPage;
