import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("finditUsers")) || [];

    const foundUser = users.find(
      user => user.email === email && user.password === password
    );

    if (!foundUser) {
      setError("Invalid email or password. Please register first.");
      return;
    }

    onLogin({
      name: foundUser.name,
      email: foundUser.email,
      roll: foundUser.roll
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-intro">
        <span className="hero-tag">WELCOME BACK</span>
        <h1>Every lost thing has a way <span>back home.</span></h1>
        <p>Sign in to post reports, track your items and connect with your campus.</p>
      </div>

      <div className="auth-card">
        <div className="auth-icon">🎓</div>
        <span className="auth-label">YOUR CAMPUS ACCOUNT</span>
        <h2>Student Sign In</h2>
        <p>Enter your details to continue.</p>

        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="you@college.edu"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          {error && <div className="form-error">{error}</div>}

          <button className="auth-submit" type="submit">
            Login to FindIt →
          </button>
        </form>

        <div className="auth-bottom">
          New to FindIt? <Link to="/register">Create an account</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;