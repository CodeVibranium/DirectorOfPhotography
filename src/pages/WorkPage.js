import React from "react";
import athlete from "../img/athlete-small.png";
import theRacer from "../img/theracer-small.png";
import goodTimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Animation
import { motion } from "framer-motion";
import { fade, photoAnim, AnimatePage, lineAnim } from "../animation";
// import Wave from "../components/Wave";

function Work() {
  return (
    <div>
      <WorkDiv variants={AnimatePage} initial="hidden" animate="show">
        <Movie>
          {/* <Wave /> */}

          <motion.h2 variants={fade}> The Athlete</motion.h2>
          <motion.div variants={lineAnim}></motion.div>
          <Link to="/work/the-athlete">
            <Image variants={photoAnim} src={athlete} alt="athlete"></Image>
          </Link>
        </Movie>
        <Movie>
          <h2>The Racer</h2>
          <div></div>
          <Link to="/work/the-racer">
            <Image src={theRacer} alt="theRacer"></Image>
          </Link>
        </Movie>
        <Movie>
          <h2>Good Times</h2>
          <div></div>
          <Link to="/work/good-times">
            <Image src={goodTimes} alt="goodTimes"></Image>
          </Link>
        </Movie>
      </WorkDiv>
    </div>
  );
}
//styled
const WorkDiv = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  background-color: white;
`;
const Movie = styled.div`
  padding-bottom: 5rem;
  h2 {
    padding: 1rem 0rem;
    font-size: 50px;
    position: relative;
  }
  div {
    height: 0.5rem;
    width: 100%;
    background: #cccccc;
    margin-bottom: 3rem;
  }
`;
const Image = styled(motion.img)`
  display: flex;
  align-self: center;
  margin: 0 auto;
  width: 100%;
  height: 80vh;
  object-fit: cover;
  object-position: 0 7 0%;
`;

export default Work;
