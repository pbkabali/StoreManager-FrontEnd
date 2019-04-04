import productReducer from "../productReducer";
import { initialState } from "../signUpReducer";
import {
  FETCH_PRODUCTS,
  _STARTED,
  _SUCCEEDED,
  _FAILED,
  _ENDED
} from "../../actions/actionTypes";

describe("product reducer tests", () => {
  it("returns correct state when action is started", () => {
    const state = productReducer(initialState, {
      type: FETCH_PRODUCTS + _STARTED
    });
    expect(state.loading).toBeTruthy();
  });
  it("returns correct state when action is successful", () => {
    const state = productReducer(initialState, {
      type: FETCH_PRODUCTS + _SUCCEEDED,
      payload: { data: {} }
    });
    expect(state.loading).toBeFalsy();
  });
  it("returns correct state when action has failed", () => {
    const state = productReducer(initialState, {
      type: FETCH_PRODUCTS + _FAILED,
      payload: { response: { data: {} } }
    });
    expect(state.loading).toBeFalsy();
  });
  it("returns correct state when action has ended", () => {
    const state = productReducer(initialState, {
      type: FETCH_PRODUCTS + _ENDED
    });
    expect(state.loading).toBeFalsy();
  });
});
