import React from "react";
import CustomLine from "../../Components/CustomLines/CustomLine";
import icon from "../../Components/Assets/Group 37386 (2).svg";
import { motion } from "framer-motion";

const WhoWeAre = ({ titleOne, titleTwo, image }) => {
  return (
    <>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        key={1}
        className=" pt-24 w-full px-8 grid place-content-center lg:px-0 lg:m-auto lg:w-layoutWidth "
      >
        <section className="flex gap-2 lg:gap-11 ">
          <CustomLine />
          <div className="mb-4">
            <h1 className="lg:tracking-wide lg:text-3xl">Who we are</h1>
          </div>
        </section>
        <div className="flex flex-col gap-8 pt-8 lg:flex-row md:gap-11 lg:gap-24">
          <section className=" hover:ml-8 duration-300">
            <img
              src={image.asset?.url}
              alt="img"
              className=" hover:rotate-[-12deg] duration-300 lg:w-full"
            />
          </section>

          <section className=" bg-white p-4 shadow overflow-hidden rounded-2xl md:p-11 md:h-fit md:w-whoWeAreCardWidth">
            <img src={icon} alt="img" />
            <p className="pt-2 text-sm tracking-wide leading-loose lg:p-2 lg:text-base">
              {titleOne}
              <br />
              <br />
              {titleTwo}
            </p>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default WhoWeAre;
