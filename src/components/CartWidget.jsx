import React from 'react';

import './styles/CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
        {/* icono */}
       <img src="https://i.imgur.com/57lmOWw.png" id='logo2'/>
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;
