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

import { mockData } from '../container/landing_page';
import BackButton from '../components/back_button';


import '../styles/productpage/product_page.css';


class ProductPage extends Component {
  constructor(props) {
    super(props);

    let { fetchSingleProduct, match: { params } } = this.props;

    fetchSingleProduct(params.id);
  }

  componentWillMount() {
    this.setState({
      loading: false,
      quantityNumber: 1
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onNumberChange({ target: { value } }) {
    const intVal = parseInt(value, 10);

    this.setState({
      quantityNumber: intVal > 10 ? 10 : intVal
    });
  }

  addProducts(id, quant) {
    this.setState({
      loading: true
    });

    this.props.addToCart(id, (quant || 1))
    .then(() => {
      this.setState({
        loading: false
      });
      this.props.getCart();
    });
  }

  render() {
    if (!this.props.product.name) { return <div className="product-page_wrap">Loading..</div> };
    const product = mockData.filter(d => this.props.match.params.id === d.id).pop();

    const { img_url } = product;

    return (
      <div className="product-page_wrap">
        <BackButton />
        <div className="product-page">
          <ProductImage image={img_url} />
          <ProductDescription
            product={product}
            loading={this.state.loading}
            addToCart={this.addProducts.bind(this)}
            quantityNumber={this.state.quantityNumber}
            onNumberChange={this.onNumberChange.bind(this)}
          />
        </div>
      </div>
    );
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
