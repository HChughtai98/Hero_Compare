import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
// Import other components as needed

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Updated line */}
          <Route path="/about" element={<About />} /> {/* Updated line */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
