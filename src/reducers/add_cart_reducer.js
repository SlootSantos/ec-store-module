// import constant to prevent typos
import { ADD_CART } from '../actions/add_cart';
// export reducer
// returns all the items
export default function(state = [], action) {
  console.log(action);
   switch (action.type) {
     case ADD_CART:
      return action.payload.data.data;
   }

   return state;
 }
