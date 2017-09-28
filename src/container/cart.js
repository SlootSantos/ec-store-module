import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import connector
// redux action binder, to make actions available in component
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCart } from '../actions/get_cart';

import '../styles/cart/cart.css';


class Cart extends Component {
  constructor(props) {
    super(props)

    this.props.getCart();
  }

  render() {
    if ( !this.props.cart || !this.props.cart.items) { return <div className="cart">Loading...</div> };

    return(
      <div className="cart">
        <h1>Dein Einkaufswagen</h1>
        <table className="cart__cart-table">
         <tbody>
           <tr>
             <th>Produkt</th>
             <th>Preis</th>
             <th>Anzahl</th>
             <th>Gesamt</th>
           </tr>

           { this.renderTable(this.props.cart) }

         </tbody>
       </table>

       { this.renderTotals(this.props.cart.value) }

       <Link className="btn btn-secondary" to="/shop/checkout">
         Kaufen
       </Link>
      </div>
    );
  }

  renderTable(elements) {
    return elements.items
      .map(item =>
        <tr key={item.id}>
          <td>{ item.name }</td>
          <td>{ item.unit_price }</td>
          <td>{ item.quantity }</td>
          <td>{ item.value.amount }</td>
        </tr>
      );
    }

  renderTotals(amount) {
    return(
    <div>
      <table>
        <tbody>
          <tr>
            <th>Waren</th>
            <td>{ amount.amount }</td>
          </tr>

          <tr>
            <th>Shipping</th>
            <td>{ amount.amount }</td>
          </tr>

          <tr>
            <th>Gesamt</th>
            <td>{ amount.amount }</td>
          </tr>
        </tbody>
      </table>
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

// map dispatch to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCart}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
