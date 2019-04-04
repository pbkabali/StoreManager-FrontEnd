import signUpReducer from "../signUpReducer";
import { initialState } from "../signUpReducer";
import {
  SIGNUP_ACTION,
  _STARTED,
  _SUCCEEDED,
  _FAILED,
  _ENDED
} from "../../actions/actionTypes";

describe("signup reducer tests", () => {
  it("returns correct state when action is started", () => {
    const state = signUpReducer(initialState, {
      type: SIGNUP_ACTION + _STARTED
    });
    expect(state.loading).toBeTruthy();
  });
  it("returns correct state when action is successful", () => {
    const state = signUpReducer(initialState, {
      type: SIGNUP_ACTION + _SUCCEEDED,
      payload: { data: {} }
    });
    expect(state.loading).toBeFalsy();
  });
  it("returns correct state when action has failed", () => {
    const state = signUpReducer(initialState, {
      type: SIGNUP_ACTION + _FAILED,
      payload: { response: { data: {} } }
    });
    expect(state.loading).toBeFalsy();
  });
  it("returns correct state when action has ended", () => {
    const state = signUpReducer(initialState, {
      type: SIGNUP_ACTION + _ENDED
    });
    expect(state.loading).toBeFalsy();
  });
});
