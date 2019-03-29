import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./App.css";

const POSTER_PATH = "http://image.tmdb.org/t/p/w185/";

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

const MovieCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #1c1e24;
  text-align: left;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  h3 {
    color: #333333;
  }
`;

const DetailBtn = styled.button`
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: none;
  background: #6cee93;
  color: #275033;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: background 0.2s ease-out;

  &:hover {
    background: #28bd55;
  }
`;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
};

export default Movie;
