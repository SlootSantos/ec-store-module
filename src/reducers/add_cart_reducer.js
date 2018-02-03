// import constant to prevent typos
import { ADD_CART } from '../actions/add_cart';
// export reducer
// returns all the items
export default function (state = [], action) {
   switch (action.type) {
     case ADD_CART:

      return action.payload ? action.payload.data.data : null;
    default:
    return state;
   }
 }
