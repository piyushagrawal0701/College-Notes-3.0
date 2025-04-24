import React from "react";

// ------------ SUBJECT CONTENT ---------------

const subjects = [
  {
    id: 1,
    subName: "Digital Electronics",
    pdfName: "Watch Now",
    downloadUrl: "https://youtu.be/irqbmMNs2Bo?si=zfjEldyOJJ9MwVM1",
  },
  {
    id: 2,
    subName: "Maths 1 Sem",
    pdfName: "Watch Now",
    downloadUrl: "https://youtu.be/fqF9M92jzUo?si=g0E56UohhFj-UP5H",
  },
  {
    id: 3,
    subName: "Maths 2 Sem",
    pdfName: "Watch Now",
    downloadUrl: "https://youtu.be/UmnCZ7-9yDY?si=GaoF-tZTChFgvJGM",
  },
  {
    id: 4,
    subName: "Chemistry",
    pdfName: "Watch Now",
    downloadUrl:
      "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
  },
  {
    id: 5,
    subName: "Applied Physics",
    pdfName: "Watch Now",
    downloadUrl: "https://youtu.be/56xvk6OHTpM?si=jrEN9ujArbmjEnv-",
  },
  {
    id: 6,
    subName: "Computer Science",
    pdfName: "Watch Now",
    downloadUrl: "https://youtu.be/HcOc7P5BMi4?si=I50RR4Zdqd1ViWwa",
  },
  {
    id: 7,
    subName: "Software System",
    pdfName: "Watch Now",
    downloadUrl: "https://youtu.be/ESnrn1kAD4E?si=32c2A2gSz2VSOv7g",
  },
  {
    id: 8,
    subName: "Python Programming",
    pdfName: "Watch Now",
    downloadUrl: "https://youtu.be/VlPiVmYuoqw?si=e8rTb6RtxXJmbq3i",
  },
  {
    id: 9,
    subName: "Communication System",
    pdfName: "Watch Now",
    downloadUrl: "https://youtu.be/VlPiVmYuoqw?si=e8rTb6RtxXJmbq3i",
  },
];

const FirstYearNotes = () => {
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              1<sup>st</sup> Year - CLass Notes & Assignment
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Access well-organized PDF notes for all core subjects of your
              first year.
            </p>
          </div>
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              {subjects.map((subject) => (
                <div>
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    {subject.subName}
                  </h2>

                  <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                      {subject.pdfName}
                    </h2>
                    <p class="leading-relaxed">
                      Glossier echo park pug, church-key sartorial biodiesel
                      vexillologist pop-up snackwave ramps cornhole. Marfa 3
                      wolf moon party messenger bag selfies, poke vaporware
                      kombucha lumbersexual pork belly polaroid hoodie portland
                      craft beer.
                    </p>
                    <a
                      class="text-blue-500 inline-flex items-center mt-4"
                      href={subject.downloadUrl}
                    >
                      Download PDF
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstYearNotes;
