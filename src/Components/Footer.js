import React from "react";
import "./Footer.css"; // Importing CSS file for styling
import { FaHeart, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>
          Designed with <FaHeart /> by Anmol Sharma
        </h4>
        <h5>Passionately crafted with love and dedication.</h5>

        <li>
          Email:
          <a href="mailto:2704anmolsharma@gmail.com">
            2704anmolsharma@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/anmolsharma2704/"
            target="_blank"
            rel="noopener noreferrer"
          id="Linkedin">
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/being_anmol2704/"
            target="_blank"
            rel="noopener noreferrer"id="Instagram"
          >
            <FaInstagram />
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
              rel="noopener noreferrer" id="Instagram"
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
