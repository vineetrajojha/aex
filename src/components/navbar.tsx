import React, { useState } from 'react';
import './navbar.css';

const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const aboutSection = document.querySelector('.about-section');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">desaign</div>
      <div className={`navbar-links-container${menuOpen ? ' open' : ''}`}>
        <ul className="navbar-links">
          <li><a href="#about" onClick={scrollToAbout}>About</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
        <button className="navbar-signin">Register Now</button>
      </div>
      <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar; 