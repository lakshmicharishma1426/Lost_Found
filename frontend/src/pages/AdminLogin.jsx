
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin({ onAdminLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === "admin@findit.com" &&
      password === "Admin@123"
    ) {
      setError("");
      onAdminLogin();
    } else {
      setError("Invalid admin email or password.");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">

        <div className="admin-login-icon">🛡️</div>

        <span className="admin-label">
          FINDIT ADMINISTRATION
        </span>

        <h1>Admin Login</h1>

        <p className="admin-subtitle">
          Login to manage campus lost and found reports.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Admin Email</label>

          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          <button
            className="admin-submit-btn"
            type="submit"
          >
            Login to Dashboard →
          </button>
        </form>

        <button
          className="back-home-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

      </div>
    </div>
  );
}

export default AdminLogin;
