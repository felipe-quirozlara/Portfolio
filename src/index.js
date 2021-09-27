import React from 'react';
import ReactDOM from 'react-dom';
import AcercaDeMi from './components/Acercademi/acercademi';
import Contacto from './components/contacto/contacto';
import Habilidades from './components/habilidades/habilidades';
import Header from './components/header';
import Hero from './components/hero/hero';
import Trabajos from './components/trabajos/trabajos';
import Footer from './components/footer/footer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <AcercaDeMi />
    <Habilidades />
    <Trabajos />
    <Contacto />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
