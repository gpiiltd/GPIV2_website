import React from "react";
import CustomLine from "../../Components/CustomLines/CustomLine";
import image1 from "../../Components/Assets/Group 37383.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import image2 from "../../Components/Assets/Group 37385 (1).svg";
import image3 from "../../Components/Assets/Group 37387 (1).svg";
import image4 from "../../Components/Assets/Group 37379.svg";
import { motion } from "framer-motion";

const OurProducts = () => {
  const products = [
    {
      title: "user Management",
      image: image1,
      h1: "Lagos ideation innovate",
      desc: "We are a degital transformation consultancy and software development company providing cutting-edge engineering solutions.We proactively consult, design, develop & scale robust web, mobile & cuustom software solutions that fuel innovation & deliver digital success!",
      productLink: "visit website",
    },
    {
      title: "Card Management",
      image: image2,
      h1: "Providus Bank ",
      desc: "We are a degital transformation consultancy and software development company providing cutting-edge engineering solutions.We proactively consult, design, develop & scale robust web, mobile & cuustom software solutions that fuel innovation & deliver digital success!",
      productLink: "visit website",
    },
    {
      title: "Oil & Gas",
      image: image3,
      h1: "Gas Plus",
      desc: "Gas plus Synergy limited (GPSL) is a distinguish company in the African gas sector specialising in gas field development, maintainance conveyance and value optimisation. Gasplus software helps to create onshore and offshore production support, Gas trade and aggregation enablement",
      productLink: "visit website",
    },
    {
      title: "ecommerce",
      image: image4,
      h1: "Barafiri",
      desc: "This Software helps to measure the level of success in reaching your business objectives, by monitoring and analyzing key information, Gives access to template that shows detailed reporting or various performance improvements, and also help review the level of employee effectives, efficiency and quality of work in real time.",
      productLink: "visit website",
    },
  ];
  const slideLeft =() => {
    let slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 1100
  }

  const slideRight =() => {
    let slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 1100
  }
  return (
    <>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        key={1}
        className="pt-8 w-full lg:m-0 lg:m-auto lg:w-layoutWidth lg:pt-16"
      >
        <section className="flex gap-2 lg:gap-11 px-6 lg:px-0">
          <div className="mb-2">
            <h1 className="lg:tracking-wide lg:text-3xl">Our Products</h1>
          </div>
          <CustomLine />
        </section>

        <section className="hidden flex flex-col justify-center items-center mb-24 lg:block">
          <p className="text-2xl text-gray-600 text-center pt-4 font-light">
            With the use of software engineering best practices for our
            development processes, we've created bespoke software solutions
            based on client's needs
            <br />
          </p>
        </section>
       

        <h1 className="text-lg tracking-wide leading-relaxed text-center lg:font-bold pt-4 lg:text-2xl lg:hidden">
          Have a Look At Our Products
        </h1>

        <div className=" w-full mt-4 flex justify-center items-center place-items-center gap-y-8 mb-24 bg-green lg:mt-0">
          <MdOutlineKeyboardArrowLeft onClick={slideRight} className="text-8xl text-white cursor-pointer  left-0" />

          <div id="slider" className=" whitespace-nowrap overflow-scroll scrollbar-hide scroll-smooth place-items-center ">
            {products.map((item, index) => {
              return (
                <section key={index} className="text-white p-8  gap-8 inline-block">
                  <div className="flex flex-col gap-8  justify-center items-center lg:flex-row">
                  <div>
                    <img src={item.image} alt="product" className="w-[80%] lg:w-full"></img>
                  </div>
                  <div className=" place-items-center lg:pt-24">
                    <div className="bg-white text-center text-green w-[240px] ">
                      <h1 className="bg-white text-center text-green w-[240px] py-2 ">
                        {item.title}{" "}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold pt-4">{item.h1}</h1>
                    </div>

                    <p className="pt-4 w-[341px] whitespace-pre-line">{item.desc}</p>

                    <div className="flex gap-2 pt-4">
                      <a href="#f" className="border-b-2 border-white">
                        {item.productLink}
                      </a>
                      <MdOutlineKeyboardArrowRight  className="mt-2 text-2xl" />
                    </div>
                  </div>
                  </div>
                </section>
              );
            })}
          </div>
          <MdOutlineKeyboardArrowRight onClick={slideLeft}className="text-8xl text-white cursor-pointer" />
        </div>
        </motion.div>
      
    </>
  );
};

export default OurProducts;
