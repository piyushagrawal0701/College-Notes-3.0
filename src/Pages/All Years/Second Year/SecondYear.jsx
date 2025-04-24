import React from "react";
import { Link } from "react-router-dom";

// ------------ SUBJECT CONTENT ---------------

const subjects = [
  {
    id: 1,
    subName: "Computer System Organization",
    webUrl:
      "https://drive.google.com/drive/folders/17Vba7McTZrkBP_n2TRVHsPe_btoGJ4gP?usp=drive_link",
  },
  {
    id: 2,
    subName: "Maths 3 Sem",
    webUrl:
      "https://drive.google.com/drive/folders/16aLHVhEmCpMQ1Pk5pC1WCq5PhvtaCei0?usp=drive_link",
  },
  {
    id: 3,
    subName: "Analysis of design of algorithm",
    webUrl:
      "https://drive.google.com/drive/folders/1ISGcZDyWk2GSLXjEhfbimi8YyIS7Cs1t?usp=drive_link",
  },
  {
    id: 4,
    subName: "Communication system",
    webUrl:
      "https://drive.google.com/drive/folders/100vYyh-JqqBtYRsMbmS6ONyEQgxWk_0a?usp=drive_link",
  },
  {
    id: 5,
    subName: "Object-oriented Programming",
    webUrl:
      "https://drive.google.com/drive/folders/1CLSpYOap4-JUwCWNW6KUCZ7KYnSgQ8ek?usp=drive_link",
  },
  {
    id: 6,
    subName: "Computer Network",
    webUrl:
      "https://drive.google.com/drive/folders/1AOz9dnBYhY7a35SzLiQW6V3oe3wu12dO?usp=drive_link",
  },
  {
    id: 7,
    subName: "Automata & Compiler Design",
    webUrl:
      "https://drive.google.com/drive/folders/1RrywSRufe47nPSj9i5vSnvvuKcMSjzuD?usp=drive_link",
  },
  {
    id: 8,
    subName: "Software Enggineering",
    webUrl:
      "https://drive.google.com/drive/folders/1JAOi_NnJ7tvIMky_wn_nr3xdVb_M3kT9?usp=drive_link",
  },
  {
    id: 9,
    subName: "DBMS",
    webUrl:
      "https://drive.google.com/drive/folders/1xqbWiGc2R988PFWaJOy43gOb24PoucaP?usp=drive_link",
  },
];
const SecondYear = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-28 pb-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              2<sup>nd</sup> Year - All Subjects
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Access well-organized PDF notes for all core subjects of your
              second year.
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
                    <a href="https://drive.google.com/drive/folders/1fELj5HSyAXxO6nzKOLcX-R7Ca-dq-loi?usp=drive_link">
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

export default SecondYear;
