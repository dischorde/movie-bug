import React from 'react';
import MediaList from '../media_list/media_list.jsx';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllFavorites();
  }

  render() {
    let { favorites } = this.props;

    return (
      <section className="favorited-media">
        <MediaList type="favorite" elements={favorites} />
      </section>
    );
  }
}

export default Favorites;
