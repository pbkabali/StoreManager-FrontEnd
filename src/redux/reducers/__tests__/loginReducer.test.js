import loginReducer from "../loginReducer";
import { initialState } from "../loginReducer";
import {
  LOGIN_ACTION,
  _STARTED,
  _SUCCEEDED,
  _FAILED,
  _ENDED
} from "../../actions/actionTypes";

describe("login reducer tests", () => {
  it("returns correct state when action is started", () => {
    const state = loginReducer(initialState, {
      type: LOGIN_ACTION + _STARTED
    });
    expect(state.loading).toBeTruthy();
  });
  it("returns correct state when action is successful", () => {
    const state = loginReducer(initialState, {
      type: LOGIN_ACTION + _SUCCEEDED,
      payload: { data: {} }
    });
    expect(state.loading).toBeFalsy();
  });
  it("returns correct state when action has failed", () => {
    const state = loginReducer(initialState, {
      type: LOGIN_ACTION + _FAILED,
      payload: { response: { data: {} } }
    });
    expect(state.loading).toBeFalsy();
  });
  it("returns correct state when action has ended", () => {
    const state = loginReducer(initialState, {
      type: LOGIN_ACTION + _ENDED
    });
    expect(state.loading).toBeFalsy();
  });
});
