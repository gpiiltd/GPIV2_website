import React, { useEffect, useState } from "react";
import CustomLine from "../../Components/CustomLines/CustomLine";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { motion } from "framer-motion";
import { client } from "../../sanityClient";
import {PageLoader} from "/Users/apple/Documents/gpi_website/GPIV2_website/src/Components/PageLoader.tsx";

const OurProducts = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "projectsList"][0] {
          title,
          projects[] {
            title,
            subtitle,
            purpose,
            image {
              asset->{
                _id,
                url
              },
              alt
            },
            link
          }
        }
      `
      )
      .then((data) => {
        setProjectData(data);
      })
      .catch(console.error);
  }, []);

  if (!projectData) {
  return (
      <div className="flex justify-center items-center h-screen w-full">
        <PageLoader />
      </div>
    );
  }

  const products = projectData.projects;
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1100;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1100;
  };
  return (
    <>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        key={1}
        className="pt-8 w-full lg:m-auto lg:w-layoutWidth lg:pt-16"
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

        <div className="w-full mt-4 flex justify-center items-center place-items-center gap-y-8 mb-24 bg-green lg:mt-0">
          <MdOutlineKeyboardArrowLeft
            onClick={slideRight}
            className="text-8xl text-white cursor-pointer  left-0"
          />

          <div
            id="slider"
            className=" whitespace-nowrap overflow-scroll scrollbar-hide scroll-smooth place-items-center "
          >
            {products.map((item, index) => {
              return (
                <section
                  key={index}
                  className="text-white p-8  gap-8 inline-block"
                >
                  <div className="flex flex-col gap-8  justify-center items-center lg:flex-row">
                    <div>
                      <img
                        src={item.image?.asset?.url}
                        alt={item.image?.alt || "product"}
                        className="w-[80%] lg:w-full"
                      />
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

                      <p className="pt-4 w-[341px] whitespace-pre-line">
                        {item.subtitle}
                      </p>

                      <div className="flex gap-2 pt-4">
                        <a
                          href={item.link ?? "#"}
                          target="_blank"
                          className="border-b-2 border-white"
                          rel="noreferrer"
                        >
                          visit website
                        </a>
                        <MdOutlineKeyboardArrowRight className="mt-2 text-2xl" />
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
          <MdOutlineKeyboardArrowRight
            onClick={slideLeft}
            className="text-8xl text-white cursor-pointer"
          />
        </div>
      </motion.div>
    </>
  );
};

export default OurProducts;
