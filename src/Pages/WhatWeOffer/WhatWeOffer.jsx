import CustomLine from "../../Components/CustomLines/CustomLine";
import React, { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

const WhatWeOffer = () => {
  const [state, setState] = useState({
    bespoke: false,
    small: false,
    propriatary: false,
  });

  const showDropDown = (tag) => {
    const keys = Object.keys(state);
    let modal = {};
    keys.forEach((key) => {
      if (key === tag) {
        modal[key] = true;
      } else {
        modal[key] = false;
      }
    });
    setState(modal);
  };

  const HideDropDown = () => {
    setState({ bespoke: false, small: false, propriatary: false });
  };
  return (
    <>
      <div className=" pt-24  w-layoutWidth  m-auto  lg:pt-48">
        <section className="flex gap-2 lg:gap-11 ">
          <div className="mb-4">
            <h1 className="lg:tracking-wide lg:text-3xl">What we offer</h1>
          </div>
          <CustomLine />
        </section>

        <section className="flex flex-col  gap-4 pt-8 lg:flex-row">
          <div className="bg-lBrown font-lg text-lg rounded-3xl relative  lg:text-xl">
            <div
              className="p-8 flex gap-4 md:gap-11  md:justify-center md:items-center  lg:justify-start xl:w-[400px] 2xl:w-[350px] "
              onMouseEnter={() => showDropDown("bespoke")}
              onMouseLeave={HideDropDown}
            >
              Bespoke Solutions
              <MdKeyboardArrowDown className="text-green text-2xl" />
            </div>
            {state.bespoke ? (
              <p className="px-8 z-40 bg-lBrown text-sm leading-loose tracking-wide absolute  inset-x-0 pb-8 top-16 pt-4 rounded-b-3xl">
                With the use of software engineering best practices for our
                development processes, we create bespoke software solutions
                based on client's needs.
              </p>
            ) : null}
          </div>

          <div className="bg-lblue font-lg text-lg  rounded-3xl mt-12 sm:mt-0  lg:text-xl">
            <div
              className="p-8 flex gap-4 md:gap-11 wrap-no-wrap relative   md:justify-center md:items-center lg:justify-start xl:w-[400px]  2xl:w-[350px]"
              onMouseEnter={() => showDropDown("small")}
              onMouseLeave={HideDropDown}
            >
              Small Business Solutions
              <MdKeyboardArrowDown className="text-green text-2xl" />
              {state.small ? (
                <p className="px-8 z-40 bg-lblue text-sm leading-loose tracking-wide absolute  inset-x-0 pb-8 top-16 pt-4 rounded-b-3xl">
                  We provide business automated solutions, using
                  state-of-the-art technology to enhance the performnce of small
                  businesses. We also offer backend services to these small
                  businesses within our ecosystem.
                </p>
              ) : null}
            </div>
          </div>
          <div className="bg-lgray font-lg text-lg  rounded-3xl  mt-12 sm:mt-0 lg:text-xl">
            <div
              className="p-8 flex gap-4 md:gap-11 wrap-no-wrap relative   md:justify-center md:items-center lg:justify-start xl:w-[400px]  2xl:w-[350px]"
              onMouseEnter={() => showDropDown("propriatary")}
              onMouseLeave={HideDropDown}
            >
              Propriatary Solutions
              <MdKeyboardArrowDown className=" text-green text-2xl" />
              {state.propriatary ? (
                <p className="px-8 bg-lgray text-sm leading-loose tracking-wide absolute  inset-x-0 pb-8 top-16 pt-4 rounded-b-3xl">
                  We have developed our own software solutions in accordance
                  with ISO 9001 standards. All of these solutions are made to
                  measure and improve the performance of businesses and
                  organisations.
                </p>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatWeOffer;
