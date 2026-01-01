import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <button onClick={() => navigate("/about")}>About Us</button>
          <button onClick={() => navigate("/contact")}>Contact Us</button>
          <button onClick={() => navigate("/shipping-policy")}>
            Shipping Policy
          </button>
          <button onClick={() => navigate("/refund-policy")}>
            Refund Policy
          </button>
          <button onClick={() => navigate("/privacy-policy")}>
            Privacy Policy
          </button>
          <button onClick={() => navigate("/delivery-info")}>
            Delivery Info
          </button>
          <button onClick={() => navigate("/terms-and-conditions")}>
            Terms & Conditions
          </button>
        </div>

        <div className="footer-center">
          <h2 className="footer-logo">
            Tasty <span>🍲</span> Daily
          </h2>
          <p>
            We're Tasty Daily Shop, an innovative team of food engineers.
          </p>
          <small>© 2023 Tasty Daily Grocery Theme</small>
        </div>

        <div className="footer-right">
          <h3>Get Latest News</h3>
          <div className="newsletter">
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
