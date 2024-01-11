import React from "react";
import { Link } from "react-router-dom";
// Styling //
import "../styling/NotFoundPage.css";
// Image //
import notFoundImage from "../images/404_page.png";

function NotFound() {
  return (
    // Container for the not-found page
    <div className="not-found-page">
      <div className="not-found-content">
        <h2>Oops...</h2>
        <img src={notFoundImage} alt="Page Not Found" />
        <p>
          Sorry, it seems the Heroes are taking a break. Please try a different{" "}
          <Link to="/">page</Link>.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
