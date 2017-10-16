import React from 'react';

import '../styles/orderoverview/order_overview.css';


function OrderOverview(props) {
  if (!props.cart || !props.cart.items) { return <div>...</div> }

  props.cart.versand_kosten = '€4.99';

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


function renderTable(cart) {
  return cart.items
    .map(item =>
      <tr key={item.id} className="table__details">
        <td>{ item.name } <b>x{ item.quantity }</b></td>
        <td>{ item.value.amount }</td>
      </tr>
    );
  }

  function renderTotal(cart) {
    let shipping = parseFloat(cart.versand_kosten.split('€').pop());
    let totalAsNumber = parseFloat(cart.value.amount.split('€').pop());
    let totalAmount = `€${ shipping + totalAsNumber }`;

    return (
      <tr className="table__total">
        <td>Gesamtpreis</td>
        <td><b>{ totalAmount }</b></td>
      </tr>
    )
  }

export default OrderOverview;
