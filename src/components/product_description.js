import React from 'react';
import PropTypes from 'prop-types';

function ProductDescription(props) {
  const { addToCart, product, loading } = props;
  const {
    description,
    name,
    id,
    price,
    bullets,
    quantity
  } = product;
  const formattedPrice = `${price} / ${quantity}`;

  return (
    <div className="product-page__description">
      <h1>{ name }</h1>
      <span><b>{ formattedPrice }</b></span>
      <p dangerouslySetInnerHTML={{ __html: description }} />

      <ul>
        { bullets.map(i => <li key={i}>{ i }</li>) }
      </ul>

      <button className={`btn btn-${loading ? 'primary' : 'secondary'}`} onClick={() => addToCart(id, 1)}>{loading ? 'einpacken…' : 'In den Einkaufswagen'}</button>
    </div>
  );
}

ProductDescription.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    quantity: PropTypes.string
  }).isRequired,
  loading: PropTypes.bool.isRequired
};

export default ProductDescription;
