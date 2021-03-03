import * as types from "../actions/types";

export const addItemToCart = (newItem) => ({
  type: types.ADD_ITEM,
  payload: newItem,
});
