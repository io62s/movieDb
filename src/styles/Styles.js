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
  }
`;

/******MOVIES LIST */
const PageBtns = styled.div`
  position: relative;
  box-sizing: border-box;
  top: 5rem;
  width: 18rem;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
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

/*****MOVIE DETAILS */
const DetailContainer = styled.div`
  position: relative;
  height: 100vh;
  box-sizing: border-box;
  background-image: url(${props => props.backdrop});
  background-size: cover;

  .fa-arrow-alt-circle-left {
    position: absolute;
    top: 1.2rem;
    left: 4rem;
    font-size: 1.8rem;
    opacity: 0.8;
    color: #444;
    z-index: 9999;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: color 0.2s ease, opacity 0.2s ease;

    &:hover {
      color: #28bd55;
      opacity: 1;
    }
  }
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

  h1 {
    padding-top: 2rem;
  }

  h4,
  p {
    padding-bottom: 2rem;
  }
  img {
    display: block;
    position: relative;
    width: 185px;
    top: -6rem;
    opacity: 1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 6px 6px rgba(0, 0, 0, 0.24);
  }
  .rating {
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

const DetailText = styled.div`
  margin-left: 2rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
`;
/********** */

export {
  Container,
  Header,
  PageBtns,
  MoviesContainer,
  MovieCard,
  DetailBtn,
  DetailContainer,
  Details,
  DetailText
};
