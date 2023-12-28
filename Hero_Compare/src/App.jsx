import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CharacterDetails from "./components/CharacterDetails";
// Pages
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Characters from "../src/pages/Characters";
// Styles
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="AppBody">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/characters" element={<Characters />} />
              <Route
                path="/characters/:characterId"
                element={<CharacterDetails />}
              />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
