// import redux function to combine reducers
import { combineReducers } from 'redux';
// import products reducer
import ProductsAllReducer from './products_all_reducer';
import ProductSingleReducer from './product_single_reducer';
// import CheckoutReducer from './checkout_reducer';
import GetCartReducer from './get_cart_reducer';
import AddCartReducer from './add_cart_reducer';
import UpdateCartReducer from './update_cart_reducer';

// el root reducer!
const rootReducer = combineReducers({
  products: ProductsAllReducer,
  product: ProductSingleReducer,
  cart: GetCartReducer,
  // checkout: CheckoutReducer,
  addProd: AddCartReducer,
  updateProd: UpdateCartReducer
});

export default rootReducer;
