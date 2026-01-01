import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-bar">
        🚚 Delivery on Next Day from 10:00 AM to 08:00 PM
      </div>

      <nav className="navbar">
        <ul className="menu">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/shop")}>Shop</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          <li onClick={() => navigate("/register")}>Register</li>
        </ul>

        <div className="right">
          <span className="phone">📞 +1 900 777525</span>
          <span className="icon">f</span>
          <span className="icon">📷</span>
          <span className="icon">💬</span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
