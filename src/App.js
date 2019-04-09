import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Movieslist from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";

import "./App.css";
import { Container, Header } from "./styles/Styles";

const App = () => {
  return (
    <Router>
      <Container>
        <Header>
          <Link style={{ textDecoration: "none" }} to="/">
            <h3>MovieDB</h3>
          </Link>
        </Header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/movies"
            render={props => <Movieslist {...props} />}
          />
          <Route path="/:id" render={props => <MovieDetails {...props} />} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
