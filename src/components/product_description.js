import React from 'react';
import PropTypes from 'prop-types';

function ProductDescription(props) {
  const { addToCart, product, loading, onNumberChange, quantityNumber } = props;
  const { description, name, id, price, bullets, quantity } = product;
  const formattedPrice = `${price} / ${quantity}`;

  return (
    <div className="product-page__description">
      <h1>{name}</h1>
      <span>
        <b>{formattedPrice}</b>
      </span>
      <p dangerouslySetInnerHTML={{ __html: description }} />

      <ul>{bullets.map(i => <li key={i}>{i}</li>)}</ul>

      <div className="product-page__quantity">
        <b>Anzahl: </b>
        <input
          type="number"
          min="1"
          max="10"
          value={quantityNumber}
          onChange={onNumberChange}
        />
      </div>

      <button
        className={`btn redesign${loading ? '-secondary' : '-white'}`}
        onClick={() => addToCart(id, quantityNumber)}
      >
        {loading ? 'einpacken…' : 'In den Einkaufswagen'}
      </button>
    </div>
  );
}

ProductDescription.propTypes = {
  addToCart: PropTypes.func.isRequired,
  onNumberChange: PropTypes.func.isRequired,
  quantityNumber: PropTypes.number.isRequired,
  product: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    quantity: PropTypes.string
  }).isRequired,
  loading: PropTypes.bool.isRequired
};

export default ProductDescription;
