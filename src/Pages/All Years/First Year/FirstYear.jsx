import React from "react";
import { Link } from "react-router-dom";

// ------------ SUBJECT CONTENT ---------------

const subjects = [
  {
    id: 1,
    subName: "Digital Electronics",
    webUrl:
      "https://drive.google.com/drive/folders/1sZHxnQdZ6lSNR-giP25GIY4l8nie8Mfr?usp=drive_link",
  },
  {
    id: 2,
    subName: "Maths 1 Sem",
    webUrl:
      "https://drive.google.com/drive/folders/1p5VphPF45coA1M3QzTTRF0wfd-E91joU?usp=drive_link",
  },
  {
    id: 3,
    subName: "Maths 2 Sem",
    webUrl:
      "https://drive.google.com/drive/folders/1oJJ2x7TgpdxaC38fdfEmm6S55YP9KlXG?usp=sharing",
  },
  {
    id: 4,
    subName: "Chemistry",
    webUrl:
      "https://drive.google.com/drive/folders/1agT_ZRoWiCItx8J38EcbMr13nMMJym_x?usp=drive_link",
  },
  {
    id: 5,
    subName: "Applied Physics",
    webUrl:
      "https://drive.google.com/drive/folders/1_iuxjwwPGYWZUowvhe76Uv9rU-y350iu?usp=drive_link",
  },
  {
    id: 6,
    subName: "Computer Science",
    webUrl:
      "https://drive.google.com/drive/folders/1xQH3CVFSRmA7pmkeEzB9MA4AVwQSgFic?usp=drive_link",
  },
  {
    id: 7,
    subName: "Principal of Software System",
    webUrl:
      "https://drive.google.com/drive/folders/1_N-psxPMmBjJNirWaiC5-TwO80HP6_Qn?usp=sharing",
  },
  {
    id: 8,
    subName: "Python Programming",
    webUrl:
      "https://drive.google.com/drive/folders/1K9qbMCMWVardob550SwqFBj2abh_py5B?usp=sharing",
  },
  {
    id: 9,
    subName: "Communication (ENGLISH)",
    webUrl:
      "https://drive.google.com/drive/folders/1tlXkjJd0F_i8Ztqex62EdxFIjFah9Pdi?usp=drive_link",
  },
  {
    id: 9,
    subName: "Data Structure & Algorithm",
    webUrl:
      "https://drive.google.com/drive/folders/1tHZmBWukQfowJk9-zf8OXzMNtE3yr709?usp=drive_link",
  },
];
const FirstYear = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-28 pb-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              1<sup>st</sup> Year - All Subjects
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Access well-organized PDF notes for all core subjects of your
              first year.
            </p>
          </div>

          <div class="flex flex-wrap -m-4">
            {subjects.map((subject) => (
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-200 p-6 rounded-lg">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    {subject.subName}
                  </h2>
                  <div className="flex gap-1 text-blue-500">
                    <Link to={subject.webUrl}>
                      <p class="leading-relaxed text-base border-r-2 sm:pr-2 pr-0">
                        Download Notes
                      </p>
                    </Link>
                    <a href="https://drive.google.com/drive/folders/1LHr-n8VYkNtuUHwZ_i0Thf12U0CAlBdz?usp=sharing">
                      <p class="leading-relaxed text-base pl-2">
                        Download PYQs
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a href="https://wa.me/+918839170393/?text=Hello, I want to more notes..">
            <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Want More? Contact Us
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default FirstYear;
