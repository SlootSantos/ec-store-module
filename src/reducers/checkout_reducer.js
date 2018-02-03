// import constant to prevent typos
import { CHECKOUT_CART } from '../actions/checkout_cart';
// export reducer
// returns all the items
export default function(state = [], action) {

  console.log(action);
  

   switch (action.type) {
     case CHECKOUT_CART:
      return action.payload.data.data;
    default:
      return state;
   }
 }
