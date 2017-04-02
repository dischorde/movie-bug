import React from 'react';
import { Link } from 'react-router';

const MediaListItem = ({element, type}) => {
  let imdbId = "imdbID";
  let poster = "Poster";
  let title = "Title";
  let year = "Year";

  if (type === "favorite") {
    imdbId = "imdb_id";
    poster = "poster";
    title = "title";
    year = "year";
  }

  return (
    <li key={element[imdbId]}>
      <section className="media-list-item">
        <img src={element[poster]} />
        <Link to={`/results/${element[imdbId]}`}>
          <h3>{element[title]}</h3>
        </Link>
        <h4>{element[year]}</h4>
      </section>
    </li>
  );
};

export default MediaListItem;
