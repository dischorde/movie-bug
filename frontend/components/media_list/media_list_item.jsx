import React from 'react';
import { Link } from 'react-router';

const MediaListItem = ({element}) => {
  // TODO: make the Title a link to a detail view with the plot summary
  return (
    <li>
      <section className="media-list-item">
        <img src={element.Poster} />
        <h3>{element.Title}</h3>
        <h4>{element.Year}</h4>
      </section>
    </li>
  );
};

export default MediaListItem;
