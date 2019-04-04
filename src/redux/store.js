import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  login: loginReducer
});
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
