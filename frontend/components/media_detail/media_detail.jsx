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
    let visibility = "";
    if (mediaDetail.Poster === "N/A") {
      visibility = "hidden";
    }
    console.log(mediaDetail.Poster === "N/A");
    console.log(visibility);
    return (
      <section className="media-detail">
        <img src={mediaDetail.Poster} className={visibility}/>
        <div className="media-detail-info-wrapper">
          <h2>{mediaDetail.Title}</h2>
            <div className="media-detail-info">
              <p>
                Released {mediaDetail.Released} | {mediaDetail.Genre} | {mediaDetail.imdbRating}/10
              </p>
              <br />
              <ul className="cast-info">
                <li><span className="label">Director:</span> {mediaDetail.Director}</li>
                <li><span className="label">Writer:</span> {mediaDetail.Writer}</li>
                <li><span className="label">Actors:</span> {mediaDetail.Actors}</li>
              </ul>
              <br />
              <p>{mediaDetail.Plot}</p>
              <br />
              <p>{mediaDetail.Awards}</p>
              <p>{mediaDetail.Runtime}, Rated {mediaDetail.Rated}</p>
            </div>
        </div>
      </section>
    );
  }
}

export default MediaDetail;
