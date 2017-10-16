import { sdk } from '../config/sdk_config';

export const FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT';


// export fetch products function
export async function fetchSingleProduct(id) {
  let request;

  try {
    request = await sdk.fetchSingleProduct(id);
  } catch (e) {
    console.log(e);
  }

  return {
    type: 'FETCH_SINGLE_PRODUCT',
    payload: request
  }
}
