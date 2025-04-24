import React from "react";
import Socials from "../../components/Contact components/Social Media/Socials";
import MapAndForm from "../../components/Contact components/Map and form/MapAndForm";

const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 pt-32 mx-auto contact-section">
          <h1 className="text-3xl font-medium title-font text-gray-900 sm:mb-20 mb-10 text-center">
            Contact us
          </h1>
          <div className="flex flex-wrap -m-4 sm:px-20 px-2  sm:py-1 py-10" >
            
            <div className="sm:p-4 p-2 md:w-1/2 w-full">
              <div className="w-full h-full bg-gray-100 sm:p-8 p-6 rounded">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-12 ">
                  Get in touch
                </h1>
                <p className="leading-relaxed mb-6">
                  
                </p>
                <div className="flex flex-col ">
                <a className="inline-flex items-center justify-center">
                  <p className="w-12 h-12 text-2xl rounded-full flex-shrink-0 object-cover object-center text-[#227db7]"><ion-icon name="call"></ion-icon></p>
                  <span className="flex-grow flex flex-col pl-4 -mt-6">
                    <span className="title-font font-medium text-gray-900">
                    +91 93299 90233
                    </span>
                    {/* <span className="text-gray-500 text-sm">Call us</span> */}
                  </span>
                </a>
                <a className="inline-flex items-center justify-center">
                  <p className="w-12 h-12 text-2xl rounded-full flex-shrink-0 object-cover object-center text-[#227db7]"><ion-icon name="mail"></ion-icon></p>
                  <span className="flex-grow flex flex-col pl-4 -mt-6">
                    <span className="title-font font-medium text-gray-900 max-md:text-md">
                    adzohq@gmail.com
                    </span>
                    {/* <span className="text-gray-500 text-sm">Call us</span> */}
                  </span>
                </a>
                <a className="inline-flex items-center justify-center">
                  <p className="w-12 h-12 text-2xl rounded-full flex-shrink-0 object-cover object-center text-[#227db7]"><ion-icon name="location"></ion-icon></p>
                  <span className="flex-grow flex flex-col pl-4 sm:-mt-6 -pt-8 ">
                    <span className="title-font font-medium text-gray-900">
                    Near Outer Ring Road, Bengaluru, Karnataka
                    </span>
                    {/* <span className="text-gray-500 text-sm">Call us</span> */}
                  </span>
                </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <Socials/>
            </div>
          </div>
        </div>

        <div className="container px-5 pb-10 mx-auto">
          <MapAndForm/>
        </div>
      </section>
    </>
  );
};

export default Contact;
