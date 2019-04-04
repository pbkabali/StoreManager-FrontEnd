import * as actions from "./actionTypes";
import axios from "axios";
import { createActionThunk } from "redux-thunk-actions";

const signUp = payload => {
  return axios.post(
    "https://polos-store-manager.herokuapp.com/api/v1/auth/signup",
    payload
  );
};

export const signUpAction = createActionThunk(
  actions.SIGNUP_ACTION,
  signUp,
  true
);
