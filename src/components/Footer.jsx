import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>PLUTO INDIA TRADE LINK</h3>
            <p>
              Leading supplier and trader of plastic scrap and raw materials. 
              Based in Rajkot, serving industries across India and beyond.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#why-choose-us">About Us</a></li>
              <li><a href="#coverage">Coverage</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Products</h4>
            <ul>
              <li><a href="#products">HDLDPE Scrap</a></li>
              <li><a href="#products">PPCP / PP</a></li>
              <li><a href="#products">ABS Regrind</a></li>
              <li><a href="#products">PET Flakes</a></li>
              <li><a href="#products">PC / Nylon</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="tel:+917574977367">+91 75749 77367</a></li>
              <li><a href="#contact">Get a Quote</a></li>
              <li><a href="#contact">Sourcing Request</a></li>
              <li><a href="https://wa.me/917574977367" target="_blank">WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Pluto India Trade Link. All Rights Reserved. Designed for Industrial Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
