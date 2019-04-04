import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import signUpReducer from "./reducers/signUpReducer";
import productReducer from "./reducers/productReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  login: loginReducer,
  signUp: signUpReducer,
  products: productReducer
});
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
