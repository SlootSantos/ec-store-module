import React from 'react';
import PropTypes from 'prop-types';


function CreditcartForm(props) {
  return (
    <div className="sepa__form">
      <h3>Kreditkarte</h3>

      <div className="checkout__input single">
        <span className="input__title">Karteninhaber *</span>
        <input type="text" placeholder="Vorname, Nachname" onChange={e => props.onChangeHandler(e, 'cardholder')} />
      </div>

      <div className="checkout__input single">
        <span className="input__title">Kreditkartennummer *</span>
        <input type="text" placeholder="Kartennummer" onChange={e => props.onChangeHandler(e, 'number')} />
      </div>

      <div className="checkout__input single">
        <span className="input__title">Gültigkeitsdatum *</span>
        <input type="text" placeholder="MM.YYYY" onChange={e => props.onChangeHandler(e, 'expiryDate')} />
      </div>

      <div className="checkout__input single">
        <span className="input__title">CVV *</span>
        <input type="text" placeholder="123" onChange={e => props.onChangeHandler(e, 'cvc')} />
      </div>
    </div>
  );
}

CreditcartForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired
};

export default CreditcartForm;
