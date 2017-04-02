import React from 'react';
import { isEmpty } from 'lodash';

class MediaDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (isEmpty(this.props.mediaDetail)) {
      this.props.requestMediaDetail(this.props.params.imdbID);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.imdbID !== this.props.params.imdbID) {
      if (isEmpty(newProps.mediaDetail)) {
        this.props.requestMediaDetail(newProps.params.imdbID);
      }
    }
  }

  render() {
    const { mediaDetail } = this.props;
    // TODO: pick what should be on here and style
    return (
      <section className="media-detail">
        <img src={mediaDetail.Poster} />
        <h3>{mediaDetail.Title}</h3>
        <h4>{mediaDetail.Released}</h4>
        <h4>{mediaDetail.Runtime}</h4>
        <h4>{mediaDetail.Genre}</h4>
        <h4>{mediaDetail.Director}</h4>
        <h4>{mediaDetail.Writer}</h4>
        <h4>{mediaDetail.Actors}</h4>
        <h4>{mediaDetail.Plot}</h4>
        <h4>{mediaDetail.Awards}</h4>
        <h4>{mediaDetail.BoxOffice}</h4>
        <h4>{mediaDetail.imdbRating}</h4>
      </section>
    );
  }
}

export default MediaDetail;
