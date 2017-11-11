import { sdk } from '../config/sdk_config';

export const GET_CART = 'GET_CART';


// export fetch cart function
export async function getCart() {
  let request;

  try {
    request = await sdk.getCart();
  } catch (e) {
    request = e;
  }

  return {
    type: GET_CART,
    payload: request
  };
}
