import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import Resume from "./containers/blog/Blog.jsx";
import Home from "./containers/features/Features.jsx";
import CodingPigeon from "./containers/whatCodingPigeon/WhatCodingPigeon.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import "./index.css";
ReactDom.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/CodingPigeon" element={<CodingPigeon />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
