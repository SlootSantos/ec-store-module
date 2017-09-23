import React from 'react';

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
  let arr = [1,2,3];
  // TODO: FIX TEXT ALIGNMENT INSIDE OF BUBBLE
  return arr.map(a =>
    <div key={a} className="fp__three-item-bubble outter">
      <div className="fp__three-item-bubble inner">
        { a }
      </div>
    </div>
  );
};

export default FullPageThree;
