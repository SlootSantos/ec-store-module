import axios from 'axios';
import { API_URL } from '../config/store_config';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const BASE_URL = API_URL;

debugger


// export fetch products function
export function fetchProducts() {
  const route = `/products`;
  const request = axios.get(`${route}`);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
}
