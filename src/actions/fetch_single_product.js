import { sdk } from '../config/sdk_config';

export const FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT';


// export fetch products function
export function fetchSingleProduct(id) {
  const request = sdk.fetchSingleProduct(id);

  return {
    type: FETCH_SINGLE_PRODUCT,
    payload: request
  }
}
