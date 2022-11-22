import React from "react";
import CustomLine from "../../Components/CustomLines/CustomLine";
import { motion } from "framer-motion";

import bimage from "../../Components/Assets/Group 1.png";
// import image1 from "../../Components/Assets/image 9.png";
// import image2 from "../../Components/Assets/Group 66.png";
// import image3 from "../../Components/Assets/logo.svg";

const WhyChoseUs = () => {
  return (
    <motion.div
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      key={1}
      className=" pt-48 h-full  w-layoutWidth  m-auto  place-items-center "
    >
      <section className="ml-4 sm:ml-0 w-[75%] sm:w-[95%] flex gap-4  sm:gap-11 ">
        <CustomLine />
        <div className="mb-4">
          <h1 className="text-3xl tracking-wide ">Why choose us</h1>
        </div>
      </section>

      <div className="sm:flex ">
        <section className="pt-28 mr-24">
          <div className="w-full">
            <h1 className="text-3xl sm:text-6xl w-full tracking-wide leading-relaxed">
              We promise <br /> We deliver
            </h1>

            <button className="invisible md:visible border-2 border-green mt-4 py-3 px-8 rounded-xl cursor-pointer bg-green hover:bg-transparent hover:text-black text-white duration-300">
              Chat with our team
            </button>
          </div>
        </section>
        <section className=" flex gap-11">
          <div className="relative">
            <img src={bimage} alt="..." className=""></img>
          </div>
          <div className="absolute flex gap-4 sm:gap-8 sm:pt-24 sm:pl-24">
            <div className="  sm:w-64 sm:h-96 bg-black p-5 py-12 sm:p-11 rounded-tl-[70px] rounded-br-[70px] text-white grid place-items-center sm:mt-11  ">
              <p>
                We are skilled professionals that apply our passion for
                technology to create successfull products and solutions for our
                clients
              </p>
            </div>
            <div className=" sm:w-64 sm:h-96 bg-homePageCardGreen p-5 py-12 sm:p-11 rounded-tl-[70px] rounded-br-[70px] grid place-items-center ">
              <p>
                Our design-focused approach and project execution processes help
                you to deliver the right solutions at the right time{" "}
              </p>
            </div>
          </div>
        </section>
        <button className="visible md:invisible border-2 border-green mt-52 py-3 px-8 rounded-xl cursor-pointer bg-green hover:bg-transparent hover:text-black text-white duration-300">
          Chat with our team
        </button>
      </div>
    </motion.div>
  );
};

export default WhyChoseUs;
