import React from 'react';

import './styles/CartWidget.css';
import { useContext } from 'react';
import { CartContext } from './Context/CartContext';
import { Link } from 'react-router-dom';
const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)
  return (
    <Link to={'/cart'}>
    <div className="cart-widget">
        {/* icono */}
        
       <img src="https://i.imgur.com/57lmOWw.png" id='logo2'/>
       <p className='qty-display'>{totalQuantity}</p>
      
    </div>
    </Link>
  );
};

export default CartWidget;
