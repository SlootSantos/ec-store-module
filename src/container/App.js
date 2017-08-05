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

import { fetchProducts } from '../actions/fetch_products';

class App extends Component {
  constructor(props) {
    super(props)

    this.props.fetchProducts();

  }

  renderProductsToDom(products) {
    if (!products.length) return;

    return products[0].data.map(product => {
      let image = products[0].included ? products[0].included.main_images[products[0].data.indexOf(product)].link.href : null;

      return (
        <ProductTile key={product.name} product={product} img={image}/>
      );
    });
  }


  render() {
    return (
      <div className="App">
        <LandingPage />
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
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
