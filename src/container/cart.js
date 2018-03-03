import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import connector
// redux action binder, to make actions available in component
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { getCart } from '../actions/get_cart';
import { updateCart } from '../actions/update_cart';

import BackButton from '../components/back_button';

import '../styles/cart/cart.css';


class Cart extends Component {
  constructor(props) {
    super(props);

    this.props.getCart();
  }

  componentWillMount() {
    this.state = {
      deleteNumber: 1
    };
  }

  onNumberChange({ target: { value } }) {
    this.setState({
      deleteNumber: parseInt(value, 10)
    });
  }

  deleteItem({ id, quantity }, deleteNumber) {
    const newQuantity = quantity - deleteNumber < 0
    ? 0
    : quantity - deleteNumber;

    this.props.updateCart(id, newQuantity)
    .then(() => {
      this.props.getCart();
    });
  }

  renderTable(elements) {
  return elements.items.map(item => (
    <tr key={item.id} className="table__details">
      <td>{item.name}</td>
      <td>{item.unit_price}</td>
      <td>{item.quantity}</td>
      <td>{item.value.amount}</td>
      <td className="cart__delete">
        <input
          type="number"
          min="1"
          max={item.quantity}
          value={this.state.deleteNumber}
          onChange={e => this.onNumberChange(e)}
        />
        <span onClick={() => this.deleteItem(item, this.state.deleteNumber)}> x Entfernen</span>
      </td>
    </tr>
  ));
}

  renderTotals(amount) {
   return (
     <div className="cart__cart-totals">
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

  render() {
    window.scrollTo(0, 0);


    return (
      <div className="cart">
        <BackButton />
        <h1 className="header_title">Dein Einkaufswagen</h1>

        { (!this.props.cart || !this.props.cart.items) &&
          <div>
            <div className="cart__empty">
              Du hast noch keinen Kaffee im Einkaufswagen...
            </div>
          </div>
        }

        { (this.props.cart && this.props.cart.items) &&
          <div className="cart__table-wraper">
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


            <Link className="btn btn-primary reverse" to="/shop/checkout">
             Kaufen
            </Link>
          </div> }
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.shape({
    versand_kosten: PropTypes.string,
    items: PropTypes.array
  }),
  updateCart: PropTypes.func.isRequired,
  getCart: PropTypes.func.isRequired
};

Cart.defaultProps = {
  cart: PropTypes.shape({
    versand_kosten: '4,99',
    items: 0
  })
};


// map state to props
function mapStateToProps({ cart }) {
  return {
    cart
  };
}

// map dispatch to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCart, updateCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
