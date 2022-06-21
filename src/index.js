import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import Resume from "./containers/blog/Blog.jsx";
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
    </Routes>
  </Router>,

  document.getElementById("root")
);
