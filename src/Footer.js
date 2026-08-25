import React from 'react';
import logo from './Logo.svg';

function Footer() {
  return (
    <footer className="footer-bg">
      <div className="container footer-container">
        <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
        
        <div className="footer-col">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>123 Lemon St, Chicago</p>
          <p>+1 (312) 555-0199</p>
          <p>info@littlelemon.com</p>
        </div>

        <div className="footer-col">
          <h4>Social Media Links</h4>
          <ul>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">TikTok</a></li>
            <li><a href="/">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;