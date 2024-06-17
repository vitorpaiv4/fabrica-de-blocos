// CartPage.js
import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';

function CartPage({ setView }) {
  const { state, dispatch } = useCart();

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_CONTACT_INFO', payload: { [name]: value } });
  };

  const formatCurrency = (value) => {
    return `R$ ${parseFloat(value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  };

  const getTotalPrice = () => {
    const subtotal = state.items.reduce((total, item) => total + item.price * item.qty, 0);
    const paymentMethod = state.contactInfo.paymentMethod;
    const discount = (paymentMethod === 'Pix' || paymentMethod === 'Dinheiro') ? 0.05 : 0;
    return (subtotal * (1 - discount)).toFixed(2);
  };

  const handleCheckout = () => {
    const contactInfo = state.contactInfo;
    const message = state.items.map(item => 
      `*${item.title}* - Quantidade: ${item.qty} - Total: ${formatCurrency(item.price * item.qty)}`
    ).join('%0A');

    const totalPrice = getTotalPrice();
    const contactDetails = `
      Nome: ${contactInfo.name}
      Telefone: ${contactInfo.phone}
      Endereço: ${contactInfo.address}, ${contactInfo.neighborhood}, ${contactInfo.city} - ${contactInfo.zip}
      Forma de Pagamento: ${contactInfo.paymentMethod}
      Total (com desconto, se aplicável): ${formatCurrency(totalPrice)}
      Taxa de Entrega: A ser discutida
    `;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=5569993373982&text=${encodeURIComponent(message)}%0A%0ATotal: ${formatCurrency(totalPrice)}%0A%0A${encodeURIComponent(contactDetails)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto mt-8 p-4 sm:p-8 lg:p-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Carrinho de Compras</h2>
      {state.items.length > 0 ? (
        <>
          {state.items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-4">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Total: {formatCurrency(parseFloat(getTotalPrice()))}</h3>
            <div className="mt-4">
              <label className="block mb-2">Nome:</label>
              <input
                type="text"
                name="name"
                value={state.contactInfo.name}
                onChange={handleContactChange}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block mb-2">Telefone:</label>
              <input
                type="text"
                name="phone"
                value={state.contactInfo.phone}
                onChange={handleContactChange}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block mb-2">Endereço:</label>
              <input
                type="text"
                name="address"
                value={state.contactInfo.address}
                onChange={handleContactChange}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block mb-2">Bairro:</label>
              <input
                type="text"
                name="neighborhood"
                value={state.contactInfo.neighborhood}
                onChange={handleContactChange}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block mb-2">Cidade:</label>
              <input
                type="text"
                name="city"
                value={state.contactInfo.city}
                onChange={handleContactChange}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block mb-2">CEP:</label>
              <input
                type="text"
                name="zip"
                value={state.contactInfo.zip}
                onChange={handleContactChange}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block mb-2">Forma de Pagamento:</label>
              <select
                name="paymentMethod"
                value={state.contactInfo.paymentMethod}
                onChange={handleContactChange}
                className="w-full p-2 border rounded mb-4"
              >
                <option value="Pix">Pix</option>
                <option value="Cartão de Crédito">Cartão de Crédito</option>
                <option value="Cartão de Débito">Cartão de Débito</option>
                <option value="Dinheiro">Dinheiro</option>
              </select>
              <p className="mt-4 text-sm text-gray-600">
                A taxa de entrega deve ser discutida no WhatsApp.
              </p>
              <button onClick={handleCheckout} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
                Finalizar Compra no WhatsApp
              </button>
              <button onClick={() => setView('home')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4">
                Voltar à Loja
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-lg mb-4">Seu carrinho está vazio.</p>
          <button onClick={() => setView('home')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Voltar à Loja
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
