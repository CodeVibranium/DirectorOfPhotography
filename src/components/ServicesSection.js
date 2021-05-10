import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamWork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { photoAnim } from "../animation";
function ServicesSection() {
  return (
    <Services>
      <div className="Content">
        <h2>
          High <span>Quality</span> Services
        </h2>
        <div className="Cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="fsdfsd" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor amet sit.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="fsdfsd" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor amet sit.</p>
          </div>
        </div>
        <div className="Cards">
          <div className="card">
            <div className="icon">
              <img src={money} alt="fsdfsd" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor amet sit.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamWork} alt="fsdfsd" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor amet sit.</p>
          </div>
        </div>
      </div>
      <div className="Camera">
        <motion.img variants={photoAnim} src={home2} alt="blahblahblah" />
      </div>
    </Services>
  );
}

//styles
const Services = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row-reverse;
  .Content {
    display: flex;
    /* width:25%; */
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
    h2 {
      font-size: 45px;
      span {
        color: #23d997;
      }
    }
    /* align-self:centers */
  }
  .Camera {
    display: flex;
    /* flex: 1; */
    img {
      width: 100%;
      height: 80vh;
      object-fit: cover;
    }
  }
  .Cards {
    display: flex;
    padding: 2rem 0;

    .card {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      justify-content: center;
      align-items: center;
      .icon {
        display: flex;
        /* text-align: center; */
        align-items: center;
        justify-content: space-between;
        h3 {
          font-size: 25px;
          /* font-weight: lighter; */
          background-color: white;
          color: black;
          padding: 3%;
          margin-left: 2%;
        }
      }
    }
  }
`;

export default ServicesSection;
