import React from 'react';

class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);

    this.makeFavoriteButton = this.makeFavoriteButton.bind(this);
    this.unfavorite = this.unfavorite.bind(this);
    this.favorite = this.favorite.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.requestFavoritedList(this.props.currentUser.id);
    }
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.currentUser && newProps.currentUser) {
      this.props.requestFavoritedList(newProps.currentUser.id);
    }
  }

  unfavorite(e) {
    e.preventDefault();
    const { currentUser, imdbId } = this.props;
    this.props.deleteFavorite(imdbId, currentUser.id);
  }

  favorite(e) {
    e.preventDefault();
    const { element, type, currentUser } = this.props;
    let favorite = {};
    favorite.title = element.Title;
    favorite.imdb_id = element.imdbID;
    favorite.poster = element.Poster;
    favorite.year = element.Year;
    favorite.media_type = element.Type;
    favorite.user_id = currentUser.id;

    this.props.createFavorite(favorite);
  }

  makeFavoriteButton() {
    const { type, imdbId, favoritedList } = this.props;
    if (type === "favorite" || favoritedList[imdbId] ) {
      return <button className="unfavorite-button" onClick={this.unfavorite}>
        {"Unfavorite"}
      </button>;
    }
    else {
      return <button className="favorite-button" onClick={this.favorite}>
        {"Favorite"}
      </button>;
    }
  }

  makeNotClickable() {
    return <button onClick={e => e.preventDefault()} className="greyed-out">
      {"Sign Up to Favorite"}
    </button>;
  }

  render() {
    const { currentUser } = this.props;
    let button;

    if (currentUser) {
      button = this.makeFavoriteButton();
    }
    else {
      button = this.makeNotClickable();
    }

    return (
      <div>
        { button }
      </div>
    );
  }
}

export default FavoriteButton;
