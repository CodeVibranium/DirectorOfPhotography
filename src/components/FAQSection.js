import React from "react";
import styled from "styled-components";
// const QuestionEl = document.querySelector(".question");
// const AnswerEl = document.querySelector(".answer");

function FAQSection() {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start ? </h4>
        <div className="answer">
          <br />
          <p>Lorem ipsum dolor sit amet.</p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            dolor numquam nobis minus qui quasi iste vel in quia eum.
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Different Payment Methods </h4>
        <div className="answer">
          <br />
          <p>Lorem ipsum dolor sit amet.</p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            dolor numquam nobis minus qui quasi iste vel in quia eum.
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Products I Offer </h4>
        <div className="answer">
          <br />
          <p>Lorem ipsum dolor sit amet.</p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            dolor numquam nobis minus qui quasi iste vel in quia eum.
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Daily Shedule </h4>
        <div className="answer">
          <br />
          <p>Lorem ipsum dolor sit amet.</p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            dolor numquam nobis minus qui quasi iste vel in quia eum.
          </p>
        </div>
      </div>
    </Faq>
  );
}
const Faq = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: White;
  h2 {
    margin: 8% 0 3% 0;
    font-size: 40px;
    span {
      color: #23d997;
    }
  }
  .question {
    display: flex;
    flex-direction: column;
    &:hover .answer {
      visibility: visible;
      margin: 2% 0;
    }
    /* align-items: center; */
    h4 {
      font-size: 35px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10%;
        margin: 5% 0 0 0;
        background-color: white;
      }
    }
    .answer {
      visibility: hidden;
      margin: 0;
      transition: all 0.5s ease-in;
      p {
        font-size: 20px;
      }
    }
  }
`;
export default FAQSection;
