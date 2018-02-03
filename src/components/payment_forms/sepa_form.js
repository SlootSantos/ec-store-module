import React from 'react';
import PropTypes from 'prop-types';


function SepaForm(props) {
  return (
    <div className="sepa__form">
      <h3>SEPA Lastschrift</h3>

      <div className="checkout__input single">
        <span className="input__title">Kontoinhaber *</span>
        <input type="text" placeholder="Vorname, Nachname" onChange={e => props.onChangeHandler(e, 'accountholder')} />
      </div>

      <div className="checkout__input single">
        <span className="input__title">IBAN *</span>
        <input type="text" placeholder="IBAN" onChange={e => props.onChangeHandler(e, 'iban')} />
      </div>
      <div className="checkout__input single">
        <span className="input__title">BIC *</span>
        <input type="text" placeholder="BIC" onChange={e => props.onChangeHandler(e, 'bic')} />
      </div>
    </div>
  );
}

SepaForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired
};

export default SepaForm;
