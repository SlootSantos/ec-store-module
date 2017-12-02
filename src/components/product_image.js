import React from 'react';

function ProductImage(props) {
  // let { image } = props;
  return (
    <div className="product-page__image">
      <img height="200" src={props.image} alt="NO IMG" />
    </div>
  );
}


export default ProductImage;
