import React from 'react';
import MediaListItem from './media_list_item.jsx';

class MediaList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { elements } = this.props;
    let listItems;
    if (elements) {
      listItems = elements.map(element => (
        <MediaListItem key={element.imdbID} element={element} />
      ));
    }

    return (
      <section className="media-list">
        <ul>
          { listItems }
        </ul>
      </section>
    );
  }
}

export default MediaList;
