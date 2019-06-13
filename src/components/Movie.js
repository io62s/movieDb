import React from "react";
import { Link } from "react-router-dom";

import "../App.css";
import { MovieCard, DetailBtn } from "../styles/Styles";

const POSTER_PATH = "https://image.tmdb.org/t/p/w185/";

const Movie = ({ movie }) => {
  const { title, poster_path, id } = movie;

  return (
    <MovieCard>
      <img src={`${POSTER_PATH}${poster_path}`} alt={title} />

      <h3>{title}</h3>
      <Link className="btn-container" to={`/${id}`}>
        <DetailBtn>Details</DetailBtn>
      </Link>
    </MovieCard>
  );
};

export default Movie;
