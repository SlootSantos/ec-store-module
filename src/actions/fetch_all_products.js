import { sdk } from '../config/sdk_config';

export const FETCH_ALL_PRODUCTS = 'FETCH_ALL_PRODUCTS';


// export fetch products function
export function fetchAllProducts() {
  const request = sdk.fetchAllProducts();

  return {
    type: FETCH_ALL_PRODUCTS,
    payload: request
  }
}
