import React, { useState } from 'react';
import './navbar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <div className="navbar">
        <a href="#hero" className="navbar-logo">Coffee Haven</a>

        <div className="navbar-links">
          <a href="#hero">Home</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
