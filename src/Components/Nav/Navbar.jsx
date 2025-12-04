import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Gpi logo.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
  let navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavigation = (path) => {
    setNavbarOpen(false);
    navigate(path);
  };

  const routeChange = () => {
    handleNavigation("/aboutus");
  };
  
  const pathChange = () => {
    handleNavigation("/products");
  };
  
  const homeRoute = () => {
    handleNavigation("/");
  };

  const handleGetInTouch = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <section className="w-full shadow-lg bg-white mb-3">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="logo"
                className="h-16 lg:h-20 cursor-pointer"
                onClick={homeRoute}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <ul className="flex items-center gap-8">
                <li className="cursor-pointer hover:text-green transition-colors" onClick={homeRoute}>
                  Home
                </li>
                <li className="cursor-pointer hover:text-green transition-colors" onClick={routeChange}>
                  About us
                </li>
                <li className="cursor-pointer hover:text-green transition-colors" onClick={pathChange}>
                  Products
                </li>
                <li className="border-2 border-green hover:bg-green hover:text-white duration-300 py-3 px-8 rounded-full cursor-pointer">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={700}
                    className="cursor-pointer"
                    onClick={handleGetInTouch}
                  >
                    Get in touch
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-black focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-label="Toggle menu"
            >
              {navbarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
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
                  className="w-6 h-6"
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

          {/* Mobile Navigation */}
          {navbarOpen && (
            <nav className="lg:hidden pb-4">
              <ul className="flex flex-col gap-4">
                <li className="py-2 cursor-pointer hover:text-green transition-colors" onClick={homeRoute}>
                  Home
                </li>
                <li className="py-2 cursor-pointer hover:text-green transition-colors" onClick={routeChange}>
                  About us
                </li>
                <li className="py-2 cursor-pointer hover:text-green transition-colors" onClick={pathChange}>
                  Products
                </li>
                <li className="border-2 border-green hover:bg-green hover:text-white duration-300 py-3 px-8 rounded-full cursor-pointer text-center">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={700}
                    className="cursor-pointer"
                    onClick={handleGetInTouch}
                  >
                    Get in touch
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </section>
    </>
  );
};

export default Navbar;
