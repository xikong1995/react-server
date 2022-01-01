import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import About from "./containers/About";

export default (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
  </Routes>
);
