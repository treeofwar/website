import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatCodingPigeon,
  Header
} from "./containers";
import { Cta, Brand, Navbar } from "./Components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />{" "}
        {/* these are the components which are like resuable pieces*/}
      </div>
      <Brand />

      <Possibility />
      <Cta />

      <Footer />
    </div>
  );
};

export default App;
