import { sdk } from '../config/sdk_config';

export const GET_CART = 'GET_CART';


// export fetch products function
export function getCart() {
  const request = sdk.getCart();

  return {
    type: GET_CART,
    payload: request
  }
}
