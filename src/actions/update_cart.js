import { sdk } from '../config/sdk_config';

export const UPDATE_CART = 'UPDATE_CART';


// export fetch products function
export async function updateCart(prodId, quantity) {
  let request;

  try {
    request = await sdk.removeFromCart(prodId, quantity);
  } catch (e) {
    request = e;
  } finally {
    return {
      type: UPDATE_CART,
      payload: request
    };
  }
}
