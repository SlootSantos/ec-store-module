import { sdk } from '../config/sdk_config';

export const CHECKOUT_CART = 'CHECKOUT_CART';


// export fetch products function
export async function checkoutCart(coData) {
  let request;

  try {
    request = await sdk.checkoutCart(coData);
  } catch (e) {
    request = e;
  }

  return {
    type: CHECKOUT_CART,
    payload: request
  };
}
