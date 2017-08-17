import axios from 'axios';
import { API_URL } from '../config/store_config';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const BASE_URL = API_URL;

// export fetch products function
// right now working fine without base path bc of proxy // WON'T work in prod!!
export function fetchProducts() {
  const route = `/products`;
  const request = axios.get(`${route}`);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
}
