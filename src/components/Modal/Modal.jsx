import React from "react";
import "./modal.css";
const Modal = () => {
  return (
    <>
      <a href="#demo-modal">
        <div className="wrapper">Get Consulation</div>
      </a>

      <div id="demo-modal" className="modal">
        <div className="modal__content z-10">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Message Now</h1>

              <p className="mt-4 text-gray-500 text-md">
                We will contact you soon!
              </p>
            </div>

            <form
              action="https://formsubmit.co/abnsl0014@gmail.com"
              method="post"
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              {/* ----------- NAME ----------  */}

              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    name="Username"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* ----------- MOBILE NO ----------  */}

              <div>
                <label htmlFor="name" className="sr-only">
                  Mobile no.
                </label>

                <div className="relative">
                  <input
                    type="number"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    name="phone"
                    placeholder="Enter phone no."
                  />
                </div>
              </div>

              {/* ----------- EMAIL ----------  */}

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    name="email"
                    placeholder="Enter email"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* <div>
                <label htmlFor="password" className="sr-only">
                  What you want
                </label>

                <div className="relative">
                  <select
                    name="what_they_want"
                    id="what-they-want"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  >
                    <option value="website">Website</option>
                    <option value="app">App</option>
                  </select>
                </div>
              </div> */}

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  <a className="underline" href="#"></a>
                </p>
                <input type="hidden" name="_captcha" value="false" />
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-[#227db7] hover:bg-[#226fb7] px-5 py-3 text-sm font-medium text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <a href="#" className="modal__close text-xl">
            <p className="text-3xl">&times;</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;
