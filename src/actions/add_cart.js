import { sdk } from '../config/sdk_config';

export const ADD_CART = 'ADD_CART';


// export fetch products function
export function addToCart(prodId) {
  const request = sdk.addToCart(prodId);

  return {
    type: ADD_CART,
    payload: request
  }
}
