import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "../store/reducers/";

// Actions
import { fetchProducts } from "./actions/productActions";
import { fetchShops } from "./actions/shopActions";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchProducts());
store.dispatch(fetchShops());

export default store;
