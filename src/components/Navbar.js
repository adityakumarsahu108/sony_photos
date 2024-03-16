import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Navbar = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const mobileNavToggle = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
  };

  useEffect(() => {
    // Hide mobile nav on same-page/hash links
    document.querySelectorAll("#navbar a").forEach((navbarlink) => {
      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      navbarlink.addEventListener("click", () => {
        closeMobileNav();
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
            <nav id="navbar" className={`navbar ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
              <ul>
                <li>
                  <Link to="/" onClick={closeMobileNav}>Home</Link>
                </li>
                <li>
                  <Link to="/about" className="active" onClick={closeMobileNav}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="active" onClick={closeMobileNav}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="active" onClick={closeMobileNav}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            {/* .navbar */}
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list" onClick={mobileNavToggle} />
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" onClick={mobileNavToggle} />
          </div>
        </header>
        {/* End Header */}
      </div>
    </>
  );
};

export default Navbar;
