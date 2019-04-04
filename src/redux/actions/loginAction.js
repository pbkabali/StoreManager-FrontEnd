import * as actions from "./actionTypes";
import axios from "axios";
import { createActionThunk } from "redux-thunk-actions";

const login = payload => {
  return axios.post(
    "https://polos-store-manager.herokuapp.com/api/v1/auth/login",
    payload
  );
};

export const loginAction = createActionThunk(actions.LOGIN_ACTION, login, true);
