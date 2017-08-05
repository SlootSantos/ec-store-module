// import redux function to combine reducers
import { combineReducers } from 'redux';
// import products reducer
import ProductsReducer from './products_reducer';

// el root reducer!
const rootReducer = combineReducers({
  products: ProductsReducer
});

export default rootReducer;
