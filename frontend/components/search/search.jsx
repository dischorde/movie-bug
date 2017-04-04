import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchLink from './search_link.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  componentDidMount() {
    this.props.requestRecentSearches();
  }

  updateQuery(e) {
    this.setState({
      query: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.query !== "") {
      this.submitSearch(this.state.query);
    }
    // TODO: error handling
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
      <section className="search">
        <form onSubmit={this.handleSubmit}>
          <h1>
            <span>Learn more about your favorite </span>
            <span className="search-topic">Movies</span>
          </h1>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              onChange={this.updateQuery}
              placeholder="Search by title, keyword..." />
            <button>Search</button>
          </div>
        </form>
        <div className="search-recent-links">
          <span>{"Search for things like: "}</span>
          <ul>
            { recentsLinks }
          </ul>
        </div>
      </section>
    );
  }
}

export default withRouter(Search);
