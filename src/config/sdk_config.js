import { API_URL, STORE_ID } from './store_config';
import EcSdk from 'ecommerce-js-sdk';

export const sdk = new EcSdk(API_URL, STORE_ID);
