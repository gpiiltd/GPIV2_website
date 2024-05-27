import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/GPI logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  let navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsMediumScreen(mediaQuery.matches);
  
    const handleMediaChange = (e) => {
      setIsMediumScreen(e.matches);
      if (e.matches) {
        setNavbarOpen(false);  
      }
    };
  
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const mobileNav = navbarOpen && !isMediumScreen
  ? 'flex pl-1 absolute bg-white mt-44 right-0 shadow-lg pl-4 z-40 justify-center items-center rounded'
  : 'hidden';

  return (
    <>
      <section className="w-full px-4 fixed z-40 shadow-lg flex justify-between  items-center py-2 md:py-3 bg-white  md:px-8 ">
        <img
          src={logo}
          alt="logo"
          className="hidden cursor-pointer md:block"
          onClick={()=>navigate("/")}
        ></img>
        <div className="relative flex justify-between items-center w-full md:hidden ">
          <div>
            <img
              src={logo}
              alt="logo"
              className="cursor-pointer"
              onClick={()=>navigate("/")}
            ></img>
          </div>
          <div>
            <button
              className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
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
        </div>
        <div
        className={`${mobileNav} md:flex md:relative md:bg-transparent md:mt-0 md:right-0 md:shadow-none md:pl-0 md:z-auto md:justify-center md:items-center`}
        id="example-navbar-danger"
        >
          <ul className="flex flex-col gap-1 items-center justify-center py-3 list-none md:flex-row  md:gap-8 md:pt-0">
            <li
              className="pt-1 cursor-pointer text-xs md:text-sm lg:text-base "
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className="pt-1 cursor-pointer text-xs md:text-sm lg:text-base "
              onClick={()=>navigate("/aboutus")}
            >
              About us
            </li>
            <li
              className="pt-1 cursor-pointer text-xs md:text-sm lg:text-base "
              onClick={()=>navigate("/products")}
            >
              Products
            </li>

            <li className="mt-1 mr-2 cursor-pointer  text-xs md:text-sm lg:text-base border border-green hover:bg-green hover:text-white duration-300 py-1  px-2 lg:px-4 rounded-full cursor-pointer md:mr-0 md:mt-0">
              <Link to="contact" smooth={true} duration={700}>
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
