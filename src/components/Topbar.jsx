import React from 'react';
import '../styles/Topbar.css';

const TopBar = () => {
  return (
    <div className="top-bar-area">
      <p>Адреса: вул. Луценка 7 | Телефон: +380 63 119 75 06</p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/_marianna_cosmetolog_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  );
};

export default TopBar;
