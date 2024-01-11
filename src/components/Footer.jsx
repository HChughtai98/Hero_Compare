import React, { useState } from "react";
// Styling //
import "../styling/Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  };

  return (
    <footer>
      <a
        href="https://github.com/HChughtai98/Hero_Compare"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository
      </a>
      <button onClick={scrollToTop} className="back-to-top-button">
        Back to Top
      </button>
    </footer>
  );
}

export default Footer;
