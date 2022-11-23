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
      <div className=" pt-48  w-layoutWidth  m-auto ">
        <section className="ml-4 sm:ml-0 w-[75%] sm:w-[100%] flex gap-4  sm:gap-11 ">
          <div className="mb-4">
            <h1 className="sm:text-3xl sm:tracking-wide  sm:w-100">What we offer</h1>
          </div>
          <CustomLine />
        </section>

        <section className="sm:flex gap-4 pt-8 ">
          <div className="bg-lBrown p-4  font-lg text-2xl rounded-2xl relative ">
            <div
              className="p-8 flex gap-4  "
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
            <div className="p-8 flex gap-4 wrap-no-wrap relative">
              Business Support
              <BsFillCaretDownFill className="mt-2" />
            </div>
          </div>
          <div className="bg-lgray  font-lg text-2xl rounded-2xl  mt-12 sm:mt-0">
            <div
              className="p-8 flex gap-4 wrap-no-wrap relative"
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
