import React from "react";

import roadmap from "../../../public/assets/Images/Components/Hero/Roadmap for PC Version.png";


const Hero2 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container sm:px-5 px-4 pt-16 mx-auto sm:block hidden">
          <div className="text-center sm:mb-10 mb-10">
            <img src={roadmap} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
