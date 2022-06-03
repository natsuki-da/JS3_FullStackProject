import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Navbar/Home.js";
import About from "./components/Navbar/About.js";
import Contact from "./components/Navbar/Contact.js";
import Project from "./components/Navbar/Project.js";
import Navigationbar from "./components/Navbar/Navigationbar.js";


function App() {
  return (
  <Router>
    <Navigationbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  </Router>
  );
}

export default App;
