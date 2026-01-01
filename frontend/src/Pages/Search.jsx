import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className="search-overlay">
      <span className="close-btn" onClick={() => navigate(-1)}>✕</span>

      <div className="search-content">
        <h1>What Are You Looking For?</h1>

        <input
          type="text"
          placeholder="Start typing..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />

        <div className="search-empty">
          <div className="heart-icon">♡</div>
          <p>Your wishlist is currently empty</p>
          <span>Click the ♡ icons to add products</span>
          <button onClick={() => navigate("/")}>Return To Shop</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
