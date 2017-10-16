import React from 'react';

function ProductDescription(props) {
  let price = '€ 100';
  let quantity = 'kg';
  let { addToCart, product } = props;
  let { description, name, id } = product;
  let formattedPrice = `${price} / ${quantity}`;

  return(
    <div className="product-page__description">
      <h1>{ name }</h1>
      <span><b>{ formattedPrice }</b></span>
      <p>{ description }</p>

      <ul>
        <li>das und dies weischt</li>
        <li>das und dies weischt</li>
        <li>das und dies weischt</li>
      </ul>

      <b>Geschmack:</b> <span>saftig wtf</span><br/><br/>
      <b>Geschmack:</b> <span>saftig wtf</span><br/><br/>
      <b>Geschmack:</b> <span>saftig wtf</span><br/>

      <button className="btn btn-secondary" onClick={ () => addToCart(id, 1) }>Add to Cart</button>
    </div>
  )
}

export default ProductDescription;
