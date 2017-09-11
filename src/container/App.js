import React, { Component } from 'react';

// import connector
// redux action binder, to make actions available in component
// Link from router
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


import LandingPage from '../container/landing_page'
import '../styles/App.css';

// import { fetchAllProducts } from '../actions/fetch_all_products';
// import { getCart } from '../actions/get_cart';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   // this.props.fetchAllProducts();
  //   // this.props.getCart();
  // }

  // renderProductsToDom(products) {
  //
  //   if (!products || !products.length) return;
  //
  //   return products.map(product => {
  //     let { id, image_url } = product;
  //     console.log(product);
  //     return (
  //       <ProductTile key={id} product={product} img={image_url}/>
  //     );
  //   });
  // }


  render() {
    return (
      <div className="App">
          <LandingPage></LandingPage>
      </div>
    );
  }
}

// map state to props
// function mapStateToProps({ products, cart }) {
//
//   return {
//     products,
//     cart
//   };
// }

// map dispatch to props
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchAllProducts, getCart }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);


export default App;
