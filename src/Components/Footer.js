// Footer.js
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Footer.css'; // Importing CSS file for styling

function Footer() {
 

  return (
    <footer className="footer">
      
      <div className="footer-section">
        <h4><FavoriteIcon/>Designed by Anmol Sharma with <i className="fa-solid fa-heart"></i></h4>
        <p>Passionately crafted with love and dedication.</p>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <ul>
          <p>Email: shreeevent@gmail.com</p>
          <p>Phone: +91 7014704120</p>
          </ul>
      </div>
    </footer>
  );
}

export default Footer;
