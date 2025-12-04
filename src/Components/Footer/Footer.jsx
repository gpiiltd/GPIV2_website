import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { client } from "../../sanityClient";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { PageLoader } from "/Users/apple/Documents/gpi_website/GPIV2_website/src/Components/PageLoader.tsx";


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
    return <PageLoader />;
  }

  return (
    <>
      <section className="bg-gray-100 px-11 w-full bg-white border-lightSilver flex flex-col bottom-0 gap-11">
        <div className="flex flex-col md:justify-between md:flex-row md:gap-8">
          <div className="flex flex-col font-light text-xs leading-relaxed tracking-wide text-gray-600 lg:pl-11">
            <div className="">
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
            {/* Contact Section */}
            <div className="flex flex-col gap-2 md:flex-1 md:min-w-0">
             <div className="text-lg  font-bold">Contact</div>
              <ul className="font-light text-xs leading-loose tracking-wider">
                <li>{footerData.number || "08055343001"}</li>
                <li>
                  {footerData.address ||
                    "Ibukun House, Block 105, No 8 Baderinwa Alabi Street Lekki Phase 1 Lagos, Nigeria"}
                </li>
              </ul>
            </div>

            {/* Our Products Section */}
            <div className="flex flex-col gap-4 md:flex-1 md:min-w-0">
             <div className="text-lg  font-bold">Our Products</div>
              <ul className="font-light text-xs leading-loose tracking-wider">
                {footerData.listProduct?.map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
              </ul>
            </div>

            {/* Get Started Section */}
            <div className="flex flex-col gap-4 md:flex-1 md:min-w-0">
              <div className="text-lg  font-bold">Get Started</div>
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
        {/* Bottom Section */}
        <div className="mb-12 flex flex-col lg:flex-row items-center justify-between gap-6 border-t-2">
          <div className="text-base text-gray-600">
            <small>&copy; copyright by GPI</small>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/gpi-global-performance-index"
              aria-label="Linkedin"
              target="blank"
              className="hover:text-green transition-colors duration-200 p-2"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.twitter.com/GPI_HQ"
              aria-label="Twitter"
              target="blank"
              className="hover:text-green transition-colors duration-200 p-2"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/gpi.xyz"
              target="blank"
              aria-label="Instagram"
              className="hover:text-green transition-colors duration-200 p-2"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
