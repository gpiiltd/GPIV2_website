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
      className=" pt-48 h-full  w-layoutWidth m-0 m-auto  place-items-center "
    >
      <section className="flex gap-11  ">
        <CustomLine />
        <div className="mb-4">
          <h1 className="text-3xl tracking-wide ">Why choose us</h1>
        </div>
      </section>

      <div className="flex ">
        <section className="pt-28">
          <div>
            <h1 className="text-6xl  tracking-wide leading-relaxed">
              We promise <br /> We deliver
            </h1>

            <button className="border-2 border-green mt-4 py-3 px-8 rounded-xl cursor-pointer bg-green hover:bg-transparent hover:text-black text-white duration-300">
              Chat with our team
            </button>
          </div>
        </section>
        <section className=" flex gap-11">
          <div className="relative">
            <img src={bimage} alt="..." className=""></img>
          </div>
          <div className="absolute flex gap-8 pt-24 pl-24">
            <div className="  w-64 h-96 bg-black p-11 rounded-tl-[70px] rounded-br-[70px] text-white grid place-items-center mt-11  ">
              <p>
                We are skilled professionals that apply our passion for
                technology to create successfull products and solutions for our
                clients
              </p>
            </div>
            <div className=" w-64 h-96 bg-homePageCardGreen p-11 rounded-tl-[70px] rounded-br-[70px] grid place-items-center ">
              <p>
                Our design-focused approach and project execution processes help
                you to deliver the right solutions at the right time{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default WhyChoseUs;
