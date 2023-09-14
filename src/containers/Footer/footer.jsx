import React from "react";
import "./footer.css";
import logo from "../../assets/footerLogo.png";
import { FaInstagram, FaTiktok, FaPinterest } from "react-icons/fa";

function footer() {
  return (
    <div className="footer-container">
      <div className="inner-footer_container section-padding">
        <div className="footer-logo_container">
          <img src={logo} />
          <div>
            <h3>Stay metal,</h3>
            <p>The "Masked in Metal" Team</p>
          </div>
        </div>
        <div className="footer-product_container">
          <h2>Our Products</h2>
          <ul>
            <li>Hoodies</li>
            <li>T-Shirts</li>
            <li>Hats</li>
            <li>Accessories</li>
            <li>Vinyls</li>
            <li>CDs</li>
            <li>Posters</li>
            <li>Others</li>
          </ul>
        </div>
        <div className="footer-shipping_container">
          <h2>Shipping & Delivery</h2>
          <ul>
            <li>About Free Shipping</li>
            <li>About Shipping</li>
            <li>Shipping Rates</li>
          </ul>
        </div>
        <div className="footer-about_container">
          <div className="quick-help_container">
            <h2>Quick Help</h2>
            <ul>
              <li>Costumer Service</li>
              <li>Easy Return</li>
              <li>Order Status</li>
            </ul>
          </div>
          <div className="about-container">
            <h2>About Us</h2>
            <ul>
              <li>About Masked In Metal</li>
              <li>Jobs at Masked In Metal</li>
              <li>Investor Relations</li>
            </ul>
          </div>
        </div>
        <div className="contact-container">
          <h2>Contact Us</h2>
          <div className="socials-container">
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaTiktok />
            </a>
            <a>
              <FaPinterest />
            </a>
          </div>
          <p>maskedinmetal@gmail.com</p>
        </div>
      </div>
      <div className="outter-footer">
        <div className="outter-footer_container section-padding">
        <p>© 2023 Masked In Metal Clothing Store, Prishtina, Kosova. All Rights Reserved</p>
        <div className="privacy-container">
          <p>Privacy Policy</p>
          <div className="bar">┃</div>
          <p>Terms and Conditions</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
