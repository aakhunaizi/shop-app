import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "../store/reducers/";

// Actions
import { fetchProducts } from "./actions/productActions";
import { fetchShops } from "./actions/shopActions";
import { checkForToken } from "./actions/authActions";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(checkForToken());
store.dispatch(fetchShops());
store.dispatch(fetchProducts());

export default store;
