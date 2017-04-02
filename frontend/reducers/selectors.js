
export const selectMediaDetail = ({ mediaDetail }, imdbID) => {
	const medium = mediaDetail[imdbID];
	return medium || {};
};
