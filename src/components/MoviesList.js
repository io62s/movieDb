import React, { Component } from "react";
import Movie from "./Movie";
import { PageBtns, MoviesContainer } from "../styles/Styles";
import { Link } from "react-router-dom";

class MoviesList extends Component {
  state = {
    movies: [],
    page: 1
  };

  nextPage = () => {
    this.setState(
      {
        page: +this.state.page + 1
      },
      () => this.getMovies()
    );
    // console.log(this.state.page);
  };

  prevPage = () => {
    if (this.state.page <= 1) {
      return;
    }
    this.setState(
      {
        page: +this.state.page - 1
      },
      () => this.getMovies()
    );
    // console.log(this.state.page);
  };

  getMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=9572cb8f598afc28a58d2dfaa7d87aca&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      this.state.page
    }`;

    try {
      const res = await fetch(`${url}`);
      const movies = await res.json();
      console.log(movies.page);

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
          <div>
            {this.state.page <= 1 ? null : (
              <Link to={`/movies`}>
                <button onClick={this.prevPage}>Prev page</button>
              </Link>
            )}
            page: <strong>{this.state.page}</strong>
            <Link to={`/movies`}>
              <button onClick={this.nextPage}>Next page</button>
            </Link>
          </div>
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

export default MoviesList;
