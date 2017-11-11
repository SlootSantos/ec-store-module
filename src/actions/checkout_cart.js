import { sdk } from '../config/sdk_config';

export const CHECKOUT_CART = 'CHECKOUT_CART';


// export fetch products function
export function checkoutCart(coData) {
    return sdk.checkoutCart(coData);
}
