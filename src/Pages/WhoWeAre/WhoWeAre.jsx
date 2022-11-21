import React from "react";
import CustomLine from "../../Components/CustomLines/CustomLine";
import image from "../../Components/Assets/image2.jpeg";
import { BsBullseye } from "react-icons/bs";
import { motion } from "framer-motion";




const WhoWeAre = () => {
  return (
    <>
<motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        key={1}
         className=" pt-24  w-layoutWidth  m-0 m-auto grid place-content-center ">
        <section className="flex gap-11 ">
          <CustomLine />
          <div className="mb-4">
            <h1 className="text-3xl tracking-wide ">Who we are</h1>
          </div>
        </section>
        <div className="flex gap-24 pt-8">
            {/* <section className=" bg-black w-[340px] h-[374px] rounded-2xl hover:ml-11 hover:h-[390px] duration-300"> */}
            {/* <div className="w-full h-vh relative">
                 <img src={homeImg3} alt="..." className=" duration-300 relative" /> 
                 </div>  */}
            {/* <div className="w-full h-vh ">
                 <img src={homeImg2} alt="..." className=" duration-300 " /> 
                 </div> 
            </section> */}
            
          
          <section className="bg-black w-[25%] h-[100%] grid place-items-center rounded-3xl  hover:ml-8 duration-300 ">
            <img
              src={image}
              alt="img"
              className="h-[100%] w-full rotate-[-8deg] hover:rotate-[-12deg] rounded-3xl duration-300"
            />
          </section>

          <section className="bg-white p-11 shadow w-whoWeAreCardWidth h-whoWeAreCardheight overflow-hidden rounded-2xl">
            <div className="bg-homePageCardGreen w-24 h-24 p-2 text-4xl grid place-items-center rounded-full ">
              <BsBullseye />
            </div>
            <p className="pt-4">
              We are a degital transformation consultancy and software
              development
              <br /> company providing cutting-edge engineering solutions. We
              proactively
              <br /> consult, design, develop & scale robust web, mobile &
              cuustom software <br /> solutions that fuel innovation & deliver
              digital success!
            </p>
          </section>
    
        </div>
    
      </motion.div>
    </>
  );
};

export default WhoWeAre;
