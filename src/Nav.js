import React from 'react';
import logo from './Logo.svg'; // or your logo image name

function Nav() {
  return (
    <nav className="container nav-container">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Reservations</a></li>
        <li><a href="/">Order Online</a></li>
        <li><a href="/">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;

