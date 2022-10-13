import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import './style.css';


export default function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <Hero title="El Rey de la Cerveza" />
      <ItemListContainer/>
    </>
  );
}
