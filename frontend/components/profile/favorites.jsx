import React from 'react';
import MediaList from '../media_list/media_list.jsx';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let { favorites } = this.props;
    // <MediaList elements={favorites} />
    return (
      <section className="favorited-media">
      </section>
    );
  }
}

export default Favorites;
