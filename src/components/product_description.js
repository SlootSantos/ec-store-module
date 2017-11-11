import React from 'react';
import PropTypes from 'prop-types';

function ProductDescription(props) {
  const price = '€ 100';
  const quantity = 'kg';
  const { addToCart, product } = props;
  const { description, name, id } = product;
  const formattedPrice = `${price} / ${quantity}`;

  return (
    <div className="product-page__description">
      <h1>{ name }</h1>
      <span><b>{ formattedPrice }</b></span>
      <p>{ description }</p>

      <ul>
        <li>das und dies weischt</li>
        <li>das und dies weischt</li>
        <li>das und dies weischt</li>
      </ul>

      <b>Geschmack:</b> <span>saftig wtf</span><br /><br />
      <b>Geschmack:</b> <span>saftig wtf</span><br /><br />
      <b>Geschmack:</b> <span>saftig wtf</span><br />

      <button className="btn btn-secondary" onClick={() => addToCart(id, 1)}>Add to Cart</button>
    </div>
  );
}

ProductDescription.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired
};

export default ProductDescription;
