import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../images/404_page.png";
import "../styling/NotFoundPage.css";

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h2>Oops...</h2>
        <img src={notFoundImage} alt="Page Not Found" />
        <p>
          Sorry, the Heroes are taking a rest. Try a different{" "}
          <Link to="/">page</Link>.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
