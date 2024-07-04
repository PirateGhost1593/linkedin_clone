import React from "react";
import "./app.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Body from "./components/Body.js";
import Profile from "./components/Profile.js";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Body />} />

        <Route path="myprofile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
