import React from 'react';
import { Link } from 'react-router';

const MediaListItem = ({element}) => {
  return (
    <li key={element.imdbID}>
      <section className="media-list-item">
        <img src={element.Poster} />
        <Link to={`/results/${element.imdbID}`}>
          <h3>{element.Title}</h3>
        </Link>
        <h4>{element.Year}</h4>
      </section>
    </li>
  );
};

export default MediaListItem;
