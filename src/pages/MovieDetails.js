import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
//Animation
import { motion } from "framer-motion";
import { AnimatePage, fade, photoAnim } from "../animation";

function MovieDetail() {
  const history = useHistory();
  const url = history.location.pathname;
  console.log(url);
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  //useEffect
  // setMovies(0);
  useEffect(() => {
    const currentMovie = movies.filter(function (stateMovie) {
      if (stateMovie.url === url) {
        return stateMovie;
      } else {
        console.log("Bad address");
      }
    });

    setMovie(currentMovie[0]);
    console.log(currentMovie[0]);
    // setMovies(currentMovie);
  }, [movies, url]);
  console.log(movie);
  return (
    <motion.div variants={AnimatePage} initial="hidden" animate="show">
      {movie && (
        <Main>
          <motion.h1 variants={fade}>{movie.title} </motion.h1>

          <motion.img
            variants={photoAnim}
            className="mainImg"
            src={movie.mainImg}
            alt="fewsdf"
          ></motion.img>
          <h2>About Movie.</h2>

          <div className="AboutMovie">
            <p>{movie.movieData}</p>
          </div>
          <div className="secondaryImg">
            <img src={movie.secondaryImg} alt="" />
          </div>
          <h4>Awards.</h4>
          <div>
            {movie.awards.map((award) => (
              <Award title={award.title} description={award.description} />
            ))}
          </div>
        </Main>
      )}
    </motion.div>
  );
}

function Award({ title, description }) {
  return (
    <AwardDv>
      <div className="D-Flex">
        <h3>{title}</h3>

        <div></div>
        <p>{description}</p>
      </div>
    </AwardDv>
  );
}

const Main = styled.div`
  color: white;

  @media (max-width: 1030px) {
    margin-bottom: 850px;
  }
  @media (max-width: 770px) {
    margin-bottom: 450px;
  }
  h1 {
    font-size: 55px;
    text-align: center;
    margin: 1rem 0;
    text-transform: uppercase;
    letter-spacing: 10px;
    /* font-weight:li */
  }
  .mainImg {
    /* display: block; */
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: 50% 40%;
    @media (max-width: 770px) {
      height: 500px;
    }
    @media (max-width: 1030px) {
      height: 500px;
    }
  }
  h2 {
    margin: 1.5rem 0;
    text-align: center;
    font-size: 35px;
  }
  h4 {
    text-align: center;
    font-weight: bolder;
    font-size: 40px;
    letter-spacing: 15px;
    text-transform: uppercase;
    margin: 5rem 0;
  }
  .AboutMovie {
    display: flex;
    justify-content: center;
    p {
      width: 75%;
      letter-spacing: 1.5px;
      word-spacing: 1.5px;
      line-height: 30px;
      text-align: justify;
      margin-bottom: 2rem;
    }
  }
  .secondaryImg {
    width: 100%;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      object-position: 0% 85%;
      @media (max-width: 770px) {
        height: 200px;
      }
      @media (max-width: 1030px) {
        height: 300px;
      }
    }
  }
`;
const AwardDv = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
  .D-Flex {
    h3 {
      font-size: 30px;
      text-transform: uppercase;
      letter-spacing: 15px;
      text-align: center;
    }
    div {
      margin: 0.5rem 0;
      height: 0.15rem;
      background-color: #ccc;
    }
    p {
      text-align: center;
      font-size: 20px;
    }
  }
`;
export default MovieDetail;
// (stateMovie) => stateMovie.url === url
