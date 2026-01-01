import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="hero-bar">
      {/* Left */}
      <div className="hero-left">
        <div className="categories">
          <span onClick={() => navigate("/shop")}>🛒 Shop</span>
          <span onClick={() => navigate("/vegetables")}>🥕 Vegetables</span>
          <span onClick={() => navigate("/fruits")}>🍎 Fresh Fruit</span>
        </div>
      </div>

      {/* Center */}
      <div className="hero-logo" onClick={() => navigate("/")}>
        Apna<span>🧺</span>Basket
      </div>

      {/* Right */}
      <div className="hero-right">
        <span onClick={() => navigate("/baking")}>🥐 Baking</span>
        <span onClick={() => navigate("/drinks")}>🥤 Drinks</span>
        <span onClick={() => navigate("/other")}>📦 Other</span>

        <div className="icons">
          <span onClick={() => navigate("/search")}>🔍</span>
          <span onClick={() => navigate("/login")}>👤</span>
          <span onClick={() => navigate("/wishlist")}>🤍</span>
          <span onClick={() => navigate("/cart")}>🛒</span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
