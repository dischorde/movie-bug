import { RECIEVE_MEDIA_DETAIL } from '../actions/media_actions.js';

const mediaDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECIEVE_MEDIA_DETAIL:
      return action.media;
    default:
      return state;
  }
};

export default mediaDetailReducer;
