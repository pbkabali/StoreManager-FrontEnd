import * as actions from "../actions/actionTypes";

export const initialState = {
  loading: false,
  signUpResponse: "",
  error: ""
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGNUP_ACTION + actions._STARTED:
      return {
        ...state,
        loading: true
      };
    case actions.SIGNUP_ACTION + actions._SUCCEEDED:
      return {
        ...state,
        loading: false,
        signUpResponse: action.payload.data
      };
    case actions.SIGNUP_ACTION + actions._FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.response.data
      };
    case actions.SIGNUP_ACTION + actions._ENDED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default signUpReducer;
