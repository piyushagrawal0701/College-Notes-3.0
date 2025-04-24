import React from "react";
import { Link } from "react-router-dom";

// ------------ SUBJECT CONTENT ---------------

const subjects = [
  {
    id: 1,
    subName: "Computer System Organization",
    webUrl: "https://youtu.be/irqbmMNs2Bo?si=zfjEldyOJJ9MwVM1",
  },
  {
    id: 2,
    subName: "Maths 3 Sem",
    webUrl: "https://youtu.be/fqF9M92jzUo?si=g0E56UohhFj-UP5H",
  },
  {
    id: 3,
    subName: "Analysis of design of algorithm",
    webUrl: "https://youtu.be/UmnCZ7-9yDY?si=GaoF-tZTChFgvJGM",
  },
  {
    id: 4,
    subName: "Communication system",
    webUrl:
      "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
  },
  {
    id: 5,
    subName: "Object-oriented Programming",
    webUrl: "https://youtu.be/56xvk6OHTpM?si=jrEN9ujArbmjEnv-",
  },
  {
    id: 6,
    subName: "Computer Network",
    webUrl: "https://youtu.be/HcOc7P5BMi4?si=I50RR4Zdqd1ViWwa",
  },
  {
    id: 7,
    subName: "Automata & Compiler Design",
    webUrl: "https://youtu.be/ESnrn1kAD4E?si=32c2A2gSz2VSOv7g",
  },
  {
    id: 8,
    subName: "Software Enggineering",
    webUrl: "https://youtu.be/VlPiVmYuoqw?si=e8rTb6RtxXJmbq3i",
  },
  {
    id: 9,
    subName: "DBMS",
    webUrl: "https://youtu.be/VlPiVmYuoqw?si=e8rTb6RtxXJmbq3i",
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
                    <p class="leading-relaxed text-base pl-2">Download PYQs</p>
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
