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
        <h3>Search Results</h3>
        <MediaList type="results" elements={results} />
      </section>
    );
  }
}

export default SearchResults;
