import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/checkoutpage/checkoutpage.css';

class CheckoutPage extends Component {
  constructor(props) {
    super(props)

    console.log(this.props);
  }

  componentWillMount(props) {
    if (!this.props.cart.length && !this.props.cart.value) {
      // TODO: get cart contents
      // maybe not needed... checkout doesn't need to display
    }
  }

  render() {
    return (
      <div className="checkout">
        <h1>Dein Checkout</h1>
        <div className="checkout content">
          { this.props.cart.quantity }

          <form action="">
            <input type="text" placeholder="Firstname"/>
            <input type="text" placeholder="Lastname"/>
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="line_1"/>
            <input type="text" placeholder="line_2"/>
            <input type="text" placeholder="county"/>
            <input type="text" placeholder="postcode"/>
            <input type="text" placeholder="country"/>

            <input type="text" placeholder="number"/>
            <input type="text" placeholder="month"/>
            <input type="text" placeholder="year"/>
            <input type="text" placeholder="verification_value"/>
          </form>

          <form action="">
            abc
          </form>
        </div>
      </div>
    );
  }
}

// map state to props
function mapStateToProps({ cart }) {

  return {
    cart
  };
}

export default connect(mapStateToProps)(CheckoutPage);
