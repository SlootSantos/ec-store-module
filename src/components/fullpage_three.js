import React from 'react';

import ImgLeo from '../assets/leo_web.webp';
import ImgLuc from '../assets/lucina_web.webp';
import ImgPetra from '../assets/petra_web.webp';
import ImgPhil from '../assets/philipp_web.webp';
import ImgFlo from '../assets/flo_square.webp';

import '../styles/fullpage/fullpage.css';



function FullPageThree() {
  return(
    <div className="full_page fp__three">
      <h2>Unser Team</h2>
      <div className="fp__three-item-wrapper">
        { renderTeamBubbles() }
      </div>
    </div>
  );
};


function renderTeamBubbles() {
  let arr = [
    {
      img: ImgLeo,
      id: 1
    },
    {
      img: ImgLuc,
      id: 2
    },
    {
      img: ImgPetra,
      id: 3
    },
    {
      img: ImgPhil,
      id: 4
    },
    {
      img: ImgFlo,
      id: 5
    }
  ];
  // TODO: FIX TEXT ALIGNMENT INSIDE OF BUBBLE
  return arr.map(a =>
    <div key={a.id}>
      <div className="fp__three-item-bubble outter">
        <div className="fp__three-item-bubble inner">
          <img src={a.img} alt="showing"/>
        </div>
      </div>
      { a.id }
    </div>
  );
};

export default FullPageThree;
