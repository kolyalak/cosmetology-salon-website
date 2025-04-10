import React, { useState } from 'react';
import '../styles/Header.css'
import Topbar from './Topbar'
import logoImage from "../assets/logo.jpg";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    const navbarArea = document.querySelector('.navbar-area');
    if (window.scrollY > navbarArea.offsetHeight) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar-area">
      <Topbar />
      <div className="navbar">
        <div className="logo">
          <img src={logoImage} alt="" />
        </div>

        {/* Бургер кнопка */}
        <div className="burger" onClick={toggleMenu}>
          ☰
        </div>

        <nav className={`links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Головна</Link>
          <Link to="/service" onClick={() => setMenuOpen(false)}>Послуги</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Контакти</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
