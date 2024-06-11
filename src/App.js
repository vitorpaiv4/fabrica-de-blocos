import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartPage from './components/CartPage';

function App() {
  const [view, setView] = useState('home');  // Define o estado aqui

  return (
    <div className="App">
      {view === 'home' ? (
        <>
          <Hero />
          <About />
          <Products setView={setView} />  // Passa setView como prop para Products
          <Advantages />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      ) : (
        <CartPage setView={setView} />
      )}
    </div>
  );
}

export default App;
