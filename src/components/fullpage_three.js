import React from 'react';

import ImgLeo from '../assets/leo_web.webp';
// import ImgLuc from '../assets/lucina_web.webp';
import ImgPetra from '../assets/petra_web.webp';
import ImgPhil from '../assets/philipp_web.webp';
import ImgFlo from '../assets/flo_square.webp';

import '../styles/fullpage/fullpage.css';



function FullPageThree() {
  return(
    <div className="full_page fp__three">
      <h1>V | O Crew</h1>
      <div className="fp__three-item-wrapper">
        { renderTeamBubbles() }
      </div>
    </div>
  );
};


function renderTeamBubbles() {
  let arr = [
    {
      img: ImgPetra,
      name: 'Petra',
      desc: 'The Chaperone',
      id: 1
    },
    // {
    //   img: ImgLuc,
    //   name: 'Lucina',
    //   desc: 'The Chaperone',
    //   id: 2
    // },
    {
      img: ImgLeo,
      name: 'Leo',
      desc: 'The Accountant',
      id: 3
    },
    {
      img: ImgPhil,
      name: 'Philipp',
      desc: 'The Creator',
      id: 4
    },
    {
      img: ImgFlo,
      name: 'Flo',
      desc: 'The Nerd',
      id: 5
    }
  ];


  return arr.map(a =>
    <div key={a.id} className="fp__three-items">
      <div className="fp__three-items">
        <div className="fp__three-item-bubble outter">
          <div className="fp__three-item-bubble inner">
            <img src={a.img} alt="showing"/>
          </div>
        </div>
      </div>
      <div className="description">
        <h1>{ a.name }</h1>
        <h4>{ a.desc }</h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dignissimos odio laborum expedita rem, unde at sequi, quibusdam dicta, error ducimus distinctio asperiores, harum non! Consectetur, illo. Amet, nesciunt, asperiores!
        </p>
      </div>
    </div>
  );
};

export default FullPageThree;
