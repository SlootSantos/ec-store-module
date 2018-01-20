import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import connector
// redux action binder, to make actions available in component
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { getCart } from '../actions/get_cart';
import { checkoutCart } from '../actions/checkout_cart';

import OrderOverview from '../components/order_overview';
import SepaForm from '../components/payment_forms/sepa_form';
import CreditcartForm from '../components/payment_forms/credit-card_from';
import PaymentOverlay from '../components/payment_overlay';
import BackButton from '../components/back_button';

import PaypalLogo from '../assets/paypal.png';
import SepaLogo from '../assets/sepa.png';
import CreditLogo from '../assets/creditcards.png';
import Widerrufsformular from '../assets/Widerrufsformular.pdf';


import '../styles/checkoutpage/checkoutpage.css';

class CheckoutPage extends Component {
  constructor() {
    super();

    this.state = {
      showDifAdd: false,
      processPayment: false
    };
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

  setDifAddress(event) {
    this.setState({
      showDifAdd: event.target.checked
    });
  }

  paymentDataHandler(event, fieldName) {
    this.paymentData[fieldName] = event.target.value;
  }

  createCheckoutObject() {
    this.setState({
      processPayment: true
    });
    const { customerData, paymentData, shippingData } = this;
    const cd = customerData;

    const data = {
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

    data.payment.amount_int = Math.round((this.props.cart.value.val_int) * 100) / 100;
    // data.payment.amount_int = Math.round((this.props.cart.value.val_int + 499) * 100) / 100;
    data.payment.currency = 'EUR';
    data.payment.type = this.state.paymentType;

    if (data.payment.type === 'credit') {
      const { expiryDate } = data.payment;

      if (!expiryDate.match(/[0-9]{2}[ -|/|.][0-9]{4}/g)) { return }

      const splitDate = expiryDate.match(/\./g)
      ? expiryDate.split('.')
      : expiryDate.split('/');

      delete data.payment.expiryDate;

      data.payment = Object.assign(data.payment, {
        exp_month: splitDate[0],
        exp_year: splitDate[1]
      });
    }

    data.shipping = this.state.showDifAdd
    ? shippingData
    : data.billing;

    checkoutCart(data)
    .then((res) => {
      if (res.data.errors) {
        this.props.history.push('/shop/checkout/fail');
      } else {
        this.props.getCart();
        this.props.history.push('/shop/checkout/success');
      }
  })
    .catch(() => this.props.history.push('/shop/checkout/fail'));
  }

  render() {
    return (
      <div className="checkout">
        <BackButton />
        { this.state.processPayment && <PaymentOverlay />}
        <h1 className="header_title">Dein Checkout</h1>
        {/* <PaypalButton id="button" /> */}
        <div className="checkout content">
          <div className="form-wrapper">
            <h1>Rechnungsadresse</h1>
            <form action="">
              <div className="checkout__input double">
                <span className="input__title">Vorname *</span>
                <input type="text" placeholder="Vorname" onChange={e => this.setCusData(e, 'firstname')} />
              </div>
              <div className="checkout__input double">
                <span className="input__title">Nachname *</span>
                <input type="text" placeholder="Nachname" onChange={e => this.setCusData(e, 'lastname')} />
              </div>
              <div className="checkout__input single">
                <span className="input__title">E-Mail Adresse *</span>
                <input type="text" placeholder="E-Mail Adresse" onChange={e => this.setCusData(e, 'email')} />
              </div>
              <div className="checkout__input double">
                <span className="input__title">Straße, Hausnr. *</span>
                <input type="text" placeholder="Straße, Hausnr." onChange={e => this.setCusData(e, 'line_1')} />
              </div>
              <div className="checkout__input double">
                <span className="input__title">Adresszusatz</span>
                <input type="text" placeholder="Adresszusatz" onChange={e => this.setCusData(e, 'line_2')} />
              </div>
              <div className="checkout__input double">
                <span className="input__title">Postleitzahl *</span>
                <input type="text" placeholder="Postleitzahl" onChange={e => this.setCusData(e, 'postcode')} />
              </div>
              <div className="checkout__input double">
                <span className="input__title">Stadt *</span>
                <input type="text" placeholder="Land" onChange={e => this.setCusData(e, 'county')} />
              </div>
            </form>
          </div>


          <div className="form-wrapper">
            <h1>An eine andere Adresse liefern?</h1>

            <input type="checkbox" className="checkout__show-dif-address" onClick={e => this.setDifAddress(e)} />

            { this.state.showDifAdd &&
            <form action="">
              <div className="checkout__input double">
                <span className="input__title">Vorname *</span>
                <input type="text" placeholder="Vorname" onChange={e => this.setShipData(e, 'firstname')} />
              </div>
              <div className="checkout__input double">
                <span className="input__title">Nachname *</span>
                <input type="text" placeholder="Nachname" onChange={e => this.setShipData(e, 'lastname')} />
              </div>
              <div className="checkout__input single">
                <span className="input__title">E-Mail Adresse *</span>
                <input type="text" placeholder="E-Mail Adresse" onChange={e => this.setShipData(e, 'email')} />
              </div>
              <div className="checkout__input double">
                <span className="input__title">Straße, Hausnr. *</span>
                <input type="text" placeholder="Straße, Hausnr." onChange={e => this.setShipData(e, 'line_1')} />
              </div>
              <div className="checkout__input double">
                <span className="input__title">Adresszusatz</span>
                <input type="text" placeholder="Adresszusatz" onChange={e => this.setShipData(e, 'line_2')} />
              </div>
              <div className="checkout__input double">
                <span className="input__title">Postleitzahl *</span>
                <input type="text" placeholder="Postleitzahl" onChange={e => this.setShipData(e, 'postcode')} />
              </div>
              <div className="checkout__input double">
                <span className="input__title">Stadt *</span>
                <input type="text" placeholder="Land" onChange={e => this.setShipData(e, 'county')} />
              </div>
            </form>}
          </div>
        </div>

        <OrderOverview cart={this.props.cart} />

        <div className="checkout__payment">
          <h1>Bezahlung</h1>

          <form className="checkout__payment-provider">
            <div>

              <div className="checkout__payment-provider-wrapper">
                <input id="paymentPaypal" type="radio" className="checkout__show-dif-address" value="paypal" name="payment" onClick={e => this.setState({ paymentType: e.target.value })} />
                <label htmlFor="paymentPaypal">
                  <img src={PaypalLogo} alt="" />
                </label> <br />
              </div>

              <div className="checkout__payment-provider-wrapper">
                <input id="paymentSepa" type="radio" className="checkout__show-dif-address" value="sepa" name="payment" onClick={e => this.setState({ paymentType: e.target.value })} />
                <label htmlFor="paymentSepa">
                  <img src={SepaLogo} alt="" />
                </label> <br />
              </div>

              <div className="checkout__payment-provider-wrapper">
                <input id="paymentCredit" type="radio" className="checkout__show-dif-address" value="credit" name="payment" onClick={e => this.setState({ paymentType: e.target.value })} />
                <label htmlFor="paymentCredit">
                  <img src={CreditLogo} alt="" />
                </label>
              </div>
            </div>
          </form>

          { this.state.paymentType === 'sepa' && <SepaForm onChangeHandler={this.paymentDataHandler.bind(this)} /> }
          { this.state.paymentType === 'credit' && <CreditcartForm onChangeHandler={this.paymentDataHandler.bind(this)} /> }
        </div>

        <div className="checkout__agreement">
          <input type="checkbox" className="checkout__show-dif-address" onClick={() => this.setState({ agreed: !this.state.agreed })} />
          <span>&nbsp;Mit deiner Bestellung erklärst du dich mit unseren <Link to="/agb">Allgemeinen Geschäftsbedingungen</Link> und <Link to={Widerrufsformular} target="_blank">Widerrufsbestimmungen</Link> einverstanden.</span>
        </div>
        <button className={`btn btn-primary reverse ${!this.state.agreed ? 'disabled' : ''}`} disabled={!this.state.agreed} onClick={() => this.createCheckoutObject()}>Kostenpflichtig bestellen</button>
      </div>
    );
  }
}

CheckoutPage.propTypes = {
  getCart: PropTypes.func.isRequired,
  cart: PropTypes.shape({
    value: PropTypes.shape({
      val_int: PropTypes.number
    })
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

// map state to props
function mapStateToProps({ cart }) {
  return {
    cart
  };
}

// map dispatch to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
