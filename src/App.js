import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products.js';


export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar background={'transparent'} />

      <Routes>
      <Route path='/' element={<Hero title="El Rey de la Cerveza"/>}/>
      <Route path='/products' element={<Products/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:productid' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}
