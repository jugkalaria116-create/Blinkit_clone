import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    alert("Login Successful ✅");
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back 🍲</h2>
        <p className="subtitle">Login to continue shopping</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="📧 Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="🔒 Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p className="register-text">
          New to Tasty Daily?{" "}
          <span onClick={() => navigate("/register")}>Create account</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
