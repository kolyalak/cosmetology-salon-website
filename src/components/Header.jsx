import React from 'react';
import '../styles/Header.css'
import Topbar from './Topbar'
import logoImage from "../assets/logo.jpg"; // Фото процедури
import { Link } from 'react-router-dom';



const Header = () => {
  window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    const navbarArea = document.querySelector('.navbar-area');
    if (window.scrollY > navbarArea.offsetHeight) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };

  return (

    <header className="navbar-area">
      <Topbar />
      <div className="navbar">
        <div className="logo"><img src={logoImage} alt="" /></div>
        <nav className="links">
          <Link to="/">Головна</Link>
          <Link to="/service">Послуги</Link>
          <Link to="/contact">Контакти</Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;