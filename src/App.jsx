import React, { useState, useEffect } from "react";

import "./App.css";
import NavbarFinal from "./components/Navbar/Navbar_Final";
import ScrollToTop from "./components/Scroll to top/ScrollToTop";
import Home from "./Pages/Home/Home";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

// -- ANIMATION ---
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import FirstYear from "./Pages/All Years/First Year/FirstYear";
import SecondYear from "./Pages/All Years/Second Year/SecondYear";
import ThirdYear from "./Pages/All Years/Third Year/ThirdYear";
import FourthYear from "./Pages/All Years/Fourth Year/FourthYear";
AOS.init();

function App() {
  // ANIMATION FUNCTION
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      
        {/* // Render your main content once isLoading is false */}
        <div className="App">
          <NavbarFinal />
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />


          {/* ----------------- ALL YEARS ------------------  */}

          
            <Route path="/firstyear-allsubjects" element={<FirstYear/>} />
            <Route path="/secondyear-allsubjects" element={<SecondYear/>} />
            <Route path="/thirdyear-allsubjects" element={<ThirdYear/>} />
            <Route path="/fourthyear-allsubjects" element={<FourthYear/>} />
            {/* <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} /> */}
          </Routes>
          <Faq />
          <Footer />
          
        </div>
  
    </>
  );
}

export default App;
