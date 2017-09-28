// import constant to prevent typos
import { FETCH_SINGLE_PRODUCT } from '../actions/fetch_single_product';
// export reducer
export default function(state = [], action) {

   switch (action.type) {
     case FETCH_SINGLE_PRODUCT:
      return action.payload.data.data.products.pop();
    default:
      return state;
   }
 }
