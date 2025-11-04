import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../Components/Assets/image 9.png";
import image2 from "../../Components/Assets/image 5.svg";
import image4 from "../../Components/Assets/app-logo 1.svg";
import image3 from "../../Components/Assets/image 7.svg";
import homeImg from "../../Components/Assets/Component 8.png";
import bimage from "../../Components/Assets/Group 1.png";
import { Link } from "react-scroll";
import { client } from "../../sanityClient";


const Experience = () => {
  const [currentInfo, setCurrentInfo] = useState(null);
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "heroSection"][0]{
          firstSlideTitle,
          firstSlideDescription,
          secondSlideTitle,
          secondSlideDescription
        }`
      )
      .then((data) => setHeroData(data))
      .catch(console.error);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const slides = heroData
    ? [
        {
          title: heroData.firstSlideTitle,
          description: heroData.firstSlideDescription,
        },
        {
          title: heroData.secondSlideTitle,
          description: heroData.secondSlideDescription,
        },
      ]
    : [];

  useEffect(() => {
    if (!heroData || slides.length === 0) return; // Don't run until data is loaded

    const interval = setTimeout(() => {
      const dataLength = slides.length;
      const currentInfoIndex = slides.findIndex(
        (slide) =>
          slide.title === currentInfo?.title &&
          slide.description === currentInfo?.description
      );

      let tempInfo =
        currentInfoIndex + 1 >= dataLength
          ? slides[0]
          : slides[currentInfoIndex + 1];

      setCurrentInfo(tempInfo);
    }, 3000);

    return () => clearTimeout(interval);
  }, [currentInfo, heroData, slides]);

  if (!heroData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        key={1}
        className="pt-4 w-full   grid place-items-center md:p-8 lg:px-0 "
      >
        <div className="max-w-[85%] mx-auto grid lg:grid-cols-2 gap-4 items-center pt-6">
          {/* Left Content */}
          <div className="pt-8 pb-0 lg:pt-0 space-y-4">
            {currentInfo ? (
              <>
                <h1 className="font-bold tracking-wide leading-relaxed text-3xl lg:text-5xl lg:leading-tight lg:tracking-wide text-gray-900">
                  {currentInfo.title}
                </h1>
                <p className="text-sm text-gray-600 pt-4 font-light lg:text-base">
                  {currentInfo.description}
                </p>
                 <div className="">
              {/* Mobile Button */}
              <button className="block w-[200px] mt-8 border-2 border-green py-3 px-2 rounded-full cursor-pointer bg-green hover:bg-[#19643B] text-white duration-300 ">
                <Link to="contact" smooth={true} duration={700}>
                  Chat with our team
                </Link>
              </button>
            </div>
              </>
            ) : (
              // Skeleton Loader / Placeholder
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              </div>
            )}

           
          </div>
          {/* Right Image */}
          <div className="relative z-10 w-full aspect-[4/3] overflow-hidden">
            <img
              src={bimage}
              alt="Hero section"
              className="w-full h-full object-cover object-center"
            />
            <img
              src={homeImg}
              alt="Overlay"
              className="absolute inset-0 w-3/4 h-auto object-contain mx-auto translate-y-10 lg:translate-x-12"
            />
          </div>
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
