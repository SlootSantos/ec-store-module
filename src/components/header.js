import React from 'react';

import '../styles/header.css';

// import Phone from '../assets/smartphone.svg';


function Header() {
  return (
    <div className="header">
      <div className="header__nav left">
        FAQ | Contact | <span className="phone_number">+49 123456</span>
      </div>
      <div className="header__nav logo">
        V | O
      </div>
      <div className="header__nav right">
        <span className="opening_time">Mo - Fr: 08:00 - 18:00</span> | F & $
      </div>
    </div>
  )
};


export default Header;
