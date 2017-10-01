import React from 'react';

import '../styles/footer/footer.css';

import Logo from '../assets/vo_coffee_logo_white.svg';


function Footer() {
  return (
    <div className="footer">
      <div className="image">
        <img src={ Logo } alt=""/>
      </div>
      <div className="content">
        <h1>V|O Trading UG</h1>
        <b>Petra Vo</b><br/><br/>
        <span>Rheinhäuserstr.12</span><br/>
        <span>68165 Mannheim</span><br/>
        <span>Germany</span><br/>
        <span>Mobil: +49 160 94446382</span><br/>
        <span><a href="mailto:info@vo-coffee.de">Mail: info@vo-coffee.de</a></span>
      </div>
    </div>
  )
};


export default Footer;
