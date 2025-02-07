import React from "react";
import "../Styling/style.css";
import logo from '../assests/logo.svg'

function Footer() {
  return (
    <>
      <footer
        className="footer"
        style={{ backgroundImage: "url('./assets/images/footer-bg.png')" }}
      >
        <div className="footer-top section">
          <div className="container grid-list">
            {/* Footer Brand Section */}
            <div className="footer-brand">
              <a href="#" className="logo">
                <img
                  src={logo}
                  width="122"
                  height="50"
                  alt="GestureX Logo"
                />
              </a>

              <p className="footer-brand-text">
                GestureX empowers seamless interactions using advanced gesture recognition. 
                Enhance accessibility and redefine how you interact with technology.
              </p>

              <div className="wrapper">
                <span className="span">Location:</span>
                <address className="address">Rawalpindi, Pakistan</address>
              </div>

              <div className="wrapper">
                <span className="span">Call:</span>
                <a href="tel:+1234567890" className="footer-link">
                +923350587032
                </a>
              </div>

              <div className="wrapper">
                <span className="span">Email:</span>
                <a href="mailto:support@gesturex.com" className="footer-link">
janjuasoban71@gmail.com                </a>
              </div>
            </div>

            {/* Explore GestureX Links */}
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Explore GestureX</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </li>
            </ul>

            {/* Quick Links */}
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Quick Links</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
              </li>
            </ul>

            {/* Newsletter and Social Links */}
            <div className="footer-list">
              <p className="footer-list-title">Stay Connected</p>
              <p className="footer-list-text">
                Subscribe to our newsletter for the latest updates and news about GestureX.
              </p>

              <form action="" className="newsletter-form">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  required
                  className="input-field"
                />
                <button type="submit" className="btn has-before">
                  <span className="span">Subscribe</span>
                  <span className="icon">
                    <i className="arrow-forward-outline"></i>
                  </span>
                </button>
              </form>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2025 GestureX. All Rights Reserved. Developed with 💡 by{" "}
              <a href="#" className="copyright-link">
                Muhammad Soban Rasheed
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
