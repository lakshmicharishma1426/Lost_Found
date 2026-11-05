import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Find<span>It.</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/browse">Browse Items</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <div className="nav-actions">
        {user ? (
          <>
            <span className="welcome-user">
              Hi, {user.name || "Student"}
            </span>

            <button
              className="nav-login-btn"
              onClick={() => navigate("/report")}
            >
              + Report Item
            </button>

            <button className="nav-admin-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-login-btn">
              Student Login
            </Link>

            <Link to="/admin-login" className="nav-admin-btn">
              Admin Login →
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;