import * as actions from '../actions/actionTypes';

const initialState = {
    loading: false,
    errorMsg: ''
  };

  const testReducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.TEST_ACTION:
        return {
          ...state,
          loading: !state.loading
        };
      default:
        return state;
    }
  };

  export default testReducer;
