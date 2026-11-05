import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    roll: "",
    department: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("finditUsers")) || [];

    if (users.some(user => user.email === form.email)) {
      setError("This email is already registered.");
      return;
    }

    const newUser = {
      name: form.name,
      roll: form.roll,
      department: form.department,
      email: form.email,
      password: form.password
    };

    users.push(newUser);
    localStorage.setItem("finditUsers", JSON.stringify(users));

    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <span className="auth-label">JOIN THE CAMPUS COMMUNITY</span>
        <h1>Create Student Account</h1>
        <p>Register to report and find your belongings.</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />

          <label>Roll Number</label>
          <input name="roll" value={form.roll} onChange={handleChange} placeholder="Enter roll number" required />

          <label>Department</label>
          <select name="department" value={form.department} onChange={handleChange} required>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="IT">IT</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
            <option value="Other">Other</option>
          </select>

          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter email" required />

          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Create password" required />

          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm password" required />

          {error && <div className="form-error">{error}</div>}

          <button className="auth-submit" type="submit">
            Create Account →
          </button>
        </form>

        <div className="auth-bottom">
          Already registered? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;