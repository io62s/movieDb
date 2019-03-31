import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Movieslist from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";

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
          <Route exact path="/" component={Movieslist} />
          <Route path="/:id" component={MovieDetails} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
