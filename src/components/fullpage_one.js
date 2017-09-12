import React from 'react';

import '../styles/fullpage.css';

import LogoNegativ from '../assets/logo_negativ.webp';


function FullpageOne() {
  return(
    <div className="full_page fp__one">
      <img src={LogoNegativ} alt="V|O COFFEE"/>
    </div>
  );
};

export default FullpageOne;
