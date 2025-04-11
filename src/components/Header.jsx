import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import Topbar from './Topbar';
import logoImage from "../assets/logo.jpg";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const navbarArea = document.querySelector('.navbar-area');
      if (window.scrollY > navbarArea.offsetHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-area">
      <Topbar />
      <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="logo">
          <img src={logoImage} alt="logo" />
        </div>

        <div className="burger" onClick={toggleMenu}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
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
