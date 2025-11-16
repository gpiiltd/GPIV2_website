import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { client } from "../../sanityClient";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  let navigate = useNavigate();
  const homeRoute = () => {
    navigate("/");
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "footerCTA"][0] {
        footerCTAImageMain {
          asset->{
            url
          }
        },
        logoDescription,
        number,
        address,
        listProduct
      }`
      )
      .then((data) => {
        //console.log("Footer CTA Data:", data);
        setFooterData(data);
      })
      .catch(console.error);
  }, []);

  if (!footerData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="bg-gray-100 px-11 w-full bg-white border-lightSilver flex flex-col bottom-0 gap-11">
        <div className="flex flex-col md:justify-between md:flex-row md:gap-8">
          <div className="flex flex-col font-light text-xs leading-relaxed tracking-wide text-gray-600 lg:pl-11">
            <div className="pt-11">
              {/* Use Sanity logo instead of local logo */}
              <img
                src={footerData.footerCTAImageMain?.asset?.url}
                alt="logo"
                onClick={homeRoute}
                className="cursor-pointer"
              />
            </div>
            {/* Use logoDescription from Sanity */}
            <p className="w-[300px]">
              {footerData.logoDescription ||
                "A one step center of solutions that enhances business performance and productivity"}
            </p>
          </div>

          <div className="flex flex-col gap-11 text-gray-600 py-11 md:flex-row lg:pr-28 lg:gap-24">
            <div className="flex flex-col gap-2">
              <div className="text-xlg font-light">Contact</div>
              <ul className="font-light text-xs leading-loose tracking-wider">
                {/* Use number and address from Sanity */}
                <li>{footerData.number || "08055343001"}</li>
                <li>
                  {footerData.address ||
                    "Ibukun House, Block 105, No 8 Baderinwa Alabi Street Lekki Phase 1 Lagos, Nigeria"}
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xlg font-light">Our Products</div>
              <ul className="font-light text-xs leading-loose tracking-wider">
                {/* Map over listProduct from Sanity */}
                {footerData.listProduct?.map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xlg font-light">Get Started</div>
              <ul className="font-light text-xs leading-loose tracking-wider">
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
