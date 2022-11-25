import CustomLine from "../../Components/CustomLines/CustomLine";
import React, { useState } from "react";

import { BsFillCaretDownFill } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";

const WhatWeOffer = () => {
  // const texts = [
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  //   "wLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  //   "wLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  //   "wLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  //   "wLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  // ];

  const [state, setState] = useState(false);

  const showDropDown = () => {
    setState(true);
  };
  const HideDropDown = () => {
    setState(false);
  };
  return (
    <>
      <div className=" pt-24  w-layoutWidth  m-auto lg:pt-48">
        <section className="flex gap-2 lg:gap-11 ">
          <div className="mb-4">
            <h1 className="lg:tracking-wide lg:text-3xl">What we offer</h1>
          </div>
          <CustomLine />
        </section>

        <section className="sm:flex gap-4 pt-8 ">
          <div className="bg-lBrown font-lg text-2xl rounded-2xl relative lg:text-2xl">
            <div
              className="p-8 flex gap-4 md:gap-11 md:w-[400px]"
              onMouseEnter={showDropDown}
              onMouseLeave={HideDropDown}
            >
              Bespoke Solutions
              <BsFillCaretDownFill className="mt-2" />
            </div>
            {state ? (
              <ul className="px-8 bg-lBrown inline-block absolute w-full inset-x-0 pb-8 rounded-xl">
                <li className="flex gap-2">
                  <FaRegDotCircle className="mt-1 gap-2" />
                  Solution 1
                </li>
                <li className="flex gap-2">
                  <FaRegDotCircle className="mt-1 gap-2" />
                  Solution 2
                </li>
              </ul>
            ) : null}
          </div>

          <div className="bg-lblue   font-lg text-2xl rounded-2xl mt-12 sm:mt-0">
            <div className="p-8 flex gap-4 md:gap-11 wrap-no-wrap relative md:w-[400px]">
              Business Support
              <BsFillCaretDownFill className="mt-2" />
            </div>
          </div>
          <div className="bg-lgray font-lg text-2xl rounded-2xl  mt-12 sm:mt-0">
            <div
              className="p-6 flex gap-4 md:gap-11 wrap-no-wrap relative md:w-[400px]"
              // onMouseEnter={showDropDown}
              onMouseLeave={HideDropDown}
            >
              Enterprise Solution
              <BsFillCaretDownFill className="mt-2" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatWeOffer;
