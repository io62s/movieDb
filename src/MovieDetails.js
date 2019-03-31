import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Overdrive from "react-overdrive";
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

const DetailContainer = styled.div`
  position: relative;
  height: 100vh;
  box-sizing: border-box;
  background-image: url(${props => props.backdrop});
  background-size: cover;

  .fa-arrow-alt-circle-left {
    position: absolute;
    top: 1.2rem;
    left: 4rem;
    font-size: 1.8rem;
    opacity: 0.8;
    color: #444;
    z-index: 9999;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: color 0.2s ease, opacity 0.2s ease;

    &:hover {
      color: #28bd55;
      opacity: 1;
    }
  }
`;

const Details = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(255, 255, 255, 0.85);
  text-align: left;
  padding: 1rem 10vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  h1 {
    padding-top: 2rem;
  }

  h4,
  p {
    padding-bottom: 2rem;
  }
  img {
    display: block;
    position: relative;
    width: 185px;
    top: -6rem;
    opacity: 1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 6px 6px rgba(0, 0, 0, 0.24);
  }
  .rating {
    color: #272727;
    padding-top: 1rem;
    .fas {
      color: orange;
    }
    strong {
      color: #272727;
    }
  }
`;

const DetailText = styled.div`
  margin-left: 2rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
`;

export default MovieDetails;
// 9572cb8f598afc28a58d2dfaa7d87aca
