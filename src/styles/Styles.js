import styled from "styled-components";

/***APP */

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
    transition: color 0.2s ease-out;
  }

  h3:hover {
    color: #28bd55;
  }
`;
/******************************************** */
/******MOVIES LIST */
const PageBtns = styled.div`
  position: relative;
  box-sizing: border-box;
  top: 5rem;
  width: 40%;
  margin: 0 auto 3rem;
  padding: 1rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  strong {
    color: #275033;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  button {
    border: none;
    border-radius: 3px;
    padding: 0.3rem 1rem;
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
  box-sizing: border-box;
  position: relative;
  text-align: center;
  max-width: 1200px;
  margin: 6rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 1.5rem;
`;

const GoTo = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 12rem;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 60%;
    margin-bottom: 0.8rem;
    justify-content: space-between;
  }
  input {
    width: 5rem;
    flex: 1;
    padding: 0.2rem;
    border-radius: 5px;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    &:focus {
      outline: none;
      border: none;
    }
  }

  span {
    flex: 1;
    margin-right: 0.5rem;
    white-space: nowrap;
  }
`;
/******************************************** */
/****MOVIE */

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
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  }
  h3 {
    color: #333333;
  }

  @media screen and (max-width: 500px) {
    padding: 1rem;
    width: 65%;
    margin: 0 auto;
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
/******************************************** */
/*****MOVIE DETAILS */
const DetailContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-image: url(${props => props.backdrop});
  background-size: cover;
`;

const Details = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(255, 255, 255, 0.85);
  text-align: left;
  padding: 1rem 10vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  img {
    position: absolute;
    left: 6;
    width: 185px;
    top: -12rem;
    opacity: 1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 6px 6px rgba(0, 0, 0, 0.24);
  }

  @media screen and (max-width: 500px) {
    position: relative;

    img {
      position: relative;
      top: 4rem;
    }
  }
`;

const DetailText = styled.div`
  width: 100%;
  padding-top: 5rem;
  position: relative;

  h1 {
    padding-top: 1rem;
  }

  h4,
  p {
    padding-bottom: 2rem;
  }

  .rating {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #272727;
    padding-top: 1rem;
    .fas {
      color: orange;
    }
    strong {
      color: #272727;
    }
  }
`;

const Imdb = styled.a`
  font-size: 2rem;
  color: #272727;
  margin-left: 2rem;
  transition: color 0.2s ease;

  &:hover {
    color: #ffd600;
  }
`;
/******************************************** */

export {
  Container,
  Header,
  PageBtns,
  MoviesContainer,
  MovieCard,
  DetailBtn,
  DetailContainer,
  Details,
  DetailText,
  Imdb,
  GoTo
};
