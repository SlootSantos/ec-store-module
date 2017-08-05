// import constant to prevent typos
import { FETCH_PRODUCTS } from '../actions/fetch_products';
// export reducer
// returns all the items
export default function(state = [], action) {
   switch (action.type) {
     case FETCH_PRODUCTS:
      return [ action.payload.data, ...state ];
   }

   return state;
 }
