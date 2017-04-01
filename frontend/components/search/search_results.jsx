import React from 'react';
import MediaList from '../media_list/media_list.jsx';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { results } = this.props;
    return (
      <section className="search-results">
        <h2>Search Results</h2>
        <MediaList elements={results} />
      </section>
    );
  }
}

export default SearchResults;
