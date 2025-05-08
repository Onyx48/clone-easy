// Container.jsx
import React from "react";
import Header from "../Header/Header"; // Make sure this import points to your Header component
import Home from "./../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills"; // Make sure Skills is imported

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Add Navigate

function Container() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-[url(https://img.freepik.com/free-vector/gradient-dark-dynamic-lines-background_23-2148995950.jpg?semt=ais_hybrid&w=740)] bg-cover bg-center">
        <Header /> {/* Header is rendered here */}
        <Routes>
          {/* Add a redirect for the base path "/" */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        {/* You might have a Footer here as well */}
      </div>
    </Router>
  );
}

export default Container;
