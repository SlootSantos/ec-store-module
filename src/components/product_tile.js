import React, { Component } from 'react';

import AddCartButton from './add_cart_button';

import '../styles/product_tile.css';

class ProductTile extends Component {

  render() {
    let { product, img } = this.props;

    return (
      <div className="product_tile">
        <div className="product_name"><b>Name:</b> { product.name } </div>
        <img src={img} alt="" width="300"/>
        <AddCartButton prodId={product.id}/>
      </div>
    );
  }
}

export default ProductTile;
