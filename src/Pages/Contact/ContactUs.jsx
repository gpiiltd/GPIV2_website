import React, { useState } from "react";
import { toast } from "react-toastify";
import chatBg from "../../Components/Assets/trabajoequipoteam-4200837_1920 3.svg";
import loaderIcon from "../../Components/Assets/loaderIcon.svg";
import TextArea from "../../Components/TextArea/TextArea";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const { fullName, email, number, message } = userData;

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        "https://v1.nocodeapi.com/gpi/google_sheets/NyOmNSHMjYnovYIg?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [fullName, email, number, message, new Date().toLocaleDateString()],
          ]),
        }
      );
      await response.json();

      setTimeout(() => {
        setLoading(false);
        toast.success("Form submitted successfully");
        setUserData({
          ...userData,
          fullName: "",
          email: "",
          number: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        id="contact"
        className="bg-gray-500 relative mt-24 w-full h-full  bg-gradient-to-tl from-gray-600"
      >
        <img
          src={chatBg}
          alt=".."
          className="w-full h-full object-cover mix-blend-overlay absolute bg-black"
        ></img>

        <div className="flex flex-col-reverse justify-center items-center z-40 p-4  lg:p-11 text-white gap-11 lg:flex-row">
          {successMsg}

          <form
            onSubmit={handleSubmit}
            className="w-[353px] z-40 flex flex-col bg-white p-8  lg:p-11 lg:w-2/5 "
          >
            <div className="flex flex-col lg:gap-8 lg:flex-row">
              <input
                value={fullName}
                onChange={handleChange}
                name="fullName"
                type="text"
                className="py-2  text-black placeholder:text-black border-b border-black lg:w-[226px] lg:mb-11 lg:p-4 "
                placeholder="Name:"
              />
              <input
                value={number}
                onChange={handleChange}
                className="py-2 text-black placeholder:text-black border-b border-black lg:w-[201px] lg:mb-11 lg:p-4 "
                name="number"
                type="text"
                placeholder="Phone:"
              />
            </div>
            <input
              value={email}
              onChange={handleChange}
              className="py-2 mb-4 text-black placeholder:text-black border-b border-black lg:border-b-2 lg;mb-11 lg:p-4"
              name="email"
              type="text"
              placeholder="Email:"
            />
            <TextArea
              name="message"
              value={message}
              handleChange={handleChange}
              placeholder="Please drop a message"
              className="text-black"
            />

            <button
              className="flex flex-col items-center place-items-center border-2 border-green py-2  px-2  rounded-lg cursor-pointer bg-green hover:bg-transparent hover:text-black text-white duration-300 lg:py-3 lg:px-2"
              type="submit"
            >
              {loading ? (
                <img src={loaderIcon} alt="" className="h-6 w-6 " />
              ) : (
                <h1 className="">Submit your Message</h1>
              )}
            </button>
          </form>
          <div className=" z-40  lg:w-2/5">
            <h1 className="text-3xl  tracking-wide leading-tight font-bold lg:text-5xl">
              Have a Project? We would love to hear from you
            </h1>
            <p className="pt-2 lg:pt-8">
              +23470000334 <br />
              <span className="pt-4">
                Baderinwa Alabi street Lekki, Phase 1
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
