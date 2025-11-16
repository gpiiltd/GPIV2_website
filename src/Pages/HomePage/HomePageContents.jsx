import React, { useEffect, useState } from "react";
import image1 from "../../Components/Assets/Group 37340.png";
import ContactUs from "../Contact/ContactUs";
import Home from "../Home/Home";
import WhatWeOffer from "../WhatWeOffer/WhatWeOffer";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import WhyChoseUs from "../WhyChoseUs/WhyChoseUs";
import { motion } from "framer-motion";
import { client } from "../../sanityClient";

const HomePageContents = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "heroSection"][0]{
          whoAreWeImageMain,
          whoAreWeParagraphOne,
          whoAreWeParagraphTwo,
          bespokeSolutions,
          smallBusinessSolutions,
          propriatarySolutions,
          whyChooseUsParagraphOne,
          whyChooseUsParagraphTwo,
        }`
      )
      .then((data) => {
        //console.log("Sanity Hero Data:", data); // Add this line
        setHomeData(data);
      })
      .catch(console.error);
  }, []);

  if (!homeData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Home />
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        key={1}
      >
        <WhoWeAre
          titleOne={homeData.whoAreWeParagraphOne}
          titleTwo={homeData.whoAreWeParagraphTwo}
          image={homeData.whoAreWeImageMain}
        />

        <div className="absolute right-0">
          <img src={image1} alt=""></img>
        </div>
        <WhatWeOffer
          beSpokeString={homeData.bespokeSolutions}
          smallBusiness={homeData.smallBusinessSolutions}
          solutions={homeData.propriatarySolutions}
        />
        <WhyChoseUs
          whyChooseuseOne={homeData.whyChooseUsParagraphOne}
          whyChooseuseTwo={homeData.whyChooseUsParagraphTwo}
        />
        <ContactUs />
      </motion.div>
    </>
  );
};

export default HomePageContents;
