import { RECIEVE_MEDIA_DETAIL } from '../actions/media_actions.js';
import { merge } from 'lodash';

const mediaDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECIEVE_MEDIA_DETAIL:
      return merge({}, state, {
        [action.media.imdbID]: action.media
      });
    default:
      return state;
  }
};

export default mediaDetailReducer;
