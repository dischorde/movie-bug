import React from 'react';
import SearchLink from '../search/search_link.jsx';
import { withRouter } from 'react-router';

class RecentSearches extends React.Component {
  constructor(props) {
    super(props);
    this.submitSearch = this.submitSearch.bind(this);
  }

  componentDidMount() {
    this.props.requestUserSearches(this.props.currentUser.id);
  }

  submitSearch(query) {
    this.props.search(query)
    .then(() => this.props.router.push("/results"));
  }

  render() {
    const { recentSearches } = this.props;
    let recentsLinks;
    if (recentSearches) {
      recentsLinks = recentSearches.map((query, idx) => {
        return <SearchLink key={idx}
                           idx={idx}
                           query={query}
                           submitSearch={this.submitSearch} />;
      });
    }

    return (
      <section className="my-recent-searches">
        <ul>
          { recentsLinks }
        </ul>
      </section>
    );
  }
}

export default withRouter(RecentSearches);
