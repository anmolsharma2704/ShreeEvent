import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMediaIcons(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  // Function to close the hamburger menu
  const closeMenu = () => {
    setShowMediaIcons(false);
  };

  // Function to toggle menu and close if already open
  const toggleAndCloseMenu = () => {
    setShowMediaIcons((prevState) => !prevState);
  };

  // Function to close the hamburger menu if open
  const closeIfOpen = () => {
    if (showMediaIcons) {
      setShowMediaIcons(false);
    }
  };

  return (
    <nav className="main-nav">
      {/* 1st logo part */}
      <NavLink to="/" className="logo">
        <img id="logo-img" src={require("./Images/ShreeLogo.png")} alt="" />
      </NavLink>

      {/* 2nd menu part */}
      <div
        ref={menuRef}
        className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              <b>Home</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMenu}>
              <b>Services</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" onClick={closeMenu}>
              <b>Events</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" onClick={closeMenu}>
              <b>Blogs</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              <b>Contact</b>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* 3rd social media links */}
      <div className="social-media">
        <ul className="social-media-desktop">
          <li>
            <a
              href="https://www.instagram.com/shree__event_management7014/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=7014704120&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="Whatsapp" />
            </a>
          </li>
        </ul>

        {/* hamburger menu start */}
        <div className="hamburger-menu">
          <button onClick={toggleMenu}>
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
          {showMediaIcons && (
            <button onClick={closeMenu} className="close-menu-button">
              <span>&times;</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
