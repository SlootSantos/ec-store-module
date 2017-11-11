import React from 'react';
import PropTypes from 'prop-types';

import '../styles/orderoverview/order_overview.css';

function renderTable(cart) {
  return cart.items
    .map(item => (
      <tr key={item.id} className="table__details">
        <td>{ item.name } <b>x{ item.quantity }</b></td>
        <td>{ item.value.amount }</td>
      </tr>
    ));
  }

  function renderTotal(cart) {
    const shipping = parseFloat(cart.versand_kosten.split('€').pop());
    const totalAsNumber = parseFloat(cart.value.amount.split('€').pop());
    const totalAmount = `€${shipping + totalAsNumber}`;

    return (
      <tr className="table__total">
        <td>Gesamtpreis</td>
        <td><b>{ totalAmount }</b></td>
      </tr>
    );
  }

// RENDER
function OrderOverview(props) {
  const { cart } = props;
  if (!cart || !cart.items) { return <div>...</div> }

  cart.versand_kosten = '€4.99';

  return (
    <div className="order-overview">
      <h1>Bestellung</h1>
      <table>
        <tbody>
          <tr>
            <th>Produkt</th>
            <th>Gesamt</th>
          </tr>

          { renderTable(props.cart) }

          <tr>
            <td>Versandkosten</td>
            <td>{ props.cart.versand_kosten }</td>
          </tr>

          { renderTotal(props.cart) }

        </tbody>
      </table>
    </div>
  );
}

OrderOverview.propTypes = {
  cart: PropTypes.shape({
    versand_kosten: PropTypes.string,
    items: PropTypes.array
  }).isRequired
};

export default OrderOverview;
