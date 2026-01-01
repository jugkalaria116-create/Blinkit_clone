import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
  const cartItems = [];

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-icon">🛒</div>
          <p>Your cart is currently empty</p>

          {/* ✅ Navigate to Shop page */}
          <button onClick={() => navigate("/shop")}>
            Return To Shop
          </button>
        </div>
      ) : (
        <div className="cart-items"></div>
      )}
    </div>
  );
}

export default Cart;
