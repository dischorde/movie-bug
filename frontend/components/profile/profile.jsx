import React from 'react';
import { Link } from 'react-router';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentPath = this.props.location.pathname.split("/");
    return (
      <section className="profile">
        <div className="switch-tabs">
          <ul>
            <Link to="/profile/favorites"><li>Favorites</li></Link>
            <li>{"|"}</li>
            <Link to="/profile/recent-searches"><li>Recent Searches</li></Link>
          </ul>
        </div>
        {this.props.children}
      </section>
    );
  }
}

export default SearchResults;
