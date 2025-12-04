import React from "react";
import CustomLine from "../../Components/CustomLines/CustomLine";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import bimage from "../../Components/Assets/Group 1.png";

const WhyChoseUs = ({ whyChooseuseOne, whyChooseuseTwo }) => {
  return (
    <motion.div
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      key={1}
      className="pt-24 h-full w-full place-items-center md:px-0 md:pt-48 md:w-layoutWidth md:m-auto"
    >
      <section className="flex gap-2 lg:gap-11 w-full max-w-full">
        <div className="flex-1 min-w-0">
          {" "}
          {/* Important for flex items */}
          <CustomLine />
        </div>
        <div className="mb-4 flex-shrink-0">
          <h1 className="lg:tracking-wide lg:text-3xl">Why choose us</h1>
        </div>
      </section>

      <div className=" flex flex-col lg:flex-row  ">
        <section className="lg:pt-28 lg:mr-24">
          <div className="px-4">
            <h1 className="text-3xl tracking-wide leading-normal lg:leading-tight lg:text-5xl lg:font-bold">
              WE PROMISE <br />
              WE DELIVER
            </h1>
            <button className="hidden border-2 border-green mt-4 py-3 px-8 rounded-full cursor-pointer bg-green hover:bg-transparent hover:text-black text-white duration-300 lg:block">
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
        <section className=" flex justify-center items-center md:items-start md:justify-start lg:justify-center ">
          <div className="relative  ">
            <img src={bimage} alt="..." className="w-[650px] "></img>
          </div>
          <div className="pt-4 absolute  flex gap-4  justify-center items-center md:gap-8 md:justify-start  lg:pt-0 lg:gap-4 lg:pl-0">

            <div className="py-11 w-40 px-5 h-auto overflow-visible bg-black rounded-tl-[70px] rounded-br-[70px] text-white grid place-items-center mt-24 md:h-96 md:w-64 lg:py-12 lg:ml-28">
              <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-base">
                {whyChooseuseOne}
              </p>
            </div>

            <div className="py-11 w-40 px-5 h-auto overflow-visible bg-homePageCardGreen rounded-tl-[70px] rounded-br-[70px] grid place-items-center md:h-96 md:w-64 lg:py-12">
              <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-base">
                {whyChooseuseTwo}
              </p>
            </div>
          </div>
        </section>
        <button className="block w-[200px] border-2 border-green mt-24 mx-4 px-4 py-2 rounded-full cursor-pointer bg-green hover:bg-transparent hover:text-black text-white duration-300 md:mt-1 lg:hidden lg:px-8 lg:py-3">
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
