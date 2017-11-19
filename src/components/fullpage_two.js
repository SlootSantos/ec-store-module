import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/fullpage/fullpage.css';
import '../styles/button/button.css';


function prodDescription(products) {
  return products
  .map(prod => (

    <div key={prod.name} className="fp__two-item">
      <div className="item-image-wrap">
        <img className="fp__two-item-image" src={prod.imgSrc} alt="" />
      </div>

      <div className="item-text-wrap">
        <h1>{ prod.name }</h1>
        <b>{ prod.price }</b>

        <div className="fp__two-item-description">
          <p>
            {/* TODO: GOOD LORD CHANGE THIS ASAP! */}
            <span dangerouslySetInnerHTML={{ __html: prod.description }} />
            { prod.bullets.map(bull => <span className="fp__two-bullet" key={bull}>{ bull }</span>) }
            <span className="btn-wrapper">
              <Link className="btn btn-primary"to={{ pathname: `/shop/${prod.name.split(' ').join('_')}-${prod.id}` }}>Jetzt Bestellen!</Link>
              {/* <a className="btn btn-primary"
                href={`mailto:info@vo-coffee.de?subject=Bestellung ${prod.name}`}>Bestellen!</a> */}
            </span>
          </p>
        </div>
      </div>
    </div>
  ));
}


function FullPageTwo(props) {
  const { products } = props;

  return (
    <div className="full_page fp__two">
      <div className="item-wrapper">
        { prodDescription(products) }
      </div>
      <div className="disclaimer">
        Jeweils 250g verfügbar <b>gemahlen</b> oder in <b>Bohnen</b> <br />
        Preise zzgl. €4,99 Versand <br />
        <b>Zahlbar per PayPal oder Vorkasse</b>
      </div>
    </div>
  );
}

FullPageTwo.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    imgSrc: PropTypes.string
  })).isRequired
};

export default FullPageTwo;
