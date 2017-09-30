import React from 'react';
// import { Link } from 'react-router-dom';

import '../styles/fullpage/fullpage.css';
import '../styles/button/button.css';


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
            <p>
              { prod.description }
              { prod.bullets.map(bull => <span className="fp__two-bullet" key={bull}>{bull}</span>) }
              <span className="btn-wrapper">
                {/* <Link className="btn btn-primary" to={{pathname:`/shop/${prod.name.split(' ').join('_')}-${prod.id}`}}>Bestellen!</Link> */}
                <a className="btn btn-primary"
                  href={`mailto:info@vo-coffee.de?subject=Bestellung ${prod.name}`}>Bestellen!</a>
              </span>
            </p>
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
