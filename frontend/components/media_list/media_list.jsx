import React from 'react';
import MediaListItem from './media_list_item.jsx';

class MediaList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { elements, type } = this.props;
    let listItems;
    if (elements) {
      listItems = elements.map((element, idx) => (
        <MediaListItem key={idx} element={element} type={type}/>
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
