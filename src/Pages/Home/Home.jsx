import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../Components/Assets/image 9.png";
import image2 from "../../Components/Assets/Group 66.png";
import image3 from "../../Components/Assets/logo.svg";
import homeImg from "../../Components/Assets/Component 8.png";

const data = [
  {
    Title: "Enterprise Software",
    break: "Development",
    Description: " Leverage our experience to create a solid software",
    DescriptionBreak: "foundation for your business.",
  },
  {
    Title: "Experienced ",
    break: "development Team",
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
        className="pt-4 sm:pt-16 w-homePageWidth grid place-items-center "
      >
        <div className="block sm:flex gap-24 pl-8 sm:pl-24">
          <section className="pt-0 sm:pt-24">
            <div>
              <div>
                <h1 className="text-4xl  sm:text-6xl font-bold tracking-wide leading-relaxed">
                  {currentInfo.Title}
                  <br /> {currentInfo.break}
                </h1>
                <p className="text-xl text-gray-600 pt-4 font-light">
                  {currentInfo.Description}
                  <br /> {currentInfo.DescriptionBreak}
                </p>
              </div>

              <button className="invisible md:visible border-2 border-green mt-4 py-3 px-8 rounded-lg cursor-pointer bg-green hover:bg-bg-bg-[#19643B]  text-white duration-300">
                Chat with our team
              </button>
            </div>
          </section>
          <section className="">
            {/* <div >
              <img src={bimage} alt="" className=""></img>
            </div> */}
            <div className="">
              <img src={homeImg} alt="home img" className=" w-full h-full " />
            </div>
          </section>

          <button className="visible md:invisible border-2 border-green mt-8 py-3 px-8 rounded-lg cursor-pointer bg-green hover:bg-bg-bg-[#19643B]  text-white duration-300">
            Chat with our team
          </button>
        </div>
        <div className="visible md:invisible justify-center items-center font-bold border-r-2 w-44 mt-12">
            <p>Our clients</p>
          </div>
        <section className=" bg-white px-8 mt-1 sm:mt-24 rounded-lg w-[85%] sm:w-[45%]  shadow-lg flex gap-8 justify-center items-center  ">
          <div className="hidden md:visible font-bold md:border-r-2 w-44">
            <p className="">Our clients</p>
          </div>
          <div className="md:pl-4 flex gap-12 md:gap-24 justify-center items-center  ">
            <div>
              <img
                src={image1}
                alt="logo"
                className=" duration-500  cursor-pointer w-32"
              />
            </div>
            <div>
              <img
                src={image2}
                alt="logo"
                className=" duration-500   cursor-pointer w-32"
              />
            </div>
            <div>
              <img
                src={image3}
                alt="logo"
                className=" duration-500 cursor-pointer w-32"
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
