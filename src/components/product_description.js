import React from 'react';

import { addToCart } from '../actions/add_cart';

function ProductDescription(props) {
  let price = '€ 100';
  let quantity = 'kg';
  let { description, name, id } = props.product;
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

      <button className="btn btn-secondary" onClick={ () => addCartItem({id, name, quantity}) }>Add to Cart</button>
    </div>
  )
}

async function addCartItem(item, quantity = 1) {
  try {
    const res = await addToCart(item.id, 2);
    return res;
  } catch (e) {
    return e;
  }
}


export default ProductDescription;
