import React from "react";
import AboutUS from "../components/AboutUS";
import ServicesSection from "../components/ServicesSection";
import FAQSection from "../components/FAQSection";
//Animation
import { motion } from "framer-motion";
import { AnimatePage } from "../animation";

function Aboutpage() {
  return (
    <>
      <motion.div variants={AnimatePage} initial="hidden" animate="show">
        <AboutUS />
        <ServicesSection />
        <FAQSection />
      </motion.div>
    </>
  );
}
export default Aboutpage;
