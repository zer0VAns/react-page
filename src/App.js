import React, { createContext, useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products.js';
import { CartProvider } from './components/Context/CartContext.js';
import { NotificacionProvider } from './notificacion/NotificacionProvider.js';
import Cart from './components/Cart/Cart.js';
export const Context = createContext()



function App() {
 

  return (
    <div className='App'>
      <NotificacionProvider>
      <CartProvider>
      <BrowserRouter>
      <NavBar background={'transparent'} />
      <Routes>
      <Route path='/' element={<Hero title="El Rey de la Cerveza"/>}/>
      <Route path='/products' element={<Products/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:productid' element={<ItemDetailContainer/>}/>  
        <Route path='/cart' element={<Cart/>}/>     
      </Routes>
      </BrowserRouter>
      </CartProvider>
      </NotificacionProvider>
      
      
    </div>
  );
}
export default App