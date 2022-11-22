import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import chat from "../../Components/Assets/chat 1.png";
import chatBg from "../../Components/Assets/trabajoequipoteam-4200837_1920 3.svg";

const ContactUs = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    number: "",
  });
  const [success, setsuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_37895nb", "template_z7uhva9", values, "9gQTInhcjKsOaQ_Ik")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            email: "",
            number: "",
          });
          setsuccess("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (success === "SUCCESS") {
      setTimeout(() => {
        setsuccess("");
      }, 3000);
    }
  }, [success]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className=" relative mt-24 w-full h-[689px]  bg-gradient-to-tl from-purple-900 to-green-700">
        <img
          src={chatBg}
          alt=".."
          className="w-full h-full object-cover mix-blend-overlay absolute"
        ></img>

        {/* {success && renderAlert()} */}
        {/* <section className="flex justify-between"> */}
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col  bg-white w-2/5 p-11 rounded-3xl"
          >
            <label htmlFor="usernameInput" className="font-bold mb-4">
              Name/Company name
            </label>

            <input
              value={values.fullName}
              onChange={handleChange}
              name="fullName"
              type="text"
              className=" p-4 mb-11 rounded-3xl shadow"
              placeholder="Gift owunyirigbo"
            />
            <label htmlFor="usernameInput" className="font-bold mb-4">
              Email
            </label>

            <input
              value={values.email}
              onChange={handleChange}
              className=" p-4 mb-11 rounded-3xl shadow"
              name="email"
              type="text"
              placeholder="emaill"
            />
            <label htmlFor="usernameInput" className="font-bold mb-4">
              Phone number
            </label>

            <input
              value={values.number}
              onChange={handleChange}
              className=" p-4 mb-11 rounded-3xl shadow"
              name="number"
              type="text"
              placeholder="Phone number"
            />

            <button
              className="border-2 border-green mt-4 py-3 px-8 rounded-2xl cursor-pointer bg-green hover:bg-transparent hover:text-black text-white duration-300"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="pt-18">
            <img src={chat} alt="img" />
            {/* <HiChatAlt2 className="text-green-600 text-8xl font-bold"/> */}
            <h1 className="text-6xl  tracking-wide leading-relaxed">
              Chat with us <br /> Today
            </h1>
          </div>
        </div>
        {/* </section> */}
      </div>
    </>
  );
};
const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-green-700  rounded mb-5 text-center ">
    <p>Message sent successfully</p>
  </div>
);
export default ContactUs;
