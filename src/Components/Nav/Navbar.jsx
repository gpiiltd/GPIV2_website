import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/GPI logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/aboutus");
  };
  const pathChange = () => {
    navigate("/products");
  };
  const homeRoute = () => {
    navigate("/");
  };

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <section className="w-full relative shadow-lg flex flex-wrap items-center justify-around px-2 py-3 bg-white mb-3">
        <div className="container px-4  flex flex-wrap items-center justify-between lg:px-0  mr-11">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className=" ">
              <img
                src={logo}
                alt="logo"
                className=" h-16 cursor-pointer pr-11"
                onClick={homeRoute}
              ></img>
            </div>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex pl-4" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col gap-4 lg:flex-row list-none lg:ml-auto lg:gap-8">
              <li className="pt-4 cursor-pointer" onClick={homeRoute}>
                Home
              </li>

              <li className="pt-4 cursor-pointer" onClick={routeChange}>
                About us
              </li>
              <li className="pt-4 cursor-pointer" onClick={pathChange}>
                Products
              </li>

              <li className="mr-2 border-2 border-green hover:bg-green hover:text-white duration-300 py-3 px-8 rounded-full cursor-pointer lg:mr-0">
                <Link
                  to="contact"
                  smooth={true}
                  duration={700}
                  className="cursor-pointer"
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
