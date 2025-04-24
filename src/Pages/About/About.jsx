import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

// ---------- ANIMATION  ------------

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// ---------- IMPORTING IMAGES ----------

import headerImg from "../../../public/assets/Images/Others/aboutHeroImage1.gif";
import member1 from "../../../public/assets/Images/Others/piyushImg.jpg";
import member2 from "../../../public/assets/Images/Others/member1.jpg";

const About = () => {
  return (
    <>
      {/* ------- HEADER SECTION ( MISSION ) -----------  */}
      <section className="text-gray-600 body-font bg-[#e9f2fe]">
        <div className="container mx-auto justify-center flex max-md:px-4 px-24 gap-16 pt-24 max-md:gap-0 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 max-md:mb-2 py-10 max-md:pt-10 max-md:py-0 ">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={headerImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 sm:w-1/2 flex flex-col md:items-start md:text-left items-center text-center gap-2 mt-6">
            <h1 className="title-font sm:text-5xl text-3xl sm:mb-4 mb-3 font-medium text-gray-900">
              College Notes
            </h1>
            <h1 className="title-font sm:text-4xl text-2xl mb-2 font-medium text-gray-700">
            Where  {" "}
              <span className="text-[#227db7] font-medium">Simplicity</span> {" "}
              meets Smart Learning
            </h1>
            <p className="mb-8 text-gray-500 max-md:pr-0 text-[20px] text-start font-normal">
              At College Notes, we make studying easier with access to high-quality notes, study guides, and past papers—tailored to your college and curriculum. Our organized resources save time and boost grades. Whether you're cramming or prepping early, we’ve got you covered. Let’s make learning stress-free! 🎓
            </p>
            <div className="flex justify-center max-md:pb-12">
              <Link to="/contant">
                <button className="inline-flex text-white bg-[#227db7] font-normal border-0 py-2 px-6 focus:outline-none hover:bg-[#227eb7ef] rounded text-lg">
                  Explore Notes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- OUR VISION --------------  */}

      {/* <section className="text-gray-600 body-font bg-white w-full sm:px-10 px-0 mx-auto ">
        <div className="py-20 max-md:py-10 mx-auto max-md:mx-0 ">
          <div
            className="flex flex-col text-center w-full mb-14 max-md:mb-10"
            data-aos="zoom-out"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-normal">
              Digicatchers
            </p>
            <h1 class="sm:text-5xl text-4xl font-semibold  mb-4 text-gray-900">
              OUR<span class="text-[#227db7] font-semibold"> VISION</span>
            </h1>
          </div>
          <div className="flex flex-wrap mx-auto text-start statistic-box-container">
            <div
              className="sm:p-4 p-4 max-md:py-2  md:w-1/3 sm:w-1/2 w-full"
              data-aos="zoom-up"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg h-[270px] max-md:h-fit overflow-hidden statistic-box">
                <p className="text-6xl text-[#227db7]">
                  <ion-icon
                    name="bulb-outline"
                    className=" text-start text-[#00CB6C] "
                  ></ion-icon>
                </p>
                <h2 className="font-medium text-3xl text-start text-gray-900 mb-2">
                  Innovative Digital Solutions
                </h2>
                <p className="text-start">
                  We are committed to delivering cutting-edge digital marketing
                  and design solutions. Our goal is to empower businesses with
                  creative strategies that enhance their brand presence and
                  drive success.
                </p>
              </div>
            </div>
            <div
              className="sm:p-4 p-4 max-md:py-2 md:w-1/3 sm:w-1/2 w-full"
              data-aos="zoom-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-md:h-fit overflow-hidden trunate h-[270px] statistic-box">
                <p className="text-6xl text-[#227db7]">
                  <ion-icon
                    name="shield-checkmark-outline"
                    className="text-6xl text-[#00CB6C]"
                  ></ion-icon>
                </p>
                <h2 className="font-medium text-3xl text-gray-900 mb-2">
                  Client-Centric Approach
                </h2>
                <p>
                  We believe in building strong partnerships with our clients.
                  By understanding their unique needs, we craft personalized
                  solutions that maximize impact and ensure long-term growth.
                </p>
              </div>
            </div>
            <div
              className="sm:p-4 p-4 max-md:py-2  md:w-1/3 sm:w-1/2  w-full"
              data-aos="zoom-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-md:h-fit h-[270px] overflow-hidden statistic-box">
                <p className="text-6xl text-[#227db7]">
                  <ion-icon
                    name="fitness-outline"
                    className="text-6xl text-[#00CB6C]"
                  ></ion-icon>
                </p>
                <h2 className="font-medium text-3xl text-gray-900 mb-2">
                  Empowering Brands
                </h2>
                <p>
                  Our mission is to help brands thrive in the digital space.
                  Through innovation, expertise, and a results-driven mindset,
                  we create opportunities for businesses to scale and achieve
                  their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ----------- OUR TEAM -------------    */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            className="flex flex-col text-center w-full mb-20"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-gray-900 tracking-widest">
              OUR <span className="text-[#227db7] font-semibold">TEAM</span>
            </h1>
            <p className="lg:w-2/3 mx-auto  sm:text-[24px] text-[20px] font-medium">
              <span className="text-[#227db7] font-medium">Winning</span> with
              heart for the hourly workforce
            </p>
          </div>
          <div className="flex flex-wrap -m-4 max-md:pl-6">
            {/* ----------- 1 ( Abhiruchi Ma'am ) ------------- */}
            {/* <div
              className="p-4 lg:w-1/2 team-member-card"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="h-full flex sm:flex-row flex-col items-start sm:items-center sm:justify-start justify-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-52 object-cover object-center sm:mb-0 mb-4"
                  src={member2}
                />
                <div className="flex-grow sm:pl-8">
                  <h1 className="font-medium text-[24px] text-gray-900">
                    Abhiruchi Mishra
                  </h1>
                  <h1 className="text-[#227db7] font-medium mb-3">
                    Founder/CEO of Digicatchers
                  </h1>
                  <p className="mb-4 font-medium">
                    I am Abhiruchi Mishra, the Founder & CEO of Digicatchers. My
                    vision is to help brands grow through innovative digital
                    marketing and creative strategies. At Digicatchers, we
                    strive to deliver impactful designs and result-driven
                    solutions that make a difference in the digital world."
                  </p>

                  <a href="https://www.linkedin.com/in/abhiruchi-mishra-87017a20a/">
                    <p className="pb-2 -mt-2 text-[#227db7] font-medium cursor-pointer hover:text-blue-500">
                      View Portfolio
                    </p>
                  </a>

                  <span className="inline-flex gap-2">
                    <a href="https://www.linkedin.com/in/abhiruchi-mishra-87017a20a/">
                      <i
                        style={{ transition: "all 0.3s" }}
                        className="fa-brands fa-linkedin-in bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                      ></i>
                    </a>

                    <a href="https://www.instagram.com/whimsruchi/">
                      <i
                        style={{ transition: "all 0.3s" }}
                        className="fa-brands fa-instagram bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                      ></i>
                    </a>

                    <a href="https://wa.me/+919329990233" target="_blank">
                      <i
                        style={{ transition: "all 0.3s" }}
                        className="fa-brands fa-whatsapp bg-[#efefef] p-4 rounded-full hover:bg-[#25D366] hover:text-white"
                      ></i>
                    </a>
                  </span>
                </div>
              </div>
            </div> */}

            {/* ----------- 2 ( Piyush Agrawal ) ------------- */}
            <div
              className="p-2 lg:w-1/2 team-member-card max-md:mb-10"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              <div className="h-full flex sm:flex-row flex-col items-start sm:items-center sm:justify-start justify-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-52 object-contain bg-white sm:mb-0 mb-4"
                  src={member1}
                />
                <div className="flex-grow sm:pl-8">
                  <h1 className="font-medium text-[24px] text-gray-900">
                    Piyush Agrawal
                  </h1>
                  <h1 className="text-[#227db7] font-medium mb-3">
                    Front-end Web Developer
                  </h1>
                  <p className="mb-4 font-medium">
                    Meet Piyush, our skilled web developer and graphics designer
                    with over 2+ year of experience. He is the creative mind
                    behind the captivating front-end of the digicatchers
                    website, showcasing his talent for innovative and
                    user-friendly design.
                  </p>

                  <a href="https://piyushportfolio7.netlify.com">
                    <p className="pb-2 -mt-2 text-[#227db7] font-medium cursor-pointer hover:text-blue-500">
                      View Portfolio
                    </p>
                  </a>

                  <span className="inline-flex gap-2">
                    <a href="https://www.linkedin.com/in/piyushagrawal0701/">
                      <i
                        style={{ transition: "all 0.3s" }}
                        className="fa-brands fa-linkedin-in bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                      ></i>
                    </a>

                    <a href="https://www.instagram.com/piyushagrawal0701/">
                      <i
                        style={{ transition: "all 0.3s" }}
                        className="fa-brands fa-instagram bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                      ></i>
                    </a>

                    <a href="https://wa.me/+918839170393" target="_blank">
                      <i
                        style={{ transition: "all 0.3s" }}
                        className="fa-brands fa-whatsapp bg-[#efefef] p-4 rounded-full hover:bg-[#25D366] hover:text-white"
                      ></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* ----------- ADDRESS -------------  */}
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-10 mx-auto items-center">
          <div
            className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Address
            </h1>
            <p className="leading-relaxed text-base font-normal">
             Civil lines, Vidisha (M.P), India
            </p>
            <a
              className="text-[#227db7] font-medium inline-flex items-center mt-4"
              href=""
            >
              View location
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div
            className="flex flex-col md:w-1/2 md:pl-12 -mt-14 max-md:-mt-2"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Connect us
            </h1>
            {/* SOCIAL LINKS */}
            <div className="flex gap-7 text-[18px] mt-2 text-[#646464] min540:justify-center">
              <a href="mailto:agrawal777piyush@gmail.com">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-solid fa-envelope bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
              </a>

              <a href="tel:+918839170393">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-solid fa-phone bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i>
              </a>

              <a href="https://www.instagram.com/piyushagrawal0701/">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-instagram bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
              </a>

              <a href="https://wa.me/+918839170393" target="_blank">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-whatsapp bg-[#efefef] p-4 rounded-full hover:bg-[#25D366] hover:text-white"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;











