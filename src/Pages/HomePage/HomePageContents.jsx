import React from "react";
import image1 from "../../Components/Assets/Group 37340.png";
import ContactUs from "../Contact/ContactUs";
import Home from "../Home/Home";
import WhatWeOffer from "../WhatWeOffer/WhatWeOffer";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import WhyChoseUs from "../WhyChoseUs/WhyChoseUs";
import { motion } from "framer-motion";

const HomePageContents = () => {
  return (
    <>
      <Home />
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        key={1}
      >
        <WhoWeAre />

        <div className="absolute right-0">
          <img src={image1} alt=""></img>
        </div>
        <WhatWeOffer />
        <WhyChoseUs />
        <ContactUs />
      </motion.div>
    </>
  );
};

export default HomePageContents;
