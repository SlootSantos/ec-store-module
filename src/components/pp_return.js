import React from 'react';
import { withRouter } from 'react-router-dom';

const PP = withRouter(({ history, location }) => {
  history.push(`/shop/checkout/success${location.search}`);
  return <div>PP!!</div>;
});

export default PP;
