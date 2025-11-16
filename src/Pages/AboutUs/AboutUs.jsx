import React, { useEffect, useState } from "react";
import CustomLine from "../../Components/CustomLines/CustomLine";
import ContactUs from "../Contact/ContactUs";
import { motion } from "framer-motion";
import bgImage from "../../Components/Assets/Group 37340.png";
import { client } from "../../sanityClient";

const AboutUs = () => {
  const [aboutUsData, setaboutUsData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "aboutGpi"][0]{
          aboutHeroImageMain {
            asset->{
              url
            }
          },
          aboutHeroTitle,
          aboutHeroSubTitle,
          teamEffortImage {
            asset->{
              url
            }
          },
          aboutGpiFirstSlideTitle1,
          aboutGpiFirstSlideTitle2,
          logo1 {
            asset->{
              url
            }
          },
          logo2 {
            asset->{
              url
            }
          },
          logo3 {
            asset->{
              url
            }
          },
          logo4 {
            asset->{
              url
            }
          },
          logo5 {
            asset->{
              url
            }
          },
          logo6 {
            asset->{
              url
            }
          },
          StrategyText,
          StrategyText1,
          StrategyText2,
          StrategyText3,
          StrategyText4,
          StrategyText5,
          StrategyText6,
        }`
      )
      .then((data) => {
        console.log("Sanity Hero Data:", data); // Add this line
        setaboutUsData(data);
      })
      .catch(console.error);
  }, []);
  if (!aboutUsData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        key={1}
        className=" pt-8 w-full lg:w-layoutWidth lg:m-auto lg:pt-16"
      >
        <section className="flex gap-2 lg:gap-11 px-6 lg:px-0">
          <div className="mb-4">
            <h1 className="lg:tracking-wide lg:text-3xl">About Us</h1>
          </div>
          <CustomLine />
        </section>
      </motion.div>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        key={2}
        className=" mt-11 pt-8 py-11 mb-11 bg-[#19683B] px-4 items-center place-items-center grid  lg:grid-cols-2 lg:pl-11 lg:h-[693px]"
      >
        <div>
          {/* <LazyImage
              src={
                aboutUsData?.aboutHeroImageMain?.asset?.url ||
                "/default-image.jpg"
              }
              alt="Gpi about Image"
              className="w-sm md:w-[758.39px]"
            /> */}
          <img
            src={aboutUsData?.aboutHeroImageMain?.asset?.url}
            alt="Company Logo"
            className="w-sm md:w-[758.39px]"
          />
        </div>
        <div className="text-white md:w-[464.92px]">
          <h1 className="text-4xl font-bold tracking-wide leading-normal lg:tracking-wider lg:leading-normal lg:text-5xl">
            We Assured,We Deliver.Team Effort
          </h1>
          <p className="pt-4 font-light  text-gray-200 tracking-wide lg:text-2xl  lg:font-thin">
            We have submitted projects to various clients and we received great
            reviews
          </p>
        </div>
      </motion.div>
      <section className="pt-8 py-11  w-full  mb-11 px-4">
        <h1 className="mb-11  text-4xl tracking-wider leading-relaxed lg:font-bold lg:hidden">
          What GPI is All About
        </h1>

        <motion.div
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
          key={3}
          className="relative grid place-items-center lg:grid-cols-3 gap-8 lg:gap-12 md:mx-35"
        >
          {/* Image Section - Left Side */}
          <div className="w-full lg:col-span-1 flex justify-center">
            <div className="w-full max-w-[482px] h-[430.64px] flex items-center justify-center">
              {/* <img
                src={
                  aboutUsData?.teamEffortImage?.asset?.url ||
                  "/default-image.jpg"
                }
                alt="Team effort"
                className="w-full h-full object-cover rounded-lg"
              /> */}
              <img
                src={aboutUsData?.teamEffortImage?.asset?.url}
                alt="Company Logo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Background Pattern - Absolute positioned */}
          {/* <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 z-0">
            <img
              src={bgImage}
              alt="background pattern"
              className="opacity-50"
            />
          </div> */}

          {/* Text Content - Right Side */}
          <div className="relative z-10 text-black lg:col-span-2 lg:px-11">
            <h1 className="text-2xl font-bold tracking-wide leading-relaxed lg:text-4xl">
              What GPI is all about
            </h1>
            <div className="w-full mt-8 space-y-6">
              <p className="text-xs tracking-wide leading-loose text-gray-500 lg:text-xl lg:pr-11">
                {aboutUsData?.aboutGpiFirstSlideTitle1}
              </p>
              <p className="text-xs tracking-wide leading-loose text-gray-500 lg:text-xl">
                {aboutUsData?.aboutGpiFirstSlideTitle2}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="absolute right-0">
        <img src={bgImage} alt=""></img>
      </div>

      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        key={4}
        className="w-full px-4 items-center lg:m-auto lg:w-layoutWidth"
      >
        <section className="flex flex-col justify-center items-center mb-11 lg:mb-24 ">
          <h1 className="text-2xl font-thin tracking-wide leading-relaxed lg:font-bold lg:text-4xl">
            Strategy and design
          </h1>
          <p className="text-xs tracking-wide  px-4 text-gray-600 text-center pt-4 font-thin lg:font-light lg:text-2xl">
            Our in-house business cunsultants and stragtegists has garnered the
            experiencento help you launch your innovative digital product
          </p>
        </section>

        <div className=" grid gap-y-8 place-items-center gap-x-0 mb-24 lg:grid-cols-2 md:gap-x-4 lg:gap-y-2 xl:grid-cols-3 xl:gap-x-8">
          <motion.section
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            key={5}
            className=" bg-white px-8 py-8 drop-shadow-xl overflow-hidden rounded-2xl hover:translate-y-125 lg:w-aboutusCardWidth lg:h-aboutCardsHeight"
          >
            <div className=" text-4xl  ">
              <img src={aboutUsData?.logo1?.asset?.url} alt="icon" />
            </div>
            <div>
              <h2 className="py-4 font-bold">Software development</h2>
              <p className="pt-4 font-thin text-gray-600 text-xs tracking-wide leading-relaxed lg:font-light  lg:text-base lg:text-black">
                {aboutUsData?.StrategyText1}
              </p>
            </div>
          </motion.section>

          <motion.section
            whileInView={{ y: [60, 0], opacity: [0, 2] }}
            transition={{ duration: 1.0 }}
            key={6}
            className="bg-white px-8 py-8 drop-shadow-xl overflow-hidden rounded-2xl hover:translate-y-125 lg:w-aboutusCardWidth lg:h-aboutCardsHeight"
          >
            <div>
              <img src={aboutUsData?.logo2?.asset?.url} alt="icon" />
            </div>
            <div>
              <h2 className="py-4 font-bold">Business Analytics</h2>
              <p className="pt-4 font-thin text-gray-600 text-xs tracking-wide leading-relaxed lg:font-light  lg:text-base lg:text-black">
                {aboutUsData?.StrategyText2}
              </p>
            </div>
          </motion.section>

          <section className="bg-white px-8 py-8 drop-shadow-xl overflow-hidden rounded-2xl hover:translate-y-125 lg:w-aboutusCardWidth lg:h-aboutCardsHeight">
            <div>
              <img src={aboutUsData?.logo3?.asset?.url} alt="icon" />
            </div>
            <div>
              <h2 className="py-4 font-bold">Business Automation</h2>
              <p className="pt-4 font-thin text-gray-600 text-xs tracking-wide leading-relaxed  lg:font-light  lg:text-base lg:text-black">
                {aboutUsData?.StrategyText3}
              </p>
            </div>
          </section>
          <motion.section
            whileInView={{ y: [60, 0], opacity: [0, 2] }}
            transition={{ duration: 1.2 }}
            key={7}
            className="bg-white px-8 py-8 drop-shadow-xl overflow-hidden rounded-2xl hover:translate-y-125 lg:w-aboutusCardWidth lg:h-aboutCardsHeight"
          >
            <div>
              <img src={aboutUsData?.logo4?.asset?.url} alt="icon" />
            </div>
            <div>
              <h2 className="py-4 font-bold">Performance Management</h2>
              <p className="pt-4 font-thin text-gray-600 text-xs tracking-wide leading-relaxed lg:font-light  lg:text-base lg:text-black">
                {aboutUsData?.StrategyText4}
              </p>
            </div>
          </motion.section>

          <section className="bg-white px-8 py-8 drop-shadow-xl overflow-hidden rounded-2xl hover:translate-y-125 lg:w-aboutusCardWidth lg:h-aboutCardsHeight">
            <div>
              <img src={aboutUsData?.logo5?.asset?.url} alt="icon" />
            </div>
            <div>
              <h2 className="py-4 font-bold">Design</h2>
              <p className="pt-4 font-thin text-gray-600 text-xs tracking-wide leading-relaxed lg:font-light  lg:text-base lg:text-black">
                {aboutUsData?.StrategyText5}
              </p>
            </div>
          </section>

          <motion.section
            whileInView={{ y: [60, 0], opacity: [0, 2] }}
            transition={{ duration: 1.0 }}
            key={8}
            className="bg-white px-8 py-8 drop-shadow-xl overflow-hidden rounded-2xl hover:translate-y-125 lg:w-aboutusCardWidth lg:h-aboutCardsHeight"
          >
            <div>
              <img src={aboutUsData?.logo6?.asset?.url} alt="icon" />
            </div>
            <div>
              <h2 className="py-4 font-bold">Training </h2>
              <p className="pt-4 font-thin text-gray-600 text-xs tracking-wide leading-relaxed lg:font-light  lg:text-base lg:text-black">
                {aboutUsData?.StrategyText6}
              </p>
            </div>
          </motion.section>
        </div>
      </motion.div>

      <ContactUs />
    </>
  );
};

export default AboutUs;
