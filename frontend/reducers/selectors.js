
export const selectMediaDetail = ({ mediaDetail }, imdbID) => {
	const medium = mediaDetail[imdbID];
	return medium || {};
};

export const limitFive = ({recentSearches}) => (
	recentSearches.length > 5 ? recentSearches.slice(0, 5) : recentSearches
);
