import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close the menu after clicking on a link
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>BookVerse</h1>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <Link to="/"><li><a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>Home</a></li></Link>
          <Link to="/"><li><a href="#explore" onClick={(e) => { e.preventDefault(); handleScroll('explore'); }}>Explore</a></li></Link>
          <Link to="/"><li><a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About</a></li></Link>
          <Link to="/"><li><a href="#faq" onClick={(e) => { e.preventDefault(); handleScroll('faq'); }}>FAQ</a></li></Link>
        </ul>
      </nav>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </div>
      <nav className={`offcanvas-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="offcanvas-header">
          <h1>3D Library</h1>
          <div className="close-menu-icon" onClick={toggleMobileMenu}>
            ✖
          </div>
        </div>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>Home</a></li>
          <li><a href="#explore" onClick={(e) => { e.preventDefault(); handleScroll('explore'); }}>Explore</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
