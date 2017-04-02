import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER,
         RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const _nullState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_SESSION_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
