// frontend/src/pages/Profile.jsx
import React from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest",
    email: "guest@example.com",
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">👤 Profile</h2>

      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow max-w-md">
        <p>
          <span className="font-bold">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-bold">Email:</span> {user.email}
        </p>

        <button
          onClick={handleLogout}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </section>
  );
}

export default Profile;
