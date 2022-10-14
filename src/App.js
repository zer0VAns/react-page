import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar background={'transparent'} />
      <Hero title="El Rey de la Cerveza" />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/detail/:productid' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}
