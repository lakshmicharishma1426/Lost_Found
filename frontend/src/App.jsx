
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Browse from "./pages/Browse";
import Report from "./pages/Report";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

function App() {
  const navigate = useNavigate();

  // Load items from LocalStorage
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("finditItems")) || [];
    } catch {
      return [];
    }
  });

  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("finditUser")) || null;
    } catch {
      return null;
    }
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("finditAdmin") === "true";
  });

  // Automatically save every item update
  useEffect(() => {
    localStorage.setItem("finditItems", JSON.stringify(items));
  }, [items]);

  const handleStudentLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("finditUser", JSON.stringify(userData));
    navigate("/");
  };

  const handleStudentLogout = () => {
    setUser(null);
    localStorage.removeItem("finditUser");
    navigate("/");
  };

  const handleAdminLogin = () => {
    localStorage.setItem("finditAdmin", "true");
    setIsAdmin(true);
    navigate("/admin");
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("finditAdmin");
    setIsAdmin(false);
    navigate("/admin-login");
  };

  // Add new student report
  const addItem = (newItem) => {
    const item = {
      ...newItem,
      id: Date.now(),
      status: "Pending",
      createdAt: new Date().toISOString()
    };

    setItems(previous => [item, ...previous]);

    alert("Report submitted successfully! Waiting for admin approval.");

    navigate("/browse");
  };

  // Admin updates item status
  const updateItem = (id, updates) => {
    setItems(previous =>
      previous.map(item =>
        String(item.id) === String(id)
          ? { ...item, ...updates }
          : item
      )
    );
  };

  return (
    <>
      <Navbar user={user} onLogout={handleStudentLogout} />

      <Routes>
        <Route path="/" element={<Home items={items} />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/login"
          element={<Login onLogin={handleStudentLogin} />}
        />

        <Route path="/register" element={<Register />} />

        <Route
          path="/browse"
          element={<Browse items={items} />}
        />

        <Route
          path="/report"
          element={
            user
              ? <Report user={user} onAddItem={addItem} />
              : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/admin-login"
          element={<AdminLogin onAdminLogin={handleAdminLogin} />}
        />

        <Route
          path="/admin"
          element={
            isAdmin ? (
              <Admin
                items={items}
                onUpdateItem={updateItem}
                onLogout={handleAdminLogout}
              />
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <footer className="footer">
        <h3>FindIt.</h3>
        <p>Helping campus belongings find their way home.</p>
        <span>© 2026 FindIt | Campus Lost & Found Portal</span>
      </footer>
    </>
  );
}

export default App;
