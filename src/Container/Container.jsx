import React from "react";
import Header from "../Header/Header";
import Home from "./../Home/Home";
import About from "../About/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Container() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-[url(https://img.freepik.com/free-vector/gradient-dark-dynamic-lines-background_23-2148995950.jpg?semt=ais_hybrid&w=740)] bg-cover bg-center">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Container;


