import React from 'react';
import { Link } from 'react-router';
import FavoriteButtonContainer from './favorite_button_container.jsx';

class MediaListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  convertElementKeys() {
    const {element, type} = this.props;
    let posterUrl = "";

    if (type === "favorite") {
      if (element.poster !== "N/A") {
        posterUrl = element.poster;
      }

      return {
        imdbId: element.imdb_id,
        poster: posterUrl,
        title: element.title,
        year: element.year
      };
    }
    else {
      if (element.Poster !== "N/A") {
        posterUrl = element.Poster;
      }

      return {
        imdbId: element.imdbID,
        poster: posterUrl,
        title: element.Title,
        year: element.Year
      };
    }
  }

  render() {
    const { type } = this.props;
    let element = this.convertElementKeys();
    let title = element.title;

    if (title.length > 28) {
      title = title.slice(0,25) + '...';
    }

    return (
      <li key={element.imdbId}>
        <section className="media-list-item">
          <Link to={`/results/${element.imdbId}`} className="no-hover-effects">
            <img src={element.poster} />
          </Link>
          <div className="media-info">
            <Link to={`/results/${element.imdbId}`}>
              <h4>{title}</h4>
            </Link>
            <h5>{element.year}</h5>
          </div>
          <FavoriteButtonContainer type={type} element={this.props.element} />
        </section>
      </li>
    );
  }
}

export default MediaListItem;
