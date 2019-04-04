import * as actions from "../actions/actionTypes";

export const initialState = {
  loading: false,
  products: {},
  error: "",
  status: ""
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_PRODUCTS + actions._STARTED:
      return {
        ...state,
        loading: true
      };
    case actions.FETCH_PRODUCTS + actions._SUCCEEDED:
      return {
        ...state,
        loading: false,
        products: action.payload.data,
        status: actions._SUCCEEDED
      };
    case actions.FETCH_PRODUCTS + actions._FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.response.data
      };
    case actions.FETCH_PRODUCTS + actions._ENDED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default productReducer;
