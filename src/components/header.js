import React from 'react';

import '../styles/header/header.css';

import Logo from '../assets/vo_coffee_logo_white.svg';
import facebook from '../assets/facebook-logo.svg';
import instagram from '../assets/instagram-logo.svg';


function Header() {
  return (
    <div className="header">
      <div className="header__nav left">
        FAQ | Contact | <span className="phone_number">+49 160 94446382</span>
      </div>
      <div className="header__nav logo">
        <img src={Logo} alt=""/>
      </div>
      <div className="header__nav right">
        <span className="opening_time">Mo - Fr: 08:00 - 18:00</span> | { renderIcons() }
      </div>
    </div>
  )
};

function renderIcons() {
  return (
    <div className="social-icons">
      <img onClick={ () => goToSocialMedia('https://facebook.com/vocoffeede') } src={facebook} alt=""/>
      <img onClick={ () => goToSocialMedia('https://www.instagram.com/vo.coffee') } src={instagram} alt=""/>
    </div>
  )
};

function goToSocialMedia(link) {
  window.open(link);
};


export default Header;
