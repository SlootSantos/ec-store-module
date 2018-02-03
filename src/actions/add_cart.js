import { sdk } from '../config/sdk_config';

export const ADD_CART = 'ADD_CART';


// export fetch products function
export async function addToCart(prodId, quantity) {
  let request;

  try {
    request = await sdk.addToCart(prodId, quantity);
  } catch (e) {
    request = e;
  } finally {
    return {
      type: ADD_CART,
      payload: request
    };
  }
}
