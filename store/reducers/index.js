import { combineReducers } from "redux";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  products: productReducer,
  shops: shopReducer,
  cart: cartReducer,
});

export default rootReducer;
