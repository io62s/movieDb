import React from "react";
import { Link } from "react-router-dom";
import img from "../wp1945898.jpg";

import { HomeContainer } from "../styles/Styles";

const Home = () => {
  return (
    <HomeContainer style={{ backgroundImage: `url(${img})` }}>
      <div className="overlay" />
      <h1>Browse Movies</h1>
      <Link className="movies-btn" to={`/movies/1`}>
        Movie List
      </Link>
    </HomeContainer>
  );
};

export default Home;
