// frontend/src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 text-center p-4 mt-8">
      <p>© {new Date().getFullYear()} StudyGram. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
