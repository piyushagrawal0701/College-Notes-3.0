import React from "react";
import { Link } from "react-router-dom";

// ------------ SUBJECT CONTENT ---------------

const subjects = [
  {
    id: 1,
    subName: "Mobile Application Development",
    webUrl:
      "https://drive.google.com/drive/folders/1cwlryABTHCNhzCGJhj-Cn4p3XVwPIbef?usp=sharing",
  },
  {
    id: 2,
    subName: "Digital Image Processing",
    webUrl:
      "https://drive.google.com/drive/folders/1546XffZ8fnVDeCHPavh1SnLkZKyHQc6y?usp=drive_link",
  },
  {
    id: 3,
    subName: "Artificial Intelligence",
    webUrl:
      "https://drive.google.com/drive/folders/1bPwpGaX0zd9PtLFx3IktglGWJTmp8Ryn?usp=drive_link",
  },
  {
    id: 4,
    subName: "A Practical Approach of English",
    webUrl:
      "https://drive.google.com/drive/folders/1I6hYHxIQSRhvT1FDCM_Km8b1P_Jqd1-9?usp=drive_link",
  },
  {
    id: 5,
    subName: "Wireless & Mobile Computing",
    webUrl:
      "https://drive.google.com/drive/folders/1-l48PWwH4lUJcmsWNWjsuIhSUOEF4Cm1?usp=sharing",
  },
  {
    id: 6,
    subName: "Data Mining & Warehousing",
    webUrl:
      "https://drive.google.com/drive/folders/1H9tYSbHrSuLv09ns8MSc9WO_McHJXAF4?usp=drive_link",
  },
  {
    id: 7,
    subName: "Cloud Computing",
    webUrl:
      "https://drive.google.com/drive/folders/1C_ilVZg7aeSUTEPbKcqWDfu-9lZs7rte?usp=drive_link",
  },
  {
    id: 8,
    subName: "Information Security",
    webUrl:
      "https://drive.google.com/drive/folders/1jflIokaNi5eB4NtZ_o1dZd3c_VOCRb60?usp=drive_link",
  },
  {
    id: 9,
    subName: "Web Application Development",
    webUrl:
      "https://drive.google.com/drive/folders/1N1yQ6OJLPTX5603f2RQaB5dq2lpRZHCp?usp=drive_link",
  },
];
const ThirdYear = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-28 pb-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              3<sup>rd</sup> Year - All Subjects
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Access well-organized PDF notes for all core subjects of your
              third year.
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
                    <a href="https://drive.google.com/drive/folders/1fvFHMNbvCSsosuzFzuwydbWVkH6NI0sC?usp=sharing">
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

export default ThirdYear;
