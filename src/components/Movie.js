import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Overdrive from "react-overdrive";

import "../App.css";
import { MovieCard, DetailBtn } from "../styles/Styles";

const POSTER_PATH = "http://image.tmdb.org/t/p/w185/";

const Movie = ({ movie }) => {
  const { title, poster_path, id } = movie;

  return (
    <MovieCard>
      <Overdrive id={id} duration={400}>
        <img src={`${POSTER_PATH}${poster_path}`} alt={title} />
      </Overdrive>
      <h3>{title}</h3>
      <Link className="btn-container" to={`/${id}`}>
        <DetailBtn>Details</DetailBtn>
      </Link>
    </MovieCard>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
};

export default Movie;
