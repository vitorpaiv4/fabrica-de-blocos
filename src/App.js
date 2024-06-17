// App.js
import React, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { CartProvider, useCart } from './components/CartContext';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartPage from './components/CartPage';

function App() {
  const [view, setView] = useState('home');

  return (
    <CartProvider>
      <div className="App">
        {view === 'home' ? (
          <>
            <Hero />
            <About />
            <Products setView={setView} />
            <Advantages />
            <Testimonials />
            <Footer />
            <CartButton setView={setView} />
          </>
        ) : (
          <CartPage setView={setView} />
        )}
      </div>
    </CartProvider>
  );
}

function CartButton({ setView }) {
  const { state } = useCart(); 

  return (
    <button 
      onClick={() => setView('cart')} 
      className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 z-50"
    >
      <ShoppingCartIcon className="h-6 w-6" />
      <span>Carrinho ({state.items.reduce((total, item) => total + item.qty, 0)})</span>
    </button>
  );
}

export default App;
