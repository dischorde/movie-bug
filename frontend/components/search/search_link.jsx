import React from 'react';

const SearchLink = ({query, idx, submitSearch}) => {
  const search = e => {
    e.preventDefault();
    submitSearch(query);
  };
  
  return (
    <li key={idx}>
      <a href="" onClick={search}>{query}</a>
    </li>
  );
};

export default SearchLink;
