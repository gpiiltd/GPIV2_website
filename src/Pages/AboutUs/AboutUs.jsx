import React from "react";
import CustomLine from "../../Components/CustomLines/CustomLine";
import ContactUs from "../Contact/ContactUs";
import { motion } from "framer-motion";
import bgImage from "../../Components/Assets/Group 37340.png";

import icon1 from "../../Components/Assets/Group 37369.png";
import icon2 from "../../Components/Assets/Group 37371.png";
import icon3 from "../../Components/Assets/Group 37372.png";
import icon4 from "../../Components/Assets/Group 37373.png";
import icon5 from "../../Components/Assets/Group 37374.png";
import icon6 from "../../Components/Assets/Group 37370 (1).png";

import aboutImage from "../../Components/Assets/image 9.svg";
import aboutImage2 from "../../Components/Assets/Group 37432.svg";



const AboutUs = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        key={1}
        className=" pt-8 w-full lg:w-layoutWidth  lg:m-0 lg:m-auto lg:pt-16"
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
          <img src={aboutImage} alt="aboutImg" className="md:w-[758.39px]" />
        </div>
        <div className="text-white md:w-[464.92px]">
          <h1 className="text-4xl font-bold tracking-wide leading-normal lg:tracking-wider lg:leading-normal lg:text-5xl">
            We Assured,We Deliver.Team Effort
          </h1>
          <p className="pt-4 font-light  text-gray-200 tracking-wide lg:text-2xl  lg:font-thin">
            We have submitted projects to variuos clients and we receive great
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
          className="grid place-items-center lg:grid-cols-3"
        >
          {/* <div className="w-full h-[430.64px] bg-aboutImage2 bg-no-repeat lg:w-[482px]">
            
          </div> */}
          <div className="w-full h-[430.64px] ">
            <img src={aboutImage2} alt="..."></img>
            </div>
          <div className="absolute right-0">
            <img src={bgImage} alt=""></img>
          </div>
          <div className="text-black  lg:px-11 lg:col-span-2">
            <h1 className=" hidden text-4xl  font-bold tracking-wide leading-relaxed lg:block">
              What GPI is all about
            </h1>
            <div className="w-full">
              <p className="pt-8 text-xs tracking-wide leading-loose text-gray-500 lg:pr-11 lg:text-xl">
                GPI Has Become An Automation
                Solutions Company In Cutting Edge Technology For Digital
                Transformation Of Businesses In Africa. Having Recieved The ISO
                9001 Quality Award For Performance And Productivity, GPI Has
                Also Been Identified By The Nigerian Export Promotions
                council(NEPC) As A Nigerian Tech Platform Advancig
                Opportunities For The Nigerian Export Frontier.
              </p>
              <p className="pt-8 text-xs tracking-wide leading-loose text-gray-500 lg:text-xl">
                We Are An Information Technology Company Providing Extensive
                Digital Transformation Solutions And Business Automate For The
                Public And Private Sector.
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
        className="w-full px-4 items-center lg:m-auto lg:m-0 lg:w-layoutWidth"
      >
        <section className="flex flex-col justify-center items-center mb-11 lg:mb-24 ">
          <h1 className="text-2xl font-thin tracking-wide leading-relaxed lg:font-bold lg:text-4xl">
            Strategy and design
          </h1>
          <p className="text-xs tracking-wide  px-4 text-gray-600 text-center pt-4 font-thin lg:font-light lg:text-2xl">
            Our in-house business cunsultants and stragtegists has garnered the
            experiencento help you launch your ninnovative digital product
          </p>
        </section>

        <div className=" grid gap-y-8 place-items-center gap-x-0 mb-24 md:grid-cols-2 md:gap-x-4 lg:gap-y-2 lg:grid-cols-3 xl:gap-x-8">
          <motion.section
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            key={5}
            className=" bg-white px-8 py-8 drop-shadow-xl overflow-hidden rounded-2xl hover:translate-y-125 lg:w-aboutusCardWidth lg:h-aboutCardsHeight"
          >
            <div className=" text-4xl  ">
              <img src={icon1} alt="icon" />
            </div>
            <div>
              <h2 className="py-4 font-bold">Software development</h2>
              <p className="pt-4 font-thin text-gray-600 text-xs tracking-wide leading-relaxed lg:font-light  lg:text-base lg:text-black">
                Being a leading software development and IT company, we help you
                bring your most complex software vision to life with our
                leadding full-cycle custom application development service. So
                you can focus on delivering an incredible user experience that
                sets you apart from the competition
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
              <img src={icon6} alt="icon" />
            </div>
            <div>
              <h2 className="py-4 font-bold">Business Analytics</h2>
              <p className="pt-4 font-thin text-gray-600 text-xs tracking-wide leading-relaxed lg:font-light  lg:text-base lg:text-black">
                Our business analytics approach empowers you to intelligently
                aggregate and segment your data so that you can extract
                insightful conclusions that fuel smarter business decisions and
                in turn increase revenue and profit
              </p>
            </div>
          </motion.section>

          <section className="bg-white px-8 py-8 drop-shadow-xl overflow-hidden rounded-2xl hover:translate-y-125 lg:w-aboutusCardWidth lg:h-aboutCardsHeight">
            <div>
              <img src={icon2} alt="icon" />
            </div>
            <div>
              <h2 className="py-4 font-bold">Business Automation</h2>
              <p className="pt-4 font-thin text-gray-600 text-xs tracking-wide leading-relaxed  lg:font-light  lg:text-base lg:text-black">
                Using modern technologies, we build with efficiency and skill,
                creating flexible and scalable business-driven solutions
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
              <img src={icon3} alt="icon" />
            </div>
            <div>
              <h2 className="py-4 font-bold">Performance Management</h2>
              <p className="pt-4 font-thin text-gray-600 text-xs tracking-wide leading-relaxed lg:font-light  lg:text-base lg:text-black">
                We create products and solutions that help team leads, and
                supervisors assign, measure and review KPIs based on smart
                objective
              </p>
            </div>
          </motion.section>

          <section className="bg-white px-8 py-8 drop-shadow-xl overflow-hidden rounded-2xl hover:translate-y-125 lg:w-aboutusCardWidth lg:h-aboutCardsHeight">
            <div>
              <img src={icon4} alt="icon" />
            </div>
            <div>
              <h2 className="py-4 font-bold">Design</h2>
              <p className="pt-4 font-thin text-gray-600 text-xs tracking-wide leading-relaxed lg:font-light  lg:text-base lg:text-black">
                Our design approach is to simplify. Gaining insights from key
                stakeholders and the market at large, We embrace the joy of
                creating something unique that is easy for end users. So you can
                market your idea with confidence
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
              <img src={icon5} alt="icon" />
            </div>
            <div>
              <h2 className="py-4 font-bold">Training </h2>
              <p className="pt-4 font-thin text-gray-600 text-xs tracking-wide leading-relaxed lg:font-light  lg:text-base lg:text-black">
                We're equiped with expert knowledge across multiple
                technological specialisms. We train on industry best practices
                to help your business grow and utilize the ease that technology
                brings.
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
