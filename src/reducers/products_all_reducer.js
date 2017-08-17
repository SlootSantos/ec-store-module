// import constant to prevent typos
import { FETCH_ALL_PRODUCTS } from '../actions/fetch_all_products';
// export reducer
// returns all the items
export default function(state = [], action) {

   switch (action.type) {
     case FETCH_ALL_PRODUCTS:
      return action.payload.data.data;
   }

   return state;
 }
