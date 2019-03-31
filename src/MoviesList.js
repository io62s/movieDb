import React, { Component } from "react";
import Movie from "./Movie";
import styled from "styled-components";

class MoviesList extends Component {
  state = {
    movies: [],
    page: 1
  };

  nextPage = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => this.getMovies()
    );
  };

  prevPage = () => {
    if (this.state.page === 1) {
      return;
    }
    this.setState(
      {
        page: this.state.page - 1
      },
      () => this.getMovies()
    );
  };

  getMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=9572cb8f598afc28a58d2dfaa7d87aca&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      this.state.page
    }`;

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
      <>
        <PageBtns>
          {this.state.page === 1 ? null : (
            <button onClick={this.prevPage}>Prev page</button>
          )}
          page: <strong>{this.state.page}</strong>
          <button onClick={this.nextPage}>Next page</button>
        </PageBtns>
        <MoviesContainer>
          {movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </MoviesContainer>
      </>
    );
  }
}

const PageBtns = styled.div`
  position: relative;
  box-sizing: border-box;
  top: 5rem;
  width: 18rem;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  strong {
    color: #275033;
  }
  button {
    border: none;
    padding: 0.5rem 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background: #6cee93;
    transition: background 0.2s ease;
    cursor: pointer;
    color: #275033;
    font-weight: bold;
    margin: 0 0.6rem;

    &:hover {
      background: #28bd55;
    }

    &:focus {
      border: none;
      outline: none;
    }
  }
`;

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
