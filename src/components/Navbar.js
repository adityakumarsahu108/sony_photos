import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';


const mobileNavToggle = () => {
  const bodyElement = document.querySelector("body");
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  if (bodyElement) {
    bodyElement.classList.toggle("mobile-nav-active");
  }

  if (mobileNavShow && mobileNavHide) {
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }
};
const mobNavHide =()=>{
  const mobileNavHide = document.querySelector(".mobile-nav-hide");
  mobileNavHide.classList.toggle("d-none");

}
const Navbar = () => {
  useEffect(() => {
    // Mobile nav toggle
    document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
      el.addEventListener("click", function (event) {
        event.preventDefault();
        mobileNavToggle();
      });
    });

    // Hide mobile nav on same-page/hash links
    document.querySelectorAll("#navbar a").forEach((navbarlink) => {
      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      navbarlink.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToggle();
        }
      });
    });

    // Toggle mobile nav dropdowns
    const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

    navDropdowns.forEach((el) => {
      el.addEventListener("click", function (event) {
        if (document.querySelector(".mobile-nav-active")) {
          event.preventDefault();
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("dropdown-active");

          let dropDownIndicator = this.querySelector(".dropdown-indicator");
          dropDownIndicator.classList.toggle("bi-chevron-up");
          dropDownIndicator.classList.toggle("bi-chevron-down");
        }
      });
    });
  }, []); 
  return (
    <>
      <div>
        <header id="header" className="header d-flex align-items-center fixed-top">
          <div className="container-fluid d-flex align-items-center justify-content-evenly">
            <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
              {/* <img src="assets/img/logo.png" alt=""> */}
              <i className="bi bi-camera" />
              <h1>Aditya kumar sahu</h1>
            </Link>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <Link to="/" onClick={{mobNavHide}}>Home</Link>
                </li>
                <li>
                  <Link to="/about" className="active" onClick={{mobNavHide}}>
                    About
                  </Link>
                </li>
                <li >
                  <Link to="/gallery" className="active" onClick={{mobNavHide}}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="active" onClick={{mobNavHide}}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            {/* .navbar */}
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
          </div>
        </header>
        {/* End Header */}
      </div>
    </>
  );
};

export default Navbar;
