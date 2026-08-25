import React from 'react';
import heroImg from './restauranfood.jpg';

function Header() {
  return (
    <header className="hero-bg">
      <div className="container hero-container">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <button className="btn btn-primary">Reserve a Table</button>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Little Lemon Restaurant Food" className="hero-img" />
        </div>
      </div>
    </header>
  );
}

export default Header;