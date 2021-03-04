import { combineReducers } from "redux";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authentication: authReducer,
  products: productReducer,
  shops: shopReducer,
  cart: cartReducer,
});

export default rootReducer;
