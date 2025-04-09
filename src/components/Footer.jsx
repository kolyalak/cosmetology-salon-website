import React from 'react';
import '../styles/Footer.css';
import logoImage from "../assets/logo.jpg"; // Фото процедури


const Footer = () => {
  return (
    <footer>
      <div className="viber-consultation">
        <p>Безкоштовна консультація у Viber: +38 063 119 75 06</p>
      </div>
      <div className="footer-area">
        <div className="logo">
          <img className='logo-png' src={logoImage} alt="logo-png" />
          Косметологічний салон <strong className='logo-txt'>Маріанна </strong></div>
        <div className="social-links">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://www.instagram.com/_marianna_cosmetolog_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a>
        </div>
        <div className="contact-info">
          <p>Графік роботи: Пн-Пт 9:00 - 18:00</p>
          <p>Телефон: +38 063 119 75 06</p>
          <p>Адреса: вул. Луценка, 7</p>
          <small>made by kolyalak</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
