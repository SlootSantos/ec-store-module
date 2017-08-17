import React, { Component } from 'react';

// import connector
// redux action binder, to make actions available in component
// Link from router
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import LandingPage from '../components/landing_page'
import ProductTile from '../components/product_tile'
import logo from '../logo.svg';
import '../styles/App.css';

import { fetchAllProducts } from '../actions/fetch_all_products';

class App extends Component {
  constructor(props) {
    super(props)

    this.props.fetchAllProducts();
  }

  renderProductsToDom(products) {

    if (!products || !products.length) return;

    return products.map(product => {
      let { id, image_url } = product;
      console.log(product);
      return (
        <ProductTile key={id} product={product} img={image_url}/>
      );
    });
  }


  render() {
    return (
      <div className="App">
          { this.renderProductsToDom(this.props.products.products) }
      </div>
    );
  }
}

// map state to props
function mapStateToProps({ products }) {
  return {
    products
  };
}

// map dispatch to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
