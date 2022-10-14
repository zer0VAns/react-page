import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ItemListContainer.css';

const Hero = ({ title }) => {
  return (
    <section className="hero hero-slide-1">
      <div className="hero-container">
        <article className="hero-container__text-box">
          <h1>{title}</h1>
          <p>
            ¡La mente muy clara y la cerveza muy fría! Vení a conocer las
            mejores cervezas del inframundo.
          </p>
          <Link to={'/products'}>
          <button class="button-primary">Comprar</button>
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Hero;
