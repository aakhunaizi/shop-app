import * as types from "../actions/types";

export const addItemToCart = (newItem) => ({
  type: types.ADD_ITEM,
  payload: newItem,
});

export const removeItemFromCart = (itemId) => ({
  type: types.REMOVE_ITEM,
  payload: itemId,
});

export const checkout = () => ({
  type: types.CHECKOUT,
});
