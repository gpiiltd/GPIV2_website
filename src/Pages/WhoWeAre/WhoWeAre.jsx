import React from "react";
import CustomLine from "../../Components/CustomLines/CustomLine";
import image from "../../Components/Assets/Property 1=Group 37353.svg";
import icon from "../../Components/Assets/Group 37386 (2).svg";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        key={1}
        className=" pt-24 w-full px-8 grid place-content-center lg:px-0 lg:m-0 lg:m-auto lg:w-layoutWidth "
      >
        <section className="flex gap-2 lg:gap-11 ">
          <CustomLine />
          <div className="mb-4">
            <h1 className="lg:tracking-wide lg:text-3xl">Who we are</h1>
          </div>
        </section>
        <div className="flex flex-col gap-8 pt-8 lg:flex-row lg:gap-24">
          {/* <section className=" bg-black w-[340px] h-[374px] rounded-2xl hover:ml-11 hover:h-[390px] duration-300"> */}
          {/* <div className="w-full h-vh relative">
                 <img src={homeImg3} alt="..." className=" duration-300 relative" /> 
                 </div>  */}
          {/* <div className="w-full h-vh ">
                 <img src={homeImg2} alt="..." className=" duration-300 " /> 
                 </div> 
            </section> */}

          <section className=" hover:ml-8 duration-300">
            <img
              src={image}
              alt="img"
              className=" hover:rotate-[-12deg] duration-300 lg:w-full"
            />
          </section>

          <section className=" bg-white p-4 shadow overflow-hidden rounded-2xl lg:p-11 lg:h-whoWeAreCardheight lg:w-whoWeAreCardWidth">
            {/* <div className="bg-homePageCardGreen w-24 h-24 p-2 text-4xl grid place-items-center rounded-full "> */}
            <img src={icon} alt="img" />
            {/* </div> */}
            <p className="pt-2 text-sm lg:p-4 lg:text-base">
              We are a degital transformation consultancy and software
              development
              <br /> company providing cutting-edge engineering solutions. We
              proactively
              <br /> consult, design, develop & scale robust web, mobile &
              cuustom software <br /> solutions that fuel innovation & deliver
              digital success!
            </p>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default WhoWeAre;
