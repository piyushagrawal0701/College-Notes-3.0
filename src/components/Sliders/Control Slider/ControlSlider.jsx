import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import "./controlslider.css";

// ------------ IMPORTING IMAGES --------------

import cLang from "../../../../public/assets/Images/Free Courses/c lang.jpeg";
import python from "../../../../public/assets/Images/Free Courses/python lang.jpg";
import java from "../../../../public/assets/Images/Free Courses/java lang.jpg";

import sigmaWeb from "../../../../public/assets/Images/Free Courses/sigmaWeb.jpg";
import flutter from "../../../../public/assets/Images/Free Courses/Flutter.avif";
import html from "../../../../public/assets/Images/Free Courses/html.jpg";

import css from "../../../../public/assets/Images/Free Courses/css.jpg";
import js from "../../../../public/assets/Images/Free Courses/Js.jpg";

// ------------ SLIDER CONTENT ---------------

const projects = [
  {
    id: 1,
    itemName:"C Language",
    urlName: "Watch Now",
    webUrl: "https://youtu.be/irqbmMNs2Bo?si=zfjEldyOJJ9MwVM1",
    imgUrl: cLang,
  },
  {
    id: 2,
    itemName:"Python Crash Course",
    urlName: "Watch Now",
    webUrl: "https://youtu.be/fqF9M92jzUo?si=g0E56UohhFj-UP5H",
    imgUrl: python,
  },
  {
    id: 3,
    itemName:"Java Crash Course",
    urlName: "Watch Now",
    webUrl: "https://youtu.be/UmnCZ7-9yDY?si=GaoF-tZTChFgvJGM",
    imgUrl: java,
  },
  {
    id: 4,
    itemName:"Full Stack Web Dev. Course",
    urlName: "Watch Now",
    webUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
    imgUrl: sigmaWeb,
  },
  {
    id: 5,
    itemName:"Flutter Full Course",
    urlName: "Watch Now",
    webUrl: "https://youtu.be/56xvk6OHTpM?si=jrEN9ujArbmjEnv-",
    imgUrl: flutter,
  },
  {
    id: 6,
    itemName:"HTML",
    urlName: "Watch Now",
    webUrl: "https://youtu.be/HcOc7P5BMi4?si=I50RR4Zdqd1ViWwa",
    imgUrl: html,
 
  },
  {
    id: 7,
    itemName:"CSS",
    urlName: "Watch Now",
    webUrl: "https://youtu.be/ESnrn1kAD4E?si=32c2A2gSz2VSOv7g",
    imgUrl: css,
  },
  {
    id: 8,
    itemName:"JavaScript",
    urlName: "Watch Now",
    webUrl: "https://youtu.be/VlPiVmYuoqw?si=e8rTb6RtxXJmbq3i",
    imgUrl: js,
  }
];

export default function ControlSlider() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const renderContent = () => {
    switch (selectedCategory) {
      case "all":
        return renderAll();
      default:
        return null;
    }
  };

  const renderAll = () => {
    return (
      <div className=" mx-auto max-md:p-1 max-w-screen-xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper mb-0 col-span-10 md:col-span-8 text-sm"
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id} className="sm:py-10 py-0">
              <div className="items-slider-box sm:py-4 pb-2 sm:px-2 px-1">
                <div className="white-box flex flex-col">
                <h1 className="text-xl title-font font-medium text-black">
                    <b>{item.itemName}</b>
                  </h1>
                  {/* <p className="text-md line-clamp-3 font-medium">
                    {" "}
                    {item.desc}
                  </p> */}
                  {/* <p className="text-lg font-semibold text-[#227db7]">
                    <a href={item.webUrl}>{item.urlName}</a>
                  </p> */}
                  <div className="py-3 flex">
                    <a href={item.webUrl}>
                    <img
                      alt="team"
                      className={
                        " rounded-lg w-full object-contain object-center mb-4 " +
                        item.className
                      }
                      src={item.imgUrl}
                    />
                    </a>
                  </div>
                  <p className="text-lg font-semibold text-[#227db7]">
                    <a href={item.webUrl}>{item.urlName}</a>
                  </p>
                </div>
              </div>
              {/* </a> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <div className="slider-section max-md:border-b-2 max-md:border-[#227db7] max-md:pb-6 bg-[#e9f2fe]">
      <section className="text-gray-600 body-font">
        <div className="container max-md:px-3 px-5 sm:py-20 pt-10 mx-auto w-full">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-semibold pb-1  text-black title-bg-heading">
              Free <span className="text-[#227db7]">Courses</span>
            </h1>
            <div className="sm:text-base text-sm leading-relaxed w-1/5 border-t-4 border-[#227db7] rounded-md sm:mb-4 mb-2 mx-auto"></div>

            {/* <div className="flex justify-center -mt-2 pb-2">
              <div className="w-44 h-1 rounded-full bg-[#227db7] inline-flex"></div>
            </div> */}
            <p className="lg:w-2/3 mx-auto text-[#20202C] font-medium leading-relaxed text-md sm:text-[20px]">
            Access beginner-focused courses with notes, projects, and real-world practice.
            </p>
          </div>

          {/* RENDER CONTENT */}
          <div className="w-full sm:py-4 max-md:pb-6">{renderContent()}</div>
        </div>
      </section>
    </div>
  );
}
