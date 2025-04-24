import React from "react";
import { Link } from "react-router-dom";

const Stats = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 sm:py-4 py-10 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              data-aos="slide-up"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              <Link to="/firstyear-allsubjects">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg stats-box">
                  <p className="text-[#227db7] text-4xl mb-3 inline-block">
                    <ion-icon name="document-text-outline"></ion-icon>
                  </p>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    1<sup>st</sup> Year
                  </h2>
                  <div className="leading-relaxed font-medium flex justify-center items-center gap-1">
                    Class Notes & Assignment
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              data-aos="slide-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <Link to="/secondyear-allsubjects">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg stats-box">
                  <p className="text-[#227db7] text-4xl mb-3 inline-block">
                    <ion-icon name="document-text-outline"></ion-icon>
                  </p>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    2<sup>nd</sup> Year
                  </h2>
                  <p className="leading-relaxed font-medium">
                    Class Notes & Assignment
                  </p>
                </div>
              </Link>
            </div>
            <div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              data-aos="slide-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <Link to="/thirdyear-allsubjects">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg stats-box">
                  <p className="text-[#227db7] text-4xl mb-3 inline-block">
                    <ion-icon name="document-text-outline"></ion-icon>
                  </p>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    3<sup>rd</sup> Year
                  </h2>
                  <p className="leading-relaxed font-medium">
                    Class Notes & Assignment
                  </p>
                </div>
              </Link>
            </div>
            <div
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              data-aos="slide-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <Link to="/fourthyear-allsubjects">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg stats-box">
                  <p className="text-[#227db7] text-4xl mb-3 inline-block">
                    <ion-icon name="document-text-outline"></ion-icon>
                  </p>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    4<sup>th</sup> Year
                  </h2>
                  <p className="leading-relaxed font-medium">
                    Class Notes & Assignment
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
