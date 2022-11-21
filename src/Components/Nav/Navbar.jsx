import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
import logo from "../Assets/gpi 3.svg"

const Navbar = () => {
  const [listItems, setListItems] = useState(false);
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/aboutus");
  };
  const pathChange = () => {
    navigate("/products");
  };
  const homeRoute = () => {
    navigate("/home");
  };

  const showDropDown=() => {
    setListItems(!listItems)
  }
 
  return (
    <>
      <section className="bg-white w-homePageWidth top-0 p-6 pl-11 shadow-lg fixed flex justify-between z-40 relative">
        <div className=" ">
          <img src={logo} alt="logo" className="w-24 h-16 mb-11 absolute cursor-pointer" onClick={homeRoute} ></img>
        </div>
        <div className="flex flex-row">
          <ul className="flex flex-row gap-8">
            {/* {navLinks.map((link, index) => ( */}
            <li className="pt-4 cursor-pointer" onClick={homeRoute}>
              {/* {link} */}
              Home
            </li>
            <div>
            <li className="pt-4 cursor-pointer flex gap-1 " onClick={showDropDown}>
              About GPI
              <BsFillCaretDownFill className="mt-1" />
            </li>
            {listItems? (
               <ul className="absolute bg-white p-4 rounded-lg leading-10 tracking-wide shadow-xl w-[10%]">
               <li className="cursor-pointer" onClick={routeChange}>About us</li>
               <li className="cursor-pointer" onClick={pathChange}>products</li>
 
             </ul>
            ):null}
           
            </div>
            <li className="pt-4 cursor-pointer" onClick={pathChange}>Products</li>
            

            <li className="border-2 border-green py-3 px-8 rounded-full cursor-pointer">
              Get In Touch
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
