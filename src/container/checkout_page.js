import React, { Component } from 'react';
// import connector
// redux action binder, to make actions available in component
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCart } from '../actions/get_cart';
import { checkoutCart } from '../actions/checkout_cart';

import OrderOverview from '../components/order_overview';
import SepaForm from '../components/payment_forms/sepa_form';

import '../styles/checkoutpage/checkoutpage.css';

class CheckoutPage extends Component {
  constructor() {
    super();

    this.state = { showDifAdd: false };
  }
  componentWillMount() {
    this.customerData = {};
    this.shippingData = {};
    this.paymentData = {};
  }

  setCusData(event, fieldName) {
    this.customerData[fieldName] = event.target.value;
  }

  setShipData(event, fieldName) {
    this.shippingData[fieldName] = event.target.value;
  }

  paymentDataHandler(event, fieldName) {
    this.paymentData[fieldName] = event.target.value;
  }

  setDifAddress(event) {
    this.setState({
      showDifAdd: event.target.checked
    })
  }

  createCheckoutObject() {
    let { customerData, paymentData, shippingData } = this;
    let cd = customerData;

    let data = {
      customer: {
        first_name: cd.firstname,
        last_name: cd.lastname,
        email: cd.email,
      },
      billing: {
        first_name: cd.firstname,
        last_name: cd.lastname,
        line_1: cd.line_1,
        line_2: cd.line_2,
        county: cd.county,
        postcode: cd.postcode,
        country: 'DE'
      },
      payment: paymentData
    };

    data.payment['amount_int'] = this.props.cart.value.val_int + 499;
    data.payment['currency'] = 'EUR';
    data.payment['type'] = 'sepa';

    data['shipping'] = shippingData.first_name || shippingData.last_name
    ? shippingData
    : data.billing;

    debugger

    this.props.checkoutCart(data)
    .then(() => { this.props.history.push('/'); })
  }

  render() {
    return (
      <div className="checkout">
        <h1 className="header_title">Dein Checkout</h1>
        {/* <PaypalButton id="button" /> */}
        <div className="checkout content">
          <div className="form-wrapper">
            <h1>Rechnungsadresse</h1>
            <form action="">
              <div className="checkout__input double">
                <span className="input__title">Vorname *</span>
                <input type="text" placeholder="Vorname" onChange={(e) => this.setCusData(e, 'firstname')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Nachname *</span>
                <input type="text" placeholder="Nachname" onChange={(e) => this.setCusData(e, 'lastname')}/>
              </div>
              <div className="checkout__input single">
                <span className="input__title">E-Mail Adresse *</span>
                <input type="text" placeholder="E-Mail Adresse" onChange={(e) => this.setCusData(e, 'email')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Straße, Hausnr. *</span>
                <input type="text" placeholder="Straße, Hausnr." onChange={(e) => this.setCusData(e, 'line_1')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Adresszusatz</span>
                <input type="text" placeholder="Adresszusatz" onChange={(e) => this.setCusData(e, 'line_2')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Postleitzahl *</span>
                <input type="text" placeholder="Postleitzahl" onChange={(e) => this.setCusData(e, 'postcode')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Stadt *</span>
                <input type="text" placeholder="Land" onChange={(e) => this.setCusData(e, 'county')}/>
              </div>
            </form>
          </div>


          <div className="form-wrapper">
            <h1>An eine andere Adresse liefern?</h1>

            <input type="checkbox" className="checkout__show-dif-address" onClick={ e => this.setDifAddress(e) }/>

            { this.state.showDifAdd &&
              <form action="">
              <div className="checkout__input double">
                <span className="input__title">Vorname *</span>
                <input type="text" placeholder="Vorname" onChange={(e) => this.setShipData(e, 'firstname')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Nachname *</span>
                <input type="text" placeholder="Nachname" onChange={(e) => this.setShipData(e, 'lastname')}/>
              </div>
              <div className="checkout__input single">
                <span className="input__title">E-Mail Adresse *</span>
                <input type="text" placeholder="E-Mail Adresse" onChange={(e) => this.setShipData(e, 'email')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Straße, Hausnr. *</span>
                <input type="text" placeholder="Straße, Hausnr." onChange={(e) => this.setShipData(e, 'line_1')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Adresszusatz</span>
                <input type="text" placeholder="Adresszusatz" onChange={(e) => this.setShipData(e, 'line_2')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Postleitzahl *</span>
                <input type="text" placeholder="Postleitzahl" onChange={(e) => this.setShipData(e, 'postcode')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Stadt *</span>
                <input type="text" placeholder="Land" onChange={(e) => this.setShipData(e, 'county')}/>
              </div>
            </form>}
          </div>
        </div>

        <OrderOverview cart={ this.props.cart }></OrderOverview>

        <div className="checkout__payment">
          <h1>Bezahlung</h1>

          <SepaForm onChangeHandler={ this.paymentDataHandler.bind( this ) }></SepaForm>
        </div>


        <button className="btn btn-primary reverse" onClick={ () => this.createCheckoutObject() }>Kostenpflichtig bestellen</button>
      </div>
    );
  }
}

// map state to props
function mapStateToProps({ cart, checkout }) {
  return {
    cart,
    checkout
  };
}

// map dispatch to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCart, checkoutCart}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
