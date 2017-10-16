// import constant to prevent typos
import { GET_CART } from '../actions/get_cart';
// export reducer
// returns all the items
export default function(state = {}, action) {

   switch (action.type) {
     case GET_CART:
      return action.payload.data.data.cart;
    default:
      return state;
   }
 }
