import React from "react";
import Navbar from "./Navbar";
import HeroImg from '../img/hero-infron2.jpeg'
const Banner = () => {
  return (
    <>
      <header>
        <Navbar />
        <section id="home" className="max-width typedBody">
          <div className="img">
            <img src={HeroImg} alt="" />
          </div>
          <div>
           
            <div>
              <h1>I am Junayed Al Hasan</h1>
              <span> Writer </span> - 
              <span> Teacher </span> - 
              <span> Blogger </span>
            </div>
            
            <a href="#about-me">
              <div className="scroll-down"></div>
            </a>
          </div>
        </section>
      </header>
    </>
  );
};

export default Banner;
