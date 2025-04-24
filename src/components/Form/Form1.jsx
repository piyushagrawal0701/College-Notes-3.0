import React from "react";
import "./form.css";

import form1 from "../../assets/Images/Components/Form/form1.png";
import form2 from "../../assets/Images/Components/Form/form2.png";
import form3 from "../../assets/Images/Components/Form/form3.png";

const Form1 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container sm:px-5 px-4 pt-16 mx-auto">
          <div className="text-center sm:mb-20 mb-10">
            <h1 className="sm:text-3xl text-2xl font-semibold text-center title-font text-gray-900 sm:mb-4 mb-2">
              Tell us about your <span className="text-[#227db7]">Project</span>
            </h1>
            <p className="sm:text-base text-sm leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              We will contact you soon !
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative">
        <div className="container sm:px-16 px-3 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 flex-col rounded-lg overflow-hidden sm:mr-10 sm:p-10 p-4 flex justify-start relative">
            <h1 className="sm:text-3xl text-2xl max-md:text-center max-md:mb-10 text-[#227db7] font-semibold">
              What will happen next?
            </h1>
            <div className="text-xl flex flex-col font-medium gap-0 form-steps">
              <div className="p-1 my-4 ">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left hero2-box sm:pl-4 pt-4 text-center max-md:px-2">
                  <div className="flex-grow">
                    <h2 className="title-font font-medium sm:text-2xl text-xl text-gray-900">
                      1. We'll get in touch with you within 24 hours.
                    </h2>
                  </div>
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
                    src={form1}
                  />
                </div>
              </div>
              <div className="p-1 my-4">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left hero2-box sm:pl-4 pt-4 text-center max-md:px-2">
                  <div className="flex-grow">
                    <h2 className="title-font font-medium sm:text-2xl text-xl text-gray-900">
                      2. We'll chat about your project and what you need.
                    </h2>
                  </div>
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
                    src={form2}
                  />
                </div>
              </div>
              <div className="p-1 my-4">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left hero2-box sm:pl-4 pt-4 text-center">
                  <div className="flex-grow">
                    <h2 className="title-font font-medium sm:text-2xl text-xl text-gray-900">
                      3. Ready to give it a try?
                    </h2>
                  </div>
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
                    src={form3}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full max-md:px-2 md:py-8 md:mt-14 mt-8 md:mt-0 hero2-box px-10 max-md:py-4 max-md:px-4 h-[100%]">
            <h2 className="text-gray-900 text-lg mb-1 font-semibold title-font">
              Let's talk
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Guaranteed response within one business day.
            </p>
            <form
              action="https://formsubmit.co/abnsl0014@gmail.com"
              method="post"
            >
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
              <input type="hidden" name="_captcha" value="false" />

              <button
                className="text-white bg-[#227db7] border-0 py-2 px-6 focus:outline-none hover:bg-[#226fb7] rounded text-lg font-medium w-full"
                type="submit"
              >
                Send Message
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Thank you for reaching out. We will contact you soon !
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form1;
