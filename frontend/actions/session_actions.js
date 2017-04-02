import * as SessionAPIUtil from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)))
    .fail(error => dispatch(receiveSessionErrors(error.responseJSON)));
};

export const signin = user => dispatch => {
  return SessionAPIUtil.signin(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(error => dispatch(receiveSessionErrors(error.responseJSON)));
};

export const signout = () => dispatch => {
  return SessionAPIUtil.signout()
  .then(user => dispatch(receiveCurrentUser(null)));
};
