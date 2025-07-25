import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Gallery from './components/gallery';
import Footer from './components/footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
