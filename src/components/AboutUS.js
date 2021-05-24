import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import Wave from "./Wave";
//Animation
import { motion } from "framer-motion";
import { title, contactBtn, tagLine, photoAnim } from "../animation";

function Aboutsection() {
  return (
    <About>
      <div className="Description">
        <div className="title">
          <Title variants={title} initial="hidden" animate="show">
            <h2> We work to make </h2>
          </Title>
          <Title variants={title} initial="hidden" animate="show">
            <h2>
              your <span>dreams</span> come
            </h2>
          </Title>
          <Title variants={title} initial="hidden" animate="show">
            <h2>come true. </h2>
          </Title>
        </div>
        <div className="Tagline">
          <Tagline variants={tagLine} initial="hidden" animate="show">
            Lorem ipsum dolor sit amet,
          </Tagline>
          <ContactBtn variants={contactBtn} initial="hidden" animate="show">
            Contact Us
          </ContactBtn>
        </div>
      </div>

      <CameraMan>
        <motion.img
          style={{ height: "500px" }}
          // style="height:500px;"
          variants={photoAnim}
          src={home1}
          alt="Cameraman"
        />
      </CameraMan>

      <Wave />
    </About>
  );
}

//styled components

const About = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5rem 8rem;
  color: white;
  @media (max-width: 770px) {
    padding: 40px 40px;
  }
  .Description {
    @media (max-width: 1100px) {
      display: flex;
      justify-content: space-between;
    }
    @media (max-width: 1300px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

const CameraMan = styled.div`
  display: flex;
  /* flex: 1; */
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  }
`;
const Title = styled(motion.div)`
  line-height: 200%;
  font-size: 50px;
  font-weight: 200;
  span {
    color: #23d997;
  }
  @media (max-width: 1100px) {
    font-size: 200%;
  }
  @media (max-width: 1300px) {
    font-size: 250%;
  }
  @media (max-width: 769px) {
    font-size: 230%;
  }
`;
const Tagline = styled(motion.p)`
  line-height: 150%;
  margin-bottom: 3%;
`;
const ContactBtn = styled(motion.button)`
  padding: 20px 60px;
  background-color: transparent;
  outline: none;
  border: 2px solid tomato;
  /* background-color: red; */
  color: white;
  font-size: 25px;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    background-color: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    z-index: -1;
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.25s;
  }
  &:hover::before {
    transform: translateX(85%) rotate(45deg);
  }
  @media (max-width: 1100px) {
    font-size: 15px;
    padding: 10px 30px;
  }
`;

export default Aboutsection;
