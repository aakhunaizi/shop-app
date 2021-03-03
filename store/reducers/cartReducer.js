import * as types from "../actions/types";

const initialState = {
  items: [
    {
      productId: 8,
      quantity: 10,
    },
    {
      productId: 10,
      quantity: 6,
    },
    {
      productId: 24,
      quantity: 8,
    },
  ],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
