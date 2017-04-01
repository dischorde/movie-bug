import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="nav-logo">
          <span><Link to="/"><h2>MovieBug</h2></Link></span>
        </div>
        <nav className="nav-links">
          <ul>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li>Sign In</li>
            <li><button>Sign Up</button></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
