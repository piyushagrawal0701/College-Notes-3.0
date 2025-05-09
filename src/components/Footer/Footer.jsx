import React from "react";
import "./footer.css";
import logo from "../../../public/assets/Logo.png";

// import { Link } from "react-router-dom";

const Footer = () => {
  /* ---------- BACK TO TOP ----------  */

  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });

  return (
    <>
      {/* <!-- --------- FOOTER SECTION ---------  --> */}

      <footer
        className="text-gray-600 body-font  footer-section"
        style={{ borderTop: "5px solid #227db7" }}
      >
        <div className="container px-5 sm:py-24 pt-8 pb-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-44 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex flex-col title-font font-medium items-center md:justify-start text-center justify-center text-gray-900">
              {/* <img src={logo} alt="" className="sm:w-[10vw] w-[25vw] " /> */}
              <h1 className="sm:text-xl text-lg text-[#227db7] w-full">
                College Notes
              </h1>
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-start">
            <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
              <h2 className="text-black font-bold tracking-widest text-sm mb-3">
                ON OUR SITE
              </h2>
              <span className="list-none mb-10 flex gap-2 flex-col footer-links">
                <li>
                  <a to="/" className="text-gray-600 hover:text-[#227db7]">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    to="/contact"
                    className="text-gray-600 hover:text-[#227db7]"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a to="/about" className="text-gray-600 hover:text-[#227db7]">
                    About
                  </a>
                </li>
                <li>
                  <a to="/about" className="text-gray-600 hover:text-[#227db7]">
                    Our Team
                  </a>
                </li>

                {/* <li>
                  <a className="text-black hover:text-[#227db7]">
                    Volunteer Program
                  </a>
                </li> */}
              </span>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
              <h2 className="text-black font-bold tracking-widest text-sm mb-3">
                MAIN LINKS
              </h2>
              <span className="list-none mb-10 flex gap-2 flex-col footer-links">
                <li>
                  <a to="/faqs" className="text-gray-600 hover:text-[#227db7]">
                    Class Notes
                  </a>
                </li>
                <li>
                  <a
                    to="/donation-policy"
                    className="text-gray-600 hover:text-[#227db7]"
                  >
                    Assignments
                  </a>
                </li>
                <li>
                  <a
                    to="/terms-and-conditions"
                    className="text-gray-600 hover:text-[#227db7] line-clamp-2 "
                  >
                    PYQs
                  </a>
                </li>
                <li>
                  <a
                    to="/privacy-policy"
                    className="text-gray-600 hover:text-[#227db7]"
                  >
                    and many <span className="max-md:pl-3">more...</span>
                  </a>
                </li>
              </span>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
              <h2 className="text-black font-bold  tracking-widest text-sm mb-3">
                OTHER LINKS
              </h2>
              <span className="list-none mb-10 flex gap-2 flex-col footer-links">
                <li>
                  <a href="" className="text-gray-600 hover:text-[#227db7]">
                    Free Courses
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-[#227db7]">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-[#227db7]">
                    Guidance
                  </a>
                </li>
                <li
                  onClick={() =>
                    setPosition({ ...position, position: { top: 0, left: 0 } })
                  }
                >
                  <a className="text-gray-600 hover:text-[#227db7]">
                    Back to top
                  </a>
                </li>
              </span>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
              <h2 className="text-black font-bold tracking-widest text-sm mb-3">
                GET IN TOUCH WITH US
              </h2>
              <span className="list-none mb-10 flex gap-2 flex-col footer-links">
                <a href="tel:8839170393">
                  <p className="font-medium">
                    Civil lines, Vidisha (M.P), India
                    <br />
                    +91 8839170393
                  </p>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-yellow-250">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              Copyright @CollegeNotes 2025 - All rights reserved.
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
