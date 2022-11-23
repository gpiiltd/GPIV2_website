import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../Components/Assets/image 9.png";
import image2 from "../../Components/Assets/Group 66.png";
import image3 from "../../Components/Assets/logo.svg";
import homeImg from "../../Components/Assets/Component 8.png";
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
        className="pt-4 w-full px-8 grid place-items-center md:w-homePageWidth  lg:px-0 lg:pt-16 lg:px-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:gap-24">
          <section className="pt-4 lg:pt-24">
            <div>
              <div>
                <h1 className="text-3xl font-bold tracking-wide leading-relaxed md:text-6xl md:leading-relaxed md:tracking-wide">
                  {currentInfo.Title}
                  <br /> {currentInfo.break}
                </h1>
                <p className="absolute text-xs text-gray-600 pt-4 font-light md:text-xl md:relative">
                  {currentInfo.Description}
                  <br /> {currentInfo.DescriptionBreak}
                </p>
              </div>

              <button className="hidden border-2 border-green mt-4 py-3 px-8  rounded-lg cursor-pointer bg-green hover:bg-transparent hover:text-green  text-white duration-300 md:block ">
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
          <section className="">
            <div className="">
              <img src={homeImg} alt="home img" className=" w-full h-full mt-16  md:mt-0" />
            </div>
          </section>
          <button className=" block w-[200px] mt-2 border-2 border-green py-3 px-2 rounded-lg cursor-pointer bg-green hover:bg-[#19643B]  text-white duration-300 md:hidden md:mt-4 md:px-8">
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
        <section className="  px-8 mt-11 rounded-lg  flex flex-col gap-8 justify-center items-center lg:shadow-lg lg:w-[45%] lg:flex-row lg:bg-white lg:mt-24">
          <div className=" font-bold lg:border-r-2 ">
            <p>Our clients</p>
          </div>
          <div className="bg-white px-4 rounded-lg flex gap-11 justify-center items-center md:gap-24 md:pl-4">
            <div>
              <img
                src={image1}
                alt="logo"
                className=" duration-500 pt-4 cursor-pointer w-32"
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
                className=" duration-500  pt-4 cursor-pointer w-32"
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
