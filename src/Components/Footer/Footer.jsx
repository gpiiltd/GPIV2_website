import React from "react";
import logo from "../Assets/gpi 3.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Footer = () => {
  let navigate = useNavigate();
  const homeRoute = () => {
    navigate("/");
  };
  return (
    <>
      <section className="bg-gray-100 px-11 w-full  bg-white   border-lightSilver flex flex-col bottom-0 gap-11">
        <div className="flex flex-col  md:justify-between md:flex-row md:gap-8">
          <div className="flex flex-col  font-light text-xs  leading-relaxed tracking-wide text-gray-600 lg:pl-11">
            <div className="">
              <img
                src={logo}
                alt=".."
                onClick={homeRoute}
                className="cursor-pointer"
              ></img>
            </div>
            {/* <ul className="font-light">
              <li>home description</li>
            </ul> */}
            <p>
              A one step center of solutions that <br /> enhances business
              performance and <br />
              productivity{" "}
            </p>
          </div>

          <div className="flex flex-col gap-11  text-gray-600 py-11 md:flex-row md:pr-28 lg:gap-24">
            <div className="flex flex-col gap-2 ">
              <div className="text-xlg font-light">Contact</div>
              <ul className="font-light text-xs  leading-loose tracking-wider">
                <li>08055343001</li>
                <li>
                  Ibukun House, Block 105, No 8 Baderinwa <br />Alabi Street Lekki
                  Phase 1 Lagos, Nigeria
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xlg font-light">Our Products</div>
              <ul className="font-light text-xs  leading-loose tracking-wider">
                <li>Barafiri</li>
                <li>Gas plus</li>
                <li>Providus BCM</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xlg font-light">Get Started</div>
              <ul className="font-light text-xs  leading-loose tracking-wider">
                <li className="cursor-pointer">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={700}
                    className="cursor-pointer"
                  >
                    chat with us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="border-t text-center pt-8 mb-8 text-gray-600">
            <small>&copy; copyright by GPI</small>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
