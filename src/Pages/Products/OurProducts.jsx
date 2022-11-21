import React from "react";
import CustomLine from "../../Components/CustomLines/CustomLine";
import image1 from "../../Components/Assets/image 9.png";
import image2 from "../../Components/Assets/Group 66.png";
import image3 from "../../Components/Assets/logo.svg";
import image4 from "../../Components/Assets/GPI PAS LOGO.png";
import { motion } from "framer-motion";

const OurProducts = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        key={1}
        className=" pt-48  w-layoutWidth  m-0 m-auto"
      >
        <section className="flex gap-11 mb-8">
          <div className="mb-2">
            <h1 className="text-3xl tracking-wide ">Our Products</h1>
          </div>
           <CustomLine />
        </section>

        <section className="flex flex-col justify-center items-center mb-24 ">
          {/* <h1 className="text-4xl font-bold tracking-wide leading-relaxed">
          The company owns proprietary software solutions
        </h1> */}
          <p className="text-2xl text-gray-600 text-center pt-4 font-light">
            With the use of software engineering best practices for our
            development processes, we've created bespoke software solutions
            based on client's needs
            <br />
          </p>
        </section>

        <div className="grid grid-cols-2 place-items-center gap-y-8 mb-24">
          <section className="bg-white p-11 drop-shadow-xl w-productsCardWidth h-productsCardHeight overflow-hidden rounded-2xl flex justify-center items-center">
            <div className="">
              <img src={image4} alt="logo" />
            </div>
          </section>

          <section className=" w-productsCardWidth2 h-productscardHeight2 bg-[#192327] text-white px-11 drop-shadow-xl   rounded-2xl flex justify-center items-center">
            <div className="">
              <button className="bg-[#5BD9C7] mt-8 px-8 rounded">
                HR TOOL
              </button>

              <h2 className="py-4  font-bold text-2xl">GPI PAS</h2>
              <p className="pt-4 font-light leading-[2rem] text-ellipsis ">
                We are a degital transformation consultancy and software
                development company providing cutting-edge engineering
                solutions. We proactively consult, design, develop & scale
                robust web, mobile & cuustom software solutions that fuel
                innovation & deliver digital success!
              </p>
            </div>
          </section>

          <section className="  bg-white  p-11 drop-shadow-xl w-productsCardWidth h-productsCardHeight overflow-auto rounded-2xl flex justify-center items-center">
            <div className="">
              <img src={image1} alt="logo" />
            </div>
          </section>
          <section className="bg-[#19683B] text-white p-11 drop-shadow-xl  w-productsCardWidth2 h-productscardHeight2 overflow-auto rounded-2xl flex justify-center items-center">
            <div>
              <button className="bg-[#FDAA60] px-8 rounded mt-8">
                Oil & gas
              </button>

              <h2 className="py-4 font-bold text-2xl">GAS PLUS</h2>
              <p className="pt-4 font-light leading-[2rem]">
                We are a degital transformation consultancy and software
                development company providing cutting-edge engineering
                solutions. We proactively consult, design, develop & scale
                robust web, mobile & cuustom software solutions that fuel
                innovation & deliver digital success!
              </p>
            </div>
          </section>

          <section className=" w-productsCardWidth h-productsCardHeight bg-white p-11 drop-shadow-xl w-productsCardWidth h-productsCardHeight overflow-hidden rounded-2xl flex justify-center items-center">
            {/* <div className="bg-green-300 w-24 h-24 p-2 text-4xl grid place-items-center rounded-full">
            </div> */}
            <div className="">
              <img src={image3} alt="logo" />
            </div>
          </section>

          <section className=" w-productsCardWidth h-productsCardHeight bg-[#137466] text-white p-11 drop-shadow-xl w-productsCardWidth2 h-productscardHeight2 overflow-auto rounded-2xl">
            {/* <div className="bg-green-300 w-24 h-24 p-2 text-4xl grid place-items-center rounded-full">
            </div> */}
            <div>
              <button className="bg-[#C3BFF4] px-8 rounded">e commerce</button>

              <h2 className="py-4 font-bold text-2xl">Barafiri</h2>
              <p className="pt-4 font-light leading-[2rem] ">
                We are a degital transformation consultancy and software
                development company providing cutting-edge engineering
                solutions. We proactively consult, design, develop & scale
                robust web, mobile & cuustom software solutions that fuel
                innovation & deliver digital success!
              </p>
            </div>
          </section>

          <section className=" w-productsCardWidth h-productsCardHeight bg-white p-11 drop-shadow-xl w-productsCardWidth h-productsCardHeight overflow-hidden rounded-2xl flex justify-center items-center">
            {/* <div className="bg-green-300 w-24 h-24 p-2 text-4xl grid place-items-center rounded-full">
            </div> */}
            <div className="">
              <img src={image2} alt="logo" />
            </div>
          </section>
          <section className=" w-productsCardWidth h-productsCardHeight bg-[#19683B] text-white p-11 drop-shadow-xl w-productsCardWidth2 h-productscardHeight2 overflow-auto rounded-2xl ">
            {/* <div className="bg-green-300 w-24 h-24 p-2 text-4xl grid place-items-center rounded-full">
            </div> */}
            <div>
              <button className="bg-[#FDAA60] px-8 rounded">
                Card management
              </button>

              <h2 className="  py-4 font-bold text-2xl">Providus</h2>
              <p className="pt-4 font-light leading-[2rem]  ">
                We are a degital transformation consultancy and software
                development company providing cutting-edge engineering
                solutions. We proactively consult, design, develop & scale
                robust web, mobile & cuustom software solutions that fuel
                innovation & deliver digital success!
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default OurProducts;
