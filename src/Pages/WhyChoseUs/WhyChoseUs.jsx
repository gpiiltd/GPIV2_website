import React from "react";
import CustomLine from "../../Components/CustomLines/CustomLine";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
      className="pt-24 h-full w-full  px-8 place-items-center lg:px-0 lg:pt-48 lg:w-layoutWidth lg:m-auto"
    >
      <section className="flex gap-2 lg:gap-11 ">
        <CustomLine />
        <div className="mb-4">
          <h1 className="lg:tracking-wide lg:text-3xl">Why choose us</h1>
        </div>
      </section>

      <div className=" flex flex-col lg:flex-row ">
        <section className="  lg:pt-28 lg:mr-24">
          <div className="">
            <h1 className="text-5xl tracking-wide leading-normal lg:leading-relaxed lg:text-6xl">
              We promise We deliver
            </h1>
            <button className="hidden border-2 border-green mt-4 py-3 px-8 rounded-xl cursor-pointer bg-green hover:bg-transparent hover:text-black text-white duration-300 md:block">
              <Link
                to="contact"
                smooth={true}
                duration={700}
                className="cursor-pointer"
              >
                Chat with our team
              </Link>
            </button>
          </div>
        </section>
        <section className=" flex ">
          <div className="relative">
            <img src={bimage} alt="..." className=""></img>
          </div>
          <div className="pt-4 absolute flex gap-4 gap-8 lg:pt-24  lg:pl-0">
            <div className="px-5 sm:w-64 sm:h-96 bg-black  rounded-tl-[70px] rounded-br-[70px] text-white grid place-items-center sm:mt-11 lg:py-12 ">
              <p>
                We are skilled professionals that apply our passion for
                technology to create successfull products and solutions for our
                clients
              </p>
            </div>
            <div className="mr-4 sm:w-64 sm:h-96 bg-homePageCardGreen p-5 rounded-tl-[70px] rounded-br-[70px] grid place-items-center lg:py-12 ">
              <p>
                Our design-focused approach and project execution processes help
                you to deliver the right solutions at the right time{" "}
              </p>
            </div>
          </div>
        </section>
        <button className="block w-[200px] border-2 border-green mt-24 px-4 py-2   rounded-xl cursor-pointer bg-green hover:bg-transparent hover:text-black text-white duration-300 md:hidden lg:px-8 lg:py-3">
          <Link
            to="contact"
            smooth={true}
            duration={700}
            className="cursor-pointer"
          >
            Chat with our team
          </Link>
        </button>
      </div>
    </motion.div>
  );
};

export default WhyChoseUs;
