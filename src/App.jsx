import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CharacterDetails from "./components/CharacterDetails";
// Pages
import Home from "../src/pages/Home";
import Info from "../src/pages/Info";
import About from "../src/pages/About";
import NotFoundPage from "./pages/NotFound";
import Characters from "../src/pages/Characters";
import Dota from "../src/pages/Dota";
import Lol from "../src/pages/Lol";
// Styles
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Info />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/dota" element={<Dota />} />
            <Route path="/lol" element={<Lol />} />
            <Route path="/characters" element={<Characters />} />
            <Route
              path="/characters/:characterId"
              element={<CharacterDetails />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
