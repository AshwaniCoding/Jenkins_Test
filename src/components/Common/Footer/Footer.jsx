import React from 'react';
import './footer.css';

const Footer = () => {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h3>Quick Links</h3><br />
          <ul>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About Us</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); handleScroll('faq'); }}>FAQ</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗</a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter Signup</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-sitemap">
          <h3>Site Map</h3>
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>Home</a></li>
            <li><a href="#explore" onClick={(e) => { e.preventDefault(); handleScroll('explore'); }}>Explore</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); handleScroll('faq'); }}>FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Library Management. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
