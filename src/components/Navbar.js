import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <FlexBox>
      <div id="logo">
        <Link to="/">
          <h1>Capture</h1>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">1. About Us</Link>
          </li>
          <li>
            <Link to="/work">2. Work</Link>
          </li>
          <li>
            <Link to="/contact">3. Contact Us</Link>
          </li>
        </ul>
      </div>
    </FlexBox>
  );
}
export default Navbar;
const FlexBox = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-around;
  height: 4rem;
  background-color: #282828;

  #logo {
    h1 {
      color: white;
      font-size: 1.25rem;
      font-weight: lighter;
      font-family: "Lobster", cursive;
      margin-right: 20rem;
    }
  }

  .nav-items {
    ul {
      display: flex;
      li {
        list-style-type: none;
        a {
          text-decoration: none;
          color: white;
          padding: 0 1rem;
        }
      }
    }
  }
`;
