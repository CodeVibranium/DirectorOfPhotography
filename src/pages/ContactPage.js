import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { photoAnim, AnimatePage } from "../animation";
function Contact() {
  return (
    <Main variants={AnimatePage} initial="hidden" animate="show">
      <div>
        <ul>
          <motion.li variants={photoAnim}>Send us a message.</motion.li>
          <motion.li variants={photoAnim}>Get in touch.</motion.li>
          <motion.li variants={photoAnim}>Lets talk shop.</motion.li>
        </ul>
      </div>
      <div>
        <ul>
          <motion.li variants={photoAnim}>Facebook.</motion.li>
          <motion.li variants={photoAnim}>Youtube.</motion.li>
          <motion.li variants={photoAnim}>Instagram.</motion.li>
          <motion.li variants={photoAnim}>WhatsApp.</motion.li>
          <motion.li variants={photoAnim}>Google.</motion.li>
        </ul>
      </div>
    </Main>
  );
}
export default Contact;
//styled
const Main = styled(motion.div)`
  background-color: white;
  color: black;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    ul {
      li {
        font-size: 60px;
        cursor: pointer;
        font-weight: bolder;
        list-style-type: disc;
        &:hover {
          color: #81b214;
        }
        &:active {
          color: red;
        }
      }
    }
  }
`;
