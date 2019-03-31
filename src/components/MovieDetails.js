import React, { Component } from "react";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";

import { DetailContainer, Details, DetailText } from "../styles/Styles";

class MovieDetails extends Component {
  state = {
    movie: {}
  };

  getMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/${
      this.props.match.params.id
    }?api_key=9572cb8f598afc28a58d2dfaa7d87aca&language=en-US`;

    try {
      const res = await fetch(`${url}`);
      const movie = await res.json();

      this.setState({
        movie
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = () => {
    this.getMovies();
  };

  render() {
    const POSTER_PATH = "http://image.tmdb.org/t/p/w185/";
    const BACK_PATH = "http://image.tmdb.org/t/p/original/";
    const {
      poster_path,
      backdrop_path,
      title,
      vote_average,
      overview,
      release_date,
      id
    } = this.state.movie;
    return (
      <DetailContainer backdrop={`${BACK_PATH}${backdrop_path}`}>
        <Link to="/">
          <i className="fas fa-arrow-alt-circle-left" />
        </Link>
        <Details>
          <Overdrive id={id} duration={400}>
            <img src={`${POSTER_PATH}${poster_path}`} alt={title} />
          </Overdrive>
          <DetailText className="detail-text">
            <h1>{title}</h1>
            <h4>Released: {release_date}</h4>
            <p>{overview}</p>
            <hr />
            <div className="rating">
              Average Rating: <i className="fas fa-star" />
              {vote_average === 0 ? (
                "Not yet rated"
              ) : (
                <strong>{vote_average}</strong>
              )}
            </div>
          </DetailText>
        </Details>
      </DetailContainer>
    );
  }
}

export default MovieDetails;
// 9572cb8f598afc28a58d2dfaa7d87aca