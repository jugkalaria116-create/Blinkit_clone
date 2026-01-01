import React from "react";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>
          Order Tasty Fruits <br /> and Get Free Delivery!
        </h1>
        <p>2500+ Fresh Products</p>
        <button className="explore-btn">🛒 Explore Shop</button>
      </div>
    </section>
  );
}

export default HeroBanner;
