import * as actions from "../actions/actionTypes";

export const initialState = {
  loading: false,
  isLoggedIn: false,
  loginResponse: "",
  error: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_ACTION + actions._STARTED:
      return {
        ...state,
        loading: true
      };
    case actions.LOGIN_ACTION + actions._SUCCEEDED:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        loginResponse: action.payload.data
      };
    case actions.LOGIN_ACTION + actions._FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.response.data
      };
    case actions.LOGIN_ACTION + actions._ENDED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default loginReducer;
