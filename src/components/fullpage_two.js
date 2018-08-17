import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/fullpage/fullpage.css';
import '../styles/button/button.css';

function prodDescription(products) {
  return products.map(prod => (
    <div key={prod.name} className="fp__two_redesign_product_wrapper">
      <div className="fp__two_redesign_product" key={prod.name}>
        <div className="fp__two_redesign_product_img">
          <h1>{prod.name}</h1>
          <img src={prod.imgSrc} alt="" />
        </div>
        <div className="fp__two_redesign_product_text">
          <span dangerouslySetInnerHTML={{ __html: prod.description }} />
        </div>
        <div className="fp__two_redesign_product_details">
          <div className="fp__two_redesign_product_details_price">
            <span>{prod.quantity}</span>
            <span>
              <h3>
                <b>{prod.price}</b>
              </h3>
            </span>
          </div>
          <div className="fp__two_redesign_product_details_button">
            <Link
              className="btn redesign"
              to={{
                pathname: `/shop/${prod.name.split(' ').join('_')}-${prod.id}`
              }}
            >
              Jetzt Bestellen!
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));
}

function FullPageTwo(props) {
  const { products } = props;

  return (
    <div className="full_page fp__two">
      <div className="fp__two_redesign">
        <h1>Unsere Kaffees</h1>
        <div className="fp__two_redesign_container">{prodDescription(products)}</div>
      </div>
      {/* <div className="item-wrapper">{prodDescription(products)}</div>
      <div className="disclaimer">
        Jeweils 250g verfügbar <b>gemahlen</b> oder in <b>Bohnen</b> <br />
        Alle Preise inkl. Mehrwertsteuer.
      </div> */}
    </div>
  );
}

FullPageTwo.defaultProps = {
  products: [
    {
      name: 'test',
      price: '000',
      description: 'test',
      imgSrc: '1234.img',
      bullets: ['bullet']
    }
  ]
};

FullPageTwo.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      description: PropTypes.string,
      imgSrc: PropTypes.string,
      bullets: PropTypes.arrayOf(PropTypes.string)
    }))
};

export default FullPageTwo;
