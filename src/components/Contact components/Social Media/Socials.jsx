import React from "react";
import './social.css'

const Socials = () => {
  return (
    <>
      <div
        className="social-media-circle"
        data-aos="zoom-in-up"
        data-aos-delay="1"
        data-aos-duration="1000"
      >
        <div className="main">
          <div className="up">
            <a href="https://www.instagram.com/piyushagrawal0701/">
              <button className="card1 " title="Instagram">
                <p className="instagram"><ion-icon className="instagram" name="logo-instagram"></ion-icon></p>
              </button>
            </a>
            <a href="tel:+91 8839170393">
              <button className="card2" title="Call">
                <p className="linkedin"><ion-icon className="call" name="call"></ion-icon></p>
              </button>
            </a>
          </div>

          <div className="down">
            <a href="mailto:agrawal777piyush@gmail.com">
              <button className="card3" title="twitter">
                <p className="github"><ion-icon className="mail" name="mail"></ion-icon></p>
              </button>
            </a>

            <a href="https://wa.me/+918839170393/?text=Hi, I want to know more about your website ?">
              <button className="card4" title="Whatsapp">
                <p className="whatsapp"><ion-icon className="whatsapp" name="logo-whatsapp"></ion-icon></p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socials;
