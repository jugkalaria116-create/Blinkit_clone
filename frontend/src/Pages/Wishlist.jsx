import React from "react";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";

function Wishlist() {
  const navigate = useNavigate();

  // Empty wishlist for now
  const wishlistItems = [];

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-title">Your Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="wishlist-empty">
          <div className="wishlist-icon">🤍</div>
          <p>Your wishlist is currently empty</p>
          <button onClick={() => navigate("/shop")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <span>₹{item.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
