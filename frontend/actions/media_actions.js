import * as OMDBAPIUtil from '../util/omdb_api_util.js';

export const RECIEVE_MEDIA_DETAIL = "RECIEVE_MEDIA_DETAIL";

export const receiveMediaDetail = media => ({
  type: RECIEVE_MEDIA_DETAIL,
  media
});

export const fetchMediaDetail = mediaId => dispatch => {
  return OMDBAPIUtil.fetchMedia(mediaId)
  .then(media => dispatch(receiveMediaDetail));
};
