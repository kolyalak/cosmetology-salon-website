import React from 'react';
import '../styles/Header.css'
import Topbar from './Topbar'
import logoImage from "../assets/logo.jpg"; // Фото процедури


const Header = () => {
    window.onscroll = function() {
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
            <Topbar/>
            <div className="navbar">
                <div className="logo"><img src={logoImage} alt="" /></div>
                <nav className="links">
                    <a href="/">Головна </a>
                    <a href="/service">Послуги </a>
                    <a href="/contact">Контакти </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;