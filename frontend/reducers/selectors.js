import values from 'lodash/values';

export const selectMediaDetail = ({ mediaDetail }, imdbID) => {
	const medium = mediaDetail[imdbID];
	return medium || {};
};

export const selectFavoritedMedia = ({favorites}) => {
	return values(favorites.media);
};
