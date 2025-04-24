import React, { useEffect } from "react";
import "./faq.css";
// -- ANIMATION ---
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Faq = () => {
  // ANIMATION FUNCTION
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="faq-section bg-[#e9f2fe] max-md:pb-10">
        <div className="accordion ">
          <h1 className="pb-10 max-md:pt-10 font-semibold">
            Frequently Asked <span className="text-[#227db7]">Questions</span>
          </h1>
          <div
            className="accordion-item"
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <input type="checkbox" id="accordion1" />
            <label htmlFor="accordion1" className="accordion-item-title">
              <span className="icon"></span>Where do the notes come from?
            </label>
            <div className="accordion-item-desc">
              Our notes are curated by toppers, seniors, and multiple sources to
              ensure accuracy and relevance.
            </div>
          </div>

          <div
            className="accordion-item"
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <input type="checkbox" id="accordion2" />
            <label htmlFor="accordion2" className="accordion-item-title">
              <span className="icon"></span>Are the notes free to access?
            </label>
            <div className="accordion-item-desc">
              Yes! Most notes are completely free. However, some premium
              resources may require a small subscription fee.
            </div>
          </div>

          <div
            className="accordion-item"
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <input type="checkbox" id="accordion3" />
            <label htmlFor="accordion3" className="accordion-item-title">
              <span className="icon"></span>Can I contribute my own notes?
            </label>
            <div className="accordion-item-desc">
              Absolutely! Students can upload their notes after verification. It
              helps build a helpful community.
            </div>
          </div>

          <div
            className="accordion-item"
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <input type="checkbox" id="accordion4" />
            <label htmlFor="accordion4" className="accordion-item-title">
              <span className="icon"></span>How do I find notes for my specific
              subject or semester?
            </label>
            <div className="accordion-item-desc">
              You can use our search bar or filters to quickly find notes by
              subject name.
            </div>
          </div>

          {/* <div className="accordion-item mb-10">
        <input type="checkbox" id="accordion5"/>
        <label htmlFor="accordion5" className="accordion-item-title"><span className="icon"></span>Can I organize a fundraising event for Bharat Shakti Foundation?</label>
        <div className="accordion-item-desc">Absolutely! We welcome and appreciate the initiative of individuals or groups organizing fundraising events on our behalf. Visit our "Fundraise for Us" page to find guidelines, resources, and information on how to get started.</div>
    </div> */}
        </div>
      </section>
    </>
  );
};

export default Faq;
