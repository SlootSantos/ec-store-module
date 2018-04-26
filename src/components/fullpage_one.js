import React from 'react';

import '../styles/fullpage/fullpage.css';

import Logo from '../assets/vo_coffee_logo_white.svg';

function FullpageOne() {
  return (
    <div className="full_page fp__one">
      <div className="fp__one-layer">
        <img src={Logo} alt="V|O COFFEE" />
      </div>
    </div>
  );
}

export default FullpageOne;
