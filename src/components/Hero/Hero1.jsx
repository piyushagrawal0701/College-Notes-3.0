import React from "react";
import HeroImg from "../../../public/assets/Images/Components/Hero/Learning.gif";
// import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
const Hero1 = () => {
  
  return (
    <>
      {/* max-md:border-b-2 max-md:border-b border-[#227db7] */}
      <section className="text-gray-600 body-font p-2 sm:pt-24 pt-20 sm:px-16 px-2">
        <div className="container mx-auto flex   pb-0 md:flex-row flex-col items-center hero2-box ">
          <div className="lg:max-w-lg lg:w-full lg:pr-24 md:pr-16 md:w-1/2 w-5/6 ">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={HeroImg}
              loading="eager"         
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-lg text-md font-medium text-[#227db7] max-md:px-1">
            <span className="pr-2 pt-1"><ion-icon name="book"></ion-icon></span>Your Ultimate Study Companion
            </h1>
            <h1 className="title-font sm:text-4xl text-xl sm:mb-4 mb-2 font-semibold text-gray-900 max-md:px-1">
            Find All Your College Notes in One Place
            </h1>
            <h1 className="title-font sm:text-4xl text-lg sm:mb-4 mb-2 font-semibold text-gray-900">
            
              <span className="bg-[#227db7] text-white px-2 py-1">
              Class Notes | Assignments | Previous Year Papers
              </span>
            </h1>
            <div className="mb-4 leading-relaxed font-medium flex sm:gap-2 gap-1 max-md:mt-4 text-wrap">
            Crafted by Students, for Students - All in one place            
            </div>
            <div className="flex justify-center items-center text-center max-md:flex-wrap max-md:gap-4">
              <a href="https://wa.me/+919329990233/?text=Hello, I want to know more about your services..">
                <button className="flex items-center justify-center text-white bg-[#227db7] border-0 py-2 sm:px-6 px-4 w-full text-center max-md:w-[270px] focus:outline-none font-medium hover:bg-[#226fb7] rounded-full text-lg">
                Browse Subjects
                </button>
              </a>
              
              <Link to="/contact">
              <div className="sm:ml-4 ml-0 flex justify-center items-center text-gray-700 bg-gray-100 border-0 py-2 sm:px-6 px-2 focus:outline-none max-md:w-[270px] hover:bg-gray-200 rounded-full font-medium text-lg">
                Contact us
              </div></Link>
            
            </div>
          </div>
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={HeroImg}
            />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero1;
