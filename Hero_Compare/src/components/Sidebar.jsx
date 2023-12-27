import React from "react";
import { Link } from "react-router-dom"; // This is for routing
import "../styling/Sidebar.css";

function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
