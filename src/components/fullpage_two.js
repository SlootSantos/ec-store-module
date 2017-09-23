import React from 'react';

import '../styles/fullpage/fullpage.css';


function prodDescription(products) {
  return products
  .map(prod =>
      <div key={prod.name} className="fp__two-item">
        <div className="item-image-wrap">
          <img className="fp__two-item-image" src={prod.imgSrc} alt=""/>
        </div>

        <div className="item-text-wrap">
          <h1>{ prod.name }</h1>
          <div className="fp__two-item-description">
            <p>{ prod.description }</p>
          </div>
        </div>
      </div>
    )
};


function FullPageTwo(props) {
  let { products } = props;

  return(
    <div className="full_page fp__two">
      <div className="item-wrapper">
        { prodDescription(products) }
      </div>
    </div>
  );
};

export default FullPageTwo;
