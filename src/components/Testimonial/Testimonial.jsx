import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <>
      <div className="pb-10 border-b-2 border-[#227db7] max-md:px-2">
        <section className="text-gray-600 body-font">
          <div className="container sm:px-5 px-4 pt-16 mx-auto">
            <div className="text-center sm:mb-10 mb-10">
              <h1 className="sm:text-3xl text-2xl font-semibold text-center uppercase title-font text-gray-900 sm:mb-4 mb-2">
                What our <span className="text-[#227db7]">clients </span> say
              </h1>
              <div className="sm:text-base text-sm leading-relaxed w-1/5 border-t-4 border-[#227db7] rounded-md  mx-auto"></div>
            </div>
          </div>
        </section>

        <TestimonialSlider />
      </div>
    </>
  );
};

export default Testimonial;
