import React from "react";
import CustomLine from "../../Components/CustomLines/CustomLine";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import bimage from "../../Components/Assets/Group 1.png";


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
            <h1 className="text-5xl tracking-wide leading-normal lg:leading-tight lg:text-5xl lg:font-bold">
              WE PROMISE <br />WE DELIVER
            </h1>
            <button className="hidden border-2 border-green mt-4 py-3 px-8 rounded-full cursor-pointer bg-green hover:bg-transparent hover:text-black text-white duration-300 md:block">
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
            <img src={bimage} alt="..." className="w-[730px]"></img>
          </div>
          <div className="pt-4 absolute flex gap-4 gap-8 lg:pt-24  lg:pl-0">
            <div className="px-5 py-5 h-80 bg-black overflow-scroll rounded-tl-[70px] rounded-br-[70px] text-white grid place-items-center sm:mt-11 md:h-96 md:w-64 md:overflow-visible lg:py-12 lg:ml-28">
              <p>
                GPI is the stop center of solutions that enhances performance, productivity, and integrity through processes founded on universal truths, and professional rules for standardization and sustainable wealth creation
              </p>
            </div>
            <div className="mr-4 h-80 overflow-scroll bg-homePageCardGreen p-5 rounded-tl-[70px] rounded-br-[70px] grid place-items-center md:h-96 md:w-64 md:overflow-visible lg:py-12 ">
              <p>
               We are focused on helping businesses in automating their processes exponentially in order to have a system that increases business productivity and ensures data integrity as well as efficient communication. In addition to automation, we manage the overall productivity within your organization
              </p>
            </div>
          </div>
        </section>
        <button className="block w-[200px] border-2 border-green mt-24 px-4 py-2   rounded-full cursor-pointer bg-green hover:bg-transparent hover:text-black text-white duration-300 md:hidden lg:px-8 lg:py-3">
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
