import React from 'react';
import PropTypes from 'prop-types';


function PaypalForm(props) {
  return (
    <div className="sepa__form">
      <h3>PayPal</h3>

      <div className="checkout__input single">
        <span className="input__title">Kontoinhaber *</span>
        <input type="text" placeholder="Vorname, Nachname" onChange={e => props.onChangeHandler(e, 'accountholder')} />
      </div>

      <div className="checkout__input single">
        <span className="input__title">IBAN *</span>
        <input type="text" placeholder="IBAN" onChange={e => props.onChangeHandler(e, 'number')} />
      </div>
      <div className="checkout__input single">
        <span className="input__title">BIC *</span>
        <input type="text" placeholder="BIC" onChange={e => props.onChangeHandler(e, 'bic')} />
      </div>
    </div>
  );
}

PaypalForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired
};

export default PaypalForm;
