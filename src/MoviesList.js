import React, { Component } from "react";
import Movie from "./Movie";
import styled from "styled-components";

class MoviesList extends Component {
  state = {
    movies: []
  };

  getMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=9572cb8f598afc28a58d2dfaa7d87aca&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

    try {
      const res = await fetch(`${url}`);
      const movies = await res.json();

      this.setState({
        movies: movies.results
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = () => {
    this.getMovies();
  };

  render() {
    const movies = this.state.movies;
    return (
      <MoviesContainer>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MoviesContainer>
    );
  }
}

const MoviesContainer = styled.div`
  position: relative;
  text-align: center;
  max-width: 1200px;
  margin: 6rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 1.5rem;
`;

export default MoviesList;
