import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose } from 'redux';
import thunk from 'redux-thunk';
import testReducer from "./reducers/testReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    test: testReducer
  });
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
