import * as types from "../actions/types";

const initialState = {
  shops: [],
  loading: true,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.FETCH_SHOPS:
      return {
        ...state,
        shops: actions.payload.shops,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
