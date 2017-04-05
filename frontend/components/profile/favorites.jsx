import React from 'react';
import MediaList from '../shared/media_list.jsx';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllFavorites(this.props.currentUser.id);
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
