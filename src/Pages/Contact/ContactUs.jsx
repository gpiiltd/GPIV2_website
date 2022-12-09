import React, { useState } from "react";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import chatBg from "../../Components/Assets/trabajoequipoteam-4200837_1920 3.svg";
import loaderIcon from "../../Components/Assets/loaderIcon.svg";
import warning from "../../Components/Assets/warning.svg";
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

  const initialValues = {
    fullName: "",
    email: "",
    number: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("This field is required!"),
    number: Yup.string().required("This field is required!"),
    email: Yup.string()
      .trim()
      .required("Email can not be empty")
      .email("This can’t be right. Email Invalid"),
    message: Yup.string()
      .required("message can not be empty")
      .min(10, "message must be at least 10 characters"),
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (data) => {
    const fullName = data.fullName;
    const number = data.number;
    const email = data.email;
    const message = data.message;

    try {
      setLoading(true);
      console.log("Form submitted successfully");
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

          <Formik
            initialValues={initialValues}
            enableReinitialze={true}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="w-[353px] z-40 flex flex-col bg-white p-8  lg:p-11 lg:w-2/5 ">
                <div className="flex flex-col lg:gap-8 lg:flex-row">
                  <div className="">
                    <Field
                      name="fullName"
                      type="text"
                      placeholder="Name/Company Name:"
                      className={`${
                        errors.fullName && touched.fullName
                          ? "border-red-600 lg:mb-4"
                          : ""
                      } w-full py-2  text-black placeholder:text-black border-b border-black lg:w-[226px] lg:mb-11 lg:p-4 }`}
                    />
                    {errors.fullName && touched.fullName && (
                      <div className="flex items-center text-red-600 ml-2 text-sm ">
                        <img src={warning} alt="" className="w-4" />
                        <ErrorMessage
                          name="fullName"
                          component="div"
                          className="ml-2"
                        />
                      </div>
                    )}{" "}
                  </div>

                  <div className="">
                    <Field
                      name="number"
                      type="text"
                      placeholder="Phone:"
                      className={`${
                        errors.number && touched.number
                          ? "border-red-600 lg:mb-4"
                          : ""
                      } w-full py-2 text-black placeholder:text-black border-b border-black lg:w-[201px] lg:mb-11 lg:p-4 }`}
                    />
                    {errors.number && touched.number && (
                      <div className="flex items-center text-red-600 ml-2 text-sm ">
                        <img src={warning} alt="" className="w-4" />
                        <ErrorMessage
                          name="number"
                          component="div"
                          className="ml-2"
                        />
                      </div>
                    )}{" "}
                  </div>
                </div>
                <Field
                  name="email"
                  type="text"
                  placeholder="Email:"
                  className={`${
                    errors.email && touched.email
                      ? "border-red-600 lg:mb-2"
                      : ""
                  } py-2 mb-4 text-black placeholder:text-black border-b border-black lg:border-b-2 lg:mb-11 lg:p-4}`}
                />
                {errors.email && touched.email && (
                  <div className="flex items-center text-red-600 ml-2 text-sm mb-4">
                    <img src={warning} alt="" className="w-4" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="ml-2"
                    />
                  </div>
                )}{" "}
                <Field
                  name="message"
                  component="textarea"
                  rows="4"
                  cols="55"
                  type="text"
                  placeholder="Please drop a message"
                  className={`${
                    errors.message && touched.message
                      ? "border-red-600 lg:mb-2"
                      : ""
                  } p-2 mb-2 border-b-2 border-2 text-black placeholder:text-black w-full outline-none  lg:mb-11}`}
                />
                {errors.message && touched.message && (
                  <div className="flex items-center text-red-600 ml-2 text-sm mb-4">
                    <img src={warning} alt="" className="w-4" />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="ml-2"
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="flex flex-col items-center place-items-center border-2 border-green py-2 mt-4 px-2  rounded-lg cursor-pointer bg-green hover:bg-transparent hover:text-black text-white duration-300 lg:py-3 lg:px-2"
                >
                  {loading ? (
                    <img src={loaderIcon} alt="" className="h-6 w-6 " />
                  ) : (
                    <h1 className="">Submit your Message</h1>
                  )}
                </button>
              </Form>
            )}
          </Formik>
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
