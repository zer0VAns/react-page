import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


import './styles/NavBar.css';

const NavBar = ({ background }) => {

  const brand =
    'https://i.imgur.com/IeLGsfc.png';

  return (
    <header className={`header background--${background}`}>
      
      <div className="header-container">
        
        {/* Botón de menú  */}
        <div className="menu-button">

          <span>Menu</span>
        </div>

        {/* links de navegación */}
        <nav>
          <ul className="nav-container">
            
            <li>
            <Link to={'/'}>
              <a href="/">Inicio</a>
              </Link>
            </li>
          
            <li className="products-item">
            <Link to={'/products'}>
              <a href="/">
                Productos 
                </a>
                </Link>
                
            </li>
            
            <li>
              <Link to={'category/Bebida'}>
              <a href="/">Bebidas</a>

              </Link>
            </li>
            <li>
              <Link to={'category/Snack'}>
              <a href="/">Snacks</a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* logo de la marca */}
        <Link to='/'>
        <div className="logo-container">

          <img src={brand} alt="logo" id="logo1" />
        </div>
        </Link>
        {/* cart widget */}
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
