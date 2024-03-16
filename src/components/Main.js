import React, { useEffect } from "react";
import GLightbox from "glightbox";

import videoSource from "../Video/mountain.mp4"; // Import the path to your video file
import '../App.css'

const Main = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    const handleOutsideClick = (event) => {
      if (!event.target.closest(".glightbox")) {
        lightbox.close();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
    <section
      id="hero"
      className="hero d-flex flex-column justify-content-center align-items-center"
      data-aos="fade"
      data-aos-delay={1600}
    >
      <div className="video-main-bg">
      <video className="video-background"   autoPlay muted loop>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>
              I'm <span>Aditya Kumar Sahu</span>, an Amateur Photographer from Bengaluru
            </h2>
            
            <p>
              I bring the world into focus through my lens, capturing moments that resonate with both precision and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Main;
