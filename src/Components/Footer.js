import React from "react";
import "./Footer.css"; // Importing CSS file for styling
import {
  FaHeart,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>
          Designed with <FaHeart /> by{" "}
          <a href="https://anmol-sharma.netlify.app/">Techie Anmol</a>
        </h4>
        <h5>Passionately crafted with love and dedication.</h5>

        <li>
          <a
            href="https://www.linkedin.com/in/anmolsharma2704/"
            target="_blank"
            rel="noopener noreferrer"
            id="Linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/anmolsharma2704/"
            target="_blank"
            rel="noopener noreferrer"
            id="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://anmol-sharma.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            id="Website"
          >
            <FaGlobe />
          </a>
        </li>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:shreeevent@gmail.com">shreeevent@gmail.com</a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/shree__event_management7014/"
              target="_blank"
              rel="noopener noreferrer"
              id="Instagram"
            >
              <FaInstagram />
            </a>
            Follow us on Instagram
          </li>
          <li>Phone: +91 7014704120</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
