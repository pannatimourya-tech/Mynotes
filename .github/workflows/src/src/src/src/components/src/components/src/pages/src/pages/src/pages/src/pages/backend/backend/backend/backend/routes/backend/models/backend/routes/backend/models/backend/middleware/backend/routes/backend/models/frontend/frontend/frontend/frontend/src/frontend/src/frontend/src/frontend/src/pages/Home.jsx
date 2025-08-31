// frontend/src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">📚 Welcome to StudyGram</h1>
      <p className="text-lg mb-6">
        A place to share notes, join the community, and study together — day or night 🌙
      </p>

      <div className="space-x-4">
        <Link
          to="/notes"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          View Notes
        </Link>
        <Link
          to="/community"
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Join Community
        </Link>
      </div>
    </section>
  );
}

export default Home;
