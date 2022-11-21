import React from "react";
import logo from "../Assets/gpi 3.svg"
import { useNavigate } from "react-router-dom";



const Footer = () => {
  let navigate = useNavigate();
  const homeRoute = () => {
    navigate("/home");
  };
  return (
    <>
      <section className="bg-gray-100 w-full bg-white p-11 py-24 border-lightSilver flex flex-col   bottom-0 gap-11">
        <div className="flex justify-around">
          <div className="flex flex-col gap-4">
            <div className="">
              <img src={logo} alt=".." onClick={homeRoute} className="cursor-pointer"></img>
              </div>
            {/* <ul className="font-light">
              <li>home description</li>
            </ul> */}
            <p>A one step center of solutions that <br /> enhances business performance and <br />productivity </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-xlg ">Contact</div>
            <ul className="font-light">
              <li>+234xxxxxxx</li>
              <li>8 Baderinwa alabi street <br />Lekki 1</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-xlg ">Our Products</div>
            <ul className="font-light">
              <li>Barafiri</li>
              <li>Gas plus</li>
              <li>Providus BCM</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-xlg ">Get Started</div>
            <ul className="font-light">
              <li className="cursor-pointer">Chat with Us</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="border-t text-center pt-8">
            <small>&copy; copyright by GPI</small>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
