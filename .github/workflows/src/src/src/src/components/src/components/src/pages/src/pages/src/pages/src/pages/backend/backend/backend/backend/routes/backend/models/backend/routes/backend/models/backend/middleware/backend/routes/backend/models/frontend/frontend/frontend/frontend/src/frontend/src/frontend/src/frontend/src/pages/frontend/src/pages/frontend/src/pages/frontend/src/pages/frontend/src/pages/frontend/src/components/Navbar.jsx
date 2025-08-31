// frontend/src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">📚 StudyGram</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/community">Community</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
