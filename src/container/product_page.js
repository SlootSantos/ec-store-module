import React, { Component } from 'react';

// import connector
// redux action binder, to make actions available in component
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductDescription from '../components/product_description';
import ProductImage from '../components/product_image';

import { fetchSingleProduct } from '../actions/fetch_single_product';
import { addToCart } from '../actions/add_cart';
import { getCart } from '../actions/get_cart';

import '../styles/productpage/product_page.css';



class ProductPage extends Component {
  constructor(props){
    super(props);

    let { fetchSingleProduct, match: {params} } = this.props;

    fetchSingleProduct(params.id);
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  addProducts(id, quant) {
    this.props.addToCart(id, quant)
    .then(() => {
      this.props.getCart();
    })
  }

  render() {
    if (!this.props.product.name) { return <div className="product-page">Loading..</div> };

    let { image_url } = this.props.product;

    return(
      <div className="product-page">
        <ProductImage image={ image_url }></ProductImage>
        <ProductDescription product={ this.props.product } addToCart={ this.addProducts.bind(this) }></ProductDescription>
      </div>
    )
  }
}


// map state to props
function mapStateToProps({ product }) {

  return {
    product
  };
}

// map dispatch to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchSingleProduct,
    addToCart,
    getCart
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);