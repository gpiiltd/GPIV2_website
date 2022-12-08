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
        <section className="flex gap-2 md:justify-center lg:gap-11 ">
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

          <section className=" hover:ml-8 duration-300 md:flex  md:items-center md:justify-center ">
            <img
              src={image}
              alt="img"
              className=" hover:rotate-[-12deg]  duration-300 lg:w-full"
            />
          </section>

          <section className=" bg-white p-4 shadow overflow-hidden md:w-[80%] md:mx-auto rounded-2xl lg:p-11 lg:h-fit lg:w-whoWeAreCardWidth">
            {/* <div className="bg-homePageCardGreen w-24 h-24 p-2 text-4xl grid place-items-center rounded-full "> */}
            <img src={icon} alt="img" className="md:block md:ml-10 lg:block xl:ml-0"/>
            {/* </div> */}
            <p className="pt-2 text-sm tracking-wide leading-loose md:w-[80%] md:mx-auto md:text-justify lg:p-2 lg:text-base">
              Global Performance Index (GPI) is an Indegenous and Innovative Information technology Company
              Providing Extensive Digital Transformation solutions And Business Automation For The Public And Private Sector
              <p className="pt-8">To Transform Business And Governance In Africa Through Measurable Improvements In Performance Via Digital Platforms And 
                Technology. The Global Performance Index International Is Poised To Be The Leading technological Platform For Digital Transformation In Africa.
                Solving Problems, Enhancing Efficiency And Optimizing Performance.

              </p>
            </p>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default WhoWeAre;
