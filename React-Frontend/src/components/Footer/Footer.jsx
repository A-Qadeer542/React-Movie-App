import React from "react";
import "../../css/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Discover movies, add to your favorites, and explore the world of cinema.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/favourites">Favourites</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@moviesapp.com</p>
          <p>Phone: +4796715695</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>(c) 2024 Movie App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
