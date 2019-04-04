import * as actions from "./actionTypes";
import axios from "axios";
import { createActionThunk } from "redux-thunk-actions";

const getProducts = () => {
  return axios.get(
    "https://polos-store-manager.herokuapp.com/api/v1/products",
    { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
  );
};

export const getProductsAction = createActionThunk(
  actions.FETCH_PRODUCTS,
  getProducts,
  true
);
