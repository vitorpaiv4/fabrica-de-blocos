import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Products />
      <Advantages />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
