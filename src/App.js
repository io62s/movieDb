import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Movieslist from "./MoviesList";
import MovieDetails from "./MovieDetails";

import "./App.css";
import styled from "styled-components";

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
const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 0;
`;
const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  z-index: 1000;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1vmin);
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  h3 {
    color: #272727;
  }
`;

export default App;
