import React, { Component } from 'react';
// import connector
// redux action binder, to make actions available in component
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCart } from '../actions/get_cart';
import OrderOverview from '../components/order_overview';

import '../styles/checkoutpage/checkoutpage.css';

class CheckoutPage extends Component {
  componentWillMount(props) {
    this.customerData = {};
  }

  setProp(event, fieldName) {
    this.customerData[fieldName] = event.target.value;
  }

  setDifAddress(evet) {
    console.log(evet.target.checked);
  }

  render() {
    return (
      <div className="checkout">
        <h1 className="header_title">Dein Checkout</h1>
        <div className="checkout content">
          <div className="form-wrapper">
            <h1>Rechnungsadresse</h1>
            <form action="">
              <div className="checkout__input double">
                <span className="input__title">Vorname *</span>
                <input type="text" placeholder="Vorname" onChange={(e) => this.setProp(e, 'firstname')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Nachname *</span>
                <input type="text" placeholder="Nachname" onChange={(e) => this.setProp(e, 'lastname')}/>
              </div>
              <div className="checkout__input single">
                <span className="input__title">E-Mail Adresse *</span>
                <input type="text" placeholder="E-Mail Adresse" onChange={(e) => this.setProp(e, 'email')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Straße, Hausnr. *</span>
                <input type="text" placeholder="Straße, Hausnr." onChange={(e) => this.setProp(e, 'line_1')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Adresszusatz</span>
                <input type="text" placeholder="Adresszusatz" onChange={(e) => this.setProp(e, 'line_2')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Postleitzahl *</span>
                <input type="text" placeholder="Postleitzahl" onChange={(e) => this.setProp(e, 'postcode')}/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Stadt *</span>
                <input type="text" placeholder="Land" onChange={(e) => this.setProp(e, 'city')}/>
              </div>
            </form>
          </div>


          <div className="form-wrapper">
            <h1>An eine andere Adresse liefern?</h1>

            <input type="checkbox" className="checkout__show-dif-address" onChange={ e => this.showDifAdd = e.target.checked }/>

            { this.showDifAdd &&
              <form action="">
              <div className="checkout__input double">
                <span className="input__title">Vorname *</span>
                <input type="text" placeholder="Vorname"/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Nachname *</span>
                <input type="text" placeholder="Nachname"/>
              </div>
              <div className="checkout__input single">
                <span className="input__title">E-Mail Adresse *</span>
                <input type="text" placeholder="E-Mail Adresse"/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Straße, Hausnr. *</span>
                <input type="text" placeholder="Straße, Hausnr."/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Adresszusatz</span>
                <input type="text" placeholder="Adresszusatz"/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Postleitzahl *</span>
                <input type="text" placeholder="Postleitzahl"/>
              </div>
              <div className="checkout__input double">
                <span className="input__title">Stadt *</span>
                <input type="text" placeholder="Land"/>
              </div>
            </form>}
          </div>
        </div>

        <OrderOverview cart={ this.props.cart }></OrderOverview>

        <button className="btn btn-primary reverse" onClick={ () => { console.log(this.customerData); } }>Kostenpflichtig bestellen</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
