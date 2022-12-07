import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../Components/Assets/image 9.png";
import image2 from "../../Components/Assets/image 5.svg";
import image4 from "../../Components/Assets/app-logo 1.svg";

import image3 from "../../Components/Assets/image 7.svg";
import homeImg from "../../Components/Assets/Component 8.png";
import bimage from "../../Components/Assets/Group 1.png";

import { Link } from "react-scroll";


const data = [
  {
    Title: "Enterprise Software",
    break: "Development",
    Description: " Leverage our experience to create a solid software",
    DescriptionBreak: "foundation for your business.",
  },
  {
    Title: "Experienced ",
    break: "Development Team",
    Description: " Our development team are loyal and have the necessary ",
    DescriptionBreak:
      "niche skill and deep expertise to scale your delivery capacity",
  },
];

const Experience = () => {
  const [currentInfo, setCurrentInfo] = useState(data[0]);

  useEffect(() => {
    const interval = setTimeout(() => {
      const dataLength = data.length;
      const currentInfoIndex = data.indexOf(currentInfo);
      let tempInfo =
        currentInfoIndex + 1 >= dataLength
          ? data[0]
          : data[currentInfoIndex + 1];

      setCurrentInfo(tempInfo);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentInfo]);
  return (
    <>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        key={1}
        className="pt-4 w-full px-8 grid place-items-center md:p-8 lg:px-0 "
      >
        <div className="flex flex-col gap-4 md:flex-row md:gap-48 lg:gap-24">
          <section className="pt-4 lg:pt-24 lg:pl-8">
            <div>
              <div>
                <h1 className="font-bold tracking-wide leading-relaxed text-3xl lg:text-5xl  lg:leading-relaxed lg:tracking-wide ">
                  {currentInfo.Title}
                  <br /> {currentInfo.break}
                </h1>
                <p className="absolute text-xs text-gray-600 pt-4 font-light lg:text-base lg:relative">
                  {currentInfo.Description}
                  <br /> {currentInfo.DescriptionBreak}
                </p>
              </div>

              <button className="hidden border-2 border-green mt-4 py-3 px-8  rounded-full cursor-pointer bg-green hover:bg-transparent hover:text-green  text-white duration-300 md:block md:px-4 md:mt-24 lg:mt-8">
              <Link
              to="contact"
              smooth={true}
              duration={700}
            >
              Chat with our team
              </Link>
              </button>
            </div>
          </section>
          <section className="relative flex ">
            <div className="">
              <img src={bimage} alt="home img" className="pt-4 md:w-[750px] " />
            </div>
            <div className="absolute">
              <img src={homeImg} alt="home img" className="  h-full mt-16  md:mt-0 lg:pt-11 lg:pl-28" />
            </div>
          </section>
          <button className=" block w-[200px] mt-24 border-2 border-green py-3 px-2 rounded-full cursor-pointer bg-green hover:bg-[#19643B]  text-white duration-300 md:hidden md:mt-4 md:px-8">
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
        <section className=" px-8 mt-11 rounded-lg flex flex-col  justify-center items-center md:bg-white md:gap-8  md:flex-row  ">
          <div className=" font-bold  ">
            <p>Our clients</p>
          </div>
          <div className="bg-white rounded-tr-lg flex gap-4 justify-center items-center md:px-4  md:gap-11 md:pl-4 md:border-l-2 lg:rounded-none">
            <div>
              <img
                src={image2}
                alt="logo"
                className=" duration-500 pt-4 cursor-pointer w-[135px]"
              />
            </div>
            <div>
              <img
                src={image1}
                alt="logo"
                className=" duration-500  pt-4 cursor-pointer w-[82px]"
              />
            </div>
            <div>
              <img
                src={image3}
                alt="logo"
                className=" duration-500  pt-4 cursor-pointer w-[99px] "
              />
            </div>
            <div>
              <img
                src={image4}
                alt="logo"
                className=" duration-500  pt-4 cursor-pointer w-[150px]"
              />
            </div>
          </div>
        </section>
      </motion.div>
      {/* </div> */}
    </>
  );
};

export default Experience;
