import React, { PureComponent } from "react";
import Movie from "./Movie";
import { PageBtns, MoviesContainer, GoTo } from "../styles/Styles";

class MoviesList extends PureComponent {
  state = {
    movies: [],
    page: 1
  };

  nextPage = () => {
    this.setState(
      {
        page: parseInt(this.state.page) + 1
      },
      () => this.getMovies()
    );
  };

  prevPage = () => {
    if (this.state.page <= 1) {
      return;
    }
    this.setState(
      {
        page: parseInt(this.state.page) - 1
      },
      () => this.getMovies()
    );
  };

  goToPage = e => {
    this.setState(
      {
        page: e.target.value
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
          <GoTo onSubmit={this.goToPage}>
            <span>Go to page:</span>
            <input
              type="number"
              value={this.state.page}
              onChange={this.goToPage}
            />
          </GoTo>
          <div>
            {this.state.page === 1 || this.state.page === "" ? null : (
              <button onClick={this.prevPage}>Prev page</button>
            )}
            page: <strong>{this.state.page}</strong>
            <button onClick={this.nextPage}>Next page</button>
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
