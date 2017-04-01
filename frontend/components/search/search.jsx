import React from 'react';
import { Link, withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(e) {
    this.setState({
      query: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.query !== "") {
      this.props.fetchSearchResults(this.state.query)
      .then(() => this.props.router.push("/results"));
    }
    // TODO: error handling
  }

  render() {
    return (
      <section className="search">
        <form onSubmit={this.handleSubmit}>
          <h1>
            <span>Learn more about your favorite </span><span className="search-topic">Movies</span>
          </h1>
          <input
            type="text"
            className="search-bar"
            onChange={this.updateQuery}
            placeholder="Search by title, keyword..." />
          <button>Search</button>
        </form>
      </section>
    );
  }
}

export default withRouter(Search);
