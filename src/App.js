import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import './style.css';

export default function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <ItemListContainer title="El Rey de la Cerveza" />
    </>
  );
}
