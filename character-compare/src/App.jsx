import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// CSS
import "./App.css";
// Components
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Sidebar from "./assets/components/Sidebar";
// Pages//
/*
import DashboardPage from "./assets/pages/Dashboard";
import NotFoundPage from "./assets/pages/NotFound";
import AboutPage from "./assets/pages/AboutPage";
*/
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
