import React, { useEffect, useState, useRef } from "react";
import logo from "../../../public/assets/Logo.png";
import "./Navbar.css";

import { Link, useLocation } from "react-router-dom";

const NavbarFinal = (props) => {
  const location = useLocation();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const mediaSize = 991;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle("hidden-scrolling");
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.classList.remove("hidden-scrolling");
  };

  const handleMenuItemClick = (event) => {
    if (
      event.target.getAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;

      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenu();
      } else {
        if (document.querySelector(".menu-item-has-children.active")) {
          collapseSubMenu();
        }
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  };

  const collapseSubMenu = () => {
    const activeSubMenu = document.querySelector(
      ".menu-item-has-children.active .sub-menu"
    );
    if (activeSubMenu) {
      activeSubMenu.removeAttribute("style");
    }
    const activeMenuItem = document.querySelector(
      ".menu-item-has-children.active"
    );
    if (activeMenuItem) {
      activeMenuItem.classList.remove("active");
    }
  };

  const resizeFix = () => {
    if (isNavOpen) {
      toggleNav();
    }
    if (document.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  };

  window.addEventListener("resize", function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });

  // Close navbar on route change
  useEffect(() => {
    closeNav();
  }, [location]);

  // ------------ HIDING NAVBAR ON SCROLL DOWN ------------
  // const [position, setPosition] = useState(window.pageYOffset);
  // const [visible, setVisible] = useState(true);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     let moving = window.pageYOffset;

  //     setVisible(position > moving);
  //     setPosition(moving);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  return (
    <>
      <section className="max-md:my-0">
        <header className="header">
          <div className="nav-container">
            <div className="header-main">
              <div className="logo sm:-ml-20 ml-6">
                <Link to="/" className="flex flex-row items-center w-[200px]">
                  {/* <img
                    src={logo}
                    alt=""
                    className="sm:w-[5vw] w-[17vw] sm:h-auto h-full mr-2 "
                  /> */}
                  <h1 className="sm:text-xl text-lg text-[#333333] w-full">
                    College Notes
                  </h1>
                </Link>
              </div>

              {/* ----------- MOBILE VERSION CHAT NOW BUTTON ----------  */}

              <div className="sm:hidden flex py-2 -ml-8">
                {/* <div
                  type="submit"
                  className="inline-block rounded-full bg-[#227db7] hover:bg-[#226fb7] px-5 py-2 text-sm font-medium text-white w-24 try-now-pulse"
                >
                  <ChatNowModal />
                </div> */}
              </div>
              <div
                className={`open-nav-menu ${isNavOpen ? "active" : ""}`}
                onClick={toggleNav}
              >
                <span></span>
              </div>
              <div
                className={`menu-overlay ${isNavOpen ? "active" : ""}`}
                onClick={closeNav}
              ></div>
              {/* <!-- navigation menu start --> */}
              <nav className={`nav-menu ${isNavOpen ? "open" : ""}`}>
                <div className="close-nav-menu " onClick={closeNav}>
                  X
                </div>
                <ul className="menu">
                  <li
                    className="menu-item"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                  >
                    <Link to="/home">
                      <div className="flex gap-1 items-center ">
                        <p className="pt-1">
                          {" "}
                          <ion-icon name="home"></ion-icon>
                        </p>
                        Home
                      </div>
                    </Link>
                  </li>

                  <li
                    to="/"
                    className="menu-item menu-item-has-children "
                    onClick={handleMenuItemClick}
                  >
                    <a href="#" data-toggle="sub-menu">
                      <div
                        className="flex gap-1 items-center"
                        data-toggle="sub-menu"
                      >
                        <p className="pt-1">
                          <ion-icon name="bag-remove"></ion-icon>
                        </p>
                        Class Notes <i className="plus mt-1"></i>
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link to="/firstyear-allsubjects">
                          <div className="flex gap-2 items-center">
                            <p className="pt-1">
                              <ion-icon name="laptop"></ion-icon>
                            </p>
                            First Year
                          </div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/secondyear-allsubjects">
                          <div className="flex gap-2 items-center">
                            <p className="pt-1">
                              <ion-icon name="analytics"></ion-icon>
                            </p>
                            Second Year
                          </div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/thirdyear-allsubjects">
                          <div className="flex gap-2 items-center">
                            <p className="pt-1">
                              <ion-icon name="aperture"></ion-icon>
                            </p>
                            Third Year
                          </div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/fourthyear-allsubjects">
                          <div className="flex gap-2 items-center">
                            <p className="pt-1">
                              <ion-icon name="globe"></ion-icon>
                            </p>
                            Fourth Year
                          </div>
                        </Link>
                      </li>

                      <li className="menu-item">
                        <a href="#">
                          <div className="flex gap-2 items-center">
                            <p className="pt-1">
                              <ion-icon name="apps"></ion-icon>
                            </p>
                            Others
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="menu-item"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="150"
                  >
                    <Link to="/faq">
                      <div className="flex gap-1 items-center">
                        <p className="pt-1">
                          {" "}
                          <ion-icon name="help-circle"></ion-icon>
                        </p>
                        Faq
                      </div>
                    </Link>
                  </li>
                  <li
                    className="menu-item"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="150"
                  >
                    <Link to="/about">
                      <div className="flex gap-1 items-center">
                        <p className="pt-1">
                          {" "}
                          <ion-icon name="person"></ion-icon>
                        </p>
                        About
                      </div>
                    </Link>
                  </li>

                  <li
                    className="menu-item"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                  >
                    <Link to="/contact">
                      <div className="flex gap-1 items-center">
                        <p className="pt-1">
                          {" "}
                          <ion-icon name="call"></ion-icon>
                        </p>
                        Contact us
                      </div>
                    </Link>
                  </li>
                  {/* <li className="menu-item">
                  <a href="#">Contact</a>
                </li> */}
                </ul>
              </nav>
              {/* <!-- navigation menu end --> */}
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default NavbarFinal;
